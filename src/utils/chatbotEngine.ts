import { packagesDatabase } from '../pages/PackageDetails';

// --- Type Definitions ---
export type PackageSummary = {
  id: string;
  title: string;
  destination: string;
  duration: string;
  // 🔧 FIX: was `travelerType: string` — a package could only ever be tagged with ONE
  // traveler type, and nothing was ever auto-tagged as 'Solo', so searching by "Solo"
  // always returned zero results. Changed to an array so one package can legitimately
  // serve multiple traveler types (e.g. a general package suits Family, Friends, AND Solo).
  travelerTypes: string[];
  hotelCategory: string;
  food: string;
  places: string;
  price: string;
  normalizedTokens: string[];
};

export type IntentType = 'A' | 'B' | 'C' | 'D';

export type ChatState = {
  awaitingDestination: boolean;
  awaitingTravelerType: boolean;
  awaitingDuration: boolean;
  collectedDestination?: string;
  collectedTravelerType?: string;
  collectedDuration?: string;
};

export const INITIAL_STATE: ChatState = {
  awaitingDestination: false,
  awaitingTravelerType: false,
  awaitingDuration: false,
};

// --- Dictionaries & Aliases ---
const DESTINATION_ALIASES: Record<string, string> = {
  'kodaikanal': 'Kodaikanal', 'kodikanal': 'Kodaikanal', 'kodikalan': 'Kodaikanal', 'kodikanla': 'Kodaikanal', 'kodaikkanal': 'Kodaikanal', 'kodikanala': 'Kodaikanal', 'kodai': 'Kodaikanal',
  'ooty': 'Ooty', 'utty': 'Ooty', 'udhagamandalam': 'Ooty', 'udagamandalam': 'Ooty', 'ootty': 'Ooty',
  'munnar': 'Munnar', 'munar': 'Munnar', 'munnaar': 'Munnar',
  'kerala': 'Kerala', 'keral': 'Kerala', 'kerla': 'Kerala',
  'goa': 'Goa', 'gova': 'Goa',
  'shirdi': 'Shirdi', 'sirdi': 'Shirdi',
  'andaman': 'Andaman', 'andhaman': 'Andaman',
  'manali': 'Manali', 'kullu': 'Manali',
  'shimla': 'Shimla', 'simla': 'Shimla',
  'kashmir': 'Kashmir', 'srinagar': 'Kashmir',
  'mysore': 'Mysore', 'mysuru': 'Mysore',
  'coorg': 'Coorg', 'kodagu': 'Coorg',
  'madurai': 'Madurai',
  'rameswaram': 'Rameswaram', 'rameshwaram': 'Rameswaram',
  'kanyakumari': 'Kanyakumari',
  'alleppey': 'Alleppey', 'alappuzha': 'Alleppey',
  'thekkady': 'Thekkady', 'periyar': 'Thekkady',
  'wayanad': 'Wayanad'
};

const TYPE_ALIASES: Record<string, string> = {
  'honeymoon': 'Honeymoon', 'hunnymoon': 'Honeymoon', 'honey moon': 'Honeymoon', 'couple': 'Honeymoon', 'romantic': 'Honeymoon',
  'family': 'Family', 'kids': 'Family', 'parents': 'Family',
  'friends': 'Friends', 'bachelors': 'Friends', 'group': 'Friends',
  'solo': 'Solo', 'single': 'Solo',
  'corporate': 'Corporate', 'office': 'Corporate', 'team': 'Corporate'
};

const DURATION_ALIASES: Record<string, string> = {
  '1 day': '1 Day', '1 days': '1 Day', 'oneday': '1 Day', 'one day': '1 Day', '1day': '1 Day', 'day trip': '1 Day',
  '2 day': '2 Days', '2 days': '2 Days', 'twodays': '2 Days', 'two days': '2 Days', '2day': '2 Days', 'weekend': '2 Days',
  '3 day': '3 Days', '3 days': '3 Days', 'threedays': '3 Days', 'three days': '3 Days', '3day': '3 Days',
  '4 day': '4 Days', '4 days': '4 Days', 'four days': '4 Days', 'four day': '4 Days', '4day': '4 Days',
  '5 day': '5 Days', '5 days': '5 Days', 'fivedays': '5 Days', 'five days': '5 Days', '5day': '5 Days',
  '6 day': '6 Days', '6 days': '6 Days', 'six days': '6 Days', '6day': '6 Days',
  '7 day': '7 Days', '7 days': '7 Days', 'sevendays': '7 Days', 'seven days': '7 Days', '7day': '7 Days',
  '4+ day': '4+ Days', '4+ days': '4+ Days', '4 or more days': '4+ Days',
  'week': '7+ Days', 'long': '4+ Days'
};

// --- Initialization & Caching ---
let packageIndex: PackageSummary[] | null = null;
let allDestinations: Set<string> = new Set();

