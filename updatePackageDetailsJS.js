import fs from 'fs';

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf-8');

// String replacements to avoid regex parsing issues
content = content.split('border-[var(--color-brand-orange)]').join('border-[var(--color-leaf-green)]');
content = content.split('text-[var(--color-brand-orange)]').join('text-[var(--color-leaf-green)]');

const oldHandleSubmit = `    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };`;

const newHandleSubmit = `    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        
        const now = new Date();
        const submissionTime = now.toLocaleString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit', hour12: true
        });

        let message = \`*New Enquiry – \${packageTitle}*\\n\`;
        message += \`*Submitted:* \${submissionTime}\\n\\n\`;
        message += \`*Departure City:* \${data.get('departure')}\\n\`;
        message += \`*Travel Date:* \${data.get('date')}\\n\`;
        message += \`*Budget:* \${data.get('budget')}\\n\`;
        message += \`*Adults:* \${data.get('adults')}\\n\`;
        message += \`*Child:* \${data.get('child') || 0}\\n\`;
        message += \`*Infant:* \${data.get('infant') || 0}\\n\`;
        message += \`*Name:* \${data.get('name')}\\n\`;
        message += \`*Email:* \${data.get('email')}\\n\`;
        message += \`*Phone:* \${data.get('phone')}\\n\`;
        message += \`*Requirements:* \${data.get('req') || 'None'}\\n\`;

        const whatsappNumber = '917397329776';
        const whatsappUrl = \`https://wa.me/\${whatsappNumber}?text=\${encodeURIComponent(message)}\`;
        
        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };`;

content = content.replace(oldHandleSubmit, newHandleSubmit);

// Input name properties and validations
content = content.split('<input type="text" placeholder="Departure City"').join('<input type="text" name="departure" placeholder="Departure City"');
content = content.split('<input type="date" className={inputClasses(\'date\')').join('<input type="date" name="date" className={inputClasses(\'date\')');
content = content.split('<select className={inputClasses(\'budget\')').join('<select name="budget" className={inputClasses(\'budget\')');
content = content.split('<input type="number" min="1" placeholder="Adults (12+)"').join('<input type="number" name="adults" min="1" placeholder="Adults (12+)"');
content = content.split('<input type="number" min="0" placeholder="Child (2-12)"').join('<input type="number" name="child" min="0" placeholder="Child (2-12)"');
content = content.split('<input type="number" min="0" placeholder="Infant (0-2)"').join('<input type="number" name="infant" min="0" placeholder="Infant (0-2)"');
content = content.split('<input type="email" placeholder="Email Address"').join('<input type="email" name="email" placeholder="Email Address"');

// Name validation
content = content.split('<input type="text" placeholder="Full Name" className={inputClasses(\'name\')} onFocus={() => setFocusedField(\'name\')} onBlur={() => setFocusedField(null)} required />')
.join('<input type="text" name="name" placeholder="Full Name" minLength={3} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\\s]/g, "") }} className={inputClasses(\'name\')} onFocus={() => setFocusedField(\'name\')} onBlur={() => setFocusedField(null)} required />');

// Phone validation
content = content.split('<input type="tel" placeholder="Phone Number" className={inputClasses(\'phone\')} onFocus={() => setFocusedField(\'phone\')} onBlur={() => setFocusedField(null)} required />')
.join('<input type="tel" name="phone" placeholder="Phone Number" pattern="\\\\d{10}" maxLength={10} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\\\\D/g, "").slice(0, 10) }} className={inputClasses(\'phone\')} onFocus={() => setFocusedField(\'phone\')} onBlur={() => setFocusedField(null)} required />');

// TextArea name
content = content.split('<textarea rows={3} placeholder="Special Requirements..."').join('<textarea rows={3} name="req" placeholder="Special Requirements..."');

fs.writeFileSync('src/pages/PackageDetails.tsx', content);
console.log('PackageDetails updated using Exact Matches');
