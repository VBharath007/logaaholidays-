const fs = require('fs');
const content = fs.readFileSync('d:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx', 'utf-8');
const matches = [...content.matchAll(/'(\d+)':\s*\{\s*"title":\s*"([^"]+)"/g)];
matches.forEach(m => {
  if (m[2].toLowerCase().includes('madurai') || m[2].toLowerCase().includes('kodaikanal') || m[2].toLowerCase().includes('rameswaram') || m[2].toLowerCase().includes('kochi')) {
    console.log(`ID: ${m[1]}, Title: ${m[2]}`);
  }
});
