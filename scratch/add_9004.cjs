const fs = require('fs');
const path = require('path');

const packageDetailsPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

const jsonString = `  "9004": {
    "id": "9004",
    "title": "Kerala Honeymoon Package – 5 Nights / 6 Days",
    "slug": "kerala-honeymoon-package-5-nights-6-days",
    "image": "/assets/kerala_hero.webp",
    "heroImage": "/assets/kerala_hero.webp",
    "overview": {
        "title": "Tour Overview",
        "description": "Experience Kerala’s misty hill stations, peaceful backwaters and beautiful beaches with this 5 Nights / 6 Days Kerala Honeymoon Package from Logaa Holidays.\\n\\nThe journey begins in Munnar, where couples can enjoy waterfalls, tea plantations and scenic viewpoints. The tour then continues to Alleppey for a romantic houseboat or backwater-resort stay.\\n\\nThe final part of the honeymoon includes two relaxing nights in Kovalam, offering beach leisure, sunset views and optional romantic experiences. This itinerary provides a comfortable balance of sightseeing and private couple time.",
        "duration": "5 Nights / 6 Days",
        "destination": "Kochi, Munnar, Alleppey, Kovalam, Trivandrum",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Nature & Hill Stations, Backwaters, Beach"
    },
    "seo": {
        "title": "Kerala Honeymoon Package 5 Nights 6 Days | Munnar Alleppey Kovalam",
        "description": "Book a romantic Kerala honeymoon package for 5 Nights and 6 Days covering Munnar, Alleppey and Kovalam with houseboat, beach resort and private cab.",
        "keywords": "Kerala honeymoon package 5 nights 6 days, Munnar Alleppey Kovalam honeymoon package, Kerala complete honeymoon package, Kerala houseboat and beach honeymoon, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Kerala couple package 6 days, Kerala honeymoon with private cab, Munnar Kovalam honeymoon package, Kerala honeymoon with houseboat, Logaa Holidays Kerala honeymoon"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Kochi Arrival – Munnar",
            "description": "Pickup from Kochi International Airport, Ernakulam Railway Station or preferred Kochi city location.\\nMeet our representative and proceed towards Munnar by private vehicle.\\nEnjoy the scenic journey through hills, forests, waterfalls, spice plantations and tea estates.\\n\\nEn Route Places\\n• Cheeyappara Waterfalls\\n• Valara Waterfalls\\n• Spice plantation viewpoints\\n• Tea garden photo points\\n• Scenic roadside viewpoints\\n\\nUpon arrival in Munnar, check in at the selected hotel or resort.\\nThe remaining time is free for leisure.\\nCouples may relax at the resort or visit the nearby local market depending on arrival time.\\n\\nOptional Honeymoon Arrangements\\n• Welcome drink\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Fruit basket\\n• Candlelight dinner\\n\\nOvernight stay in Munnar.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "Munnar Full-Day Sightseeing",
            "description": "After breakfast, proceed for full-day Munnar sightseeing.\\n\\nPlaces to Visit\\n• Rose Garden\\n• Photo Point\\n• Mattupetty Dam\\n• Echo Point\\n• Kundala Lake\\n• Tea Museum or Tea Factory\\n• Blossom Hydel Park\\n• Munnar local market\\n\\nOptional boating and adventure activities can be enjoyed at an additional cost.\\nThe sightseeing order may change depending on weather, traffic and attraction timings.\\n\\nReturn to the hotel after sightseeing.\\nThe evening is free for leisure.\\nOvernight stay in Munnar.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "Munnar – Alleppey",
            "description": "After breakfast, check out from the hotel and proceed towards Alleppey.\\nEnjoy the scenic journey through Kerala’s countryside.\\nUpon arrival, check in at the selected private houseboat or backwater resort.\\n\\nPrivate Houseboat Option\\nIf a private houseboat is selected, couples may enjoy:\\n• Backwater cruising\\n• Village and paddy-field views\\n• Canal scenery\\n• Welcome drink\\n• Lunch\\n• Evening tea and snacks\\n• Dinner\\n• Breakfast the following morning\\nHouseboat meals and cruise timings depend on the confirmed package.\\n\\nBackwater Resort Option\\nIf a backwater resort is selected, couples may enjoy:\\n• Backwater views\\n• Resort leisure\\n• Swimming pool, where available\\n• Optional sunset cruise\\n• Optional candlelight dinner\\n• Couple spa, subject to availability\\n\\nSpend a peaceful evening together.\\nOvernight stay in Alleppey.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Alleppey – Kovalam",
            "description": "After breakfast, check out from the houseboat or resort.\\nProceed towards Kovalam by private vehicle.\\nUpon arrival, check in at the selected beach hotel or resort.\\nLater, proceed for Kovalam sightseeing.\\n\\nPlaces to Visit\\n• Lighthouse Beach\\n• Hawa Beach\\n• Samudra Beach\\n• Kovalam Beach\\n• Sunset viewpoint, subject to weather\\n\\nThe evening is free for romantic leisure.\\nCouples may enjoy a beach walk, resort facilities or an optional candlelight dinner.\\nOvernight stay in Kovalam.",
            "activities": []
        },
        {
            "day": "Day 5",
            "title": "Kovalam and Trivandrum Sightseeing",
            "description": "After breakfast, proceed for Trivandrum and nearby sightseeing.\\n\\nPlaces to Visit\\n• Sree Padmanabhaswamy Temple\\n• Kuthiramalika Palace, subject to opening\\n• Napier Museum, subject to opening\\n• Trivandrum Zoo, optional\\n• Azhimala Shiva Temple\\n• Poovar Backwaters, optional\\n• Local shopping\\n\\nTemple entry is subject to the applicable dress code and local regulations.\\nOptional Poovar boating may be arranged at an additional cost.\\nReturn to Kovalam.\\nThe evening is free for beach leisure.\\nOvernight stay in Kovalam.",
            "activities": []
        },
        {
            "day": "Day 6",
            "title": "Kovalam – Trivandrum Departure",
            "description": "After breakfast, check out from the hotel.\\nDepending on the departure schedule, guests may enjoy short local shopping or leisure time.\\n\\nDrop at:\\n• Trivandrum International Airport\\n• Trivandrum Central Railway Station\\n• Trivandrum Bus Stand\\n• Preferred Trivandrum city location\\n\\nThe tour concludes with romantic memories of Munnar, Alleppey and Kovalam.",
            "activities": []
        },
        {
            "day": "Stay Plan",
            "title": "Accommodation Details",
            "description": "Destination: Munnar (2 Nights), Alleppey (1 Night), Kovalam (2 Nights)\\nTotal Duration: 5 Nights / 6 Days",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights’ stay in Munnar\\n• One night in Alleppey\\n• Two nights’ stay in Kovalam\\n• Kochi pickup and Trivandrum drop\\n• Scenic waterfalls and tea plantations\\n• Full-day Munnar sightseeing\\n• Alleppey backwater experience\\n• Private houseboat option\\n• Kovalam beach leisure\\n• Trivandrum sightseeing\\n• Optional candlelight dinner\\n• Optional flower-bed decoration\\n• Optional honeymoon cake\\n• Private air-conditioned cab",
            "activities": []
        },
        {
            "day": "Optional",
            "title": "Optional Honeymoon Add-Ons",
            "description": "The following services may be arranged at an additional cost:\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Candlelight dinner\\n• Fruit basket\\n• Welcome drink\\n• Couple photoshoot\\n• Couple spa\\n• Valley-view room\\n• Plantation-view room\\n• Premium Munnar resort\\n• Private premium houseboat\\n• Upper-deck houseboat\\n• Full-time air-conditioned houseboat\\n• Kovalam beach resort upgrade\\n• Sea-view room\\n• Pool-view room\\n• Poovar sunset boating\\n• Romantic beachside dinner\\n• Additional night stay\\n\\nAll honeymoon arrangements are subject to hotel, resort and houseboat policy.",
            "activities": []
        },
        {
            "day": "Transport",
            "title": "Vehicle Details",
            "description": "Private Sedan\\nSuitable for one honeymoon couple.\\nPossible vehicles:\\n• Etios\\n• Dzire\\n• Ciaz or similar\\n\\nThe vehicle will be used only for confirmed transfers and sightseeing.\\nAdditional route changes, waiting time and extra sightseeing may be chargeable.",
            "activities": []
        },
        {
            "day": "Info",
            "title": "Important Houseboat & Travel Information",
            "description": "Important Houseboat Information:\\n• Standard houseboat check-in is generally around noon.\\n• Standard check-out is generally the following morning.\\n• Houseboats remain stationary during night hours according to local regulations.\\n• Cruise routes and timings depend on weather, water level and local operating conditions.\\n• Standard air-conditioning may operate only during fixed night hours.\\n• Full-time air-conditioning must be booked separately.\\n• Meals are normally prepared according to the selected menu.\\n• Special dietary requirements must be informed before confirmation.\\n• Outside food and beverages may be restricted.\\n\\nImportant Travel Information:\\n• Hotel, resort and houseboat availability depends on the travel date.\\n• Final package cost depends on hotel category, houseboat type and honeymoon add-ons.\\n• Peak-season and holiday supplements may apply.\\n• Standard hotel check-in and check-out timings will apply.\\n• Early check-in and late check-out are subject to availability.\\n• Sightseeing order may change depending on traffic, weather and attraction timings.\\n• Waterfalls may have less water during certain seasons.\\n• Air-conditioning may not operate in hill areas or while the vehicle is parked.\\n• Entry tickets and optional activities are payable directly unless included.\\n• Temple entry is subject to dress code and local rules.\\n• Guests must carry valid government-issued photo identification.\\n• Unused services are non-refundable.\\n• Personal belongings remain the responsibility of the guests.",
            "activities": []
        },
        {
            "day": "Suitable",
            "title": "Suitable For",
            "description": "• Honeymoon couples\\n• Newly married couples\\n• Anniversary travellers\\n• Couples seeking hills, backwaters and beaches\\n• Romantic long holidays\\n• First-time Kerala visitors\\n• Couples travelling from Tamil Nadu",
            "activities": []
        },
        {
            "day": "Why Us",
            "title": "Why Choose Logaa Holidays?",
            "description": "• Kerala honeymoon packages designed for Tamil Nadu couples\\n• Private cab for the complete tour\\n• Munnar, Alleppey and Kovalam coverage\\n• Private houseboat and backwater resort options\\n• Beach resort options\\n• Budget, deluxe, premium and luxury packages\\n• Honeymoon cake and room decoration arrangements\\n• Candlelight dinner options\\n• Couple-friendly and less-tiring itinerary\\n• Transparent inclusions and exclusions\\n• Flexible Kochi pickup and Trivandrum drop\\n• Assistance before and during the journey",
            "activities": []
        },
        {
            "day": "Book",
            "title": "Book Your Kerala Honeymoon",
            "description": "Experience Munnar’s misty hills, Alleppey’s peaceful backwaters and Kovalam’s beautiful beaches with Logaa Holidays.\\n\\nLogaa Holidays\\nMadurai, Tamil Nadu\\nCall / WhatsApp: +91 73973 29776",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ hotel or resort accommodation in Munnar",
        "One night in Alleppey private houseboat or backwater resort",
        "Two nights’ hotel or resort accommodation in Kovalam",
        "Accommodation in the selected room category",
        "Daily breakfast at hotels",
        "Houseboat lunch, evening snacks, dinner and breakfast where specifically included",
        "Pickup from Kochi Airport, railway station or city location",
        "Drop at Trivandrum Airport, railway station or city location",
        "Private air-conditioned sedan",
        "Transfers and sightseeing as per itinerary",
        "Fuel charges",
        "Driver allowance",
        "Toll charges",
        "Parking charges",
        "State permit charges, wherever applicable",
        "Assistance from Logaa Holidays",
        "Honeymoon arrangements specifically mentioned in the final quotation"
    ],
    "exclusions": [
        "Flight tickets",
        "Train and bus tickets",
        "Lunch and dinner at hotels unless specifically included",
        "Entry tickets to sightseeing attractions",
        "Munnar boating charges",
        "Tea Museum or Tea Factory entry fees",
        "Adventure activity charges",
        "Additional houseboat services",
        "Houseboat air-conditioning during daytime unless specifically included",
        "Special food orders on the houseboat",
        "Poovar boating charges",
        "Water-sport charges",
        "Beach activity charges",
        "Temple special-entry or darshan charges",
        "Temple dress-rental charges",
        "Museum and zoo entry fees",
        "Guide charges",
        "Camera and video charges",
        "Personal expenses",
        "Room service",
        "Laundry charges",
        "Alcoholic and non-alcoholic beverages",
        "Mineral water and snacks",
        "Travel insurance",
        "Medical expenses",
        "Additional sightseeing",
        "Extra vehicle usage",
        "Early check-in and late check-out",
        "Expenses caused by weather, traffic, roadblocks or local restrictions",
        "Anything not specifically mentioned under package inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },`;

let fileContent = fs.readFileSync(packageDetailsPath, 'utf8');

// I will find the first occurrence of "6005": { and inject before it.
// Note: since it got duplicated, I'll just insert right before the last occurrence of '  "6005": {' to be safe, or just before any of them.
const splitMarker = '  "6005": {';
const index = fileContent.lastIndexOf(splitMarker);
if (index !== -1) {
    const newContent = fileContent.slice(0, index) + jsonString + '\\n' + fileContent.slice(index);
    fs.writeFileSync(packageDetailsPath, newContent);
    console.log('Successfully added 9004 to packagesDatabase');
} else {
    console.error('Could not find split marker.');
}
