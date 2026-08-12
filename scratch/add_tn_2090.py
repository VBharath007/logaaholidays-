import re

pkg = """
    '2090': {
        "id": "2090",
        "title": "Best of Tamil Nadu Tour Package – 6 Nights / 7 Days",
        "image": "/assets/Tamil Nadu1.webp",
        "heroImage": "/assets/Tamil Nadu1.webp",
        "overview": {
            "duration": "6 Nights / 7 Days",
            "destination": "Chennai, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram, Kanyakumari",
            "activities": "Temples, Heritage, Beaches, Pilgrimage",
            "themes": "Family, Pilgrimage, Cultural, Heritage"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Chennai Arrival and Local Sightseeing",
                "activities": [
                    "Upon arrival at Chennai Airport or Railway Station, our representative will welcome you and assist with your transfer to the hotel.",
                    "After check-in and refreshments, proceed for Chennai sightseeing.",
                    "Places to Visit:",
                    "• Kapaleeswarar Temple",
                    "• Ashtalakshmi Temple",
                    "• Marina Beach",
                    "• Besant Nagar Beach, subject to available time",
                    "After sightseeing, return to the hotel.",
                    "Overnight stay in Chennai."
                ]
            },
            {
                "day": "Day 2",
                "title": "Chennai to Mahabalipuram",
                "activities": [
                    "After breakfast, check out from the hotel and drive towards Mahabalipuram.",
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
                    "After completing the sightseeing, check in at the hotel.",
                    "Overnight stay in Mahabalipuram."
                ]
            },
            {
                "day": "Day 3",
                "title": "Mahabalipuram to Thanjavur",
                "activities": [
                    "After breakfast, check out and proceed to Thanjavur.",
                    "Upon arrival, check in at the hotel and continue with local sightseeing.",
                    "Places to Visit:",
                    "• Brihadeeswarar Temple",
                    "• Nandi Mandapam",
                    "• Thanjavur Maratha Palace",
                    "• Saraswathi Mahal Library",
                    "• Art Gallery, subject to opening hours",
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
                    "Continue the journey to Madurai.",
                    "Upon arrival, check in at the hotel. Depending on arrival time, proceed for Madurai sightseeing.",
                    "Madurai Sightseeing:",
                    "• Meenakshi Amman Temple",
                    "• Thirumalai Nayakkar Palace",
                    "• Gandhi Memorial Museum, subject to opening hours",
                    "• Vandiyur Mariamman Teppakulam, subject to available time",
                    "Return to the hotel.",
                    "Overnight stay in Madurai."
                ]
            },
            {
                "day": "Day 5",
                "title": "Madurai to Rameswaram",
                "activities": [
                    "After breakfast, check out and drive to Rameswaram.",
                    "Enjoy the scenic journey through Pamban Bridge and admire the beautiful sea views.",
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
                    "After breakfast, check out and proceed towards Kanyakumari, the southernmost tip of mainland India.",
                    "Upon arrival, check in at the hotel and continue with local sightseeing.",
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
                    "After breakfast, check out from the hotel and proceed towards Trivandrum Airport or Railway Station.",
                    "Depending on the departure time, optional sightseeing may be arranged at an additional cost.",
                    "The tour concludes with wonderful memories of Tamil Nadu's temples, heritage monuments, beaches and cultural attractions."
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
            "Vehicle options based on group size",
            "Driver allowance",
            "Fuel charges",
            "Toll charges",
            "Parking charges",
            "State permit and interstate permit charges, wherever applicable",
            "Sightseeing as mentioned in the itinerary",
            "Assistance from Logaa Holidays during the tour"
        ],
        "exclusions": [
            "❌ Flight, train or bus tickets",
            "❌ Lunch and dinner unless specifically included",
            "❌ Monument, museum and temple entrance fees",
            "❌ Ferry tickets and boating charges",
            "❌ Vivekananda Rock Memorial ferry charges",
            "❌ Glass Bridge entry charges",
            "❌ Guide charges",
            "❌ Special darshan tickets",
            "❌ Temple pooja and ritual expenses",
            "❌ Charges for bathing in the 22 holy wells at Rameswaram",
            "❌ Personal expenses such as laundry, room service and telephone calls",
            "❌ Camera and video charges",
            "❌ Optional activities and additional sightseeing",
            "❌ Travel insurance",
            "❌ Expenses caused by weather conditions, roadblocks, strikes or other circumstances beyond control",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Visit Kapaleeswarar Temple and Ashtalakshmi Temple in Chennai",
            "Explore the UNESCO-listed Shore Temple at Mahabalipuram",
            "Discover Pancha Rathas, Arjuna's Penance and Krishna's Butter Ball",
            "Visit the magnificent Brihadeeswarar Temple in Thanjavur",
            "Explore Srirangam Temple, Rockfort Temple and Jambukeswarar Temple in Trichy",
            "Seek blessings at Madurai Meenakshi Amman Temple",
            "Enjoy a scenic journey across Pamban Bridge to Rameswaram",
            "Visit Ramanathaswamy Temple, Dhanushkodi and Arichal Munai",
            "Witness the meeting point of the Arabian Sea, Bay of Bengal and Indian Ocean",
            "Enjoy the sunrise and sunset views at Kanyakumari",
            "Visit Vivekananda Rock Memorial, Thiruvalluvar Statue and Glass Bridge"
        ],
        "keywords": "Best of Tamil Nadu tour package, Tamil Nadu tour package 6 nights 7 days, Chennai to Kanyakumari tour package, Tamil Nadu temple tour, Madurai Rameswaram Kanyakumari package, Mahabalipuram Thanjavur Madurai tour, South India heritage tour, Tamil Nadu family tour package, Tamil Nadu pilgrimage package, Logaa Holidays Tamil Nadu package",
        "seoTitle": "Best of Tamil Nadu Tour Package 6 Nights 7 Days | Logaa Holidays",
        "seoDescription": "Book a 6 Nights 7 Days Tamil Nadu tour covering Chennai, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram, Kanyakumari and Trivandrum with hotels, breakfast and private cab."
    },
"""

target = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target, 'r', encoding='utf-8') as f:
    content = f.read()

if "'2090'" in content or '"2090"' in content:
    print("2090 already exists, skipping.")
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
        print("SUCCESS: Package 2090 added.")
