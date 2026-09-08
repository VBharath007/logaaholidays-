import re
import json

raw_text = """
Shimla Highlights Package
2 Nights / 3 Days
Destinations Covered: Shimla, Kufri
Recommended For: Couples, families and short holidays
Pickup and Drop: Chandigarh or Delhi
Night Stay: 2 Nights in Shimla
Day 1: Chandigarh or Delhi – Shimla
Meet our representative at Chandigarh Airport, Chandigarh Railway Station, Delhi Airport or New Delhi Railway Station.
Proceed to Shimla through the scenic Himalayan foothills. On arrival, check in at the hotel and relax.
Depending on arrival time, visit:
•	The Ridge
•	Mall Road
•	Christ Church
•	Scandal Point
•	Lakkar Bazaar
Enjoy the evening at leisure and stay overnight in Shimla.
Day 2: Kufri and Shimla Sightseeing
After breakfast, proceed for a full-day sightseeing tour covering:
•	Green Valley
•	Kufri
•	Himalayan Nature Park
•	Indira Tourist Park
•	Jakhu Temple
•	Local viewpoints
Return to Shimla in the evening. Spend time shopping and exploring Mall Road.
Overnight stay in Shimla.
Day 3: Shimla – Departure
After breakfast, check out from the hotel.
Transfer to Chandigarh Airport, Chandigarh Railway Station, Delhi Airport or New Delhi Railway Station for your onward journey.
Tour ends with beautiful Himalayan memories.
________________________________________
Scenic Shimla Holiday Package
3 Nights / 4 Days
Destinations Covered: Shimla, Kufri, Mashobra, Naldehra
Recommended For: Couples, families and senior citizens
Night Stay: 3 Nights in Shimla
Day 1: Chandigarh or Delhi – Shimla
Airport or railway station pickup followed by a private transfer to Shimla.
Check in at the hotel and relax. Evening visit to Mall Road, The Ridge, Christ Church and Lakkar Bazaar.
Overnight stay in Shimla.
Day 2: Kufri Sightseeing
After breakfast, visit:
•	Green Valley
•	Kufri
•	Himalayan Nature Park
•	Indira Tourist Park
•	Jakhu Temple
•	Shimla viewpoints
Return to the hotel for an overnight stay.
Day 3: Mashobra and Naldehra Excursion
After breakfast, proceed for a scenic excursion covering:
•	Mashobra
•	Naldehra
•	Naldehra Golf Course viewpoint
•	Craignano Nature Park area
•	Local apple orchard region, subject to season
•	Scenic forest viewpoints
Return to Shimla in the evening.
Overnight stay in Shimla.
Day 4: Shimla – Departure
After breakfast, check out and transfer to Chandigarh or Delhi for the return journey.
________________________________________
Complete Shimla Leisure Package
4 Nights / 5 Days
Destinations Covered: Shimla, Kufri, Chail, Mashobra, Naldehra
Recommended For: Honeymoon couples and relaxed family holidays
Night Stay: 4 Nights in Shimla
Day 1: Chandigarh or Delhi – Shimla
Pickup and private transfer to Shimla.
Check in at the hotel. Evening free for Mall Road and local shopping.
Overnight stay in Shimla.
Day 2: Shimla Local Sightseeing
After breakfast, explore:
•	Indian Institute of Advanced Study
•	Sankat Mochan Temple
•	Jakhu Temple
•	The Ridge
•	Christ Church
•	Mall Road
•	Lakkar Bazaar
Overnight stay in Shimla.
Day 3: Kufri Excursion
Visit Green Valley, Kufri, Himalayan Nature Park, Indira Tourist Park and nearby viewpoints.
Adventure activities and horse rides are optional and directly payable.
Return to Shimla for an overnight stay.
Day 4: Chail, Mashobra and Naldehra
Proceed for a scenic excursion covering Chail, Mashobra and Naldehra.
Places may include:
•	Chail Palace area
•	Chail Cricket Ground viewpoint
•	Kali Ka Tibba, depending on vehicle access
•	Mashobra
•	Naldehra
•	Forest viewpoints
Return to Shimla for an overnight stay.
Day 5: Shimla – Departure
Breakfast, hotel check-out and transfer to Chandigarh or Delhi.
________________________________________
Best of Shimla and Manali Package
5 Nights / 6 Days
Destinations Covered: Shimla, Kufri, Kullu, Manali, Solang Valley
Night Stay: 3 Nights Shimla and 2 Nights Manali
Recommended For: Families, couples and first-time Himachal travellers
Day 1: Delhi or Chandigarh – Shimla
Pickup and drive to Shimla. Hotel check-in and evening at leisure.
Overnight stay in Shimla.
Day 2: Shimla Local Sightseeing
Visit Indian Institute of Advanced Study, Sankat Mochan Temple, Jakhu Temple, The Ridge, Christ Church, Mall Road and Lakkar Bazaar.
Overnight stay in Shimla.
Day 3: Kufri Sightseeing
Proceed to Kufri and visit Green Valley, Himalayan Nature Park, Indira Tourist Park and surrounding viewpoints.
Return to Shimla.
Overnight stay in Shimla.
Day 4: Shimla – Kullu – Manali
After breakfast, check out and drive to Manali.
En route, visit or stop at:
•	Sundernagar Lake viewpoint
•	Pandoh Dam viewpoint
•	Kullu Valley
•	Kullu Shawl Factory
•	River rafting point, optional and seasonal
Arrive in Manali and check in at the hotel.
Overnight stay in Manali.
Day 5: Solang Valley and Manali
Proceed to Solang Valley for snow views or seasonal adventure activities.
Depending on weather, road conditions and local regulations, the excursion may extend towards Atal Tunnel or nearby permitted areas.
Return to Manali and visit Mall Road.
Overnight stay in Manali.
Day 6: Manali – Chandigarh or Delhi Departure
After breakfast, check out and transfer to Chandigarh or Delhi for the onward journey.
________________________________________
Complete Himachal Package
6 Nights / 7 Days
Destinations Covered: Shimla, Kufri, Kullu, Manali, Solang Valley, Chandigarh
Night Stay: 2 Nights Shimla, 3 Nights Manali and 1 Night Chandigarh
Recommended For: Honeymoon couples, families and premium holidays
Day 1: Delhi or Chandigarh – Shimla
Pickup and transfer to Shimla. Hotel check-in and evening at leisure.
Overnight stay in Shimla.
Day 2: Kufri and Shimla Sightseeing
Visit Kufri, Green Valley, Himalayan Nature Park, Jakhu Temple, The Ridge, Christ Church and Mall Road.
Overnight stay in Shimla.
Day 3: Shimla – Kullu – Manali
Check out and proceed to Manali.
Enjoy scenic stops at Sundernagar, Pandoh Dam and Kullu Valley.
Arrive in Manali and check in.
Overnight stay in Manali.
Day 4: Manali Local Sightseeing
Visit:
•	Hadimba Devi Temple
•	Vashisht Temple
•	Vashisht Hot Water Spring area
•	Tibetan Monastery
•	Van Vihar
•	Club House
•	Mall Road
Overnight stay in Manali.
Day 5: Solang Valley Excursion
Proceed to Solang Valley.
Atal Tunnel, Sissu or other snow-point visits will depend on weather, vehicle permissions, road access and local regulations.
Adventure activities are optional.
Overnight stay in Manali.
Day 6: Manali – Chandigarh
Check out and drive to Chandigarh.
On arrival, check in at the hotel. Depending on arrival time, visit Sukhna Lake or enjoy an evening at leisure.
Overnight stay in Chandigarh.
Day 7: Chandigarh Sightseeing and Departure
Visit Rock Garden and Sukhna Lake, subject to departure time.
Transfer to Chandigarh Airport, Chandigarh Railway Station, Delhi Airport or New Delhi Railway Station.
"""

