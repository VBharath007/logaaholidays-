const fs = require('fs');

// 1. UPDATE DESTINATIONS DATA
let destContent = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const rameshwaramData = `
  'rameshwaram-tourism': {
    id: 'rameshwaram-tourism',
    name: 'Rameshwaram',
    image: 'https://images.unsplash.com/photo-1627885065099-07525381a179?auto=format&fit=crop&q=80&w=1600',
    state: 'Tamil Nadu',
    overview: {
      title: 'Rameshwaram Tourism',
      description: 'Rameshwaram is a holy island town in Tamil Nadu, famous for its grand Ramanathaswamy Temple and the legendary Ram Setu. Known as the Varanasi of the South, it is one of the Char Dham pilgrimage sites.'
    },
    history: {
      title: 'Rameshwaram History',
      description: 'According to Hindu mythology, this is the place from where Lord Rama built a bridge across the sea to Lanka to rescue his wife Sita from her abductor Ravana.'
    },
    info: {
      idealDuration: '1 Night 2 Days',
      nearestCity: 'Madurai',
      bestTime: 'October to April',
      peakSeason: 'December to February',
      weather: 'Tropical',
      internet: 'Moderate',
      stdCode: '04573',
      languages: 'Tamil, English, Hindi',
      festivals: 'Mahashivratri, Vasanthautsavam',
      tips: 'Book accommodations well in advance during festival seasons.'
    },
    majorAttractions: [
      {
        title: 'Ramanathaswamy Temple',
        description: 'A magnificent temple dedicated to Lord Shiva, known for having the longest corridor in the world with stunning pillars.'
      }
    ],
    placesToVisit: [
      {
        id: 'ramanathaswamy-temple',
        name: 'Ramanathaswamy Temple',
        type: 'Temple',
        image: 'https://images.unsplash.com/photo-1627885065099-07525381a179?auto=format&fit=crop&q=80&w=800',
        description: 'One of the twelve Jyotirlinga temples. It is mandatory to bathe in the 22 holy wells (Theerthams) inside the temple premises before offering prayers to the deity.'
      },
      {
        id: 'agniteertham',
        name: 'Agniteertham',
        type: 'Beach',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
        description: 'The sacred beach outside the Ramanathaswamy Temple where pilgrims take a holy dip before entering the temple.'
      },
      {
        id: 'pamban-bridge',
        name: 'Pamban Bridge',
        type: 'Landmark',
        image: 'https://images.unsplash.com/photo-1598379417855-0810ffeb334a?auto=format&fit=crop&q=80&w=800',
        description: 'India’s first sea bridge connecting Rameswaram Island with the mainland. The architectural marvel offers breathtaking views of the ocean.'
      },
      {
        id: 'panchmukhi-hanuman',
        name: 'Panchmukhi Hanuman Mandir',
        type: 'Temple',
        image: 'https://images.unsplash.com/photo-1601058269757-19069d82cbcc?auto=format&fit=crop&q=80&w=800',
        description: 'This temple is highly revered as it is believed that Lord Hanuman revealed his five-faced form here. It also houses the floating stones used to build the Ram Setu.'
      },
      {
        id: 'dhanushkodi',
        name: 'Dhanushkodi',
        type: 'Historical Site',
        image: 'https://images.unsplash.com/photo-1582294101967-df50f3b46973?auto=format&fit=crop&q=80&w=800',
        description: 'A ghost town destroyed by the 1964 cyclone, Dhanushkodi offers pristine beaches, ruined structures, and a surreal edge-of-the-world experience.'
      }
    ]
  },
`;

const kanyakumariData = `
  'kanyakumari-tourism': {
    id: 'kanyakumari-tourism',
    name: 'Kanyakumari',
    image: 'https://images.unsplash.com/photo-1610486337180-8772a4b8eb7c?auto=format&fit=crop&q=80&w=1600',
    state: 'Tamil Nadu',
    overview: {
      title: 'Kanyakumari Tourism',
      description: 'Kanyakumari, the southernmost tip of mainland India, is renowned for its spectacular sunrises and sunsets over the confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean.'
    },
    history: {
      title: 'Kanyakumari History',
      description: 'Historically known as Cape Comorin, it has been a center for art and religion for centuries.'
    },
    info: {
      idealDuration: '1 Night 2 Days',
      nearestCity: 'Trivandrum',
      bestTime: 'October to March',
      peakSeason: 'December',
      weather: 'Tropical',
      internet: 'Good',
      stdCode: '04652',
      languages: 'Tamil, English, Malayalam',
      festivals: 'Chaitra Purnima Festival',
      tips: 'Wake up early to catch the famous sunrise.'
    },
    majorAttractions: [
      {
        title: 'Vivekananda Rock Memorial',
        description: 'A monument sitting on a rock in the ocean.'
      }
    ],
    placesToVisit: [
      {
        id: 'vivekananda-rock',
        name: 'Vivekananda Rock Memorial',
        type: 'Landmark',
        image: 'https://images.unsplash.com/photo-1610486337180-8772a4b8eb7c?auto=format&fit=crop&q=80&w=800',
        description: 'A popular tourist monument built in honor of Swami Vivekananda, who is said to have attained enlightenment on this rock.'
      },
      {
        id: 'thiruvalluvar-statue',
        name: 'Thiruvalluvar Statue',
        type: 'Landmark',
        image: 'https://images.unsplash.com/photo-1598379417855-0810ffeb334a?auto=format&fit=crop&q=80&w=800',
        description: 'A towering stone sculpture of the Tamil poet and philosopher Valluvar.'
      }
    ]
  },
`;

if (!destContent.includes('rameshwaram-tourism')) {
  destContent = destContent.replace(
    /export const destinationsData: Record<string, any> = \{/,
    `export const destinationsData: Record<string, any> = {\n${rameshwaramData}\n${kanyakumariData}`
  );
  fs.writeFileSync('src/data/destinationsData.ts', destContent, 'utf8');
  console.log('Added Rameshwaram & Kanyakumari data');
}

// 2. UPDATE ALIAS LOGIC IN PackageDetails.tsx
let pdContent = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const originalAliasLogic = `
      if (place.name.endsWith(' Temple')) {
         const shortName = place.name.replace(' Temple', '');
         lowerPlaceMap[shortName.toLowerCase()] = url;
      }
    });
`;

const newAliasLogic = `
      if (place.name.endsWith(' Temple')) {
         const shortName = place.name.replace(' Temple', '');
         lowerPlaceMap[shortName.toLowerCase()] = url;
      }
      if (place.name.endsWith(' Mandir')) {
         const shortName = place.name.replace(' Mandir', '');
         lowerPlaceMap[shortName.toLowerCase()] = url;
      }
      
      // Special aliases
      if (place.id === 'koodal-algar') {
         lowerPlaceMap['koodal algar temple'] = url;
         lowerPlaceMap['koodal algar'] = url;
         lowerPlaceMap['koodal azhagar'] = url;
      }
      if (place.id === 'meenakshi-temple') {
         lowerPlaceMap['madurai meenakshi amman temple'] = url;
         lowerPlaceMap['meenakshi amman temple'] = url;
      }
    });
`;

if (pdContent.includes(originalAliasLogic)) {
  pdContent = pdContent.replace(originalAliasLogic, newAliasLogic);
  fs.writeFileSync('src/pages/PackageDetails.tsx', pdContent, 'utf8');
  console.log('Updated alias logic');
} else {
  console.log('Alias logic already updated or pattern not found');
}
