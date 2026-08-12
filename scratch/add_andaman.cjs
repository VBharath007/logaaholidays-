const fs = require('fs');

const andamanData = {
  'andaman-tourism': {
    id: 'andaman-tourism',
    name: 'Andaman & Nicobar Islands',
    image: '/assets/andaman_hero.png',
    state: 'South India',
    overview: {
      title: 'Andaman Tourism',
      description: 'The Andaman and Nicobar Islands are a breathtaking archipelago in the Bay of Bengal, famous for their stunning white-sand beaches, crystal clear blue waters, and incredible marine life. From thrilling water sports to serene island hopping, it offers the perfect tropical getaway.'
    },
    history: {
      title: 'Andaman History',
      description: 'Historically significant for the Cellular Jail in Port Blair where Indian freedom fighters were exiled, the islands have a deep colonial past. Today, they are a peaceful union territory celebrating diverse indigenous cultures and natural beauty.'
    },
    info: {
      idealDuration: '5 Nights / 6 Days',
      nearestCity: 'Port Blair',
      bestTime: 'October to May',
      peakSeason: 'December to January',
      weather: 'Tropical',
      internet: 'Moderate',
      stdCode: '+91 3192',
      languages: 'Hindi, English, Bengali, Tamil',
      festivals: 'Island Tourism Festival',
      tips: 'We provide expert local guides and assure your complete safety and comfort throughout the entire journey.'
    },
    majorAttractions: [
      {
        title: 'Radhanagar Beach',
        description: 'Voted one of the best beaches in Asia, known for its soft white sands, turquoise waters, and spectacular sunsets.'
      },
      {
        title: 'Cellular Jail',
        description: 'A historic colonial prison in Port Blair that stands as a stark reminder of the Indian independence struggle.'
      }
    ],
    placesToVisit: [],
    popularPackages: []
  }
};

let content = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const target1 = '"popularPackages": []\n}\n};';
const target2 = '"popularPackages": []\r\n}\r\n};';
const replacement = '"popularPackages": []\n},\n  \'andaman-tourism\': ' + JSON.stringify(andamanData['andaman-tourism'], null, 2) + '\n};';

if (content.includes(target1)) {
    content = content.replace(target1, replacement);
    fs.writeFileSync('src/data/destinationsData.ts', content, 'utf8');
    console.log("Successfully added Andaman (LF)");
} else if (content.includes(target2)) {
    content = content.replace(target2, replacement);
    fs.writeFileSync('src/data/destinationsData.ts', content, 'utf8');
    console.log("Successfully added Andaman (CRLF)");
} else {
    console.log("Could not find the insertion point.");
}
