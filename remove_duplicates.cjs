const fs = require('fs');

const path = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /'(\d+)':\s*\{[\s\S]*?\n\s*\},/g;
let match;
const packages = [];
let databaseObj;

// It's safer to just require the file if it's executable, but it's TSX.
// Let's write a script to extract all IDs and titles.
const idTitleRegex = /'(\d+)':\s*{\s*(?:\"id\":\s*\"\d+\",\s*)?\"title\":\s*\"(.*?)\"/g;
while ((match = idTitleRegex.exec(content)) !== null) {
  packages.push({ id: match[1], title: match[2] });
}

const titleCount = {};
packages.forEach(p => {
  titleCount[p.title] = (titleCount[p.title] || 0) + 1;
});

const duplicates = Object.keys(titleCount).filter(t => titleCount[t] > 1);
console.log('Found ' + duplicates.length + ' duplicate titles.');

const idsToRemove = new Set();
duplicates.forEach(title => {
  const pkgs = packages.filter(p => p.title === title);
  console.log(title + ' -> IDs: ' + pkgs.map(p => p.id).join(', '));
  
  // Find which ID is the "good" one. The good one is usually the one with a longer string length in the file (more itinerary data).
  let maxLength = 0;
  let bestId = null;
  
  pkgs.forEach(p => {
    // find the block in the file
    const blockRegex = new RegExp(`'${p.id}':\\s*\\{[\\s\\S]*?\\n\\s*\\},`);
    const blockMatch = blockRegex.exec(content);
    if (blockMatch) {
      if (blockMatch[0].length > maxLength) {
        maxLength = blockMatch[0].length;
        bestId = p.id;
      }
    }
  });
  
  pkgs.forEach(p => {
    if (p.id !== bestId) {
      idsToRemove.add(p.id);
    }
  });
});

console.log('IDs to remove: ', Array.from(idsToRemove));

// Now remove them from PackageDetails.tsx
let newContent = content;
idsToRemove.forEach(id => {
  const blockRegex = new RegExp(`\\s*'${id}':\\s*\\{[\\s\\S]*?\\n\\s*\\},`);
  newContent = newContent.replace(blockRegex, '');
});

fs.writeFileSync(path, newContent);
console.log('Removed duplicates from PackageDetails.tsx');

// Also remove from TourCategory.tsx
const tcPath = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let tcContent = fs.readFileSync(tcPath, 'utf8');
idsToRemove.forEach(id => {
  const tcBlockRegex = new RegExp(`\\s*\\{\\s*id:\\s*${id},[\\s\\S]*?\\n\\s*\\},`);
  tcContent = tcContent.replace(tcBlockRegex, '');
});
fs.writeFileSync(tcPath, tcContent);
console.log('Removed duplicates from TourCategory.tsx');
