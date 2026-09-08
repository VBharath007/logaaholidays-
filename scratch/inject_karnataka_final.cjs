const fs = require('fs');
const newPackages = JSON.parse(fs.readFileSync('scratch/karnataka.json', 'utf8'));

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const marker = '// Helper normalization function for strings to ensure "Days first, Nights second"';
const markerIndex = content.indexOf(marker);

if (markerIndex !== -1) {
    const lastBraceIndex = content.lastIndexOf('};', markerIndex);
    
    if (lastBraceIndex !== -1) {
        let toInsert = ',\n'; // Add comma before the new packages to separate from the previous last package
        const entries = Object.entries(newPackages);
        for (let i = 0; i < entries.length; i++) {
            const [id, pkg] = entries[i];
            const isLast = (i === entries.length - 1);
            // Don't add a trailing comma on the very last package to be clean, although it's fine in JS. Actually I'll just add it, it's fine in TS.
            toInsert += '  "' + id + '": ' + JSON.stringify(pkg, null, 4).replace(/\n/g, '\n  ') + ',\n';
        }
        
        // Remove trailing comma from toInsert to be safe, so we don't end with `,\n};` which is ok but maybe linter complains
        toInsert = toInsert.replace(/,\n$/, '\n');
        
        // We want to insert right before the `}` in `};`
        const newContent = content.substring(0, lastBraceIndex) + toInsert + content.substring(lastBraceIndex);
        fs.writeFileSync('src/pages/PackageDetails.tsx', newContent, 'utf8');
        console.log('Packages successfully injected into the CORRECT place!');
    } else {
        console.log('Could not find last }; before normalizeDurationOrder');
    }
} else {
    console.log('Could not find normalizeDurationOrder marker');
}
