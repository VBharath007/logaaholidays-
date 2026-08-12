const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace desktop nav
content = content.replace(
  /(\? 'text-white\/80 hover:text-white'\s*\n\s*\}\`\})\s*\n\s*>/g, 
  "$1\n                  onClick={(e) => { if (link.href === '#') e.preventDefault(); }}>"
);

// Replace mobile nav
content = content.replace(
  /onClick=\{\(\) => \{ if \(!link\.submenu && !link\.categories\) setMenuOpen\(false\); \}\}/g,
  "onClick={(e) => { if (link.href === '#') e.preventDefault(); if (!link.submenu && !link.categories) setMenuOpen(false); }}"
);

fs.writeFileSync('src/components/Navbar.tsx', content, 'utf8');
console.log("Fixed Navbar!");
