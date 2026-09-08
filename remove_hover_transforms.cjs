const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
let changedFiles = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match hover:-translate-y-* or hover:translate-y-* and group-hover equivalents
  const newContent = content.replace(/[a-zA-Z0-9\-:]*hover:-?translate-y-[a-zA-Z0-9\-\[\]]+/g, '');
  
  if (content !== newContent) {
    // clean up multiple spaces
    const finalContent = newContent.replace(/  +/g, ' ');
    fs.writeFileSync(file, finalContent, 'utf8');
    changedFiles++;
    console.log('Removed hover transforms from: ' + file);
  }
});

console.log('Removed hover transforms from ' + changedFiles + ' React files.');
