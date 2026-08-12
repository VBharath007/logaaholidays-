const fs = require('fs');

const newData = {
  'malaysia-tourism': {
    id: 'malaysia-tourism',
    name: 'Malaysia',
    image: '/assets/malaysia_hero.png',
    state: 'International',
    overview: {
      title: 'Malaysia Tourism',
      description: 'Experience the stunning mix of Malay, Chinese, Indian, and European cultural influences in Malaysia. From the towering skyscrapers of Kuala Lumpur to pristine beaches and lush rainforests, Malaysia offers an unforgettable adventure.'
    },
    history: {
      title: 'Malaysia History',
      description: 'Malaysia boasts a rich history shaped by global trade and colonization, evident in places like Malacca. It became an independent nation in 1957, rapidly developing into a modern economic powerhouse while preserving its diverse heritage.'
    },
    info: {
      idealDuration: '4 Nights / 5 Days',
      nearestCity: 'Kuala Lumpur',
      bestTime: 'December to April',
      peakSeason: 'December to January',
      weather: 'Tropical',
      internet: 'Excellent',
      stdCode: '+60',
      languages: 'Malay, English',
      festivals: 'Hari Raya, Chinese New Year, Deepavali',
      tips: 'We provide expert local guides and assure your complete safety and comfort throughout the entire journey.'
    },
    majorAttractions: [
      {
        title: 'Petronas Twin Towers',
        description: 'Iconic twin skyscrapers in Kuala Lumpur offering breathtaking city views from the sky bridge.'
      },
      {
        title: 'Batu Caves',
        description: 'A magnificent limestone hill featuring a series of caves and cave temples, famous for its massive golden Murugan statue.'
      }
    ],
    placesToVisit: [],
    popularPackages: []
  },
  'singapore-tourism': {
    id: 'singapore-tourism',
    name: 'Singapore',
    image: '/assets/singapore_hero.png',
    state: 'International',
    overview: {
      title: 'Singapore Tourism',
      description: 'Discover the Lion City, where futuristic architecture meets lush green spaces. Singapore is a global hub renowned for its incredible street food, luxury shopping, and world-class attractions like Gardens by the Bay.'
    },
    history: {
      title: 'Singapore History',
      description: 'Founded as a British trading colony in 1819, Singapore has transformed into one of the world\'s most prosperous nations since its independence in 1965, known for its clean streets and dynamic economy.'
    },
    info: {
      idealDuration: '3 Nights / 4 Days',
      nearestCity: 'Singapore',
      bestTime: 'Year-round',
      peakSeason: 'December to June',
      weather: 'Tropical',
      internet: 'Excellent',
      stdCode: '+65',
      languages: 'English, Mandarin, Malay, Tamil',
      festivals: 'Chinese New Year, Deepavali',
      tips: 'We provide expert local guides and assure your complete safety and comfort throughout the entire journey.'
    },
    majorAttractions: [
      {
        title: 'Gardens by the Bay',
        description: 'A spectacular nature park featuring massive Supertrees and stunning climate-controlled conservatories.'
      },
      {
        title: 'Marina Bay Sands',
        description: 'An iconic integrated resort famous for its boat-shaped rooftop sky park and infinity pool.'
      }
    ],
    placesToVisit: [],
    popularPackages: []
  },
  'bali-tourism': {
    id: 'bali-tourism',
    name: 'Bali',
    image: '/assets/bali_hero.png',
    state: 'International',
    overview: {
      title: 'Bali Tourism',
      description: 'Escape to the Island of the Gods. Bali enchants visitors with its forested volcanic mountains, iconic rice paddies, stunning beaches, and deeply spiritual Hindu culture.'
    },
    history: {
      title: 'Bali History',
      description: 'Bali\'s unique culture is a blend of Hindu-Javanese influences that have flourished since the 15th century. It remains a deeply spiritual island, famous for its thousands of intricate temples.'
    },
    info: {
      idealDuration: '5 Nights / 6 Days',
      nearestCity: 'Denpasar',
      bestTime: 'April to October',
      peakSeason: 'July to August',
      weather: 'Tropical',
      internet: 'Good',
      stdCode: '+62',
      languages: 'Indonesian, Balinese, English',
      festivals: 'Nyepi, Galungan',
      tips: 'We provide expert local guides and assure your complete safety and comfort throughout the entire journey.'
    },
    majorAttractions: [
      {
        title: 'Tanah Lot Temple',
        description: 'A beautiful and highly photographed Hindu temple perched on a rocky outcrop amidst crashing waves.'
      },
      {
        title: 'Ubud Monkey Forest',
        description: 'A sacred nature reserve and temple complex teeming with playful long-tailed macaques.'
      }
    ],
    placesToVisit: [],
    popularPackages: []
  },
  'thailand-tourism': {
    id: 'thailand-tourism',
    name: 'Thailand',
    image: '/assets/thailand_hero.png',
    state: 'International',
    overview: {
      title: 'Thailand Tourism',
      description: 'Thailand, the Land of Smiles, is celebrated for its opulent royal palaces, ancient ruins, ornate temples displaying figures of Buddha, and tropical beaches.'
    },
    history: {
      title: 'Thailand History',
      description: 'Formerly known as Siam, Thailand is the only Southeast Asian nation never to have been colonized by a European power. It has a rich royal heritage and deeply rooted Buddhist traditions.'
    },
    info: {
      idealDuration: '5 Nights / 6 Days',
      nearestCity: 'Bangkok',
      bestTime: 'November to early April',
      peakSeason: 'December to January',
      weather: 'Tropical',
      internet: 'Excellent',
      stdCode: '+66',
      languages: 'Thai, English',
      festivals: 'Songkran, Loy Krathong',
      tips: 'We provide expert local guides and assure your complete safety and comfort throughout the entire journey.'
    },
    majorAttractions: [
      {
        title: 'The Grand Palace',
        description: 'A dazzling, spectacular palace in Bangkok that has been the official residence of the Kings of Siam.'
      },
      {
        title: 'Phi Phi Islands',
        description: 'Stunning island group featuring classic tropical beaches, stunning rock formations, and vivid turquoise waters.'
      }
    ],
    placesToVisit: [],
    popularPackages: []
  },
  'maldives-tourism': {
    id: 'maldives-tourism',
    name: 'Maldives',
    image: '/assets/maldives_hero.png',
    state: 'Honeymoon',
    overview: {
      title: 'Maldives Tourism',
      description: 'The ultimate honeymoon paradise. The Maldives is famous for its crystalline waters, incredibly luxurious overwater bungalows, vibrant coral reefs, and pristine white-sand beaches.'
    },
    history: {
      title: 'Maldives History',
      description: 'An ancient island nation with a rich maritime history, the Maldives has been a crossroads of trade in the Indian Ocean for centuries, characterized by its enduring Islamic heritage.'
    },
    info: {
      idealDuration: '4 Nights / 5 Days',
      nearestCity: 'Malé',
      bestTime: 'November to April',
      peakSeason: 'December to March',
      weather: 'Tropical',
      internet: 'Good',
      stdCode: '+960',
      languages: 'Dhivehi, English',
      festivals: 'Eid al-Fitr, Independence Day',
      tips: 'We provide expert local guides and assure your complete safety and comfort throughout the entire journey.'
    },
    majorAttractions: [
      {
        title: 'Maafushi Island',
        description: 'A popular local island offering a glimpse into authentic Maldivian life alongside beautiful beaches and water sports.'
      },
      {
        title: 'Baa Atoll Biosphere Reserve',
        description: 'A UNESCO World Heritage site known for its incredible marine biodiversity, including manta rays and whale sharks.'
      }
    ],
    placesToVisit: [],
    popularPackages: []
  }
};

let content = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

let pString = '';
for (let k in newData) {
    pString += ',\n  \'' + k + '\': ' + JSON.stringify(newData[k], null, 2);
}

// Ensure clean format
const marker = "'karnataka-tourism': {";
const idx = content.lastIndexOf(marker);
if (idx !== -1) {
    const endIdx = content.indexOf('};', idx);
    const before = content.slice(0, endIdx - 4);
    const after = content.slice(endIdx);
    
    fs.writeFileSync('src/data/destinationsData.ts', before + pString + '\n' + after, 'utf8');
    console.log("Successfully added international and honeymoon destinations!");
} else {
    console.log("Could not find the insertion point.");
}
