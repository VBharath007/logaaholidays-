const fs = require('fs');

const commonInclusions = [
    'Hotel or resort accommodation',
    'Daily breakfast',
    'Private air-conditioned vehicle',
    'Pickup and drop as mentioned',
    'Fuel charges',
    'Driver allowance',
    'Toll charges',
    'Parking charges',
    'State permit charges',
    'Sightseeing as per itinerary',
    'Assistance from Logaa Holidays'
];

const commonExclusions = [
    'Flight, train and bus tickets',
    'Lunch and dinner unless included',
    'Monument and attraction entrance tickets',
    'Jungle safari and forest charges',
    'Boating charges',
    'Adventure activity charges',
    'Local guide charges',
    'Personal expenses',
    'Camera and video charges',
    'Travel insurance',
    'Early check-in and late check-out',
    'Additional sightseeing',
    'Anything not specifically mentioned under inclusions'
];

const seoTitle = 'Karnataka Tour Packages from Tamil Nadu | Logaa Holidays';
const seoDesc = 'Book Karnataka tour packages from Madurai, Chennai, Trichy, Coimbatore and Salem covering Mysore, Coorg, Chikmagalur, Hampi, Udupi, Murudeshwar and Gokarna.';
const keywords = 'Karnataka tour packages from Tamil Nadu, Karnataka package from Madurai, Mysore Coorg tour from Chennai, Karnataka package from Trichy, Coorg package from Coimbatore, Mysore Coorg Kabini package, Chikmagalur family package, Hampi Badami heritage tour, Udupi Murudeshwar Gokarna package, Karnataka honeymoon package, Logaa Holidays Karnataka tour';

