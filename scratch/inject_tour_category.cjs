const fs = require('fs');

let content = fs.readFileSync('src/pages/TourCategory.tsx', 'utf8');

// 1. Add kashmirPackages array
const kashmirPackagesStr = `
const kashmirPackages = [
  getDbPackage('8401')!,
  getDbPackage('8402')!,
  getDbPackage('8403')!,
  getDbPackage('8404')!,
  getDbPackage('8405')!
];
`;
content = content.replace('const rameshwaramPackages = [', kashmirPackagesStr + '\nconst rameshwaramPackages = [');

// 2. Add to normalize map
content = content.replace(
    '[shirdiPackages, punePackages, kanyakumariPackages, cherrapunjiPackages, shillongPackages, guwahatiPackages, varanasiPackages, rameshwaramPackages, goldenTrianglePackages, shimlaPackages, manaliPackages, manaliVolvoPackages, keralaHoneymoonPackages, goaHoneymoonPackages, tamilNaduHoneymoonPackages, karnatakaHoneymoonPackages, kashmirHoneymoonPackages, himachalHoneymoonPackages]',
    '[shirdiPackages, punePackages, kanyakumariPackages, cherrapunjiPackages, shillongPackages, guwahatiPackages, varanasiPackages, rameshwaramPackages, goldenTrianglePackages, shimlaPackages, manaliPackages, manaliVolvoPackages, keralaHoneymoonPackages, goaHoneymoonPackages, tamilNaduHoneymoonPackages, karnatakaHoneymoonPackages, kashmirHoneymoonPackages, himachalHoneymoonPackages, kashmirPackages]'
);

// 3. Add to switch category
content = content.replace(
    "case 'shimla-tours': return shimlaPackages;",
    "case 'shimla-tours': return shimlaPackages;\n        case 'kashmir-tours': return kashmirPackages;"
);

// 4. Add seo metadata
const kashmirSeoStr = `      case 'kashmir-tours': return {
        title: 'Kashmir Tour Packages from Tamil Nadu | Logaa Holidays',
        description: 'Book customized Kashmir tour packages from Madurai, Chennai & Tamil Nadu with Logaa Holidays. Cover Srinagar, Gulmarg, Pahalgam & Sonamarg.',
        keywords: 'Kashmir tour packages from Tamil Nadu, Kashmir package from Madurai, Kashmir package from Chennai, Srinagar Gulmarg Pahalgam package, Logaa Holidays Kashmir tour'
      };
`;
content = content.replace(
    "case 'shimla-tours': return {",
    kashmirSeoStr + "      case 'shimla-tours': return {"
);

fs.writeFileSync('src/pages/TourCategory.tsx', content, 'utf8');
console.log('TourCategory.tsx updated successfully');
