import os
import re
import shutil

# Copy images
img1_src = r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\kashmir_dal_lake_shikara_1785734620379.png"
img2_src = r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\kashmir_pahalgam_valley_1785734630041.png"
img3_src = r"C:\Users\LOQ\.gemini\antigravity\brain\3ca0b5f2-bd14-42ed-9847-1b8fa870de5d\kashmir_gulmarg_snow_1785734641021.png"

dest_dir = r"d:\HexaVisionTech\logaa holiday\public\assets\generated"

if os.path.exists(img1_src):
    shutil.copy(img1_src, os.path.join(dest_dir, "kashmir_dal_lake_shikara.png"))
if os.path.exists(img2_src):
    shutil.copy(img2_src, os.path.join(dest_dir, "kashmir_pahalgam_valley.png"))
if os.path.exists(img3_src):
    shutil.copy(img3_src, os.path.join(dest_dir, "kashmir_gulmarg_snow.png"))


packages_code = """
    '9401': {
        "title": "Kashmir Honeymoon Package – 4 Nights / 5 Days",
        "image": "/assets/generated/kashmir_dal_lake_shikara.png",
        "heroImage": "/assets/generated/kashmir_dal_lake_shikara.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Srinagar, Gulmarg, Sonamarg, Pahalgam",
            "activities": "Shikara Ride, Sightseeing, Honeymoon Special",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Srinagar Arrival and Mughal Garden Tour",
                "activities": [
                    "Upon arrival at Srinagar Airport, meet our representative and proceed to the selected accommodation.",
                    "Complete the check-in formalities and relax.",
                    "Later, proceed for Srinagar sightseeing.",
                    "Places Covered",
                    "• Shalimar Bagh",
                    "• Nishat Bagh",
                    "• Chashme Shahi",
                    "• Pari Mahal",
                    "• Dal Lake",
                    "• Boulevard Road",
                    "Begin with Shalimar Bagh, known for its terraced lawns, fountains and Mughal-era landscape design.",
                    "Continue to Nishat Bagh, offering beautiful views of Dal Lake and the Zabarwan mountain range.",
                    "Visit Chashme Shahi and Pari Mahal, subject to arrival time and local operating hours.",
                    "In the evening, enjoy a romantic Shikara ride on Dal Lake where included in the confirmed package.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 02",
                "title": "Gulmarg Day Excursion",
                "activities": [
                    "After breakfast, proceed towards Gulmarg.",
                    "Gulmarg is known for alpine meadows, mountain views and seasonal snow experiences.",
                    "Places and Experiences",
                    "• Gulmarg meadow",
                    "• Gulmarg Gondola cable-car ride, optional",
                    "• Gondola Phase 1 and Phase 2, subject to operation",
                    "• Snow activities, seasonal",
                    "• Pony ride, optional",
                    "• Mountain photography",
                    "• Leisure walks",
                    "Gondola tickets and activities must be booked or paid separately unless included in the final quotation.",
                    "Return to Srinagar after sightseeing.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 03",
                "title": "Sonamarg Day Excursion",
                "activities": [
                    "After breakfast, proceed towards Sonamarg.",
                    "Sonamarg is known for its river landscapes, mountain scenery and seasonal snow points.",
                    "Places and Experiences",
                    "• Sonamarg Valley",
                    "• Sindh River viewpoints",
                    "• Thajiwas Glacier excursion, optional",
                    "• Pony ride, optional",
                    "• Local union-cab sightseeing, where required",
                    "• Seasonal snow activities",
                    "• Mountain photography",
                    "Return to Srinagar in the evening.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 04",
                "title": "Pahalgam Day Excursion",
                "activities": [
                    "After breakfast, proceed towards Pahalgam.",
                    "Enjoy the scenic journey through countryside, pine forests and mountain landscapes.",
                    "Places and Experiences",
                    "• Pahalgam Valley",
                    "• Lidder River",
                    "• Pahalgam local market",
                    "• Riverside leisure",
                    "• Baisaran Valley, optional",
                    "• Aru Valley, optional",
                    "• Betaab Valley, optional",
                    "• Chandanwari, optional",
                    "• Pony ride, optional",
                    "Aru Valley, Betaab Valley and Chandanwari sightseeing may require a local union vehicle at an additional cost.",
                    "Return to Srinagar.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 05",
                "title": "Srinagar Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Srinagar Airport according to the flight schedule.",
                    "Guests are advised to leave early enough to complete airport security and reporting formalities."
                ]
            }
        ],
        "inclusions": [
            "Four nights’ accommodation in Srinagar",
            "Daily breakfast",
            "Dinner where MAP meal plan is selected",
            "Srinagar Airport pickup and drop",
            "Private transportation as per itinerary",
            "Srinagar local sightseeing",
            "Gulmarg day excursion",
            "Sonamarg day excursion",
            "Pahalgam day excursion",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "Shikara ride where specifically confirmed",
            "Honeymoon arrangements mentioned in the final quotation",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets",
            "❌ Lunch",
            "❌ Dinner unless MAP plan is selected",
            "❌ Gulmarg Gondola tickets",
            "❌ Pony and horse rides",
            "❌ Snow-bike and ATV activities",
            "❌ Helicopter rides",
            "❌ Local union vehicles",
            "❌ Chain vehicle charges during snowfall",
            "❌ Gulmarg local transfer charges",
            "❌ Pahalgam inner-valley sightseeing",
            "❌ Sonamarg local sightseeing",
            "❌ Attraction entry tickets",
            "❌ Guide charges",
            "❌ Room heater charges unless included",
            "❌ Personal expenses",
            "❌ Travel and medical insurance",
            "❌ Laundry and room service",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Four nights in Srinagar",
            "Srinagar Mughal Gardens",
            "Romantic Shikara ride on Dal Lake",
            "Gulmarg day excursion",
            "Sonamarg day excursion",
            "Pahalgam day excursion",
            "Optional Gulmarg Gondola ride",
            "Optional snow and pony activities",
            "Private airport transfers",
            "Private transportation as per itinerary"
        ],
        "keywords": "Kashmir honeymoon packages, Kashmir honeymoon package from Madurai, Kashmir honeymoon package from Chennai, Srinagar honeymoon package, Gulmarg honeymoon package, Pahalgam honeymoon package, Kashmir honeymoon with Shikara ride, Kashmir honeymoon with houseboat, Kashmir couple tour package, Premium Kashmir honeymoon package, Logaa Holidays Kashmir honeymoon",
        "seoTitle": "Kashmir Honeymoon Package 4 Nights 5 Days",
        "seoDescription": "Book a 4 Nights 5 Days Kashmir honeymoon package covering Srinagar, Gulmarg, Sonamarg and Pahalgam with private transfers and Shikara ride.",
        "id": "9401"
    },
    '9402': {
        "title": "Kashmir Honeymoon Package – 5 Nights / 6 Days",
        "badge": "Most Popular",
        "image": "/assets/generated/kashmir_pahalgam_valley.png",
        "heroImage": "/assets/generated/kashmir_pahalgam_valley.png",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Srinagar, Pahalgam, Gulmarg, Sonamarg",
            "activities": "Shikara Ride, Sightseeing, Honeymoon Special, Pahalgam Stay",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Srinagar Arrival and Local Sightseeing",
                "activities": [
                    "Upon arrival at Srinagar Airport, meet our representative and proceed to the accommodation.",
                    "Later, visit:",
                    "• Shalimar Bagh",
                    "• Nishat Bagh",
                    "• Chashme Shahi",
                    "• Pari Mahal",
                    "• Dal Lake",
                    "• Boulevard Road",
                    "Enjoy a romantic Shikara ride on Dal Lake where included.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 02",
                "title": "Srinagar to Pahalgam",
                "activities": [
                    "After breakfast, check out and proceed towards Pahalgam.",
                    "Enjoy the journey through scenic countryside and mountain landscapes.",
                    "Upon arrival, check in and relax.",
                    "Places and Experiences",
                    "• Pahalgam Valley",
                    "• Lidder River",
                    "• Pahalgam local market",
                    "• Riverside leisure",
                    "• Baisaran Valley, optional",
                    "• Aru Valley, optional",
                    "• Betaab Valley, optional",
                    "• Chandanwari, optional",
                    "• Pony ride, optional",
                    "Local union vehicles may be compulsory for selected inner-valley sightseeing.",
                    "Overnight stay in Pahalgam."
                ]
            },
            {
                "day": "Day 03",
                "title": "Pahalgam to Srinagar",
                "activities": [
                    "After breakfast, check out and return to Srinagar.",
                    "En Route Attractions",
                    "• Saffron fields, seasonal",
                    "• Apple orchards, seasonal",
                    "• Cricket-bat manufacturing units",
                    "• Village and countryside views",
                    "• Scenic photography stops",
                    "Upon arrival in Srinagar, check in and relax.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 04",
                "title": "Gulmarg Day Excursion",
                "activities": [
                    "After breakfast, proceed towards Gulmarg.",
                    "Places and Experiences",
                    "• Gulmarg meadow",
                    "• Gondola cable-car ride, optional",
                    "• Gondola Phase 1 and Phase 2, subject to operation",
                    "• Seasonal snow activities",
                    "• Pony ride, optional",
                    "• Mountain photography",
                    "• Leisure walks",
                    "Return to Srinagar.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 05",
                "title": "Sonamarg Day Excursion",
                "activities": [
                    "After breakfast, proceed towards Sonamarg.",
                    "Places and Experiences",
                    "• Sonamarg Valley",
                    "• Sindh River viewpoints",
                    "• Thajiwas Glacier, optional",
                    "• Pony ride, optional",
                    "• Local union-cab sightseeing",
                    "• Seasonal snow activities",
                    "• Photography points",
                    "Return to Srinagar.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 06",
                "title": "Srinagar Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Srinagar Airport according to the flight schedule."
                ]
            }
        ],
        "inclusions": [
            "Four nights’ accommodation in Srinagar",
            "One night’s accommodation in Pahalgam",
            "Daily breakfast",
            "Dinner where MAP meal plan is selected",
            "Srinagar Airport pickup and drop",
            "Private transportation as per itinerary",
            "Srinagar local sightseeing",
            "Pahalgam transfer and stay",
            "Gulmarg day excursion",
            "Sonamarg day excursion",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "Shikara ride where confirmed",
            "Honeymoon arrangements specifically included",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets",
            "❌ Lunch",
            "❌ Dinner unless included",
            "❌ Gondola tickets",
            "❌ Pony and horse rides",
            "❌ ATV and snow-bike rides",
            "❌ Helicopter rides",
            "❌ Local union vehicles",
            "❌ Chain vehicle charges",
            "❌ Pahalgam inner-valley sightseeing",
            "❌ Sonamarg local sightseeing charges",
            "❌ Attraction entry tickets",
            "❌ Guide charges",
            "❌ Room heater charges unless included",
            "❌ Personal expenses",
            "❌ Travel and medical insurance",
            "❌ Laundry and room service",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Four nights in Srinagar",
            "One romantic night in Pahalgam",
            "Srinagar Mughal Gardens",
            "Shikara ride on Dal Lake",
            "Pahalgam valley stay",
            "Gulmarg excursion",
            "Sonamarg excursion",
            "Saffron-field and apple-orchard route",
            "Optional Gondola experience",
            "Private airport transfers"
        ],
        "keywords": "Kashmir honeymoon packages, Kashmir honeymoon package from Madurai, Kashmir honeymoon package from Chennai, Srinagar honeymoon package, Gulmarg honeymoon package, Pahalgam honeymoon package, Kashmir honeymoon with Shikara ride, Kashmir honeymoon with houseboat, Kashmir couple tour package, Premium Kashmir honeymoon package, Logaa Holidays Kashmir honeymoon",
        "seoTitle": "Kashmir Honeymoon Package 5 Nights 6 Days",
        "seoDescription": "Book a romantic 5 Nights 6 Days Kashmir honeymoon package covering Srinagar, Pahalgam, Gulmarg and Sonamarg with Shikara ride and private cab.",
        "id": "9402"
    },
    '9403': {
        "title": "Complete Kashmir Honeymoon Package – 6 Nights / 7 Days",
        "badge": "Premium",
        "image": "/assets/generated/kashmir_gulmarg_snow.png",
        "heroImage": "/assets/generated/kashmir_gulmarg_snow.png",
        "overview": {
            "duration": "6 Nights / 7 Days",
            "destination": "Srinagar, Pahalgam, Gulmarg, Sonamarg",
            "activities": "Shikara Ride, Sightseeing, Honeymoon Special, Houseboat Stay, Premium",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Srinagar Arrival and Mughal Gardens",
                "activities": [
                    "Upon arrival at Srinagar Airport, meet our representative and transfer to the accommodation.",
                    "Later, visit:",
                    "• Shalimar Bagh",
                    "• Nishat Bagh",
                    "• Chashme Shahi",
                    "• Pari Mahal",
                    "• Dal Lake",
                    "• Boulevard Road",
                    "Enjoy a Shikara ride where included.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 02",
                "title": "Srinagar to Pahalgam",
                "activities": [
                    "After breakfast, check out and proceed towards Pahalgam.",
                    "Upon arrival, check in and relax.",
                    "Places and Experiences",
                    "• Pahalgam Valley",
                    "• Lidder River",
                    "• Pahalgam market",
                    "• Riverside walks",
                    "• Baisaran Valley, optional",
                    "• Aru Valley, optional",
                    "• Betaab Valley, optional",
                    "• Chandanwari, optional",
                    "• Pony ride, optional",
                    "Overnight stay in Pahalgam."
                ]
            },
            {
                "day": "Day 03",
                "title": "Pahalgam to Srinagar",
                "activities": [
                    "After breakfast, check out and return to Srinagar.",
                    "En Route Attractions",
                    "• Apple orchards, seasonal",
                    "• Saffron fields, seasonal",
                    "• Cricket-bat manufacturing units",
                    "• Countryside viewpoints",
                    "• Photography stops",
                    "Check in at the accommodation upon arrival.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 04",
                "title": "Gulmarg Day Excursion",
                "activities": [
                    "After breakfast, proceed to Gulmarg.",
                    "Places and Experiences",
                    "• Gulmarg meadow",
                    "• Gondola cable-car ride, optional",
                    "• Phase 1 and Phase 2, subject to operation",
                    "• Snow activities, seasonal",
                    "• Pony ride, optional",
                    "• Mountain photography",
                    "Return to Srinagar.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 05",
                "title": "Sonamarg Day Excursion",
                "activities": [
                    "After breakfast, proceed to Sonamarg.",
                    "Places and Experiences",
                    "• Sonamarg Valley",
                    "• Sindh River viewpoints",
                    "• Thajiwas Glacier, optional",
                    "• Pony ride, optional",
                    "• Local union-cab sightseeing",
                    "• Seasonal snow activities",
                    "• Mountain photography",
                    "Return to Srinagar.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 06",
                "title": "Srinagar Leisure, Shopping and Couple Experiences",
                "activities": [
                    "After breakfast, enjoy a relaxed day in Srinagar.",
                    "Places and Experiences",
                    "• Lal Chowk",
                    "• Ghanta Ghar or Clock Tower",
                    "• Boulevard Road",
                    "• Dal Lake",
                    "• Kashmiri handicraft shops",
                    "• Shawl and carpet outlets",
                    "• Dry-fruit shopping",
                    "• Saffron shopping",
                    "• Local café or romantic dinner, optional",
                    "• Additional Shikara ride, optional",
                    "Where officially open and operational, an alternative excursion such as Doodhpathri may be arranged at an additional cost or by adjusting the itinerary.",
                    "Overnight stay in Srinagar."
                ]
            },
            {
                "day": "Day 07",
                "title": "Srinagar Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Transfer to Srinagar Airport according to the flight schedule."
                ]
            }
        ],
        "inclusions": [
            "Five nights’ accommodation in Srinagar",
            "One night’s accommodation in Pahalgam",
            "Daily breakfast",
            "Dinner where MAP meal plan is selected",
            "Srinagar Airport pickup and drop",
            "Private transportation as per itinerary",
            "Srinagar local sightseeing",
            "Pahalgam transfer and stay",
            "Gulmarg day excursion",
            "Sonamarg day excursion",
            "Srinagar leisure and shopping tour",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "Shikara ride where confirmed",
            "Honeymoon arrangements mentioned in the final quotation",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight tickets",
            "❌ Lunch",
            "❌ Dinner unless included",
            "❌ Gondola tickets",
            "❌ Pony and horse rides",
            "❌ Snow-bike and ATV activities",
            "❌ Helicopter rides",
            "❌ Local union-cab charges",
            "❌ Chain vehicle charges during snowfall",
            "❌ Pahalgam inner-valley sightseeing",
            "❌ Sonamarg local sightseeing",
            "❌ Additional Doodhpathri excursion",
            "❌ Attraction entry tickets",
            "❌ Guide charges",
            "❌ Room heater charges unless included",
            "❌ Personal expenses",
            "❌ Travel and medical insurance",
            "❌ Laundry and room service",
            "❌ Mineral water and beverages",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Expenses caused by weather, road closures or local restrictions",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Five nights in Srinagar",
            "One night in Pahalgam",
            "Srinagar Mughal Gardens",
            "Romantic Shikara ride",
            "Pahalgam valley stay",
            "Gulmarg mountain excursion",
            "Sonamarg valley excursion",
            "Srinagar leisure and shopping day",
            "Optional houseboat stay",
            "Private airport transfers",
            "Optional honeymoon photoshoot"
        ],
        "keywords": "Kashmir honeymoon packages, Kashmir honeymoon package from Madurai, Kashmir honeymoon package from Chennai, Srinagar honeymoon package, Gulmarg honeymoon package, Pahalgam honeymoon package, Kashmir honeymoon with Shikara ride, Kashmir honeymoon with houseboat, Kashmir couple tour package, Premium Kashmir honeymoon package, Logaa Holidays Kashmir honeymoon",
        "seoTitle": "Complete Kashmir Honeymoon Package 6 Nights 7 Days",
        "seoDescription": "Book a premium 6 Nights 7 Days Kashmir honeymoon package covering Srinagar, Pahalgam, Gulmarg and Sonamarg with Shikara ride and private transfers.",
        "id": "9403"
    },
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Append to packagesDatabase
if "'9401':" not in content:
    content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code, content, count=1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")
