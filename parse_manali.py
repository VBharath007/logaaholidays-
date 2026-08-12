import re
import json

raw_text = """
Manali Short Holiday Package
2 Nights / 3 Days
Destinations Covered: Manali, Solang Valley
Night Stay: 2 Nights in Manali
Recommended For: Couples and short holidays
Day 1: Manali Arrival and Local Sightseeing
Pickup from Manali Bus Stand or arrival-point transfer as confirmed.
Check in at the hotel. After refreshment, visit:
•	Hadimba Devi Temple
•	Vashisht Temple
•	Tibetan Monastery
•	Van Vihar
•	Mall Road
Overnight stay in Manali.
Day 2: Solang Valley Excursion
After breakfast, proceed to Solang Valley.
Guests may enjoy optional seasonal activities such as skiing, tube rides, ropeway, paragliding or snow activities.
Atal Tunnel or nearby snow-point visits are subject to road conditions and local permissions.
Overnight stay in Manali.
Day 3: Manali Departure
After breakfast, check out and transfer to Manali Bus Stand or the agreed departure point.
________________________________________
Manali Explorer Package
3 Nights / 4 Days
Destinations Covered: Manali, Solang Valley, Kullu, Naggar
Night Stay: 3 Nights in Manali
Day 1: Manali Arrival
Hotel check-in followed by Manali local sightseeing.
Visit Hadimba Temple, Vashisht area, Tibetan Monastery, Van Vihar and Mall Road.
Overnight stay in Manali.
Day 2: Solang Valley
Full-day Solang Valley excursion.
Atal Tunnel and Sissu may be added depending on weather, route access and the selected vehicle arrangement.
Overnight stay in Manali.
Day 3: Kullu and Naggar Sightseeing
Visit:
•	Kullu Valley
•	Kullu Shawl Factory
•	Naggar Castle area
•	Nicholas Roerich Art Gallery, subject to opening
•	River rafting point, optional and seasonal
•	Scenic valley viewpoints
Return to Manali.
Overnight stay in Manali.
Day 4: Manali Departure
Breakfast, check-out and departure transfer.
________________________________________
Manali with Kasol Package
4 Nights / 5 Days
Destinations Covered: Manali, Solang Valley, Kullu, Kasol, Manikaran
Night Stay: 4 Nights in Manali
Day 1: Manali Arrival and Local Tour
Check in and visit Hadimba Temple, Vashisht area, Tibetan Monastery, Van Vihar and Mall Road.
Overnight stay in Manali.
Day 2: Solang Valley and Snow Point
Proceed to Solang Valley.
Optional Atal Tunnel or Sissu extension is subject to weather, permits, road access and additional vehicle charges where applicable.
Overnight stay in Manali.
Day 3: Kullu and Naggar
Visit Kullu Valley, Kullu Shawl Factory, Naggar Castle area and scenic viewpoints.
Optional river rafting may be arranged during the permitted season.
Overnight stay in Manali.
Day 4: Kasol and Manikaran
Proceed for a full-day tour to:
•	Kasol
•	Parvati Valley
•	Manikaran Sahib
•	Manikaran hot spring area
•	Local cafés and riverside viewpoints
Return to Manali.
Overnight stay in Manali.
Day 5: Manali Departure
After breakfast, check out and depart.
________________________________________
Complete Manali Holiday Package
5 Nights / 6 Days
Destinations Covered: Manali, Solang Valley, Atal Tunnel region, Kullu, Naggar, Kasol and Manikaran
Night Stay: 5 Nights in Manali
Day 1: Arrival in Manali
Hotel check-in and leisure time. Evening visit to Mall Road.
Overnight stay in Manali.
Day 2: Manali Local Sightseeing
Visit Hadimba Devi Temple, Vashisht Temple, Tibetan Monastery, Van Vihar, Club House and Mall Road.
Overnight stay in Manali.
Day 3: Solang Valley Excursion
Visit Solang Valley for mountain views and seasonal activities.
Atal Tunnel, Sissu or another permitted snow point may be included depending on local conditions.
Overnight stay in Manali.
Day 4: Kullu and Naggar Tour
Visit Kullu Valley, shawl-manufacturing centre, Naggar Castle area, Roerich Art Gallery and scenic viewpoints.
Overnight stay in Manali.
Day 5: Kasol and Manikaran Excursion
Visit Kasol, Parvati Valley and Manikaran Sahib.
Return to Manali.
Overnight stay in Manali.
Day 6: Departure
Breakfast, check-out and departure transfer.
________________________________________
Manali, Kasol and Chandigarh Package
6 Nights / 7 Days
Destinations Covered: Chandigarh, Manali, Solang Valley, Kullu, Naggar, Kasol and Manikaran
Night Stay: 1 Night Chandigarh, 4 Nights Manali and 1 Night Kasol
Day 1: Chandigarh Arrival
Pickup from Chandigarh Airport or Railway Station.
Visit Rock Garden and Sukhna Lake depending on arrival time.
Overnight stay in Chandigarh.
Day 2: Chandigarh – Manali
Drive to Manali through the scenic mountain route.
Hotel check-in and overnight stay in Manali.
Day 3: Manali Local Sightseeing
Visit Hadimba Temple, Vashisht area, Tibetan Monastery, Van Vihar, Club House and Mall Road.
Overnight stay in Manali.
Day 4: Solang Valley Excursion
Proceed to Solang Valley.
Atal Tunnel or Sissu may be covered subject to weather, traffic, road access and local vehicle regulations.
Overnight stay in Manali.
Day 5: Kullu and Naggar Sightseeing
Visit Kullu Valley, Naggar Castle area, Roerich Art Gallery and local viewpoints.
Overnight stay in Manali.
Day 6: Manali – Manikaran – Kasol
Check out and proceed to Manikaran and Kasol.
Visit Manikaran Sahib, the hot spring area, Parvati Valley and Kasol market.
Overnight stay in Kasol.
Day 7: Kasol – Chandigarh Departure
After breakfast, check out and transfer to Chandigarh Airport or Railway Station.
________________________________________
Manali Short Volvo Package
2 Nights / 3 Days
Route: Delhi – Manali – Delhi
Stay: 2 Nights in Manali
Recommended For: Couples and short holidays
Day 0: Delhi to Manali by Volvo
Report at the designated Delhi Volvo boarding point in the evening.
Board the overnight AC Volvo bus to Manali.
Overnight journey.
Day 1: Manali Arrival and Local Sightseeing
Arrive in Manali in the morning.
Meet our representative and transfer to the hotel. Early check-in will be subject to availability.
After refreshment, visit:
•	Hadimba Devi Temple
•	Vashisht Temple
•	Vashisht Hot Water Spring area
•	Tibetan Monastery
•	Van Vihar
•	Mall Road
Return to the hotel.
Overnight stay in Manali.
Day 2: Solang Valley Excursion
After breakfast, proceed for Solang Valley sightseeing.
Guests may enjoy optional activities such as:
•	Ropeway
•	Paragliding
•	Skiing
•	Snow activities
•	Tube rides
•	ATV rides
Atal Tunnel, Sissu or snow-point sightseeing will depend on weather, road conditions and local vehicle regulations.
Return to Manali.
Overnight stay in Manali.
Day 3: Manali Sightseeing and Delhi Volvo Departure
After breakfast, check out from the hotel.
Spend time for local shopping or leisure, depending on Volvo departure timing.
Transfer to the Manali Volvo boarding point.
Board the overnight Volvo bus to Delhi.
Day 4: Delhi Arrival
Arrive in Delhi in the morning.
Tour ends.
________________________________________
Manali Classic Volvo Package
3 Nights / 4 Days
Route: Delhi – Manali – Delhi
Stay: 3 Nights in Manali
Recommended For: Honeymoon couples and families
Day 0: Delhi to Manali
Evening boarding from Delhi.
Overnight AC Volvo journey to Manali.
Day 1: Manali Arrival and Local Sightseeing
Arrival transfer and hotel check-in.
Visit Hadimba Devi Temple, Vashisht Temple, Tibetan Monastery, Van Vihar and Mall Road.
Overnight stay in Manali.
Day 2: Solang Valley Excursion
Full-day Solang Valley sightseeing.
Atal Tunnel and Sissu may be covered subject to weather, road access, permits and selected vehicle arrangement.
Adventure activities are optional and directly payable.
Overnight stay in Manali.
Day 3: Kullu and Naggar Sightseeing
After breakfast, proceed for sightseeing covering:
•	Kullu Valley
•	Kullu Shawl Factory
•	Naggar Castle area
•	Nicholas Roerich Art Gallery, subject to opening
•	Scenic valley viewpoints
•	River rafting point, optional and seasonal
Return to Manali.
Overnight stay in Manali.
Day 4: Manali Departure
After breakfast, check out.
Evening transfer to the Volvo boarding point.
Board the overnight Volvo bus to Delhi.
Day 5: Delhi Arrival
Morning arrival in Delhi.
________________________________________
Manali and Kasol Volvo Package
4 Nights / 5 Days
Route: Delhi – Manali – Kasol – Delhi
Stay: 3 Nights Manali and 1 Night Kasol
Day 0: Delhi to Manali by Volvo
Evening departure from Delhi by AC Volvo.
Overnight journey.
Day 1: Manali Arrival and Local Tour
Arrival transfer and hotel check-in.
Visit Hadimba Temple, Vashisht area, Tibetan Monastery, Van Vihar and Mall Road.
Overnight stay in Manali.
Day 2: Solang Valley Excursion
Proceed to Solang Valley.
Atal Tunnel or Sissu extension will depend on weather and local road conditions.
Overnight stay in Manali.
Day 3: Kullu and Naggar Tour
Visit Kullu Valley, Kullu Shawl Factory, Naggar Castle area and nearby viewpoints.
Overnight stay in Manali.
Day 4: Manali – Manikaran – Kasol
Check out and proceed to:
•	Manikaran Sahib
•	Manikaran hot spring area
•	Parvati Valley
•	Kasol market
•	Riverside viewpoints
Check in at the hotel or camp.
Overnight stay in Kasol.
Day 5: Kasol – Bhuntar – Delhi
After breakfast, check out.
Transfer to Bhuntar or the designated Volvo boarding point.
Board the overnight Volvo bus to Delhi.
Day 6: Delhi Arrival
Morning arrival in Delhi.
________________________________________
Complete Manali Volvo Holiday
5 Nights / 6 Days
Route: Delhi – Manali – Kasol – Delhi
Stay: 4 Nights Manali and 1 Night Kasol
Day 0: Delhi to Manali
Board the evening AC Volvo bus from Delhi.
Overnight journey.
Day 1: Manali Arrival
Arrival transfer, hotel check-in and leisure time.
Evening visit to Mall Road.
Overnight stay in Manali.
Day 2: Manali Local Sightseeing
Visit:
•	Hadimba Devi Temple
•	Vashisht Temple
•	Tibetan Monastery
•	Van Vihar
•	Club House
•	Mall Road
Overnight stay in Manali.
Day 3: Solang Valley and Snow Point
Proceed for Solang Valley sightseeing.
Atal Tunnel, Sissu or another permitted snow point may be included depending on weather and local regulations.
Overnight stay in Manali.
Day 4: Kullu and Naggar Sightseeing
Visit Kullu Valley, shawl-manufacturing centre, Naggar Castle area and scenic viewpoints.
Overnight stay in Manali.
Day 5: Manali – Manikaran – Kasol
Proceed to Manikaran and Kasol.
Visit Manikaran Sahib, Parvati Valley, Kasol market and riverside areas.
Overnight stay in Kasol.
Day 6: Kasol – Delhi Volvo Departure
After breakfast, check out.
Transfer to the designated Volvo boarding point.
Overnight Volvo journey to Delhi.
Day 7: Delhi Arrival
Morning arrival in Delhi.
"""

