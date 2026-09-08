const fs = require('fs');

// 1. Prepare TourCategory.tsx summaries
let ts = fs.readFileSync('public/generated_packages.ts', 'utf8');
ts = ts.replace('export const newPackages = ', '').trim();
if(ts.endsWith(';')) ts = ts.slice(0, -1);
const newPackages = eval('(' + ts + ')');

let tc_items = [];
for (const id in newPackages) {
  const p = newPackages[id];
  tc_items.push(`  {
    id: ${id},
    title: '${p.title.replace(/'/g, "\\'")}',
    duration: '${p.overview.duration}',
    destination: '${p.overview.destination.replace(/'/g, "\\'")}',
    activities: '${p.overview.activities}',
    themes: '${p.overview.themes}',
    price: '${p.priceDetails.amount}',
    image: '${p.image}'
  }`);
}
const arrayStr = tc_items.join(',\n');

// 2. Inject into TourCategory.tsx (shirdiPackages and maduraiPackages)
let tc = fs.readFileSync('src/pages/TourCategory.tsx', 'utf8');

// remove the previously injected 1010 to 1024 blocks from TourCategory
for (let id = 1010; id <= 1024; id++) {
    const regexID = new RegExp(`\\s*\\{\\s*id:\\s*${id},[\\s\\S]*?image:.*\\s*\\},?\\n?`, 'g');
    tc = tc.replace(regexID, ''); // removes from wherever it is
}

tc = tc.replace(
  /const shirdiPackages = \[\s*/,
  `const shirdiPackages = [\n${arrayStr},\n`
);

tc = tc.replace(
  /const maduraiPackages = \[\s*/,
  `const maduraiPackages = [\n${arrayStr},\n`
);

fs.writeFileSync('src/pages/TourCategory.tsx', tc);

console.log('Injected all 14 packages into TourCategory.tsx (shirdi & madurai)');

// 3. Inject into PackageDetails.tsx safely using rebuild_pd.cjs logic
let pd = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
let parts = pd.split('export const packagesDatabase: Record<string, any> = {');

if (parts.length < 2) {
    console.log("Could not find packagesDatabase");
    process.exit(1);
}

let topReactCode = parts[0];
let dictStr = '{' + parts[1];

let cleanedDictStr = "";
let i = 0;
while (i < dictStr.length) {
    let matchedId = false;
    for (let id = 1010; id <= 1024; id++) {
        let chunk = dictStr.substring(i, i + 20).replace(/\s/g, ''); 
        if (chunk.startsWith(`'${id}':{`) || chunk.startsWith(`"${id}":{`)) {
            matchedId = true;
            break;
        }
    }
    
    if (matchedId) {
        let braceCount = 0;
        let started = false;
        while (i < dictStr.length) {
            if (dictStr[i] === '{') {
                braceCount++;
                started = true;
            } else if (dictStr[i] === '}') {
                braceCount--;
            }
            i++;
            if (started && braceCount === 0) {
                while (i < dictStr.length && (dictStr[i] === ',' || dictStr[i] === ' ' || dictStr[i] === '\n' || dictStr[i] === '\r')) {
                    i++;
                }
                break;
            }
        }
    } else {
        cleanedDictStr += dictStr[i];
        i++;
    }
}

let insertionStr = '';
for (const id in newPackages) {
  insertionStr += `  '${id}': ${JSON.stringify(newPackages[id], null, 4)},\n`;
}

cleanedDictStr = cleanedDictStr.replace(/^\{/, `{\n${insertionStr}`);

let finalPd = topReactCode + 'export const packagesDatabase: Record<string, any> = ' + cleanedDictStr;
fs.writeFileSync('src/pages/PackageDetails.tsx', finalPd);

console.log("Successfully rebuilt PackageDetails.tsx with all 14 packages");