function normalize(text: string): string {
  return (text || '').toLowerCase().replace(/[^a-z0-9+\s]/g, '').replace(/\s+/g, ' ').trim();
}

function extractKeywords(text: string): string[] {
  const words = normalize(text).split(' ');
  const stopWords = new Set(['in', 'to', 'for', 'a', 'the', 'of', 'and', 'with', 'trip', 'package', 'tour', 'travel']);
  return words.filter(w => w.length > 1 && !stopWords.has(w));
}

function buildIndex() {
  if (packageIndex) return;
  packageIndex = [];

  for (const [id, pkg] of Object.entries(packagesDatabase)) {
    if (!pkg || typeof pkg !== 'object' || !pkg.title) continue;

    // Extract fields carefully
    const title = pkg.title || '';
    const overview = pkg.overview || {};
    const destination = overview.destination || '';
    const duration = overview.duration || '';
    const themes = overview.themes || '';
    const price = pkg.priceDetails?.amount || 'Ask on WhatsApp';
    const hotel = pkg.hotels ? 'Available' : 'Standard';

    // 🔧 FIX: Auto-detect traveler type(s) from themes and title — as an ARRAY now.
    // Previously this only ever produced ONE of 'Family/Friends' | 'Honeymoon' | 'Solo' |
    // 'Corporate', and 'Solo' was only reachable if the word "solo" literally appeared in
    // `themes` — which it almost never does in real package data. That meant a "Solo"
    // search matched nothing. Now: general packages are tagged for Family, Friends, AND
    // Solo by default (since a solo traveler can usually book a standard package too),
    // and only Honeymoon / Corporate packages get narrowed down to that single type.
    let travelerTypes: string[] = ['Family', 'Friends', 'Solo'];
    if (themes.toLowerCase().includes('honeymoon') || title.toLowerCase().includes('honeymoon')) {
      travelerTypes = ['Honeymoon'];
    } else if (themes.toLowerCase().includes('corporate') || title.toLowerCase().includes('corporate')) {
      travelerTypes = ['Corporate'];
    }

    // Build normalized tokens
    const tokens = new Set<string>([
      ...extractKeywords(title),
      ...extractKeywords(destination),
      ...extractKeywords(themes)
    ]);

    const summary: PackageSummary = {
      id,
      title,
      destination,
      duration,
      travelerTypes,
      hotelCategory: hotel,
      food: 'Available (Check details)',
      places: destination,
      price,
      normalizedTokens: Array.from(tokens)
    };

    packageIndex.push(summary);

    const destTokens = extractKeywords(destination);
    for (const t of destTokens) {
      if (t.length > 4) {
        const canonical = DESTINATION_ALIASES[t] || t.charAt(0).toUpperCase() + t.slice(1);
        allDestinations.add(canonical);
      }
    }
  }
}

// --- Levenshtein Distance ---
function levenshtein(a: string, b: string): number {
  const matrix = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
    }
  }
  return matrix[a.length][b.length];
}

// --- NLP Engine ---
export function parseInput(input: string, state: ChatState) {
  buildIndex();
  const normalized = normalize(input);
  const words = normalized.split(' ');

  let foundDestinations = new Set<string>();
  let foundTypes = new Set<string>();
  let foundDurations = new Set<string>();

  // Greedy alias matching
  for (const word of words) {
    if (DESTINATION_ALIASES[word]) foundDestinations.add(DESTINATION_ALIASES[word]);
    if (TYPE_ALIASES[word]) foundTypes.add(TYPE_ALIASES[word]);
    if (DURATION_ALIASES[word]) foundDurations.add(DURATION_ALIASES[word]);
  }

  // Check multi-word durations
  for (const [alias, canonical] of Object.entries(DURATION_ALIASES)) {
    if (normalized.includes(alias)) foundDurations.add(canonical);
  }

  // Check multi-word types
  for (const [alias, canonical] of Object.entries(TYPE_ALIASES)) {
    if (normalized.includes(alias)) foundTypes.add(canonical);
  }

  // Dynamic duration detection.
  // Supports: 4 day, 4 days, 6 days, 10 day trip, 4+ days, etc.
  const plusDurationMatch = normalized.match(/\b(\d+)\s*\+\s*days?\b/);
  const numericDurationMatch = normalized.match(/\b(\d+)\s*days?\b/);

  if (plusDurationMatch) {
    foundDurations.add(`${parseInt(plusDurationMatch[1], 10)}+ Days`);
  } else if (numericDurationMatch) {
    const days = parseInt(numericDurationMatch[1], 10);
    foundDurations.add(`${days} Day${days === 1 ? '' : 's'}`);
  }

  // State updates for Intent C
  let newState = { ...state };
  if (state.awaitingDestination && foundDestinations.size > 0) {
    newState.collectedDestination = Array.from(foundDestinations)[0];
    newState.awaitingDestination = false;
  } else if (state.awaitingDestination && !foundDestinations.size) {
    // Treat the whole input as a fuzzy destination if possible
    const bestFuzzy = fuzzyMatchWord(words[0], Object.keys(DESTINATION_ALIASES));
    if (bestFuzzy) {
      newState.collectedDestination = DESTINATION_ALIASES[bestFuzzy];
      newState.awaitingDestination = false;
      foundDestinations.add(DESTINATION_ALIASES[bestFuzzy]);
    }
  }

  if (state.awaitingTravelerType && foundTypes.size > 0) {
    newState.collectedTravelerType = Array.from(foundTypes)[0];
    newState.awaitingTravelerType = false;
  }

  if (state.awaitingDuration && foundDurations.size > 0) {
    newState.collectedDuration = Array.from(foundDurations)[0];
    newState.awaitingDuration = false;
  }

  return { foundDestinations, foundTypes, foundDurations, newState, tokens: extractKeywords(input), isVague: normalized.includes('plan') || normalized.includes('package') || normalized.includes('trip') };
}

