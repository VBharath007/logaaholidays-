import re
import json

raw_text = """
1. Mysore and Coorg Tour Package – 3 Nights / 4 Days
Route: Mysore – Bylakuppe – Coorg – Madikeri
Best For: Families, Couples, Honeymoon Travellers and Senior Citizens
Stay Plan
•	Mysore – 1 Night
•	Coorg – 2 Nights
Day 1: Mysore Arrival and Sightseeing
Pickup from Mysore Railway Station, Bus Stand or hotel.
Proceed to the hotel and complete check-in.
Later, visit:
•	Mysore Palace
•	Chamundi Hills
•	St. Philomena’s Cathedral
•	Mysore Zoo, optional
•	Brindavan Gardens
•	Krishna Raja Sagar Dam
Return to the hotel.
Overnight stay in Mysore.
Day 2: Mysore – Bylakuppe – Coorg
After breakfast, check out and proceed towards Coorg.
En route, visit:
•	Namdroling Tibetan Monastery
•	Golden Temple, Bylakuppe
•	Kaveri Nisargadhama
•	Dubare Elephant Camp
•	Harangi Dam, subject to available time
Continue to Coorg and check in at the hotel or resort.
Overnight stay in Coorg.
Day 3: Coorg and Madikeri Sightseeing
After breakfast, proceed for full-day sightseeing.
Visit:
•	Talakaveri
•	Bhagamandala
•	Abbey Falls
•	Madikeri Fort
•	Omkareshwara Temple
•	Raja’s Seat
•	Madikeri local market
Optional coffee plantation visit may be arranged at an additional cost.
Overnight stay in Coorg.
Day 4: Coorg to Mysore or Bangalore Departure
After breakfast, check out from the hotel.
Proceed to Mysore or Bangalore according to the selected package.
Drop at Railway Station, Airport, Bus Stand or preferred location.
---
2. Bangalore, Mysore and Coorg Tour – 4 Nights / 5 Days
Route: Bangalore – Mysore – Coorg – Bangalore
Best For: Chennai Customers, Families, Couples and Flight Travellers
Stay Plan
•	Bangalore – 1 Night
•	Mysore – 1 Night
•	Coorg – 2 Nights
Day 1: Bangalore Arrival and Sightseeing
Pickup from Bangalore Airport, Railway Station or Bus Stand.
Visit:
•	Lalbagh Botanical Garden
•	Cubbon Park
•	Vidhana Soudha outside view
•	ISKCON Temple
•	Bangalore Palace, optional
•	Commercial Street, subject to time
Check in at the hotel.
Overnight stay in Bangalore.
Day 2: Bangalore – Srirangapatna – Mysore
After breakfast, check out and proceed towards Mysore.
En route, visit:
•	Srirangapatna Ranganathaswamy Temple
•	Tipu Sultan’s Summer Palace
•	Gumbaz, subject to time
Continue to Mysore.
Visit:
•	Mysore Palace
•	Chamundi Hills
•	St. Philomena’s Cathedral
•	Brindavan Gardens
Overnight stay in Mysore.
Day 3: Mysore – Bylakuppe – Coorg
After breakfast, check out and proceed to Coorg.
Visit:
•	Golden Temple
•	Namdroling Monastery
•	Nisargadhama
•	Dubare Elephant Camp
•	Harangi Dam, optional
Check in at the hotel.
Overnight stay in Coorg.
Day 4: Coorg Full-Day Sightseeing
Visit:
•	Talakaveri
•	Bhagamandala
•	Abbey Falls
•	Madikeri Fort
•	Omkareshwara Temple
•	Raja’s Seat
•	Coffee plantation, optional
Overnight stay in Coorg.
Day 5: Coorg to Bangalore Departure
After breakfast, check out and proceed to Bangalore.
Drop at Airport, Railway Station, Bus Stand or city location.
---
3. Mysore, Coorg and Kabini Tour – 4 Nights / 5 Days
Route: Mysore – Coorg – Kabini or Nagarhole – Bangalore
Best For: Families, Premium Travellers and Wildlife Lovers
Stay Plan
•	Mysore – 1 Night
•	Coorg – 2 Nights
•	Kabini or Nagarhole – 1 Night
Day 1: Mysore Arrival and Sightseeing
Pickup from Mysore.
Visit:
•	Mysore Palace
•	Chamundi Hills
•	St. Philomena’s Cathedral
•	Brindavan Gardens
•	KRS Dam
Overnight stay in Mysore.
Day 2: Mysore – Bylakuppe – Coorg
Visit:
•	Golden Temple
•	Nisargadhama
•	Dubare
•	Harangi Dam, optional
Continue to Coorg.
Overnight stay in Coorg.
Day 3: Coorg Full-Day Sightseeing
Visit:
•	Talakaveri
•	Bhagamandala
•	Abbey Falls
•	Madikeri Fort
•	Raja’s Seat
•	Omkareshwara Temple
Overnight stay in Coorg.
Day 4: Coorg to Kabini or Nagarhole
After breakfast, check out and proceed towards Kabini or Nagarhole.
Check in at the resort.
Optional activities:
•	Jungle safari
•	Kabini boat safari
•	Nature walk
•	Bird watching
Wildlife sightings depend on luck and cannot be guaranteed.
Overnight stay near Kabini or Nagarhole.
Day 5: Kabini or Nagarhole to Bangalore
Optional early-morning safari, subject to availability.
After breakfast, check out and proceed to Bangalore.
Drop at Airport, Railway Station or preferred location.
---
4. Coorg and Chikmagalur Tour – 4 Nights / 5 Days
Route: Coorg – Hassan – Belur – Halebidu – Chikmagalur
Best For: Couples, Honeymoon Travellers, Families and Nature Lovers
Stay Plan
•	Coorg – 2 Nights
•	Chikmagalur – 2 Nights
Day 1: Mysore Arrival – Coorg
Pickup from Mysore and proceed towards Coorg.
En route, visit:
•	Golden Temple
•	Nisargadhama
•	Dubare Elephant Camp
Continue to Coorg and check in.
Overnight stay in Coorg.
Day 2: Coorg Sightseeing
Visit:
•	Talakaveri
•	Bhagamandala
•	Abbey Falls
•	Madikeri Fort
•	Omkareshwara Temple
•	Raja’s Seat
•	Coffee plantation, optional
Overnight stay in Coorg.
Day 3: Coorg – Belur – Halebidu – Chikmagalur
After breakfast, check out and proceed towards Chikmagalur.
En route, visit:
•	Belur Chennakeshava Temple
•	Halebidu Hoysaleswara Temple
•	Yagachi Dam, subject to time
Continue to Chikmagalur.
Overnight stay in Chikmagalur.
Day 4: Chikmagalur Sightseeing
Visit:
•	Mullayanagiri Peak
•	Seethalayyanagiri
•	Baba Budangiri
•	Jhari Falls
•	Hirekolale Lake
•	Coffee plantation
•	Chikmagalur local market
Overnight stay in Chikmagalur.
Day 5: Chikmagalur to Bangalore or Mysore Departure
After breakfast, check out.
Proceed to Bangalore or Mysore according to the selected package.
Drop at Airport, Railway Station or Bus Stand.
---
5. Hampi and Badami Heritage Tour – 4 Nights / 5 Days
Route: Hospet – Hampi – Aihole – Pattadakal – Badami
Best For: History Lovers, Families, Student Groups and Photography Travellers
Stay Plan
•	Hospet or Hampi – 2 Nights
•	Badami – 2 Nights
Day 1: Hospet Arrival
Pickup from Hospet Railway Station or Bus Stand.
Check in at the hotel.
Depending on arrival time, visit:
•	Tungabhadra Dam
•	Hospet local market
•	Sunset viewpoint
Overnight stay in Hospet.
Day 2: Hampi Full-Day Sightseeing
Visit:
•	Virupaksha Temple
•	Hampi Bazaar
•	Hemakuta Hill
•	Vittala Temple
•	Stone Chariot
•	Lotus Mahal
•	Elephant Stables
•	Queen’s Bath
•	Royal Enclosure
•	Hazara Rama Temple
Local guide is recommended.
Overnight stay in Hospet or Hampi.
Day 3: Hospet – Aihole – Pattadakal – Badami
After breakfast, check out and proceed to Badami.
En route, visit:
•	Aihole Temple Complex
•	Durga Temple
•	Lad Khan Temple
•	Pattadakal Group of Monuments
•	Virupaksha Temple
•	Mallikarjuna Temple
Continue to Badami.
Overnight stay in Badami.
Day 4: Badami Sightseeing
Visit:
•	Badami Cave Temples
•	Agastya Lake
•	Bhutanatha Temple
•	Badami Fort
•	Archaeological Museum, subject to opening hours
Overnight stay in Badami.
Day 5: Badami Departure
After breakfast, check out.
Drop at Hubballi, Hospet, Badami Railway Station or preferred location according to the selected plan.
---
6. Udupi, Murudeshwar and Gokarna Tour – 4 Nights / 5 Days
Route: Mangalore – Udupi – Murudeshwar – Gokarna
Best For: Families, Pilgrimage Groups, Senior Citizens and Beach Travellers
Stay Plan
•	Udupi – 1 Night
•	Murudeshwar – 1 Night
•	Gokarna – 2 Nights
Day 1: Mangalore Arrival – Udupi
Pickup from Mangalore Airport, Railway Station or Bus Stand.
Visit:
•	Mangaladevi Temple
•	Kadri Manjunatha Temple
•	Panambur Beach, subject to time
Proceed to Udupi.
Visit:
•	Udupi Sri Krishna Temple
•	Malpe Beach
Overnight stay in Udupi.
Day 2: Udupi – Kollur – Murudeshwar
After breakfast, check out and proceed towards Murudeshwar.
En route, visit:
•	Kollur Mookambika Temple
•	Maravanthe Beach viewpoint
•	Murudeshwar Temple
•	Shiva Statue
•	Murudeshwar Beach
Overnight stay in Murudeshwar.
Day 3: Murudeshwar – Honnavar – Gokarna
After breakfast, proceed towards Gokarna.
Visit:
•	Honnavar Backwaters
•	Eco Beach, subject to time
•	Mirjan Fort
•	Gokarna Mahabaleshwar Temple
•	Gokarna Main Beach
Overnight stay in Gokarna.
Day 4: Gokarna Beach Sightseeing
Visit:
•	Om Beach
•	Kudle Beach
•	Half Moon Beach, subject to access
•	Paradise Beach, subject to access
•	Yana Caves, optional
•	Sunset viewpoint
Overnight stay in Gokarna.
Day 5: Gokarna to Mangalore Departure
After breakfast, check out and proceed to Mangalore.
Drop at Airport, Railway Station or Bus Stand.
"""

