const fs = require('fs');
let c = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

c = c.replace(/};\s*$/, `,
  'shirdi-tours': {
    id: 'shirdi-tours',
    name: 'Shirdi',
    state: 'Maharashtra',
    image: '/assets/maharashtra2.avif',
    overview: { title: 'Shirdi Darshan', description: 'Experience the divine presence of Sai Baba.' },
    history: { title: 'History', description: 'Home of the great saint Sai Baba.' },
    info: { idealDuration: '2 Days', nearestCity: 'Pune', bestTime: 'All Year', peakSeason: 'Oct - March', weather: 'Moderate', internet: 'Good', stdCode: '02423', languages: 'Marathi, Hindi, English', festivals: 'Ram Navami, Guru Purnima, Vijayadashami', tips: 'Dress modestly.' },
    places: [],
    popularPackages: []
  },
  'varanasi-tours': {
    id: 'varanasi-tours',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    image: '/assets/Uttar%20Pradesh1.avif',
    overview: { title: 'Spiritual Varanasi', description: 'The oldest living city in the world.' },
    history: { title: 'History', description: 'City of Lord Shiva.' },
    info: { idealDuration: '3 Days', nearestCity: 'Lucknow', bestTime: 'Oct - March', peakSeason: 'Nov - Feb', weather: 'Hot Summers, Cool Winters', internet: 'Good', stdCode: '0542', languages: 'Hindi, English', festivals: 'Diwali, Dev Deepawali, Maha Shivaratri', tips: 'Take a boat ride at sunrise.' },
    places: [],
    popularPackages: []
  },
  'golden-triangle-tours': {
    id: 'golden-triangle-tours',
    name: 'Golden Triangle',
    state: 'Delhi, Agra, Jaipur',
    image: '/assets/dehli/dehli.avif',
    overview: { title: 'Golden Triangle', description: 'Explore the majestic heritage of India.' },
    history: { title: 'History', description: 'Rich history of Mughals and Rajputs.' },
    info: { idealDuration: '6 Days', nearestCity: 'Delhi', bestTime: 'Oct - March', peakSeason: 'Dec - Jan', weather: 'Varies', internet: 'Excellent', stdCode: '011', languages: 'Hindi, English', festivals: 'Diwali, Holi', tips: 'Carry comfortable walking shoes.' },
    places: [],
    popularPackages: []
  }
};`);

fs.writeFileSync('src/data/destinationsData.ts', c);
console.log('Added destinations');
