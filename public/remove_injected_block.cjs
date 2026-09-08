// remove_injected_block.cjs
// Removes the package data that was incorrectly injected inside the component function body
const fs = require('fs');

const filePath = 'src/pages/PackageDetails.tsx';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

console.log(`Total lines before fix: ${lines.length}`);

// Find the start of the bad injection:
// Line 9867 (0-indexed: 9866) has: return "/south-india-package";,
// followed by '2025': { etc.
// Find the end of the bad injection:
// We need to find where the injected block ends and real JSX code resumes

let badStart = -1;
let badEnd = -1;

// Find the corrupted line 9867: `return "/south-india-package";,`
for (let i = 9850; i < 9900; i++) {
  const l = lines[i]?.replace(/\r$/, '') || '';
  if (l.includes('return "/south-india-package";,')) {
    badStart = i; // This line needs to be cleaned up (remove the trailing comma)
    console.log(`Found corrupted return at line ${i + 1}: ${l}`);
    break;
  }
}

// The injection starts at badStart + 1 (the '2025': { line)
// Find where it ends: look for the pattern `};` that closes the injected object
// followed by real component code like `const isCustomBanner` or `if (!pkg)`
for (let i = badStart + 1; i < lines.length; i++) {
  const l = lines[i]?.replace(/\r$/, '') || '';
  const next = lines[i + 1]?.replace(/\r$/, '') || '';
  // The injected block ends at the line with just `};`
  // followed by the real component code
  if ((l === '};' || l === '};' ) && next === '' && i > 10000) {
    // Check if component code follows
    for (let k = i + 1; k < Math.min(i + 10, lines.length); k++) {
      const kl = lines[k]?.replace(/\r$/, '') || '';
      if (kl.includes('const isCustomBanner') || kl.includes('if (!pkg)') || kl.includes('return (')) {
        badEnd = i; // the `};` line that's the last line of the injected block
        console.log(`Found injected block end at line ${i + 1}`);
        break;
      }
    }
    if (badEnd !== -1) break;
  }
}

if (badStart === -1) {
  console.log('ERROR: Could not find corrupted return line.');
  process.exit(1);
}
if (badEnd === -1) {
  console.log('ERROR: Could not find end of injected block.');
  process.exit(1);
}

console.log(`Removing injected lines ${badStart + 2} to ${badEnd + 1} (${badEnd - badStart} lines)`);

// Fix the corrupted return line (remove trailing comma)
lines[badStart] = lines[badStart].replace(/;\s*,$/, ';').replace(/;\s*,\r$/, ';\r');

// Remove the injected lines (from badStart+1 to badEnd inclusive)
const cleaned = [
  ...lines.slice(0, badStart + 1),
  ...lines.slice(badEnd + 1)
];

fs.writeFileSync(filePath, cleaned.join('\n'), 'utf8');
console.log(`\n✅ Done. File now has ${cleaned.length} lines (removed ${lines.length - cleaned.length} lines).`);
