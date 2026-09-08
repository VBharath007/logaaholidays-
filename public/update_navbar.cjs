const fs = require('fs');

const shirdiItems = [
  { href: '/packages/shirdi-flight-package-from-madurai-direct-flight-2-days', label: 'Shirdi Flight Package From Madurai - Direct Flight - 2 Days' },
  { href: '/packages/shirdi-flight-packages-from-chennai-train-flight-3-night-4-days', label: 'Shirdi Flight Packages From Chennai - Train - Flight 3 Night - 4 Days' },
  { href: '/packages/shirdi-flight-package-from-chennai-one-day', label: 'Shirdi Flight Package From Chennai - One Day' },
  { href: '/packages/shirdi-flight-package-via-pune-from-chennai-2-days', label: 'Shirdi Flight Package Via Pune From Chennai - 2 Days' },
  { href: '/packages/shirdi-train-package-from-chennai-5-night-6-days', label: 'Shirdi Train Package From Chennai - 5 Night - 6 Days' },
  { href: '/packages/shirdi-train-package-from-chennai-7-days', label: 'Shirdi Train Package From Chennai 7 Days' },
  { href: '/packages/shirdi-and-pandaripur-train-package-from-chennai-8-days', label: 'Shirdi And Pandaripur Train Package From Chennai 8 Days' },
  { href: '/packages/shirdi-and-mumbai-package-from-chennai-2-days', label: 'Shirdi And Mumbai Package From Chennai - 2 Days' },
  { href: '/packages/shirdi-flight-package-from-chennai-3-days', label: 'Shirdi Flight Package From Chennai 3 Days' },
  { href: '/packages/shirdi-and-pandaripur-flight-package-from-chennai-3-days', label: 'Shirdi And Pandaripur Flight Package From Chennai - 3 Days' },
  { href: '/packages/shirdi-nashik-ajanta-ellora-package-from-chennai-4-days', label: 'Shirdi - Nashik - Ajanta - Ellora Package From Chennai 4 Days' },
  { href: '/packages/shirdi-2-jyotirlinga-package-from-chennai-3-days', label: 'Shirdi - 2 Jyotirlinga Package From Chennai - 3 Days' },
  { href: '/packages/shirdi-jyotirlinga-package-from-chennai-3-night-4-days', label: 'Shirdi - Jyotirlinga Package From Chennai 3 Night - 4 Days' },
  { href: '/packages/shirdi-and-lonavala-package-from-chennai-2-night-3-days', label: 'Shirdi And Lonavala Package From Chennai 2 Night - 3 Days' },
  { href: '/packages/shirdi-ajanta-ellora-package-from-chennai-2-night-3-days', label: 'Shirdi - Ajanta - Ellora Package From Chennai 2 Night - 3 Days' }
];

const varanasiItems = [
  { href: '/packages/kasi-flight-package-from-chennai-1-night-2-days', label: 'Kasi Flight Package From Chennai 1 Night - 2 Days' },
  { href: '/packages/kasi-flight-package-from-chennai-2-night-3-days', label: 'Kasi Flight Package From Chennai 2 Night - 3 Days' },
  { href: '/packages/kasi-ayodhya-flight-package-from-chennai-2-night-3-days', label: 'Kasi - Ayodhya Flight Package From Chennai 2 Night - 3 Days' },
  { href: '/packages/kasi-gaya-flight-package-from-chennai-4-night-5-days', label: 'Kasi - Gaya Flight Package From Chennai 4 Night - 5 Days' },
  { href: '/packages/kasi-gaya-allahabad-ayodhya-flight-package-from-chennai-5-night-6-days', label: 'Kasi - Gaya - Allahabad - Ayodhya Flight Package From Chennai 5 Night - 6 Days' },
  { href: '/packages/kasi-train-package-from-chennai-7-night-8-days', label: 'Kasi Train Package From Chennai 7 Night - 8 Days' },
  { href: '/packages/kasi-flight-package-from-madurai-3-days', label: 'Kasi Flight Package From Madurai 3 Days' },
  { href: '/packages/kasi-ayodhya-flight-package-from-madurai-2-night-3-days', label: 'Kasi - Ayodhya Flight Package From Madurai 2 Night - 3 Days' },
  { href: '/packages/kasi-gaya-flight-package-from-madurai-5-days', label: 'Kasi - Gaya Flight Package From Madurai 5 Days' },
  { href: '/packages/kasi-gaya-allahabad-ayodhya-flight-package-from-madurai-5-night-6-days', label: 'Kasi - Gaya - Allahabad - Ayodhya Flight Package From Madurai 5 Night - 6 Days' }
];

let c = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

c = c.replace(
  "items: [\n { href: '/north-india-tour-packages/shirdi-tours', label: 'Shirdi' }\n ]",
  "items: [\n" + shirdiItems.map(item => ` { href: '${item.href}', label: '${item.label}' }`).join(',\n') + "\n ]"
);

c = c.replace(
  "items: [\n { href: '/north-india-tour-packages/varanasi-tours', label: 'Varanasi' }\n ]",
  "items: [\n" + varanasiItems.map(item => ` { href: '${item.href}', label: '${item.label}' }`).join(',\n') + "\n ]"
);

fs.writeFileSync('src/components/Navbar.tsx', c);
console.log('Updated Navbar');
