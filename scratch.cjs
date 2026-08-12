const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// Quick and dirty regex extraction of packages
const regex = /"id":\s*"([^"]+)",[\s\S]*?"title":\s*"([^"]+)"/g;
let match;
const chennaiPackages = [];

while ((match = regex.exec(content)) !== null) {
  if (match[2].toLowerCase().includes('chennai')) {
    chennaiPackages.push({ id: match[1], title: match[2] });
  }
}

console.log(chennaiPackages);
