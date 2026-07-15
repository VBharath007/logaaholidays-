const fs = require('fs');

const img29_card = '/assets/chennai/10 Night - 11 Days Tamil Nadu Tour Package card.png';
const img29_hero = '/assets/chennai/10 Night - 11 Days Tamil Nadu Tour Package.png';
const img45_card = '/assets/chennai/Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai card.png';
const img45_hero = '/assets/chennai/Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai.png';

const pkgFile = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let pkgContent = fs.readFileSync(pkgFile, 'utf8');

const lines = pkgContent.split('\n');
let currentId = null;

for(let i=0; i<lines.length; i++) {
  const line = lines[i];
  
  const matchId = line.match(/^\s*['"]?(\d+)['"]?\s*:\s*\{\s*$/);
  if(matchId) {
    currentId = matchId[1];
  }
  
  if(currentId === '29' || currentId === '2029') {
    if(line.match(/^\s*(?:"image"|image)\s*:\s*['"]/)) {
      lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img29_card}$2`);
    }
    if(line.match(/^\s*(?:"heroImage"|heroImage)\s*:\s*['"]/)) {
      lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img29_hero}$2`);
    }
  }
  
  if(currentId === '45' || currentId === '2045') {
    if(line.match(/^\s*(?:"image"|image)\s*:\s*['"]/)) {
      lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img45_card}$2`);
    }
    if(line.match(/^\s*(?:"heroImage"|heroImage)\s*:\s*['"]/)) {
      lines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img45_hero}$2`);
    }
  }
  
  if(line.match(/^\s*\},?\s*$/) && !line.includes('  }')) {
    currentId = null;
  }
}

fs.writeFileSync(pkgFile, lines.join('\n'));
console.log('Updated PackageDetails.tsx');

const catFile = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let catContent = fs.readFileSync(catFile, 'utf8');
const catLines = catContent.split('\n');
let currentCatId = null;

for(let i=0; i<catLines.length; i++) {
  const line = catLines[i];
  const matchId = line.match(/^\s*id:\s*(\d+)\s*,/);
  if(matchId) {
    currentCatId = matchId[1];
  }
  
  if(currentCatId === '29' || currentCatId === '2029') {
    if(line.match(/^\s*(?:"image"|image)\s*:\s*['"]/)) {
      catLines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img29_card}$2`);
    }
  }
  
  if(currentCatId === '45' || currentCatId === '2045') {
    if(line.match(/^\s*(?:"image"|image)\s*:\s*['"]/)) {
      catLines[i] = line.replace(/(['"]).*?(['"])$/, `$1${img45_card}$2`);
    }
  }
  
  if(line.match(/^\s*\},?\s*$/)) {
    currentCatId = null;
  }
}
fs.writeFileSync(catFile, catLines.join('\n'));
console.log('Updated TourCategory.tsx');
