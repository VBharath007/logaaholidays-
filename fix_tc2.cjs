const fs = require('fs');

const path = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let content = fs.readFileSync(path, 'utf8');

const idx1 = content.indexOf('const maduraiPackages = [');
const idx2 = content.indexOf('const maduraiPackages = [', idx1 + 1);

if (idx1 !== -1 && idx2 !== -1) {
  console.log('Removing from', idx1, 'to', idx2);
  content = content.substring(0, idx1) + content.substring(idx2);
  fs.writeFileSync(path, content);
  console.log('Fixed file.');
} else {
  console.log('Did not find two maduraiPackages.');
}
