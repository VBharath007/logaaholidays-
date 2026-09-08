// fix_orphaned_packages.cjs
// Fixes all orphaned package bodies in PackageDetails.tsx by injecting missing headers

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/PackageDetails.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Map of each orphaned ID to the header info we need to inject.
// Title, image, heroImage and overview fields extracted from the second 
// (well-formed) block or from the package's keywords/itinerary titles.
const packageHeaders = {
  '2025': {
    title: 'Madurai One Day Tour Package | Best Local Sightseeing',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png',
    duration: 'One Day',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2027': {
    title: 'Madurai to Kodaikanal One Day Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png',
    duration: 'One Day',
    destination: 'Madurai',
    activities: 'Sightseeing, Nature',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2028': {
    title: 'Madurai to Rameshwaram One Day Tour Package',
    image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png',
    duration: 'One Day',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2029': {
    title: 'Madurai to Thekkady One Day Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png',
    duration: 'One Day',
    destination: 'Madurai',
    activities: 'Nature, Wildlife, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2030': {
    title: 'Madurai to Kanyakumari One Day Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png',
    duration: 'One Day',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2031': {
    title: 'Madurai to Trichy One Day Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png',
    duration: 'One Day',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2032': {
    title: 'Madurai to Thekkady One Day Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png',
    duration: 'One Day',
    destination: 'Madurai',
    activities: 'Nature, Wildlife, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2033': {
    title: 'Madurai to Munnar 2 Days / 1 Night Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '2 Days / 1 Night',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2034': {
    title: 'Madurai to Trichy & Thanjavur 2 Days / 1 Night Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraitrichythanjavur.png',
    duration: '2 Days / 1 Night',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2035': {
    title: 'Madurai to Tiruchendur 2 Days / 1 Night Tour Package',
    image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraitiruchendur.png',
    duration: '2 Days / 1 Night',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2036': {
    title: 'Madurai to Kanyakumari 2 Days / 1 Night Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikanyakumari.png',
    duration: '2 Days / 1 Night',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2037': {
    title: 'Madurai to Thekkady to Alleppey 2 Days / 1 Night Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png',
    duration: '2 Days / 1 Night',
    destination: 'Madurai',
    activities: 'Nature, Backwaters, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2038': {
    title: 'Madurai to Munnar 2 Days / 1 Night Budget Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '2 Days / 1 Night',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2039': {
    title: 'Madurai to Munnar 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2040': {
    title: 'Madurai to Kodaikanal 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2041': {
    title: 'Madurai to Thekkady 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Wildlife, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2042': {
    title: 'Madurai to Thekkady & Alleppey 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Backwaters, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2043': {
    title: 'Madurai to Meghamalai 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2044': {
    title: 'Madurai to Ooty 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2045': {
    title: 'Madurai to Munnar & Thekkady 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2046': {
    title: 'Madurai to Munnar & Alleppey 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Backwaters, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2047': {
    title: 'Madurai to Thekkady & Munnar 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Wildlife, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2048': {
    title: 'Madurai to Munnar & Kodaikanal 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2049': {
    title: 'Madurai to Munnar & Ooty 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2050': {
    title: 'Madurai to Thekkady & Kanyakumari 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Pilgrimage, Nature, Sightseeing',
    themes: 'Religious & Pilgrimage, Nature & Adventure',
  },
  '2051': {
    title: 'Madurai Sightseeing → Rameswaram 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/madurairameswaram.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2053': {
    title: 'Madurai → Kanyakumari 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikanyakumari.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2054': {
    title: 'Madurai → Kanyakumari & Rameswaram 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikanyakumari.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2055': {
    title: 'Madurai → Trichy & Rameswaram 3 Days / 2 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraitrichythanjavur.png',
    duration: '3 Days / 2 Nights',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2056': {
    title: 'Madurai Sightseeing → Rameswaram 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/madurairameswaram.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2057': {
    title: 'Madurai → Kodaikanal 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2058': {
    title: 'Madurai → Munnar 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2059': {
    title: 'Madurai → Munnar & Thekkady 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Nature, Wildlife, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2060': {
    title: 'Madurai → Munnar & Alleppey 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Nature, Backwaters, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2061': {
    title: 'Madurai → Trichy & Thanjavur 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraitrichythanjavur.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
  },
  '2062': {
    title: 'Madurai → Kodaikanal & Thekkady 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Nature, Wildlife, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2063': {
    title: 'Madurai → Valparai 4 Days / 3 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png',
    duration: '4 Days / 3 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
  '2064': {
    title: 'Madurai → Kodaikanal 5 Days / 4 Nights Tour Package',
    image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png',
    heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png',
    duration: '5 Days / 4 Nights',
    destination: 'Madurai',
    activities: 'Nature, Sightseeing',
    themes: 'Nature & Adventure, Culture & Heritage',
  },
};

function buildHeader(id, info) {
  return `
  '${id}': {
    "title": "${info.title}",
    "image": "${info.image}",
    "heroImage": "${info.heroImage}",
    "overview": {
        "duration": "${info.duration}",
        "destination": "${info.destination}",
        "activities": "${info.activities}",
        "themes": "${info.themes}"
    },`;
}

// Replace each orphaned pattern: },\n    "priceDetails": 
// that follows "id": "XXXX"\n},
let fixed = 0;
for (const [id, info] of Object.entries(packageHeaders)) {
  // Match CRLF (\r\n) or LF (\n) - handles Windows line endings
  const pattern = new RegExp(
    `("id":\\s*"${id}"\\s*\\r?\\n\\s*\\}\\s*,\\s*\\r?\\n)(\\s*"priceDetails":)`,
    'g'
  );
  const before = content;
  content = content.replace(pattern, (match, closingPart, priceKey) => {
    fixed++;
    return `${closingPart.replace(/\},\s*[\r\n]+/, '}\n' + buildHeader(id, info) + '\n')}${priceKey}`;
  });
  if (content === before) {
    console.log(`⚠️  No orphaned body found for ID ${id} — skipped.`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\n✅ Fixed ${fixed} orphaned package headers in PackageDetails.tsx`);
