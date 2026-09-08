const fs = require('fs');

const files = [
    {
        path: 'src/pages/PackageDetails.tsx',
        search: 'className="flex flex-wrap items-center gap-2 text-white/90 text-base md:text-lg font-semibold mb-4 drop-shadow-md"',
        replace: 'className="flex flex-wrap items-center gap-2 text-white/90 text-lg md:text-xl font-semibold mb-4 drop-shadow-md"'
    },
    {
        path: 'src/pages/PlacesToVisit.tsx',
        search: 'className="flex flex-wrap items-center gap-2 text-white/80 text-base md:text-lg font-medium mb-4"',
        replace: 'className="flex flex-wrap items-center gap-2 text-white/80 text-lg md:text-xl font-medium mb-4"'
    },
    {
        path: 'src/pages/PlaceDetails.tsx',
        search: 'className="flex flex-wrap items-center gap-2 text-white/80 text-base md:text-lg font-medium mb-4"',
        replace: 'className="flex flex-wrap items-center gap-2 text-white/80 text-lg md:text-xl font-medium mb-4"'
    },
    {
        path: 'src/pages/DestinationOverview.tsx',
        search: 'className="flex flex-wrap items-center gap-2 text-white/80 text-base md:text-lg font-medium mb-4"',
        replace: 'className="flex flex-wrap items-center gap-2 text-white/80 text-lg md:text-xl font-medium mb-4"'
    }
];

for (const file of files) {
    if (fs.existsSync(file.path)) {
        let content = fs.readFileSync(file.path, 'utf8');
        content = content.replace(file.search, file.replace);
        fs.writeFileSync(file.path, content);
        console.log('Replaced in ' + file.path);
    }
}
