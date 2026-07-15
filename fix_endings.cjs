const fs = require('fs');
const path = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

// Normalize all \n to \r\n (but not double-convert existing \r\n)
content = content.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n');

fs.writeFileSync(path, content);
console.log('Normalized line endings!');
