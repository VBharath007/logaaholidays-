const fs = require('fs');
const file = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

const lines = content.split('\n');
let fixes = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].match(/^\s*['"]\/assets\/.*?['"],?$/)) {
    console.log('Fixing line ' + (i+1) + ': ' + lines[i]);
    lines[i] = lines[i].replace(/(^\s*)(['"]\/assets\/.*?['"],?$)/, '$1"image": $2');
    fixes++;
  }
}
if (fixes > 0) {
  fs.writeFileSync(file, lines.join('\n'));
  console.log('Fixed PackageDetails.tsx');
} else {
  console.log('No issues found in PackageDetails.tsx');
}

// Do the same for TourCategory.tsx
const file2 = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let content2 = fs.readFileSync(file2, 'utf8');
const lines2 = content2.split('\n');
let fixes2 = 0;
for (let i = 0; i < lines2.length; i++) {
  if (lines2[i].match(/^\s*['"]\/assets\/.*?['"],?$/)) {
    console.log('Fixing line ' + (i+1) + ' in TourCategory: ' + lines2[i]);
    lines2[i] = lines2[i].replace(/(^\s*)(['"]\/assets\/.*?['"],?$)/, '$1image: $2');
    fixes2++;
  }
}
if (fixes2 > 0) {
  fs.writeFileSync(file2, lines2.join('\n'));
  console.log('Fixed TourCategory.tsx');
} else {
  console.log('No issues found in TourCategory.tsx');
}
