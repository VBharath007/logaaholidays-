const fs = require('fs');
let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// Replace the opening of the inclusions tab
content = content.replace(
  /\{activeTab === 'inclusions' && \(\s*<div className="grid md:grid-cols-2 gap-10">/,
  `{activeTab === 'inclusions' && (
  <div className="space-y-12">
    <div className="grid md:grid-cols-2 gap-10">`
);

// Replace the closing of the inclusions tab
content = content.replace(
  /<\/div>\s*<\/div>\s*\)\}\s*\{\/\* Policies Tab \*\/\}/,
  `    </div>
  </div>
</div>
)}

{/* Policies Tab */}`
);

fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
console.log('Fixed JSX syntax');
