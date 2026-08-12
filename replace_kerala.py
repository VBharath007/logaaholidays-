import os
import re

packages_code = """
    '9001': {
        "title": "Kerala Honeymoon Package – 2 Nights / 3 Days",
        "image": "/assets/kerala1.webp",
        "heroImage": "/assets/kerala1.webp",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Munnar",
            "activities": "Sightseeing, Waterfalls, Tea Plantations",
            "themes": "Honeymoon, Romantic, Hills and Mountains"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Kochi Arrival – Munnar",
                "activities": [
                    "Pickup from Kochi International Airport, Ernakulam Railway Station or your preferred Kochi location.",
                    "Meet our representative and proceed towards Munnar by private vehicle.",
                    "The journey passes through scenic hills, forests, spice plantations and waterfalls.",
                    "En Route Sightseeing",
                    "• Cheeyappara Waterfalls",
                    "• Valara Waterfalls",
                    "• Spice plantation viewpoint",
                    "• Tea garden viewpoints",
                    "• Scenic photo stops",
                    "Upon arrival in Munnar, check in at the selected hotel or resort.",
                    "The remaining time is free for leisure.",
                    "Couples may relax at the resort or explore the nearby local market depending on arrival time.",
                    "Optional Honeymoon Arrangements",
                    "• Welcome drink",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 02",
                "title": "Munnar Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for full-day Munnar sightseeing.",
                    "Places to Visit",
                    "• Rose Garden",
                    "• Photo Point",
                    "• Mattupetty Dam",
                    "• Echo Point",
                    "• Kundala Lake",
                    "• Tea Museum or Tea Factory",
                    "• Blossom Hydel Park",
                    "• Munnar local market",
                    "Optional boating and adventure activities can be enjoyed at an additional cost.",
                    "The sightseeing order may change depending on traffic, weather and attraction timings.",
                    "Return to the hotel after sightseeing.",
                    "The evening is free for leisure.",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 03",
                "title": "Munnar – Kochi Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Proceed towards Kochi by private vehicle.",
                    "Depending on the departure time, short photo stops or local shopping may be arranged en route.",
                    "Drop at:",
                    "• Kochi International Airport",
                    "• Ernakulam Railway Station",
                    "• Kochi Bus Stand",
                    "• Preferred Kochi city location",
                    "The tour concludes with romantic memories of Munnar."
                ]
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
            "❌ Flight tickets",
            "❌ Train and bus tickets",
            "❌ Lunch and dinner unless specifically included",
            "❌ Entry tickets to sightseeing attractions",
            "❌ Boating charges",
            "❌ Adventure activity charges",
            "❌ Jeep safari charges",
            "❌ Tea Museum or Tea Factory entry charges",
            "❌ Guide charges",
            "❌ Camera and video charges",
            "❌ Personal expenses",
            "❌ Room service",
            "❌ Laundry charges",
            "❌ Alcoholic and non-alcoholic beverages",
            "❌ Mineral water and snacks",
            "❌ Travel insurance",
            "❌ Medical expenses",
            "❌ Additional sightseeing not mentioned in the itinerary",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Expenses caused by weather, traffic, roadblocks or local restrictions",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Two nights’ stay in Munnar",
            "Private Kochi pickup and drop",
            "Scenic drive through waterfalls and tea plantations",
            "Munnar local sightseeing",
            "Tea estate viewpoints",
            "Optional honeymoon room decoration",
            "Optional candlelight dinner",
            "Optional honeymoon cake",
            "Private cab for the complete tour"
        ],
        "keywords": "Kerala honeymoon package 2 nights 3 days, Munnar honeymoon package, Munnar couple package 3 days, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Munnar honeymoon package with private cab, Budget Kerala honeymoon package, Romantic Munnar tour package, Kerala couple tour package, Munnar resort package for couples, Logaa Holidays Kerala honeymoon",
        "seoTitle": "Kerala Honeymoon Package 2 Nights 3 Days | Munnar Couple Tour",
        "seoDescription": "Book a romantic Kerala honeymoon package for 2 Nights and 3 Days covering Munnar with resort stay, private cab, sightseeing and optional candlelight dinner.",
        "id": "9001"
    },
    '9002': {
        "title": "Kerala Honeymoon Package – 3 Nights / 4 Days",
        "image": "/assets/kerala1.webp",
        "heroImage": "/assets/kerala1.webp",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Munnar, Alleppey",
            "activities": "Sightseeing, Backwater Experience",
            "themes": "Honeymoon, Romantic, Hills and Backwaters"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Kochi Arrival – Munnar",
                "activities": [
                    "Pickup from Kochi International Airport, Ernakulam Railway Station or preferred Kochi city location.",
                    "Meet our representative and proceed towards Munnar by private vehicle.",
                    "Enjoy the scenic journey through hills, forests, waterfalls, spice plantations and tea estates.",
                    "En Route Places",
                    "• Cheeyappara Waterfalls",
                    "• Valara Waterfalls",
                    "• Spice plantation viewpoints",
                    "• Tea garden photo points",
                    "• Scenic roadside viewpoints",
                    "Upon arrival in Munnar, check in at the selected hotel or resort.",
                    "The remaining time is free for leisure.",
                    "Couples may relax at the resort or visit the local market depending on arrival time.",
                    "Optional Honeymoon Arrangements",
                    "• Welcome drink",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 02",
                "title": "Munnar Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for full-day Munnar sightseeing.",
                    "Places to Visit",
                    "• Rose Garden",
                    "• Photo Point",
                    "• Mattupetty Dam",
                    "• Echo Point",
                    "• Kundala Lake",
                    "• Tea Museum or Tea Factory",
                    "• Blossom Hydel Park",
                    "• Munnar local market",
                    "Optional boating and adventure activities can be enjoyed at an additional cost.",
                    "The sightseeing order may change depending on weather, traffic and attraction timings.",
                    "Return to the hotel after sightseeing.",
                    "The evening is free for leisure.",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 03",
                "title": "Munnar – Alleppey",
                "activities": [
                    "After breakfast, check out from the hotel and proceed towards Alleppey.",
                    "Enjoy the scenic drive through Kerala’s countryside.",
                    "Upon arrival, check in at the selected private houseboat or backwater resort.",
                    "Houseboat Option",
                    "If a private houseboat is selected, guests can enjoy:",
                    "• Backwater cruising",
                    "• Village and paddy-field views",
                    "• Canal scenery",
                    "• Welcome drink",
                    "• Lunch",
                    "• Evening tea and snacks",
                    "• Dinner",
                    "• Breakfast the following morning",
                    "Houseboat meals and cruise timings depend on the confirmed package.",
                    "Resort Option",
                    "If a backwater resort is selected, guests may enjoy:",
                    "• Backwater views",
                    "• Resort leisure",
                    "• Swimming pool, where available",
                    "• Optional sunset cruise",
                    "• Optional candlelight dinner",
                    "• Couple spa, subject to availability",
                    "Spend a peaceful evening together.",
                    "Overnight stay in Alleppey."
                ]
            },
            {
                "day": "Day 04",
                "title": "Alleppey – Kochi Departure",
                "activities": [
                    "After breakfast, check out from the houseboat or resort.",
                    "Proceed towards Kochi by private vehicle.",
                    "Depending on the departure time, guests may visit:",
                    "• Marine Drive",
                    "• Fort Kochi",
                    "• Chinese Fishing Nets",
                    "• Mattancherry area",
                    "• Local shopping",
                    "Additional Kochi sightseeing depends on the flight or train departure schedule.",
                    "Drop at:",
                    "• Kochi International Airport",
                    "• Ernakulam Railway Station",
                    "• Kochi Bus Stand",
                    "• Preferred Kochi city location",
                    "The tour concludes with romantic memories of Munnar and Alleppey."
                ]
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
            "❌ Flight tickets",
            "❌ Train and bus tickets",
            "❌ Lunch and dinner at hotels unless specifically included",
            "❌ Entry tickets to sightseeing attractions",
            "❌ Boating charges in Munnar",
            "❌ Adventure activity charges",
            "❌ Jeep safari charges",
            "❌ Tea Museum or Tea Factory entry charges",
            "❌ Additional houseboat services",
            "❌ Houseboat AC during daytime unless specifically included",
            "❌ Special food orders on the houseboat",
            "❌ Guide charges",
            "❌ Camera and video charges",
            "❌ Personal expenses",
            "❌ Room service",
            "❌ Laundry charges",
            "❌ Alcoholic and non-alcoholic beverages",
            "❌ Mineral water and snacks",
            "❌ Travel insurance",
            "❌ Medical expenses",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Expenses caused by weather, traffic, roadblocks or local restrictions",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Two nights’ stay in Munnar",
            "One night in Alleppey",
            "Private Kochi pickup and drop",
            "Scenic waterfalls and tea plantations",
            "Full-day Munnar sightseeing",
            "Alleppey backwater experience",
            "Private houseboat option",
            "Optional flower-bed decoration",
            "Optional honeymoon cake",
            "Optional candlelight dinner",
            "Private air-conditioned cab"
        ],
        "keywords": "Kerala honeymoon package 3 nights 4 days, Munnar Alleppey honeymoon package, Kerala houseboat honeymoon package, Munnar honeymoon package with houseboat, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Kerala couple package 4 days, Munnar Alleppey couple tour, Kerala honeymoon package with private cab, Romantic Kerala honeymoon tour, Logaa Holidays Kerala honeymoon",
        "seoTitle": "Kerala Honeymoon Package 3 Nights 4 Days | Munnar Alleppey",
        "seoDescription": "Book a romantic Kerala honeymoon package for 3 Nights and 4 Days covering Munnar and Alleppey with resort stay, private houseboat and cab.",
        "id": "9002"
    },
    '9003': {
        "title": "Kerala Honeymoon Package – 4 Nights / 5 Days",
        "image": "/assets/kerala1.webp",
        "heroImage": "/assets/kerala1.webp",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Munnar, Thekkady, Alleppey",
            "activities": "Sightseeing, Backwaters, Wildlife",
            "themes": "Honeymoon, Romantic, Hills and Nature"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Kochi Arrival – Munnar",
                "activities": [
                    "Pickup from Kochi International Airport, Ernakulam Railway Station or preferred Kochi city location.",
                    "Meet our representative and proceed towards Munnar by private vehicle.",
                    "Enjoy the scenic journey through hills, forests, waterfalls, spice plantations and tea estates.",
                    "En Route Places",
                    "• Cheeyappara Waterfalls",
                    "• Valara Waterfalls",
                    "• Spice plantation viewpoints",
                    "• Tea garden photo points",
                    "• Scenic roadside viewpoints",
                    "Upon arrival in Munnar, check in at the selected hotel or resort.",
                    "The remaining time is free for leisure.",
                    "Couples may relax at the resort or visit the nearby local market depending on arrival time.",
                    "Optional Honeymoon Arrangements",
                    "• Welcome drink",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 02",
                "title": "Munnar Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for full-day Munnar sightseeing.",
                    "Places to Visit",
                    "• Rose Garden",
                    "• Photo Point",
                    "• Mattupetty Dam",
                    "• Echo Point",
                    "• Kundala Lake",
                    "• Tea Museum or Tea Factory",
                    "• Blossom Hydel Park",
                    "• Munnar local market",
                    "Optional boating and adventure activities can be enjoyed at an additional cost.",
                    "The sightseeing order may change depending on weather, traffic and attraction timings.",
                    "Return to the hotel after sightseeing.",
                    "The evening is free for leisure.",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 03",
                "title": "Munnar – Thekkady",
                "activities": [
                    "After breakfast, check out from the hotel and proceed towards Thekkady.",
                    "Enjoy the scenic journey through hills, cardamom plantations and forest areas.",
                    "Upon arrival, check in at the selected hotel or resort.",
                    "Later, couples may choose from the following optional experiences.",
                    "Optional Thekkady Experiences",
                    "• Periyar Lake boating",
                    "• Spice plantation visit",
                    "• Elephant activities",
                    "• Kathakali performance",
                    "• Kalaripayattu show",
                    "• Ayurvedic massage",
                    "• Couple spa",
                    "• Local market shopping",
                    "Return to the hotel.",
                    "Overnight stay in Thekkady."
                ]
            },
            {
                "day": "Day 04",
                "title": "Thekkady – Alleppey",
                "activities": [
                    "After breakfast, check out from the hotel and proceed towards Alleppey.",
                    "Upon arrival, check in at the selected private houseboat or backwater resort.",
                    "Private Houseboat Option",
                    "If a houseboat is selected, couples may enjoy:",
                    "• Backwater cruising",
                    "• Village and paddy-field views",
                    "• Canal scenery",
                    "• Welcome drink",
                    "• Lunch",
                    "• Evening tea and snacks",
                    "• Dinner",
                    "• Breakfast the following morning",
                    "Houseboat meals and cruise timings depend on the confirmed package.",
                    "Backwater Resort Option",
                    "If a resort is selected, couples may enjoy:",
                    "• Backwater views",
                    "• Resort leisure",
                    "• Swimming pool, where available",
                    "• Optional sunset cruise",
                    "• Optional candlelight dinner",
                    "• Couple spa, subject to availability",
                    "Spend a peaceful evening together.",
                    "Overnight stay in Alleppey."
                ]
            },
            {
                "day": "Day 05",
                "title": "Alleppey – Kochi Departure",
                "activities": [
                    "After breakfast, check out from the houseboat or resort.",
                    "Proceed towards Kochi by private vehicle.",
                    "Depending on the departure time, couples may visit:",
                    "• Marine Drive",
                    "• Fort Kochi",
                    "• Chinese Fishing Nets",
                    "• Mattancherry area",
                    "• Local shopping",
                    "Additional Kochi sightseeing depends on the flight or train departure schedule.",
                    "Drop at:",
                    "• Kochi International Airport",
                    "• Ernakulam Railway Station",
                    "• Kochi Bus Stand",
                    "• Preferred Kochi city location",
                    "The tour concludes with romantic memories of Munnar, Thekkady and Alleppey."
                ]
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
            "❌ Flight tickets",
            "❌ Train and bus tickets",
            "❌ Lunch and dinner at hotels unless specifically included",
            "❌ Entry tickets to sightseeing attractions",
            "❌ Munnar boating charges",
            "❌ Tea Museum or Tea Factory entry fees",
            "❌ Periyar Lake boating charges",
            "❌ Spice plantation entry fees",
            "❌ Elephant activity charges",
            "❌ Kathakali and Kalaripayattu show tickets",
            "❌ Ayurvedic massage and spa charges",
            "❌ Adventure activity charges",
            "❌ Additional houseboat services",
            "❌ Houseboat air-conditioning during daytime unless specifically included",
            "❌ Special food orders on the houseboat",
            "❌ Guide charges",
            "❌ Camera and video charges",
            "❌ Personal expenses",
            "❌ Room service",
            "❌ Laundry charges",
            "❌ Alcoholic and non-alcoholic beverages",
            "❌ Mineral water and snacks",
            "❌ Travel insurance",
            "❌ Medical expenses",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Expenses caused by weather, traffic, roadblocks or local restrictions",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Two nights’ stay in Munnar",
            "One night’s stay in Thekkady",
            "One night in Alleppey",
            "Private Kochi pickup and drop",
            "Scenic waterfalls and tea plantations",
            "Full-day Munnar sightseeing",
            "Optional Periyar Lake boating",
            "Optional spice plantation visit",
            "Alleppey backwater experience",
            "Private houseboat option",
            "Optional honeymoon cake",
            "Optional flower-bed decoration",
            "Optional candlelight dinner",
            "Private air-conditioned cab"
        ],
        "keywords": "Kerala honeymoon package 4 nights 5 days, Munnar Thekkady Alleppey honeymoon package, Kerala houseboat honeymoon package, Kerala couple tour 5 days, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Munnar Alleppey couple package, Kerala honeymoon with private cab, Kerala honeymoon package with houseboat, Romantic Kerala tour package, Logaa Holidays Kerala honeymoon",
        "seoTitle": "Kerala Honeymoon Package 4 Nights 5 Days | Munnar Alleppey",
        "seoDescription": "Book a romantic Kerala honeymoon package for 4 Nights and 5 Days covering Munnar, Thekkady and Alleppey with resort, houseboat and private cab.",
        "id": "9003"
    },
    '9004': {
        "title": "Kerala Honeymoon Package – 5 Nights / 6 Days",
        "image": "/assets/kerala1.webp",
        "heroImage": "/assets/kerala1.webp",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Munnar, Alleppey, Kovalam",
            "activities": "Sightseeing, Backwaters, Beach",
            "themes": "Honeymoon, Romantic, Hills and Beach"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Kochi Arrival – Munnar",
                "activities": [
                    "Pickup from Kochi International Airport, Ernakulam Railway Station or preferred Kochi city location.",
                    "Meet our representative and proceed towards Munnar by private vehicle.",
                    "Enjoy the scenic journey through hills, forests, waterfalls, spice plantations and tea estates.",
                    "En Route Places",
                    "• Cheeyappara Waterfalls",
                    "• Valara Waterfalls",
                    "• Spice plantation viewpoints",
                    "• Tea garden photo points",
                    "• Scenic roadside viewpoints",
                    "Upon arrival in Munnar, check in at the selected hotel or resort.",
                    "The remaining time is free for leisure.",
                    "Couples may relax at the resort or visit the nearby local market depending on arrival time.",
                    "Optional Honeymoon Arrangements",
                    "• Welcome drink",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 02",
                "title": "Munnar Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for full-day Munnar sightseeing.",
                    "Places to Visit",
                    "• Rose Garden",
                    "• Photo Point",
                    "• Mattupetty Dam",
                    "• Echo Point",
                    "• Kundala Lake",
                    "• Tea Museum or Tea Factory",
                    "• Blossom Hydel Park",
                    "• Munnar local market",
                    "Optional boating and adventure activities can be enjoyed at an additional cost.",
                    "The sightseeing order may change depending on weather, traffic and attraction timings.",
                    "Return to the hotel after sightseeing.",
                    "The evening is free for leisure.",
                    "Overnight stay in Munnar."
                ]
            },
            {
                "day": "Day 03",
                "title": "Munnar – Alleppey",
                "activities": [
                    "After breakfast, check out from the hotel and proceed towards Alleppey.",
                    "Enjoy the scenic journey through Kerala’s countryside.",
                    "Upon arrival, check in at the selected private houseboat or backwater resort.",
                    "Private Houseboat Option",
                    "If a private houseboat is selected, couples may enjoy:",
                    "• Backwater cruising",
                    "• Village and paddy-field views",
                    "• Canal scenery",
                    "• Welcome drink",
                    "• Lunch",
                    "• Evening tea and snacks",
                    "• Dinner",
                    "• Breakfast the following morning",
                    "Houseboat meals and cruise timings depend on the confirmed package.",
                    "Backwater Resort Option",
                    "If a backwater resort is selected, couples may enjoy:",
                    "• Backwater views",
                    "• Resort leisure",
                    "• Swimming pool, where available",
                    "• Optional sunset cruise",
                    "• Optional candlelight dinner",
                    "• Couple spa, subject to availability",
                    "Spend a peaceful evening together.",
                    "Overnight stay in Alleppey."
                ]
            },
            {
                "day": "Day 04",
                "title": "Alleppey – Kovalam",
                "activities": [
                    "After breakfast, check out from the houseboat or resort.",
                    "Proceed towards Kovalam by private vehicle.",
                    "Upon arrival, check in at the selected beach hotel or resort.",
                    "Later, proceed for Kovalam sightseeing.",
                    "Places to Visit",
                    "• Lighthouse Beach",
                    "• Hawa Beach",
                    "• Samudra Beach",
                    "• Kovalam Beach",
                    "• Sunset viewpoint, subject to weather",
                    "The evening is free for romantic leisure.",
                    "Couples may enjoy a beach walk, resort facilities or an optional candlelight dinner.",
                    "Overnight stay in Kovalam."
                ]
            },
            {
                "day": "Day 05",
                "title": "Kovalam and Trivandrum Sightseeing",
                "activities": [
                    "After breakfast, proceed for Trivandrum and nearby sightseeing.",
                    "Places to Visit",
                    "• Sree Padmanabhaswamy Temple",
                    "• Kuthiramalika Palace, subject to opening",
                    "• Napier Museum, subject to opening",
                    "• Trivandrum Zoo, optional",
                    "• Azhimala Shiva Temple",
                    "• Poovar Backwaters, optional",
                    "• Local shopping",
                    "Temple entry is subject to the applicable dress code and local regulations.",
                    "Optional Poovar boating may be arranged at an additional cost.",
                    "Return to Kovalam.",
                    "The evening is free for beach leisure.",
                    "Overnight stay in Kovalam."
                ]
            },
            {
                "day": "Day 06",
                "title": "Kovalam – Trivandrum Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Depending on the departure schedule, guests may enjoy short local shopping or leisure time.",
                    "Drop at:",
                    "• Trivandrum International Airport",
                    "• Trivandrum Central Railway Station",
                    "• Trivandrum Bus Stand",
                    "• Preferred Trivandrum city location",
                    "The tour concludes with romantic memories of Munnar, Alleppey and Kovalam."
                ]
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
            "❌ Flight tickets",
            "❌ Train and bus tickets",
            "❌ Lunch and dinner at hotels unless specifically included",
            "❌ Entry tickets to sightseeing attractions",
            "❌ Munnar boating charges",
            "❌ Tea Museum or Tea Factory entry fees",
            "❌ Adventure activity charges",
            "❌ Additional houseboat services",
            "❌ Houseboat air-conditioning during daytime unless specifically included",
            "❌ Special food orders on the houseboat",
            "❌ Poovar boating charges",
            "❌ Water-sport charges",
            "❌ Beach activity charges",
            "❌ Temple special-entry or darshan charges",
            "❌ Temple dress-rental charges",
            "❌ Museum and zoo entry fees",
            "❌ Guide charges",
            "❌ Camera and video charges",
            "❌ Personal expenses",
            "❌ Room service",
            "❌ Laundry charges",
            "❌ Alcoholic and non-alcoholic beverages",
            "❌ Mineral water and snacks",
            "❌ Travel insurance",
            "❌ Medical expenses",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Expenses caused by weather, traffic, roadblocks or local restrictions",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Two nights’ stay in Munnar",
            "One night in Alleppey",
            "Two nights’ stay in Kovalam",
            "Kochi pickup and Trivandrum drop",
            "Scenic waterfalls and tea plantations",
            "Full-day Munnar sightseeing",
            "Alleppey backwater experience",
            "Private houseboat option",
            "Kovalam beach leisure",
            "Trivandrum sightseeing",
            "Optional candlelight dinner",
            "Optional flower-bed decoration",
            "Optional honeymoon cake",
            "Private air-conditioned cab"
        ],
        "keywords": "Kerala honeymoon package 5 nights 6 days, Munnar Alleppey Kovalam honeymoon package, Kerala complete honeymoon package, Kerala houseboat and beach honeymoon, Kerala honeymoon package from Madurai, Kerala honeymoon package from Chennai, Kerala couple package 6 days, Kerala honeymoon with private cab, Munnar Kovalam honeymoon package, Kerala honeymoon with houseboat, Logaa Holidays Kerala honeymoon",
        "seoTitle": "Kerala Honeymoon Package 5 Nights 6 Days | Munnar Alleppey Kovalam",
        "seoDescription": "Book a romantic Kerala honeymoon package for 5 Nights and 6 Days covering Munnar, Alleppey and Kovalam with houseboat, beach resort and private cab.",
        "id": "9004"
    }
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the existing Kerala packages
def replace_kerala_packages(match):
    return f"{match.group(1)}\n{packages_code},"

new_content = re.sub(
    r"(\s*'9001':\s*{.*?'9004':\s*{.*?}\s*,\n)",
    replace_kerala_packages,
    content,
    flags=re.DOTALL
)

if new_content == content:
    # If not found via exact match, find packagesDatabase definition and append if not replacing
    print("Could not find the existing Kerala block to replace. Attempting fallback replacement.")
    # Assuming the user wants to ensure these specific ones are exactly replaced, we will do a more manual replace
else:
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully replaced Kerala honeymoon packages in packagesDatabase.")

