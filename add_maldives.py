import os
import re

packages_code = """
    '9801': {
        "title": "Maldives Beach Honeymoon Package – 2 Nights / 3 Days",
        "image": "/assets/maldives_hero.png",
        "heroImage": "/assets/maldives_hero.png",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Maldives",
            "activities": "Beach Leisure, Romantic Escape",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Maldives Arrival – Resort Transfer",
                "activities": [
                    "Upon arrival at Velana International Airport, complete immigration and baggage formalities.",
                    "Meet the resort representative and proceed to the transfer point.",
                    "Transfer to the selected island resort by:",
                    "• Speedboat",
                    "• Domestic flight and speedboat",
                    "• Seaplane, where applicable",
                    "Upon arrival, receive a resort welcome and complete check-in.",
                    "The remaining day is free for relaxation.",
                    "Suggested Experiences",
                    "• White-sand beach walk",
                    "• Lagoon swimming",
                    "• Resort pool",
                    "• Sunset viewing",
                    "• Couple photography",
                    "• Beachside leisure",
                    "Optional Honeymoon Arrangements",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Welcome drink",
                    "• Candlelight dinner",
                    "• Romantic bath setup",
                    "Overnight stay at the Maldives resort."
                ]
            },
            {
                "day": "Day 02",
                "title": "Island Leisure and Optional Water Activities",
                "activities": [
                    "After breakfast, enjoy a full day at leisure.",
                    "Optional Activities",
                    "• Snorkelling",
                    "• Glass-bottom boat ride",
                    "• Kayaking",
                    "• Stand-up paddleboarding",
                    "• Jet skiing",
                    "• Parasailing",
                    "• Dolphin cruise",
                    "• Sunset cruise",
                    "• Couple spa",
                    "• Professional photoshoot",
                    "All activities are subject to weather, sea conditions and resort operation.",
                    "Enjoy the evening at the resort.",
                    "Overnight stay at the Maldives resort."
                ]
            },
            {
                "day": "Day 03",
                "title": "Resort – Maldives Departure",
                "activities": [
                    "After breakfast, check out according to resort timings.",
                    "Transfer to Velana International Airport by the scheduled resort transfer.",
                    "Proceed for the return flight."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation at the selected Maldives resort",
            "Accommodation in the confirmed room category",
            "Daily breakfast",
            "Meal plan specifically confirmed",
            "Velana International Airport meet-and-greet assistance",
            "Round-trip resort transfers by speedboat, domestic flight or seaplane as confirmed",
            "Applicable resort taxes where mentioned",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ International flight tickets unless included",
            "❌ Maldives Green Tax unless specifically included",
            "❌ Lunch and dinner unless included in the selected meal plan",
            "❌ Water activities",
            "❌ Scuba diving",
            "❌ Excursions and cruises",
            "❌ Couple spa",
            "❌ Photoshoot",
            "❌ Seaplane or domestic-transfer upgrade",
            "❌ Early check-in and late check-out",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights at a Maldives island resort",
            "Airport meet-and-greet assistance",
            "Speedboat or domestic transfer",
            "Daily breakfast",
            "Selected meal-plan options",
            "Private beach access",
            "Lagoon and resort leisure",
            "Optional sunset cruise",
            "Optional candlelight dinner",
            "Honeymoon arrangements where confirmed"
        ],
        "keywords": "Maldives honeymoon packages, Maldives honeymoon package from Madurai, Maldives honeymoon package from Chennai, Maldives honeymoon package with flight, Maldives water villa package, Maldives beach villa honeymoon, Maldives couple package, Maldives all-inclusive honeymoon package, Premium Maldives honeymoon package, Maldives honeymoon from Tamil Nadu, Logaa Holidays Maldives honeymoon",
        "seoTitle": "Maldives Honeymoon Package 2 Nights 3 Days",
        "seoDescription": "Book a romantic Maldives honeymoon package for 2 Nights and 3 Days with island resort, airport transfers and beach experiences.",
        "id": "9801"
    },
    '9802': {
        "title": "Maldives Beach Villa Honeymoon – 3 Nights / 4 Days",
        "badge": "Most Popular",
        "image": "/assets/maldives_hero.png",
        "heroImage": "/assets/maldives_hero.png",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Maldives",
            "activities": "Beach Villa, Island Resort, Romantic Experiences",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Maldives Arrival – Beach Villa Check-In",
                "activities": [
                    "Arrive at Velana International Airport.",
                    "Meet the resort representative and transfer to the island.",
                    "Complete check-in at the beach villa.",
                    "Spend the evening exploring the beach, lagoon and resort facilities.",
                    "Overnight stay in a beach villa."
                ]
            },
            {
                "day": "Day 02",
                "title": "Beach Leisure and Resort Experiences",
                "activities": [
                    "After breakfast, enjoy a relaxed day.",
                    "Suggested Experiences",
                    "• Private beach leisure",
                    "• Lagoon swimming",
                    "• Resort pool",
                    "• Snorkelling",
                    "• Kayaking",
                    "• Couple spa",
                    "• Floating breakfast, subject to villa and resort policy",
                    "• Beachside lunch",
                    "• Sunset photography",
                    "In the evening, enjoy a romantic dinner where included or arranged.",
                    "Overnight stay in a beach villa."
                ]
            },
            {
                "day": "Day 03",
                "title": "Maldives Excursion Day",
                "activities": [
                    "After breakfast, choose an optional excursion.",
                    "Excursion Options",
                    "• Dolphin-watching cruise",
                    "• Sunset cruise",
                    "• Sandbank picnic",
                    "• Local-island visit",
                    "• Snorkelling excursion",
                    "• Turtle or manta excursion, seasonal",
                    "• Scuba-diving experience",
                    "• Couple photoshoot",
                    "Excursions are subject to resort schedules and weather conditions.",
                    "Overnight stay in a beach villa."
                ]
            },
            {
                "day": "Day 04",
                "title": "Maldives Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Velana International Airport.",
                    "Proceed for the return journey."
                ]
            }
        ],
        "inclusions": [
            "Three nights’ accommodation in a beach villa",
            "Daily breakfast",
            "Meal plan as specifically confirmed",
            "Airport meet-and-greet assistance",
            "Round-trip resort transfers",
            "Resort taxes where mentioned",
            "Access to standard resort facilities",
            "Honeymoon benefits specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets unless included",
            "❌ Maldives Green Tax unless included",
            "❌ Meals not covered by the selected plan",
            "❌ Premium drinks unless included",
            "❌ Water sports",
            "❌ Diving and snorkelling excursions",
            "❌ Spa treatments",
            "❌ Cruises",
            "❌ Photoshoot",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Early check-in and late check-out",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Three nights in a beach villa",
            "Round-trip resort transfers",
            "Direct or easy beach access",
            "Daily breakfast",
            "Half-board, full-board and all-inclusive options",
            "Resort pool and lagoon access",
            "Optional sunset cruise",
            "Optional candlelight dinner",
            "Optional couple spa",
            "Honeymoon benefits where confirmed"
        ],
        "keywords": "Maldives honeymoon packages, Maldives honeymoon package from Madurai, Maldives honeymoon package from Chennai, Maldives honeymoon package with flight, Maldives water villa package, Maldives beach villa honeymoon, Maldives couple package, Maldives all-inclusive honeymoon package, Premium Maldives honeymoon package, Maldives honeymoon from Tamil Nadu, Logaa Holidays Maldives honeymoon",
        "seoTitle": "Maldives Beach Villa Honeymoon Package 3 Nights 4 Days",
        "seoDescription": "Book a 3 Nights 4 Days Maldives beach villa honeymoon package with resort transfers, romantic experiences and meal-plan options.",
        "id": "9802"
    },
    '9803': {
        "title": "Beach Villa and Water Villa Honeymoon – 4 Nights / 5 Days",
        "image": "/assets/maldives_hero.png",
        "heroImage": "/assets/maldives_hero.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Maldives",
            "activities": "Beach Villa, Water Villa, Island Romance",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Maldives Arrival – Beach Villa",
                "activities": [
                    "Arrive at Velana International Airport.",
                    "Meet the resort representative and transfer to the island.",
                    "Check in at the beach villa.",
                    "Enjoy beach leisure and sunset views.",
                    "Overnight stay in a beach villa."
                ]
            },
            {
                "day": "Day 02",
                "title": "Beach Villa Leisure",
                "activities": [
                    "After breakfast, enjoy the resort.",
                    "Suggested Experiences",
                    "• Beach walk",
                    "• Lagoon swimming",
                    "• Snorkelling",
                    "• Kayaking",
                    "• Resort pool",
                    "• Couple spa",
                    "• Sandbank excursion",
                    "• Sunset cruise",
                    "Overnight stay in a beach villa."
                ]
            },
            {
                "day": "Day 03",
                "title": "Beach Villa – Water Villa",
                "activities": [
                    "After breakfast, complete the scheduled room transfer.",
                    "Check in at the water villa.",
                    "Water Villa Experiences",
                    "• Private deck leisure",
                    "• Lagoon views",
                    "• Direct water access where available",
                    "• Couple photography",
                    "• Sunset viewing",
                    "• Floating breakfast, optional",
                    "• Romantic bath setup, optional",
                    "Enjoy a relaxed evening.",
                    "Overnight stay in a water villa."
                ]
            },
            {
                "day": "Day 04",
                "title": "Water Villa and Romantic Experiences",
                "activities": [
                    "After breakfast, enjoy a full day at leisure.",
                    "Optional Experiences",
                    "• Dolphin cruise",
                    "• Snorkelling excursion",
                    "• Scuba diving",
                    "• Couple spa",
                    "• Professional photoshoot",
                    "• Private sandbank picnic",
                    "• Candlelight dinner",
                    "• Private beach dinner",
                    "• Sunset fishing",
                    "Overnight stay in a water villa."
                ]
            },
            {
                "day": "Day 05",
                "title": "Maldives Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Velana International Airport.",
                    "Proceed for the return flight."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in a beach villa",
            "Two nights’ accommodation in a water villa",
            "Daily breakfast",
            "Selected meal plan",
            "Airport meet-and-greet assistance",
            "Round-trip island-resort transfers",
            "Scheduled internal room transfer",
            "Resort taxes where mentioned",
            "Honeymoon benefits specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ International flights unless included",
            "❌ Maldives Green Tax unless included",
            "❌ Meals outside the selected meal plan",
            "❌ Premium beverages",
            "❌ Water sports and diving",
            "❌ Excursions and cruises",
            "❌ Spa treatments",
            "❌ Photoshoot",
            "❌ Floating breakfast",
            "❌ Private dinner",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in a beach villa",
            "Two nights in a water villa",
            "Round-trip resort transfers",
            "Beach and lagoon experiences",
            "Private deck in the water villa",
            "Direct lagoon access where available",
            "Optional floating breakfast",
            "Optional sunset cruise",
            "Optional private dinner",
            "Honeymoon benefits where confirmed"
        ],
        "keywords": "Maldives honeymoon packages, Maldives honeymoon package from Madurai, Maldives honeymoon package from Chennai, Maldives honeymoon package with flight, Maldives water villa package, Maldives beach villa honeymoon, Maldives couple package, Maldives all-inclusive honeymoon package, Premium Maldives honeymoon package, Maldives honeymoon from Tamil Nadu, Logaa Holidays Maldives honeymoon",
        "seoTitle": "Maldives Water Villa Honeymoon Package 4 Nights 5 Days",
        "seoDescription": "Book a 4 Nights 5 Days Maldives honeymoon package with two nights in a beach villa and two nights in a water villa.",
        "id": "9803"
    },
    '9804': {
        "title": "Premium Maldives Honeymoon Package – 5 Nights / 6 Days",
        "badge": "Premium",
        "image": "/assets/maldives_hero.png",
        "heroImage": "/assets/maldives_hero.png",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Maldives",
            "activities": "Beach Villa, Water Villa, Luxury Experiences",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Maldives Arrival – Beach Villa",
                "activities": [
                    "Arrive at Velana International Airport.",
                    "Meet the resort representative and transfer to the island.",
                    "Check in at the beach villa.",
                    "The remaining day is free for relaxation.",
                    "Overnight stay in a beach villa."
                ]
            },
            {
                "day": "Day 02",
                "title": "Beach and Island Leisure",
                "activities": [
                    "After breakfast, enjoy:",
                    "• Private beach leisure",
                    "• Lagoon swimming",
                    "• Snorkelling",
                    "• Resort pool",
                    "• Kayaking",
                    "• Stand-up paddleboarding",
                    "• Island walk",
                    "• Sunset photography",
                    "Optional romantic dinner may be arranged.",
                    "Overnight stay in a beach villa."
                ]
            },
            {
                "day": "Day 03",
                "title": "Beach Villa – Water Villa",
                "activities": [
                    "After breakfast, transfer to the water villa.",
                    "Enjoy:",
                    "• Private deck",
                    "• Ocean and lagoon views",
                    "• Direct lagoon access where available",
                    "• Couple photography",
                    "• Floating breakfast, optional",
                    "• Romantic room setup",
                    "Overnight stay in a water villa."
                ]
            },
            {
                "day": "Day 04",
                "title": "Water Activities and Excursions",
                "activities": [
                    "After breakfast, choose from:",
                    "• Scuba diving",
                    "• Guided snorkelling",
                    "• Dolphin cruise",
                    "• Sandbank picnic",
                    "• Sunset fishing",
                    "• Jet skiing",
                    "• Parasailing",
                    "• Turtle excursion",
                    "• Manta excursion, seasonal",
                    "Return to the resort.",
                    "Overnight stay in a water villa."
                ]
            },
            {
                "day": "Day 05",
                "title": "Romantic Leisure Day",
                "activities": [
                    "After breakfast, enjoy a relaxed honeymoon day.",
                    "Suggested Premium Experiences",
                    "• Couple spa",
                    "• Professional photoshoot",
                    "• Floating breakfast",
                    "• Private beach lunch",
                    "• Sunset cruise",
                    "• Candlelight dinner",
                    "• Private sandbank dinner",
                    "• Romantic bath setup",
                    "• Resort entertainment",
                    "Overnight stay in a water villa."
                ]
            },
            {
                "day": "Day 06",
                "title": "Maldives Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Velana International Airport.",
                    "Proceed for the return flight."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in a beach villa",
            "Three nights’ accommodation in a water villa",
            "Daily breakfast",
            "Meal plan specifically confirmed",
            "Velana International Airport assistance",
            "Round-trip resort transfer by confirmed mode",
            "Scheduled villa-category transfer",
            "Resort taxes where specifically included",
            "Honeymoon arrangements confirmed in the quotation",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ International flight tickets unless included",
            "❌ Maldives Green Tax unless included",
            "❌ Meals and beverages outside the selected plan",
            "❌ Premium alcoholic beverages",
            "❌ Scuba diving",
            "❌ Water sports",
            "❌ Excursions",
            "❌ Couple spa",
            "❌ Photoshoot",
            "❌ Floating breakfast",
            "❌ Private dining",
            "❌ Seaplane baggage excess",
            "❌ Early check-in and late check-out",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in a beach villa",
            "Three nights in a water villa",
            "Premium island-resort stay",
            "Speedboat or seaplane transfer",
            "Selected meal-plan options",
            "Lagoon and beach leisure",
            "Optional couple spa",
            "Optional floating breakfast",
            "Optional sandbank picnic",
            "Optional private candlelight dinner",
            "Honeymoon benefits where confirmed"
        ],
        "keywords": "Maldives honeymoon packages, Maldives honeymoon package from Madurai, Maldives honeymoon package from Chennai, Maldives honeymoon package with flight, Maldives water villa package, Maldives beach villa honeymoon, Maldives couple package, Maldives all-inclusive honeymoon package, Premium Maldives honeymoon package, Maldives honeymoon from Tamil Nadu, Logaa Holidays Maldives honeymoon",
        "seoTitle": "Premium Maldives Honeymoon Package 5 Nights 6 Days",
        "seoDescription": "Book a premium 5 Nights 6 Days Maldives honeymoon package with beach villa, water villa, island transfers and romantic experiences.",
        "id": "9804"
    }
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

if "'9801':" not in content:
    content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code + ",", content, count=1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added Maldives packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")