function fuzzyMatchWord(word: string, dictionary: string[]): string | null {
  let bestMatch = null;
  let bestScore = 999;

  // 🔧 FIX: a flat "distance <= 2" threshold let short, unrelated
  // words fuzzy-match each other — e.g. "usa" (3 letters) was
  // matching "goa" at distance 2, silently treating a USA request
  // as a Goa request. The allowed distance now scales with word
  // length: short words need a near-exact match, longer words can
  // still tolerate a couple of typos.
  const maxAllowedDistance = word.length <= 4 ? 1 : 2;

  for (const dictWord of dictionary) {
    if (Math.abs(word.length - dictWord.length) > 3) continue;
    const dist = levenshtein(word, dictWord);
    if (dist <= maxAllowedDistance && dist < bestScore) {
      bestScore = dist;
      bestMatch = dictWord;
    }
  }
  return bestMatch;
}

function getPackageDays(duration: string): number {
  const value = normalize(duration);

  // Numeric formats: "1 Day", "3 Days / 2 Nights", "4 Days"
  const numericMatch = value.match(/\b(\d+)\s*days?\b/);
  if (numericMatch) return parseInt(numericMatch[1], 10);

  // Word formats: "One Day", "Two Days", etc.
  const wordDays: Record<string, number> = {
    one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, ten: 10
  };

  const wordMatch = value.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\s*days?\b/);
  if (wordMatch) return wordDays[wordMatch[1]];

  return 0;
}

export function searchPackages(
  destinations: Set<string>,
  types: Set<string>,
  durations: Set<string>,
  tokens: string[]
): PackageSummary[] {
  buildIndex();
  let results = [...(packageIndex || [])];

  // 1. Destination is a hard filter.
  if (destinations.size > 0) {
    const destArray = Array.from(destinations);

    results = results.filter(pkg =>
      destArray.some(destination =>
        pkg.destination.toLowerCase().includes(destination.toLowerCase()) ||
        pkg.title.toLowerCase().includes(destination.toLowerCase())
      )
    );
  }

  // 2. Traveler type is optional. If supplied, filter by it.
  if (types.size > 0) {
    const typeArray = Array.from(types);

    results = results.filter(pkg =>
      typeArray.some(type => pkg.travelerTypes.includes(type))
    );
  }

  // 3. Duration is a hard filter.
  // Exact search: "1 Day" matches only 1-day packages.
  // Range search: "4+ Days" matches 4 days and above.
  // Package data may say "One Day" or "3 Days / 2 Nights", so always
  // convert the package duration into a numeric day count first.
  if (durations.size > 0) {
    const durationArray = Array.from(durations);

    results = results.filter(pkg => {
      const packageDays = getPackageDays(pkg.duration);

      return durationArray.some(requestedDuration => {
        const rangeMatch = requestedDuration.match(/^(\d+)\+\s*Days$/i);
        if (rangeMatch) {
          return packageDays >= parseInt(rangeMatch[1], 10);
        }

        const exactMatch = requestedDuration.match(/^(\d+)\s*Days?$/i);
        if (exactMatch) {
          return packageDays === parseInt(exactMatch[1], 10);
        }

        return false;
      });
    });
  }

  // 4. Token score is ONLY used for ordering.
  // Never remove a package that already passed the hard filters.
  if (tokens.length > 0) {
    results.forEach(pkg => {
      let score = 0;

      for (const token of tokens) {
        if (
          pkg.normalizedTokens.some(
            packageToken =>
              packageToken.includes(token) ||
              levenshtein(packageToken, token) <= 1
          )
        ) {
          score += 10;
        }
      }

      (pkg as any)._matchScore = score;
    });

    results.sort(
      (a, b) => ((b as any)._matchScore || 0) - ((a as any)._matchScore || 0)
    );
  }

  return results;
}