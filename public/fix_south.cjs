const fs = require('fs');

let c = fs.readFileSync('src/pages/SouthIndiaPackage.tsx', 'utf8');

c = c.replace(
  "import { generateSlug } from '../lib/utils'",
  "import { generateSlug } from '../lib/utils'\nimport { useSEO } from '../hooks/useSEO'"
);

c = c.replace(
  "export function SouthIndiaPackage() {",
  `export function SouthIndiaPackage() {
  useSEO(
    'Best South India Tour Packages | South India Tourism Places',
    'Discover the best South India tour packages with a highly trustable travel agent. Explore beautiful destinations across Tamil Nadu, Kerala, and more.',
    'south india tour packages, best south india tour packages, south india tourism, trustable travel agent south india, tamil nadu tours, kerala tours'
  );`
);

fs.writeFileSync('src/pages/SouthIndiaPackage.tsx', c);
console.log('South India SEO updated');
