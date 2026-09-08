import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const siteUrl = 'https://www.logaaholidays.com';
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  '/',
  '/about',
  '/gallery',
  '/services',
  '/north-india-tour-packages',
  '/tour-packages',
  '/south-india-package',
  '/tamil-nadu-tour-packages',
  '/kerala-tour-packages',
  '/karnataka-tour-packages',
  '/testimonials',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/cancellation-policy',
];

const packageFilePath = path.join(rootDir, 'src', 'pages', 'PackageDetails.tsx');
const packageFile = fs.readFileSync(packageFilePath, 'utf8');
const canonicalMatches = [...packageFile.matchAll(/canonicalUrl":\s*"([^"]+)"/g)];

const packageUrls = [...new Set(
  canonicalMatches
    .map((match) => match[1])
    .filter((value) => value.startsWith(siteUrl))
    .map((value) => new URL(value).pathname)
)];

const allUrls = [...new Set([...staticRoutes, ...packageUrls])];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map((route) => {
      const priority = route === '/' ? '1.0' : '0.8';
      return `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n')}
</urlset>
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  'utf8',
);

console.log(`Generated sitemap.xml with ${allUrls.length} URLs at ${siteUrl}`);
