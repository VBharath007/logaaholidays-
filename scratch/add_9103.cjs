const fs = require('fs');
const path = require('path');

const packageDetailsPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

const jsonString = `  "9103": {
    "id": "9103",
    "title": "Goa Honeymoon Package – 4 Nights / 5 Days",
    "slug": "goa-honeymoon-package-4-nights-5-days",
    "image": "/assets/goa_hero.jpg",
    "heroImage": "/assets/goa_hero.jpg",
    "overview": {
        "title": "Tour Overview",
        "description": "Celebrate your honeymoon with a relaxing 4 Nights / 5 Days Goa package featuring North Goa, South Goa and a dedicated romantic leisure day.\\n\\nThis itinerary gives couples enough time to visit the main attractions without making the holiday tiring. The package can be upgraded with a premium beach resort, private cab, candlelight dinner, flower decoration, couple photoshoot, sunset cruise or spa experience.",
        "duration": "4 Nights / 5 Days",
        "destination": "Goa",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Beach Holidays, Heritage"
    },
    "seo": {
        "title": "Goa Honeymoon Package 4 Nights 5 Days | Romantic Couple Tour",
        "description": "Book a 4 Nights 5 Days Goa honeymoon package with North Goa, South Goa, resort stay, couple leisure day and optional candlelight dinner.",
        "keywords": "Goa honeymoon package 4 nights 5 days, Goa romantic package for couples, Goa couple tour 5 days, Goa honeymoon resort package, Goa honeymoon with candlelight dinner, Goa honeymoon package from Tamil Nadu, Goa honeymoon trip from Madurai, Goa couple package from Chennai, Luxury Goa honeymoon package"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Goa Arrival and Hotel Check-In",
            "description": "Upon arrival at Goa Airport or railway station, meet our representative and proceed to the selected hotel or resort.\\nCheck in and relax.\\nThe evening is free to enjoy the beach, hotel pool or nearby attractions.\\n\\nOptional Romantic Welcome\\n• Flower decoration\\n• Honeymoon cake\\n• Welcome drink\\n• Fruit basket\\n• Romantic dinner\\n\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "North Goa Sightseeing",
            "description": "After breakfast, proceed for North Goa sightseeing.\\n\\nPlaces to Visit\\n• Fort Aguada\\n• Sinquerim Beach\\n• Candolim Beach\\n• Calangute Beach\\n• Baga Beach\\n• Anjuna Beach\\n• Vagator Beach\\n• Chapora Fort\\n\\nOptional water sports can be arranged based on weather and sea conditions.\\n\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "South Goa Sightseeing",
            "description": "After breakfast, proceed for South Goa sightseeing.\\n\\nPlaces to Visit\\n• Basilica of Bom Jesus\\n• Se Cathedral\\n• Mangueshi Temple\\n• Shantadurga Temple\\n• Dona Paula Viewpoint\\n• Miramar Beach\\n• Panjim city\\n• Local market\\n\\nAn optional Mandovi River Cruise may be included in the evening.\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Romantic Leisure Day",
            "description": "After breakfast, enjoy a relaxed day with your partner.\\nCouples may select one or more optional experiences.\\n\\nRomantic Experiences\\n• Candlelight dinner\\n• Beachside dinner\\n• Couple photoshoot\\n• Sunset cruise\\n• Yacht experience\\n• Couple spa\\n• Water sports\\n• Private sightseeing cab\\n• Shopping\\n• Casino visit\\n• Resort leisure\\n• Poolside dinner\\n\\nOvernight stay in Goa.",
            "activities": []
        },
        {
            "day": "Day 5",
            "title": "Goa Departure",
            "description": "After breakfast, check out from the hotel.\\nTransfer to Goa Airport or railway station.\\nThe honeymoon concludes with unforgettable memories of Goa.",
            "activities": []
        },
        {
            "day": "Add-Ons",
            "title": "Common Honeymoon Add-Ons",
            "description": "The following services may be added according to hotel policy and availability:\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Candlelight dinner\\n• Fruit basket\\n• Welcome drink\\n• Couple photoshoot\\n• Beachside dinner\\n• Sunset cruise\\n• Couple spa\\n• Private sightseeing vehicle\\n• Pool-view room\\n• Sea-view room\\n• Premium resort upgrade\\n• Additional night stay\\n\\nAll honeymoon arrangements must be confirmed in the final quotation.",
            "activities": []
        },
        {
            "day": "Categories",
            "title": "Hotel Categories",
            "description": "Budget Package\\n• Standard AC room\\n• Daily breakfast\\n• Shared sightseeing\\n• Airport or railway station transfer\\n\\nDeluxe Package\\n• Deluxe hotel or resort\\n• Daily breakfast\\n• Private transfers\\n• Sightseeing\\n• One basic honeymoon arrangement\\n\\nPremium Package\\n• Premium resort\\n• Upgraded room\\n• Private cab\\n• Candlelight dinner\\n• Flower decoration\\n• Honeymoon cake\\n\\nLuxury Package\\n• Luxury beach resort\\n• Sea-view or premium room\\n• Private airport transfers\\n• Customised sightseeing\\n• Romantic dinner\\n• Couple spa or photoshoot\\n• Premium honeymoon arrangements",
            "activities": []
        },
        {
            "day": "Info",
            "title": "Important Travel Information",
            "description": "• Hotel availability and prices depend on the travel date.\\n• Long weekends, Christmas, New Year and peak-season dates may have compulsory supplements.\\n• Water sports are subject to weather and sea conditions.\\n• Beach and sightseeing order may change due to traffic and operating conditions.\\n• Cruise and casino tickets are not included unless mentioned.\\n• Hotel check-in and check-out timings will apply.\\n• Early check-in and late check-out are subject to availability.\\n• Guests must carry valid government-issued photo identification.\\n• Unused services are non-refundable.\\n• Final price depends on hotel category, meal plan, transportation and honeymoon add-ons.",
            "activities": []
        },
        {
            "day": "Why Us",
            "title": "Why Book with Logaa Holidays?",
            "description": "• Goa honeymoon packages designed for Tamil Nadu couples\\n• Budget, deluxe, premium and luxury resort options\\n• Private cab arrangements\\n• Flight and train booking assistance\\n• Candlelight dinner and room decoration\\n• Couple photoshoot arrangements\\n• Transparent package inclusions\\n• Customisable itineraries\\n• Support before and during the journey",
            "activities": []
        },
        {
            "day": "Book",
            "title": "Book Your Goa Honeymoon",
            "description": "Celebrate your special journey with a customised Goa honeymoon package from Logaa Holidays.\\n\\nLogaa Holidays\\nMadurai, Tamil Nadu\\nCall / WhatsApp: +91 73973 29776",
            "activities": []
        }
    ],
    "inclusions": [
        "Four nights’ hotel or resort accommodation",
        "Daily breakfast",
        "Airport or railway station transfers",
        "North Goa sightseeing",
        "South Goa sightseeing",
        "Private or shared AC vehicle as confirmed",
        "Fuel charges",
        "Driver allowance",
        "Toll and parking charges",
        "Honeymoon arrangements mentioned in the final quotation",
        "Assistance from Logaa Holidays"
    ],
    "exclusions": [
        "Airfare and train fare",
        "Lunch and dinner unless included",
        "Entry tickets",
        "Water sports",
        "Cruise and casino charges",
        "Guide charges",
        "Couple activities unless included",
        "Personal expenses",
        "Room service",
        "Travel insurance",
        "Additional sightseeing",
        "Extra vehicle usage",
        "Early check-in and late check-out",
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
    const newContent = fileContent.slice(0, index) + jsonString + '\n' + fileContent.slice(index);
    fs.writeFileSync(packageDetailsPath, newContent);
    console.log('Successfully added 9103 to packagesDatabase');
} else {
    console.error('Could not find split marker.');
}
