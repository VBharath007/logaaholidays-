const fs = require('fs');

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

let tc = fs.readFileSync('src/pages/TourCategory.tsx', 'utf8');

function replaceArray(varName, newStr) {
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
        tc = tc.substring(0, startIdx + startStr.length - 1) + `[\n${newStr}\n]` + tc.substring(endIdx + 1);
        console.log(`Replaced ${varName}`);
    } else {
        console.log(`Failed to find end bracket for ${varName}`);
    }
}

replaceArray('shirdiPackages', arrayStr);
replaceArray('maduraiPackages', arrayStr);

fs.writeFileSync('src/pages/TourCategory.tsx', tc);
