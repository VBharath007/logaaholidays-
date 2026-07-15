const fs = require('fs');

let pd = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
pd = pd.replace(
    /pkg \? \\Explore the best \\\$\\{pkg.title\\} with Logaa Holidays\\ : 'Tour Package Details'/g,
    `pkg ? \`Explore the best \${pkg.title} with Logaa Holidays.\` : 'Tour Package Details'`
);
fs.writeFileSync('src/pages/PackageDetails.tsx', pd);

let tc = fs.readFileSync('src/pages/TourCategory.tsx', 'utf8');
// Fix invalid escape sequences
tc = tc.replace(/\\\\n/g, '\\n').replace(/\\\\'/g, "'");
fs.writeFileSync('src/pages/TourCategory.tsx', tc);
console.log('Fixed syntax errors');
