const fs = require('fs');

let destContent = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const newDestinations = `
  'kovalam-tourism': {
    id: 'kovalam-tourism',
    name: 'Kovalam',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=1600',
    state: 'Kerala',
    overview: {
      title: 'Kovalam Tourism',
      description: 'Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favorite haunt of tourists since the 1930s.'
    },
    history: {
      title: 'Kovalam History',
      description: 'Kovalam first received attention when the Regent Maharani Sethu Lakshmi Bayi of Travancore constructed her beach resort, Halcyon Castle, here in the 1920s.'
    },
    info: {
      idealDuration: '2 Nights 3 Days',
      nearestCity: 'Trivandrum',
      bestTime: 'September to March',
      peakSeason: 'December to January',
      weather: 'Tropical',
      internet: 'Excellent',
      stdCode: '0471',
      languages: 'Malayalam, English, Hindi',
      festivals: 'Village Fair',
      tips: 'The beaches can get crowded, so visit early morning for peace.'
    },
    majorAttractions: [
      { title: 'Lighthouse Beach', description: 'The most popular beach in Kovalam, known for its iconic striped lighthouse.' }
    ],
    placesToVisit: [
      {
        id: 'lighthouse-beach',
        name: 'Lighthouse Beach',
        type: 'Beach',
        image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=800',
        description: 'Famous for the 30-meter tall lighthouse on the Kurumkal hill, this is the largest and most crowded of the three beaches in Kovalam.'
      },
      {
        id: 'samudra-beach',
        name: 'Samudra Beach',
        type: 'Beach',
        image: 'https://images.unsplash.com/photo-1544287757-a8ab80d1a4c4?auto=format&fit=crop&q=80&w=800',
        description: 'A scenic and relatively quieter beach, separated by a large promontory. Ideal for a peaceful retreat away from the crowds.'
      }
    ]
  },
  'trivandrum-tourism': {
    id: 'trivandrum-tourism',
    name: 'Trivandrum',
    image: 'https://images.unsplash.com/photo-1634033036830-1c322b67f10b?auto=format&fit=crop&q=80&w=1600',
    state: 'Kerala',
    overview: {
      title: 'Trivandrum Tourism',
      description: 'Thiruvananthapuram (Trivandrum) is the capital of Kerala, distinguished by its British colonial architecture and many art galleries.'
    },
    history: {
      title: 'Trivandrum History',
      description: 'The city was the capital of the Travancore kingdom from 1795 until independence.'
    },
    info: {
      idealDuration: '1 Night 2 Days',
      nearestCity: 'Kovalam',
      bestTime: 'October to February',
      peakSeason: 'December',
      weather: 'Tropical',
      internet: 'Excellent',
      stdCode: '0471',
      languages: 'Malayalam, English',
      festivals: 'Onam, Attukal Pongala',
      tips: 'Dress modestly when visiting the ancient temples.'
    },
    majorAttractions: [
      { title: 'Sree Padmanabhaswamy Temple', description: 'One of the wealthiest temples in the world, renowned for its intricate architecture.' }
    ],
    placesToVisit: [
      {
        id: 'padmanabhaswamy-temple',
        name: 'Sree Padmanabhaswamy Temple',
        type: 'Temple',
        image: 'https://images.unsplash.com/photo-1634033036830-1c322b67f10b?auto=format&fit=crop&q=80&w=800',
        description: 'An architectural wonder blending Kerala and Dravidian styles, dedicated to Lord Vishnu reclining on Anantha.'
      },
      {
        id: 'napier-museum',
        name: 'Napier Museum',
        type: 'Museum',
        image: 'https://images.unsplash.com/photo-1598379417855-0810ffeb334a?auto=format&fit=crop&q=80&w=800',
        description: 'A 19th-century art and natural history museum featuring a rare collection of archaeological artifacts and historical ornaments.'
      }
    ]
  },
`;

const extraKanyakumariPlaces = `
      {
        id: 'kanyakumari-beach',
        name: 'Kanyakumari beach',
        type: 'Beach',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
        description: 'Famous for its multi-colored sand and the stunning view of the confluence of three oceans.'
      },
      {
        id: 'sunset-point',
        name: 'Sunset Point',
        type: 'Viewpoint',
        image: 'https://images.unsplash.com/photo-1610486337180-8772a4b8eb7c?auto=format&fit=crop&q=80&w=800',
        description: 'The most popular spot to witness the mesmerizing sunset over the Arabian Sea.'
      },
      {
        id: 'padmanabhapuram-palace',
        name: 'Padmanabhapuram palace',
        type: 'Historical Site',
        image: 'https://images.unsplash.com/photo-1582294101967-df50f3b46973?auto=format&fit=crop&q=80&w=800',
        description: 'A magnificent wooden palace of the 16th century located near Kanyakumari, showcasing traditional Kerala architecture.'
      },
      {
        id: 'suchindram-temple',
        name: 'Suchindram temple',
        type: 'Temple',
        image: 'https://images.unsplash.com/photo-1601058269757-19069d82cbcc?auto=format&fit=crop&q=80&w=800',
        description: 'Also known as the Thanumalayan Temple, this architectural marvel is famous for its musical pillars and towering gopuram.'
      }
`;

// Insert Kovalam and Trivandrum
if (!destContent.includes('kovalam-tourism')) {
  destContent = destContent.replace(
    /export const destinationsData: Record<string, any> = \{/,
    `export const destinationsData: Record<string, any> = {\\n${newDestinations}`
  );
}

// Insert extra Kanyakumari places
if (destContent.includes('kanyakumari-tourism') && !destContent.includes('kanyakumari-beach')) {
  const targetPattern = /id: 'thiruvalluvar-statue',[\s\S]*?\}\n    \]/;
  const replacement = `id: 'thiruvalluvar-statue',
        name: 'Thiruvalluvar Statue',
        type: 'Landmark',
        image: 'https://images.unsplash.com/photo-1598379417855-0810ffeb334a?auto=format&fit=crop&q=80&w=800',
        description: 'A towering stone sculpture of the Tamil poet and philosopher Valluvar.'
      },
\${extraKanyakumariPlaces}
    ]`;
  destContent = destContent.replace(targetPattern, replacement);
}

fs.writeFileSync('src/data/destinationsData.ts', destContent, 'utf8');

// Update Alias logic in PackageDetails
let pdContent = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const targetAliasLogic = `      if (place.id === 'meenakshi-temple') {
         lowerPlaceMap['madurai meenakshi amman temple'] = url;
         lowerPlaceMap['meenakshi amman temple'] = url;
      }`;

const newAliasLogic = `      if (place.id === 'meenakshi-temple') {
         lowerPlaceMap['madurai meenakshi amman temple'] = url;
         lowerPlaceMap['meenakshi amman temple'] = url;
      }
      if (place.id === 'suchindram-temple') {
         lowerPlaceMap['thanumalayan'] = url;
         lowerPlaceMap['thanumalayan temple'] = url;
         lowerPlaceMap['suchindram'] = url;
      }
      if (place.id === 'padmanabhaswamy-temple') {
         lowerPlaceMap['anantha padmanabha temple'] = url;
      }`;

if (pdContent.includes(targetAliasLogic) && !pdContent.includes('anantha padmanabha temple')) {
  pdContent = pdContent.replace(targetAliasLogic, newAliasLogic);
  fs.writeFileSync('src/pages/PackageDetails.tsx', pdContent, 'utf8');
}

console.log('Added Kovalam, Trivandrum, and expanded Kanyakumari');
