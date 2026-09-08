const fs = require('fs');

const genPath = 'd:/HexaVisionTech/logaa holiday/public/generated_packages.ts';
let genContent = fs.readFileSync(genPath, 'utf8');

// The generated_packages.ts exported object
const startIdx = genContent.indexOf("'2025': {");
if (startIdx === -1) {
  console.log('Could not find 2025 in generated_packages');
  process.exit(1);
}
const endIdx = genContent.lastIndexOf("};");
let extractedPackages = genContent.substring(startIdx, endIdx);

// Reinject into PackageDetails.tsx
const pdPath = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let pdContent = fs.readFileSync(pdPath, 'utf8');
const dbEndIdx = pdContent.lastIndexOf('};');
let beforeEnd = pdContent.substring(0, dbEndIdx).trimRight();
if (!beforeEnd.endsWith(',')) {
  beforeEnd += ',';
}
pdContent = beforeEnd + '\n' + extractedPackages + '\n};\n' + pdContent.substring(dbEndIdx + 2);
fs.writeFileSync(pdPath, pdContent);
console.log('Successfully re-injected Madurai packages into PackageDetails.tsx');

// Now parse the packages to create TourCategory.tsx entries
const parsedPackagesStr = '{\n' + extractedPackages + '\n}';
// Need to evaluate it safely
let pkgObj = {};
try {
  // Replace the image/heroImage paths correctly if needed, but eval is fine for extracting metadata
  pkgObj = new Function('return ' + parsedPackagesStr)();
} catch(e) {
  console.log('Error parsing extracted packages: ', e);
}

const tcPath = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let tcContent = fs.readFileSync(tcPath, 'utf8');
const tcStartIdx = tcContent.indexOf('const maduraiPackages = [');
if (tcStartIdx !== -1) {
  const tcEndIdx = tcContent.indexOf('];', tcStartIdx);
  
  let maduraiArrayStr = 'const maduraiPackages = [\n';
  // Keep whatever was already there (the non-duplicate ones or older ones?)
  // Actually, we deleted the 2000 ones. Let's just append the 2000 ones to whatever is there.
  
  for (const [id, pkg] of Object.entries(pkgObj)) {
    maduraiArrayStr += `  {
    id: ${id},
    placeId: 'madurai',
    title: "${pkg.title.replace(/"/g, '\\"')}",
    location: "${(pkg.overview.destination || 'Madurai').replace(/"/g, '\\"')}",
    price: "On Request",
    rating: 4.8,
    duration: "${(pkg.overview.duration || '').replace(/"/g, '\\"')}",
    people: "2-6 Person",
    image: "${(pkg.image || '/assets/madurai-temple.png').replace(/"/g, '\\"')}"
  },\n`;
  }
  
  // We need to append this to the existing array.
  const oldArrayContent = tcContent.substring(tcStartIdx, tcEndIdx);
  tcContent = tcContent.replace(oldArrayContent, oldArrayContent + '\n' + maduraiArrayStr.replace('const maduraiPackages = [\n', ''));
  fs.writeFileSync(tcPath, tcContent);
  console.log('Successfully added packages back to TourCategory.tsx');
}
