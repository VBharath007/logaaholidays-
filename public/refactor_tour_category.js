import fs from 'fs';

let content = fs.readFileSync('src/pages/TourCategory.tsx', 'utf8');

// 1. Add imports
content = content.replace(
  "import { useParams, Link } from 'react-router-dom';",
  "import { useState, useMemo } from 'react';\nimport { useParams, Link } from 'react-router-dom';"
);

// 2. Replace destinations array with destinationGroups
const destPattern = /const destinations = \[[\s\S]*?\];/;
const newDestinations = `const destinationGroups = [
  {
    region: 'Tamil Nadu',
    places: ['Madurai Tours', 'Rameshwaram Tours', 'Kanyakumari Tours', 'Ooty Tours', 'Kodaikanal Tours', 'Chennai Tours']
  },
  {
    region: 'Kerala',
    places: ['Kerala Tours', 'Munnar Tours', 'Thekkady Tours', 'Alleppey Tours', 'Vagamon Tours']
  },
  {
    region: 'North & East India',
    places: ['Shirdi Tours', 'Varanasi Tours', 'Cherrapunji Tours', 'Pune Tours', 'Shillong Tours', 'Guwahati Tours', 'Ayodhya Tours']
  }
];`;
content = content.replace(destPattern, newDestinations);

// 3. Update currentPackages logic
const packagesLogicPattern = /const currentPackages =[\s\S]*?mockPackages;/;
const newPackagesLogic = `  const [searchQuery, setSearchQuery] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [themeFilter, setThemeFilter] = useState('');

  const basePackages = useMemo(() => {
    if (!category) return mockPackages;
    
    switch(category) {
      case 'shirdi-tours': return shirdiPackages;
      case 'varanasi-tours': return varanasiPackages;
      case 'pune-tours': return punePackages;
      case 'kanyakumari-tours': return kanyakumariPackages;
      case 'cherrapunji-tours': return cherrapunjiPackages;
      case 'shillong-tours': return shillongPackages;
      case 'guwahati-tours': return guwahatiPackages;
      case 'ayodhya-tours': return ayodhyaPackages;
      case 'rameshwaram-tours': return rameshwaramPackages;
      case 'madurai-tours': return maduraiPackages;
      case 'kerala-tours': return keralaPackages;
      default: {
        const placeKeyword = category.replace('-tours', '').toLowerCase();
        const matched = Object.values(packagesDatabase).filter((p: any) => 
          p.title.toLowerCase().includes(placeKeyword) || 
          (p.overview?.destination || '').toLowerCase().includes(placeKeyword)
        ).map((p: any) => ({
          id: parseInt(p.id),
          title: p.title,
          duration: p.overview.duration,
          destination: p.overview.destination,
          activities: p.overview.activities,
          themes: p.overview.themes,
          price: p.priceDetails.amount,
          image: p.image
        }));
        
        return matched.length > 0 ? matched : mockPackages;
      }
    }
  }, [category, mockPackages]);

  const currentPackages = useMemo(() => {
    return basePackages.filter(pkg => {
      if (searchQuery && !pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) && !(pkg.destination || '').toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      if (themeFilter && themeFilter !== '--Select Tour Theme--' && !(pkg.themes || '').includes(themeFilter)) {
        return false;
      }
      
      if (durationFilter && durationFilter !== '--Select No. of Nights--') {
        const nightsMatch = (pkg.duration || '').match(/(\\d+)\\s*Night/i);
        const nights = nightsMatch ? parseInt(nightsMatch[1]) : 0;
        
        if (durationFilter === '1-3 Nights' && (nights < 1 || nights > 3)) return false;
        if (durationFilter === '4-6 Nights' && (nights < 4 || nights > 6)) return false;
        if (durationFilter === '7+ Nights' && nights < 7) return false;
      }
      
      if (budgetFilter && budgetFilter !== '--Select Budget--') {
        if (pkg.price === 'On Request') return false; 
        const priceStr = (pkg.price || '').replace(/[^\\d]/g, '');
        const price = parseInt(priceStr);
        if (isNaN(price)) return false;

        if (budgetFilter === 'Under ₹10,000' && price >= 10000) return false;
        if (budgetFilter === '₹10,000 - ₹20,000' && (price < 10000 || price > 20000)) return false;
        if (budgetFilter === 'Above ₹20,000' && price <= 20000) return false;
      }
      
      return true;
    });
  }, [basePackages, searchQuery, budgetFilter, durationFilter, themeFilter]);`;
