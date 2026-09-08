const fs = require('fs');

let ts = fs.readFileSync('public/generated_packages.ts', 'utf8');
ts = ts.replace('export const newPackages = ', '').trim();
if(ts.endsWith(';')) ts = ts.slice(0, -1);
const newPackages = eval('(' + ts + ')');

let shirdi_items = [];
let madurai_items = [];
let varanasi_items = [];

for (const id in newPackages) {
  const p = newPackages[id];
  const itemStr = `  {
    id: ${id},
    title: '${p.title.replace(/'/g, "\\'")}',
    duration: '${p.overview.duration}',
    destination: '${p.overview.destination.replace(/'/g, "\\'")}',
    activities: '${p.overview.activities}',
    themes: '${p.overview.themes}',
    price: '${p.priceDetails.amount}',
    image: '${p.image}'
  }`;
  
  if (p.overview.destination === "Shirdi") {
      shirdi_items.push(itemStr);
  } else if (p.overview.destination === "Varanasi") {
      varanasi_items.push(itemStr);
  } else if (p.overview.destination === "Madurai") {
      madurai_items.push(itemStr);
  }
}

let tc = fs.readFileSync('src/pages/TourCategory.tsx', 'utf8');

function replaceArray(varName, items) {
    const startStr = `const ${varName} = [`;
    const startIdx = tc.indexOf(startStr);
    if (startIdx === -1) {
        console.log(`${varName} not found`);
        return;
    }
    
    let bracketCount = 0;
    let endIdx = -1;
    let i = startIdx + startStr.length - 1; // start at '['
    
    for (; i < tc.length; i++) {
        if (tc[i] === '[') bracketCount++;
        else if (tc[i] === ']') {
            bracketCount--;
            if (bracketCount === 0) {
                endIdx = i;
                break;
            }
        }
    }
    
    if (endIdx !== -1) {
        tc = tc.substring(0, startIdx + startStr.length - 1) + `[\n${items.join(',\\n')}\n]` + tc.substring(endIdx + 1);
        console.log(`Replaced ${varName} with ${items.length} items`);
    } else {
        console.log(`Failed to find end bracket for ${varName}`);
    }
}

// Replace entirely
replaceArray('shirdiPackages', shirdi_items);
replaceArray('maduraiPackages', madurai_items);
replaceArray('varanasiPackages', varanasi_items);

fs.writeFileSync('src/pages/TourCategory.tsx', tc);


// Now inject into PackageDetails.tsx safely
let pd = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
let parts = pd.split('export const packagesDatabase: Record<string, any> = {');

if (parts.length < 2) {
    console.log("Could not find packagesDatabase");
    process.exit(1);
}

let topReactCode = parts[0];
let dictStr = '{' + parts[1];

let insertionStr = '';
for (const id in newPackages) {
  insertionStr += `  '${id}': ${JSON.stringify(newPackages[id], null, 4)},\n`;
}

let cleanedDictStr = dictStr.replace(/^\{/, `{\n${insertionStr}`);

let finalPd = topReactCode + 'export const packagesDatabase: Record<string, any> = ' + cleanedDictStr;
fs.writeFileSync('src/pages/PackageDetails.tsx', finalPd);

console.log("Successfully injected all 65 packages into PackageDetails.tsx!");

