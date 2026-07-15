const fs = require('fs');

let c = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

c = c.replace(
  /items: \[\n\s*{ href: '\/packages\/shirdi-flight-package-from-madurai-direct-flight-2-days'[\s\S]*?\]/m,
  "items: [\n { href: '/north-india-tour-packages/shirdi-tours', label: 'Shirdi' }\n ]"
);

c = c.replace(
  /items: \[\n\s*{ href: '\/packages\/kasi-flight-package-from-chennai-1-night-2-days'[\s\S]*?\]/m,
  "items: [\n { href: '/north-india-tour-packages/varanasi-tours', label: 'Varanasi' }\n ]"
);

fs.writeFileSync('src/components/Navbar.tsx', c);
console.log('Reverted Navbar');
