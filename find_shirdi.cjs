const fs = require('fs');

const path = './src/pages/PackageDetails.tsx';
const content = fs.readFileSync(path, 'utf8');

// Find all occurrences of package blocks
let match;
const regex = /'(\d+)':\s*\{\s*"title":\s*"(.*?Shirdi.*?)"/gi;
const packages = [];
while ((match = regex.exec(content)) !== null) {
    packages.push({ id: match[1], title: match[2] });
}

console.log(JSON.stringify(packages, null, 2));
