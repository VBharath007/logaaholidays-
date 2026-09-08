const fs = require('fs');
let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const pkgsSrc = fs.readFileSync('scratch/add_packages.cjs', 'utf8');
const objMatch = pkgsSrc.match(/const packages = (\{[\s\S]*?\});\n\nlet content/);
if (!objMatch) {
    console.log("Could not extract packages object");
    process.exit(1);
}
const pObj = eval('(' + objMatch[1] + ')');

let pString = '';
for (let k in pObj) {
    pString += ',\n    \'' + k + '\': ' + JSON.stringify(pObj[k], null, 8).replace(/\"/g, '\'').replace(/'([^']+)'\s*:/g, (m, p1) => {
        return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(p1) ? p1 + ':' : m;
    });
}
pString = pString.replace(/\n        /g, '\n        ');

const marker = "Logaa Holidays Karnataka'\n    }\n};";
const idx = content.indexOf(marker);
if (idx !== -1) {
    const before = content.slice(0, idx + 25);
    const after = content.slice(idx + 25);
    content = before + '\n    }' + pString + '\n};' + after.replace("\n    }\n};", ""); // Ensure clean replacement
    fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
    console.log("Fixed!");
} else {
    console.log("Marker not found in PackageDetails.tsx");
}
