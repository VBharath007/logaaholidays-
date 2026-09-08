const fs = require('fs');
let content = fs.readFileSync('d:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx', 'utf8');

// The bad block starts at ` {\\n id: 2,\\n title: \`\\$\\{categoryTitle`
const badStart = content.indexOf(' {\n id: 2,\n title: `${categoryTitle');
if (badStart !== -1) {
  // Find where the 2025 object starts
  const badEnd = content.indexOf('  {\n    id: 2025,\n    placeId: \'madurai\',');
  if (badEnd !== -1) {
    console.log('Found block from', badStart, 'to', badEnd);
    let newContent = content.substring(0, badStart) + content.substring(badEnd);
    fs.writeFileSync('d:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx', newContent);
    console.log('Fixed file.');
  } else {
    console.log('Could not find badEnd');
  }
} else {
  console.log('Could not find badStart');
}