common_inclusions = [
    "Hotel or resort accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle",
    "Pickup and drop as mentioned",
    "Fuel charges",
    "Driver allowance",
    "Toll charges",
    "Parking charges",
    "State permit charges",
    "Sightseeing as per itinerary",
    "Assistance from Logaa Holidays"
]

common_exclusions = [
    "❌ Flight, train and bus tickets",
    "❌ Lunch and dinner unless included",
    "❌ Monument and attraction entrance tickets",
    "❌ Jungle safari and forest charges",
    "❌ Boating charges",
    "❌ Adventure activity charges",
    "❌ Local guide charges",
    "❌ Personal expenses",
    "❌ Camera and video charges",
    "❌ Travel insurance",
    "❌ Early check-in and late check-out",
    "❌ Additional sightseeing",
    "❌ Anything not specifically mentioned under inclusions"
]

keywords = "Karnataka tour packages from Tamil Nadu, Karnataka package from Madurai, Mysore Coorg tour from Chennai, Karnataka package from Trichy, Coorg package from Coimbatore, Mysore Coorg Kabini package, Chikmagalur family package, Hampi Badami heritage tour, Udupi Murudeshwar Gokarna package, Karnataka honeymoon package, Logaa Holidays Karnataka tour"

packages_data = []

current_pkg = None
for line in raw_text.split('\n'):
    line = line.strip()
    if not line:
        continue
        
    if re.match(r'^\d+\.', line):
        if current_pkg:
            packages_data.append(current_pkg)
        current_pkg = {
            "title": re.sub(r'^\d+\.\s*', '', line),
            "route": "",
            "bestFor": "",
            "stayPlan": [],
            "itinerary": [],
            "currDay": None
        }
        continue
        
    if current_pkg:
        if line.startswith("Route:"):
            current_pkg["route"] = line.replace("Route:", "").strip()
        elif line.startswith("Best For:"):
            current_pkg["bestFor"] = line.replace("Best For:", "").strip()
        elif line.startswith("Stay Plan"):
            current_pkg["inStayPlan"] = True
        elif line.startswith("Day "):
            current_pkg["inStayPlan"] = False
            match = re.match(r'^Day (\d+):\s*(.*)', line)
            if match:
                day_num = "Day " + match.group(1).zfill(2)
                day_title = match.group(2).strip()
                current_pkg["currDay"] = {
                    "day": day_num,
                    "title": day_title,
                    "activities": []
                }
                current_pkg["itinerary"].append(current_pkg["currDay"])
        elif line == "---":
            pass
        else:
            if current_pkg.get("inStayPlan") and line.startswith("•"):
                current_pkg["stayPlan"].append(line.replace("•", "").strip())
            elif current_pkg.get("currDay"):
                current_pkg["currDay"]["activities"].append(line)