const packages = {
    '5002': {
        id: '5002',
        title: 'Mysore and Coorg Tour Package',
        metaTitle: seoTitle,
        metaDescription: seoDesc,
        image: "/assets/karnataka1.webp",
        heroImage: "/assets/karnataka1.webp",
        overview: {
            duration: '3 Nights / 4 Days',
            destination: 'Mysore, Bylakuppe, Coorg, Madikeri',
            activities: 'Families, Couples, Honeymoon Travellers and Senior Citizens',
            themes: 'Hill Stations & Valleys, Culture & Heritage'
        },
        priceDetails: { label: 'Starts @', amount: 'On Request', status: 'On Request' },
        itinerary: [
            {
                day: 'Day 1',
                title: 'Mysore Arrival and Sightseeing',
                description: 'Pickup from Mysore Railway Station, Bus Stand or hotel.\nProceed to the hotel and complete check-in.\nLater, visit:',
                activities: [
                    'Mysore Palace',
                    'Chamundi Hills',
                    'St. Philomena’s Cathedral',
                    'Mysore Zoo, optional',
                    'Brindavan Gardens',
                    'Krishna Raja Sagar Dam',
                    '',
                    'Return to the hotel.',
                    'Overnight stay in Mysore.'
                ]
            },
            {
                day: 'Day 2',
                title: 'Mysore – Bylakuppe – Coorg',
                description: 'After breakfast, check out and proceed towards Coorg.\nEn route, visit:',
                activities: [
                    'Namdroling Tibetan Monastery',
                    'Golden Temple, Bylakuppe',
                    'Kaveri Nisargadhama',
                    'Dubare Elephant Camp',
                    'Harangi Dam, subject to available time',
                    '',
                    'Continue to Coorg and check in at the hotel or resort.',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 3',
                title: 'Coorg and Madikeri Sightseeing',
                description: 'After breakfast, proceed for full-day sightseeing.\nVisit:',
                activities: [
                    'Talakaveri',
                    'Bhagamandala',
                    'Abbey Falls',
                    'Madikeri Fort',
                    'Omkareshwara Temple',
                    'Raja’s Seat',
                    'Madikeri local market',
                    '',
                    'Optional coffee plantation visit may be arranged at an additional cost.',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 4',
                title: 'Coorg to Mysore or Bangalore Departure',
                description: 'After breakfast, check out from the hotel.\nProceed to Mysore or Bangalore according to the selected package.',
                activities: [
                    'Drop at Railway Station, Airport, Bus Stand or preferred location.'
                ]
            }
        ],
        inclusions: commonInclusions,
        exclusions: commonExclusions,
        policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' },
        keywords: keywords
    },
    '5003': {
        id: '5003',
        title: 'Bangalore, Mysore and Coorg Tour',
        metaTitle: seoTitle,
        metaDescription: seoDesc,
        image: "/assets/karnataka1.webp",
        heroImage: "/assets/karnataka1.webp",
        overview: {
            duration: '4 Nights / 5 Days',
            destination: 'Bangalore, Mysore, Coorg',
            activities: 'Chennai Customers, Families, Couples and Flight Travellers',
            themes: 'Hill Stations & Valleys, Culture & Heritage'
        },
        priceDetails: { label: 'Starts @', amount: 'On Request', status: 'On Request' },
        itinerary: [
            {
                day: 'Day 1',
                title: 'Bangalore Arrival and Sightseeing',
                description: 'Pickup from Bangalore Airport, Railway Station or Bus Stand.\nVisit:',
                activities: [
                    'Lalbagh Botanical Garden',
                    'Cubbon Park',
                    'Vidhana Soudha outside view',
                    'ISKCON Temple',
                    'Bangalore Palace, optional',
                    'Commercial Street, subject to time',
                    '',
                    'Check in at the hotel.',
                    'Overnight stay in Bangalore.'
                ]
            },
            {
                day: 'Day 2',
                title: 'Bangalore – Srirangapatna – Mysore',
                description: 'After breakfast, check out and proceed towards Mysore.\nEn route, visit:',
                activities: [
                    'Srirangapatna Ranganathaswamy Temple',
                    'Tipu Sultan’s Summer Palace',
                    'Gumbaz, subject to time',
                    '',
                    'Continue to Mysore.',
                    'Visit:',
                    'Mysore Palace',
                    'Chamundi Hills',
                    'St. Philomena’s Cathedral',
                    'Brindavan Gardens',
                    '',
                    'Overnight stay in Mysore.'
                ]
            },
            {
                day: 'Day 3',
                title: 'Mysore – Bylakuppe – Coorg',
                description: 'After breakfast, check out and proceed to Coorg.\nVisit:',
                activities: [
                    'Golden Temple',
                    'Namdroling Monastery',
                    'Nisargadhama',
                    'Dubare Elephant Camp',
                    'Harangi Dam, optional',
                    '',
                    'Check in at the hotel.',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 4',
                title: 'Coorg Full-Day Sightseeing',
                description: 'Visit:',
                activities: [
                    'Talakaveri',
                    'Bhagamandala',
                    'Abbey Falls',
                    'Madikeri Fort',
                    'Omkareshwara Temple',
                    'Raja’s Seat',
                    'Coffee plantation, optional',
                    '',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 5',
                title: 'Coorg to Bangalore Departure',
                description: 'After breakfast, check out and proceed to Bangalore.',
                activities: [
                    'Drop at Airport, Railway Station, Bus Stand or city location.'
                ]
            }
        ],
        inclusions: commonInclusions,
        exclusions: commonExclusions,
        policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' },
        keywords: keywords
    },
    '5004': {
        id: '5004',
        title: 'Mysore, Coorg and Kabini Tour',
        metaTitle: seoTitle,
        metaDescription: seoDesc,
        image: "/assets/karnataka1.webp",
        heroImage: "/assets/karnataka1.webp",
        overview: {
            duration: '4 Nights / 5 Days',
            destination: 'Mysore, Coorg, Kabini, Nagarhole, Bangalore',
            activities: 'Families, Premium Travellers and Wildlife Lovers',
            themes: 'Wildlife & Nature, Culture & Heritage'
        },
        priceDetails: { label: 'Starts @', amount: 'On Request', status: 'On Request' },
        itinerary: [
            {
                day: 'Day 1',
                title: 'Mysore Arrival and Sightseeing',
                description: 'Pickup from Mysore.\nVisit:',
                activities: [
                    'Mysore Palace',
                    'Chamundi Hills',
                    'St. Philomena’s Cathedral',
                    'Brindavan Gardens',
                    'KRS Dam',
                    '',
                    'Overnight stay in Mysore.'
                ]
            },
            {
                day: 'Day 2',
                title: 'Mysore – Bylakuppe – Coorg',
                description: 'Visit:',
                activities: [
                    'Golden Temple',
                    'Nisargadhama',
                    'Dubare',
                    'Harangi Dam, optional',
                    '',
                    'Continue to Coorg.',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 3',
                title: 'Coorg Full-Day Sightseeing',
                description: 'Visit:',
                activities: [
                    'Talakaveri',
                    'Bhagamandala',
                    'Abbey Falls',
                    'Madikeri Fort',
                    'Raja’s Seat',
                    'Omkareshwara Temple',
                    '',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 4',
                title: 'Coorg to Kabini or Nagarhole',
                description: 'After breakfast, check out and proceed towards Kabini or Nagarhole.\nCheck in at the resort.\nOptional activities:',
                activities: [
                    'Jungle safari',
                    'Kabini boat safari',
                    'Nature walk',
                    'Bird watching',
                    '',
                    'Wildlife sightings depend on luck and cannot be guaranteed.',
                    'Overnight stay near Kabini or Nagarhole.'
                ]
            },
            {
                day: 'Day 5',
                title: 'Kabini or Nagarhole to Bangalore',
                description: 'Optional early-morning safari, subject to availability.\nAfter breakfast, check out and proceed to Bangalore.',
                activities: [
                    'Drop at Airport, Railway Station or preferred location.'
                ]
            }
        ],
        inclusions: commonInclusions,
        exclusions: commonExclusions,
        policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' },
        keywords: keywords
    },
    '5005': {
        id: '5005',
        title: 'Coorg and Chikmagalur Tour',
        metaTitle: seoTitle,
        metaDescription: seoDesc,
        image: "/assets/karnataka1.webp",
        heroImage: "/assets/karnataka1.webp",
        overview: {
            duration: '4 Nights / 5 Days',
            destination: 'Coorg, Hassan, Belur, Halebidu, Chikmagalur',
            activities: 'Couples, Honeymoon Travellers, Families and Nature Lovers',
            themes: 'Hill Stations & Valleys, Culture & Heritage'
        },
        priceDetails: { label: 'Starts @', amount: 'On Request', status: 'On Request' },
        itinerary: [
            {
                day: 'Day 1',
                title: 'Mysore Arrival – Coorg',
                description: 'Pickup from Mysore and proceed towards Coorg.\nEn route, visit:',
                activities: [
                    'Golden Temple',
                    'Nisargadhama',
                    'Dubare Elephant Camp',
                    '',
                    'Continue to Coorg and check in.',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 2',
                title: 'Coorg Sightseeing',
                description: 'Visit:',
                activities: [
                    'Talakaveri',
                    'Bhagamandala',
                    'Abbey Falls',
                    'Madikeri Fort',
                    'Omkareshwara Temple',
                    'Raja’s Seat',
                    'Coffee plantation, optional',
                    '',
                    'Overnight stay in Coorg.'
                ]
            },
            {
                day: 'Day 3',
                title: 'Coorg – Belur – Halebidu – Chikmagalur',
                description: 'After breakfast, check out and proceed towards Chikmagalur.\nEn route, visit:',
                activities: [
                    'Belur Chennakeshava Temple',
                    'Halebidu Hoysaleswara Temple',
                    'Yagachi Dam, subject to time',
                    '',
                    'Continue to Chikmagalur.',
                    'Overnight stay in Chikmagalur.'
                ]
            },
            {
                day: 'Day 4',
                title: 'Chikmagalur Sightseeing',
                description: 'Visit:',
                activities: [
                    'Mullayanagiri Peak',
                    'Seethalayyanagiri',
                    'Baba Budangiri',
                    'Jhari Falls',
                    'Hirekolale Lake',
                    'Coffee plantation',
                    'Chikmagalur local market',
                    '',
                    'Overnight stay in Chikmagalur.'
                ]
            },
            {
                day: 'Day 5',
                title: 'Chikmagalur to Bangalore or Mysore Departure',
                description: 'After breakfast, check out.\nProceed to Bangalore or Mysore according to the selected package.',
                activities: [
                    'Drop at Airport, Railway Station or Bus Stand.'
                ]
            }
        ],
        inclusions: commonInclusions,
        exclusions: commonExclusions,
        policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' },
        keywords: keywords
    },
    '5006': {
        id: '5006',
        title: 'Hampi and Badami Heritage Tour',
        metaTitle: seoTitle,
        metaDescription: seoDesc,
        image: "/assets/karnataka1.webp",
        heroImage: "/assets/karnataka1.webp",
        overview: {
            duration: '4 Nights / 5 Days',
            destination: 'Hospet, Hampi, Aihole, Pattadakal, Badami',
            activities: 'History Lovers, Families, Student Groups and Photography Travellers',
            themes: 'Culture & Heritage'
        },
        priceDetails: { label: 'Starts @', amount: 'On Request', status: 'On Request' },
        itinerary: [
            {
                day: 'Day 1',
                title: 'Hospet Arrival',
                description: 'Pickup from Hospet Railway Station or Bus Stand.\nCheck in at the hotel.\nDepending on arrival time, visit:',
                activities: [
                    'Tungabhadra Dam',
                    'Hospet local market',
                    'Sunset viewpoint',
                    '',
                    'Overnight stay in Hospet.'
                ]
            },
            {
                day: 'Day 2',
                title: 'Hampi Full-Day Sightseeing',
                description: 'Visit:',
                activities: [
                    'Virupaksha Temple',
                    'Hampi Bazaar',
                    'Hemakuta Hill',
                    'Vittala Temple',
                    'Stone Chariot',
                    'Lotus Mahal',
                    'Elephant Stables',
                    'Queen’s Bath',
                    'Royal Enclosure',
                    'Hazara Rama Temple',
                    '',
                    'Local guide is recommended.',
                    'Overnight stay in Hospet or Hampi.'
                ]
            },
            {
                day: 'Day 3',
                title: 'Hospet – Aihole – Pattadakal – Badami',
                description: 'After breakfast, check out and proceed to Badami.\nEn route, visit:',
                activities: [
                    'Aihole Temple Complex',
                    'Durga Temple',
                    'Lad Khan Temple',
                    'Pattadakal Group of Monuments',
                    'Virupaksha Temple',
                    'Mallikarjuna Temple',
                    '',
                    'Continue to Badami.',
                    'Overnight stay in Badami.'
                ]
            },
            {
                day: 'Day 4',
                title: 'Badami Sightseeing',
                description: 'Visit:',
                activities: [
                    'Badami Cave Temples',
                    'Agastya Lake',
                    'Bhutanatha Temple',
                    'Badami Fort',
                    'Archaeological Museum, subject to opening hours',
                    '',
                    'Overnight stay in Badami.'
                ]
            },
            {
                day: 'Day 5',
                title: 'Badami Departure',
                description: 'After breakfast, check out.',
                activities: [
                    'Drop at Hubballi, Hospet, Badami Railway Station or preferred location according to the selected plan.'
                ]
            }
        ],
        inclusions: commonInclusions,
        exclusions: commonExclusions,
        policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' },
        keywords: keywords
    },
    '5007': {
        id: '5007',
        title: 'Udupi, Murudeshwar and Gokarna Tour',
        metaTitle: seoTitle,
        metaDescription: seoDesc,
        image: "/assets/karnataka1.webp",
        heroImage: "/assets/karnataka1.webp",
        overview: {
            duration: '4 Nights / 5 Days',
            destination: 'Mangalore, Udupi, Murudeshwar, Gokarna',
            activities: 'Families, Pilgrimage Groups, Senior Citizens and Beach Travellers',
            themes: 'Beaches & Coastal, Religious & Pilgrimage'
        },
        priceDetails: { label: 'Starts @', amount: 'On Request', status: 'On Request' },
        itinerary: [
            {
                day: 'Day 1',
                title: 'Mangalore Arrival – Udupi',
                description: 'Pickup from Mangalore Airport, Railway Station or Bus Stand.\nVisit:',
                activities: [
                    'Mangaladevi Temple',
                    'Kadri Manjunatha Temple',
                    'Panambur Beach, subject to time',
                    '',
                    'Proceed to Udupi.\nVisit:',
                    'Udupi Sri Krishna Temple',
                    'Malpe Beach',
                    '',
                    'Overnight stay in Udupi.'
                ]
            },
            {
                day: 'Day 2',
                title: 'Udupi – Kollur – Murudeshwar',
                description: 'After breakfast, check out and proceed towards Murudeshwar.\nEn route, visit:',
                activities: [
                    'Kollur Mookambika Temple',
                    'Maravanthe Beach viewpoint',
                    'Murudeshwar Temple',
                    'Shiva Statue',
                    'Murudeshwar Beach',
                    '',
                    'Overnight stay in Murudeshwar.'
                ]
            },
            {
                day: 'Day 3',
                title: 'Murudeshwar – Honnavar – Gokarna',
                description: 'After breakfast, proceed towards Gokarna.\nVisit:',
                activities: [
                    'Honnavar Backwaters',
                    'Eco Beach, subject to time',
                    'Mirjan Fort',
                    'Gokarna Mahabaleshwar Temple',
                    'Gokarna Main Beach',
                    '',
                    'Overnight stay in Gokarna.'
                ]
            },
            {
                day: 'Day 4',
                title: 'Gokarna Beach Sightseeing',
                description: 'Visit:',
                activities: [
                    'Om Beach',
                    'Kudle Beach',
                    'Half Moon Beach, subject to access',
                    'Paradise Beach, subject to access',
                    'Yana Caves, optional',
                    'Sunset viewpoint',
                    '',
                    'Overnight stay in Gokarna.'
                ]
            },
            {
                day: 'Day 5',
                title: 'Gokarna to Mangalore Departure',
                description: 'After breakfast, check out and proceed to Mangalore.',
                activities: [
                    'Drop at Airport, Railway Station or Bus Stand.'
                ]
            }
        ],
        inclusions: commonInclusions,
        exclusions: commonExclusions,
        policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' },
        keywords: keywords
    }
};

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

let pString = '';
for (let k in packages) {
    pString += ',\n    \'' + k + '\': ' + JSON.stringify(packages[k], null, 8).replace(/\"/g, '\'').replace(/'([^']+)'\s*:/g, (m, p1) => {
        return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(p1) ? p1 + ':' : m;
    });
}
pString = pString.replace(/\n        /g, '\n        ');

const contentStr = content.toString();
const idx = contentStr.lastIndexOf("Logaa Holidays Karnataka");
if (idx !== -1) {
    const endIdx = contentStr.indexOf("};", idx);
    const before = contentStr.slice(0, endIdx - 6);
    const after = contentStr.slice(endIdx + 2);
    const finalContent = before + "\n    }" + pString + "\n};" + after;
    fs.writeFileSync('src/pages/PackageDetails.tsx', finalContent, 'utf8');
    console.log("Fixed!");
} else {
    console.log("Marker not found!");
}
