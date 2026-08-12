pkg = """
    '2095': {
        "id": "2095",
        "title": "Thanjavur – Trichy – Kumbakonam Tour Package – 3 Nights / 4 Days",
        "image": "/assets/thanjavur/thanjavur 1.webp",
        "heroImage": "/assets/thanjavur/thanjavur hero 2.webp",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Trichy, Thanjavur, Kumbakonam",
            "activities": "Temples, Heritage, Pilgrimage, Culture",
            "themes": "Family, Pilgrimage, Heritage, Cultural"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Madurai to Trichy",
                "activities": [
                    "Pickup from Madurai Airport, Railway Station, hotel or preferred location.",
                    "Proceed towards Trichy.",
                    "Upon arrival, check in at the hotel and continue with local sightseeing.",
                    "Places to Visit:",
                    "• Sri Ranganathaswamy Temple, Srirangam",
                    "• Jambukeswarar Temple, Thiruvanaikaval",
                    "• Rockfort Ucchi Pillayar Temple",
                    "• Samayapuram Mariamman Temple, subject to available time",
                    "After sightseeing, return to the hotel.",
                    "Overnight stay in Trichy."
                ]
            },
            {
                "day": "Day 2",
                "title": "Trichy to Thanjavur",
                "activities": [
                    "After breakfast, check out from the hotel and proceed to Thanjavur.",
                    "Upon arrival, check in at the hotel and continue with local sightseeing.",
                    "Places to Visit:",
                    "• Brihadeeswarar Temple",
                    "• Nandi Mandapam",
                    "• Thanjavur Maratha Palace",
                    "• Saraswathi Mahal Library",
                    "• Art Gallery and Museum",
                    "• Schwartz Church",
                    "• Bangaru Kamakshi Amman Temple",
                    "• Traditional Tanjore painting or handicraft centre, subject to availability",
                    "Return to the hotel after sightseeing.",
                    "Overnight stay in Thanjavur."
                ]
            },
            {
                "day": "Day 3",
                "title": "Thanjavur – Kumbakonam Sightseeing",
                "activities": [
                    "After breakfast, check out and proceed towards Kumbakonam.",
                    "En route, visit important heritage and temple attractions.",
                    "Places to Visit:",
                    "• Punnainallur Mariamman Temple",
                    "• Darasuram Airavatesvara Temple",
                    "• Swamimalai Murugan Temple",
                    "• Adi Kumbeswarar Temple",
                    "• Sarangapani Temple",
                    "• Ramaswamy Temple",
                    "• Chakrapani Temple",
                    "• Mahamaham Tank",
                    "Depending on the available time, guests may also visit a traditional bronze-making centre.",
                    "Check in at the hotel.",
                    "Overnight stay in Kumbakonam."
                ]
            },
            {
                "day": "Day 4",
                "title": "Kumbakonam Sightseeing and Madurai Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Proceed for selected temple visits depending on departure time.",
                    "Optional Temple Visits:",
                    "• Oppiliappan Temple",
                    "• Thirunageswaram Rahu Temple",
                    "• Patteeswaram Dhenupureeswarar Temple",
                    "• Thingalur Chandran Temple",
                    "• Alangudi Guru Temple",
                    "After sightseeing, proceed towards Madurai.",
                    "Drop at Madurai Airport, Railway Station, hotel or preferred location.",
                    "The tour concludes with memorable experiences of Trichy, Thanjavur and Kumbakonam."
                ]
            }
        ],
        "inclusions": [
            "Pickup from Madurai Airport, Railway Station or hotel",
            "Drop at Madurai Airport, Railway Station or hotel",
            "3 nights hotel accommodation",
            "Accommodation on double or twin-sharing basis",
            "Daily breakfast at the hotel",
            "Private air-conditioned vehicle",
            "Transfers and sightseeing as per itinerary",
            "Fuel charges",
            "Driver allowance",
            "Toll charges",
            "Parking charges",
            "State permit charges, wherever applicable",
            "Assistance from Logaa Holidays"
        ],
        "exclusions": [
            "❌ Flight, train and bus tickets",
            "❌ Lunch and dinner",
            "❌ Temple special darshan charges",
            "❌ Pooja and ritual expenses",
            "❌ Monument, museum and palace entrance fees",
            "❌ Guide charges",
            "❌ Camera and video charges",
            "❌ Personal expenses",
            "❌ Shopping expenses",
            "❌ Early check-in and late check-out charges",
            "❌ Additional sightseeing not mentioned in the itinerary",
            "❌ Navagraha temple tour unless specifically included",
            "❌ Expenses caused by traffic, weather, roadblocks or local restrictions",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Visit Srirangam Ranganathaswamy Temple",
            "Explore Jambukeswarar Temple and Rockfort Temple",
            "Visit the UNESCO-listed Brihadeeswarar Temple",
            "Explore Thanjavur Maratha Palace",
            "Visit Saraswathi Mahal Library and Art Gallery",
            "Discover traditional Tanjore paintings and handicrafts",
            "Visit important temples in Kumbakonam",
            "Explore Darasuram Airavatesvara Temple",
            "Visit Swamimalai Murugan Temple",
            "Enjoy comfortable private transportation"
        ],
        "keywords": "Thanjavur tour package 3 nights 4 days, Trichy Thanjavur Kumbakonam tour, Madurai to Thanjavur package, Kumbakonam temple tour package, Thanjavur heritage tour, Srirangam Thanjavur tour, Brihadeeswarar Temple package, Tamil Nadu temple tour, family pilgrimage tour from Madurai, Logaa Holidays Thanjavur package",
        "seoTitle": "Thanjavur Trichy Kumbakonam Tour Package 3 Nights 4 Days",
        "seoDescription": "Book a 3 Nights 4 Days Thanjavur, Trichy and Kumbakonam tour package from Madurai covering Srirangam, Brihadeeswarar Temple, Thanjavur Palace, Darasuram and Swamimalai."
    },
"""

target = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target, 'r', encoding='utf-8') as f:
    content = f.read()

if "'2095'" in content or '"2095"' in content:
    print("2095 already exists, skipping.")
else:
    marker = "export const packagesDatabase: Record<string, any> = {"
    idx = content.find(marker)
    if idx == -1:
        print("Marker not found!")
    else:
        insert_at = idx + len(marker)
        content = content[:insert_at] + "\n" + pkg + content[insert_at:]
        with open(target, 'w', encoding='utf-8') as f:
            f.write(content)
        print("SUCCESS: Package 2095 added.")