keywords_global = "Shimla tour packages from Tamil Nadu, Shimla package from Madurai, Shimla package from Chennai, Shimla Manali tour package, Kullu Manali tour, Kufri sightseeing, Himachal tour package from South India, Logaa Holidays Shimla package"

packages_data = []

current_pkg = None
for line in raw_text.split('\n'):
    line = line.strip()
    if not line:
        continue
    
    if line == "________________________________________":
        current_pkg = None
        continue
        
    if not current_pkg:
        current_pkg = {
            "title": line,
            "duration": "",
            "destination": "",
            "recommendedFor": "",
            "pickup": "",
            "nightStay": "",
            "itinerary": [],
            "currDay": None
        }
        packages_data.append(current_pkg)
        continue
        
    if current_pkg:
        if re.match(r'^\d+\s*Nights?\s*/\s*\d+\s*Days?', line, re.IGNORECASE):
            current_pkg["duration"] = line
        elif line.startswith("Destinations Covered:"):
            current_pkg["destination"] = line.replace("Destinations Covered:", "").strip()
        elif line.startswith("Recommended For:"):
            current_pkg["recommendedFor"] = line.replace("Recommended For:", "").strip()
        elif line.startswith("Pickup and Drop:"):
            current_pkg["pickup"] = line.replace("Pickup and Drop:", "").strip()
        elif line.startswith("Night Stay:"):
            current_pkg["nightStay"] = line.replace("Night Stay:", "").strip()
        elif line.startswith("Day "):
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
            else:
                if current_pkg["currDay"]:
                    current_pkg["currDay"]["activities"].append(line)
        else:
            if current_pkg["currDay"]:
                current_pkg["currDay"]["activities"].append(line)

