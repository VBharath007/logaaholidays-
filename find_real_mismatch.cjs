const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

// We'll mock the functions to simulate what happens
function getPackageCategory(pkg) {
    const idNum = parseInt(pkg.id);
    const titleLower = (pkg.title || '').toLowerCase();
    const destLower = (pkg.overview?.destination || '').toLowerCase();

    if ((idNum >= 2025 && idNum <= 2089) || titleLower.includes('madurai') || destLower.includes('madurai')) {
        return { name: 'Madurai Tours', slug: 'madurai-tours' };
    }

    if (titleLower.includes('shirdi') || destLower.includes('shirdi') || (idNum >= 2011 && idNum <= 2024)) {
        return { name: 'Shirdi Tours', slug: 'shirdi-tours' };
    }

    // fallback
    return { name: 'Tours', slug: 'tours' };
}

// Read database
const regex = /'(\d+)':\s*\{\s*"title":\s*"([^"]+)"[\s\S]*?"destination":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const pkg = {
        id: match[1],
        title: match[2],
        overview: { destination: match[3] }
    };
    
    const idNum = parseInt(pkg.id);
    const titleLower = pkg.title.toLowerCase();
    const destLower = pkg.overview.destination.toLowerCase();
    
    // Condition in TourCategory.tsx
    const inMaduraiPage = (idNum >= 2025 && idNum <= 2099) || titleLower.includes('madurai') || destLower.includes('madurai');
    
    // Condition in PackageDetails.tsx
    const cat = getPackageCategory(pkg);
    
    if (inMaduraiPage && cat.slug === 'tours') {
        console.log("Found it! ID: " + pkg.id + " Title: " + pkg.title);
    }
}
