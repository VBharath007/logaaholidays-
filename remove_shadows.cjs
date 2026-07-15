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
  // Match shadow-*, drop-shadow-*, hover:shadow-*, group-hover:shadow-*, shadow-[...]
  const newContent = content.replace(/[a-zA-Z0-9\-:]*shadow-[^\s'"`,}]+/g, '');
  
  if (content !== newContent) {
    // clean up multiple spaces
    const finalContent = newContent.replace(/  +/g, ' ');
    fs.writeFileSync(file, finalContent, 'utf8');
    changedFiles++;
    console.log('Updated: ' + file);
  }
});

console.log('Removed shadows from ' + changedFiles + ' React files.');

// Also update index.css
const cssFile = path.join(__dirname, 'src', 'index.css');
if (fs.existsSync(cssFile)) {
  let cssContent = fs.readFileSync(cssFile, 'utf8');
  // Remove box-shadow properties entirely from CSS
  const newCssContent = cssContent.replace(/box-shadow:[^;]+;/g, '');
  if (cssContent !== newCssContent) {
    fs.writeFileSync(cssFile, newCssContent, 'utf8');
    console.log('Removed box-shadows from index.css');
  }
}
