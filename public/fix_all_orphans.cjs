// fix_all_orphans.cjs - injects missing package headers for all orphaned bodies
const fs = require('fs');

const filePath = 'src/pages/PackageDetails.tsx';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Map of package ID -> header info to inject
const packageHeaders = {
  '2025': { title: 'Madurai One Day Tour Package | Best Local Sightseeing', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png', duration: 'One Day', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2027': { title: 'Madurai to Kodaikanal One Day Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png', duration: 'One Day', destination: 'Madurai', activities: 'Sightseeing, Nature', themes: 'Nature & Adventure, Culture & Heritage' },
  '2028': { title: 'Madurai to Rameswaram One Day Tour Package', image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png', duration: 'One Day', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2029': { title: 'Madurai to Thekkady One Day Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png', duration: 'One Day', destination: 'Madurai', activities: 'Nature, Wildlife, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2030': { title: 'Madurai to Kanyakumari One Day Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png', duration: 'One Day', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2031': { title: 'Madurai to Trichy One Day Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraionedaypackage.png', duration: 'One Day', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2032': { title: 'Madurai to Thekkady One Day Trip | Private A/C Vehicle', image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png', duration: 'One Day', destination: 'Madurai', activities: 'Nature, Wildlife, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2033': { title: 'Madurai to Munnar 2 Days / 1 Night Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '2 Days / 1 Night', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2034': { title: 'Madurai to Trichy & Thanjavur 2 Days / 1 Night Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraitrichythanjavur.png', duration: '2 Days / 1 Night', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2035': { title: 'Madurai to Tiruchendur 2 Days / 1 Night Tour Package', image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraitiruchendur.png', duration: '2 Days / 1 Night', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2036': { title: 'Madurai to Kanyakumari 2 Days / 1 Night Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikanyakumari.png', duration: '2 Days / 1 Night', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2037': { title: 'Madurai to Thekkady to Alleppey 2 Days / 1 Night Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png', duration: '2 Days / 1 Night', destination: 'Madurai', activities: 'Nature, Backwaters, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2038': { title: 'Madurai to Munnar 2 Days / 1 Night Budget Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '2 Days / 1 Night', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2039': { title: 'Madurai to Munnar 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2040': { title: 'Madurai to Kodaikanal 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2041': { title: 'Madurai to Thekkady 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Wildlife, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2042': { title: 'Madurai to Thekkady & Alleppey 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Backwaters, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2043': { title: 'Madurai to Meghamalai 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2044': { title: 'Madurai to Ooty 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2045': { title: 'Madurai to Munnar & Thekkady 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2046': { title: 'Madurai to Munnar & Alleppey 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Backwaters, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2047': { title: 'Madurai to Thekkady & Munnar 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Wildlife, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2048': { title: 'Madurai to Munnar & Kodaikanal 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2049': { title: 'Madurai to Munnar & Ooty 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2050': { title: 'Madurai to Thekkady & Kanyakumari 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraithekady1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraithekkadypackage.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Pilgrimage, Nature, Sightseeing', themes: 'Religious & Pilgrimage, Nature & Adventure' },
  '2051': { title: 'Madurai Sightseeing to Rameswaram 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/madurairameswaram.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2053': { title: 'Madurai to Kanyakumari 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikanyakumari.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2054': { title: 'Madurai to Kanyakumari & Rameswaram 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikanyakumari1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikanyakumari.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2055': { title: 'Madurai to Trichy & Rameswaram 3 Days / 2 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraitrichythanjavur.png', duration: '3 Days / 2 Nights', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2056': { title: 'Madurai Sightseeing to Rameswaram 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/madurairameswaram1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/madurairameswaram.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2057': { title: 'Madurai to Kodaikanal 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2058': { title: 'Madurai to Munnar 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2059': { title: 'Madurai to Munnar & Thekkady 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Nature, Wildlife, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2060': { title: 'Madurai to Munnar & Alleppey 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Nature, Backwaters, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2061': { title: 'Madurai to Trichy & Thanjavur 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitrichy1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraitrichythanjavur.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Pilgrimage, Sightseeing', themes: 'Religious & Pilgrimage, Culture & Heritage' },
  '2062': { title: 'Madurai to Kodaikanal & Thekkady 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Nature, Wildlife, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2063': { title: 'Madurai to Valparai 4 Days / 3 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraitomunnar2day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraimunnarpackage.png', duration: '4 Days / 3 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
  '2064': { title: 'Madurai to Kodaikanal 5 Days / 4 Nights Tour Package', image: '/assets/madurai%2063%20package/322x372/maduraikodaikanal1day.png', heroImage: '/assets/madurai%2063%20package/1918x642/maduraikodaikanal.png', duration: '5 Days / 4 Nights', destination: 'Madurai', activities: 'Nature, Sightseeing', themes: 'Nature & Adventure, Culture & Heritage' },
};

function makeHeader(id, h) {
  return [
    `  '${id}': {`,
    `    "title": "${h.title}",`,
    `    "image": "${h.image}",`,
    `    "heroImage": "${h.heroImage}",`,
    `    "overview": {`,
    `        "duration": "${h.duration}",`,
    `        "destination": "${h.destination}",`,
    `        "activities": "${h.activities}",`,
    `        "themes": "${h.themes}"`,
    `    },`,
  ];
}

const output = [];
let fixed = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].replace(/\r$/, '');
  const nextLine = i + 1 < lines.length ? lines[i + 1].replace(/\r$/, '') : '';

  output.push(lines[i]); // keep original (with \r if present)

  if (line.trim() === '},' && nextLine.trim().startsWith('"priceDetails":')) {
    // Look back up to 5 lines to find the ID
    let foundId = null;
    for (let j = i; j > Math.max(0, i - 5); j--) {
      const m = lines[j].replace(/\r$/, '').match(/"id":\s*"(\d+)"/);
      if (m) {
        foundId = String(parseInt(m[1]) + 1);
        break;
      }
    }
    if (foundId && packageHeaders[foundId]) {
      const headerLines = makeHeader(foundId, packageHeaders[foundId]);
      for (const hl of headerLines) {
        output.push(hl + '\r'); // preserve CRLF
      }
      fixed++;
      console.log(`✅ Injected header for package ${foundId}`);
    } else {
      console.log(`⚠️  Could not determine next ID at line ${i + 1}`);
    }
  }
}

fs.writeFileSync(filePath, output.join('\n'), 'utf8');
console.log(`\nDone. Fixed ${fixed} orphaned package bodies.`);
