const fs = require('fs');
let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf-8');

const oldBreadcrumbs = `                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-white/90 text-xs md:text-sm font-semibold mb-4 drop-shadow-md">
                        <Link to="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 -translate-y-[1px]" />
                        <Link to={getRegionLink()} className="hover:text-white transition-colors whitespace-nowrap">Tour Packages</Link>
                        <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 -translate-y-[1px]" />
                        <Link to={\`/tour-packages/\${categoryInfo.slug}\`} className="hover:text-white transition-colors whitespace-nowrap">{categoryInfo.name}</Link>
                        <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 -translate-y-[1px]" />
                        <span className="text-white font-bold whitespace-nowrap">Package Details</span>
                    </div>`;

const newBreadcrumbs = `                    <div className="flex flex-nowrap items-center gap-1.5 md:gap-2 text-white/90 text-xs md:text-sm font-semibold mb-4 drop-shadow-md whitespace-nowrap overflow-x-auto">

  <Link
    to="/"
    className="hover:text-white transition-colors shrink-0"
  >
    Home
  </Link>

  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />

  <Link
    to={getRegionLink()}
    className="hover:text-white transition-colors shrink-0"
  >
    Tour Packages
  </Link>

  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />

  <Link
    to={\`/tour-packages/\${categoryInfo.slug}\`}
    className="hover:text-white transition-colors shrink-0"
  >
    {categoryInfo.name}
  </Link>

  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />

  <span className="text-white font-bold shrink-0">
    Package Details
  </span>

</div>`;

content = content.replace(oldBreadcrumbs, newBreadcrumbs);
fs.writeFileSync('src/pages/PackageDetails.tsx', content);
console.log('Reverted breadcrumbs');
