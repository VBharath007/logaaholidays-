const fs = require('fs');
let c = fs.readFileSync('src/pages/NorthIndiaPackage.tsx', 'utf8');

const newPackagesData = `const packagesData = [
 { id: 121, placeId: 'maharashtra', title: 'Shirdi Darshan Tour', location: 'Shirdi', price: 350, rating: 4.8, duration: '2 Days', people: '2 Person', image: '/assets/maharashtra2.avif' },
 { id: 12, placeId: 'maharashtra', title: 'Lonavala Weekend', location: 'Lonavala', price: 290, rating: 4.7, duration: '2 Days', people: '2-4 Person', image: '/assets/maharashtra1.avif' },
 { id: 122, placeId: 'maharashtra', title: 'Mumbai City Explorer', location: 'Mumbai', price: 200, rating: 4.6, duration: '1 Day', people: '1-4 Person', image: '/assets/maharashtra4.avif' },
 { id: 123, placeId: 'maharashtra', title: 'Pune Heritage Tour', location: 'Pune', price: 250, rating: 4.7, duration: '2 Days', people: '2-4 Person', image: '/assets/maharashtra6.avif' },

 { id: 191, placeId: 'uttarpradesh', title: 'Varanasi Spiritual Tour', location: 'Varanasi', price: 350, rating: 4.8, duration: '3 Days', people: '1-3 Person', image: '/assets/Uttar%20Pradesh1.avif' },
 { id: 19, placeId: 'uttarpradesh', title: 'Taj Mahal Sunrise', location: 'Agra', price: 450, rating: 4.9, duration: '2 Days', people: '2 Person', image: '/assets/Uttar%20Pradesh2.avif' },
 { id: 192, placeId: 'uttarpradesh', title: 'Lucknow Nawabi Trail', location: 'Lucknow', price: 280, rating: 4.7, duration: '2 Days', people: '2-4 Person', image: '/assets/Uttar%20Pradesh3.avif' },
 { id: 193, placeId: 'uttarpradesh', title: 'Mathura Vrindavan', location: 'Mathura', price: 300, rating: 4.6, duration: '3 Days', people: '2-6 Person', image: '/assets/Uttar%20Pradesh4.avif' },

 { id: 601, placeId: 'goldentriangle', title: 'Golden Triangle Tour', location: 'Delhi, Agra, Jaipur', price: 850, rating: 4.9, duration: '6 Days', people: '2-4 Person', image: '/assets/dehli/dehli.avif' },
]`;

c = c.replace(/const packagesData = \[\s*\{ id: 121[\s\S]*?\]/, newPackagesData);
fs.writeFileSync('src/pages/NorthIndiaPackage.tsx', c);
console.log('Restored old packages for Maharashtra and UP.');
