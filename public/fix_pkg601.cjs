const fs = require('fs');

let c = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

c = c.replace(/};\s*$/, `,
  '601': { 
    id: '601', 
    title: 'Golden Triangle Tour', 
    image: '/assets/dehli/dehli.avif', 
    overview: { duration: '5 Nights / 6 Days', destination: 'Delhi, Agra, Jaipur', activities: 'Sightseeing, Heritage', themes: 'Culture & Heritage', transport: 'Private AC Cab' }, 
    priceDetails: { label: 'Starts @', amount: 'Rs. 25000/-', status: 'On Request' }, 
    itinerary: [
      { day: 'Day 1-2', title: 'Delhi Sightseeing', description: 'Explore Old and New Delhi.' }, 
      { day: 'Day 3', title: 'Taj Mahal, Agra', description: 'Visit the majestic Taj Mahal.' }, 
      { day: 'Day 4-5', title: 'Jaipur Exploration', description: 'Explore forts and palaces of Jaipur.' }, 
      { day: 'Day 6', title: 'Departure', description: 'Return to Delhi and depart.' }
    ], 
    inclusions: ['Hotel', 'Private AC Cab', 'Breakfast'], 
    exclusions: ['Personal Expenses'], 
    policies: { payment: '20% Advance', cancellation: 'Standard cancellation' } 
  }
};`);

fs.writeFileSync('src/pages/PackageDetails.tsx', c);
console.log('Added package 601');
