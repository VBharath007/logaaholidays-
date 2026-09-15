import fs from 'fs';
import path from 'path';
import https from 'https';

const cssUrl = "https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap";

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const outDir = path.resolve(process.cwd(), 'public/assets/fonts');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function fetch(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching CSS...');
  const cssBuffer = await fetch(cssUrl, { 'User-Agent': USER_AGENT });
  let cssText = cssBuffer.toString('utf8');

  // find all url(...) and download them
  const urlRegex = /url\((https:\/\/fonts\.gstatic\.com\/s\/[^)]+)\)/g;
  
  let match;
  let fontIndex = 0;
  
  // Track downloaded to prevent duplicates
  const downloaded = new Map();

  while ((match = urlRegex.exec(cssText)) !== null) {
    const fontUrl = match[1];
    
    if (downloaded.has(fontUrl)) {
      cssText = cssText.replace(fontUrl, `/assets/fonts/${downloaded.get(fontUrl)}`);
      continue;
    }

    // Extract basic info from CSS block to name the file
    // A simple hack: look back for font-family, font-weight, font-style
    const blockStart = cssText.lastIndexOf('@font-face', match.index);
    const blockEnd = cssText.indexOf('}', match.index);
    const block = cssText.substring(blockStart, blockEnd);
    
    let familyMatch = block.match(/font-family:\s*'([^']+)'/);
    let weightMatch = block.match(/font-weight:\s*(\d+)/);
    let styleMatch = block.match(/font-style:\s*([^;]+)/);
    
    let family = familyMatch ? familyMatch[1].replace(/ /g, '-') : 'Unknown';
    let weight = weightMatch ? weightMatch[1] : '400';
    let style = styleMatch && styleMatch[1].trim() === 'italic' ? 'italic' : 'normal';
    
    // Some fonts might have multiple unicode-ranges (e.g. latin, latin-ext). 
    // We append an index to make it unique if they share family/weight/style
    let filename = `${family.toLowerCase()}-${weight}-${style}`;
    
    // Add uniqueness if already exists
    let finalName = filename + '.woff2';
    let counter = 1;
    while (Array.from(downloaded.values()).includes(finalName)) {
      finalName = `${filename}-${counter}.woff2`;
      counter++;
    }
    
    console.log(`Downloading ${fontUrl} -> ${finalName}`);
    const fontBuffer = await fetch(fontUrl);
    fs.writeFileSync(path.join(outDir, finalName), fontBuffer);
    downloaded.set(fontUrl, finalName);
    
    cssText = cssText.replace(fontUrl, `/assets/fonts/${finalName}`);
  }
  
  fs.writeFileSync(path.resolve(process.cwd(), 'src/fonts.css'), cssText);
  console.log('Done! Generated src/fonts.css');
}

run().catch(console.error);
