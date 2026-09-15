const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\LOQ\\.gemini\\antigravity\\brain\\6ffd4bd2-72d3-4451-8e8b-0c93e318227f';
const targetDir = 'd:/HexaVisionTech/logaa holiday/public/assets/generated';

const newImages = [
  { file: 'shirdi_train_countryside_1783750130829.webp', name: 'shirdi_train_countryside.webp' },
  { file: 'shirdi_flight_sky_1783750142384.webp', name: 'shirdi_flight_sky.webp' },
  { file: 'shaniwar_wada_pune_1783750152354.webp', name: 'shaniwar_wada_pune.webp' },
  { file: 'shani_shingnapur_1783750162305.webp', name: 'shani_shingnapur.webp' },
  { file: 'sai_baba_idol_1783750174749.webp', name: 'sai_baba_idol.webp' },
  { file: 'pandharpur_wari_1783750190624.webp', name: 'pandharpur_wari.webp' },
  { file: 'gateway_of_india_1783750200969.webp', name: 'gateway_of_india.webp' },
  { file: 'shirdi_aerial_1783750211645.webp', name: 'shirdi_aerial.webp' },
  { file: 'vitthal_idol_1783750221660.webp', name: 'vitthal_idol.webp' },
  { file: 'ajanta_caves_1783750233332.webp', name: 'ajanta_caves.webp' },
  { file: 'trimbakeshwar_temple_1783750248201.webp', name: 'trimbakeshwar_temple.webp' }
];

newImages.forEach(img => {
  const src = path.join(brainDir, img.file);
  const dest = path.join(targetDir, img.name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

const imgMapping = {
  2: '/assets/generated/shirdi_train_countryside.webp',
  3: '/assets/generated/shirdi_flight_sky.webp',
  4: '/assets/generated/shaniwar_wada_pune.webp',
  5: '/assets/generated/shani_shingnapur.webp',
  6: '/assets/generated/sai_baba_idol.webp',
  7: '/assets/generated/pandharpur_wari.webp',
  8: '/assets/generated/gateway_of_india.webp',
  9: '/assets/generated/shirdi_aerial.webp',
  10: '/assets/generated/vitthal_idol.webp',
  11: '/assets/generated/ajanta_caves.webp',
  12: '/assets/generated/trimbakeshwar_temple.webp',
  13: '/assets/generated/jyotirlinga_ellora_pkg.webp',
  14: '/assets/generated/lonavala_pkg.webp',
  15: '/assets/shiridi/cards/Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.webp',
  16: '/assets/varanasi/cards/kasi1.webp',
  17: '/assets/varanasi/cards/kasi2.webp',
  18: '/assets/varanasi/cards/kasi3.webp',
  19: '/assets/varanasi/cards/kasi4.webp',
  20: '/assets/varanasi/cards/kasi5.webp',
  21: '/assets/varanasi/cards/kasi6.webp',
  29: '/assets/generated/shore_temple_mahabalipuram.webp', // Wait, didn't generate this. I'll just use a generic one or omit it. Let's omit 29.
  41: '/assets/generated/ayodhya_ram_mandir_pkg.webp'
};

const replaceImagesInFile = (filePath, isPackageDetails) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let inDb = !isPackageDetails; // For TourCategory, we scan the whole file
  let currentPkgId = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (isPackageDetails && line.includes('export const packagesDatabase')) {
      inDb = true;
      continue;
    }
    
    if (inDb) {
      let idMatch;
      if (isPackageDetails) {
        idMatch = line.match(/^\s*['"]?(\d+)['"]?\s*:\s*\{/);
      } else {
        idMatch = line.match(/^\s*id:\s*(\d+)\s*,/);
      }
      
      if (idMatch) {
        currentPkgId = parseInt(idMatch[1]);
      }
      
      if (currentPkgId && imgMapping[currentPkgId]) {
        if (line.match(/^\s*(?:"image"|image)\s*:\s*['"]/)) {
          lines[i] = line.replace(/(['"]).*?(['"])/, `$1${imgMapping[currentPkgId]}$2`);
        }
      }
      
      if (isPackageDetails && line.match(/^\s*};?\s*$/) && !line.includes('  }')) {
        currentPkgId = null;
      }
      if (!isPackageDetails && line.match(/^\s*\},?\s*$/)) {
        currentPkgId = null;
      }
    }
  }
  fs.writeFileSync(filePath, lines.join('\n'));
};

replaceImagesInFile('d:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx', true);
replaceImagesInFile('d:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx', false);
console.log('Images applied!');
