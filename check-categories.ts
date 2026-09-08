import { packagesDatabase } from './src/pages/PackageDetails.js';
import fs from 'fs';

// Helper function to simulate TourCategory package extraction
function getPackageCount(category) {
    const placeKeyword = category.replace('-tours', '').replace('-tourism', '').toLowerCase();
    
    // Natively from TourCategory logic
    const matched = Object.values(packagesDatabase).filter((p) => {
        const titleLower = (p.title || '').toLowerCase();
        const destLower = (p.overview?.destination || '').toLowerCase();
        return titleLower.includes(placeKeyword) || destLower.includes(placeKeyword);
    });

    return matched.length;
}

const categories = [
    'madurai', 'rameswaram', 'kanyakumari', 'kodaikanal', 'ooty', 'chennai', 'courtallam',
    'pillayarpatti', 'tiruchendur', 'palani', 'trichy', 'thanjavur', 'kumbakonam', 
    'mahabalipuram', 'pondicherry', 'valparai', 'theni', 'megamalai', 
    'kerala', 'munnar', 'alleppey', 'thekkady', 'vagamon', 'cochin', 'kumarakom', 
    'athirappilly', 'kovalam', 'varkala',
    'mysore', 'coorg', 'bangalore', 'chikmagalur', 'kabini', 'hampi',
    'shirdi', 'varanasi', 'delhi', 'agra', 'jaipur', 'shimla', 'manali', 'kashmir',
    'malaysia', 'singapore', 'bali', 'thailand', 'sri-lanka'
];

let results = {};
for (const cat of categories) {
    results[cat] = getPackageCount(cat);
}

fs.writeFileSync('category-check.json', JSON.stringify(results, null, 2));
console.log('Done writing counts!');
