const fs = require('fs');

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// Add Lucide icons to import
const importPattern = /import { Calendar, MapPin, Clock, CheckCircle2, XCircle, Info, ChevronRight, Phone } from 'lucide-react';/;
const newImport = `import { Calendar, MapPin, Clock, CheckCircle2, XCircle, Info, ChevronRight, Phone, Home, Star, MessageSquare, ShieldCheck } from 'lucide-react';`;
if (content.match(importPattern)) {
  content = content.replace(importPattern, newImport);
}

// Locate the inclusions tab end
const inclusionsEndPattern = /<\/ul>\s*<\/div>\s*<\/div>\s*\)\}/;

const newSectionJSX = `
 </ul>
 </div>
 </div>

 {/* Accommodation & Languages */}
 <div className="grid md:grid-cols-2 gap-10 mt-12 pt-10 border-t border-slate-100">
 <div>
 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <Home className="w-6 h-6 text-[var(--color-primary-forest)]" />
 Accommodation Options
 </h3>
 <div className="space-y-4">
 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
 <div className="flex text-amber-400 mb-2">
 <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
 </div>
 <h4 className="font-bold text-slate-800 text-base mb-2">2 Star Hotels</h4>
 <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside ml-1">
 <li>Comfortable Rooms</li>
 <li>Complimentary Breakfast</li>
 <li>Free Wi-Fi (subject to hotel policy)</li>
 </ul>
 </div>
 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
 <div className="flex text-amber-400 mb-2">
 <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
 </div>
 <h4 className="font-bold text-slate-800 text-base mb-2">3 Star Hotels</h4>
 <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside ml-1">
 <li>Deluxe Rooms</li>
 <li>Complimentary Breakfast</li>
 <li>Restaurant & Room Service</li>
 <li>Free Wi-Fi</li>
 </ul>
 </div>
 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
 <div className="flex text-amber-400 mb-2">
 <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
 </div>
 <h4 className="font-bold text-slate-800 text-base mb-2">4 Star Hotels</h4>
 <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside ml-1">
 <li>Premium Rooms</li>
 <li>Multi-Cuisine Restaurant</li>
 <li>Modern Amenities & Free Wi-Fi</li>
 </ul>
 </div>
 </div>
 </div>
 
 <div>
 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <MessageSquare className="w-6 h-6 text-[var(--color-primary-forest)]" />
 Driver Languages
 </h3>
 <ul className="space-y-4 mb-10">
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">Tamil</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">English</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-forest)] flex-shrink-0 mt-0.5 opacity-80" />
 <span className="text-slate-600 text-sm md:text-base leading-relaxed">Hindi (Subject to Availability)</span>
 </li>
 </ul>

 <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-6 flex items-center gap-2">
 <ShieldCheck className="w-6 h-6 text-[var(--color-primary-forest)]" />
 Why Choose Logaa Holidays?
 </h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 {['Trusted Tour Operator', 'Well-Maintained Vehicles', 'Experienced Drivers', 'Handpicked Hotels', 'Transparent Pricing', '24×7 Support'].map((reason, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 shadow-sm">
 <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
 <span className="font-bold text-slate-700">{reason}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 )}`;

if (content.match(inclusionsEndPattern)) {
  content = content.replace(inclusionsEndPattern, newSectionJSX);
}

fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
console.log('Injection successful');
