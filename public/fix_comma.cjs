const fs = require('fs');
let c = fs.readFileSync('src/data/destinationsData.ts', 'utf8');
c = c.replace(/\\s*\\n\\s*'madurai-tourism': \\{/, ",\\n  'madurai-tourism': {");
fs.writeFileSync('src/data/destinationsData.ts', c, 'utf8');
console.log('Fixed missing comma');
