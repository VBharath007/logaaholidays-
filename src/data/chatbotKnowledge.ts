// ============================================================
// LOGAA HOLIDAYS – Complete Chatbot Knowledge Base
// Every URL, keyword, destination, and service from the site
// ============================================================

export type KnowledgeEntry = {
  name: string;
  url: string;
  keywords: string[];
  description: string;
  type: 'destination' | 'package-category' | 'service' | 'page';
};

export const siteKnowledge: KnowledgeEntry[] = [

  // ──────────────────────────────────────────────────────
  // MAIN PAGES
  // ──────────────────────────────────────────────────────
  { name: 'Home', url: '/', keywords: ['home', 'main', 'logaa holidays', 'travel agency', 'madurai'], description: 'Logaa Holidays home page', type: 'page' },
  { name: 'About Us', url: '/about', keywords: ['about', 'about us', 'company', 'who are you', 'logaa', 'team', 'history'], description: 'About Logaa Holidays', type: 'page' },
  { name: 'Services', url: '/services', keywords: ['services', 'what do you offer', 'offerings'], description: 'All services offered by Logaa Holidays', type: 'page' },
  { name: 'Testimonials', url: '/testimonials', keywords: ['testimonials', 'reviews', 'feedback', 'ratings', 'customers', 'google reviews'], description: 'Customer reviews and testimonials', type: 'page' },
  { name: 'Contact Us', url: '/contact', keywords: ['contact', 'reach us', 'phone', 'call', 'email', 'whatsapp', 'address', 'location', 'madurai', 'enquiry'], description: 'Contact Logaa Holidays', type: 'page' },

  // ──────────────────────────────────────────────────────
  // SOUTH INDIA OVERVIEW
  // ──────────────────────────────────────────────────────
  { name: 'South India Packages', url: '/south-india-package', keywords: ['south india', 'south india tour', 'south india packages'], description: 'Overview of South India tour packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // TAMIL NADU – Destination Overview pages
  // ──────────────────────────────────────────────────────
  { name: 'Tamil Nadu Overview', url: '/destination/tamilnadu/tamilnadu-tourism', keywords: ['tamil nadu', 'tamilnadu', 'tn', 'tamil', 'south india'], description: 'Tamil Nadu travel overview', type: 'destination' },
  { name: 'Madurai', url: '/destination/tamilnadu/madurai-tourism', keywords: ['madurai', 'meenakshi', 'meenakshi amman', 'madurai temple', 'madurai tour', 'madurai package'], description: 'Madurai tourism and packages', type: 'destination' },
  { name: 'Rameswaram', url: '/destination/tamilnadu/rameswaram-tourism', keywords: ['rameswaram', 'rameswaram', 'ramanathaswamy', 'dhanushkodi', 'pamban bridge', 'pilgrimage', 'rameswaram package'], description: 'Rameswaram tourism and packages', type: 'destination' },
  { name: 'Kanyakumari', url: '/destination/tamilnadu/kanyakumari-tourism', keywords: ['kanyakumari', 'kanya kumari', 'cape comorin', 'sunrise', 'vivekananda', 'kanyakumari package'], description: 'Kanyakumari tourism and packages', type: 'destination' },
  { name: 'Kodaikanal', url: '/destination/tamilnadu/kodaikanal-tourism', keywords: ['kodaikanal', 'kodai', 'kodai kanal', 'hill station', 'kodaikanal lake', 'kodai package'], description: 'Kodaikanal tourism and packages', type: 'destination' },
  { name: 'Ooty', url: '/destination/tamilnadu/ooty-tourism', keywords: ['ooty', 'udhagamandalam', 'nilgiri', 'ooty lake', 'tea garden', 'ooty package', 'ootty'], description: 'Ooty tourism and packages', type: 'destination' },
  { name: 'Chennai', url: '/destination/tamilnadu/chennai-tourism', keywords: ['chennai', 'madras', 'chennai tour', 'marina beach', 'kapaleeshwarar', 'chennai sightseeing'], description: 'Chennai tourism and packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // TAMIL NADU – Tour Package category pages (/tour-packages/...)
  // ──────────────────────────────────────────────────────
  { name: 'Courtallam Tours', url: '/tour-packages/courtallam-tours', keywords: ['courtallam', 'kutralam', 'waterfalls', 'courtallam package', 'spa falls'], description: 'Courtallam waterfall tour packages', type: 'package-category' },
  { name: 'Pillayarpatti Tours', url: '/tour-packages/pillayarpatti-tours', keywords: ['pillayarpatti', 'vinayagar', 'karpaga vinayagar', 'temple', 'pilgrimage'], description: 'Pillayarpatti temple tour packages', type: 'package-category' },
  { name: 'Tiruchendur Tours', url: '/tour-packages/tiruchendur-tours', keywords: ['tiruchendur', 'murugan', 'tiruchendur murugan', 'subramania', 'temple tour'], description: 'Tiruchendur temple tour packages', type: 'package-category' },
  { name: 'Palani Tours', url: '/tour-packages/palani-tours', keywords: ['palani', 'dandayudhapani', 'murugan', 'palani temple', 'palani package', 'pilgrimage'], description: 'Palani temple tour packages', type: 'package-category' },
  { name: 'Trichy Tours', url: '/tour-packages/trichy-tours', keywords: ['trichy', 'tiruchirappalli', 'srirangam', 'rockfort', 'trichy package', 'trichy tour'], description: 'Trichy tour packages', type: 'package-category' },
  { name: 'Thanjavur Tours', url: '/tour-packages/thanjavur-tours', keywords: ['thanjavur', 'tanjore', 'big temple', 'brihadeeswara', 'chola', 'thanjavur package'], description: 'Thanjavur tour packages', type: 'package-category' },
  { name: 'Kumbakonam Tours', url: '/tour-packages/kumbakonam-tours', keywords: ['kumbakonam', 'temple city', 'mahamaham', 'kumbakonam package'], description: 'Kumbakonam tour packages', type: 'package-category' },
  { name: 'Mahabalipuram Tours', url: '/tour-packages/mahabalipuram-tours', keywords: ['mahabalipuram', 'mamallapuram', 'shore temple', 'five rathas', 'arjuna penance', 'mahabalipuram package'], description: 'Mahabalipuram tour packages', type: 'package-category' },
  { name: 'Pondicherry Tours', url: '/tour-packages/pondicherry-tours', keywords: ['pondicherry', 'puducherry', 'french town', 'auroville', 'pondy', 'pondicherry package'], description: 'Pondicherry tour packages', type: 'package-category' },
  { name: 'Valparai Tours', url: '/tour-packages/valparai-tours', keywords: ['valparai', 'tea estate', 'forest', 'wildlife', 'valparai package'], description: 'Valparai tour packages', type: 'package-category' },
  { name: 'Megamalai Tours', url: '/tour-packages/megamalai-tours', keywords: ['megamalai', 'high wavy mountains', 'megamalai package', 'megamalai tour', 'megamalai trek'], description: 'Megamalai tour packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // KERALA – Destination Overview pages
  // ──────────────────────────────────────────────────────
  { name: 'Kerala Overview', url: '/destination/kerala/kerala-tourism', keywords: ['kerala', 'god own country', 'kerala tour', 'kerala package'], description: 'Kerala travel overview', type: 'destination' },
  { name: 'Munnar', url: '/destination/kerala/munnar-tourism', keywords: ['munnar', 'tea garden', 'munnar package', 'hill station kerala', 'honeymoon munnar'], description: 'Munnar tourism and packages', type: 'destination' },
  { name: 'Alleppey', url: '/destination/kerala/alleppey-tourism', keywords: ['alleppey', 'alappuzha', 'houseboat', 'backwaters', 'alleppey package', 'alappuzha package'], description: 'Alleppey backwater packages', type: 'destination' },
  { name: 'Thekkady', url: '/destination/kerala/thekkady-tourism', keywords: ['thekkady', 'periyar', 'wildlife', 'elephant', 'spice garden', 'thekkady package'], description: 'Thekkady wildlife packages', type: 'destination' },
  { name: 'Vagamon', url: '/destination/kerala/vagamon-tourism', keywords: ['vagamon', 'meadows', 'vagamon package', 'vagamon tour'], description: 'Vagamon tour packages', type: 'destination' },
  { name: 'Cochin', url: '/destination/kerala/cochin-tourism', keywords: ['cochin', 'kochi', 'fort kochi', 'kerala cruise', 'cochin package'], description: 'Cochin tourism and packages', type: 'destination' },
  { name: 'Kumarakom Tours', url: '/tour-packages/kumarakom-tours', keywords: ['kumarakom', 'vembanad lake', 'bird sanctuary', 'kumarakom package'], description: 'Kumarakom tour packages', type: 'package-category' },
  { name: 'Athirappilly Tours', url: '/tour-packages/athirappilly-tours', keywords: ['athirappilly', 'athirappally', 'waterfall', 'chalakudy', 'athirappilly package'], description: 'Athirappilly waterfall packages', type: 'package-category' },
  { name: 'Kovalam Tours', url: '/tour-packages/kovalam-tours', keywords: ['kovalam', 'lighthouse beach', 'beach resort', 'kovalam package', 'kerala beach'], description: 'Kovalam beach packages', type: 'package-category' },
  { name: 'Varkala Tours', url: '/tour-packages/varkala-tours', keywords: ['varkala', 'papanasam beach', 'cliff beach', 'varkala package'], description: 'Varkala beach packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // KARNATAKA
  // ──────────────────────────────────────────────────────
  { name: 'Karnataka Overview', url: '/karnataka-tour-packages', keywords: ['karnataka', 'karnataka tour', 'karnataka package'], description: 'Karnataka travel overview', type: 'destination' },
  { name: 'Mysore Tours', url: '/tour-packages/mysore-tours', keywords: ['mysore', 'mysuru', 'mysore palace', 'mysore dasara', 'mysore package'], description: 'Mysore tour packages', type: 'package-category' },
  { name: 'Coorg Tours', url: '/tour-packages/coorg-tours', keywords: ['coorg', 'kodagu', 'coffee estate', 'coorg package', 'scotland of india'], description: 'Coorg tour packages', type: 'package-category' },
  { name: 'Bangalore Tours', url: '/tour-packages/bangalore-tours', keywords: ['bangalore', 'bengaluru', 'lalbagh', 'bangalore package', 'bangalore sightseeing'], description: 'Bangalore tour packages', type: 'package-category' },
  { name: 'Chikmagalur Tours', url: '/tour-packages/chikmagalur-tours', keywords: ['chikmagalur', 'chikkamagaluru', 'coffee hills', 'chikmagalur package'], description: 'Chikmagalur tour packages', type: 'package-category' },
  { name: 'Kabini Tours', url: '/tour-packages/kabini-tours', keywords: ['kabini', 'nagarhole', 'jungle safari', 'kabini package', 'wildlife'], description: 'Kabini wildlife packages', type: 'package-category' },
  { name: 'Hampi Tours', url: '/tour-packages/hampi-tours', keywords: ['hampi', 'vijayanagara', 'ruins', 'hampi package', 'heritage'], description: 'Hampi heritage tour packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // ANDAMAN
  // ──────────────────────────────────────────────────────
  { name: 'Andaman & Nicobar Islands', url: '/destination/andaman/andaman-tourism', keywords: ['andaman', 'nicobar', 'andaman package', 'havelock', 'neil island', 'port blair', 'andaman nicobar', 'beach', 'scuba diving', 'andaman tour'], description: 'Andaman & Nicobar Islands packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // NORTH INDIA
  // ──────────────────────────────────────────────────────
  { name: 'North India Packages', url: '/north-india-tour-packages', keywords: ['north india', 'north india tour', 'north india package'], description: 'North India travel overview', type: 'destination' },
  { name: 'Shirdi Yatra', url: '/destination/maharashtra/shirdi', keywords: ['shirdi', 'sai baba', 'shirdi yatra', 'pilgrimage', 'maharashtra'], description: 'Shirdi Yatra packages', type: 'package-category' },
  { name: 'Varanasi', url: '/destination/uttar-pradesh/varanasi', keywords: ['varanasi', 'banaras', 'kashi', 'ganga aarti', 'pilgrimage', 'varanasi tour'], description: 'Varanasi tour packages', type: 'package-category' },
  { name: 'Golden Triangle Tours', url: '/north-india-tour-packages/golden-triangle-tours', keywords: ['golden triangle', 'delhi agra jaipur', 'golden triangle package', 'taj mahal', 'india tour'], description: 'Delhi-Agra-Jaipur Golden Triangle tours', type: 'package-category' },
  { name: 'Delhi Tours', url: '/tour-packages/delhi-tours', keywords: ['delhi', 'new delhi', 'red fort', 'qutub minar', 'india gate', 'delhi package'], description: 'Delhi tour packages', type: 'package-category' },
  { name: 'Agra Tours', url: '/tour-packages/agra-tours', keywords: ['agra', 'taj mahal', 'agra fort', 'fatehpur sikri', 'agra package'], description: 'Agra tour packages', type: 'package-category' },
  { name: 'Jaipur Tours', url: '/tour-packages/jaipur-tours', keywords: ['jaipur', 'pink city', 'hawa mahal', 'amber fort', 'jaipur package'], description: 'Jaipur tour packages', type: 'package-category' },
  { name: 'Shimla Tours', url: '/north-india-tour-packages/shimla-tours', keywords: ['shimla', 'simla', 'himachal', 'mall road', 'shimla package'], description: 'Shimla tour packages', type: 'package-category' },
  { name: 'Manali Tours', url: '/north-india-tour-packages/manali-tours', keywords: ['manali', 'rohtang', 'solang valley', 'manali package', 'snow', 'himachal'], description: 'Manali tour packages', type: 'package-category' },
  { name: 'Manali Volvo Tours', url: '/north-india-tour-packages/manali-volvo-tours', keywords: ['manali volvo', 'volvo bus', 'manali by bus', 'budget manali'], description: 'Manali Volvo bus tour packages', type: 'package-category' },
  { name: 'Kashmir Tours', url: '/north-india-tour-packages/kashmir-tours', keywords: ['kashmir', 'srinagar', 'dal lake', 'gulmarg', 'pahalgam', 'kashmir package', 'paradise on earth'], description: 'Kashmir tour packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // HONEYMOON PACKAGES
  // ──────────────────────────────────────────────────────
  { name: 'Tamil Nadu Honeymoon', url: '/tour-packages/tamil-nadu-honeymoon-packages', keywords: ['tamil nadu honeymoon', 'couple trip tamil nadu', 'honeymoon south india', 'romantic tamil nadu', 'newly married tamil Nadu'], description: 'Tamil Nadu honeymoon packages', type: 'package-category' },
  { name: 'Kerala Honeymoon', url: '/tour-packages/kerala-honeymoon-packages', keywords: ['kerala honeymoon', 'kerala couple package', 'romantic kerala', 'honeymoon backwaters', 'munnar honeymoon', 'alleppey honeymoon', 'ooty coonoor honeymoon'], description: 'Kerala honeymoon packages', type: 'package-category' },
  { name: 'Karnataka Honeymoon', url: '/tour-packages/karnataka-honeymoon-packages', keywords: ['karnataka honeymoon', 'coorg honeymoon', 'coorg couple', 'romantic coorg', 'karnataka couple'], description: 'Karnataka honeymoon packages', type: 'package-category' },
  { name: 'Goa Honeymoon', url: '/tour-packages/goa-honeymoon-packages', keywords: ['goa honeymoon', 'goa couple', 'romantic goa', 'goa package', 'goa beach', 'goa trip'], description: 'Goa honeymoon packages', type: 'package-category' },
  { name: 'Kashmir Honeymoon', url: '/tour-packages/kashmir-honeymoon-packages', keywords: ['kashmir honeymoon', 'kashmir couple', 'romantic kashmir', 'srinagar honeymoon', 'dal lake honeymoon'], description: 'Kashmir honeymoon packages', type: 'package-category' },
  { name: 'Himachal Honeymoon', url: '/tour-packages/himachal-honeymoon-packages', keywords: ['himachal honeymoon', 'shimla manali honeymoon', 'manali honeymoon', 'shimla honeymoon', 'himachal couple'], description: 'Himachal Pradesh honeymoon packages', type: 'package-category' },
  { name: 'Sikkim & Darjeeling Honeymoon', url: '/tour-packages/sikkim-darjeeling-honeymoon-packages', keywords: ['sikkim honeymoon', 'darjeeling honeymoon', 'sikkim darjeeling couple', 'northeast honeymoon', 'gangtok honeymoon'], description: 'Sikkim & Darjeeling honeymoon packages', type: 'package-category' },
  { name: 'Andaman Honeymoon', url: '/tour-packages/andaman-honeymoon-packages', keywords: ['andaman honeymoon', 'andaman couple', 'island honeymoon', 'beach honeymoon', 'havelock honeymoon'], description: 'Andaman honeymoon packages', type: 'package-category' },
  { name: 'Maldives Honeymoon', url: '/tour-packages/maldives-honeymoon-packages', keywords: ['maldives honeymoon', 'maldives couple', 'maldives trip', 'maldives package', 'overwater bungalow', 'maldives resort'], description: 'Maldives honeymoon packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // INTERNATIONAL
  // ──────────────────────────────────────────────────────
  { name: 'Malaysia Tours', url: '/destination/international/malaysia-tourism', keywords: ['malaysia', 'kuala lumpur', 'klcc', 'petronas towers', 'malaysia package', 'international tour'], description: 'Malaysia international tour packages', type: 'destination' },
  { name: 'Singapore Tours', url: '/destination/international/singapore-tourism', keywords: ['singapore', 'sentosa', 'marina bay sands', 'singapore package', 'international'], description: 'Singapore international tour packages', type: 'destination' },
  { name: 'Bali Tours', url: '/destination/international/bali-tourism', keywords: ['bali', 'indonesia', 'bali package', 'ubud', 'seminyak', 'bali beach', 'bali honeymoon'], description: 'Bali international tour packages', type: 'destination' },
  { name: 'Thailand Tours', url: '/destination/international/thailand-tourism', keywords: ['thailand', 'bangkok', 'pattaya', 'phuket', 'thailand package', 'international tour'], description: 'Thailand international tour packages', type: 'destination' },
  { name: 'Sri Lanka Tours', url: '/destination/international/sri-lanka-tourism', keywords: ['sri lanka', 'srilanka', 'ceylon', 'colombo', 'kandy', 'sigiriya', 'sri lanka package'], description: 'Sri Lanka international tour packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // SERVICES
  // ──────────────────────────────────────────────────────
  { name: 'Hotel Booking', url: '/services/hotel-booking', keywords: ['hotel', 'hotel booking', 'hotel reservation', 'accommodation', 'resort', '3 star', '4 star', '5 star'], description: 'Hotel booking service', type: 'service' },
  { name: 'Cab & Coach Rental', url: '/services/cab-coach-rental', keywords: ['cab', 'taxi', 'coach', 'tempo traveller', 'car rental', 'innova', 'suv', 'bus', 'vehicle', 'car hire'], description: 'Cab and coach rental service', type: 'service' },
  { name: 'Flight Booking', url: '/services/flight-booking', keywords: ['flight', 'air ticket', 'flight booking', 'airplane', 'airline', 'domestic flight', 'international flight'], description: 'Flight ticket booking service', type: 'service' },
  { name: 'Railway Booking', url: '/services/railway-booking', keywords: ['train', 'railway', 'rail ticket', 'irctc', 'train booking', 'railway booking'], description: 'Train ticket booking service', type: 'service' },
  { name: 'Tour Operators', url: '/services/tour-operators', keywords: ['tour operator', 'customized tour', 'custom package', 'plan my trip', 'itinerary', 'group tour', 'family tour'], description: 'Tour operator and customized package service', type: 'service' },
];

// ──────────────────────────────────────────────────────
// SEARCH FUNCTION
// ──────────────────────────────────────────────────────
// Helper: Calculate similarity between two strings (0 to 1) using Levenshtein distance
function similarity(s1: string, s2: string): number {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  const longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  
  const costs = new Array();
  for (let i = 0; i <= longer.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= shorter.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) {
      costs[shorter.length] = lastValue;
    }
  }
  return (longerLength - costs[shorter.length]) / longerLength;
}

export function searchKnowledge(query: string): KnowledgeEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  
  const queryWords = q.split(/\s+/);

  const scored = siteKnowledge.map(entry => {
    let score = 0;
    
    // Exact name match gets highest priority
    if (entry.name.toLowerCase() === q) score += 1000;
    
    // Name contains query (exact substring)
    if (entry.name.toLowerCase().includes(q)) score += 200;
    
    for (const kw of entry.keywords) {
      const kwLower = kw.toLowerCase();
      // Exact keyword match
      if (kwLower === q) score += 1000;
      
      // Keyword contains exact query as a standalone word
      const kwWords = kwLower.split(/\s+/);
      if (kwWords.includes(q)) {
         if (kwWords.length === 1) score += 800;
         else score += 100;
      }
      
      // Query contains the keyword
      if (q.includes(kwLower)) score += 200;
      
      // Keyword contains the query (substring)
      if (kwLower.includes(q)) score += 50;

      // Fuzzy Matching for typos on individual words
      for (const qw of queryWords) {
        if (qw.length > 3) {
          for (const kwW of kwWords) {
            if (qw === kwW) continue; // Skip if exact match
            const sim = similarity(qw, kwW);
            if (sim > 0.75) { 
              score += 80;
            }
          }
        }
      }
    }
    
    return { entry, score };
  });

  const validResults = scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (validResults.length === 0) return [];

  // Strict relevance filtering: Only keep results that score at least 20% of the top result.
  // This drops irrelevant packages (e.g. Kerala Honeymoon for "ooty" search)
  const topScore = validResults[0].score;
  return validResults
    .filter(s => s.score >= topScore * 0.2)
    .slice(0, 3)
    .map(s => s.entry);
}

// ──────────────────────────────────────────────────────
// STATIC COMPANY INFO
// ──────────────────────────────────────────────────────
export const companyInfo = {
  name: 'Logaa Holidays',
  phone: '+91 73973 29776',
  whatsapp: '917397329776',
  email: 'logaaholidays@gmail.com',
  address: 'T247, Sector T Type, Housing Board, Ellis Nagar, Madurai, Tamil Nadu 625016',
  instagram: 'https://www.instagram.com/logaaholidays/',
  facebook: 'https://www.facebook.com/logaaholidays',
};
