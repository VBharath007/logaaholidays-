const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
const regex = /'(\d+)':\s*\{\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const title = match[2];
    if (title.includes('Kumbakonam') || title.includes('Thanjavur')) {
        console.log(match[1] + ' : ' + match[2]);
    }
}
