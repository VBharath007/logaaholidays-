const fs = require('fs');
const { destinationsData } = require('./src/data/destinationsData.ts');

let content = fs.readFileSync('./src/data/chatbotKnowledge.ts', 'utf-8');

// 1. Ooty Honeymoon Package
content = content.replace(
  "  { name: 'Tamil Nadu Honeymoon', url: '/tour-packages/tamil-nadu-honeymoon-packages', keywords: ['tamil nadu honeymoon', 'couple trip tamil nadu', 'honeymoon south india', 'romantic tamil nadu', 'newly married tamil Nadu'], description: 'Tamil Nadu honeymoon packages', type: 'package-category' },",
  "  { name: 'Ooty and Coonoor Honeymoon Package', url: '/tamil-nadu-honeymoon-packages/enchanting-romantic-ooty-and-coonoor-honeymoon-package-4-days-3-nights', keywords: ['ooty honeymoon', 'coonoor honeymoon', 'couple trip ooty', 'romantic ooty', 'ooty package', '4 days 3 nights', 'ooty'], description: 'Enchanting romantic Ooty and Coonoor honeymoon package', type: 'package-category' },\n  { name: 'Tamil Nadu Honeymoon', url: '/tour-packages/tamil-nadu-honeymoon-packages', keywords: ['tamil nadu honeymoon', 'couple trip tamil nadu', 'honeymoon south india', 'romantic tamil nadu', 'newly married tamil Nadu'], description: 'Tamil Nadu honeymoon packages', type: 'package-category' },"
);

