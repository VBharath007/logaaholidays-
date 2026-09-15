const fs = require('fs');
const filePath = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const target1 = `    const [countryCode, setCountryCode] = useState('+91');

    const countryCodes = [
  { name: 'India', code: '+91' },
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Singapore', code: '+65' },
  { name: 'Malaysia', code: '+60' },
  { name: 'Australia', code: '+61' },
  { name: 'Canada', code: '+1' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Japan', code: '+81' },
];`;

const target2 = `const PackageInquiryForm = ({ packageTitle }: { packageTitle: string }) => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);`;

const replacement2 = `const countryCodes = [
  { name: 'India', code: '+91' },
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Singapore', code: '+65' },
  { name: 'Malaysia', code: '+60' },
  { name: 'Australia', code: '+61' },
  { name: 'Canada', code: '+1' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Japan', code: '+81' },
];

const PackageInquiryForm = ({ packageTitle }: { packageTitle: string }) => {
    const [countryCode, setCountryCode] = useState('+91');
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);`;

if (content.includes(target1) && content.includes(target2)) {
    content = content.replace(target1, '');
    content = content.replace(target2, replacement2);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Success');
} else {
    console.log('Target not found');
    if (!content.includes(target1)) console.log('target1 missing');
    if (!content.includes(target2)) console.log('target2 missing');
}
