const fs = require('fs');

const packages = [
  {
    title: 'Madurai → Kodaikanal → Munnar 4 Days / 3 Nights Tour Package',
    image: '/assets/munnar.avif'
  },
  {
    title: 'Madurai → Munnar → Vagamon → Thekkady 4 Days / 3 Nights Tour Package',
    image: '/assets/kerala1.avif'
  },
  {
    title: 'Madurai → Munnar → Thekkady → Kumarakom 4 Days / 3 Nights Tour Package',
    image: '/assets/kerala6.avif'
  },
  {
    title: 'Madurai → Munnar → Alleppey → Kochi 4 Days / 3 Nights Tour Package',
    image: '/assets/kerala4.avif'
  },
  {
    title: 'Madurai → Trichy → Thanjavur → Kumbakonam 4 Days / 3 Nights Tour Package',
    image: '/assets/Tamil Nadu2.avif'
  },
  {
    title: 'Madurai → Valparai → Athirappilly → Kochi 4 Days / 3 Nights Tour Package',
    image: '/assets/kerala3.avif'
  },
  {
    title: 'Madurai → Kodaikanal → Munnar → Thekkady 5 Days / 4 Nights Tour Package',
    image: '/assets/kerala5.avif'
  },
  {
    title: 'Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days / 3 Nights Tour Package',
    image: '/assets/rameshwaram.avif'
  }
];

const updateFile = (path, isPackageDetails) => {
  let content = fs.readFileSync(path, 'utf8');
  const lines = content.split('\n');
  for (const pkg of packages) {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`title: '${pkg.title}'`) || lines[i].includes(`"title": "${pkg.title}"`)) {
        for (let j = i + 1; j < i + 8; j++) {
          if (lines[j]) {
            if (isPackageDetails && lines[j].includes('"image":')) {
              lines[j] = lines[j].replace(/"image":\s*".*?"/, `"image": "${pkg.image}"`);
            }
            if (isPackageDetails && lines[j].includes('"heroImage":')) {
              lines[j] = lines[j].replace(/"heroImage":\s*".*?"/, `"heroImage": "${pkg.image}"`);
            }
            if (!isPackageDetails && lines[j].includes('image:')) {
              lines[j] = lines[j].replace(/image:\s*'.*?'/, `image: '${pkg.image}'`);
            }
          }
        }
      }
    }
  }
  fs.writeFileSync(path, lines.join('\n'));
}

updateFile('d:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx', true);
updateFile('d:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx', false);
console.log('Replaced images successfully in both files.');
