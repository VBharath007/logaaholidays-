const fs = require('fs');

let content = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

// The andaman-tourism block ends with "popularPackages": []
// Let's find it.
const searchStr = "'andaman-tourism': {";
const startIdx = content.indexOf(searchStr);

if (startIdx !== -1) {
    const endIdx = content.indexOf('}', startIdx + 1500); // rough estimate
    
    // Actually, just find the string `"popularPackages": []` that comes after startIdx
    const popIdx = content.indexOf('"popularPackages": []', startIdx);
    
    if (popIdx !== -1) {
        content = content.substring(0, popIdx) + '"popularPackages": ["6001", "6002"]' + content.substring(popIdx + 21);
        fs.writeFileSync('src/data/destinationsData.ts', content, 'utf8');
        console.log("Successfully updated popularPackages!");
    } else {
        console.log("Could not find popularPackages array.");
    }
} else {
    console.log("Could not find andaman-tourism.");
}