keywords_global = "Manali Volvo package, Delhi to Manali Volvo package, Manali Volvo package from Madurai, Manali Volvo package from Chennai, Manali honeymoon Volvo package, Manali family Volvo package, Manali Volvo package with flight, Manali Volvo package with train, Manali package from Tamil Nadu, Delhi Manali AC Volvo package"

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
            "route": "",
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
        elif line.startswith("Route:"):
            current_pkg["route"] = line.replace("Route:", "").strip()
        elif line.startswith("Recommended For:"):
            current_pkg["recommendedFor"] = line.replace("Recommended For:", "").strip()
        elif line.startswith("Stay:") or line.startswith("Night Stay:"):
            current_pkg["nightStay"] = line.replace("Stay:", "").replace("Night Stay:", "").strip()
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
id_regular = 8201
id_volvo = 8301

inclusions_regular = [
    "Hotel accommodation in the selected category",
    "Daily breakfast at the hotel",
    "Dinner when the MAP meal plan is selected",
    "Private vehicle for transfers and sightseeing",
    "Airport, railway station or bus stand pickup and drop",
    "Driver allowance, fuel, toll and parking charges",
    "Logaa Holidays travel assistance"
]

inclusions_volvo = [
    "Delhi–Manali–Delhi AC Volvo bus tickets",
    "Hotel accommodation in the selected category",
    "Daily breakfast",
    "Dinner when the MAP plan is selected",
    "Manali Volvo stand pickup and drop",
    "Private cab or shared vehicle for sightseeing as confirmed",
    "Manali local and Solang Valley sightseeing",
    "Driver allowance, fuel, toll and parking for included cab services",
    "Logaa Holidays travel assistance"
]

