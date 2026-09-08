const fs = require('fs');
const path = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

// The only real broken package was 2008 (missing title+image+heroImage+overview)
// Let's add those missing fields properly

const broken2008 = "'2008': {\r\n    \"priceDetails\": {";
const fixed2008 = `'2008': {
    "id": "2008",
    "title": "Madurai to Kasi, Gaya & Prayagraj Tour Package | 5 Days / 4 Nights Flight Package",
    "image": "/assets/varanasi/cards/kasi9.png",
    "heroImage": "/assets/varanasi/hero/kasibanner9.png",
    "overview": {
        "duration": "5 Days / 4 Nights",
        "destination": "Varanasi",
        "activities": "Pilgrimage, Sightseeing",
        "themes": "Religious & Pilgrimage, Culture & Heritage"
    },
    "priceDetails": {`;

if (content.includes(broken2008)) {
  content = content.replace(broken2008, fixed2008);
  fs.writeFileSync(path, content);
  console.log('Fixed package 2008!');
} else {
  console.log('Pattern not found. Trying alternate line endings...');
  // Try with \n only
  const broken2008_lf = "'2008': {\n    \"priceDetails\": {";
  if (content.includes(broken2008_lf)) {
    const fixed2008_lf = fixed2008.replace(/\r\n/g, '\n');
    content = content.replace(broken2008_lf, fixed2008_lf);
    fs.writeFileSync(path, content);
    console.log('Fixed package 2008 (LF)!');
  } else {
    // Show what's actually there
    const idx = content.indexOf("'2008': {");
    if (idx !== -1) {
      console.log('Raw bytes around 2008:');
      console.log(JSON.stringify(content.substring(idx, idx + 100)));
    }
  }
}
