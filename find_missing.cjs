const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
// match id whether it has quotes or not
const regex = /(?:'|")?(\d+)(?:'|")?\s*:\s*\{\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const title = match[2];
    if (title.toLowerCase().includes('thanjavur') && title.toLowerCase().includes('kumbakonam') && !title.toLowerCase().includes('madurai')) {
        console.log(match[1] + ' : ' + match[2]);
    }
}
