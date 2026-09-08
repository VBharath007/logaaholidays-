import fs from 'fs';

// Read the places
const placesText = fs.readFileSync('./places.txt', 'utf-8');
const placesStr = placesText.trim();
const placesLines = placesStr.split('\n').filter(l => l.trim().length > 0);

// Fix unescaped single quotes in keywords and descriptions (e.g., Coaker's Walk)
const fixedPlaces = placesLines.map(line => {
    // If it has Coaker's Walk, escape the quote
    let l = line.replace(/Coaker's/g, "Coaker\\'s");
    return l;
});

const placesCode = `
  // ──────────────────────────────────────────────────────
  // TOP PLACES TO VISIT
  // ──────────────────────────────────────────────────────
${fixedPlaces.join('\n')}
`;

let content = fs.readFileSync('./src/data/chatbotKnowledge.ts', 'utf-8');

// Find export const siteKnowledge
const siteKnowledgeStart = content.indexOf('export const siteKnowledge: KnowledgeEntry[] = [');
if (siteKnowledgeStart > -1) {
    // Find the NEXT ]; after siteKnowledgeStart
    const insertIndex = content.indexOf('];', siteKnowledgeStart);
    if (insertIndex > -1) {
        content = content.slice(0, insertIndex) + placesCode + content.slice(insertIndex);
        fs.writeFileSync('./src/data/chatbotKnowledge.ts', content, 'utf-8');
        console.log('Successfully added places to chatbotKnowledge.ts');
    } else {
        console.log('Could not find end of siteKnowledge array');
    }
} else {
    console.log('Could not find siteKnowledge array start');
}
