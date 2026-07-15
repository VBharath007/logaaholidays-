const fs = require('fs');

let c = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

c = c.replace(
  "location.pathname.startsWith('/tour-packages/') && location.pathname !== '/tour-packages'",
  "location.pathname.startsWith('/north-india-tour-packages/') && location.pathname !== '/north-india-tour-packages'"
);

fs.writeFileSync('src/components/Navbar.tsx', c);
console.log('Replaced');
