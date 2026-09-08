const fs = require('fs');

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const targetStr = `    // Ayodhya Tours
    if (titleLower.includes('ayodhya') || destLower.includes('ayodhya')) {
        return { name: 'Ayodhya Tours', slug: 'ayodhya-tours' };
    }`;

const replaceStr = `    // Ayodhya Tours
    if (titleLower.includes('ayodhya') || destLower.includes('ayodhya')) {
        return { name: 'Ayodhya Tours', slug: 'ayodhya-tours' };
    }

    // Andaman Tours
    if ((idNum >= 6000 && idNum <= 6099) || titleLower.includes('andaman') || destLower.includes('andaman')) {
        return { name: 'andaman-island-tour', slug: 'andaman-island-tour' };
    }`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
    console.log("Successfully updated PackageDetails.tsx!");
} else {
    console.log("Could not find the target string. The newline characters might be different.");
    
    // Trying with \r\n explicitly replaced
    const targetStr2 = targetStr.replace(/\n/g, '\r\n');
    if (content.includes(targetStr2)) {
        content = content.replace(targetStr2, replaceStr.replace(/\n/g, '\r\n'));
        fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
        console.log("Successfully updated PackageDetails.tsx using Windows newlines!");
    } else {
        console.log("Still could not find it. Here is a fuzzy replace.");
        const regex = /\/\/ Ayodhya Tours\s+if \(titleLower\.includes\('ayodhya'\) \|\| destLower\.includes\('ayodhya'\)\) \{\s+return \{ name: 'Ayodhya Tours', slug: 'ayodhya-tours' \};\s+\}/;
        content = content.replace(regex, replaceStr);
        fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
        console.log("Fuzzy replace applied.");
    }
}
