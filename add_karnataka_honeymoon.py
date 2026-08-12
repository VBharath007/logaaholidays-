import os
import re
import shutil

# Copy images
images = [
    (r"C:\Users\LOQ\.gemini\antigravity\brain\a894de6b-7307-4d3f-b025-8b9a86497a43\coorg_honeymoon_1786108976951.png", "coorg_honeymoon.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\a894de6b-7307-4d3f-b025-8b9a86497a43\mysore_coorg_honeymoon_1786108998404.png", "mysore_coorg_honeymoon.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\a894de6b-7307-4d3f-b025-8b9a86497a43\coorg_chikmagalur_honeymoon_1786109009364.png", "coorg_chikmagalur_honeymoon.png"),
    (r"C:\Users\LOQ\.gemini\antigravity\brain\a894de6b-7307-4d3f-b025-8b9a86497a43\karnataka_premium_honeymoon_1786109025143.png", "karnataka_premium_honeymoon.png")
]

dest_dir = r"d:\HexaVisionTech\logaa holiday\public\assets\generated"

for src, dest_name in images:
    if os.path.exists(src):
        shutil.copy(src, os.path.join(dest_dir, dest_name))

packages_code = """
    '9301': {
        "title": "Premium Coorg Honeymoon Package – 2 Nights / 3 Days",
        "image": "/assets/generated/coorg_honeymoon.png",
        "heroImage": "/assets/generated/coorg_honeymoon.png",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Mysore, Bylakuppe, Coorg",
            "activities": "Sightseeing, Nature, Romantic Leisure, Waterfalls",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Mysore – Bylakuppe – Nisargadhama – Dubare – Coorg",
                "activities": [
                    "Pickup from Mysore Railway Station, Bus Stand, hotel or preferred city location.",
                    "Proceed towards Coorg by private vehicle.",
                    "Places Covered",
                    "• Namdroling Monastery",
                    "• Golden Temple, Bylakuppe",
                    "• Kaveri Nisargadhama",
                    "• Dubare Elephant Camp",
                    "• Harangi Dam, subject to available time",
                    "Visit Namdroling Monastery, one of the prominent Tibetan Buddhist centres near Bylakuppe.",
                    "Continue to Kaveri Nisargadhama, a riverside forest destination known for bamboo groves and walking areas.",
                    "Later, visit Dubare Elephant Camp. Boating, elephant-related activities and local experiences are subject to operation and additional charges.",
                    "Proceed to Madikeri and check in at the selected hotel or resort.",
                    "Optional Honeymoon Arrangements",
                    "• Welcome drink",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 02",
                "title": "Coorg and Madikeri Sightseeing",
                "activities": [
                    "After breakfast, proceed for Coorg sightseeing.",
                    "Places Covered",
                    "• Talakaveri",
                    "• Bhagamandala",
                    "• Abbey Falls",
                    "• Madikeri Fort",
                    "• Omkareshwara Temple",
                    "• Raja’s Seat",
                    "• Madikeri local market",
                    "• Coffee plantation, optional",
                    "Begin with Talakaveri, traditionally regarded as the source of River Cauvery.",
                    "Continue to Bhagamandala before returning towards Madikeri.",
                    "Visit Abbey Falls, Madikeri Fort and Omkareshwara Temple.",
                    "In the evening, enjoy the valley views and sunset at Raja’s Seat, subject to weather conditions.",
                    "An optional guided coffee plantation experience may be arranged at an additional cost.",
                    "Return to the hotel.",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 03",
                "title": "Coorg – Mysore Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Proceed towards Mysore.",
                    "Depending on the departure schedule, short stops or local shopping may be arranged.",
                    "Drop at:",
                    "• Mysore Railway Station",
                    "• Mysore Bus Stand",
                    "• Mysore hotel",
                    "• Preferred Mysore city location",
                    "The tour concludes with romantic memories of Coorg."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ hotel or resort accommodation in Coorg",
            "Accommodation in the selected room category",
            "Daily breakfast",
            "Mysore pickup and drop",
            "Private air-conditioned sedan",
            "Transfers and sightseeing as per itinerary",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State permit charges, where applicable",
            "Assistance from Logaa Holidays",
            "Honeymoon arrangements specifically mentioned in the final quotation"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless specifically included",
            "❌ Attraction entry tickets",
            "❌ Dubare boating and activity charges",
            "❌ Nisargadhama entry charges",
            "❌ Coffee plantation entry or guide charges",
            "❌ Jeep safari charges",
            "❌ Guide charges",
            "❌ Camera and video charges",
            "❌ Personal expenses",
            "❌ Room service",
            "❌ Laundry",
            "❌ Alcoholic and non-alcoholic beverages",
            "❌ Travel insurance",
            "❌ Extra vehicle usage",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Expenses caused by traffic, weather or local restrictions",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights’ accommodation in Coorg",
            "Private Mysore pickup and drop",
            "Golden Temple and Bylakuppe visit",
            "Kaveri Nisargadhama",
            "Dubare Elephant Camp",
            "Abbey Falls",
            "Raja’s Seat",
            "Optional coffee plantation experience",
            "Optional candlelight dinner",
            "Private air-conditioned sedan"
        ],
        "keywords": "Coorg honeymoon package 2 nights 3 days",
        "seoTitle": "Coorg Honeymoon Package 2 Nights 3 Days | Logaa Holidays",
        "seoDescription": "Book a romantic Coorg honeymoon package for 2 Nights and 3 Days with resort stay, private cab, Abbey Falls, Raja’s Seat and coffee-estate experiences.",
        "id": "9301"
    },
    '9302': {
        "title": "Premium Mysore and Coorg Honeymoon Package – 3 Nights / 4 Days",
        "badge": "Most Popular",
        "image": "/assets/generated/mysore_coorg_honeymoon.png",
        "heroImage": "/assets/generated/mysore_coorg_honeymoon.png",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Mysore, Bylakuppe, Coorg",
            "activities": "Sightseeing, Nature, Romantic Leisure, Royal Heritage",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys, Culture & Heritage"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Mysore Arrival and Local Sightseeing",
                "activities": [
                    "Pickup from Mysore Railway Station, Bus Stand or preferred location.",
                    "Proceed to the hotel and complete check-in.",
                    "Later, begin Mysore sightseeing.",
                    "Places Covered",
                    "• Mysore Palace",
                    "• Chamundi Hills",
                    "• Chamundeshwari Temple",
                    "• Mahishasura Statue",
                    "• Nandi Statue",
                    "• St. Philomena’s Cathedral",
                    "• Brindavan Gardens",
                    "• Krishna Raja Sagar Dam",
                    "Visit Mysore Palace, known for its royal architecture and historic interiors.",
                    "Continue to Chamundi Hills and St. Philomena’s Cathedral.",
                    "In the evening, visit Brindavan Gardens. The musical fountain is subject to operation and local timings.",
                    "Return to the hotel.",
                    "Overnight stay in Mysore."
                ]
            },
            {
                "day": "Day 02",
                "title": "Mysore – Bylakuppe – Nisargadhama – Dubare – Coorg",
                "activities": [
                    "After breakfast, check out and proceed towards Coorg.",
                    "Places Covered",
                    "• Namdroling Monastery",
                    "• Golden Temple",
                    "• Kaveri Nisargadhama",
                    "• Dubare Elephant Camp",
                    "• Harangi Dam, subject to time",
                    "Continue to Madikeri and check in at the selected resort.",
                    "The evening is free for leisure.",
                    "Optional Romantic Arrangements",
                    "• Flower-bed decoration",
                    "• Honeymoon cake",
                    "• Fruit basket",
                    "• Candlelight dinner",
                    "• Plantation-view room upgrade",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 03",
                "title": "Coorg Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for full-day sightseeing.",
                    "Places Covered",
                    "• Talakaveri",
                    "• Bhagamandala",
                    "• Abbey Falls",
                    "• Madikeri Fort",
                    "• Omkareshwara Temple",
                    "• Raja’s Seat",
                    "• Madikeri local market",
                    "• Coffee plantation, optional",
                    "Enjoy the evening at Raja’s Seat with valley views and sunset, subject to weather.",
                    "Return to the hotel.",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 04",
                "title": "Coorg – Mysore Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Proceed towards Mysore.",
                    "Drop at Railway Station, Bus Stand, hotel or preferred city location.",
                    "Bangalore drop can be arranged at an additional cost based on the selected package."
                ]
            }
        ],
        "inclusions": [
            "One night’s accommodation in Mysore",
            "Two nights’ accommodation in Coorg",
            "Daily breakfast",
            "Mysore pickup and drop",
            "Private air-conditioned sedan",
            "Transfers and sightseeing as per itinerary",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State permit charges, where applicable",
            "Assistance from Logaa Holidays",
            "Honeymoon arrangements specifically confirmed"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Mysore Palace entry charges",
            "❌ Brindavan Gardens entry charges",
            "❌ Attraction and monument tickets",
            "❌ Dubare activities",
            "❌ Boating charges",
            "❌ Coffee plantation charges",
            "❌ Guide charges",
            "❌ Camera charges",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Extra vehicle usage",
            "❌ Bangalore drop unless specifically included",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "One night in Mysore",
            "Two nights in Coorg",
            "Mysore Palace and Chamundi Hills",
            "Brindavan Gardens",
            "Golden Temple, Bylakuppe",
            "Nisargadhama and Dubare",
            "Abbey Falls and Raja’s Seat",
            "Optional coffee plantation visit",
            "Private cab for the complete tour",
            "Optional honeymoon arrangements"
        ],
        "keywords": "Mysore Coorg honeymoon package 3 nights 4 days",
        "seoTitle": "Mysore Coorg Honeymoon Package 3 Nights 4 Days",
        "seoDescription": "Book a romantic Mysore and Coorg honeymoon package for 3 Nights and 4 Days with palace, waterfalls, coffee estates, resort stay and private cab.",
        "id": "9302"
    },
    '9303': {
        "title": "Premium Coorg and Chikmagalur Honeymoon – 4 Nights / 5 Days",
        "image": "/assets/generated/coorg_chikmagalur_honeymoon.png",
        "heroImage": "/assets/generated/coorg_chikmagalur_honeymoon.png",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Mysore, Coorg, Belur, Halebidu, Chikmagalur",
            "activities": "Sightseeing, Nature, Romantic Leisure, Royal Heritage",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys, Culture & Heritage"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Mysore – Bylakuppe – Dubare – Coorg",
                "activities": [
                    "Pickup from Mysore.",
                    "Proceed towards Coorg.",
                    "Places Covered",
                    "• Namdroling Monastery",
                    "• Golden Temple",
                    "• Kaveri Nisargadhama",
                    "• Dubare Elephant Camp",
                    "• Harangi Dam, subject to time",
                    "Continue to the hotel or coffee-estate resort.",
                    "Check in and relax.",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 02",
                "title": "Coorg Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Talakaveri",
                    "• Bhagamandala",
                    "• Abbey Falls",
                    "• Madikeri Fort",
                    "• Omkareshwara Temple",
                    "• Raja’s Seat",
                    "• Coffee plantation, optional",
                    "• Madikeri local market",
                    "Return to the resort.",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 03",
                "title": "Coorg – Belur – Halebidu – Chikmagalur",
                "activities": [
                    "After breakfast, check out and proceed towards Chikmagalur.",
                    "Places Covered En Route",
                    "• Chennakeshava Temple, Belur",
                    "• Hoysaleswara Temple, Halebidu",
                    "• Yagachi Dam, subject to time",
                    "Continue to Chikmagalur and check in at the selected hotel or coffee-estate resort.",
                    "The evening is free for leisure.",
                    "Optional Honeymoon Arrangements",
                    "• Plantation-view room",
                    "• Flower decoration",
                    "• Honeymoon cake",
                    "• Candlelight dinner",
                    "• Couple bonfire, subject to resort policy",
                    "Overnight stay in Chikmagalur."
                ]
            },
            {
                "day": "Day 04",
                "title": "Chikmagalur Full-Day Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Mullayanagiri Peak",
                    "• Seethalayyanagiri",
                    "• Baba Budangiri",
                    "• Jhari Falls",
                    "• Hirekolale Lake",
                    "• Coffee Museum, subject to opening",
                    "• Chikmagalur local market",
                    "Certain hill and waterfall points may require a local jeep depending on road and weather conditions.",
                    "Return to the hotel.",
                    "Overnight stay in Chikmagalur."
                ]
            },
            {
                "day": "Day 05",
                "title": "Chikmagalur – Bangalore Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Proceed towards Bangalore.",
                    "Drop at:",
                    "• Bangalore Airport",
                    "• Bangalore Railway Station",
                    "• Bangalore Bus Stand",
                    "• Preferred city location",
                    "Mysore drop can also be arranged according to the selected plan."
                ]
            }
        ],
        "inclusions": [
            "Two nights’ accommodation in Coorg",
            "Two nights’ accommodation in Chikmagalur",
            "Daily breakfast",
            "Mysore pickup",
            "Bangalore or Mysore drop as confirmed",
            "Private air-conditioned sedan",
            "Transfers and sightseeing as per itinerary",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State permit charges, where applicable",
            "Assistance from Logaa Holidays",
            "Confirmed honeymoon arrangements"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Monument and attraction entry tickets",
            "❌ Dubare activities",
            "❌ Coffee plantation charges",
            "❌ Local jeep charges",
            "❌ Jhari Falls jeep charges, where applicable",
            "❌ Boating charges",
            "❌ Guide charges",
            "❌ Adventure activities",
            "❌ Personal expenses",
            "❌ Room service",
            "❌ Travel insurance",
            "❌ Extra vehicle usage",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Expenses due to weather or road restrictions",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "Two nights in Coorg",
            "Two nights in Chikmagalur",
            "Coffee-estate resort options",
            "Abbey Falls and Raja’s Seat",
            "Belur and Halebidu heritage sites",
            "Mullayanagiri Peak",
            "Baba Budangiri",
            "Hirekolale Lake",
            "Optional jeep experience",
            "Private cab for the complete tour"
        ],
        "keywords": "Coorg Chikmagalur honeymoon package 4 nights 5 days",
        "seoTitle": "Coorg Chikmagalur Honeymoon Package 4 Nights 5 Days",
        "seoDescription": "Book a 4 Nights 5 Days Coorg and Chikmagalur honeymoon package with coffee-estate resorts, waterfalls, mountains, heritage sites and private cab.",
        "id": "9303"
    },
    '9304': {
        "title": "Premium Karnataka Honeymoon Package – 5 Nights / 6 Days",
        "badge": "Premium",
        "image": "/assets/generated/karnataka_premium_honeymoon.png",
        "heroImage": "/assets/generated/karnataka_premium_honeymoon.png",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Mysore, Coorg, Chikmagalur, Bangalore",
            "activities": "Sightseeing, Nature, Romantic Leisure, Royal Heritage",
            "themes": "Honeymoon, Romantic, Hill Stations & Valleys, Culture & Heritage"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per couple"
        },
        "itinerary": [
            {
                "day": "Day 01",
                "title": "Bangalore – Srirangapatna – Mysore",
                "activities": [
                    "Pickup from Bangalore Airport, Railway Station, Bus Stand or hotel.",
                    "Proceed towards Mysore.",
                    "Depending on arrival time, visit:",
                    "• Srirangapatna Ranganathaswamy Temple",
                    "• Tipu Sultan’s Summer Palace",
                    "• Gumbaz, subject to time",
                    "• Mysore Palace",
                    "• Chamundi Hills",
                    "• Brindavan Gardens",
                    "Check in at the hotel.",
                    "Overnight stay in Mysore."
                ]
            },
            {
                "day": "Day 02",
                "title": "Mysore – Bylakuppe – Dubare – Coorg",
                "activities": [
                    "After breakfast, check out and proceed towards Coorg.",
                    "Places Covered",
                    "• Namdroling Monastery",
                    "• Golden Temple",
                    "• Kaveri Nisargadhama",
                    "• Dubare Elephant Camp",
                    "• Harangi Dam, subject to time",
                    "Continue to Coorg and check in at the resort.",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 03",
                "title": "Coorg Full-Day Sightseeing",
                "activities": [
                    "After breakfast, visit:",
                    "• Talakaveri",
                    "• Bhagamandala",
                    "• Abbey Falls",
                    "• Madikeri Fort",
                    "• Omkareshwara Temple",
                    "• Raja’s Seat",
                    "• Coffee plantation, optional",
                    "• Madikeri market",
                    "Return to the resort.",
                    "Overnight stay in Coorg."
                ]
            },
            {
                "day": "Day 04",
                "title": "Coorg – Belur – Halebidu – Chikmagalur",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed towards Chikmagalur.",
                    "Places Covered",
                    "• Belur Chennakeshava Temple",
                    "• Halebidu Hoysaleswara Temple",
                    "• Yagachi Dam, subject to time",
                    "Continue to Chikmagalur.",
                    "Check in at the selected hotel or coffee-estate resort.",
                    "Overnight stay in Chikmagalur."
                ]
            },
            {
                "day": "Day 05",
                "title": "Chikmagalur Sightseeing",
                "activities": [
                    "After breakfast, proceed for sightseeing.",
                    "Places Covered",
                    "• Mullayanagiri Peak",
                    "• Seethalayyanagiri",
                    "• Baba Budangiri",
                    "• Jhari Falls",
                    "• Hirekolale Lake",
                    "• Coffee Museum, subject to opening",
                    "• Chikmagalur local market",
                    "Return to the resort.",
                    "Optional Romantic Experiences",
                    "• Couple bonfire",
                    "• Plantation walk",
                    "• Candlelight dinner",
                    "• Flower decoration",
                    "• Honeymoon cake",
                    "• Couple photoshoot",
                    "Overnight stay in Chikmagalur."
                ]
            },
            {
                "day": "Day 06",
                "title": "Chikmagalur – Bangalore Departure",
                "activities": [
                    "After breakfast, check out.",
                    "Proceed towards Bangalore.",
                    "Drop at Airport, Railway Station, Bus Stand or preferred city location."
                ]
            }
        ],
        "inclusions": [
            "One night’s accommodation in Mysore",
            "Two nights’ accommodation in Coorg",
            "Two nights’ accommodation in Chikmagalur",
            "Daily breakfast",
            "Bangalore pickup and drop",
            "Private air-conditioned sedan",
            "Transfers and sightseeing as per itinerary",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State permit charges, where applicable",
            "Assistance from Logaa Holidays",
            "Honeymoon arrangements specifically confirmed"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner unless included",
            "❌ Monument and attraction entry tickets",
            "❌ Mysore Palace entry",
            "❌ Brindavan Gardens entry",
            "❌ Dubare activities",
            "❌ Coffee plantation charges",
            "❌ Local jeep charges",
            "❌ Jhari Falls jeep charges",
            "❌ Boating and adventure activities",
            "❌ Guide charges",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Extra vehicle usage",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Expenses caused by traffic, weather or road restrictions",
            "❌ Anything not specifically mentioned under inclusions"
        ],
        "highlights": [
            "One night in Mysore",
            "Two nights in Coorg",
            "Two nights in Chikmagalur",
            "Mysore Palace and Brindavan Gardens",
            "Golden Temple and Dubare",
            "Abbey Falls and Raja’s Seat",
            "Belur and Halebidu",
            "Mullayanagiri and Baba Budangiri",
            "Coffee-estate resort options",
            "Private cab for the complete tour"
        ],
        "keywords": "Karnataka honeymoon package 5 nights 6 days",
        "seoTitle": "Karnataka Honeymoon Package 5 Nights 6 Days",
        "seoDescription": "Book a premium Karnataka honeymoon package for 5 Nights and 6 Days covering Mysore, Coorg and Chikmagalur with resorts, sightseeing and private cab.",
        "id": "9304"
    },
"""

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Append to packagesDatabase
if "'9301':" not in content:
    content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code, content, count=1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")
