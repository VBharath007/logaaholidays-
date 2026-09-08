const fs = require('fs');

const path = 'd:/HexaVisionTech/logaa holiday/src/pages/TourCategory.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetStr = 'const { category } = useParams<{ category: string }>();';
const injectStr = "  const categoryTitle = category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Tours';";

if (content.includes(targetStr)) {
  content = content.replace(targetStr, targetStr + '\n' + injectStr);
  fs.writeFileSync(path, content);
  console.log('Injected categoryTitle successfully!');
} else {
  console.log('Could not find useParams declaration.');
}
