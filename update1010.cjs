const fs = require('fs');

const file = 'src/pages/PackageDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

const id = '1010';
const card = '/assets/shiridi/cards/maduraitoshirdi2day.webp';
const hero = '/assets/shiridi/hero/maduraishirdi2day.webp';

const pkgStart = content.indexOf(`'${id}': {`);
if (pkgStart !== -1) {
    const pkgEnd = content.indexOf(`'1007': {`, pkgStart); // The next ID is 1007
    let pkgContent = pkgEnd !== -1 ? content.substring(pkgStart, pkgEnd) : content.substring(pkgStart);
    
    pkgContent = pkgContent.replace(/"image":\s*"[^"]*",/g, `"image": "${card}",`);
    pkgContent = pkgContent.replace(/"heroImage":\s*"[^"]*",/g, `"heroImage": "${hero}",`);
    
    if (pkgEnd !== -1) {
        content = content.substring(0, pkgStart) + pkgContent + content.substring(pkgEnd);
    } else {
        content = content.substring(0, pkgStart) + pkgContent;
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated 1010');
}
