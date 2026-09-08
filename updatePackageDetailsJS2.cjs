const fs = require('fs');

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf-8');

const oldHandleSubmit = `    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        
        const now = new Date();
        const submissionTime = now.toLocaleString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit', hour12: true
        });

        let message = \\\`*New Enquiry – \${packageTitle}*\\\\n\\\`;
        message += \\\`*Submitted:* \${submissionTime}\\\\n\\\\n\\\`;
        message += \\\`*Departure City:* \${data.get('departure')}\\\\n\\\`;
        message += \\\`*Travel Date:* \${data.get('date')}\\\\n\\\`;
        message += \\\`*Budget:* \${data.get('budget')}\\\\n\\\`;
        message += \\\`*Adults:* \${data.get('adults')}\\\\n\\\`;
        message += \\\`*Child:* \${data.get('child') || 0}\\\\n\\\`;
        message += \\\`*Infant:* \${data.get('infant') || 0}\\\\n\\\`;
        message += \\\`*Name:* \${data.get('name')}\\\\n\\\`;
        message += \\\`*Email:* \${data.get('email')}\\\\n\\\`;
        message += \\\`*Phone:* \${data.get('phone')}\\\\n\\\`;
        message += \\\`*Requirements:* \${data.get('req') || 'None'}\\\\n\\\`;

        const whatsappNumber = '917397329776';
        const whatsappUrl = \\\`https://wa.me/\${whatsappNumber}?text=\${encodeURIComponent(message)}\\\`;
        
        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };`;

const newHandleSubmit = `    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        }

        const now = new Date();
        const submissionTime = now.toLocaleString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit', hour12: true
        });

        let message = \`*New Enquiry – \${packageTitle}*\\n\`;
        message += \`*Submitted:* \${submissionTime}\\n\\n\`;
        message += \`*Departure City:* \${departure}\\n\`;
        message += \`*Travel Date:* \${data.get('date')}\\n\`;
        message += \`*Budget:* \${data.get('budget')}\\n\`;
        message += \`*Adults:* \${data.get('adults')}\\n\`;
        message += \`*Child:* \${data.get('child') || 0}\\n\`;
        message += \`*Infant:* \${data.get('infant') || 0}\\n\`;
        message += \`*Name:* \${name}\\n\`;
        message += \`*Email:* \${data.get('email')}\\n\`;
        message += \`*Phone:* \${phone}\\n\`;
        message += \`*Requirements:* \${data.get('req') || 'None'}\\n\`;

        const whatsappNumber = '917397329776';
        const whatsappUrl = \`https://wa.me/\${whatsappNumber}?text=\${encodeURIComponent(message)}\`;
        
        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };`;

content = content.replace(oldHandleSubmit.replace(/\\\\`/g, '\`').replace(/\\\\n/g, '\\n'), newHandleSubmit);

// Ensure departure has minLength
content = content.split('<input type="text" name="departure" placeholder="Departure City" className={inputClasses(\'departure\')}').join('<input type="text" name="departure" placeholder="Departure City" minLength={3} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\\\\s]/g, "") }} className={inputClasses(\'departure\')}');

fs.writeFileSync('src/pages/PackageDetails.tsx', content);
console.log('PackageDetails updated with strict validation');
