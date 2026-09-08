const fs = require('fs');
const content = fs.readFileSync('d:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx', 'utf8');
const idx = content.indexOf("'2008': {");
console.log(content.substring(idx, idx + 400));