# Generate javascript object
js_obj = ""
id_start = 8101

inclusions = [
    "Hotel accommodation as per chosen package",
    "Daily breakfast and dinner (depending on package plan)",
    "Private cab transfers and sightseeing",
    "Airport or railway station pickup and drop",
    "Toll, parking and driver allowance"
]

exclusions = [
    "❌ Flight or train tickets (unless opted)",
    "❌ 5% GST",
    "❌ Lunch and extra meals",
    "❌ Monument entry fees, guide charges and adventure activities",
    "❌ Personal expenses, laundry and tips",
    "❌ Travel insurance",
    "❌ Anything not mentioned in inclusions"
]

for idx, pkg in enumerate(packages_data):
    pkg_id = str(id_start + idx)
    title = pkg["title"]
    clean_title = pkg["destination"]
    
    highlights = []
    if pkg["pickup"]: highlights.append("Pickup: " + pkg["pickup"])
    if pkg["nightStay"]: highlights.append("Stay: " + pkg["nightStay"])
    if pkg["recommendedFor"]: highlights.append("Recommended For: " + pkg["recommendedFor"])
    
    itinerary_js = "[\n"
    for day in pkg["itinerary"]:
        itinerary_js += f"""            {{
                "day": "{day['day']}",
                "title": "{day['title']}",
                "activities": {json.dumps(day['activities'], ensure_ascii=False)}
            }},
"""
    itinerary_js = itinerary_js.rstrip(",\n") + "\n        ]"
    
    seo_title = f"{title} | Logaa Holidays"
    seo_desc = f"Book {title} covering {clean_title} with private cab, best hotels and comfortable itinerary."
    
    js_obj += f"""
    '{pkg_id}': {{
        "title": "{title}",
        "badge": "Shimla Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {{
            "duration": "{pkg['duration']}",
            "destination": "{clean_title}",
            "activities": "Sightseeing, Hill Station, Nature",
            "themes": "Shimla Tours"
        }},
        "priceDetails": {{
            "amount": "On Request",
            "type": "per person"
        }},
        "itinerary": {itinerary_js},
        "inclusions": {json.dumps(inclusions, ensure_ascii=False)},
        "exclusions": {json.dumps(exclusions, ensure_ascii=False)},
        "highlights": {json.dumps(highlights, ensure_ascii=False)},
        "keywords": "{keywords_global}",
        "seoTitle": "{seo_title}",
        "seoDescription": "{seo_desc}",
        "id": "{pkg_id}"
    }},"""

with open('add_shimla_code.js', 'w', encoding='utf-8') as f:
    f.write(js_obj)
