const fs = require('fs');

const path = './src/pages/PackageDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /'(\d+)':\s*\{[\s\S]*?(?:(?:title|"title")\s*:\s*['"](.*?)['"])[\s\S]*?(?:(?:destination|"destination")\s*:\s*['"](.*?)['"])/gi;
let match;
const shirdiPackages = [];
while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const title = match[2];
    const destination = match[3];
    if (title.toLowerCase().includes('shirdi') || destination.toLowerCase().includes('shirdi')) {
        shirdiPackages.push(id);
    }
}

console.log('Shirdi packages found:', shirdiPackages.length);
console.log(shirdiPackages.join(', '));
