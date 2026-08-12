const fs = require('fs');

const path = './src/pages/PackageDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const packageIds = [
  '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
  '2018', '2019', '2020', '2021', '2022', '2023', '2024'
];

for (let i = 0; i < packageIds.length; i++) {
    const id = packageIds[i];
    const shdIndex = i + 1; // 1 to 15
    const cardImg = `/assets/shiridi/shd${shdIndex}(small).webp`;
    const heroImg = `/assets/shiridi/shd${shdIndex}.webp`;

    const regex = new RegExp(`('${id}':\\s*\\{[\\s\\S]*?"image":\\s*")([^"]*)("\\s*,\\s*"heroImage":\\s*")([^"]*)(")`, 'g');
    
    // Check if regex matches
    if (!regex.test(content)) {
        // Try alternate regex if they are separated differently
        const regexCard = new RegExp(`('${id}':\\s*\\{[\\s\\S]*?"image":\\s*")[^"]*(")`, 'g');
        content = content.replace(regexCard, `$1${cardImg}$2`);

        const regexHero = new RegExp(`('${id}':\\s*\\{[\\s\\S]*?"heroImage":\\s*")[^"]*(")`, 'g');
        content = content.replace(regexHero, `$1${heroImg}$2`);
    } else {
        content = content.replace(regex, `$1${cardImg}$3${heroImg}$5`);
    }
}

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated all Shirdi packages with images shd1 to shd15.');
