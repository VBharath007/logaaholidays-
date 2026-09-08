const fs = require('fs');
const file = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix ID 29 broken image
content = content.replace(/['"]?29['"]?\s*:\s*\{[\s\S]*?(?="image"|image)\s*(?:"image"|image)\s*:\s*['"][^'"]*['"]/, match => {
  return match.replace(/(['"]).*?(['"])$/, `$1/assets/Chidambaram.avif$2`);
});

// Fix ID 45 image
content = content.replace(/['"]?45['"]?\s*:\s*\{[\s\S]*?(?="image"|image)\s*(?:"image"|image)\s*:\s*['"][^'"]*['"]/, match => {
  return match.replace(/(['"]).*?(['"])$/, `$1/assets/Chidambaram.avif$2`); // Use Chidambaram
});

// Fix ID 2001 destination and image
content = content.replace(/['"]?2001['"]?\s*:\s*\{[\s\S]*?(?="overview"|overview)\s*(?:"overview"|overview)\s*:\s*\{[\s\S]*?(?="destination"|destination)\s*(?:"destination"|destination)\s*:\s*['"]([^'"]*)['"]/, match => {
  return match.replace(/(['"]Varanasi['"]|['"]Varanasi['"])$/, `'Ayodhya'`);
});

content = content.replace(/['"]?2001['"]?\s*:\s*\{[\s\S]*?(?="image"|image)\s*(?:"image"|image)\s*:\s*['"][^'"]*['"]/, match => {
  return match.replace(/(['"]).*?(['"])$/, `$1/assets/generated/ayodhya_ram_mandir_pkg.png$2`);
});

fs.writeFileSync(file, content);
console.log('Fixed IDs 29, 45, and 2001');

// Also fix in TourCategory.tsx
const catFile = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let catContent = fs.readFileSync(catFile, 'utf8');

catContent = catContent.replace(/(id:\s*29[\s\S]*?image:\s*)(['"])[^'"]*(['"])/g, `$1$2/assets/Chidambaram.avif$3`);
catContent = catContent.replace(/(id:\s*45[\s\S]*?image:\s*)(['"])[^'"]*(['"])/g, `$1$2/assets/Chidambaram.avif$3`);
catContent = catContent.replace(/(id:\s*2001[\s\S]*?destination:\s*)(['"])[^'"]*(['"])/g, `$1$2Ayodhya$3`);
catContent = catContent.replace(/(id:\s*2001[\s\S]*?image:\s*)(['"])[^'"]*(['"])/g, `$1$2/assets/generated/ayodhya_ram_mandir_pkg.png$3`);

fs.writeFileSync(catFile, catContent);
console.log('Fixed TourCategory.tsx');
