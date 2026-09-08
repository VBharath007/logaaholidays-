const fs = require('fs');

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf-8');

// Update input classes color
content = content.replace(/border-\\[var\\(--color-brand-orange\\)\\]/g, 'border-[var(--color-leaf-green)]');
content = content.replace(/text-\\[var\\(--color-brand-orange\\)\\]/g, 'text-[var(--color-leaf-green)]');

// Update handleSubmit to WhatsApp navigation
content = content.replace(
    `    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };`,
    `    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    };`
);

// Add names to inputs
content = content.replace(
    `<input type="text" placeholder="Departure City" className={inputClasses('departure')}`,
    `<input type="text" name="departure" placeholder="Departure City" className={inputClasses('departure')}`
);
content = content.replace(
    `<input type="date" className={inputClasses('date') + " [color-scheme:dark]"}`,
    `<input type="date" name="date" className={inputClasses('date') + " [color-scheme:dark]"}`
);
content = content.replace(
    `<select className={inputClasses('budget') + " appearance-none"}`,
    `<select name="budget" className={inputClasses('budget') + " appearance-none"}`
);
content = content.replace(
    `<input type="number" min="1" placeholder="Adults (12+)" className={inputClasses('adults')}`,
    `<input type="number" min="1" name="adults" placeholder="Adults (12+)" className={inputClasses('adults')}`
);
content = content.replace(
    `<input type="number" min="0" placeholder="Child (2-12)" className="w-full`,
    `<input type="number" min="0" name="child" placeholder="Child (2-12)" className="w-full`
);
content = content.replace(
    `<input type="number" min="0" placeholder="Infant (0-2)" className="w-full`,
    `<input type="number" min="0" name="infant" placeholder="Infant (0-2)" className="w-full`
);

// Enforce Name logic
content = content.replace(
    `<input type="text" placeholder="Full Name" className={inputClasses('name')} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} required />`,
    `<input type="text" name="name" placeholder="Full Name" minLength={3} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\\s]/g, '') }} className={inputClasses('name')} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} required />`
);

// Enforce Email logic
content = content.replace(
    `<input type="email" placeholder="Email Address" className={inputClasses('email')}`,
    `<input type="email" name="email" placeholder="Email Address" className={inputClasses('email')}`
);

// Enforce Phone logic
content = content.replace(
    `<input type="tel" placeholder="Phone Number" className={inputClasses('phone')} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} required />`,
    `<input type="tel" name="phone" placeholder="Phone Number" pattern="\\d{10}" maxLength={10} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\\D/g, '').slice(0, 10) }} className={inputClasses('phone')} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} required />`
);

// Text area
content = content.replace(
    `<textarea rows={3} placeholder="Special Requirements..." className={`,
    `<textarea rows={3} name="req" placeholder="Special Requirements..." className={`
);

fs.writeFileSync('src/pages/PackageDetails.tsx', content);
console.log('PackageDetails.tsx updated');
