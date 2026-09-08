const fs = require('fs');
const newPackages = JSON.parse(fs.readFileSync('scratch/karnataka.json', 'utf8'));

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const marker = '};\n\nexport function PackageDetails() {';
const index = content.indexOf(marker);

if (index !== -1) {
    let toInsert = '';
    for (const [id, pkg] of Object.entries(newPackages)) {
        toInsert += '  "' + id + '": ' + JSON.stringify(pkg, null, 4).replace(/\n/g, '\n  ') + ',\n';
    }
    
    const newContent = content.substring(0, index) + toInsert + content.substring(index);
    fs.writeFileSync('src/pages/PackageDetails.tsx', newContent, 'utf8');
    console.log('Packages successfully injected!');
} else {
    console.log('Could not find injection point');
}
