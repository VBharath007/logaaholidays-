const fs = require('fs');
const content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
const regex = /'(\d+)':\s*\{\s*"title":\s*"([^"]+)"[\s\S]*?"destination":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const idNum = parseInt(match[1]);
    const titleLower = match[2].toLowerCase();
    const destLower = match[3].toLowerCase();
    
    const inTourCategory = (idNum >= 2025 && idNum <= 2099) || titleLower.includes('madurai') || destLower.includes('madurai');
    const inPackageDetails = (idNum >= 2025 && idNum <= 2089) || titleLower.includes('madurai') || destLower.includes('madurai');
    
    if (inTourCategory && !inPackageDetails) {
        console.log("MISMATCH: " + match[1] + " - " + match[2]);
    }
}
