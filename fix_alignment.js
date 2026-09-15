const fs = require('fs');
const filePath = 'd:/HexaVisionTech/logaa holiday/src/pages/PackageDetails.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetSelect = `  className="
    bg-transparent
    border-0
    outline-none
    text-white
    text-sm
    sm:text-base
    font-semibold
    cursor-pointer
    appearance-none
    focus:outline-none
    focus:ring-0
    w-[58px]
  "`;

const newSelect = `  className="
    bg-transparent
    border-0
    outline-none
    text-white
    text-sm
    sm:text-base
    font-semibold
    cursor-pointer
    appearance-none
    focus:outline-none
    focus:ring-0
    w-[70px]
    text-center
  "`;

if (content.includes(targetSelect)) {
    content = content.replace(targetSelect, newSelect);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully aligned the country code!');
} else {
    console.log('Target select classes not found.');
}
