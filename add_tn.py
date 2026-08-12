import re

packages_code = """
    '9201': {
        "title": "Premium Kodaikanal Honeymoon Package – 2 Nights / 3 Days",
        "badge": "Couple Favourite",
        "image": "/assets/kerala_honeymoon.png",
        "heroImage": "/assets/kerala_honeymoon.png",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Kodaikanal",
            "activities": "Lakes, Waterfalls, Pine Forests, Leisure",
            "themes": "Honeymoon, Romantic, Hills and Mountains"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Madurai Arrival – Kodaikanal",
                "activities": [
                    "Pickup from Madurai Airport, Railway Station, Bus Stand or preferred city location.",
                    "Proceed towards Kodaikanal by private air-conditioned vehicle.",
                    "Places Covered",
                    "• Silver Cascade Falls",
                    "• Coaker’s Walk",
                    "• Bryant Park",
                    "• Kodaikanal Lake",
                    "• Upper Lake View",
                    "• Kodaikanal local market",
                    "Upon arrival, check in at the selected hotel or resort.",
                    "The evening is free for leisure.",
                    "Optional Romantic Arrangements",
                    "• Welcome drink",
                    "• Honeymoon cake",
                    "• Flower-bed decoration",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Kodaikanal."
                ]
            },
            {
                "day": "Day 02",
                "title": "Kodaikanal Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for full-day sightseeing.",
                    "Places Covered",
                    "• Pine Forest",
                    "• Guna Caves viewpoint",
                    "• Pillar Rocks",
                    "• Green Valley View",
                    "• Moir Point",
                    "• Pambar Falls, subject to access",
                    "• La Saleth Church",
                    "• Local chocolate and shopping outlets",
                    "Optional Mannavanur Lake visit may be arranged at an additional cost.",
                    "Return to the hotel.",
                    "Overnight stay in Kodaikanal."
                ]
            },
            {
                "day": "Day 03",
                "title": "Kodaikanal – Madurai Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Proceed to Madurai.",
                    "Drop at the Airport, Railway Station, Bus Stand or preferred city location."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Kodaikanal",
            "Daily breakfast",
            "Private Madurai pickup and drop",
            "Private air-conditioned sedan",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "Hill charges",
            "Sightseeing as per itinerary",
            "Honeymoon arrangements specifically mentioned in the quotation",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Boating charges",
            "❌ Cycling and horse-riding charges",
            "❌ Mannavanur excursion charges",
            "❌ Adventure activities",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room service and beverages",
            "❌ Travel insurance",
            "❌ Early check-in and late check-out",
            "❌ Extra vehicle usage",
            "❌ Additional sightseeing",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Kodaikanal",
            "Private Madurai pickup and drop",
            "Scenic hill-station drive",
            "Kodaikanal Lake experience",
            "Pine Forest and Pillar Rocks",
            "Leisure time for couples",
            "Optional valley-view room",
            "Optional candlelight dinner",
            "Optional flower decoration",
            "Private sedan for the complete trip"
        ],
        "keywords": "Tamil Nadu honeymoon packages, Premium Tamil Nadu honeymoon package, Kodaikanal honeymoon package, Ooty honeymoon package, Ooty Coonoor honeymoon tour, Kanyakumari couple package, Tamil Nadu honeymoon package from Madurai, Tamil Nadu honeymoon packages from Chennai, Tamil Nadu couple tour package, South India honeymoon package, Logaa Holidays honeymoon package",
        "seoTitle": "Premium Kodaikanal Honeymoon Package 2 Nights 3 Days",
        "seoDescription": "Book premium Kodaikanal honeymoon package for 2 Nights and 3 Days with romantic resorts, scenic hill-station drive and private cab.",
        "id": "9201"
    },
    '9202': {
        "title": "Premium Ooty and Coonoor Honeymoon Package – 3 Nights / 4 Days",
        "badge": "Most Popular",
        "image": "/assets/kerala_honeymoon.png",
        "heroImage": "/assets/kerala_honeymoon.png",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Ooty, Coonoor",
            "activities": "Tea Gardens, Lakes, Mountain Viewpoints",
            "themes": "Honeymoon, Romantic, Hills and Mountains"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Coimbatore – Ooty",
                "activities": [
                    "Pickup from Coimbatore Airport, Railway Station or preferred location.",
                    "Proceed towards Ooty.",
                    "Places Covered",
                    "• Ooty Botanical Garden",
                    "• Government Rose Garden",
                    "• Ooty Lake",
                    "• Thread Garden, optional",
                    "• Ooty local market",
                    "Check in at the selected hotel or resort.",
                    "Overnight stay in Ooty."
                ]
            },
            {
                "day": "Day 02",
                "title": "Ooty and Pykara Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Doddabetta Peak",
                    "• Tea Factory and Tea Museum",
                    "• Pine Forest",
                    "• Shooting Point",
                    "• Wenlock Downs",
                    "• Pykara Waterfalls",
                    "• Pykara Lake",
                    "• Scenic viewpoints",
                    "Optional boating may be enjoyed at an additional cost.",
                    "Overnight stay in Ooty."
                ]
            },
            {
                "day": "Day 03",
                "title": "Coonoor Sightseeing",
                "activities": [
                    "After breakfast, proceed to Coonoor.",
                    "Places Covered",
                    "• Sim’s Park",
                    "• Lamb’s Rock",
                    "• Dolphin’s Nose",
                    "• Tea gardens",
                    "• Valley viewpoints",
                    "• Coonoor local market",
                    "Optional toy-train tickets may be arranged subject to availability.",
                    "Return to Ooty.",
                    "Overnight stay in Ooty."
                ]
            },
            {
                "day": "Day 04",
                "title": "Ooty – Coimbatore Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed to Coimbatore.",
                    "Drop at Airport, Railway Station or preferred location."
                ]
            }
        ],
        "inclusions": [
            "Three nights’ accommodation in Ooty",
            "Daily breakfast",
            "Private Coimbatore pickup and drop",
            "Private air-conditioned vehicle",
            "Ooty, Pykara and Coonoor sightseeing",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "Hill charges",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight and train tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Toy-train tickets",
            "❌ Boating charges",
            "❌ Tea Factory entry fees",
            "❌ Horse riding",
            "❌ Adventure activities",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room service and beverages",
            "❌ Travel insurance",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Additional sightseeing",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Three nights in Ooty",
            "Private Coimbatore pickup and drop",
            "Ooty, Pykara and Coonoor sightseeing",
            "Tea garden experience",
            "Optional Nilgiri Mountain Railway journey",
            "Premium resort and cottage options",
            "Optional couple photoshoot",
            "Optional romantic room decoration",
            "Private sightseeing vehicle"
        ],
        "keywords": "Tamil Nadu honeymoon packages, Premium Tamil Nadu honeymoon package, Kodaikanal honeymoon package, Ooty honeymoon package, Ooty Coonoor honeymoon tour, Kanyakumari couple package, Tamil Nadu honeymoon package from Madurai, Tamil Nadu honeymoon packages from Chennai, Tamil Nadu couple tour package, South India honeymoon package, Logaa Holidays honeymoon package",
        "seoTitle": "Premium Ooty and Coonoor Honeymoon Package 3 Nights 4 Days",
        "seoDescription": "Book premium Ooty and Coonoor honeymoon package for 3 Nights and 4 Days with tea gardens, optional toy train and romantic resort stay.",
        "id": "9202"
    },
    '9203': {
        "title": "Premium Kodaikanal and Kanyakumari Honeymoon – 4 Nights / 5 Days",
        "badge": "Romantic Escape",
        "image": "/assets/kerala_honeymoon.png",
        "heroImage": "/assets/kerala_honeymoon.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Kodaikanal, Kanyakumari",
            "activities": "Hills, Coast, Sunrise and Sunset",
            "themes": "Honeymoon, Romantic, Hills and Coastal"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Madurai – Kodaikanal",
                "activities": [
                    "Pickup from Madurai.",
                    "Proceed towards Kodaikanal.",
                    "Places Covered",
                    "• Silver Cascade Falls",
                    "• Coaker’s Walk",
                    "• Bryant Park",
                    "• Kodaikanal Lake",
                    "• Upper Lake View",
                    "• Local market",
                    "Check in at the hotel.",
                    "Overnight stay in Kodaikanal."
                ]
            },
            {
                "day": "Day 02",
                "title": "Kodaikanal Sightseeing",
                "activities": [
                    "After breakfast, visit:",
                    "• Pine Forest",
                    "• Guna Caves viewpoint",
                    "• Pillar Rocks",
                    "• Green Valley View",
                    "• Moir Point",
                    "• Pambar Falls, subject to access",
                    "• La Saleth Church",
                    "• Local shopping",
                    "Overnight stay in Kodaikanal."
                ]
            },
            {
                "day": "Day 03",
                "title": "Kodaikanal – Kanyakumari",
                "activities": [
                    "After breakfast, check out and proceed towards Kanyakumari.",
                    "Upon arrival, check in at the selected hotel.",
                    "Later, visit:",
                    "• Kanyakumari Sunset Point",
                    "• Kanyakumari Beach",
                    "• Triveni Sangam",
                    "• Local market",
                    "Overnight stay in Kanyakumari."
                ]
            },
            {
                "day": "Day 04",
                "title": "Kanyakumari Sightseeing",
                "activities": [
                    "Early morning, enjoy sunrise views, subject to weather.",
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Bhagavathi Amman Temple",
                    "• Vivekananda Rock Memorial",
                    "• Thiruvalluvar Statue",
                    "• Glass Bridge, subject to operation",
                    "• Gandhi Memorial",
                    "• Triveni Sangam",
                    "• Vattakottai Fort",
                    "• Suchindram Thanumalayan Temple, optional",
                    "Return to the hotel.",
                    "Overnight stay in Kanyakumari."
                ]
            },
            {
                "day": "Day 05",
                "title": "Kanyakumari – Trivandrum Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Depending on departure time, visit:",
                    "• Padmanabhapuram Palace",
                    "• Poovar, optional",
                    "• Kovalam Beach, optional",
                    "• Azhimala Shiva Temple, optional",
                    "Drop at Trivandrum Airport, Railway Station or city location."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Kodaikanal",
            "Two nights’ accommodation in Kanyakumari",
            "Daily breakfast",
            "Madurai pickup",
            "Trivandrum drop",
            "Private air-conditioned sedan",
            "Sightseeing as per itinerary",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "Hill charges",
            "State permit charges, where applicable",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight and train tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Kanyakumari ferry tickets",
            "❌ Boating charges",
            "❌ Horse riding and cycling charges",
            "❌ Padmanabhapuram Palace entry",
            "❌ Poovar boating",
            "❌ Guide charges",
            "❌ Temple special-entry charges",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Extra sightseeing",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Kodaikanal",
            "Two nights in Kanyakumari",
            "Madurai pickup and Trivandrum drop",
            "Hill and coastal sightseeing",
            "Kodaikanal Lake and viewpoints",
            "Kanyakumari sunrise and sunset",
            "Private cab for the full tour",
            "Optional premium resort stay",
            "Optional sea-view room",
            "Optional romantic dinner"
        ],
        "keywords": "Tamil Nadu honeymoon packages, Premium Tamil Nadu honeymoon package, Kodaikanal honeymoon package, Ooty honeymoon package, Ooty Coonoor honeymoon tour, Kanyakumari couple package, Tamil Nadu honeymoon package from Madurai, Tamil Nadu honeymoon packages from Chennai, Tamil Nadu couple tour package, South India honeymoon package, Logaa Holidays honeymoon package",
        "seoTitle": "Kodaikanal and Kanyakumari Honeymoon Package 4 Nights 5 Days",
        "seoDescription": "Book premium Kodaikanal and Kanyakumari honeymoon package for 4 Nights 5 Days. Enjoy hill-station charm and coastal beauty with private cab.",
        "id": "9203"
    },
    '9204': {
        "title": "Premium Complete Tamil Nadu Honeymoon – 6 Nights / 7 Days",
        "badge": "Complete Premium Honeymoon",
        "image": "/assets/kerala_honeymoon.png",
        "heroImage": "/assets/kerala_honeymoon.png",
        "overview": {
            "duration": "6 Nights / 7 Days",
            "destination": "Ooty, Kodaikanal, Kanyakumari",
            "activities": "Hills, Lakes, Coast, Sunrise and Sunset",
            "themes": "Honeymoon, Romantic, Complete Tour"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Coimbatore – Ooty",
                "activities": [
                    "Pickup from Coimbatore.",
                    "Proceed towards Ooty.",
                    "Places Covered",
                    "• Botanical Garden",
                    "• Rose Garden",
                    "• Ooty Lake",
                    "• Local market",
                    "Check in at the hotel.",
                    "Overnight stay in Ooty."
                ]
            },
            {
                "day": "Day 02",
                "title": "Ooty and Coonoor Sightseeing",
                "activities": [
                    "After breakfast, visit:",
                    "• Doddabetta Peak",
                    "• Tea Factory and Tea Museum",
                    "• Sim’s Park",
                    "• Lamb’s Rock",
                    "• Dolphin’s Nose",
                    "• Coonoor tea gardens",
                    "• Valley viewpoints",
                    "Return to Ooty.",
                    "Overnight stay in Ooty."
                ]
            },
            {
                "day": "Day 03",
                "title": "Ooty – Kodaikanal",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed towards Kodaikanal.",
                    "This is primarily a transfer day due to the travel distance.",
                    "Upon arrival, check in and relax.",
                    "Overnight stay in Kodaikanal."
                ]
            },
            {
                "day": "Day 04",
                "title": "Kodaikanal Sightseeing",
                "activities": [
                    "After breakfast, visit:",
                    "• Coaker’s Walk",
                    "• Bryant Park",
                    "• Kodaikanal Lake",
                    "• Pine Forest",
                    "• Guna Caves viewpoint",
                    "• Pillar Rocks",
                    "• Green Valley View",
                    "• Moir Point",
                    "• Silver Cascade Falls",
                    "• Local market",
                    "Overnight stay in Kodaikanal."
                ]
            },
            {
                "day": "Day 05",
                "title": "Kodaikanal – Kanyakumari",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed towards Kanyakumari.",
                    "Upon arrival, check in.",
                    "Later, enjoy:",
                    "• Kanyakumari Beach",
                    "• Triveni Sangam",
                    "• Sunset Point",
                    "• Local shopping",
                    "Overnight stay in Kanyakumari."
                ]
            },
            {
                "day": "Day 06",
                "title": "Kanyakumari Full-Day Sightseeing",
                "activities": [
                    "Early morning, enjoy sunrise views.",
                    "Later, visit:",
                    "• Bhagavathi Amman Temple",
                    "• Vivekananda Rock Memorial",
                    "• Thiruvalluvar Statue",
                    "• Glass Bridge, subject to operation",
                    "• Gandhi Memorial",
                    "• Vattakottai Fort",
                    "• Suchindram Temple, optional",
                    "Return to the hotel.",
                    "Overnight stay in Kanyakumari."
                ]
            },
            {
                "day": "Day 07",
                "title": "Kanyakumari – Trivandrum Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Depending on departure time, visit:",
                    "• Padmanabhapuram Palace",
                    "• Poovar",
                    "• Kovalam Beach",
                    "• Azhimala Shiva Temple",
                    "Drop at Trivandrum Airport, Railway Station or city location."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Ooty",
            "Two nights’ accommodation in Kodaikanal",
            "Two nights’ accommodation in Kanyakumari",
            "Daily breakfast",
            "Coimbatore pickup",
            "Trivandrum drop",
            "Private air-conditioned vehicle",
            "Ooty, Coonoor, Kodaikanal and Kanyakumari sightseeing",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "Hill charges",
            "State permit charges, where applicable",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight and train tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Ooty and Kodaikanal boating charges",
            "❌ Toy-train tickets",
            "❌ Tea Factory entry fees",
            "❌ Horse riding and adventure activities",
            "❌ Kanyakumari ferry tickets",
            "❌ Padmanabhapuram Palace entry",
            "❌ Poovar boating",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room service and beverages",
            "❌ Travel insurance",
            "❌ Extra vehicle usage",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Expenses caused by traffic, weather or road closures",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights each in Ooty, Kodaikanal and Kanyakumari",
            "Coimbatore pickup and Trivandrum drop",
            "Ooty, Coonoor and Pykara sightseeing",
            "Complete Kodaikanal sightseeing",
            "Kanyakumari sunrise and sunset",
            "Private cab for the complete tour",
            "Premium resort and room options",
            "Optional candlelight dinner",
            "Optional flower decoration and cake",
            "Couple-friendly itinerary"
        ],
        "keywords": "Tamil Nadu honeymoon packages, Premium Tamil Nadu honeymoon package, Kodaikanal honeymoon package, Ooty honeymoon package, Ooty Coonoor honeymoon tour, Kanyakumari couple package, Tamil Nadu honeymoon package from Madurai, Tamil Nadu honeymoon packages from Chennai, Tamil Nadu couple tour package, South India honeymoon package, Logaa Holidays honeymoon package",
        "seoTitle": "Premium Complete Tamil Nadu Honeymoon Package 6 Nights 7 Days",
        "seoDescription": "Book premium Complete Tamil Nadu honeymoon package for 6 Nights 7 Days covering Ooty, Kodaikanal and Kanyakumari with couple-friendly resorts and private cab.",
        "id": "9204"
    }
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

import re
new_content = re.sub(r"(\s*'9201':\s*{.*?'9204':\s*{.*?}\s*,?)", "", content, flags=re.DOTALL)

idx = new_content.find('\n};\n\n// Helper normalization function')
if idx != -1:
    final_content = new_content[:idx] + ',\n' + packages_code + '\n};\n\n// Helper normalization function' + new_content[idx + len('\n};\n\n// Helper normalization function'):]
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(final_content)
    print("Successfully injected Tamil Nadu honeymoon packages.")
else:
    print("Failed to find injection point.")
