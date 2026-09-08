const fs = require('fs');
const files = [
    'src/pages/PlacesToVisit.tsx',
    'src/pages/PlaceDetails.tsx',
    'src/pages/DestinationOverview.tsx'
];
for (const file of files) {
    if(fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace('className="flex flex-wrap items-center gap-2 text-white/80 text-sm font-medium mb-4"', 'className="flex flex-wrap items-center gap-2 text-white/80 text-base md:text-lg font-medium mb-4"');
        fs.writeFileSync(file, content);
        console.log('Replaced in ' + file);
    }
}
