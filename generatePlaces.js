import fs from 'fs';
import { destinationsData } from './src/data/destinationsData.ts';

const places = [];
Object.values(destinationsData).forEach(d => {
  if (d.placesToVisit) {
    d.placesToVisit.forEach(p => {
      let state = 'tamilnadu'; 
      if (['munnar-tourism', 'alleppey-tourism', 'thekkady-tourism', 'vagamon-tourism', 'cochin-tourism', 'kerala-tourism'].includes(d.id)) state = 'kerala';
      else if (d.id.includes('andaman')) state = 'andaman';
      else if (['malaysia-tourism', 'singapore-tourism', 'bali-tourism', 'thailand-tourism', 'sri-lanka-tourism'].includes(d.id)) state = 'international';
      else if (['shirdi', 'varanasi', 'shimla', 'manali', 'kashmir'].includes(d.id)) state = 'northindia';
      
      let baseCityId = d.id.replace('-tourism', '');
      let url = `/place/${state}/${baseCityId}/${p.id}`;
      let safeName = p.name.replace(/'/g, "\\'");
      let safeKeywords = p.name.toLowerCase().replace(/'/g, "\\'");
      places.push(`  { name: '${safeName}', url: '${url}', keywords: ['${safeKeywords}'], description: 'Top place to visit: ${safeName}', type: 'page' },`);
    });
  }
});

fs.writeFileSync('./places_clean.txt', places.join('\n'), 'utf-8');
console.log('Places generated!');
