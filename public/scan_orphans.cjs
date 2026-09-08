// scan_orphans.cjs - find all remaining orphaned package bodies
const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i].replace(/\r$/, '');
  const next = lines[i + 1].replace(/\r$/, '');
  if (line.trim() === '},' && next.trim().startsWith('"priceDetails":')) {
    // Go back to find the "id" of the package that just closed
    for (let j = i; j > Math.max(0, i - 5); j--) {
      const l = lines[j].replace(/\r$/, '');
      const m = l.match(/"id":\s*"(\d+)"/);
      if (m) {
        console.log(`Line ${i + 1}: After package ID ${m[1]}, orphaned body starts (next ID should be ${parseInt(m[1]) + 1})`);
        break;
      }
    }
  }
}
console.log('Scan complete.');
