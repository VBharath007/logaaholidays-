const fs = require('fs');
const path = require('path');

const packageDetailsPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

let content = fs.readFileSync(packageDetailsPath, 'utf8');

// 1. Remove the duplicate 9001-9003 packages
// Let's find the FIRST '  "9001": {'
const first9001 = content.indexOf('  "9001": {');
// Let's find the SECOND '  "9001": {'
const second9001 = content.indexOf('  "9001": {', first9001 + 10);

if (second9001 !== -1) {
    // We have a duplicate! 
    // We need to delete from the second 9001 up to the end of the second 9003.
    // The second 9003 ends before '  "9004": {' or '  "6005": {'.
    // Let's find '  "6005": {'
    const endDuplicate = content.indexOf('  "6005": {');
    if (endDuplicate !== -1) {
        // We delete from second9001 to endDuplicate
        content = content.slice(0, second9001) + content.slice(endDuplicate);
        console.log('Removed duplicate 9001-9003');
    }
}

fs.writeFileSync(packageDetailsPath, content, 'utf8');
