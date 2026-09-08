import re

pkg = """
    '2091': {
        "id": "2091",
        "title": "Enchanting Tamil Nadu Tour Package – 6 Nights / 7 Days",
        "image": "/assets/Tamil Nadu1.webp",
        "heroImage": "/assets/Tamil Nadu1.webp",
        "overview": {
            "duration": "6 Nights / 7 Days",
            "destination": "Chennai, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram, Kanyakumari",
            "activities": "Temples, Heritage, Coastal, Pilgrimage",
            "themes": "Family, Pilgrimage, Cultural, Heritage"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Chennai Arrival and Sightseeing",
                "activities": [
                    "Upon arrival at Chennai Airport or Railway Station, our representative will welcome you and assist with the transfer to your hotel.",
                    "After check-in and refreshments, proceed for Chennai local sightseeing.",
                    "Places to Visit:",
                    "• Kapaleeswarar Temple",
                    "• Ashtalakshmi Temple",
                    "• Marina Beach",
                    "• Besant Nagar Beach, subject to available time",
                    "After sightseeing, return to the hotel and relax.",
                    "Overnight stay in Chennai."
                ]
            },
            {
                "day": "Day 2",
                "title": "Chennai to Mahabalipuram",
                "activities": [
                    "After breakfast, check out from the hotel and proceed to Mahabalipuram via the scenic East Coast Road.",
                    "Places to Visit:",
                    "• DakshinaChitra Heritage Museum",
                    "• Madras Crocodile Bank",
                    "• Shore Temple",
                    "• Pancha Rathas",
                    "• Arjuna's Penance",
                    "• Krishna Mandapam",
                    "• Varaha Cave Temple",
                    "• Krishna's Butter Ball",
                    "• Tiger Cave, subject to available time",
                    "After sightseeing, check in at the hotel.",
                    "Overnight stay in Mahabalipuram."
                ]
            },
            {
                "day": "Day 3",
                "title": "Mahabalipuram to Thanjavur",
                "activities": [
                    "After breakfast, check out and drive to Thanjavur, a historic city known for Chola architecture, classical arts and ancient temples.",
                    "Upon arrival, check in at the hotel and proceed for local sightseeing.",
                    "Places to Visit:",
                    "• Brihadeeswarar Temple",
                    "• Nandi Mandapam",
                    "• Thanjavur Maratha Palace",
                    "• Saraswathi Mahal Library",
                    "• Thanjavur Art Gallery, subject to opening hours",
                    "Return to the hotel after sightseeing.",
                    "Overnight stay in Thanjavur."
                ]
            },
            {
                "day": "Day 4",
                "title": "Thanjavur – Trichy – Madurai",
                "activities": [
                    "After breakfast, check out from the hotel and proceed towards Madurai.",
                    "En route, visit the major spiritual and historical attractions of Trichy.",
                    "Trichy Sightseeing:",
                    "• Sri Ranganathaswamy Temple, Srirangam",
                    "• Jambukeswarar Temple, Thiruvanaikaval",
                    "• Rockfort Ucchi Pillayar Temple",
                    "After completing the sightseeing, continue the journey to Madurai.",
                    "Upon arrival, check in at the hotel. Depending on the arrival time, proceed for Madurai sightseeing.",
                    "Madurai Sightseeing:",
                    "• Meenakshi Amman Temple",
                    "• Thirumalai Nayakkar Palace",
                    "• Gandhi Memorial Museum",
                    "• Vandiyur Mariamman Teppakulam, subject to available time",
                    "Return to the hotel.",
                    "Overnight stay in Madurai."
                ]
            },
            {
                "day": "Day 5",
                "title": "Madurai to Rameswaram",
                "activities": [
                    "After breakfast, check out and drive towards Rameswaram.",
                    "Enjoy the scenic journey across Pamban Bridge, which offers beautiful views of the sea.",
                    "Upon arrival, check in at the hotel and proceed for Rameswaram sightseeing.",
                    "Places to Visit:",
                    "• Ramanathaswamy Temple",
                    "• Agni Theertham",
                    "• 22 Holy Wells inside the temple, optional",
                    "• Five-Faced Hanuman Temple",
                    "• Dr. A.P.J. Abdul Kalam Memorial",
                    "• Ramar Patham",
                    "• Kothandaramaswamy Temple",
                    "• Dhanushkodi",
                    "• Arichal Munai, subject to road and weather conditions",
                    "After sightseeing, return to the hotel.",
                    "Overnight stay in Rameswaram."
                ]
            },
            {
                "day": "Day 6",
                "title": "Rameswaram to Kanyakumari",
                "activities": [
                    "After breakfast, check out from the hotel and proceed to Kanyakumari, the southernmost tip of mainland India.",
                    "Upon arrival, check in at the hotel and continue with sightseeing.",
                    "Places to Visit:",
                    "• Suchindram Thanumalayan Temple",
                    "• Kanyakumari Bhagavathi Amman Temple",
                    "• Triveni Sangam",
                    "• Gandhi Memorial Mandapam",
                    "• Vivekananda Rock Memorial",
                    "• Thiruvalluvar Statue",
                    "• Glass Bridge, subject to operation",
                    "• Kanyakumari Sunset View Point",
                    "After enjoying the sunset, return to the hotel.",
                    "Overnight stay in Kanyakumari."
                ]
            },
            {
                "day": "Day 7",
                "title": "Kanyakumari to Trivandrum Departure",
                "activities": [
                    "Wake up early to enjoy the beautiful sunrise at Kanyakumari.",
                    "After breakfast, check out from the hotel and proceed to Trivandrum Airport or Railway Station for your onward journey.",
                    "Depending on the departure time, optional sightseeing may be arranged at an additional cost.",
                    "The tour concludes with pleasant memories of Tamil Nadu's temples, historic cities, coastal attractions and cultural heritage."
                ]
            }
        ],
        "inclusions": [
            "Pick-up from Chennai Airport or Railway Station",
            "Drop at Trivandrum Airport or Railway Station",
            "6 nights hotel accommodation",
            "Accommodation on double or twin-sharing basis",
            "Daily breakfast at the hotel",
            "Private air-conditioned vehicle for transfers and sightseeing",
            "Vehicle based on the number of guests",
            "Driver allowance",
            "Fuel charges",
            "Toll charges",
            "Parking charges",
            "State permit and interstate permit charges, wherever applicable",
            "Sightseeing as mentioned in the itinerary",
            "Hotel and transportation taxes",
            "Assistance from Logaa Holidays throughout the tour"
        ],
        "exclusions": [
            "❌ Flight, train or bus tickets",
            "❌ Lunch and dinner unless specifically mentioned",
            "❌ Monument and museum entrance fees",
            "❌ Temple special darshan tickets",
            "❌ Pooja and ritual expenses",
            "❌ Guide charges",
            "❌ Ferry charges at Kanyakumari",
            "❌ Vivekananda Rock Memorial entry charges",
            "❌ Glass Bridge entry charges",
            "❌ Charges for bathing in the 22 holy wells at Rameswaram",
            "❌ Boating and optional activity charges",
            "❌ Camera and video charges",
            "❌ Travel insurance",
            "❌ Personal expenses such as laundry, room service, telephone calls and shopping",
            "❌ Early check-in and late check-out charges",
            "❌ Additional sightseeing not mentioned in the itinerary",
            "❌ Expenses arising due to weather conditions, roadblocks, strikes or natural events",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Visit Kapaleeswarar Temple and Ashtalakshmi Temple in Chennai",
            "Explore Marina Beach and the Chennai coastline",
            "Visit the UNESCO World Heritage monuments of Mahabalipuram",
            "See Shore Temple, Pancha Rathas and Arjuna's Penance",
            "Explore the magnificent Brihadeeswarar Temple in Thanjavur",
            "Visit the historic Thanjavur Royal Palace complex",
            "Seek blessings at Srirangam and Jambukeswarar temples in Trichy",
            "Visit Madurai Meenakshi Amman Temple",
            "Enjoy a scenic drive across Pamban Bridge",
            "Visit Ramanathaswamy Temple and Dhanushkodi",
            "Witness the meeting point of three seas at Kanyakumari",
            "Enjoy beautiful sunrise and sunset views",
            "Visit Vivekananda Rock Memorial and Thiruvalluvar Statue"
        ],
        "keywords": "Enchanting Tamil Nadu tour package, Tamil Nadu tour package 6 nights 7 days, Chennai to Kanyakumari tour package, Tamil Nadu temple tour package, Chennai Mahabalipuram Thanjavur tour, Madurai Rameswaram Kanyakumari package, Tamil Nadu family tour package, Tamil Nadu pilgrimage package, South India heritage tour, Logaa Holidays Tamil Nadu package",
        "seoTitle": "Enchanting Tamil Nadu Tour Package 6 Nights 7 Days | Logaa Holidays",
        "seoDescription": "Book a 6 Nights 7 Days Tamil Nadu tour package covering Chennai, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram and Kanyakumari with hotel, breakfast and private cab."
    },
"""

target = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target, 'r', encoding='utf-8') as f:
    content = f.read()

if "'2091'" in content or '"2091"' in content:
    print("2091 already exists, skipping.")
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
        print("SUCCESS: Package 2091 added.")
