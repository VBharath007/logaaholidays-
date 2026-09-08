const fs = require('fs');

const { newPackages } = require('./public/generated_packages.js');

// 1. Inject into PackageDetails.tsx
let pd = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

let insertionStr = '';
for (const id in newPackages) {
  insertionStr += `  '${id}': ${JSON.stringify(newPackages[id], null, 4)},\n`;
}

pd = pd.replace(
  /export const packagesDatabase: Record<string, Package> = {/,
  `export const packagesDatabase: Record<string, Package> = {\n${insertionStr}`
);

fs.writeFileSync('src/pages/PackageDetails.tsx', pd);

// 2. Prepare TourCategory.tsx summaries
let tc_items = [];
for (const id in newPackages) {
  const p = newPackages[id];
  tc_items.push(`  {
    id: ${id},
    title: '${p.title.replace(/'/g, "\\'")}',
    duration: '${p.overview.duration}',
    destination: '${p.overview.destination.replace(/'/g, "\\'")}',
    activities: '${p.overview.activities}',
    themes: '${p.overview.themes}',
    price: '${p.priceDetails.amount}',
    image: '${p.image}'
  }`);
}
const arrayStr = tc_items.join(',\n');

// 3. Inject into TourCategory.tsx (chennaiPackages and varanasiPackages)
let tc = fs.readFileSync('src/pages/TourCategory.tsx', 'utf8');

tc = tc.replace(
  /const chennaiPackages = \[\n/,
  `const chennaiPackages = [\n${arrayStr},\n`
);

tc = tc.replace(
  /const varanasiPackages = \[\n/,
  `const varanasiPackages = [\n${arrayStr},\n`
);

fs.writeFileSync('src/pages/TourCategory.tsx', tc);

console.log('Injected 10 packages into PackageDetails.tsx and TourCategory.tsx (chennai & varanasi)');
