const fs = require('fs');
const file = 'src/pages/PackageDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = 'className="flex flex-wrap items-center gap-2 text-white/90 text-sm font-semibold mb-4 drop-shadow-md"';
const replacement = 'className="flex flex-wrap items-center gap-2 text-white/90 text-base md:text-lg font-semibold mb-4 drop-shadow-md"';

content = content.replace(target, replacement);

fs.writeFileSync(file, content);
console.log('Replaced');
