const fs = require('fs');

let content = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const targetStr = '"popularPackages": ["6001", "6002", "6003", "6004", "6005", "6006"];';
const replaceStr = '"popularPackages": ["6001", "6002", "6003", "6004", "6005", "6006"]\n}\n};';

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync('src/data/destinationsData.ts', content, 'utf8');
    console.log("Successfully fixed syntax error!");
} else {
    console.log("Could not find the target string.");
}