content = content.replace(packagesLogicPattern, newPackagesLogic);

// 4. Replace Search Inputs HTML
content = content.replace(
  '<input type="text" placeholder="Where do you want to go?" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 ,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)] text-sm" />',
  '<input type="text" placeholder="Where do you want to go?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)] text-sm" />'
);

content = content.replace(
  /<select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-\[var\(--color-blue-ocean\)\]\/50[\s\S]*?<option>Under \$500<\/option>[\s\S]*?<\/select>/,
  `<select value={budgetFilter} onChange={(e) => setBudgetFilter(e.target.value)} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)] text-sm text-slate-600 appearance-none">
  <option>--Select Budget--</option>
  <option>Under ₹10,000</option>
  <option>₹10,000 - ₹20,000</option>
  <option>Above ₹20,000</option>
</select>`
);

content = content.replace(
  /<select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-\[var\(--color-blue-ocean\)\]\/50[\s\S]*?<option>--Select No. of Nights--<\/option>[\s\S]*?<\/select>/,
  `<select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value)} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)] text-sm text-slate-600 appearance-none">
  <option>--Select No. of Nights--</option>
  <option>1-3 Nights</option>
  <option>4-6 Nights</option>
  <option>7+ Nights</option>
</select>`
);

content = content.replace(
  /<select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-\[var\(--color-blue-ocean\)\]\/50[\s\S]*?<option>--Select Tour Theme--<\/option>[\s\S]*?<\/select>/,
  `<select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)] text-sm text-slate-600 appearance-none">
  <option>--Select Tour Theme--</option>
  <option>Religious & Pilgrimage</option>
  <option>Culture & Heritage</option>
  <option>Wildlife</option>
  <option>Hill Stations & Valleys</option>
</select>`
);

// Remove the button shadow class typo and just leave it standard (not strictly necessary to remove the button itself, but we should make sure it doesn't break things)
// Actually we can leave it as is or fix the shadow class
content = content.replace(
  '<button className="w-full bg-[var(--color-blue-ocean)] text-white font-bold rounded-xl px-4 py-3 ,132,199,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all">',
  '<button className="w-full bg-[var(--color-blue-ocean)] text-white font-bold rounded-xl px-4 py-3 shadow-[0_10px_20px_rgba(14,132,199,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all" onClick={(e) => e.preventDefault()}>'
);


// 5. Replace Sidebar JSX
const sidebarPattern = /<div className="flex flex-wrap gap-3">[\s\S]*?<\/div>/;
const newSidebar = `<div className="flex flex-col gap-6">
 {destinationGroups.map(group => (
   <div key={group.region}>
     <h4 className="text-sm font-black text-slate-800 mb-3">{group.region}</h4>
     <div className="flex flex-wrap gap-2">
       {group.places.map(dest => {
         const slug = dest.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
         return (
           <Link 
             key={dest} 
             to={\`/tour-packages/\${slug}\`}
             className={\`text-xs font-bold px-3 py-1.5 rounded-lg transition-all \${
               categoryTitle === dest 
               ? 'bg-[var(--color-blue-ocean)] text-white shadow-md' 
               : 'bg-slate-50 text-slate-600 hover:bg-[var(--color-primary-emerald)] hover:text-white border border-slate-100'
             }\`}
           >
             {dest.replace(' Tours', '')}
           </Link>
         )
       })}
     </div>
   </div>
 ))}
 </div>`;

content = content.replace(sidebarPattern, newSidebar);

fs.writeFileSync('src/pages/TourCategory.tsx', content, 'utf8');
console.log('Refactor complete.');
