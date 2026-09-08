const fs = require('fs');
const content = fs.readFileSync('d:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx', 'utf-8');
const lines = content.split('\n');
const ids = ['2064', '2086', '2087', '2088', '2089'];
ids.forEach(id => {
  const regex = new RegExp(`['"]${id}['"]:`);
  const idx = lines.findIndex(l => regex.test(l));
  if (idx !== -1) {
    console.log(`ID: ${id}, Line: ${idx + 1}`);
    console.log(lines.slice(idx, idx + 5).join('\n'));
  } else {
    console.log(`ID: ${id} not found`);
  }
});
