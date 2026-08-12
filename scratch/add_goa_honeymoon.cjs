const fs = require('fs');
const path = require('path');

const packageDetailsPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

const jsonString = `  "9101": {
    "id": "9101",
    "title": "Goa Honeymoon Package – 2 Nights / 3 Days",
    "slug": "goa-honeymoon-package-2-nights-3-days",
    "image": "/assets/goa_hero.jpg",
    "heroImage": "/assets/goa_hero.jpg",
    "overview": {
        "title": "Tour Overview",
        "description": "Enjoy a short romantic break with this 2 Nights / 3 Days Goa Honeymoon Package.\\n\\nThe package combines a comfortable hotel or resort stay, famous North Goa beaches, heritage attractions and private leisure time. Romantic additions such as flower decoration, honeymoon cake and candlelight dinner can be arranged based on the selected hotel.",
        "duration": "2 Nights / 3 Days",
        "destination": "Goa",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Beach Holidays"
    },
    "seo": {
        "title": "Goa Honeymoon Package 2 Nights 3 Days | Couple Tour",
        "description": "Book a romantic Goa honeymoon package for 2 Nights and 3 Days with resort stay, North Goa sightseeing, transfers and optional candlelight dinner.",
        "keywords": "Goa honeymoon package 2 nights 3 days, Goa couple package 3 days, Budget Goa honeymoon package, Short Goa honeymoon trip, Goa honeymoon package from Madurai, Goa couple tour from Chennai, Goa resort package for couples"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Goa Arrival and Romantic Leisure",
            "description": "Upon arrival at Goa Airport or railway station, meet our representative and proceed to the selected hotel or resort.\\nComplete the check-in formalities and relax.\\nDepending on the arrival time, visit a nearby beach or spend the evening enjoying the resort facilities.\\n\\nOptional Romantic Arrangements\\n• Welcome drink\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Fruit basket\\n• Candlelight dinner\\n\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "North Goa Sightseeing",
            "description": "After breakfast, proceed for North Goa sightseeing.\\n\\nPlaces to Visit\\n• Fort Aguada\\n• Sinquerim Beach\\n• Candolim Beach\\n• Calangute Beach\\n• Baga Beach\\n• Anjuna Beach\\n• Vagator Beach\\n• Chapora Fort\\n\\nSightseeing coverage depends on traffic, operating hours and time available.\\n\\nOptional Activities\\n• Parasailing\\n• Jet skiing\\n• Banana boat ride\\n• Bumper ride\\n• Speedboat ride\\n• Couple photoshoot\\n• Beachside dinner\\n\\nReturn to the hotel.\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "Goa Departure",
            "description": "After breakfast, check out from the hotel.\\nTransfer to Goa Airport or railway station for your return journey.\\nThe honeymoon concludes with beautiful memories of Goa.",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights’ accommodation in Goa\\n• Daily breakfast\\n• Goa Airport or railway station transfers\\n• North Goa sightseeing\\n• Fort Aguada and popular beaches\\n• Private leisure time for couples\\n• Optional flower-bed decoration\\n• Optional honeymoon cake\\n• Optional candlelight dinner\\n• Optional water sports",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ accommodation",
        "Daily breakfast",
        "Airport or railway station pickup and drop",
        "North Goa sightseeing",
        "Private or shared air-conditioned vehicle as confirmed",
        "Fuel, parking and driver allowance",
        "Honeymoon inclusions specifically mentioned in the quotation",
        "Assistance from Logaa Holidays"
    ],
    "exclusions": [
        "Flight and train tickets",
        "Lunch and dinner unless included",
        "Entry tickets",
        "Water sports",
        "Personal expenses",
        "Travel insurance",
        "Guide charges",
        "Extra vehicle usage",
        "Early check-in and late check-out",
        "Anything not mentioned under inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },
  "9102": {
    "id": "9102",
    "title": "Goa Honeymoon Package – 3 Nights / 4 Days",
    "slug": "goa-honeymoon-package-3-nights-4-days",
    "image": "/assets/goa_hero.jpg",
    "heroImage": "/assets/goa_hero.jpg",
    "overview": {
        "title": "Tour Overview",
        "description": "Experience the best of North and South Goa with this popular 3 Nights / 4 Days Goa Honeymoon Package.\\n\\nThe itinerary includes beaches, forts, churches, temples, scenic viewpoints and leisure time. Couples can customise the package with a private cab, premium resort, candlelight dinner, room decoration, honeymoon cake and sunset cruise.",
        "duration": "3 Nights / 4 Days",
        "destination": "Goa",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Beach Holidays, Heritage"
    },
    "seo": {
        "title": "Goa Honeymoon Package 3 Nights 4 Days | North & South Goa",
        "description": "Book a 3 Nights 4 Days Goa honeymoon package covering North Goa, South Goa, beaches and heritage attractions with resort stay and transfers.",
        "keywords": "Goa honeymoon package 3 nights 4 days, Goa couple package 4 days, North and South Goa honeymoon package, Goa honeymoon tour from Madurai, Goa honeymoon package from Chennai, Goa romantic holiday package, Goa resort package for couples, Goa honeymoon package with private cab"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Goa Arrival and Leisure",
            "description": "Upon arrival at Goa Airport or railway station, meet our representative and proceed to the hotel.\\nComplete check-in and relax.\\nThe evening is free to visit a nearby beach, explore a local market or enjoy the resort.\\n\\nOptional Honeymoon Arrangements\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Welcome drink\\n• Fruit basket\\n• Candlelight dinner\\n\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "North Goa Sightseeing",
            "description": "After breakfast, proceed for North Goa sightseeing.\\n\\nPlaces to Visit\\n• Fort Aguada\\n• Sinquerim Beach\\n• Candolim Beach\\n• Calangute Beach\\n• Baga Beach\\n• Anjuna Beach\\n• Vagator Beach\\n• Chapora Fort\\n\\nCouples can enjoy beach walks, leisure time and photography.\\nOptional water sports are available at an additional cost and are subject to sea conditions.\\n\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "South Goa Sightseeing and Optional Cruise",
            "description": "After breakfast, proceed for South Goa sightseeing.\\n\\nPlaces to Visit\\n• Basilica of Bom Jesus\\n• Se Cathedral\\n• Shri Mangueshi Temple\\n• Shri Shantadurga Temple\\n• Dona Paula Viewpoint\\n• Miramar Beach\\n• Panjim city\\n\\nIn the evening, couples may choose an optional Mandovi River Cruise.\\nReturn to the hotel.\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Goa Departure",
            "description": "After breakfast, check out.\\nTransfer to Goa Airport or railway station for departure.",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Three nights’ hotel or resort stay\\n• Daily breakfast\\n• North Goa sightseeing\\n• South Goa sightseeing\\n• Famous Goa beaches\\n• Heritage churches and temples\\n• Dona Paula and Miramar Beach\\n• Optional Mandovi River Cruise\\n• Optional honeymoon decoration\\n• Optional candlelight dinner\\n• Optional couple photoshoot",
            "activities": []
        }
    ],
    "inclusions": [
        "Three nights’ accommodation",
        "Daily breakfast",
        "Airport or railway station pickup and drop",
        "North Goa sightseeing",
        "South Goa sightseeing",
        "Private or shared air-conditioned transportation as confirmed",
        "Fuel charges",
        "Driver allowance",
        "Toll and parking charges",
        "Confirmed honeymoon arrangements",
        "Assistance from Logaa Holidays"
    ],
    "exclusions": [
        "Flight and train tickets",
        "Lunch and dinner unless included",
        "Entry fees",
        "Mandovi cruise tickets",
        "Water-sport charges",
        "Casino charges",
        "Guide charges",
        "Personal expenses",
        "Travel insurance",
        "Additional sightseeing",
        "Extra vehicle usage",
        "Anything not mentioned under inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },`;

let fileContent = fs.readFileSync(packageDetailsPath, 'utf8');

const splitMarker = '  "6005": {';
const index = fileContent.lastIndexOf(splitMarker);
if (index !== -1) {
    const newContent = fileContent.slice(0, index) + jsonString + '\\n' + fileContent.slice(index);
    fs.writeFileSync(packageDetailsPath, newContent);
    console.log('Successfully added Goa Honeymoon packages to packagesDatabase');
} else {
    console.error('Could not find split marker.');
}
