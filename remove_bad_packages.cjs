const fs = require('fs');

const path = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

// We need to carefully remove the bad duplicate IDs.
// Bad IDs: 47 to 109 that duplicate Madurai packages.
const badIds = [
  '47', '49', '51', '52', '53', '55', '57', '63', '65', '67', '68', '70', '71', '72', '73', '74', '75', '76', '78', '79', '80', '81', '82', '83', '84', '85', '88', '89', '90', '93', '95', '96', '98', '99', '100', '102', '103', '108'
];

let newContent = content;

badIds.forEach(id => {
  // Find the block for this ID
  // It starts with `  'ID': {` or `  "ID": {`
  const regex = new RegExp(`\\s*(['"])${id}\\1:\\s*\\{[\\s\\S]*?\\n  \\},`, 'g');
  newContent = newContent.replace(regex, '');
});

fs.writeFileSync(path, newContent);
console.log('Removed bad dummy packages from PackageDetails.tsx');

// Also remove from TourCategory.tsx
const tcPath = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let tcContent = fs.readFileSync(tcPath, 'utf8');
badIds.forEach(id => {
  const tcRegex = new RegExp(`\\s*\\{\\s*id:\\s*${id},[\\s\\S]*?\\n\\s*\\},`, 'g');
  tcContent = tcContent.replace(tcRegex, '');
});
fs.writeFileSync(tcPath, tcContent);
console.log('Removed bad dummy packages from TourCategory.tsx');
