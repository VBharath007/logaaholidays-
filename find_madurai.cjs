const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
const regex = /'(\d{4})':\s*\{\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const id = parseInt(match[1]);
    if (id >= 2025 && id <= 2099) {
        console.log(match[1] + ' - ' + match[2]);
    }
}
