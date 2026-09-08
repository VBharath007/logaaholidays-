const fs = require('fs');
const newPackages = JSON.parse(fs.readFileSync('scratch/kashmir.json', 'utf8'));

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const marker = '// Helper normalization function for strings to ensure "Days first, Nights second"';
const markerIndex = content.indexOf(marker);

if (markerIndex !== -1) {
    const lastBraceIndex = content.lastIndexOf('};', markerIndex);
    
    if (lastBraceIndex !== -1) {
        let toInsert = ',\n'; 
        const entries = Object.entries(newPackages);
        for (let i = 0; i < entries.length; i++) {
            const [id, pkg] = entries[i];
            const isLast = (i === entries.length - 1);
            toInsert += '  "' + id + '": ' + JSON.stringify(pkg, null, 4).replace(/\n/g, '\n  ') + ',\n';
        }
        
        toInsert = toInsert.replace(/,\n$/, '\n');
        
        const newContent = content.substring(0, lastBraceIndex) + toInsert + content.substring(lastBraceIndex);
        fs.writeFileSync('src/pages/PackageDetails.tsx', newContent, 'utf8');
        console.log('Kashmir Packages successfully injected into the CORRECT place!');
    } else {
        console.log('Could not find last }; before normalizeDurationOrder');
    }
} else {
    console.log('Could not find normalizeDurationOrder marker');
}
