pkg_3090 = """
    '3090': {
        "id": "3090",
        "title": "Karnataka & Ooty Special Tour Package",
        "image": "/assets/bharath/karnataka.webp",
        "heroImage": "/assets/bharath/karnataka hero.webp",
        "overview": {
            "duration": "5 Days / 4 Nights",
            "destination": "Mysore, Ooty, Coonoor, Bangalore",
            "activities": "Heritage, Hill Station, Gardens, Wildlife, City",
            "themes": "Family, Couple, Group, Customized Tour"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Mysore Arrival and Local Sightseeing",
                "activities": [
                    "Upon arrival at Mysore Railway Station or Bus Stand, meet our tour representative and transfer to the hotel.",
                    "Places Covered: Mysore Maharaja Palace, Jaganmohan Palace Art Gallery, St. Philomena’s Cathedral, Brindavan Gardens, Krishna Raja Sagar Dam.",
                    "Enjoy the beautifully landscaped gardens and musical fountain show in the evening.",
                    "Overnight stay in Mysore."
                ]
            },
            {
                "day": "Day 2",
                "title": "Mysore to Ooty via Bandipur",
                "activities": [
                    "After breakfast, check out from the hotel and drive towards Ooty.",
                    "The journey passes through the scenic forest regions of Bandipur and Mudumalai. Wildlife sightings are subject to luck.",
                    "Places Covered in Ooty: Government Botanical Garden, Ooty Lake, Doddabetta Peak, Tea Factory or Tea Museum, Local shopping area.",
                    "Overnight stay in Ooty."
                ]
            },
            {
                "day": "Day 3",
                "title": "Ooty and Coonoor Sightseeing",
                "activities": [
                    "After breakfast, proceed for a full-day sightseeing tour of Ooty and Coonoor.",
                    "Places Covered: Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, Law’s Falls (subject to road conditions), Wellington View Point.",
                    "Return to Ooty after sightseeing.",
                    "Overnight stay in Ooty."
                ]
            },
            {
                "day": "Day 4",
                "title": "Ooty to Bangalore",
                "activities": [
                    "After breakfast, check out from the hotel and drive to Bangalore.",
                    "Places Covered: Lalbagh Botanical Garden, Cubbon Park, Bull Temple, ISKCON Temple, Tipu Sultan’s Summer Palace, Vidhana Soudha (Outside View).",
                    "Overnight stay in Bangalore."
                ]
            },
            {
                "day": "Day 5",
                "title": "Bangalore Departure",
                "activities": [
                    "After breakfast, check out from the hotel.",
                    "Depending on the departure schedule, guests may enjoy free time for shopping or optional sightseeing.",
                    "Transfer to Bangalore Airport, Railway Station, or Bus Stand for the onward journey."
                ]
            }
        ],
        "inclusions": [
            "Hotel accommodation as per selected category",
            "Daily breakfast at the hotel",
            "Private vehicle for transfers and sightseeing",
            "Mysore pickup, Bangalore drop",
            "Driver allowance, Toll charges, Parking charges",
            "Interstate permit charges",
            "Sightseeing as mentioned in the itinerary"
        ],
        "exclusions": [
            "❌ Airfare, train fare, or bus fare",
            "❌ Lunch and dinner unless mentioned",
            "❌ Monument and sightseeing entrance tickets",
            "❌ Boating, horse riding, toy train, and adventure activities",
            "❌ Safari charges and forest entry fees",
            "❌ Guide charges, Personal expenses",
            "❌ Camera and video charges, Room heater charges",
            "❌ Travel insurance",
            "❌ Expenses caused by weather, roadblocks, strikes, or natural calamities",
            "❌ Anything not specifically mentioned under package inclusions"
        ],
        "highlights": [
            "Visit the famous Mysore Palace",
            "Explore Brindavan Gardens and KRS Dam",
            "Travel through the Bandipur and Mudumalai forest route",
            "Enjoy Ooty Lake and Botanical Garden",
            "Visit Doddabetta Peak",
            "Explore Coonoor tea estates and scenic viewpoints",
            "Visit Bangalore’s gardens, temples, and heritage attractions",
            "Comfortable pickup and drop services"
        ],
        "keywords": "Karnataka and Ooty special tour package, Mysore Ooty Coonoor Bangalore tour, South India hill station package, Karnataka Tamil Nadu tour package, Logaa Holidays Karnataka package",
        "seoTitle": "Karnataka & Ooty Special Tour Package 4 Nights 5 Days | Logaa Holidays",
        "seoDescription": "Book a 4 Nights 5 Days Karnataka and Ooty tour covering Mysore, Bandipur, Ooty, Coonoor, and Bangalore with private cab and sightseeing."
    },
"""

target = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target, 'r', encoding='utf-8') as f:
    content = f.read()

if "'3090'" in content or '"3090"' in content:
    print("Package 3090 already exists, skipping.")
else:
    marker = "export const packagesDatabase: Record<string, any> = {"
    idx = content.find(marker)
    if idx == -1:
        print("Marker not found!")
    else:
        insert_at = idx + len(marker)
        content = content[:insert_at] + "\n" + pkg_3090 + content[insert_at:]
        with open(target, 'w', encoding='utf-8') as f:
            f.write(content)
        print("SUCCESS: Package 3090 added.")
