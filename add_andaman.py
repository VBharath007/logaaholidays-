import os
import re

packages_code = """
    '9601': {
        "title": "Port Blair Honeymoon Package – 2 Nights / 3 Days",
        "image": "/assets/andaman_hero.png",
        "heroImage": "/assets/andaman_hero.png",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Port Blair",
            "activities": "Sightseeing, Beaches, Historic Tour",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Port Blair Arrival – Cellular Jail and Corbyn’s Cove Beach",
                "activities": [
                    "Upon arrival at Veer Savarkar International Airport, Port Blair, meet our representative and transfer to the selected accommodation.",
                    "Complete check-in and relax.",
                    "Later, proceed for local sightseeing.",
                    "Places Covered",
                    "• Corbyn’s Cove Beach",
                    "• Cellular Jail",
                    "• Cellular Jail Museum",
                    "• Light and Sound Show",
                    "Visit Corbyn’s Cove Beach, one of the nearest beaches to Port Blair, known for its scenic coastal road and peaceful surroundings.",
                    "Continue to Cellular Jail and explore its historic galleries and museum sections.",
                    "In the evening, attend the Light and Sound Show, subject to ticket availability and operation.",
                    "Return to the accommodation.",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 02",
                "title": "Port Blair Sightseeing or Optional Island Excursion",
                "activities": [
                    "After breakfast, choose one of the following sightseeing plans.",
                    "Option 1: Port Blair City Tour",
                    "• Samudrika Naval Marine Museum",
                    "• Anthropological Museum",
                    "• Fisheries Museum",
                    "• Chatham Saw Mill",
                    "• Marina Park",
                    "• Aberdeen Bazaar",
                    "Option 2: Ross Island and North Bay Excursion",
                    "• Netaji Subhas Chandra Bose Island, formerly Ross Island",
                    "• Historic colonial ruins",
                    "• North Bay Island",
                    "• Coral-viewing experiences",
                    "• Optional snorkelling",
                    "• Optional glass-bottom boat ride",
                    "• Optional semi-submarine experience",
                    "Island excursion tickets and water activities are chargeable unless specifically included.",
                    "Return to Port Blair.",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 03",
                "title": "Port Blair Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Veer Savarkar International Airport according to the flight schedule."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Port Blair",
            "Daily breakfast",
            "Port Blair Airport pickup and drop",
            "Private local transfers",
            "Port Blair sightseeing as per itinerary",
            "Cellular Jail visit",
            "Light and Sound Show where confirmed",
            "Fuel charges",
            "Driver allowance",
            "Parking charges",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Ross Island and North Bay boat tickets unless included",
            "❌ Attraction entry tickets",
            "❌ Water activities",
            "❌ Snorkelling and scuba diving",
            "❌ Glass-bottom boat charges",
            "❌ Semi-submarine charges",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Port Blair",
            "Airport pickup and drop",
            "Cellular Jail visit",
            "Light and Sound Show",
            "Corbyn’s Cove Beach",
            "Optional Ross Island and North Bay excursion",
            "Private local transfers",
            "Optional honeymoon arrangements"
        ],
        "keywords": "Andaman honeymoon packages, Andaman honeymoon package from Madurai, Andaman honeymoon package from Chennai, Andaman honeymoon package with flight, Havelock honeymoon package, Neil Island honeymoon package, Port Blair honeymoon package, Andaman couple tour package, Andaman honeymoon with private cruise, Premium Andaman honeymoon package, Logaa Holidays Andaman honeymoon",
        "seoTitle": "Andaman Honeymoon Package 2 Nights 3 Days",
        "seoDescription": "Book a 2 Nights 3 Days Andaman honeymoon package covering Port Blair, Cellular Jail, Corbyn’s Cove Beach and romantic island experiences.",
        "id": "9601"
    },
    '9602': {
        "title": "Port Blair and Havelock Honeymoon – 3 Nights / 4 Days",
        "badge": "Most Popular",
        "image": "/assets/andaman_hero.png",
        "heroImage": "/assets/andaman_hero.png",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Port Blair, Havelock Island",
            "activities": "Sightseeing, Beaches, Cruise Transfers",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Port Blair Arrival – Cellular Jail and Light and Sound Show",
                "activities": [
                    "Upon arrival at Port Blair Airport, meet our representative and transfer to the accommodation.",
                    "Later, visit:",
                    "• Corbyn’s Cove Beach",
                    "• Cellular Jail",
                    "• Light and Sound Show",
                    "Return to the accommodation.",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 02",
                "title": "Port Blair – Havelock Island – Radhanagar Beach",
                "activities": [
                    "After breakfast, check out and transfer to the cruise terminal.",
                    "Board the scheduled private cruise to Havelock Island.",
                    "Private cruise options may include:",
                    "• Makruzz",
                    "• Nautika",
                    "• Green Ocean",
                    "• Other scheduled cruise operators",
                    "Upon arrival at Havelock Island, transfer to the selected accommodation.",
                    "Later, visit Radhanagar Beach, known for its white sand, blue waters and sunset views.",
                    "Romantic Experiences",
                    "• Sunset beach walk",
                    "• Couple photography",
                    "• Beach leisure",
                    "• Optional candlelight dinner",
                    "• Optional honeymoon cake",
                    "• Optional flower decoration",
                    "Return to the accommodation.",
                    "Overnight stay in Havelock Island."
                ]
            },
            {
                "day": "Day 03",
                "title": "Havelock Island – Port Blair",
                "activities": [
                    "After breakfast, enjoy leisure time.",
                    "Depending on the cruise schedule, optional sightseeing may include:",
                    "• Kalapathar Beach",
                    "• Govind Nagar Beach",
                    "• Vijay Nagar Beach",
                    "• Local café visit",
                    "• Beach photography",
                    "Later, transfer to the cruise terminal and board the scheduled cruise to Port Blair.",
                    "Upon arrival, transfer to the accommodation.",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 04",
                "title": "Port Blair Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Port Blair Airport."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Port Blair",
            "One night’s accommodation in Havelock Island",
            "Daily breakfast",
            "Port Blair Airport pickup and drop",
            "Port Blair–Havelock–Port Blair private cruise tickets",
            "Jetty transfers",
            "Private local sightseeing transfers",
            "Radhanagar Beach visit",
            "Cellular Jail and Light and Sound Show where confirmed",
            "Fuel charges",
            "Driver allowance",
            "Parking charges",
            "Honeymoon arrangements specifically included",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Cruise-class upgrade",
            "❌ Attraction entry tickets",
            "❌ Water activities",
            "❌ Scuba diving",
            "❌ Snorkelling",
            "❌ Sea walking",
            "❌ Kayaking",
            "❌ Personal expenses",
            "❌ Guide charges",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Port Blair",
            "One night in Havelock Island",
            "Private cruise transfer",
            "Radhanagar Beach",
            "Cellular Jail and Light and Sound Show",
            "Airport pickup and drop",
            "Optional sea-view room",
            "Optional candlelight dinner",
            "Private local transportation"
        ],
        "keywords": "Andaman honeymoon packages, Andaman honeymoon package from Madurai, Andaman honeymoon package from Chennai, Andaman honeymoon package with flight, Havelock honeymoon package, Neil Island honeymoon package, Port Blair honeymoon package, Andaman couple tour package, Andaman honeymoon with private cruise, Premium Andaman honeymoon package, Logaa Holidays Andaman honeymoon",
        "seoTitle": "Andaman Honeymoon Package 3 Nights 4 Days",
        "seoDescription": "Book a 3 Nights 4 Days Andaman honeymoon package covering Port Blair and Havelock Island with private cruise and Radhanagar Beach.",
        "id": "9602"
    },
    '9603': {
        "title": "Havelock and Neil Island Honeymoon – 4 Nights / 5 Days",
        "image": "/assets/andaman_hero.png",
        "heroImage": "/assets/andaman_hero.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Port Blair, Havelock Island, Neil Island",
            "activities": "Sightseeing, Beaches, Island Hopping",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Port Blair Arrival and Sightseeing",
                "activities": [
                    "Upon arrival at Port Blair Airport, transfer to the accommodation.",
                    "Later, visit:",
                    "• Corbyn’s Cove Beach",
                    "• Cellular Jail",
                    "• Light and Sound Show",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 02",
                "title": "Port Blair – Havelock Island – Radhanagar Beach",
                "activities": [
                    "After breakfast, transfer to the cruise terminal.",
                    "Board the scheduled private cruise to Havelock Island.",
                    "Upon arrival, transfer to the accommodation.",
                    "Later, visit:",
                    "• Radhanagar Beach",
                    "• Sunset viewpoint",
                    "• Beach leisure",
                    "Optional honeymoon arrangements can be organised in the evening.",
                    "Overnight stay in Havelock Island."
                ]
            },
            {
                "day": "Day 03",
                "title": "Havelock – Kalapathar Beach – Neil Island",
                "activities": [
                    "After breakfast, visit Kalapathar Beach.",
                    "Places Covered",
                    "• Kalapathar Beach",
                    "• Govind Nagar Beach, subject to time",
                    "• Vijay Nagar Beach, subject to time",
                    "Later, transfer to the Havelock cruise terminal.",
                    "Board the scheduled cruise to Neil Island.",
                    "Upon arrival, transfer to the accommodation.",
                    "Visit Laxmanpur Beach for sunset, subject to cruise timing.",
                    "Overnight stay in Neil Island."
                ]
            },
            {
                "day": "Day 04",
                "title": "Neil Island Sightseeing – Port Blair",
                "activities": [
                    "After breakfast, proceed for Neil Island sightseeing.",
                    "Places Covered",
                    "• Bharatpur Beach",
                    "• Natural Bridge",
                    "• Laxmanpur Beach",
                    "• Sitapur Beach, subject to time",
                    "• Local village landscapes",
                    "Optional glass-bottom boat rides and snorkelling may be available at Bharatpur Beach.",
                    "Later, transfer to the cruise terminal and board the scheduled cruise to Port Blair.",
                    "Upon arrival, transfer to the accommodation.",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 05",
                "title": "Port Blair Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Port Blair Airport."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Port Blair",
            "One night’s accommodation in Havelock Island",
            "One night’s accommodation in Neil Island",
            "Daily breakfast",
            "Port Blair Airport pickup and drop",
            "Port Blair–Havelock private cruise",
            "Havelock–Neil Island private cruise",
            "Neil Island–Port Blair private cruise",
            "Jetty transfers",
            "Private sightseeing transfers",
            "Radhanagar Beach sightseeing",
            "Kalapathar Beach sightseeing",
            "Neil Island sightseeing",
            "Fuel charges",
            "Driver allowance",
            "Parking charges",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Cruise upgrades",
            "❌ Attraction entry tickets",
            "❌ Scuba diving",
            "❌ Snorkelling",
            "❌ Sea walking",
            "❌ Kayaking",
            "❌ Glass-bottom boat rides",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Guide charges",
            "❌ Extra vehicle usage",
            "❌ Additional sightseeing",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Port Blair",
            "One night in Havelock Island",
            "One night in Neil Island",
            "Private cruise transfers",
            "Radhanagar Beach",
            "Kalapathar Beach",
            "Bharatpur Beach",
            "Laxmanpur Beach",
            "Natural Bridge",
            "Optional water activities"
        ],
        "keywords": "Andaman honeymoon packages, Andaman honeymoon package from Madurai, Andaman honeymoon package from Chennai, Andaman honeymoon package with flight, Havelock honeymoon package, Neil Island honeymoon package, Port Blair honeymoon package, Andaman couple tour package, Andaman honeymoon with private cruise, Premium Andaman honeymoon package, Logaa Holidays Andaman honeymoon",
        "seoTitle": "Andaman Honeymoon Package 4 Nights 5 Days",
        "seoDescription": "Book a 4 Nights 5 Days Andaman honeymoon package covering Port Blair, Havelock and Neil Island with private cruises and beach sightseeing.",
        "id": "9603"
    },
    '9604': {
        "title": "Complete Andaman Honeymoon Package – 5 Nights / 6 Days",
        "badge": "Premium",
        "image": "/assets/andaman_hero.png",
        "heroImage": "/assets/andaman_hero.png",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Port Blair, Havelock Island, Neil Island",
            "activities": "Sightseeing, Beaches, Water Sports, Premium Experience",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Port Blair Arrival and Local Sightseeing",
                "activities": [
                    "Pickup from Port Blair Airport.",
                    "Transfer to the accommodation.",
                    "Later, visit:",
                    "• Corbyn’s Cove Beach",
                    "• Cellular Jail",
                    "• Light and Sound Show",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 02",
                "title": "Port Blair – Havelock Island – Radhanagar Beach",
                "activities": [
                    "After breakfast, transfer to the cruise terminal.",
                    "Board the scheduled private cruise to Havelock Island.",
                    "Upon arrival, transfer to the accommodation.",
                    "Later, visit Radhanagar Beach.",
                    "Enjoy sunset views and beach leisure.",
                    "Overnight stay in Havelock Island."
                ]
            },
            {
                "day": "Day 03",
                "title": "Havelock Island Experience",
                "activities": [
                    "After breakfast, choose one of the following plans.",
                    "Option 1: Elephant Beach Excursion",
                    "• Speedboat transfer",
                    "• Snorkelling, optional",
                    "• Sea walking, optional",
                    "• Glass-bottom boat ride, optional",
                    "• Water sports, optional",
                    "• Coral-viewing experiences",
                    "Option 2: Kalapathar and Beach Leisure",
                    "• Kalapathar Beach",
                    "• Vijay Nagar Beach",
                    "• Govind Nagar Beach",
                    "• Beach cafés",
                    "• Resort leisure",
                    "• Couple photography",
                    "Option 3: Premium Romantic Day",
                    "• Couple spa",
                    "• Private beach experience",
                    "• Candlelight dinner",
                    "• Honeymoon cake",
                    "• Flower decoration",
                    "• Resort photoshoot",
                    "Return to the accommodation.",
                    "Overnight stay in Havelock Island."
                ]
            },
            {
                "day": "Day 04",
                "title": "Havelock Island – Neil Island",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to the cruise terminal and board the scheduled cruise to Neil Island.",
                    "Upon arrival, transfer to the accommodation.",
                    "Later, visit:",
                    "• Bharatpur Beach",
                    "• Laxmanpur Beach",
                    "• Sunset viewpoint",
                    "Overnight stay in Neil Island."
                ]
            },
            {
                "day": "Day 05",
                "title": "Neil Island Sightseeing – Port Blair",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Natural Bridge",
                    "• Bharatpur Beach",
                    "• Laxmanpur Beach",
                    "• Sitapur Beach, subject to time",
                    "• Local village landscapes",
                    "Later, board the scheduled private cruise to Port Blair.",
                    "Upon arrival, transfer to the accommodation.",
                    "The evening is free for shopping at Aberdeen Bazaar.",
                    "Overnight stay in Port Blair."
                ]
            },
            {
                "day": "Day 06",
                "title": "Port Blair Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Port Blair Airport."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Port Blair",
            "Two nights’ accommodation in Havelock Island",
            "One night’s accommodation in Neil Island",
            "Daily breakfast",
            "Port Blair Airport pickup and drop",
            "All scheduled private cruise tickets",
            "Jetty transfers",
            "Private local sightseeing transfers",
            "Cellular Jail visit",
            "Light and Sound Show where confirmed",
            "Radhanagar Beach visit",
            "Kalapathar Beach or selected Havelock sightseeing",
            "Neil Island sightseeing",
            "Fuel charges",
            "Driver allowance",
            "Parking charges",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Cruise-class upgrades",
            "❌ Elephant Beach excursion unless included",
            "❌ Scuba diving",
            "❌ Snorkelling",
            "❌ Sea walking",
            "❌ Kayaking",
            "❌ Glass-bottom boat rides",
            "❌ Speedboat charges",
            "❌ Attraction entry tickets",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Port Blair",
            "Two nights in Havelock Island",
            "One night in Neil Island",
            "Private cruise transfers",
            "Radhanagar Beach",
            "Kalapathar Beach",
            "Neil Island sightseeing",
            "Optional Elephant Beach excursion",
            "Optional scuba diving and sea walking",
            "Leisure time for couples",
            "Premium beach-resort options"
        ],
        "keywords": "Andaman honeymoon packages, Andaman honeymoon package from Madurai, Andaman honeymoon package from Chennai, Andaman honeymoon package with flight, Havelock honeymoon package, Neil Island honeymoon package, Port Blair honeymoon package, Andaman couple tour package, Andaman honeymoon with private cruise, Premium Andaman honeymoon package, Logaa Holidays Andaman honeymoon",
        "seoTitle": "Andaman Honeymoon Package 5 Nights 6 Days",
        "seoDescription": "Book a premium 5 Nights 6 Days Andaman honeymoon package covering Port Blair, Havelock and Neil Island with private cruise and beach resorts.",
        "id": "9604"
    }
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

if "'9601':" not in content:
    content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code + ",", content, count=1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added Andaman packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")