if current_pkg:
    packages_data.append(current_pkg)

# Generate javascript object
js_obj = ""
id_start = 5001

for idx, pkg in enumerate(packages_data):
    pkg_id = str(id_start + idx)
    title = pkg["title"]
    # extract duration from title
    dur_match = re.search(r'–?\s*(\d+\s*Nights?\s*/\s*\d+\s*Days?)', title)
    duration = dur_match.group(1) if dur_match else "Various"
    clean_title = re.sub(r'–?\s*\d+\s*Nights?\s*/\s*\d+\s*Days?', '', title).strip()
    
    highlights = []
    highlights.append("Route: " + pkg["route"])
    highlights.append("Best For: " + pkg["bestFor"])
    for s in pkg["stayPlan"]:
        highlights.append("Stay: " + s)
    
    itinerary_js = "[\n"
    for day in pkg["itinerary"]:
        itinerary_js += f"""            {{
                "day": "{day['day']}",
                "title": "{day['title']}",
                "activities": {json.dumps(day['activities'], ensure_ascii=False)}
            }},
"""
    itinerary_js = itinerary_js.rstrip(",\n") + "\n        ]"
    
    js_obj += f"""
    '{pkg_id}': {{
        "title": "{title}",
        "badge": "Karnataka Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {{
            "duration": "{duration}",
            "destination": "{clean_title}",
            "activities": "Sightseeing, Nature, Heritage",
            "themes": "Karnataka Tours"
        }},
        "priceDetails": {{
            "amount": "On Request",
            "type": "per person"
        }},
        "itinerary": {itinerary_js},
        "inclusions": {json.dumps(common_inclusions, ensure_ascii=False)},
        "exclusions": {json.dumps(common_exclusions, ensure_ascii=False)},
        "highlights": {json.dumps(highlights, ensure_ascii=False)},
        "keywords": "{keywords}",
        "seoTitle": "{title} | Logaa Holidays",
        "seoDescription": "Book {title} with private cab, best hotels and comfortable itinerary.",
        "id": "{pkg_id}"
    }},"""

with open('add_karnataka_code.js', 'w', encoding='utf-8') as f:
    f.write(js_obj)
