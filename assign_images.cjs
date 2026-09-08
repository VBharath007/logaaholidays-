const fs = require('fs');
const path = require('path');

// 1. Copy images
const brainDir = 'C:\\Users\\LOQ\\.gemini\\antigravity\\brain\\6ffd4bd2-72d3-4451-8e8b-0c93e318227f';
const targetDir = 'd:/HexaVisionTech/logaa holiday/public/assets/generated';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  { file: 'shirdi_temple_pkg_1783749700805.png', name: 'shirdi_temple_pkg.png' },
  { file: 'pandharpur_temple_pkg_1783749709886.png', name: 'pandharpur_temple_pkg.png' },
  { file: 'jyotirlinga_ellora_pkg_1783749719883.png', name: 'jyotirlinga_ellora_pkg.png' },
  { file: 'kasi_varanasi_pkg_1783749729611.png', name: 'kasi_varanasi_pkg.png' },
  { file: 'ayodhya_ram_mandir_pkg_1783749739350.png', name: 'ayodhya_ram_mandir_pkg.png' },
  { file: 'lonavala_pkg_1783749754383.png', name: 'lonavala_pkg.png' }
];

images.forEach(img => {
  const src = path.join(brainDir, img.file);
  const dest = path.join(targetDir, img.name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${img.name}`);
  } else {
    console.log(`Source not found: ${src}`);
  }
});

// Mappings
const imgMapping = {
  2: '/assets/generated/shirdi_temple_pkg.png',
  3: '/assets/generated/shirdi_temple_pkg.png',
  4: '/assets/generated/shirdi_temple_pkg.png',
  5: '/assets/generated/shirdi_temple_pkg.png',
  6: '/assets/generated/shirdi_temple_pkg.png',
  7: '/assets/generated/pandharpur_temple_pkg.png',
  8: '/assets/generated/shirdi_temple_pkg.png',
  9: '/assets/generated/shirdi_temple_pkg.png',
  10: '/assets/generated/pandharpur_temple_pkg.png',
  11: '/assets/generated/jyotirlinga_ellora_pkg.png',
  12: '/assets/generated/jyotirlinga_ellora_pkg.png',
  13: '/assets/generated/jyotirlinga_ellora_pkg.png',
  14: '/assets/generated/lonavala_pkg.png',
  15: '/assets/generated/jyotirlinga_ellora_pkg.png',
  16: '/assets/generated/kasi_varanasi_pkg.png',
  17: '/assets/generated/kasi_varanasi_pkg.png',
  18: '/assets/generated/kasi_varanasi_pkg.png',
  19: '/assets/generated/kasi_varanasi_pkg.png',
  20: '/assets/generated/kasi_varanasi_pkg.png',
  21: '/assets/generated/kasi_varanasi_pkg.png',
  41: '/assets/generated/ayodhya_ram_mandir_pkg.png'
};

// 2. Update PackageDetails.tsx
const pkgFile = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let pkgContent = fs.readFileSync(pkgFile, 'utf8');

const lines = pkgContent.split('\n');
let inDb = false;
let currentPkgId = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('export const packagesDatabase')) {
    inDb = true;
    continue;
  }
  
  if (inDb) {
    const matchId = line.match(/^\s*['"]?(\d+)['"]?\s*:\s*\{/);
    if (matchId) {
      currentPkgId = parseInt(matchId[1]);
    }
    
    if (currentPkgId && imgMapping[currentPkgId]) {
      if (line.match(/^\s*(?:"image"|image)\s*:\s*(?:"|')/)) {
        lines[i] = line.replace(/(['"]).*?(['"])/, `$1${imgMapping[currentPkgId]}$2`);
      }
    }
    
    if (line.match(/^\s*};?\s*$/) && !line.includes('  }')) {
      // rough heuristic
    }
  }
}
fs.writeFileSync(pkgFile, lines.join('\n'));
console.log('Updated PackageDetails.tsx');

// 3. Update TourCategory.tsx
const catFile = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let catContent = fs.readFileSync(catFile, 'utf8');
const catLines = catContent.split('\n');
let currentCatPkgId = null;

for (let i = 0; i < catLines.length; i++) {
  const line = catLines[i];
  const idMatch = line.match(/^\s*id:\s*(\d+)\s*,/);
  if (idMatch) {
    currentCatPkgId = parseInt(idMatch[1]);
  }
  
  if (currentCatPkgId && imgMapping[currentCatPkgId]) {
    if (line.match(/^\s*image\s*:\s*['"]/)) {
      catLines[i] = line.replace(/(['"]).*?(['"])/, `$1${imgMapping[currentCatPkgId]}$2`);
    }
  }
  
  if (line.match(/^\s*\},?\s*$/)) {
    currentCatPkgId = null;
  }
}
fs.writeFileSync(catFile, catLines.join('\n'));
console.log('Updated TourCategory.tsx');
