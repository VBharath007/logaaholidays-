const fs = require('fs');
const content = fs.readFileSync('d:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx', 'utf8');

let inDb = false;
const lines = content.split('\n');
const packages = [];
let currentPkg = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('export const packagesDatabase')) {
    inDb = true;
    continue;
  }
  
  if (inDb) {
    if (line.match(/^\s*['"]?(\d+)['"]?\s*:\s*\{/)) {
      if (currentPkg) packages.push(currentPkg);
      currentPkg = { id: parseInt(line.match(/^\s*['"]?(\d+)['"]?\s*:\s*\{/)[1]), title: '', startLine: i + 1, endLine: -1 };
    } else if (currentPkg && line.match(/^\s*(?:"title"|title)\s*:\s*(?:"|')(.*?)(?:"|'),/)) {
      if (!currentPkg.title) {
        currentPkg.title = line.match(/^\s*(?:"title"|title)\s*:\s*(?:"|')(.*?)(?:"|'),/)[1];
      }
    } else if (currentPkg && line.match(/^\s*};?$/)) {
      currentPkg.endLine = i + 1;
    }
  }
}
if (currentPkg) packages.push(currentPkg);

packages.sort((a, b) => a.id - b.id);

const chennaiPkgs = packages.filter(p => p.title.toLowerCase().includes('chennai'));

console.log(`Total Chennai Packages: ${chennaiPkgs.length}`);

console.log("\nFirst 21 packages:");
chennaiPkgs.slice(0, 21).forEach(p => {
  console.log(`ID: ${p.id} | Title: ${p.title} | Lines: ${p.startLine}-${p.endLine}`);
});

console.log("\nChecking for duplicates (Same Title):");
const titleMap = {};
chennaiPkgs.forEach(p => {
  if (titleMap[p.title]) {
    titleMap[p.title].push(p);
  } else {
    titleMap[p.title] = [p];
  }
});

for (const [title, pkgs] of Object.entries(titleMap)) {
  if (pkgs.length > 1) {
    console.log(`\nDUPLICATE TITLE: "${title}"`);
    pkgs.forEach(p => console.log(`  - ID: ${p.id} (Lines ${p.startLine}-${p.endLine})`));
  }
}