exclusions_global = [
    "❌ Flight, train or Volvo tickets unless specifically included",
    "❌ Lunch and unmentioned meals",
    "❌ Monument and attraction entrance fees",
    "❌ Adventure activities (Horse ride, skiing, paragliding, ropeway)",
    "❌ Rohtang Pass permit and special local vehicle charges",
    "❌ Union vehicle charges where applicable",
    "❌ Personal expenses, heater charges, and travel insurance",
    "❌ Early check-in and late check-out charges",
    "❌ Expenses caused by weather, roadblocks or natural events"
]

for idx, pkg in enumerate(packages_data):
    is_volvo = "Volvo" in pkg["title"]
    pkg_id = str(id_volvo if is_volvo else id_regular)
    if is_volvo:
        id_volvo += 1
    else:
        id_regular += 1
        
    title = pkg["title"]
    clean_title = pkg["destination"] if pkg["destination"] else pkg["route"]
    
    highlights = []
    if pkg["route"]: highlights.append("Route: " + pkg["route"])
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
    if is_volvo:
        seo_desc = f"Book {title} from Delhi with hotel, meals, local sightseeing and Solang Valley tours. Flight and train connections available from Tamil Nadu."
    else:
        seo_desc = f"Book {title} with private cab, best hotels and comfortable itinerary. Flight and train connections available from Tamil Nadu."
    
    inclusions = inclusions_volvo if is_volvo else inclusions_regular
    
    js_obj += f"""
    '{pkg_id}': {{
        "title": "{title}",
        "badge": "Manali Volvo Tour" if is_volvo else "Manali Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {{
            "duration": "{pkg['duration']}",
            "destination": "{clean_title}",
            "activities": "Sightseeing, Mountains, Nature, Adventure",
            "themes": "Manali Volvo Tours" if is_volvo else "Manali Tours"
        }},
        "priceDetails": {{
            "amount": "On Request",
            "type": "per person"
        }},
        "itinerary": {itinerary_js},
        "inclusions": {json.dumps(inclusions, ensure_ascii=False)},
        "exclusions": {json.dumps(exclusions_global, ensure_ascii=False)},
        "highlights": {json.dumps(highlights, ensure_ascii=False)},
        "keywords": "{keywords_global}",
        "seoTitle": "{seo_title}",
        "seoDescription": "{seo_desc}",
        "id": "{pkg_id}"
    }},"""

with open('add_manali_code.js', 'w', encoding='utf-8') as f:
    f.write(js_obj)
