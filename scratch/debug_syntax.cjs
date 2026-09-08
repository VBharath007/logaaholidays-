const fs = require('fs');
let content = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const idx = content.indexOf("popularPackages: ['5001'");
if (idx !== -1) {
    console.log(JSON.stringify(content.slice(idx, idx + 200)));
} else {
    console.log("Not found");
}
