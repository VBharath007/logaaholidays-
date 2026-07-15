const fs = require('fs');
let pd = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// Find the start of packagesDatabase
const startIdx = pd.indexOf('export const packagesDatabase: Record<string, any> = {');

// I will just read all the lines and filter out any blocks that start with '1000':, '1001': up to '1009':
let lines = pd.split('\n');
let newLines = [];
let skipMode = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (!skipMode) {
    let match = line.match(/^\s*'100[0-9]':\s*\{/);
    if (match && i > startIdx / 50) { // ensuring we are past the start index roughly
      skipMode = true;
      braceCount = 1;
      // Count any other braces on this line
      const restOfLine = line.substring(match[0].length);
      for (const char of restOfLine) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      continue;
    }
    newLines.push(line);
  } else {
    for (const char of line) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
    }
    if (braceCount === 0) {
      skipMode = false;
      // also if there is a comma at the end of the closing brace, we skip it
    }
  }
}

// Now we insert the new packages right after `export const packagesDatabase: Record<string, any> = {`
let ts = fs.readFileSync('public/generated_packages.ts', 'utf8');
ts = ts.replace('export const newPackages = ', '').trim();
if(ts.endsWith(';')) ts = ts.slice(0, -1);
const newPackages = eval('(' + ts + ')');

let insertionStr = '';
for (const id in newPackages) {
  insertionStr += `  '${id}': ${JSON.stringify(newPackages[id], null, 4)},\n`;
}

let resultStr = newLines.join('\n');
resultStr = resultStr.replace(
  /export const packagesDatabase: Record<string, any> = \{/,
  `export const packagesDatabase: Record<string, any> = {\n${insertionStr}`
);

fs.writeFileSync('src/pages/PackageDetails.tsx', resultStr);
console.log('Successfully cleaned and injected');
