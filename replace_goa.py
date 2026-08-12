import os
import shutil

# Copy images
images = [
    (r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\goa_romantic_escape_2n3d_1785736637855.png", "goa_romantic_escape_2n3d.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\goa_popular_couple_3n4d_1785736651224.png", "goa_popular_couple_3n4d.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\goa_premium_resort_sunset_1785735999348.png", "goa_romantic_leisure_4n5d.png")
]

dest_dir = r"d:\HexaVisionTech\logaa holiday\public\assets\generated"
for src, dest_name in images:
    if os.path.exists(src):
        shutil.copy(src, os.path.join(dest_dir, dest_name))

packages_code = """
    '9101': {
        "title": "Goa Honeymoon Package – 2 Nights / 3 Days",
        "image": "/assets/generated/goa_romantic_escape_2n3d.png",
        "heroImage": "/assets/generated/goa_romantic_escape_2n3d.png",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Goa, North Goa",
            "activities": "Sightseeing, Beaches, Romantic Escape",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Goa Arrival and Romantic Leisure",
                "activities": [
                    "Upon arrival at Goa Airport or railway station, meet our representative and proceed to the selected hotel or resort.",
                    "Complete the check-in formalities and relax.",
                    "Depending on the arrival time, visit a nearby beach or spend the evening enjoying the resort facilities.",
                    "Optional Romantic Arrangements",
                    "• Welcome drink",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 02",
                "title": "North Goa Sightseeing",
                "activities": [
                    "After breakfast, proceed for North Goa sightseeing.",
                    "Places to Visit",
                    "• Fort Aguada",
                    "• Sinquerim Beach",
                    "• Candolim Beach",
                    "• Calangute Beach",
                    "• Baga Beach",
                    "• Anjuna Beach",
                    "• Vagator Beach",
                    "• Chapora Fort",
                    "Sightseeing coverage depends on traffic, operating hours and time available.",
                    "Optional Activities",
                    "• Parasailing",
                    "• Jet skiing",
                    "• Banana boat ride",
                    "• Bumper ride",
                    "• Speedboat ride",
                    "• Couple photoshoot",
                    "• Beachside dinner",
                    "Return to the hotel.",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 03",
                "title": "Goa Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Transfer to Goa Airport or railway station for your return journey.",
                    "The honeymoon concludes with beautiful memories of Goa."
                ]
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
            "❌ Flight and train tickets",
            "❌ Lunch and dinner unless included",
            "❌ Entry tickets",
            "❌ Water sports",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Guide charges",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Two nights’ accommodation in Goa",
            "Daily breakfast",
            "Goa Airport or railway station transfers",
            "North Goa sightseeing",
            "Fort Aguada and popular beaches",
            "Private leisure time for couples",
            "Optional flower-bed decoration",
            "Optional honeymoon cake",
            "Optional candlelight dinner",
            "Optional water sports"
        ],
        "keywords": "Goa honeymoon package 2 nights 3 days, Goa couple package 3 days, Budget Goa honeymoon package, Short Goa honeymoon trip, Goa honeymoon package from Madurai, Goa couple tour from Chennai, Goa resort package for couples",
        "seoTitle": "Goa Honeymoon Package 2 Nights 3 Days | Couple Tour",
        "seoDescription": "Book a romantic Goa honeymoon package for 2 Nights and 3 Days with resort stay, North Goa sightseeing, transfers and optional candlelight dinner.",
        "id": "9101"
    },
    '9102': {
        "title": "Goa Honeymoon Package – 3 Nights / 4 Days",
        "badge": "Most Popular",
        "image": "/assets/generated/goa_popular_couple_3n4d.png",
        "heroImage": "/assets/generated/goa_popular_couple_3n4d.png",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Goa, North Goa, South Goa",
            "activities": "Sightseeing, Beaches, Heritage, Sunset Cruise",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Goa Arrival and Leisure",
                "activities": [
                    "Upon arrival at Goa Airport or railway station, meet our representative and proceed to the hotel.",
                    "Complete check-in and relax.",
                    "The evening is free to visit a nearby beach, explore a local market or enjoy the resort.",
                    "Optional Honeymoon Arrangements",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Welcome drink",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 02",
                "title": "North Goa Sightseeing",
                "activities": [
                    "After breakfast, proceed for North Goa sightseeing.",
                    "Places to Visit",
                    "• Fort Aguada",
                    "• Sinquerim Beach",
                    "• Candolim Beach",
                    "• Calangute Beach",
                    "• Baga Beach",
                    "• Anjuna Beach",
                    "• Vagator Beach",
                    "• Chapora Fort",
                    "Couples can enjoy beach walks, leisure time and photography.",
                    "Optional water sports are available at an additional cost and are subject to sea conditions.",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 03",
                "title": "South Goa Sightseeing and Optional Cruise",
                "activities": [
                    "After breakfast, proceed for South Goa sightseeing.",
                    "Places to Visit",
                    "• Basilica of Bom Jesus",
                    "• Se Cathedral",
                    "• Shri Mangueshi Temple",
                    "• Shri Shantadurga Temple",
                    "• Dona Paula Viewpoint",
                    "• Miramar Beach",
                    "• Panjim city",
                    "In the evening, couples may choose an optional Mandovi River Cruise.",
                    "Return to the hotel.",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 04",
                "title": "Goa Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Goa Airport or railway station for departure."
                ]
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
            "❌ Flight and train tickets",
            "❌ Lunch and dinner unless included",
            "❌ Entry fees",
            "❌ Mandovi cruise tickets",
            "❌ Water-sport charges",
            "❌ Casino charges",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Three nights’ hotel or resort stay",
            "Daily breakfast",
            "North Goa sightseeing",
            "South Goa sightseeing",
            "Famous Goa beaches",
            "Heritage churches and temples",
            "Dona Paula and Miramar Beach",
            "Optional Mandovi River Cruise",
            "Optional honeymoon decoration",
            "Optional candlelight dinner",
            "Optional couple photoshoot"
        ],
        "keywords": "Goa honeymoon package 3 nights 4 days, Goa couple package 4 days, North and South Goa honeymoon package, Goa honeymoon tour from Madurai, Goa honeymoon package from Chennai, Goa romantic holiday package, Goa resort package for couples, Goa honeymoon package with private cab",
        "seoTitle": "Goa Honeymoon Package 3 Nights 4 Days | North & South Goa",
        "seoDescription": "Book a 3 Nights 4 Days Goa honeymoon package covering North Goa, South Goa, beaches and heritage attractions with resort stay and transfers.",
        "id": "9102"
    },
    '9103': {
        "title": "Goa Honeymoon Package – 4 Nights / 5 Days",
        "image": "/assets/generated/goa_romantic_leisure_4n5d.png",
        "heroImage": "/assets/generated/goa_romantic_leisure_4n5d.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Goa, North Goa, South Goa",
            "activities": "Sightseeing, Beaches, Romantic Leisure",
            "themes": "Honeymoon, Romantic, Beaches and Islands"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Goa Arrival and Hotel Check-In",
                "activities": [
                    "Upon arrival at Goa Airport or railway station, meet our representative and proceed to the selected hotel or resort.",
                    "Check in and relax.",
                    "The evening is free to enjoy the beach, hotel pool or nearby attractions.",
                    "Optional Romantic Welcome",
                    "• Flower decoration",
                    "• Honeymoon cake",
                    "• Welcome drink",
                    "• Fruit basket",
                    "• Romantic dinner",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 02",
                "title": "North Goa Sightseeing",
                "activities": [
                    "After breakfast, proceed for North Goa sightseeing.",
                    "Places to Visit",
                    "• Fort Aguada",
                    "• Sinquerim Beach",
                    "• Candolim Beach",
                    "• Calangute Beach",
                    "• Baga Beach",
                    "• Anjuna Beach",
                    "• Vagator Beach",
                    "• Chapora Fort",
                    "Optional water sports can be arranged based on weather and sea conditions.",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 03",
                "title": "South Goa Sightseeing",
                "activities": [
                    "After breakfast, proceed for South Goa sightseeing.",
                    "Places to Visit",
                    "• Basilica of Bom Jesus",
                    "• Se Cathedral",
                    "• Mangueshi Temple",
                    "• Shantadurga Temple",
                    "• Dona Paula Viewpoint",
                    "• Miramar Beach",
                    "• Panjim city",
                    "• Local market",
                    "An optional Mandovi River Cruise may be included in the evening.",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 04",
                "title": "Romantic Leisure Day",
                "activities": [
                    "After breakfast, enjoy a relaxed day with your partner.",
                    "Couples may select one or more optional experiences.",
                    "Romantic Experiences",
                    "• Candlelight dinner",
                    "• Beachside dinner",
                    "• Couple photoshoot",
                    "• Sunset cruise",
                    "• Yacht experience",
                    "• Couple spa",
                    "• Water sports",
                    "• Private sightseeing cab",
                    "• Shopping",
                    "• Casino visit",
                    "• Resort leisure",
                    "• Poolside dinner",
                    "Overnight stay in Goa."
                ]
            },
            {
                "day": "Day 05",
                "title": "Goa Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Transfer to Goa Airport or railway station.",
                    "The honeymoon concludes with unforgettable memories of Goa."
                ]
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
            "❌ Airfare and train fare",
            "❌ Lunch and dinner unless included",
            "❌ Entry tickets",
            "❌ Water sports",
            "❌ Cruise and casino charges",
            "❌ Guide charges",
            "❌ Couple activities unless included",
            "❌ Personal expenses",
            "❌ Room service",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Four nights’ resort or hotel stay",
            "Daily breakfast",
            "North Goa sightseeing",
            "South Goa sightseeing",
            "Dedicated romantic leisure day",
            "Optional private cab",
            "Optional candlelight dinner",
            "Optional room decoration and cake",
            "Optional couple spa",
            "Optional sunset cruise",
            "Optional couple photoshoot",
            "Beach and resort leisure"
        ],
        "keywords": "Goa honeymoon package 4 nights 5 days, Goa romantic package for couples, Goa couple tour 5 days, Goa honeymoon resort package, Goa honeymoon with candlelight dinner, Goa honeymoon package from Tamil Nadu, Goa honeymoon trip from Madurai, Goa couple package from Chennai, Luxury Goa honeymoon package",
        "seoTitle": "Goa Honeymoon Package 4 Nights 5 Days | Romantic Couple Tour",
        "seoDescription": "Book a 4 Nights 5 Days Goa honeymoon package with North Goa, South Goa, resort stay, couple leisure day and optional candlelight dinner.",
        "id": "9103"
    },\n"""

import re
target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    text = f.read()

m1 = re.search(r'\'9101\': \{', text)
m2 = re.search(r'\'9501\': \{', text)
if m1 and m2:
    start_idx = m1.start()
    end_idx = m2.start()
    new_text = text[:start_idx] + packages_code + text[end_idx:]
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Successfully replaced Goa packages.")
else:
    print("Could not find bounds.")
