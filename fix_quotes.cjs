const fs = require('fs');
let c = fs.readFileSync('src/data/destinationsData.ts', 'utf8');
c = c.replace(/\\\\'/g, "\\'");
fs.writeFileSync('src/data/destinationsData.ts', c, 'utf8');
console.log('Fixed quotes');