// 2. Add places
const places = [];
Object.values(destinationsData).forEach(d => {
  if (d.placesToVisit) {
    d.placesToVisit.forEach(p => {
      let state = 'tamilnadu'; 
      if (['munnar-tourism', 'alleppey-tourism', 'thekkady-tourism', 'vagamon-tourism', 'cochin-tourism', 'kerala-tourism'].includes(d.id)) state = 'kerala';
      else if (d.id.includes('andaman')) state = 'andaman';
      else if (['malaysia-tourism', 'singapore-tourism', 'bali-tourism', 'thailand-tourism', 'sri-lanka-tourism'].includes(d.id)) state = 'international';
      else if (['shirdi', 'varanasi', 'shimla', 'manali', 'kashmir'].includes(d.id)) state = 'northindia';
      
      let baseCityId = d.id.replace('-tourism', '');
      let url = \`/place/\${state}/\${baseCityId}/\${p.id}\`;
      let safeName = p.name.replace(/'/g, "\\\\'");
      let safeKeywords = p.name.toLowerCase().replace(/'/g, "\\\\'");
      places.push(\`  { name: '\${safeName}', url: '\${url}', keywords: ['\${safeKeywords}'], description: 'Top place to visit: \${safeName}', type: 'page' },\`);
    });
  }
});

const placesCode = \`
  // ──────────────────────────────────────────────────────
  // TOP PLACES TO VISIT
  // ──────────────────────────────────────────────────────
\${places.join('\\n')}
\`;

const insertIndex = content.indexOf('];');
if (insertIndex > -1) {
    content = content.slice(0, insertIndex) + placesCode + content.slice(insertIndex);
}

// 3. Strict Search
const strictSearch = \`// ──────────────────────────────────────────────────────
// SEARCH FUNCTION
// ──────────────────────────────────────────────────────
function similarity(s1: string, s2: string): number {
  let longer = s1; let shorter = s2;
  if (s1.length < s2.length) { longer = s2; shorter = s1; }
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  const costs = new Array();
  for (let i = 0; i <= longer.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= shorter.length; j++) {
      if (i === 0) { costs[j] = j; } else if (j > 0) {
        let newValue = costs[j - 1];
        if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[shorter.length] = lastValue;
  }
  return (longerLength - costs[shorter.length]) / longerLength;
}

const TYPO_DICTIONARY: Record<string, string> = {
  'honeymmon': 'honeymoon', 'honeymoonn': 'honeymoon', 'honeymon': 'honeymoon', 'honymoon': 'honeymoon',
  'kodai': 'kodaikanal', 'kodaiknal': 'kodaikanal', 'kodikanal': 'kodaikanal',
  'muner': 'munnar', 'munaar': 'munnar', 'ootty': 'ooty',
  'srinagr': 'srinagar', 'kasmir': 'kashmir',
  'meenachi': 'meenakshi', 'meenackshi': 'meenakshi', 'minakshi': 'meenakshi', 'mennachi': 'meenakshi', 'menachi': 'meenakshi'
};

const SEMANTIC_MAPPING: Record<string, string[]> = {
  'honeymoon': ['honeymoon', 'romantic', 'romance', 'couple', 'couples', 'newly married', 'romantic getaway'],
  'family': ['family', 'kids', 'children', 'parents'],
  'pilgrimage': ['temple', 'spiritual', 'devotional', 'religious', 'pilgrimage', 'yatra'],
  'adventure': ['adventure', 'trekking', 'hiking', 'activities']
};

const FILLER_WORDS = ['best', 'trip', 'tour', 'package', 'packages', 'please', 'show', 'me', 'tell', 'want', 'need', 'for', 'a', 'to', 'in', 'and'];

export function searchKnowledge(query: string): KnowledgeEntry[] {
  let q = query.toLowerCase().replace(/[^\\\\w\\\\s]/gi, '').trim();
  if (!q) return [];
  
  let rawWords = q.split(/\\\\s+/);
  let correctedWords = rawWords.map(w => TYPO_DICTIONARY[w] || w);
  let meaningfulWords = correctedWords.filter(w => !FILLER_WORDS.includes(w));
  if (meaningfulWords.length === 0) meaningfulWords = correctedWords;

  const isAskingForContact = correctedWords.includes('contact');
  const isAskingForHome = correctedWords.includes('home');
  const isAskingForAbout = correctedWords.includes('about');

  const primaryKeywords = meaningfulWords.slice(0, 2);

  const scored = siteKnowledge.map(entry => {
    let score = 0;
    const title = entry.name.toLowerCase();
    const desc = entry.description.toLowerCase();
    const kws = entry.keywords.map(k => k.toLowerCase());
    const fullMeta = title + ' ' + desc + ' ' + kws.join(' ');
    
    if (title === 'contact us' && !isAskingForContact) return { entry, score: 0 };
    if (title === 'home' && !isAskingForHome) return { entry, score: 0 };
    if (['about us', 'services', 'testimonials'].includes(title) && !isAskingForAbout) {
      if (entry.type === 'page') return { entry, score: 0 };
    }

    if (primaryKeywords.length === 1) {
       const k1 = primaryKeywords[0];
       let k1Syns = [k1];
       for (const [key, syns] of Object.entries(SEMANTIC_MAPPING)) {
         if (syns.includes(k1) || key === k1) k1Syns = [...new Set([...k1Syns, ...syns])];
       }
       
       const matchTitle = k1Syns.some(s => title.includes(s));
       const matchDesc = k1Syns.some(s => desc.includes(s) || kws.some(kw => kw.includes(s)));
       
       if (matchTitle) score += 90;
       else if (matchDesc) score += 70;
       else if (k1Syns.some(s => fullMeta.includes(s))) score += 50;
       
       return { entry, score };
    }
    
    if (primaryKeywords.length >= 2) {
       const k1 = primaryKeywords[0];
       const k2 = primaryKeywords[1];
       
       let k1Syns = [k1]; let k2Syns = [k2];
       for (const [key, syns] of Object.entries(SEMANTIC_MAPPING)) {
         if (syns.includes(k1) || key === k1) k1Syns = [...new Set([...k1Syns, ...syns])];
         if (syns.includes(k2) || key === k2) k2Syns = [...new Set([...k2Syns, ...syns])];
       }

       const exactPhrase = \`\${k1} \${k2}\`;
       const exactPhraseRev = \`\${k2} \${k1}\`;
       
       const hasK1 = k1Syns.some(s => fullMeta.includes(s));
       const hasK2 = k2Syns.some(s => fullMeta.includes(s));
       
       if (!hasK1 || !hasK2) return { entry, score: 0 };
       
       if (title.includes(exactPhrase) || title.includes(exactPhraseRev)) score = 100;
       else if (k1Syns.some(s => title.includes(s)) && k2Syns.some(s => title.includes(s))) score = 95;
       else if ((k1Syns.some(s => title.includes(s) || kws.some(kw => kw.includes(s))) && k2Syns.some(s => title.includes(s) || kws.some(kw => kw.includes(s))))) score = 90;
       else if (hasK1 && hasK2 && entry.type !== 'page') score = 85;
       else if (k1Syns.some(s => desc.includes(s)) && k2Syns.some(s => desc.includes(s))) score = 75;
       else score = 50; 
    }
    
    return { entry, score };
  });

  const validResults = scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score);
  if (validResults.length === 0) return [];
  
  const exactPlace = validResults.find(s => s.score >= 95 && s.entry.type === 'page');
  if (exactPlace) return [exactPlace.entry];
  
  return validResults.slice(0, 5).map(s => s.entry);
}\`;

// Split file by search function start and company info start
const searchStartSplit = content.indexOf('// ──────────────────────────────────────────────────────\\r\\n// SEARCH FUNCTION');
const searchStartSplitFallback = content.indexOf('// ──────────────────────────────────────────────────────\\n// SEARCH FUNCTION');
const searchStart = searchStartSplit > -1 ? searchStartSplit : searchStartSplitFallback;

const companyInfoSplit = content.indexOf('// ──────────────────────────────────────────────────────\\r\\n// STATIC COMPANY INFO');
const companyInfoSplitFallback = content.indexOf('// ──────────────────────────────────────────────────────\\n// STATIC COMPANY INFO');
const companyInfo = companyInfoSplit > -1 ? companyInfoSplit : companyInfoSplitFallback;

if (searchStart > -1 && companyInfo > -1) {
    content = content.slice(0, searchStart) + strictSearch + '\\n\\n' + content.slice(companyInfo);
} else {
    console.log('Error finding search bounds', {searchStart, companyInfo});
}

fs.writeFileSync('./src/data/chatbotKnowledge.ts', content, 'utf-8');
console.log('Done successfully!');
