const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const kashmirMenuStr = ` {
 title: 'Kashmir Tours',
 items: [
   { href: '/north-india-tour-packages/kashmir-tours', label: 'View All Kashmir Tours' },
   { href: '/north-india-tour-packages/kashmir-tours/kashmir-short-escape-package', label: 'Kashmir Short Escape' },
   { href: '/north-india-tour-packages/kashmir-tours/kashmir-highlights-package', label: 'Kashmir Highlights' },
   { href: '/north-india-tour-packages/kashmir-tours/beautiful-kashmir-package', label: 'Beautiful Kashmir' },
   { href: '/north-india-tour-packages/kashmir-tours/classic-kashmir-holiday-package', label: 'Classic Kashmir Holiday' },
   { href: '/north-india-tour-packages/kashmir-tours/complete-kashmir-experience', label: 'Complete Kashmir Experience' }
 ]
 },
`;

// Insert after 'Manali Volvo Tours' block or before the end of North India categories array.
// Let's replace ' { href: '/north-india-tour-packages/manali-volvo-tours/complete-manali-volvo-holiday', label: 'Complete Manali Volvo' }\n ]\n }' with itself + the new kashmir menu.
content = content.replace(
    "}    { href: '/north-india-tour-packages/manali-volvo-tours/complete-manali-volvo-holiday', label: 'Complete Manali Volvo' }\n  ]\n  }",
    "    { href: '/north-india-tour-packages/manali-volvo-tours/complete-manali-volvo-holiday', label: 'Complete Manali Volvo' }\n  ]\n  },\n" + kashmirMenuStr
);

// Fallback if formatting is different
if (!content.includes('Kashmir Tours')) {
    content = content.replace(
        "    { href: '/north-india-tour-packages/manali-volvo-tours/complete-manali-volvo-holiday', label: 'Complete Manali Volvo' }\n ]\n }",
        "    { href: '/north-india-tour-packages/manali-volvo-tours/complete-manali-volvo-holiday', label: 'Complete Manali Volvo' }\n ]\n },\n" + kashmirMenuStr
    );
}

fs.writeFileSync('src/components/Navbar.tsx', content, 'utf8');
console.log('Navbar.tsx updated successfully');
