import json
import re

new_packages = {
    '8007': {
        "title": "Delhi City Tour Package",
        "badge": "Golden Triangle Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {
            "duration": "2 Nights / 3 Days",
            "destination": "Old Delhi and New Delhi",
            "activities": "Sightseeing, Heritage, Monuments, Markets",
            "themes": "Golden Triangle Tours"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Delhi Arrival and New Delhi Sightseeing",
                "activities": [
                    "Pickup from Delhi Airport or railway station and hotel check-in.",
                    "Depending on arrival time, visit:",
                    "• India Gate",
                    "• Kartavya Path",
                    "• Rashtrapati Bhavan photo stop",
                    "• Parliament House photo stop",
                    "• Birla Mandir",
                    "• Gurudwara Bangla Sahib",
                    "• Connaught Place",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 2",
                "title": "Old Delhi and South Delhi Sightseeing",
                "activities": [
                    "After breakfast, visit:",
                    "• Raj Ghat",
                    "• Red Fort photo stop or visit",
                    "• Jama Masjid",
                    "• Chandni Chowk",
                    "• Humayun’s Tomb",
                    "• Lotus Temple",
                    "• Qutub Minar",
                    "• Akshardham Temple, depending on opening schedule",
                    "Return to the hotel.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 3",
                "title": "Delhi Departure",
                "activities": [
                    "Breakfast, check-out and transfer to Delhi Airport or railway station."
                ]
            }
        ],
        "inclusions": [
            "Hotel accommodation in the selected category",
            "Daily breakfast",
            "Dinner when the MAP plan is selected",
            "Private AC vehicle for transfers and sightseeing",
            "Airport or railway station pickup and drop",
            "Driver allowance",
            "Fuel, toll and parking as specified",
            "Sightseeing according to the itinerary",
            "Logaa Holidays travel support",
            "Flight or train booking assistance"
        ],
        "exclusions": [
            "❌ Flight or train tickets unless included",
            "❌ Monument entrance fees",
            "❌ Local guide charges",
            "❌ Lunch and unmentioned meals",
            "❌ Camera and video fees",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Destinations Covered: Old Delhi and New Delhi",
            "Night Stay: 2 Nights in Delhi"
        ],
        "keywords": "Delhi city tour package, Delhi sightseeing package, Delhi 2 nights 3 days package, New Delhi Old Delhi tour, Delhi holiday package",
        "seoTitle": "Delhi City Tour Package - 2 Nights / 3 Days | Logaa Holidays",
        "seoDescription": "Book Delhi City Tour Package for 2 Nights and 3 Days covering Old Delhi, New Delhi attractions, India Gate, Qutub Minar, and Akshardham Temple.",
        "id": "8007"
    },
    '8008': {
        "title": "Delhi and Agra Heritage Package",
        "badge": "Golden Triangle Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {
            "duration": "3 Nights / 4 Days",
            "destination": "Delhi and Agra",
            "activities": "Sightseeing, Heritage, Taj Mahal",
            "themes": "Golden Triangle Tours"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Delhi Arrival",
                "activities": [
                    "Pickup, hotel check-in and New Delhi sightseeing.",
                    "Visit India Gate, Rashtrapati Bhavan photo stop, Parliament House photo stop, Gurudwara Bangla Sahib and Connaught Place.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 2",
                "title": "Delhi Sightseeing",
                "activities": [
                    "Visit Raj Ghat, Jama Masjid, Chandni Chowk, Red Fort area, Humayun’s Tomb, Lotus Temple and Qutub Minar.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 3",
                "title": "Delhi – Agra",
                "activities": [
                    "Check out and proceed to Agra.",
                    "Visit:",
                    "• Taj Mahal",
                    "• Agra Fort",
                    "• Mehtab Bagh, depending on time",
                    "Check in at the hotel.",
                    "Overnight stay in Agra."
                ]
            },
            {
                "day": "Day 4",
                "title": "Agra – Delhi Departure",
                "activities": [
                    "After breakfast, check out and transfer to Delhi Airport or railway station."
                ]
            }
        ],
        "inclusions": [
            "Hotel accommodation in the selected category",
            "Daily breakfast",
            "Dinner when the MAP plan is selected",
            "Private AC vehicle for transfers and sightseeing",
            "Airport or railway station pickup and drop",
            "Driver allowance",
            "Fuel, toll and parking as specified",
            "Sightseeing according to the itinerary",
            "Logaa Holidays travel support",
            "Flight or train booking assistance"
        ],
        "exclusions": [
            "❌ Flight or train tickets unless included",
            "❌ Monument entrance fees",
            "❌ Local guide charges",
            "❌ Lunch and unmentioned meals",
            "❌ Camera and video fees",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Destinations Covered: Delhi and Agra",
            "Night Stay: 2 Nights Delhi and 1 Night Agra"
        ],
        "keywords": "Delhi Agra tour package, Delhi Agra 3 nights 4 days, Taj Mahal tour from Delhi, Delhi Agra heritage package, Golden triangle packages",
        "seoTitle": "Delhi and Agra Heritage Package - 3 Nights / 4 Days | Logaa Holidays",
        "seoDescription": "Book Delhi and Agra Heritage Package for 3 Nights 4 Days covering Old Delhi, New Delhi and Taj Mahal Agra.",
        "id": "8008"
    },
    '8009': {
        "title": "Golden Triangle Express Package",
        "badge": "Golden Triangle Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {
            "duration": "4 Nights / 5 Days",
            "destination": "Delhi, Agra and Jaipur",
            "activities": "Sightseeing, Heritage, Culture",
            "themes": "Golden Triangle Tours"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Delhi Arrival",
                "activities": [
                    "Pickup and New Delhi sightseeing.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 2",
                "title": "Delhi Sightseeing",
                "activities": [
                    "Explore Old Delhi and South Delhi attractions including Raj Ghat, Jama Masjid, Chandni Chowk, Humayun’s Tomb, Lotus Temple and Qutub Minar.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 3",
                "title": "Delhi – Agra",
                "activities": [
                    "Proceed to Agra and visit the Taj Mahal and Agra Fort.",
                    "Overnight stay in Agra."
                ]
            },
            {
                "day": "Day 4",
                "title": "Agra – Fatehpur Sikri – Jaipur",
                "activities": [
                    "Check out and drive to Jaipur.",
                    "Visit Fatehpur Sikri en route, depending on available time.",
                    "Arrive in Jaipur and check in.",
                    "Evening free for local shopping.",
                    "Overnight stay in Jaipur."
                ]
            },
            {
                "day": "Day 5",
                "title": "Jaipur Sightseeing – Delhi Departure",
                "activities": [
                    "Visit:",
                    "• Amber Fort",
                    "• Jal Mahal photo stop",
                    "• City Palace",
                    "• Jantar Mantar",
                    "• Hawa Mahal photo stop",
                    "Later, transfer to Jaipur Airport, Jaipur Railway Station or Delhi."
                ]
            }
        ],
        "inclusions": [
            "Hotel accommodation in the selected category",
            "Daily breakfast",
            "Dinner when the MAP plan is selected",
            "Private AC vehicle for transfers and sightseeing",
            "Airport or railway station pickup and drop",
            "Driver allowance",
            "Fuel, toll and parking as specified",
            "Sightseeing according to the itinerary",
            "Logaa Holidays travel support",
            "Flight or train booking assistance"
        ],
        "exclusions": [
            "❌ Flight or train tickets unless included",
            "❌ Monument entrance fees",
            "❌ Local guide charges",
            "❌ Lunch and unmentioned meals",
            "❌ Camera and video fees",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Destinations Covered: Delhi, Agra and Jaipur",
            "Night Stay: 2 Nights Delhi, 1 Night Agra and 1 Night Jaipur"
        ],
        "keywords": "Golden Triangle 4 nights 5 days, Delhi Agra Jaipur tour, Express Golden Triangle package, India Golden Triangle tour",
        "seoTitle": "Golden Triangle Express Package - 4 Nights / 5 Days | Logaa Holidays",
        "seoDescription": "Experience the Golden Triangle Express Package covering Delhi, Agra, and Jaipur in 4 Nights and 5 Days.",
        "id": "8009"
    },
    '8010': {
        "title": "Classic Golden Triangle Package",
        "badge": "Golden Triangle Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {
            "duration": "5 Nights / 6 Days",
            "destination": "Delhi, Agra and Jaipur",
            "activities": "Sightseeing, Heritage, Culture",
            "themes": "Golden Triangle Tours"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Delhi Arrival",
                "activities": [
                    "Airport or railway station pickup.",
                    "Visit India Gate, Kartavya Path, Rashtrapati Bhavan photo stop, Parliament House photo stop and Gurudwara Bangla Sahib.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 2",
                "title": "Delhi Sightseeing",
                "activities": [
                    "Visit Raj Ghat, Jama Masjid, Chandni Chowk, Red Fort area, Humayun’s Tomb, Lotus Temple, Qutub Minar and other attractions according to time.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 3",
                "title": "Delhi – Agra",
                "activities": [
                    "Drive to Agra.",
                    "Visit Taj Mahal, Agra Fort and Mehtab Bagh depending on time.",
                    "Overnight stay in Agra."
                ]
            },
            {
                "day": "Day 4",
                "title": "Agra – Fatehpur Sikri – Jaipur",
                "activities": [
                    "Proceed to Jaipur via Fatehpur Sikri.",
                    "Check in at the hotel and enjoy the evening at leisure.",
                    "Overnight stay in Jaipur."
                ]
            },
            {
                "day": "Day 5",
                "title": "Jaipur Sightseeing",
                "activities": [
                    "Visit:",
                    "• Amber Fort",
                    "• Jal Mahal",
                    "• City Palace",
                    "• Jantar Mantar",
                    "• Hawa Mahal",
                    "• Albert Hall Museum photo stop",
                    "• Local handicraft market",
                    "Overnight stay in Jaipur."
                ]
            },
            {
                "day": "Day 6",
                "title": "Jaipur – Delhi Departure",
                "activities": [
                    "Check out and transfer to Jaipur or Delhi for the return journey."
                ]
            }
        ],
        "inclusions": [
            "Hotel accommodation in the selected category",
            "Daily breakfast",
            "Dinner when the MAP plan is selected",
            "Private AC vehicle for transfers and sightseeing",
            "Airport or railway station pickup and drop",
            "Driver allowance",
            "Fuel, toll and parking as specified",
            "Sightseeing according to the itinerary",
            "Logaa Holidays travel support",
            "Flight or train booking assistance"
        ],
        "exclusions": [
            "❌ Flight or train tickets unless included",
            "❌ Monument entrance fees",
            "❌ Local guide charges",
            "❌ Lunch and unmentioned meals",
            "❌ Camera and video fees",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Destinations Covered: Delhi, Agra and Jaipur",
            "Night Stay: 2 Nights Delhi, 1 Night Agra and 2 Nights Jaipur",
            "Recommended For: Families and first-time North India travellers"
        ],
        "keywords": "Classic Golden Triangle tour, Delhi Agra Jaipur 5 nights 6 days, best golden triangle package, Golden Triangle tour for family",
        "seoTitle": "Classic Golden Triangle Package - 5 Nights / 6 Days | Logaa Holidays",
        "seoDescription": "Book Classic Golden Triangle Package for 5 Nights 6 Days. Explore Delhi, Agra, and Jaipur in a comfortable journey.",
        "id": "8010"
    },
    '8011': {
        "title": "North India Heritage Package",
        "badge": "Golden Triangle Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {
            "duration": "6 Nights / 7 Days",
            "destination": "Delhi, Mathura, Vrindavan, Agra, Jaipur, Ajmer and Pushkar",
            "activities": "Sightseeing, Heritage, Culture, Piligrimage",
            "themes": "Golden Triangle Tours"
        },
        "priceDetails": {
            "amount": "On Request",
            "type": "per person"
        },
        "itinerary": [
            {
                "day": "Day 1",
                "title": "Delhi Arrival",
                "activities": [
                    "Pickup and hotel check-in.",
                    "Visit India Gate, Rashtrapati Bhavan photo stop, Parliament House area and Gurudwara Bangla Sahib.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 2",
                "title": "Delhi Sightseeing",
                "activities": [
                    "Visit Raj Ghat, Jama Masjid, Chandni Chowk, Humayun’s Tomb, Lotus Temple, Qutub Minar and Akshardham according to opening schedules.",
                    "Overnight stay in Delhi."
                ]
            },
            {
                "day": "Day 3",
                "title": "Delhi – Mathura – Vrindavan – Agra",
                "activities": [
                    "After breakfast, check out and proceed to Mathura and Vrindavan.",
                    "Visit selected temples according to time and local access.",
                    "Continue to Agra and check in.",
                    "Overnight stay in Agra."
                ]
            },
            {
                "day": "Day 4",
                "title": "Agra – Fatehpur Sikri – Jaipur",
                "activities": [
                    "Visit the Taj Mahal and Agra Fort.",
                    "Later, drive to Jaipur via Fatehpur Sikri.",
                    "Overnight stay in Jaipur."
                ]
            },
            {
                "day": "Day 5",
                "title": "Jaipur Sightseeing",
                "activities": [
                    "Visit Amber Fort, Jal Mahal, City Palace, Jantar Mantar, Hawa Mahal and local markets.",
                    "Overnight stay in Jaipur."
                ]
            },
            {
                "day": "Day 6",
                "title": "Ajmer and Pushkar Excursion",
                "activities": [
                    "Proceed for a full-day excursion to Ajmer and Pushkar.",
                    "Visit:",
                    "• Ajmer Dargah area",
                    "• Ana Sagar Lake viewpoint",
                    "• Pushkar Brahma Temple",
                    "• Pushkar Lake",
                    "• Local market",
                    "Return to Jaipur.",
                    "Overnight stay in Jaipur."
                ]
            },
            {
                "day": "Day 7",
                "title": "Jaipur – Delhi Departure",
                "activities": [
                    "After breakfast, check out and transfer to Jaipur Airport, Jaipur Railway Station, Delhi Airport or New Delhi Railway Station."
                ]
            }
        ],
        "inclusions": [
            "Hotel accommodation in the selected category",
            "Daily breakfast",
            "Dinner when the MAP plan is selected",
            "Private AC vehicle for transfers and sightseeing",
            "Airport or railway station pickup and drop",
            "Driver allowance",
            "Fuel, toll and parking as specified",
            "Sightseeing according to the itinerary",
            "Logaa Holidays travel support",
            "Flight or train booking assistance"
        ],
        "exclusions": [
            "❌ Flight or train tickets unless included",
            "❌ Monument entrance fees",
            "❌ Local guide charges",
            "❌ Lunch and unmentioned meals",
            "❌ Camera and video fees",
            "❌ Personal expenses",
            "❌ Travel insurance",
            "❌ Additional sightseeing",
            "❌ Early check-in and late check-out",
            "❌ Anything not mentioned under inclusions"
        ],
        "highlights": [
            "Destinations Covered: Delhi, Mathura, Vrindavan, Agra, Jaipur, Ajmer and Pushkar",
            "Night Stay: 2 Nights Delhi, 1 Night Agra and 3 Nights Jaipur"
        ],
        "keywords": "North India heritage package, Golden Triangle Ajmer Pushkar, Delhi Agra Jaipur Mathura Vrindavan package, 6 nights 7 days North India tour",
        "seoTitle": "North India Heritage Package - 6 Nights / 7 Days | Logaa Holidays",
        "seoDescription": "Book North India Heritage Package covering Delhi, Mathura, Vrindavan, Agra, Jaipur, Ajmer and Pushkar.",
        "id": "8011"
    }
}

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

packages_code = ""
for pkg_id, pkg_data in new_packages.items():
    pkg_str = json.dumps(pkg_data, indent=4)
    packages_code += f"    '{pkg_id}': {pkg_str},\n"

# Replace using string replace
search_str = "export const packagesDatabase: Record<string, any> = {"
replace_str = search_str + "\n" + packages_code
content = content.replace(search_str, replace_str, 1)

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Successfully added 5 new Delhi/Golden Triangle packages!")
