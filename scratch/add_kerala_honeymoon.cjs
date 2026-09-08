const fs = require('fs');
const path = require('path');

const packageDetailsPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

const jsonString = `  "9001": {
    "id": "9001",
    "title": "Kerala Honeymoon Package – 2 Nights / 3 Days",
    "slug": "kerala-honeymoon-package-2-nights-3-days",
    "image": "/assets/kerala_hero.webp",
    "heroImage": "/assets/kerala_hero.webp",
    "overview": {
        "title": "Tour Overview",
        "description": "Enjoy a romantic getaway to the misty hills of Munnar with this 2 Nights / 3 Days Kerala Honeymoon Package from Logaa Holidays.\\n\\nThe package includes beautiful waterfalls, tea plantations, scenic viewpoints, Munnar sightseeing and private travel by air-conditioned cab. Couples can also add romantic experiences such as flower-bed decoration, honeymoon cake and candlelight dinner.",
        "duration": "2 Nights / 3 Days",
        "destination": "Kochi, Munnar",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Nature & Hill Stations"
    },
    "seo": {
        "title": "Kerala Honeymoon Package 2 Nights 3 Days | Munnar Couple Tour",
        "description": "Book a romantic Kerala honeymoon package for 2 Nights and 3 Days covering Munnar with resort stay, private cab, sightseeing and optional candlelight dinner.",
        "keywords": "Kerala honeymoon package 2 nights 3 days, Munnar honeymoon package, Munnar couple package 3 days, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Munnar honeymoon package with private cab, Budget Kerala honeymoon package, Romantic Munnar tour package, Kerala couple tour package, Munnar resort package for couples, Logaa Holidays Kerala honeymoon"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Kochi Arrival – Munnar",
            "description": "Pickup from Kochi International Airport, Ernakulam Railway Station or your preferred Kochi location.\\nMeet our representative and proceed towards Munnar by private vehicle.\\nThe journey passes through scenic hills, forests, spice plantations and waterfalls.\\n\\nEn Route Sightseeing\\n• Cheeyappara Waterfalls\\n• Valara Waterfalls\\n• Spice plantation viewpoint\\n• Tea garden viewpoints\\n• Scenic photo stops\\n\\nUpon arrival in Munnar, check in at the selected hotel or resort.\\nThe remaining time is free for leisure.\\nCouples may relax at the resort or explore the nearby local market depending on arrival time.\\n\\nOptional Honeymoon Arrangements\\n• Welcome drink\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Fruit basket\\n• Candlelight dinner\\n\\nOvernight stay in Munnar.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "Munnar Full-Day Sightseeing",
            "description": "After breakfast, proceed for full-day Munnar sightseeing.\\n\\nPlaces to Visit\\n• Rose Garden\\n• Photo Point\\n• Mattupetty Dam\\n• Echo Point\\n• Kundala Lake\\n• Tea Museum or Tea Factory\\n• Blossom Hydel Park\\n• Munnar local market\\n\\nOptional boating and adventure activities can be enjoyed at an additional cost.\\nThe sightseeing order may change depending on traffic, weather and attraction timings.\\n\\nReturn to the hotel after sightseeing.\\nThe evening is free for leisure.\\nOvernight stay in Munnar.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "Munnar – Kochi Departure",
            "description": "After breakfast, check out from the hotel.\\nProceed towards Kochi by private vehicle.\\nDepending on the departure time, short photo stops or local shopping may be arranged en route.\\n\\nDrop at:\\n• Kochi International Airport\\n• Ernakulam Railway Station\\n• Kochi Bus Stand\\n• Preferred Kochi city location\\n\\nThe tour concludes with romantic memories of Munnar.",
            "activities": []
        },
        {
            "day": "Stay Plan",
            "title": "Accommodation Details",
            "description": "Destination: Munnar\\nNights: 2 Nights\\nTotal Duration: 2 Nights / 3 Days",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights’ stay in Munnar\\n• Private Kochi pickup and drop\\n• Scenic drive through waterfalls and tea plantations\\n• Munnar local sightseeing\\n• Tea estate viewpoints\\n• Optional honeymoon room decoration\\n• Optional candlelight dinner\\n• Optional honeymoon cake\\n• Private cab for the complete tour",
            "activities": []
        },
        {
            "day": "Optional",
            "title": "Optional Honeymoon Add-Ons",
            "description": "The following services can be added at an additional cost:\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Candlelight dinner\\n• Fruit basket\\n• Welcome drink\\n• Couple photoshoot\\n• Couple spa\\n• Valley-view room\\n• Plantation-view room\\n• Premium resort upgrade\\n• Romantic dinner\\n• Additional night stay\\n\\nAll honeymoon arrangements are subject to hotel policy and availability.",
            "activities": []
        },
        {
            "day": "Transport",
            "title": "Vehicle Information",
            "description": "Sedan\\nSuitable for one honeymoon couple.\\nPossible vehicles:\\n• Etios\\n• Dzire\\n• Ciaz or similar\\n\\nThe vehicle will be used only for confirmed transfers and sightseeing.\\nAdditional route changes, waiting time and extra sightseeing may be chargeable.",
            "activities": []
        },
        {
            "day": "Info",
            "title": "Important Travel Information",
            "description": "• Hotel rooms are subject to availability.\\n• Final package price depends on travel date, hotel category and selected honeymoon inclusions.\\n• Standard hotel check-in and check-out timings will apply.\\n• Early check-in and late check-out are subject to availability and additional charges.\\n• Sightseeing order may change depending on traffic, weather and attraction timings.\\n• Waterfalls may have less water during certain seasons.\\n• Air-conditioning may not operate in hill areas or while the vehicle is parked.\\n• Entry tickets and optional activities are payable directly unless included.\\n• Guests must carry valid government-issued photo identification.\\n• Unused services are non-refundable.\\n• Personal belongings remain the responsibility of the guests.",
            "activities": []
        },
        {
            "day": "Suitable",
            "title": "Suitable For",
            "description": "• Honeymoon couples\\n• Newly married couples\\n• Anniversary travellers\\n• Budget honeymooners\\n• Couples with limited leave\\n• Short romantic holidays\\n• Couples travelling from Tamil Nadu",
            "activities": []
        },
        {
            "day": "Why Us",
            "title": "Why Choose Logaa Holidays?",
            "description": "• Kerala honeymoon packages designed for Tamil Nadu couples\\n• Private cab for the complete tour\\n• Budget, deluxe and premium resort options\\n• Flexible pickup and drop options\\n• Honeymoon cake and room decoration arrangements\\n• Candlelight dinner arrangements\\n• Couple-friendly sightseeing plan\\n• Transparent inclusions and exclusions\\n• Support before and during the journey",
            "activities": []
        },
        {
            "day": "Book",
            "title": "Book Your Kerala Honeymoon",
            "description": "Plan your romantic Munnar honeymoon with Logaa Holidays.\\n\\nLogaa Holidays\\nMadurai, Tamil Nadu\\nCall / WhatsApp: +91 73973 29776",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ hotel or resort accommodation in Munnar",
        "Accommodation in the selected room category",
        "Daily breakfast",
        "Kochi Airport, railway station or city pickup",
        "Kochi Airport, railway station or city drop",
        "Private air-conditioned sedan",
        "Transfers and sightseeing as per itinerary",
        "Fuel charges",
        "Driver allowance",
        "Toll charges",
        "Parking charges",
        "State permit charges, wherever applicable",
        "Assistance from Logaa Holidays during the tour",
        "Honeymoon arrangements specifically mentioned in the final quotation"
    ],
    "exclusions": [
        "Flight tickets",
        "Train and bus tickets",
        "Lunch and dinner unless specifically included",
        "Entry tickets to sightseeing attractions",
        "Boating charges",
        "Adventure activity charges",
        "Jeep safari charges",
        "Tea Museum or Tea Factory entry charges",
        "Guide charges",
        "Camera and video charges",
        "Personal expenses",
        "Room service",
        "Laundry charges",
        "Alcoholic and non-alcoholic beverages",
        "Mineral water and snacks",
        "Travel insurance",
        "Medical expenses",
        "Additional sightseeing not mentioned in the itinerary",
        "Extra vehicle usage",
        "Early check-in and late check-out",
        "Expenses caused by weather, traffic, roadblocks or local restrictions",
        "Anything not specifically mentioned under package inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },
  "9002": {
    "id": "9002",
    "title": "Kerala Honeymoon Package – 3 Nights / 4 Days",
    "slug": "kerala-honeymoon-package-3-nights-4-days",
    "image": "/assets/kerala_hero.webp",
    "heroImage": "/assets/kerala_hero.webp",
    "overview": {
        "title": "Tour Overview",
        "description": "Enjoy the misty hills of Munnar and the peaceful backwaters of Alleppey with this 3 Nights / 4 Days Kerala Honeymoon Package from Logaa Holidays.\\n\\nThe itinerary includes waterfalls, tea plantations, scenic viewpoints, popular Munnar attractions and a romantic backwater experience in Alleppey. Couples may choose either a private houseboat or a backwater resort for the final night.\\nThe package can be customised with flower-bed decoration, honeymoon cake, candlelight dinner, couple photoshoot and premium room upgrades.",
        "duration": "3 Nights / 4 Days",
        "destination": "Kochi, Munnar, Alleppey",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Nature & Hill Stations, Backwaters"
    },
    "seo": {
        "title": "Kerala Honeymoon Package 3 Nights 4 Days | Munnar Alleppey",
        "description": "Book a romantic Kerala honeymoon package for 3 Nights and 4 Days covering Munnar and Alleppey with resort stay, private houseboat and cab.",
        "keywords": "Kerala honeymoon package 3 nights 4 days, Munnar Alleppey honeymoon package, Kerala houseboat honeymoon package, Munnar honeymoon package with houseboat, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Kerala couple package 4 days, Munnar Alleppey couple tour, Kerala honeymoon package with private cab, Romantic Kerala honeymoon tour, Logaa Holidays Kerala honeymoon"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Kochi Arrival – Munnar",
            "description": "Pickup from Kochi International Airport, Ernakulam Railway Station or preferred Kochi city location.\\nMeet our representative and proceed towards Munnar by private vehicle.\\nEnjoy the scenic journey through hills, forests, waterfalls, spice plantations and tea estates.\\n\\nEn Route Places\\n• Cheeyappara Waterfalls\\n• Valara Waterfalls\\n• Spice plantation viewpoints\\n• Tea garden photo points\\n• Scenic roadside viewpoints\\n\\nUpon arrival in Munnar, check in at the selected hotel or resort.\\nThe remaining time is free for leisure.\\nCouples may relax at the resort or visit the local market depending on arrival time.\\n\\nOptional Honeymoon Arrangements\\n• Welcome drink\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Fruit basket\\n• Candlelight dinner\\n\\nOvernight stay in Munnar.",
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
            "description": "After breakfast, check out from the hotel and proceed towards Alleppey.\\nEnjoy the scenic drive through Kerala’s countryside.\\nUpon arrival, check in at the selected private houseboat or backwater resort.\\n\\nHouseboat Option\\nIf a private houseboat is selected, guests can enjoy:\\n• Backwater cruising\\n• Village and paddy-field views\\n• Canal scenery\\n• Welcome drink\\n• Lunch\\n• Evening tea and snacks\\n• Dinner\\n• Breakfast the following morning\\nHouseboat meals and cruise timings depend on the confirmed package.\\n\\nResort Option\\nIf a backwater resort is selected, guests may enjoy:\\n• Backwater views\\n• Resort leisure\\n• Swimming pool, where available\\n• Optional sunset cruise\\n• Optional candlelight dinner\\n• Couple spa, subject to availability\\n\\nSpend a peaceful evening together.\\nOvernight stay in Alleppey.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Alleppey – Kochi Departure",
            "description": "After breakfast, check out from the houseboat or resort.\\nProceed towards Kochi by private vehicle.\\nDepending on the departure time, guests may visit:\\n• Marine Drive\\n• Fort Kochi\\n• Chinese Fishing Nets\\n• Mattancherry area\\n• Local shopping\\n\\nAdditional Kochi sightseeing depends on the flight or train departure schedule.\\n\\nDrop at:\\n• Kochi International Airport\\n• Ernakulam Railway Station\\n• Kochi Bus Stand\\n• Preferred Kochi city location\\n\\nThe tour concludes with romantic memories of Munnar and Alleppey.",
            "activities": []
        },
        {
            "day": "Stay Plan",
            "title": "Accommodation Details",
            "description": "Destination: Munnar (2 Nights), Alleppey (1 Night)\\nTotal Duration: 3 Nights / 4 Days",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights’ stay in Munnar\\n• One night in Alleppey\\n• Private Kochi pickup and drop\\n• Scenic waterfalls and tea plantations\\n• Full-day Munnar sightseeing\\n• Alleppey backwater experience\\n• Private houseboat option\\n• Optional flower-bed decoration\\n• Optional honeymoon cake\\n• Optional candlelight dinner\\n• Private air-conditioned cab",
            "activities": []
        },
        {
            "day": "Optional",
            "title": "Optional Honeymoon Add-Ons",
            "description": "The following services may be arranged at an additional cost:\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Candlelight dinner\\n• Fruit basket\\n• Welcome drink\\n• Couple photoshoot\\n• Couple spa\\n• Valley-view room\\n• Plantation-view room\\n• Premium Munnar resort\\n• Private premium houseboat\\n• Upper-deck houseboat\\n• Backwater resort upgrade\\n• Romantic dinner\\n• Additional night stay\\n\\nAll honeymoon arrangements are subject to hotel, resort and houseboat policy.",
            "activities": []
        },
        {
            "day": "Transport",
            "title": "Vehicle Details",
            "description": "Private Sedan\\nSuitable for one honeymoon couple.\\nPossible vehicles:\\n• Etios\\n• Dzire\\n• Ciaz or similar\\n\\nThe vehicle will be used for confirmed transfers and sightseeing only.\\nAdditional route changes, waiting time and extra sightseeing may be chargeable.",
            "activities": []
        },
        {
            "day": "Info",
            "title": "Important Houseboat & Travel Information",
            "description": "Important Houseboat Information:\\n• Standard houseboat check-in is generally around noon.\\n• Standard check-out is generally the following morning.\\n• Houseboats remain stationary during night hours according to local regulations.\\n• Daytime cruising and meal timings depend on the selected operator.\\n• Houseboat air-conditioning may operate only during fixed night hours unless a full-time AC option is booked.\\n• Houseboat route and cruise duration depend on weather, water level and local operating conditions.\\n• Outside food and beverages may be restricted.\\n• Special dietary requirements must be informed before confirmation.\\n\\nImportant Travel Information:\\n• Hotel, resort and houseboat availability depends on the travel date.\\n• Final package cost depends on room category, houseboat type and honeymoon add-ons.\\n• Standard check-in and check-out timings will apply.\\n• Early check-in and late check-out are subject to availability.\\n• Sightseeing order may change depending on traffic and weather.\\n• Waterfalls may have less water during certain seasons.\\n• Air-conditioning may not operate in hill areas or while the vehicle is parked.\\n• Entry tickets and optional activities are payable directly unless included.\\n• Guests must carry valid government-issued photo identification.\\n• Unused services are non-refundable.\\n• Personal belongings remain the responsibility of the guests.",
            "activities": []
        },
        {
            "day": "Suitable",
            "title": "Suitable For",
            "description": "• Honeymoon couples\\n• Newly married couples\\n• Anniversary travellers\\n• Couples seeking hills and backwaters\\n• Romantic short holidays\\n• Couples travelling from Tamil Nadu\\n• First-time Kerala travellers",
            "activities": []
        },
        {
            "day": "Why Us",
            "title": "Why Choose Logaa Holidays?",
            "description": "• Kerala honeymoon packages designed for Tamil Nadu couples\\n• Private cab for the complete tour\\n• Munnar resort and Alleppey houseboat options\\n• Budget, deluxe and premium packages\\n• Honeymoon cake and room decoration arrangements\\n• Candlelight dinner options\\n• Couple-friendly sightseeing plan\\n• Transparent inclusions and exclusions\\n• Flexible Kochi pickup and drop\\n• Assistance before and during the journey",
            "activities": []
        },
        {
            "day": "Book",
            "title": "Book Your Kerala Honeymoon",
            "description": "Experience the misty hills of Munnar and peaceful backwaters of Alleppey with Logaa Holidays.\\n\\nLogaa Holidays\\nMadurai, Tamil Nadu\\nCall / WhatsApp: +91 73973 29776",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ hotel or resort accommodation in Munnar",
        "One night in Alleppey private houseboat or backwater resort",
        "Accommodation in the selected room category",
        "Daily breakfast at the hotels",
        "Houseboat lunch, evening snacks, dinner and breakfast where specifically included",
        "Kochi Airport, railway station or city pickup",
        "Kochi Airport, railway station or city drop",
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
        "Boating charges in Munnar",
        "Adventure activity charges",
        "Jeep safari charges",
        "Tea Museum or Tea Factory entry charges",
        "Additional houseboat services",
        "Houseboat AC during daytime unless specifically included",
        "Special food orders on the houseboat",
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
  },
  "9003": {
    "id": "9003",
    "title": "Kerala Honeymoon Package – 4 Nights / 5 Days",
    "slug": "kerala-honeymoon-package-4-nights-5-days",
    "image": "/assets/kerala_hero.webp",
    "heroImage": "/assets/kerala_hero.webp",
    "overview": {
        "title": "Tour Overview",
        "description": "Experience Kerala’s misty hills, spice plantations, peaceful backwaters and romantic landscapes with this 4 Nights / 5 Days Kerala Honeymoon Package from Logaa Holidays.\\n\\nThe journey begins in Munnar, where couples can enjoy tea plantations, waterfalls and scenic viewpoints. The tour then continues to Thekkady for plantation experiences, optional boating and cultural activities.\\nThe final night is spent in Alleppey, where couples can choose a private houseboat or backwater resort for a peaceful and romantic stay.\\nThis is one of the most popular Kerala honeymoon itineraries for couples travelling from Tamil Nadu.",
        "duration": "4 Nights / 5 Days",
        "destination": "Kochi, Munnar, Thekkady, Alleppey",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Nature & Hill Stations, Wildlife, Backwaters"
    },
    "seo": {
        "title": "Kerala Honeymoon Package 4 Nights 5 Days | Munnar Alleppey",
        "description": "Book a romantic Kerala honeymoon package for 4 Nights and 5 Days covering Munnar, Thekkady and Alleppey with resort, houseboat and private cab.",
        "keywords": "Kerala honeymoon package 4 nights 5 days, Munnar Thekkady Alleppey honeymoon package, Kerala houseboat honeymoon package, Kerala couple tour 5 days, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Munnar Alleppey couple package, Kerala honeymoon with private cab, Kerala honeymoon package with houseboat, Romantic Kerala tour package, Logaa Holidays Kerala honeymoon"
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
            "title": "Munnar – Thekkady",
            "description": "After breakfast, check out from the hotel and proceed towards Thekkady.\\nEnjoy the scenic journey through hills, cardamom plantations and forest areas.\\nUpon arrival, check in at the selected hotel or resort.\\nLater, couples may choose from the following optional experiences.\\n\\nOptional Thekkady Experiences\\n• Periyar Lake boating\\n• Spice plantation visit\\n• Elephant activities\\n• Kathakali performance\\n• Kalaripayattu show\\n• Ayurvedic massage\\n• Couple spa\\n• Local market shopping\\n\\nReturn to the hotel.\\nOvernight stay in Thekkady.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Thekkady – Alleppey",
            "description": "After breakfast, check out from the hotel and proceed towards Alleppey.\\nUpon arrival, check in at the selected private houseboat or backwater resort.\\n\\nPrivate Houseboat Option\\nIf a houseboat is selected, couples may enjoy:\\n• Backwater cruising\\n• Village and paddy-field views\\n• Canal scenery\\n• Welcome drink\\n• Lunch\\n• Evening tea and snacks\\n• Dinner\\n• Breakfast the following morning\\nHouseboat meals and cruise timings depend on the confirmed package.\\n\\nBackwater Resort Option\\nIf a resort is selected, couples may enjoy:\\n• Backwater views\\n• Resort leisure\\n• Swimming pool, where available\\n• Optional sunset cruise\\n• Optional candlelight dinner\\n• Couple spa, subject to availability\\n\\nSpend a peaceful evening together.\\nOvernight stay in Alleppey.",
            "activities": []
        },
        {
            "day": "Day 5",
            "title": "Alleppey – Kochi Departure",
            "description": "After breakfast, check out from the houseboat or resort.\\nProceed towards Kochi by private vehicle.\\nDepending on the departure time, couples may visit:\\n• Marine Drive\\n• Fort Kochi\\n• Chinese Fishing Nets\\n• Mattancherry area\\n• Local shopping\\n\\nAdditional Kochi sightseeing depends on the flight or train departure schedule.\\n\\nDrop at:\\n• Kochi International Airport\\n• Ernakulam Railway Station\\n• Kochi Bus Stand\\n• Preferred Kochi city location\\n\\nThe tour concludes with romantic memories of Munnar, Thekkady and Alleppey.",
            "activities": []
        },
        {
            "day": "Stay Plan",
            "title": "Accommodation Details",
            "description": "Destination: Munnar (2 Nights), Thekkady (1 Night), Alleppey (1 Night)\\nTotal Duration: 4 Nights / 5 Days",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights’ stay in Munnar\\n• One night’s stay in Thekkady\\n• One night in Alleppey\\n• Private Kochi pickup and drop\\n• Scenic waterfalls and tea plantations\\n• Full-day Munnar sightseeing\\n• Optional Periyar Lake boating\\n• Optional spice plantation visit\\n• Alleppey backwater experience\\n• Private houseboat option\\n• Optional honeymoon cake\\n• Optional flower-bed decoration\\n• Optional candlelight dinner\\n• Private air-conditioned cab",
            "activities": []
        },
        {
            "day": "Optional",
            "title": "Optional Honeymoon Add-Ons",
            "description": "The following services may be arranged at an additional cost:\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Candlelight dinner\\n• Fruit basket\\n• Welcome drink\\n• Couple photoshoot\\n• Couple spa\\n• Valley-view room\\n• Plantation-view room\\n• Premium Munnar resort\\n• Premium Thekkady resort\\n• Private premium houseboat\\n• Upper-deck houseboat\\n• Full-time air-conditioned houseboat\\n• Backwater resort upgrade\\n• Romantic dinner\\n• Additional night stay\\n\\nAll honeymoon arrangements are subject to hotel, resort and houseboat policy.",
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
            "description": "Important Houseboat Information:\\n• Standard houseboat check-in is generally around noon.\\n• Standard check-out is generally the following morning.\\n• Houseboats remain stationary during night hours according to local regulations.\\n• Cruise routes and timings depend on weather, water level and local operating conditions.\\n• Standard air-conditioning may operate only during fixed night hours.\\n• Full-time air-conditioning must be booked separately.\\n• Meals are normally prepared according to the selected menu.\\n• Special dietary requirements must be informed before confirmation.\\n• Outside food and beverages may be restricted.\\n\\nImportant Travel Information:\\n• Hotel, resort and houseboat availability depends on the travel date.\\n• Final package cost depends on hotel category, houseboat type and honeymoon add-ons.\\n• Peak-season and holiday supplements may apply.\\n• Standard hotel check-in and check-out timings will apply.\\n• Early check-in and late check-out are subject to availability.\\n• Sightseeing order may change depending on traffic and weather.\\n• Waterfalls may have less water during certain seasons.\\n• Air-conditioning may not operate in hill areas or while the vehicle is parked.\\n• Entry tickets and optional activities are payable directly unless included.\\n• Guests must carry valid government-issued photo identification.\\n• Unused services are non-refundable.\\n• Personal belongings remain the responsibility of the guests.",
            "activities": []
        },
        {
            "day": "Suitable",
            "title": "Suitable For",
            "description": "• Honeymoon couples\\n• Newly married couples\\n• Anniversary travellers\\n• Couples seeking hills and backwaters\\n• First-time Kerala travellers\\n• Romantic holidays\\n• Couples travelling from Tamil Nadu",
            "activities": []
        },
        {
            "day": "Why Us",
            "title": "Why Choose Logaa Holidays?",
            "description": "• Kerala honeymoon packages designed for Tamil Nadu couples\\n• Private cab for the complete tour\\n• Munnar, Thekkady and Alleppey coverage\\n• Private houseboat and backwater resort options\\n• Budget, deluxe, premium and luxury packages\\n• Honeymoon cake and room decoration arrangements\\n• Candlelight dinner options\\n• Couple-friendly itinerary\\n• Transparent inclusions and exclusions\\n• Flexible Kochi pickup and drop\\n• Assistance before and during the journey",
            "activities": []
        },
        {
            "day": "Book",
            "title": "Book Your Kerala Honeymoon",
            "description": "Experience Munnar’s misty hills, Thekkady’s plantation landscapes and Alleppey’s backwaters with Logaa Holidays.\\n\\nLogaa Holidays\\nMadurai, Tamil Nadu\\nCall / WhatsApp: +91 73973 29776",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ hotel or resort accommodation in Munnar",
        "One night’s hotel or resort accommodation in Thekkady",
        "One night in Alleppey private houseboat or backwater resort",
        "Accommodation in the selected room category",
        "Daily breakfast at hotels",
        "Houseboat lunch, evening snacks, dinner and breakfast where specifically included",
        "Kochi Airport, railway station or city pickup",
        "Kochi Airport, railway station or city drop",
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
        "Periyar Lake boating charges",
        "Spice plantation entry fees",
        "Elephant activity charges",
        "Kathakali and Kalaripayattu show tickets",
        "Ayurvedic massage and spa charges",
        "Adventure activity charges",
        "Additional houseboat services",
        "Houseboat air-conditioning during daytime unless specifically included",
        "Special food orders on the houseboat",
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

// Insert the new packages right before "6005": {
const splitMarker = '  "6005": {';
const parts = fileContent.split(splitMarker);

if (parts.length === 2) {
    fs.writeFileSync(packageDetailsPath, parts[0] + jsonString + '\\n' + splitMarker + parts[1]);
    console.log('Successfully added Kerala Honeymoon packages to packagesDatabase');
} else {
    console.error('Could not find split marker.');
}
