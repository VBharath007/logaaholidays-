const fs = require('fs');
const path = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');
const newLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  newLines.push(line);
  
  // Look for image line pointing to 322x372 madurai 63 package
  if (line.match(/^\s*(?:"image"|image)\s*:\s*['"]\/assets\/madurai(?:%20|\s)63(?:%20|\s)package\/322x372\/(.*?)(?:\.png|\.jpeg|\.jpg|\.PNG|\.avif)['"],?\s*$/i)) {
    
    // Check if the next line is already a heroImage
    if (i + 1 < lines.length && lines[i + 1].match(/^\s*(?:"heroImage"|heroImage)\s*:/)) {
      continue; // Skip, it already has one
    }

    // Extract the exact filename, we can just replace '322x372' with '1918x642' in the original path string
    const match = line.match(/^(\s*)(?:"image"|image)(\s*:\s*['"])(.*?)(['"],?\s*)$/);
    if (match) {
      const indent = match[1];
      const colonQuote = match[2];
      const imagePath = match[3];
      const endQuote = match[4];
      
      const heroPath = imagePath.replace('/322x372/', '/1918x642/');
      
      const heroLine = `${indent}"heroImage"${colonQuote}${heroPath}${endQuote}`;
      newLines.push(heroLine);
      console.log('Added heroImage for: ' + heroPath);
    }
  }
}

fs.writeFileSync(path, newLines.join('\n'));
console.log('Done adding heroImages for madurai 63 package.');
