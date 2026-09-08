const fs = require('fs');
const content = fs.readFileSync('C:/Users/LOQ/.gemini/antigravity/brain/0b20a5b2-7275-46c4-98a0-aba8e6ce6820/scratch/generated_packages.ts', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('"id":')) {
    const id = line.split('"')[3];
    const titleLine = lines[i+1];
    let title = titleLine;
    if (titleLine.includes('"title":')) {
      title = titleLine.split('"')[3];
    }
    console.log(id + ': ' + title);
  }
});
