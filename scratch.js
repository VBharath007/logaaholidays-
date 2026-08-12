const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
const regex = /'(\d{4})':\s*\{\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    if (match[2].toLowerCase().includes('kumbakonam') || 
        match[2].toLowerCase().includes('shirdi') ||
        match[2].toLowerCase().includes('trichy') ||
        match[2].toLowerCase().includes('thiruchendur') ||
        match[2].toLowerCase().includes('megamalai') ||
        match[2].toLowerCase().includes('thanjavur')) {
        console.log(match[1] + ' - ' + match[2]);
    }
}
