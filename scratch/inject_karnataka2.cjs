const fs = require('fs');
const newPackages = JSON.parse(fs.readFileSync('scratch/karnataka.json', 'utf8'));

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const marker = 'const PackageDetails =';
const markerIndex = content.indexOf(marker);

if (markerIndex !== -1) {
    const lastBraceIndex = content.lastIndexOf('};', markerIndex);
    
    if (lastBraceIndex !== -1) {
        let toInsert = '';
        for (const [id, pkg] of Object.entries(newPackages)) {
            toInsert += '  "' + id + '": ' + JSON.stringify(pkg, null, 4).replace(/\n/g, '\n  ') + ',\n';
        }
        
        // We want to insert right before the `}` in `};`
        const newContent = content.substring(0, lastBraceIndex) + toInsert + content.substring(lastBraceIndex);
        fs.writeFileSync('src/pages/PackageDetails.tsx', newContent, 'utf8');
        console.log('Packages successfully injected!');
    } else {
        console.log('Could not find last };');
    }
} else {
    console.log('Could not find const PackageDetails =');
}
