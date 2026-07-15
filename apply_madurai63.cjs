const fs = require('fs');

const img1_card = '/assets/madurai 63 package/Madurai to Kasi, Gaya & Prayagraj Tour Package  5 Days  4 Nights Flight Package -card.png';
const img1_hero = '/assets/madurai 63 package/Madurai to Kasi, Gaya & Prayagraj Tour Package  5 Days  4 Nights Flight Package- heroseaction.PNG';
const title1 = 'Madurai to Kasi, Gaya & Prayagraj Tour Package | 5 Days / 4 Nights Flight Package';

const img2_card = '/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days / 3 Nights Tour Package -card.png'; // Wait, the file is named without the '/' in '4 Days  3 Nights'. The file name is '4 Days  3 Nights Tour Package -card.png'
const actual_img2_card = '/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package -card.png';
const actual_img2_hero = '/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package.png';
const title2 = 'Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days / 3 Nights Tour Package';


const replaceImages = (file, isPackageDetails) => {
  let content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  let currentTarget = null;
  
  for(let i=0; i<lines.length; i++) {
    const line = lines[i];
    
    // Check if we hit a title
    if (line.includes(title1)) currentTarget = 1;
    if (line.includes(title2)) currentTarget = 2;
    
    // If we are currently tracking a target, look for image / heroImage
    if (currentTarget === 1) {
      if(line.match(/^\s*(?:"image"|image)\s*:\s*['"]/)) {
        lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img1_card}$2`);
      }
      if(line.match(/^\s*(?:"heroImage"|heroImage)\s*:\s*['"]/)) {
        lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img1_hero}$2`);
      }
    }
    
    if (currentTarget === 2) {
      if(line.match(/^\s*(?:"image"|image)\s*:\s*['"]/)) {
        lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${actual_img2_card}$2`);
      }
      if(line.match(/^\s*(?:"heroImage"|heroImage)\s*:\s*['"]/)) {
        lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${actual_img2_hero}$2`);
      }
    }
    
    // End block
    if(line.match(/^\s*\},?\s*$/) && !line.includes('  }')) {
      currentTarget = null;
    }
  }
  
  fs.writeFileSync(file, lines.join('\n'));
}

replaceImages('d:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx', true);
replaceImages('d:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx', false);
console.log('Images applied!');
