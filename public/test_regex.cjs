// test_regex.cjs
const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// Test regex for 2025
const pattern = /"id":\s*"2025"\s*\r?\n\s*\}\s*,\s*\r?\n\s*"priceDetails":/;
const m = content.match(pattern);
if (m) {
  console.log('MATCH FOUND:', JSON.stringify(m[0].substring(0, 80)));
} else {
  console.log('NO MATCH - showing raw bytes around id 2025:');
  const idx = content.indexOf('"id": "2025"');
  console.log(JSON.stringify(content.substring(idx, idx + 80)));
}
