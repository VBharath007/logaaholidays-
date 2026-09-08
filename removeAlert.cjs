const fs = require('fs');
let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf-8');

const oldHandleSubmit = `    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
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
        }`;

const newHandleSubmit = `    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);`;

content = content.replace(oldHandleSubmit, newHandleSubmit);
fs.writeFileSync('src/pages/PackageDetails.tsx', content);
console.log('Removed alert validation');
