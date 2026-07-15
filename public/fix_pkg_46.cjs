const fs = require('fs');
let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const id46Pattern = /'46':\s*\{\s*id:\s*'46'[\s\S]*?itinerary:\s*\[[\s\S]*?\]\s*\}/;

const newPackage46 = `'46': {
   id: '46',
   title: '9 Days Trip from Madurai | Madurai, Trichy, Thanjavur, Kumbakonam, Rameshwaram, Kanyakumari, Kovalam & Trivandrum',
   image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1600',
   overview: { 
     duration: '8 Nights / 9 Days', 
     destination: 'Madurai, Trichy, Thanjavur, Kumbakonam, Rameshwaram, Kanyakumari, Kovalam, Trivandrum', 
     activities: 'Sightseeing, Temple Tours, Beach Relaxation', 
     themes: 'Religious & Pilgrimage, Culture & Heritage' 
   },
   priceDetails: { label: 'Starts @', amount: 'On Request', status: 'On Request' },
   itinerary: [
     {
       day: 'Day 1',
       title: 'Arrival in Madurai & Sightseeing',
       description: 'Arrival at Madurai Airport/Railway Station. Transfer to your hotel. Later, visit the world-famous Meenakshi Amman Temple, Thirumalai Nayakkar Mahal, and Thiruparankundram Murugan Temple. Overnight stay in Madurai.'
     },
     {
       day: 'Day 2',
       title: 'Madurai to Trichy to Thanjavur',
       description: 'After breakfast, drive to Trichy. Visit the Sri Ranganathaswamy Temple (Srirangam) and Rockfort Temple. Later, proceed to Thanjavur. Visit the UNESCO World Heritage Brihadeeswarar Temple. Overnight stay in Thanjavur.'
     },
     {
       day: 'Day 3',
       title: 'Thanjavur to Kumbakonam',
       description: 'After breakfast, drive to Kumbakonam, the temple city of South India. Visit the Adi Kumbeswarar Temple, Sarangapani Temple, and the famous Mahamaham Tank. Explore the ancient heritage. Overnight stay in Kumbakonam.'
     },
     {
       day: 'Day 4',
       title: 'Kumbakonam to Rameshwaram',
       description: 'After breakfast, drive to the holy island of Rameshwaram. En route, enjoy the scenic drive over the Pamban Bridge. Visit the Ramanathaswamy Temple and Agni Theertham. Overnight stay in Rameshwaram.'
     },
     {
       day: 'Day 5',
       title: 'Rameshwaram to Kanyakumari',
       description: 'Early morning visit to Dhanushkodi (optional). After breakfast, drive to Kanyakumari, the southernmost tip of mainland India. In the evening, witness the spectacular sunset over the confluence of three seas. Overnight stay in Kanyakumari.'
     },
     {
       day: 'Day 6',
       title: 'Kanyakumari Sightseeing',
       description: 'Early morning, watch the beautiful sunrise. After breakfast, visit the Vivekananda Rock Memorial, Thiruvalluvar Statue, Gandhi Memorial, and Kanyakumari Bhagavathy Amman Temple. Relax at the beach. Overnight stay in Kanyakumari.'
     },
     {
       day: 'Day 7',
       title: 'Kanyakumari to Kovalam',
       description: 'After breakfast, proceed to Kovalam. En route, visit the majestic Padmanabhapuram Palace and Suchindram Temple. Arrive in Kovalam and check into your beach resort. Enjoy a relaxing evening at the world-famous Lighthouse Beach. Overnight stay in Kovalam.'
     },
     {
       day: 'Day 8',
       title: 'Kovalam to Trivandrum & Sightseeing',
       description: 'After breakfast, take a short drive to Trivandrum. Visit the incredibly wealthy Sree Padmanabhaswamy Temple, Napier Museum, and the Trivandrum Zoo. Return to Kovalam for a relaxing evening by the sea. Overnight stay in Kovalam.'
     },
     {
       day: 'Day 9',
       title: 'Departure from Trivandrum',
       description: 'After breakfast, check out from the hotel. You will be transferred to Trivandrum Airport/Railway Station for your onward journey with beautiful memories of South India.'
     }
   ],
   inclusions: [
     'Private A/C Vehicle for the entire 9 days',
     'Pickup from Madurai and Drop at Trivandrum',
     '8 Nights Hotel Accommodation',
     'Daily Complimentary Breakfast',
     'Toll, Parking, and Driver Allowance'
   ],
   exclusions: [
     'Temple Special Darshan Tickets',
     'Monument and Museum Entry Fees',
     'Lunch and Dinner',
     'Personal Expenses and Guide Services'
   ],
   policies: {
     payment: '20% Advance at the time of booking. Balance before departure.',
     cancellation: 'Cancellations made 7+ days before: Full refund. Within 3-7 days: 50% refund. Less than 3 days: No refund.'
   }
 }`;

content = content.replace(id46Pattern, newPackage46);
fs.writeFileSync('src/pages/PackageDetails.tsx', content, 'utf8');
console.log('Fixed package 46 itinerary');
