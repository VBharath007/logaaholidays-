const fs = require('fs');
let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf-8');

const anchor = 'const data = new FormData(form);';
const validationBlock = `
        const departure = data.get('departure')?.toString().trim() || '';
        const name = data.get('name')?.toString().trim() || '';
        const phone = data.get('phone')?.toString().trim() || '';
        
        if (departure.length < 3) {
            alert('Departure City must be at least 3 characters long.');
            return;
        }
        if (name.length < 3) {
            alert('Full Name must be at least 3 characters long.');
            return;
        }
        if (phone.length !== 10) {
            alert('Phone Number must be exactly 10 digits.');
            return;
        }
`;

if (content.includes(anchor) && !content.includes('Departure City must be at least')) {
    content = content.replace(anchor, anchor + '\\n' + validationBlock);
    fs.writeFileSync('src/pages/PackageDetails.tsx', content);
    console.log('Validation block successfully injected into PackageDetails.tsx');
} else {
    console.log('Failed to find anchor or block already exists');
}
