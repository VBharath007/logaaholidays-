const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');
let content = fs.readFileSync(file, 'utf8');

const replacements = {
  'â€“': '–',
  'â€”': '—',
  'â€™': '’',
  'â€˜': '‘',
  'â€œ': '“',
  'â€': '”',
  'â€"': '”', // sometimes it appears like this due to truncation
  'â€¢': '•',
  'Ã—': '×',
  'â€¦': '…',
  'â‚¹': '₹'
};

for (const [corrupted, fixed] of Object.entries(replacements)) {
    // using split and join for global replace without worrying about regex escaping
    content = content.split(corrupted).join(fixed);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed encoding issues');
