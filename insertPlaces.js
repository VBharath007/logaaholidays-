import fs from 'fs';

let content = fs.readFileSync('./src/data/chatbotKnowledge.ts', 'utf-8');
const placesText = fs.readFileSync('./places_clean.txt', 'utf-8');

const placesCode = `
  // ──────────────────────────────────────────────────────
  // TOP PLACES TO VISIT
  // ──────────────────────────────────────────────────────
${placesText}
];`;

content = content.replace("];\r\n\r\n// ──────────────────────────────────────────────────────\r\n// SEARCH FUNCTION", placesCode + "\r\n\r\n// ──────────────────────────────────────────────────────\r\n// SEARCH FUNCTION");
content = content.replace("];\n\n// ──────────────────────────────────────────────────────\n// SEARCH FUNCTION", placesCode + "\n\n// ──────────────────────────────────────────────────────\n// SEARCH FUNCTION");

fs.writeFileSync('./src/data/chatbotKnowledge.ts', content, 'utf-8');
console.log('Places inserted successfully!');
