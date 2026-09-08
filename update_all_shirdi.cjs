const fs = require('fs');

const path = './src/pages/PackageDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const packageIds = [
  '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
  '2018', '2019', '2020', '2021', '2022', '2023', '2024',
  '1010', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'
];

let updatedCount = 0;

for (let i = 0; i < packageIds.length; i++) {
    const id = packageIds[i];
    const shdIndex = (i % 15) + 1;
    const cardImg = `/assets/shiridi/shd${shdIndex}(small).webp`;
    const heroImg = `/assets/shiridi/shd${shdIndex}.webp`;

    // Regex to match the block of a specific package ID
    const blockRegexStr = `('${id}'|${id}):\\s*\\{[\\s\\S]*?(?=,\\s*(?:'\\d+'|\\d+):\\s*\\{|\\s*\\}\\s*;\\s*$)`;
    const blockRegex = new RegExp(blockRegexStr, 'g');
    
    let match = blockRegex.exec(content);
    if (match) {
        let block = match[0];
        
        // Update image
        block = block.replace(/(image|"image")\s*:\s*['"][^'"]+['"]/g, `$1: '${cardImg}'`);
        
        // Update heroImage, or add it if it doesn't exist
        if (/(heroImage|"heroImage")\s*:\s*['"][^'"]+['"]/g.test(block)) {
            block = block.replace(/(heroImage|"heroImage")\s*:\s*['"][^'"]+['"]/g, `$1: '${heroImg}'`);
        } else {
            // Add heroImage right after image
            block = block.replace(/(image|"image")(\s*:\s*['"][^'"]+['"]\s*,)/, `$1$2\n        heroImage: '${heroImg}',`);
        }
        
        content = content.substring(0, match.index) + block + content.substring(match.index + match[0].length);
        updatedCount++;
    }
}

fs.writeFileSync(path, content, 'utf8');
console.log(`Successfully updated ${updatedCount} Shirdi packages with images shd1 to shd15.`);
