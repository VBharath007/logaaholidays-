const fs = require('fs');

let ts = fs.readFileSync('public/generated_packages.ts', 'utf8');
ts = ts.replace('export const newPackages = ', '').trim();
if(ts.endsWith(';')) ts = ts.slice(0, -1);
const newPackages = eval('(' + ts + ')');

let pd = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
let insertionStr = '';
for (const id in newPackages) {
  insertionStr += `  '${id}': ${JSON.stringify(newPackages[id], null, 4)},\n`;
}
pd = pd.replace(/export const packagesDatabase: Record<string, any> = \{/, `export const packagesDatabase: Record<string, any> = {\n${insertionStr}`);
fs.writeFileSync('src/pages/PackageDetails.tsx', pd);

console.log('Successfully injected into PackageDetails');
