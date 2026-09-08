const fs = require('fs');
let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// 1. Add imports
const importDestData = "import { destinationsData } from '../data/destinationsData';";
if (!content.includes(importDestData)) {
  content = content.replace(
    /import \{ useParams, Link \} from 'react-router-dom';/,
    `import { useParams, Link } from 'react-router-dom';\n${importDestData}`
  );
}

// 2. Insert map logic and PackageInquiryForm component right after imports (before packagesDatabase export)
const topLogic = `
// Build the placeLinkMap at module level once
const placeLinkMap: Record<string, string> = {};
const lowerPlaceMap: Record<string, string> = {};

Object.keys(destinationsData).forEach(destId => {
  const dest = destinationsData[destId];
  if (dest.placesToVisit) {
    dest.placesToVisit.forEach((place: any) => {
      const stateSlug = dest.state?.toLowerCase() === 'tamil nadu' ? 'tamilnadu' : 'kerala';
      const url = \`/place/\${stateSlug}/\${destId}/\${place.id}\`;
      placeLinkMap[place.name] = url;
      lowerPlaceMap[place.name.toLowerCase()] = url;
      
      if (place.name.endsWith(' Temple')) {
         const shortName = place.name.replace(' Temple', '');
         lowerPlaceMap[shortName.toLowerCase()] = url;
      }
    });
  }
});

const sortedPlaceNames = Object.keys(lowerPlaceMap).sort((a, b) => b.length - a.length);

function renderClickableText(text: string) {
  if (!text) return text;
  
  let result: React.ReactNode[] = [text];
  
  sortedPlaceNames.forEach(placeName => {
    const url = lowerPlaceMap[placeName];
    // Create regex that matches placeName with word boundaries, case-insensitive
    // Note: escape special regex characters in placeName just in case
    const escapedPlaceName = placeName.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');
    const regex = new RegExp(\`\\\\b(\${escapedPlaceName})\\\\b\`, 'gi');
    
    const newResult: React.ReactNode[] = [];
    result.forEach((item, index) => {
      if (typeof item === 'string') {
        const parts = item.split(regex);
        parts.forEach((part, i) => {
          if (part.toLowerCase() === placeName) {
            newResult.push(
              <Link key={\`\${placeName}-\${index}-\${i}\`} to={url} className="text-[var(--color-blue-ocean)] font-bold hover:underline">
                {part}
              </Link>
            );
          } else if (part) {
            newResult.push(part);
          }
        });
      } else {
        newResult.push(item);
      }
    });
    result = newResult;
  });
  
  return result;
}

const PackageInquiryForm = ({ packageTitle }: { packageTitle: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    travelers: '2'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-emerald-800 mb-2">Inquiry Sent Successfully!</h3>
        <p className="text-sm text-emerald-600">Our holiday experts will contact you shortly regarding the <strong>{packageTitle}</strong>.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-emerald-700 font-bold text-sm hover:underline">Submit another inquiry</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white">
      <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-2">Inquire Now</h3>
      <p className="text-xs text-slate-500 mb-6">Get the best deals for this package.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" required placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_5px_rgba(0,0,0,0.05)] text-sm" />
        </div>
        <div>
          <input type="tel" required placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_5px_rgba(0,0,0,0.05)] text-sm" />
        </div>
        <div>
          <input type="email" placeholder="Email Address (Optional)" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_5px_rgba(0,0,0,0.05)] text-sm" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase ml-1 mb-1">Travel Date</label>
            <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_5px_rgba(0,0,0,0.05)] text-sm text-slate-600" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase ml-1 mb-1">Travelers</label>
            <select value={formData.travelers} onChange={e => setFormData({...formData, travelers: e.target.value})} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_5px_rgba(0,0,0,0.05)] text-sm text-slate-600">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="w-full bg-[var(--color-blue-ocean)] text-white font-bold rounded-xl px-4 py-3.5 mt-2 shadow-[0_10px_20px_rgba(14,132,199,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:scale-[1.02] active:scale-95 transition-all">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};
`;

if (!content.includes('PackageInquiryForm')) {
  content = content.replace(
    /export const packagesDatabase/,
    topLogic + '\n\nexport const packagesDatabase'
  );
}

// 3. Replace {day.description} in itinerary with {renderClickableText(day.description)}
content = content.replace(
  /<p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">\{day\.description\}<\/p>/g,
  '<p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line leading-8">{renderClickableText(day.description)}</p>'
);

// 4. Replace Inquiry button with Inquiry form
const inquiryCardPattern = /<div className="bg-white rounded-3xl p-8[\s\S]*?Need help booking\?[\s\S]*?<\/div>\s*<\/div>/;

const newInquiryCard = `<PackageInquiryForm packageTitle={pkg.title} />

 <div className="mt-6 bg-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08),-10px_-10px_30px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,1)] border border-white flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-[var(--color-primary-emerald)]/10 flex items-center justify-center flex-shrink-0">
 <Phone className="w-5 h-5 text-[var(--color-primary-emerald)]" />
 </div>
 <div>
 <p className="text-sm font-bold text-slate-800 mb-1">Need help booking?</p>
 <p className="text-xs text-slate-500 mb-2">Call our holiday experts</p>
 <a href="tel:+917397329776" className="text-[var(--color-blue-ocean)] font-bold hover:underline">
 +91 73973 29776
 </a>
 </div>
 </div>`;

if (content.match(inquiryCardPattern)) {
  content = content.replace(inquiryCardPattern, newInquiryCard);
}

fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
console.log('Successfully injected clickable itinerary and inquiry form');
