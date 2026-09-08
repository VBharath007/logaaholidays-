const fs = require('fs');

let content = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const searchStr = "'andaman-tourism': {";
const startIdx = content.indexOf(searchStr);

if (startIdx !== -1) {
    const popIdx = content.indexOf('"popularPackages": ["6001", "6002"]', startIdx);
    
    if (popIdx !== -1) {
        content = content.substring(0, popIdx) + '"popularPackages": ["6001", "6002", "6003", "6004"]' + content.substring(popIdx + 37);
        fs.writeFileSync('src/data/destinationsData.ts', content, 'utf8');
        console.log("Successfully updated popularPackages with 6003 and 6004!");
    } else {
        console.log("Could not find popularPackages array with 6001 and 6002.");
    }
} else {
    console.log("Could not find andaman-tourism.");
}
