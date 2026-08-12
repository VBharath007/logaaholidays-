const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
const regex = /'(\d{4})':\s*\{\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const t = match[2].toLowerCase();
    if (t.includes('thanjavur') && t.includes('trichy') && t.includes('kumbakonam')) {
        console.log(match[1] + ' - ' + match[2]);
    }
}
