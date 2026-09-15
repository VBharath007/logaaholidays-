const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const distDir = path.join(__dirname, '..', 'dist');
const logoPath = path.join(publicDir, 'logo.png');

let logoBase64 = '';
if (fs.existsSync(logoPath)) {
  logoBase64 = 'data:image/png;base64,' + fs.readFileSync(logoPath).toString('base64');
}

const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: linear-gradient(135deg, #091C36 0%, #112F5A 50%, #1E4D8C 100%);
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 70px;
    position: relative;
    overflow: hidden;
    color: #ffffff;
  }
  .bg-circle-1 {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(184, 134, 11, 0.18) 0%, rgba(0,0,0,0) 70%);
    border-radius: 50%;
  }
  .bg-circle-2 {
    position: absolute;
    bottom: -150px;
    left: 200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(11, 64, 143, 0.4) 0%, rgba(0,0,0,0) 70%);
    border-radius: 50%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
  }
  .logo-box {
    background: #ffffff;
    padding: 14px 28px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
  }
  .logo-img {
    height: 56px;
    object-fit: contain;
  }
  .badge {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 10px 22px;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #E2E8F0;
    backdrop-filter: blur(8px);
  }
  .main-content {
    position: relative;
    z-index: 10;
    margin-top: 10px;
  }
  .gold-tag {
    color: #F3C242;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .gold-tag::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 3px;
    background: #F3C242;
    border-radius: 2px;
  }
  h1 {
    font-size: 56px;
    line-height: 1.15;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 18px;
    text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  p {
    font-size: 24px;
    color: #CBD5E1;
    max-width: 860px;
    line-height: 1.4;
    font-weight: 400;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 24px;
    position: relative;
    z-index: 10;
  }
  .features {
    display: flex;
    gap: 24px;
    font-size: 17px;
    color: #E2E8F0;
    font-weight: 500;
  }
  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .feature-dot {
    color: #F3C242;
  }
  .contact-info {
    font-size: 18px;
    color: #F8FAFC;
    font-weight: 700;
  }
</style>
</head>
<body>
  <div class="bg-circle-1"></div>
  <div class="bg-circle-2"></div>

  <div class="header">
    <div class="logo-box">
      <img src="${logoBase64}" class="logo-img" alt="Logaa Holidays" />
    </div>
    <div class="badge">Madurai's Premier Tour Operator</div>
  </div>

  <div class="main-content">
    <div class="gold-tag">Unforgettable Journeys Across India</div>
    <h1>Best Travel Agency &amp; Tour Operator</h1>
    <p>Customized holiday packages, temple pilgrimages, hill station escapes, honeymoon specials, and premium car &amp; coach rentals.</p>
  </div>

  <div class="footer">
    <div class="features">
      <div class="feature-item"><span class="feature-dot">✦</span> South India</div>
      <div class="feature-item"><span class="feature-dot">✦</span> North India</div>
      <div class="feature-item"><span class="feature-dot">✦</span> Honeymoon Specials</div>
      <div class="feature-item"><span class="feature-dot">✦</span> Car &amp; Coach Rental</div>
    </div>
    <div class="contact-info">www.logaaholidays.com • +91 73973 29776</div>
  </div>
</body>
</html>`;

async function generate() {
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1
  });

  await page.setContent(htmlContent, { waitUntil: 'load' });
  
  const jpgPublic = path.join(publicDir, 'og-image.jpg');
  const pngPublic = path.join(publicDir, 'og-image.png');
  const jpgDist = path.join(distDir, 'og-image.jpg');
  const pngDist = path.join(distDir, 'og-image.png');

  await page.screenshot({ path: jpgPublic, type: 'jpeg', quality: 90 });
  await page.screenshot({ path: pngPublic, type: 'png' });

  if (fs.existsSync(distDir)) {
    fs.copyFileSync(jpgPublic, jpgDist);
    fs.copyFileSync(pngPublic, pngDist);
  }

  await browser.close();
  console.log('Successfully created 1200x630 social share images: og-image.jpg & og-image.png');
}

generate().catch(err => {
  console.error('Playwright error:', err);
  process.exit(1);
});
