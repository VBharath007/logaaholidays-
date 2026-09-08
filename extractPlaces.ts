import { destinationsData } from './src/data/destinationsData';

const places: any[] = [];
Object.values(destinationsData).forEach((d: any) => {
  if (d.placesToVisit) {
    d.placesToVisit.forEach((p: any) => {
      // Find out what state or category this destination belongs to
      let state = 'tamilnadu'; // Defaulting for simplicity, or we can look up
      if (['munnar-tourism', 'alleppey-tourism', 'thekkady-tourism', 'vagamon-tourism', 'cochin-tourism', 'kerala-tourism'].includes(d.id)) state = 'kerala';
      else if (d.id.includes('andaman')) state = 'andaman';
      else if (['malaysia-tourism', 'singapore-tourism', 'bali-tourism', 'thailand-tourism', 'sri-lanka-tourism'].includes(d.id)) state = 'international';
      else if (['shirdi', 'varanasi', 'shimla', 'manali', 'kashmir'].includes(d.id)) state = 'northindia';
      
      let baseCityId = d.id.replace('-tourism', '');
      places.push({ name: p.name, url: `/place/${state}/${baseCityId}/${p.id}` });
    });
  }
});

console.log(places.map(p => `  { name: '${p.name}', url: '${p.url}', keywords: ['${p.name.toLowerCase()}'], description: 'Top place to visit: ${p.name}', type: 'page' },`).join('\n'));
