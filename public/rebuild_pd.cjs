const fs = require('fs');

let pd = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// The file has a bunch of React code, then export const packagesDatabase: Record<string, any> = { ... }
let parts = pd.split('export const packagesDatabase: Record<string, any> = {');

if (parts.length < 2) {
    console.log("Could not find packagesDatabase");
    process.exit(1);
}

let topReactCode = parts[0];
let dictStr = '{' + parts[1];

// We need to carefully strip out keys '1000' through '1009'.
// Since they might be present multiple times, let's use a regex to remove ALL blocks that start with '1000': through '1009':
// This regex matches: 
//   '1000': { ... },
// But since objects can contain nested braces, regex is bad.

// Let's use a simple character parser.
let cleanedDictStr = "";
let i = 0;
while (i < dictStr.length) {
    let matchedId = false;
    for (let id = 1000; id <= 1009; id++) {
        let prefix1 = `'${id}': {`;
        let prefix2 = `"${id}": {`;
        let prefix3 = `'${id}':{`;
        let prefix4 = `"${id}":{`;
        
        let chunk = dictStr.substring(i, i + 20).replace(/\s/g, ''); // ignore whitespace for matching
        if (chunk.startsWith(`'${id}':{`) || chunk.startsWith(`"${id}":{`)) {
            matchedId = true;
            break;
        }
    }
    
    if (matchedId) {
        // Skip this block by balancing braces
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
                // block ended. skip any trailing commas and spaces
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

// Now `cleanedDictStr` has no 1000-1009 keys!
// Let's inject the new ones
let ts = fs.readFileSync('public/generated_packages.ts', 'utf8');
ts = ts.replace('export const newPackages = ', '').trim();
if(ts.endsWith(';')) ts = ts.slice(0, -1);
const newPackages = eval('(' + ts + ')');

let insertionStr = '';
for (const id in newPackages) {
  insertionStr += `  '${id}': ${JSON.stringify(newPackages[id], null, 4)},\n`;
}

// cleanedDictStr starts with `{`. We insert our new packages right after `{`
cleanedDictStr = cleanedDictStr.replace(/^\{/, `{\n${insertionStr}`);

let finalPd = topReactCode + 'export const packagesDatabase: Record<string, any> = ' + cleanedDictStr;
fs.writeFileSync('src/pages/PackageDetails.tsx', finalPd);

console.log("Successfully rebuilt PackageDetails.tsx");
