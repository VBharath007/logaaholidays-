const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
const regex = /'(\d+)':\s*\{\s*"title":\s*"([^"]+)"[\s\S]*?"destination":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const t = match[2].toLowerCase();
    const d = match[3].toLowerCase();
    if ( (t.includes('kochi') || d.includes('kochi')) && !(t.includes('cochin') || d.includes('cochin')) ) {
        console.log(match[1] + ' : ' + match[2]);
    }
}
