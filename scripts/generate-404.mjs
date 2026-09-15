import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

// HTML template matching NotFound.tsx component UI exactly
const notFoundInnerHtml = `
  <div class="bg-[var(--color-bg-luxury,#f8f9fa)] min-h-[70vh] flex flex-col items-center justify-center text-center px-6" style="min-height: 70vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding-left: 1.5rem; padding-right: 1.5rem; background-color: var(--color-bg-luxury, #f8f9fa);">
    <h1 class="text-8xl font-display font-bold text-[var(--color-primary-forest,#1e3d34)] mb-4" style="font-size: 6rem; line-height: 1; font-weight: 700; color: var(--color-primary-forest, #1e3d34); margin-bottom: 1rem;">404</h1>
    <h2 class="text-3xl font-bold text-slate-800 mb-6" style="font-size: 1.875rem; font-weight: 700; color: #1e293b; margin-bottom: 1.5rem;">Page Not Found</h2>
    <p class="text-slate-600 mb-8 max-w-md mx-auto" style="color: #475569; margin-bottom: 2rem; max-width: 28rem; margin-left: auto; margin-right: auto;">
      Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <a href="/" class="flex items-center gap-2 bg-[var(--color-blue-ocean,#0B408F)] text-white font-bold px-8 py-4 rounded-full hover:bg-[var(--color-primary-emerald,#059669)] transition-colors" style="display: inline-flex; align-items: center; gap: 0.5rem; background-color: var(--color-blue-ocean, #0B408F); color: #ffffff; font-weight: 700; padding: 1rem 2rem; border-radius: 9999px; text-decoration: none;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      Back to Home
    </a>
  </div>
`;

function create404Html(sourceHtml) {
  let html = sourceHtml;
  html = html.replace(/<title>.*?<\/title>/s, '<title>Page Not Found | Logaa Holidays</title>');
  if (!html.includes('name="robots"')) {
    html = html.replace('</head>', '  <meta name="robots" content="noindex, follow" />\n</head>');
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${notFoundInnerHtml}</div>`);
  return html;
}

function createGalleryHtml(sourceHtml) {
  let html = sourceHtml;
  html = html.replace(/<title>.*?<\/title>/s, '<title>Our Gallery | Logaa Holidays</title>');
  html = html.replace(/<link rel="canonical" href=".*?" \/>/s, '<link rel="canonical" href="https://logaaholidays.com/gallery" />');
  html = html.replace(/<meta property="og:title" content=".*?" \/>/s, '<meta property="og:title" content="Our Gallery | Logaa Holidays" />');
  html = html.replace(/<meta property="og:description" content=".*?" \/>/s, '<meta property="og:description" content="Explore the beautiful moments and breathtaking destinations captured with Logaa Holidays across Tamil Nadu, South India and beyond." />');
  html = html.replace(/<meta property="og:url" content=".*?" \/>/s, '<meta property="og:url" content="https://logaaholidays.com/gallery" />');
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/s, '<meta name="twitter:title" content="Our Gallery | Logaa Holidays" />');
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/s, '<meta name="twitter:description" content="Explore the beautiful moments and breathtaking destinations captured with Logaa Holidays across Tamil Nadu, South India and beyond." />');
  return html;
}

// Generate dist/404.html and dist/gallery/index.html
const distIndex = path.join(distDir, 'index.html');
if (fs.existsSync(distIndex)) {
  const content = fs.readFileSync(distIndex, 'utf8');
  fs.writeFileSync(path.join(distDir, '404.html'), create404Html(content), 'utf8');
  console.log('Successfully generated dist/404.html');

  const distGalleryDir = path.join(distDir, 'gallery');
  fs.mkdirSync(distGalleryDir, { recursive: true });
  fs.writeFileSync(path.join(distGalleryDir, 'index.html'), createGalleryHtml(content), 'utf8');
  console.log('Successfully generated dist/gallery/index.html');
}

// Ensure public files
if (fs.existsSync(distIndex)) {
  const content = fs.readFileSync(distIndex, 'utf8');
  fs.writeFileSync(path.join(publicDir, '404.html'), create404Html(content), 'utf8');
  const publicGalleryDir = path.join(publicDir, 'gallery');
  fs.mkdirSync(publicGalleryDir, { recursive: true });
  fs.writeFileSync(path.join(publicGalleryDir, 'index.html'), createGalleryHtml(content), 'utf8');
}
