import os
import re

packages_code = """
    '9701': {
        "title": "Gangtok Honeymoon Package – 2 Nights / 3 Days",
        "image": "/assets/generated/himachal_manali_honeymoon.png",
        "heroImage": "/assets/generated/himachal_manali_honeymoon.png",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Gangtok",
            "activities": "Sightseeing, Lakes, Himalayan Romance",
            "themes": "Honeymoon, Romantic, Mountains"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Bagdogra Airport / New Jalpaiguri – Gangtok",
                "activities": [
                    "Pickup from Bagdogra Airport or New Jalpaiguri Railway Station.",
                    "Proceed towards Gangtok through the scenic Teesta River route.",
                    "Upon arrival, check in and relax.",
                    "In the evening, visit MG Marg.",
                    "Places and Experiences",
                    "• MG Marg",
                    "• Local cafés",
                    "• Handicraft shopping",
                    "• Traditional food outlets",
                    "• Leisure walk",
                    "Optional Honeymoon Arrangements",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Welcome drink",
                    "• Candlelight dinner",
                    "• Mountain-view room",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 02",
                "title": "Tsomgo Lake and Baba Mandir Excursion",
                "activities": [
                    "After breakfast, proceed for a high-altitude excursion.",
                    "Places Covered",
                    "• Tsomgo Lake",
                    "• Baba Harbhajan Singh Mandir",
                    "• Kyongnosla Alpine Sanctuary viewpoints",
                    "• Snow points, seasonal",
                    "• Nathula Pass, optional",
                    "Tsomgo Lake is a high-altitude glacial lake surrounded by mountain landscapes.",
                    "Continue towards Baba Mandir.",
                    "Nathula Pass may be arranged subject to official permit, road access, weather and availability.",
                    "Return to Gangtok.",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 03",
                "title": "Gangtok – Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Depending on departure time, short local sightseeing may include:",
                    "• Ganesh Tok",
                    "• Hanuman Tok",
                    "• Tashi View Point",
                    "• Banjhakri Falls",
                    "Proceed to Bagdogra Airport or New Jalpaiguri Railway Station."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Gangtok",
            "Daily breakfast",
            "Bagdogra Airport or New Jalpaiguri pickup and drop",
            "Gangtok transfers",
            "Tsomgo Lake and Baba Mandir excursion",
            "Vehicle charges as per confirmed itinerary",
            "Fuel charges",
            "Driver allowance",
            "Toll and parking charges",
            "Applicable permits for included sightseeing",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight and train tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Nathula Pass permit and vehicle charges",
            "❌ Attraction entry tickets",
            "❌ Ropeway tickets",
            "❌ Yak rides",
            "❌ Snow activities",
            "❌ Personal expenses",
            "❌ Guide charges",
            "❌ Room heater charges unless included",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Expenses caused by weather or road closures",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Gangtok",
            "Bagdogra Airport or New Jalpaiguri pickup and drop",
            "Gangtok local sightseeing",
            "Tsomgo Lake excursion",
            "Baba Harbhajan Singh Mandir",
            "Optional Nathula Pass",
            "MG Marg leisure",
            "Private or shared transportation as selected"
        ],
        "keywords": "Sikkim honeymoon packages, Darjeeling honeymoon packages, Gangtok honeymoon package, Sikkim Darjeeling honeymoon package, Sikkim honeymoon package from Madurai, Sikkim honeymoon package from Chennai, Gangtok Pelling Darjeeling package, Sikkim honeymoon package with flight, Sikkim honeymoon package with train, Premium Sikkim honeymoon package, Logaa Holidays Sikkim honeymoon",
        "seoTitle": "Gangtok Honeymoon Package 2 Nights 3 Days",
        "seoDescription": "Book a 2 Nights 3 Days Gangtok honeymoon package with Tsomgo Lake, Baba Mandir, MG Marg and airport or railway-station transfers.",
        "id": "9701"
    },
    '9702': {
        "title": "Gangtok and Darjeeling Honeymoon – 3 Nights / 4 Days",
        "badge": "Most Popular",
        "image": "/assets/generated/himachal_manali_honeymoon.png",
        "heroImage": "/assets/generated/himachal_manali_honeymoon.png",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Gangtok, Darjeeling",
            "activities": "Sightseeing, Lakes, Tea Gardens",
            "themes": "Honeymoon, Romantic, Mountains"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Bagdogra / New Jalpaiguri – Gangtok",
                "activities": [
                    "Pickup and proceed towards Gangtok.",
                    "Check in and relax.",
                    "In the evening, explore:",
                    "• MG Marg",
                    "• Local shopping",
                    "• Cafés and restaurants",
                    "• Leisure walk",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 02",
                "title": "Tsomgo Lake and Baba Mandir",
                "activities": [
                    "After breakfast, visit:",
                    "• Tsomgo Lake",
                    "• Baba Harbhajan Singh Mandir",
                    "• Kyongnosla viewpoints",
                    "• Nathula Pass, optional",
                    "• Seasonal snow points",
                    "Return to Gangtok.",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 03",
                "title": "Gangtok – Darjeeling",
                "activities": [
                    "After breakfast, check out and proceed towards Darjeeling.",
                    "Enjoy the scenic journey through mountain roads and tea-growing regions.",
                    "Upon arrival, check in.",
                    "Depending on time, visit:",
                    "• Chowrasta",
                    "• Mall Road",
                    "• Mahakal Market",
                    "• Local cafés",
                    "• Tea-shopping outlets",
                    "Overnight stay in Darjeeling."
                ]
            },
            {
                "day": "Day 04",
                "title": "Darjeeling Sightseeing – Departure",
                "activities": [
                    "Early morning, proceed to Tiger Hill, subject to weather and local timings.",
                    "Places Covered",
                    "• Tiger Hill",
                    "• Batasia Loop",
                    "• Ghoom Monastery",
                    "• Himalayan Mountaineering Institute",
                    "• Padmaja Naidu Himalayan Zoological Park",
                    "• Tenzing Rock",
                    "• Tibetan Refugee Self Help Centre, subject to opening",
                    "• Darjeeling tea gardens",
                    "• Japanese Peace Pagoda, subject to time",
                    "After sightseeing, proceed to Bagdogra Airport or New Jalpaiguri Railway Station.",
                    "Late-evening departure is recommended."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Gangtok",
            "One night’s accommodation in Darjeeling",
            "Daily breakfast",
            "Bagdogra Airport or New Jalpaiguri pickup and drop",
            "Gangtok to Darjeeling transfer",
            "Tsomgo Lake and Baba Mandir sightseeing",
            "Darjeeling sightseeing",
            "Fuel charges",
            "Driver allowance",
            "Toll and parking charges",
            "Applicable permits for included sightseeing",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight and train tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Nathula Pass charges",
            "❌ Attraction entry tickets",
            "❌ Darjeeling toy-train tickets",
            "❌ Ropeway tickets",
            "❌ Yak and horse rides",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room heater charges unless included",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Gangtok",
            "One night in Darjeeling",
            "Tsomgo Lake and Baba Mandir",
            "Gangtok MG Marg",
            "Darjeeling tea gardens",
            "Tiger Hill sunrise",
            "Batasia Loop",
            "Himalayan Mountaineering Institute",
            "Airport or railway-station transfers"
        ],
        "keywords": "Sikkim honeymoon packages, Darjeeling honeymoon packages, Gangtok honeymoon package, Sikkim Darjeeling honeymoon package, Sikkim honeymoon package from Madurai, Sikkim honeymoon package from Chennai, Gangtok Pelling Darjeeling package, Sikkim honeymoon package with flight, Sikkim honeymoon package with train, Premium Sikkim honeymoon package, Logaa Holidays Sikkim honeymoon",
        "seoTitle": "Gangtok Darjeeling Honeymoon Package 3 Nights 4 Days",
        "seoDescription": "Book a 3 Nights 4 Days Gangtok and Darjeeling honeymoon package with Tsomgo Lake, Tiger Hill, tea gardens and private transfers.",
        "id": "9702"
    },
    '9703': {
        "title": "Gangtok, Pelling and Darjeeling Honeymoon – 4 Nights / 5 Days",
        "image": "/assets/generated/himachal_manali_honeymoon.png",
        "heroImage": "/assets/generated/himachal_manali_honeymoon.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Gangtok, Pelling, Darjeeling",
            "activities": "Sightseeing, Lakes, Monasteries, Tea Gardens",
            "themes": "Honeymoon, Romantic, Mountains"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Bagdogra / New Jalpaiguri – Gangtok",
                "activities": [
                    "Pickup and transfer to Gangtok.",
                    "After arrival, check in and relax.",
                    "Enjoy the evening at MG Marg.",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 02",
                "title": "Tsomgo Lake and Baba Mandir",
                "activities": [
                    "After breakfast, proceed towards:",
                    "• Tsomgo Lake",
                    "• Baba Mandir",
                    "• Kyongnosla Alpine viewpoints",
                    "• Nathula Pass, optional",
                    "• Seasonal snow points",
                    "Return to Gangtok.",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 03",
                "title": "Gangtok – Pelling",
                "activities": [
                    "After breakfast, check out and proceed towards Pelling.",
                    "Depending on road and operating conditions, visit:",
                    "• Ravangla Buddha Park",
                    "• Temi Tea Garden viewpoints",
                    "• Namchi Char Dham, optional",
                    "• Siddheshwar Dham, optional",
                    "Upon arrival in Pelling, check in and relax.",
                    "Overnight stay in Pelling."
                ]
            },
            {
                "day": "Day 04",
                "title": "Pelling Sightseeing – Darjeeling",
                "activities": [
                    "After breakfast, proceed for Pelling sightseeing.",
                    "Places Covered",
                    "• Pemayangtse Monastery",
                    "• Rabdentse Ruins",
                    "• Khecheopalri Lake",
                    "• Kanchenjunga Falls",
                    "• Rimbi Waterfalls",
                    "• Rimbi Orange Garden, seasonal",
                    "• Chenrezig Statue",
                    "• Pelling Skywalk",
                    "• Kanchenjunga viewpoints",
                    "Later, proceed towards Darjeeling.",
                    "Upon arrival, check in.",
                    "Overnight stay in Darjeeling."
                ]
            },
            {
                "day": "Day 05",
                "title": "Darjeeling Sightseeing – Departure",
                "activities": [
                    "Early morning, visit Tiger Hill.",
                    "Later, cover:",
                    "• Batasia Loop",
                    "• Ghoom Monastery",
                    "• Himalayan Mountaineering Institute",
                    "• Padmaja Naidu Himalayan Zoological Park",
                    "• Tenzing Rock",
                    "• Tea gardens",
                    "• Japanese Peace Pagoda, subject to time",
                    "Proceed to Bagdogra Airport or New Jalpaiguri Railway Station."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Gangtok",
            "One night’s accommodation in Pelling",
            "One night’s accommodation in Darjeeling",
            "Daily breakfast",
            "Bagdogra Airport or New Jalpaiguri pickup and drop",
            "Intercity transfers",
            "Gangtok sightseeing",
            "Tsomgo Lake and Baba Mandir excursion",
            "Pelling sightseeing",
            "Darjeeling sightseeing",
            "Fuel charges",
            "Driver allowance",
            "Toll and parking charges",
            "Applicable permits for included sightseeing",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight and train tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Nathula Pass charges",
            "❌ Attraction entry tickets",
            "❌ Pelling Skywalk entry",
            "❌ Darjeeling toy-train tickets",
            "❌ Ropeway tickets",
            "❌ Yak and pony rides",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room heater charges unless included",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Expenses due to weather or road restrictions",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Gangtok",
            "One night in Pelling",
            "One night in Darjeeling",
            "Tsomgo Lake and Baba Mandir",
            "Pelling monasteries and waterfalls",
            "Chenrezig Skywalk",
            "Darjeeling sunrise and tea gardens",
            "Airport or railway-station transfers"
        ],
        "keywords": "Sikkim honeymoon packages, Darjeeling honeymoon packages, Gangtok honeymoon package, Sikkim Darjeeling honeymoon package, Sikkim honeymoon package from Madurai, Sikkim honeymoon package from Chennai, Gangtok Pelling Darjeeling package, Sikkim honeymoon package with flight, Sikkim honeymoon package with train, Premium Sikkim honeymoon package, Logaa Holidays Sikkim honeymoon",
        "seoTitle": "Sikkim Darjeeling Honeymoon Package 4 Nights 5 Days",
        "seoDescription": "Book a 4 Nights 5 Days Sikkim Darjeeling honeymoon package covering Gangtok, Pelling, Tsomgo Lake and Darjeeling attractions.",
        "id": "9703"
    },
    '9704': {
        "title": "Complete Sikkim and Darjeeling Honeymoon – 5 Nights / 6 Days",
        "badge": "Premium",
        "image": "/assets/generated/himachal_manali_honeymoon.png",
        "heroImage": "/assets/generated/himachal_manali_honeymoon.png",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Gangtok, Pelling, Darjeeling",
            "activities": "Sightseeing, Lakes, Monasteries, Premium Experience",
            "themes": "Honeymoon, Romantic, Mountains"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Bagdogra / New Jalpaiguri – Gangtok",
                "activities": [
                    "Pickup and proceed towards Gangtok.",
                    "Check in and relax.",
                    "In the evening, enjoy MG Marg.",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 02",
                "title": "Tsomgo Lake, Baba Mandir and Optional Nathula Pass",
                "activities": [
                    "After breakfast, proceed for high-altitude sightseeing.",
                    "Places Covered",
                    "• Tsomgo Lake",
                    "• Baba Harbhajan Singh Mandir",
                    "• Kyongnosla Alpine viewpoints",
                    "• Nathula Pass, optional",
                    "• Seasonal snow points",
                    "Return to Gangtok.",
                    "Overnight stay in Gangtok."
                ]
            },
            {
                "day": "Day 03",
                "title": "Gangtok Sightseeing – Pelling",
                "activities": [
                    "After breakfast, check out.",
                    "Before departure, visit selected Gangtok attractions.",
                    "Places Covered",
                    "• Tashi View Point",
                    "• Ganesh Tok",
                    "• Hanuman Tok",
                    "• Banjhakri Falls",
                    "• Directorate of Handicrafts and Handloom, subject to opening",
                    "• Enchey Monastery",
                    "• Do Drul Chorten, subject to time",
                    "Proceed towards Pelling.",
                    "Optional en-route attractions may include:",
                    "• Ravangla Buddha Park",
                    "• Temi Tea Garden",
                    "• Namchi Char Dham",
                    "Check in at Pelling.",
                    "Overnight stay in Pelling."
                ]
            },
            {
                "day": "Day 04",
                "title": "Pelling Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Pemayangtse Monastery",
                    "• Rabdentse Ruins",
                    "• Khecheopalri Lake",
                    "• Kanchenjunga Falls",
                    "• Rimbi Waterfalls",
                    "• Rimbi Orange Garden",
                    "• Chenrezig Statue",
                    "• Pelling Skywalk",
                    "• Kanchenjunga mountain viewpoints",
                    "Return to the accommodation.",
                    "Optional Romantic Arrangements",
                    "• Candlelight dinner",
                    "• Flower decoration",
                    "• Honeymoon cake",
                    "• Mountain-view room",
                    "• Couple photoshoot",
                    "Overnight stay in Pelling."
                ]
            },
            {
                "day": "Day 05",
                "title": "Pelling – Darjeeling",
                "activities": [
                    "After breakfast, check out and proceed towards Darjeeling.",
                    "Upon arrival, check in.",
                    "Later, explore:",
                    "• Chowrasta",
                    "• Mall Road",
                    "• Local cafés",
                    "• Tea outlets",
                    "• Mahakal Market",
                    "• Local handicraft shops",
                    "Overnight stay in Darjeeling."
                ]
            },
            {
                "day": "Day 06",
                "title": "Darjeeling Sightseeing – Departure",
                "activities": [
                    "Early morning, visit Tiger Hill.",
                    "Places Covered",
                    "• Tiger Hill",
                    "• Batasia Loop",
                    "• Ghoom Monastery",
                    "• Himalayan Mountaineering Institute",
                    "• Padmaja Naidu Himalayan Zoological Park",
                    "• Tenzing Rock",
                    "• Tea gardens",
                    "• Japanese Peace Pagoda",
                    "• Tibetan Refugee Self Help Centre, subject to opening",
                    "After sightseeing, proceed to Bagdogra Airport or New Jalpaiguri Railway Station.",
                    "A late-evening flight or train is recommended."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Gangtok",
            "Two nights’ accommodation in Pelling",
            "One night’s accommodation in Darjeeling",
            "Daily breakfast",
            "Bagdogra Airport or New Jalpaiguri pickup and drop",
            "Gangtok, Pelling and Darjeeling transfers",
            "Sightseeing as per itinerary",
            "Tsomgo Lake and Baba Mandir excursion",
            "Fuel charges",
            "Driver allowance",
            "Toll and parking charges",
            "Applicable permits for included sightseeing",
            "Honeymoon arrangements specifically confirmed",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight and train tickets unless included",
            "❌ Lunch and dinner unless mentioned",
            "❌ Nathula Pass permit and vehicle charges",
            "❌ Attraction entry tickets",
            "❌ Darjeeling toy-train tickets",
            "❌ Ropeway tickets",
            "❌ Pelling Skywalk tickets",
            "❌ Yak, pony and adventure activities",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Room heater charges unless included",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Extra vehicle usage",
            "❌ Costs caused by weather, permit issues or road closures",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Gangtok",
            "Two nights in Pelling",
            "One night in Darjeeling",
            "Tsomgo Lake and Baba Mandir",
            "Optional Nathula Pass",
            "Gangtok local sightseeing",
            "Complete Pelling sightseeing",
            "Darjeeling tea gardens and sunrise",
            "Premium mountain-view room options",
            "Private airport or railway-station transfers"
        ],
        "keywords": "Sikkim honeymoon packages, Darjeeling honeymoon packages, Gangtok honeymoon package, Sikkim Darjeeling honeymoon package, Sikkim honeymoon package from Madurai, Sikkim honeymoon package from Chennai, Gangtok Pelling Darjeeling package, Sikkim honeymoon package with flight, Sikkim honeymoon package with train, Premium Sikkim honeymoon package, Logaa Holidays Sikkim honeymoon",
        "seoTitle": "Sikkim Darjeeling Honeymoon Package 5 Nights 6 Days",
        "seoDescription": "Book a premium 5 Nights 6 Days Sikkim Darjeeling honeymoon package covering Gangtok, Pelling, Tsomgo Lake and Darjeeling.",
        "id": "9704"
    }
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

if "'9701':" not in content:
    content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code + ",", content, count=1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added Sikkim packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")
