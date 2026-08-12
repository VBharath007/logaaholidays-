import os
import re
import shutil

# Copy images
img1_src = r"C:\Users\LOQ\.gemini\antigravity\brain\a894de6b-7307-4d3f-b025-8b9a86497a43\goa_honeymoon_4n5d_1786105340815.png"
img2_src = r"C:\Users\LOQ\.gemini\antigravity\brain\a894de6b-7307-4d3f-b025-8b9a86497a43\goa_couple_leisure_1786105361177.png"

dest_dir = r"d:\HexaVisionTech\logaa holiday\public\assets\generated"

if os.path.exists(img1_src):
    shutil.copy(img1_src, os.path.join(dest_dir, "goa_honeymoon_4n5d.png"))
if os.path.exists(img2_src):
    shutil.copy(img2_src, os.path.join(dest_dir, "goa_couple_leisure.png"))


packages_code = """
    '9106': {
        "title": "Goa Honeymoon Package – 4 Nights / 5 Days",
        "badge": "Premium",
        "image": "/assets/generated/goa_honeymoon_4n5d.png",
        "heroImage": "/assets/generated/goa_couple_leisure.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Goa, North Goa, South Goa",
            "activities": "Sightseeing, Beaches, Couple Leisure, Sunset Cruise",
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
                    "Optional Romantic Welcome:",
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
                    "Places to Visit:",
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
                    "Places to Visit:",
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
                    "Romantic Experiences:",
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
            "North Goa sightseeing",
            "South Goa sightseeing",
            "Dedicated romantic leisure day",
            "Optional candlelight dinner",
            "Optional couple photoshoot",
            "Optional sunset cruise",
            "Beach and resort leisure"
        ],
        "keywords": "Goa honeymoon package 4 nights 5 days, Goa romantic package for couples, Goa couple tour 5 days, Goa honeymoon resort package, Goa honeymoon with candlelight dinner, Goa honeymoon package from Tamil Nadu, Goa honeymoon trip from Madurai, Goa couple package from Chennai, Luxury Goa honeymoon package",
        "seoTitle": "Goa Honeymoon Package 4 Nights 5 Days | Romantic Couple Tour",
        "seoDescription": "Book a 4 Nights 5 Days Goa honeymoon package with North Goa, South Goa, resort stay, couple leisure day and optional candlelight dinner.",
        "id": "9106"
    },
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Append to packagesDatabase
if "'9106':" not in content:
    content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code, content, count=1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")
