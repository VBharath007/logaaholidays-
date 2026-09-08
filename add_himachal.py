import os
import re
import shutil

# Copy images
images = [
    (r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\himachal_shimla_honeymoon_1785735435178.png", "himachal_shimla_honeymoon.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\himachal_manali_honeymoon_1785735446255.png", "himachal_manali_honeymoon.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\himachal_shimla_manali_drive_1785735457542.png", "himachal_shimla_manali_drive.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\himachal_premium_snow_resort_1785735468469.png", "himachal_premium_snow_resort.png")
]

dest_dir = r"d:\HexaVisionTech\logaa holiday\public\assets\generated"
for src, dest_name in images:
    if os.path.exists(src):
        shutil.copy(src, os.path.join(dest_dir, dest_name))

packages_code = """
    '9501': {
        "title": "Premium Shimla Honeymoon Package – 2 Nights / 3 Days",
        "image": "/assets/generated/himachal_shimla_honeymoon.png",
        "heroImage": "/assets/generated/himachal_shimla_honeymoon.png",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Chandigarh, Shimla, Kufri",
            "activities": "Sightseeing, Honeymoon Special, Mall Road",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Chandigarh – Shimla",
                "activities": [
                    "Pickup from Chandigarh Airport, Railway Station or preferred city location.",
                    "Proceed towards Shimla through scenic mountain roads.",
                    "Optional Stops En Route",
                    "• Pinjore Gardens",
                    "• Timber Trail viewpoint",
                    "• Barog viewpoints",
                    "Upon arrival, check in and relax.",
                    "In the evening, explore Shimla’s pedestrian zone.",
                    "Places Covered",
                    "• Mall Road",
                    "• The Ridge",
                    "• Christ Church",
                    "• Scandal Point",
                    "• Lakkar Bazaar",
                    "• Lower Bazaar",
                    "Enjoy leisure time, local cafés and shopping.",
                    "Overnight stay in Shimla."
                ]
            },
            {
                "day": "Day 02",
                "title": "Kufri and Shimla Sightseeing",
                "activities": [
                    "After breakfast, proceed towards Kufri.",
                    "Places Covered",
                    "• Kufri",
                    "• Green Valley",
                    "• Himalayan Nature Park, optional",
                    "• Kufri Fun World, optional",
                    "• Mahasu Peak, subject to local access",
                    "• Indira Tourist Park",
                    "• Jakhoo Hill",
                    "• Jakhoo Temple",
                    "• Viceregal Lodge, subject to time",
                    "• Indian Institute of Advanced Study",
                    "Horse riding, yak rides and adventure activities are available at an additional cost.",
                    "Return to Shimla.",
                    "Overnight stay in Shimla."
                ]
            },
            {
                "day": "Day 03",
                "title": "Shimla – Chandigarh Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed towards Chandigarh.",
                    "Drop at Chandigarh Airport, Railway Station or preferred city location."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Shimla",
            "Daily breakfast",
            "Chandigarh pickup and drop",
            "Private air-conditioned vehicle",
            "Shimla local sightseeing",
            "Kufri day excursion",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State taxes and permit charges",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Kufri activities",
            "❌ Horse and yak rides",
            "❌ Adventure activities",
            "❌ Local union vehicles, where required",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room heater charges unless included",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Early check-in and late check-out",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Shimla",
            "Chandigarh pickup and drop",
            "Shimla local sightseeing",
            "Kufri mountain excursion",
            "Mall Road evening walk",
            "Optional adventure activities",
            "Optional mountain-view room",
            "Private sightseeing vehicle"
        ],
        "keywords": "Himachal honeymoon packages, Shimla honeymoon package, Manali honeymoon package, Shimla Manali honeymoon package, Himachal honeymoon package from Madurai, Himachal honeymoon package from Chennai, Manali couple tour package, Shimla Manali honeymoon from Tamil Nadu, Manali honeymoon with private cab, Premium Himachal honeymoon package, Logaa Holidays Himachal honeymoon",
        "seoTitle": "Shimla Honeymoon Package 2 Nights 3 Days",
        "seoDescription": "Book a romantic Shimla honeymoon package for 2 Nights and 3 Days covering Kufri, Mall Road, Green Valley and major Shimla attractions.",
        "id": "9501"
    },
    '9502': {
        "title": "Premium Manali Honeymoon Package – 3 Nights / 4 Days",
        "badge": "Most Popular",
        "image": "/assets/generated/himachal_manali_honeymoon.png",
        "heroImage": "/assets/generated/himachal_manali_honeymoon.png",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Chandigarh, Manali, Solang Valley",
            "activities": "Sightseeing, Honeymoon Special, Solang Valley",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Chandigarh – Manali",
                "activities": [
                    "Pickup from Chandigarh Airport, Railway Station or preferred location.",
                    "Proceed towards Manali.",
                    "Scenic Route",
                    "• Bilaspur",
                    "• Sundernagar",
                    "• Mandi",
                    "• Pandoh Dam",
                    "• Beas River viewpoints",
                    "• Kullu Valley",
                    "Short refreshment and photography stops may be provided according to time.",
                    "Upon arrival, check in and relax.",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 02",
                "title": "Manali Local Sightseeing",
                "activities": [
                    "After breakfast, proceed for Manali sightseeing.",
                    "Places Covered",
                    "• Hadimba Devi Temple",
                    "• Ghatotkach Temple",
                    "• Vashisht Temple",
                    "• Vashisht Hot Water Springs",
                    "• Tibetan Monastery",
                    "• Van Vihar",
                    "• Manali Nature Park",
                    "• Club House, optional",
                    "• Mall Road",
                    "Couples can spend the evening shopping or exploring cafés along Mall Road.",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 03",
                "title": "Solang Valley and Mountain Excursion",
                "activities": [
                    "After breakfast, proceed towards Solang Valley.",
                    "Places and Experiences",
                    "• Solang Valley",
                    "• Snow Point, seasonal",
                    "• Skiing, seasonal",
                    "• Snow tubing, seasonal",
                    "• Paragliding, subject to operation",
                    "• Ropeway, optional",
                    "• ATV ride, optional",
                    "• Zorbing, seasonal",
                    "• Photography points",
                    "Depending on weather, road access and local regulations, the following may be added:",
                    "• Atal Tunnel",
                    "• Sissu",
                    "• Sissu Waterfall viewpoint",
                    "• Rohtang Pass, subject to permit and operation",
                    "Return to Manali.",
                    "Optional Romantic Arrangement",
                    "• Candlelight dinner",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Mountain-view room",
                    "• Couple photoshoot",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 04",
                "title": "Manali – Chandigarh Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed towards Chandigarh.",
                    "Drop at the Airport, Railway Station or preferred city location."
                ]
            }
        ],
        "inclusions": [
            "Three nights’ accommodation in Manali",
            "Daily breakfast",
            "Chandigarh pickup and drop",
            "Private air-conditioned vehicle",
            "Manali local sightseeing",
            "Solang Valley excursion",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State taxes and permit charges",
            "Honeymoon arrangements specifically mentioned",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Adventure activities",
            "❌ Ropeway tickets",
            "❌ Skiing and snow equipment",
            "❌ Rohtang Pass permit and vehicle charges",
            "❌ Atal Tunnel or Sissu excursion unless included",
            "❌ Local union vehicles",
            "❌ Personal expenses",
            "❌ Guide charges",
            "❌ Room heater charges unless included",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Three nights in Manali",
            "Private Chandigarh pickup and drop",
            "Manali local sightseeing",
            "Solang Valley excursion",
            "Optional Atal Tunnel and Sissu visit",
            "Optional Rohtang Pass excursion",
            "Mall Road leisure",
            "Mountain-view resort options",
            "Private vehicle for scheduled sightseeing"
        ],
        "keywords": "Himachal honeymoon packages, Shimla honeymoon package, Manali honeymoon package, Shimla Manali honeymoon package, Himachal honeymoon package from Madurai, Himachal honeymoon package from Chennai, Manali couple tour package, Shimla Manali honeymoon from Tamil Nadu, Manali honeymoon with private cab, Premium Himachal honeymoon package, Logaa Holidays Himachal honeymoon",
        "seoTitle": "Manali Honeymoon Package 3 Nights 4 Days",
        "seoDescription": "Book a premium Manali honeymoon package for 3 Nights and 4 Days with Solang Valley, local sightseeing, private cab and romantic experiences.",
        "id": "9502"
    },
    '9503': {
        "title": "Shimla and Manali Honeymoon Package – 4 Nights / 5 Days",
        "image": "/assets/generated/himachal_shimla_manali_drive.png",
        "heroImage": "/assets/generated/himachal_shimla_manali_drive.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Chandigarh, Shimla, Kufri, Manali, Solang Valley",
            "activities": "Sightseeing, Honeymoon Special, Kufri, Solang Valley",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Chandigarh – Shimla",
                "activities": [
                    "Pickup from Chandigarh.",
                    "Proceed towards Shimla.",
                    "Upon arrival, check in and relax.",
                    "In the evening, explore:",
                    "• Mall Road",
                    "• The Ridge",
                    "• Christ Church",
                    "• Scandal Point",
                    "• Lakkar Bazaar",
                    "Overnight stay in Shimla."
                ]
            },
            {
                "day": "Day 02",
                "title": "Kufri and Shimla Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Green Valley",
                    "• Kufri",
                    "• Himalayan Nature Park, optional",
                    "• Kufri Fun World, optional",
                    "• Mahasu Peak, subject to access",
                    "• Jakhoo Temple",
                    "• Viceregal Lodge, subject to time",
                    "Return to Shimla.",
                    "Overnight stay in Shimla."
                ]
            },
            {
                "day": "Day 03",
                "title": "Shimla – Kullu – Manali",
                "activities": [
                    "After breakfast, check out and proceed towards Manali.",
                    "This is a scenic mountain-transfer day.",
                    "Places Covered En Route",
                    "• Pandoh Dam",
                    "• Beas River viewpoints",
                    "• Kullu Valley",
                    "• Kullu shawl-weaving centre",
                    "• Vaishno Devi Temple, Kullu, subject to time",
                    "Upon arrival, check in and relax.",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 04",
                "title": "Manali Local and Solang Valley Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Manali Places Covered",
                    "• Hadimba Devi Temple",
                    "• Vashisht Temple",
                    "• Vashisht Hot Water Springs",
                    "• Tibetan Monastery",
                    "• Van Vihar",
                    "• Mall Road",
                    "Continue to Solang Valley according to weather and time.",
                    "Solang Valley Experiences",
                    "• Seasonal snow activities",
                    "• Skiing",
                    "• Paragliding",
                    "• Ropeway",
                    "• ATV rides",
                    "• Photography",
                    "Return to Manali.",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 05",
                "title": "Manali – Chandigarh Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed to Chandigarh.",
                    "Drop at the Airport, Railway Station or preferred city location.",
                    "A late-evening departure from Chandigarh is recommended due to the long road journey."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Shimla",
            "Two nights’ accommodation in Manali",
            "Daily breakfast",
            "Chandigarh pickup and drop",
            "Private air-conditioned vehicle",
            "Shimla and Kufri sightseeing",
            "Shimla to Manali transfer",
            "Manali local sightseeing",
            "Solang Valley excursion",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State taxes and permits",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Kufri adventure activities",
            "❌ Horse and yak rides",
            "❌ Solang Valley activities",
            "❌ Ropeway tickets",
            "❌ Rohtang Pass excursion",
            "❌ Atal Tunnel and Sissu unless included",
            "❌ Local union vehicles",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room heater charges unless included",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Shimla",
            "Two nights in Manali",
            "Kufri excursion",
            "Shimla Mall Road",
            "Scenic Shimla–Manali drive",
            "Manali local attractions",
            "Solang Valley",
            "Private Chandigarh pickup and drop",
            "Couple-friendly sightseeing plan"
        ],
        "keywords": "Himachal honeymoon packages, Shimla honeymoon package, Manali honeymoon package, Shimla Manali honeymoon package, Himachal honeymoon package from Madurai, Himachal honeymoon package from Chennai, Manali couple tour package, Shimla Manali honeymoon from Tamil Nadu, Manali honeymoon with private cab, Premium Himachal honeymoon package, Logaa Holidays Himachal honeymoon",
        "seoTitle": "Shimla Manali Honeymoon Package 4 Nights 5 Days",
        "seoDescription": "Book a 4 Nights 5 Days Shimla Manali honeymoon package covering Kufri, Mall Road, Manali and Solang Valley with private transportation.",
        "id": "9503"
    },
    '9504': {
        "title": "Complete Shimla and Manali Honeymoon – 5 Nights / 6 Days",
        "badge": "Premium",
        "image": "/assets/generated/himachal_premium_snow_resort.png",
        "heroImage": "/assets/generated/himachal_premium_snow_resort.png",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Chandigarh, Shimla, Kufri, Manali, Solang Valley",
            "activities": "Sightseeing, Honeymoon Special, Kufri, Solang Valley",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Chandigarh – Shimla",
                "activities": [
                    "Pickup from Chandigarh and proceed towards Shimla.",
                    "Upon arrival, check in.",
                    "In the evening, visit:",
                    "• Mall Road",
                    "• The Ridge",
                    "• Christ Church",
                    "• Scandal Point",
                    "• Lakkar Bazaar",
                    "Overnight stay in Shimla."
                ]
            },
            {
                "day": "Day 02",
                "title": "Kufri and Shimla Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Green Valley",
                    "• Kufri",
                    "• Himalayan Nature Park",
                    "• Kufri Fun World, optional",
                    "• Mahasu Peak, subject to local access",
                    "• Jakhoo Temple",
                    "• Jakhoo Ropeway, optional",
                    "• Viceregal Lodge",
                    "• Indian Institute of Advanced Study",
                    "Return to Shimla.",
                    "Overnight stay in Shimla."
                ]
            },
            {
                "day": "Day 03",
                "title": "Shimla – Kullu – Manali",
                "activities": [
                    "After breakfast, check out and proceed towards Manali.",
                    "Places Covered En Route",
                    "• Pandoh Dam",
                    "• Beas River viewpoints",
                    "• Kullu Valley",
                    "• Kullu shawl factory",
                    "• Vaishno Devi Temple, Kullu, subject to time",
                    "Upon arrival, check in and relax.",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 04",
                "title": "Manali Local Sightseeing",
                "activities": [
                    "After breakfast, visit:",
                    "• Hadimba Devi Temple",
                    "• Ghatotkach Temple",
                    "• Vashisht Temple",
                    "• Vashisht Hot Water Springs",
                    "• Tibetan Monastery",
                    "• Van Vihar",
                    "• Club House, optional",
                    "• Manali Nature Park",
                    "• Mall Road",
                    "The evening is free for shopping and leisure.",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 05",
                "title": "Solang Valley, Atal Tunnel and Sissu Excursion",
                "activities": [
                    "After breakfast, proceed towards Solang Valley.",
                    "Places and Experiences",
                    "• Solang Valley",
                    "• Seasonal snow points",
                    "• Ropeway, optional",
                    "• Paragliding, subject to operation",
                    "• Skiing, seasonal",
                    "• Snow tubing, seasonal",
                    "• ATV ride, optional",
                    "Subject to weather and road conditions, continue towards:",
                    "• Atal Tunnel",
                    "• North Portal viewpoint",
                    "• Sissu",
                    "• Sissu Waterfall viewpoint",
                    "Rohtang Pass may be arranged as an alternative excursion subject to official operation, permits and additional charges.",
                    "Return to Manali.",
                    "Optional Romantic Experiences",
                    "• Candlelight dinner",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Couple photoshoot",
                    "• Mountain-view room",
                    "• Private romantic dinner",
                    "Overnight stay in Manali."
                ]
            },
            {
                "day": "Day 06",
                "title": "Manali – Chandigarh Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed towards Chandigarh.",
                    "Drop at Chandigarh Airport, Railway Station or preferred location.",
                    "A late-evening flight or train is recommended."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Shimla",
            "Three nights’ accommodation in Manali",
            "Daily breakfast",
            "Chandigarh pickup and drop",
            "Private air-conditioned vehicle",
            "Shimla and Kufri sightseeing",
            "Shimla to Manali transfer",
            "Manali local sightseeing",
            "Solang Valley excursion",
            "Atal Tunnel and Sissu where confirmed",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State taxes and permit charges",
            "Honeymoon arrangements specifically included",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Attraction entry tickets",
            "❌ Horse and yak rides",
            "❌ Adventure activities",
            "❌ Ropeway tickets",
            "❌ Ski equipment and snow clothing",
            "❌ Rohtang Pass permit and vehicle",
            "❌ Atal Tunnel and Sissu unless confirmed",
            "❌ Local union vehicle charges",
            "❌ Chain vehicle charges during snow conditions",
            "❌ Guide charges",
            "❌ Room heater charges unless included",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Expenses caused by road closures or weather",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Shimla",
            "Three nights in Manali",
            "Chandigarh pickup and drop",
            "Kufri and Shimla sightseeing",
            "Scenic Shimla–Manali journey",
            "Manali local sightseeing",
            "Solang Valley excursion",
            "Optional Atal Tunnel and Sissu",
            "Optional Rohtang Pass",
            "Premium mountain-view resort options",
            "Leisure time for couples"
        ],
        "keywords": "Himachal honeymoon packages, Shimla honeymoon package, Manali honeymoon package, Shimla Manali honeymoon package, Himachal honeymoon package from Madurai, Himachal honeymoon package from Chennai, Manali couple tour package, Shimla Manali honeymoon from Tamil Nadu, Manali honeymoon with private cab, Premium Himachal honeymoon package, Logaa Holidays Himachal honeymoon",
        "seoTitle": "Shimla Manali Honeymoon Package 5 Nights 6 Days",
        "seoDescription": "Book a premium 5 Nights 6 Days Shimla Manali honeymoon package covering Kufri, Solang Valley, Atal Tunnel and major attractions.",
        "id": "9504"
    }
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Append to packagesDatabase
if "'9501':" not in content:
    content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code + ",", content, count=1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added Himachal packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")
