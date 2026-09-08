const fs = require('fs');
let c = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

c = c.replace(
  '<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">',
  "<div className={`grid grid-cols-2 ${pkg.overview.transport ? 'md:grid-cols-5' : 'md:grid-cols-4'} gap-4 mb-12`}>"
);

const themeEndTag = '<p className="text-sm font-bold text-slate-800">{pkg.overview.themes}</p>\\n </div>';
const transportTag = `
 {pkg.overview.transport && (
   <div className="bg-white p-4 rounded-2xl ,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)] border border-white flex flex-col items-center text-center justify-center">
     <Car className="w-6 h-6 text-[var(--color-primary-emerald)] mb-2" />
     <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Transport</p>
     <p className="text-sm font-bold text-slate-800">{pkg.overview.transport}</p>
   </div>
 )}
`;

c = c.replace(/<p className="text-sm font-bold text-slate-800">\{pkg\.overview\.themes\}<\/p>\s*<\/div>/, '<p className="text-sm font-bold text-slate-800">{pkg.overview.themes}</p>\n </div>' + transportTag);

fs.writeFileSync('src/pages/PackageDetails.tsx', c);
console.log('Grid updated');
