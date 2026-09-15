const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  {
    src: 'public/assets/madurai/mahal.webp',
    width1x: 587,
    width2x: 1174
  },
  {
    src: 'public/assets/meenakshi amman temple.webp',
    width1x: 732,
    width2x: 1448
  },
  {
    src: 'public/assets/home hero/homeverticalone (1).webp',
    width1x: 579,
    width2x: 941
  },
  {
    src: 'public/logo.webp',
    width1x: 155,
    width2x: 310
  }
];

async function optimizeImages() {
  console.log('--- Generating 1x and 2x WebP Variants (Quality: 78) ---');
  let totalOrigBytes = 0;
  let total1xBytes = 0;
  let total2xBytes = 0;

  for (const img of images) {
    const fullSrcPath = path.resolve(img.src);
    if (!fs.existsSync(fullSrcPath)) {
      console.warn(`File not found: ${fullSrcPath}`);
      continue;
    }

    const dir = path.dirname(fullSrcPath);
    const ext = path.extname(fullSrcPath);
    const base = path.basename(fullSrcPath, ext);

    const out1x = path.join(dir, `${base}-${img.width1x}w${ext}`);
    const out2x = path.join(dir, `${base}-${img.width1x}w@2x${ext}`);

    const meta = await sharp(fullSrcPath).metadata();

    await sharp(fullSrcPath)
      .resize({ width: img.width1x, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out1x);

    await sharp(fullSrcPath)
      .resize({ width: img.width2x, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out2x);

    const origStat = fs.statSync(fullSrcPath);
    const stat1x = fs.statSync(out1x);
    const stat2x = fs.statSync(out2x);

    totalOrigBytes += origStat.size;
    total1xBytes += stat1x.size;
    total2xBytes += stat2x.size;

    console.log(`\n[${base}]`);
    console.log(`  Original: ${meta.width}x${meta.height} -> ${(origStat.size / 1024).toFixed(1)} KiB`);
    console.log(`  1x (${img.width1x}w): ${(stat1x.size / 1024).toFixed(1)} KiB (Saved: ${((origStat.size - stat1x.size) / 1024).toFixed(1)} KiB / ${(((origStat.size - stat1x.size) / origStat.size) * 100).toFixed(1)}%)`);
    console.log(`  2x (${img.width2x}w): ${(stat2x.size / 1024).toFixed(1)} KiB (Saved: ${((origStat.size - stat2x.size) / 1024).toFixed(1)} KiB / ${(((origStat.size - stat2x.size) / origStat.size) * 100).toFixed(1)}%)`);
  }

  console.log('\n======================================================');
  console.log(`Total Original Size: ${(totalOrigBytes / 1024).toFixed(1)} KiB`);
  console.log(`Total 1x Variant Size: ${(total1xBytes / 1024).toFixed(1)} KiB`);
  console.log(`Total 1x Savings: ${((totalOrigBytes - total1xBytes) / 1024).toFixed(1)} KiB (${(((totalOrigBytes - total1xBytes) / totalOrigBytes) * 100).toFixed(1)}%)`);
  console.log('======================================================');
}

optimizeImages().catch(console.error);
