import re
import json

raw_text = """
1. Delhi – Mathura – Vrindavan – Agra Tour Package
Duration: 2 Nights / 3 Days
Pickup & Drop: Delhi Airport / Railway Station
Destinations: Delhi – Mathura – Vrindavan – Agra
Day 1: Delhi Arrival & Sightseeing
Pickup from Delhi Airport or Railway Station and hotel check-in.
Possible sightseeing:
•	India Gate
•	Qutub Minar
•	Lotus Temple
•	Akshardham Temple
•	Red Fort
•	Chandni Chowk
Dinner and overnight stay in Delhi.
Day 2: Delhi – Mathura – Vrindavan – Agra
After breakfast, check out and proceed to Mathura.
Mathura Sightseeing:
•	Krishna Janmabhoomi Temple
•	Dwarkadhish Temple
•	Vishram Ghat
Vrindavan Sightseeing:
•	Banke Bihari Temple
•	Prem Mandir
•	ISKCON Temple
Later, proceed to Agra.
Dinner and overnight stay in Agra.
Day 3: Agra Sightseeing & Delhi Drop
After breakfast, check out and visit:
•	Taj Mahal
•	Agra Fort
Later, drive to Delhi and drop at Airport or Railway Station.
Tour ends with happy memories.
Package Inclusions
•	2 nights hotel accommodation
•	Breakfast and dinner
•	Private AC vehicle
•	Delhi pickup and drop
•	Toll, parking and driver allowance
•	Sightseeing as per itinerary
Package Exclusions
•	5% GST
•	Flight or train tickets
•	Lunch
•	Entry tickets and guide charges
•	Personal expenses
•	Travel insurance
•	Additional sightseeing
•	Anything not mentioned in inclusions
Logaa Holidays
Madurai, Tamil Nadu
Call / WhatsApp: +91 73973 29776

2. Delhi – Mathura – Vrindavan – Agra Tour Package
Duration: 3 Nights / 4 Days
Destinations: New Delhi – Mathura – Vrindavan – Agra
Pickup & Drop: New Delhi Airport / Railway Station
Day 1: New Delhi Arrival & Sightseeing
Pickup from New Delhi Airport or Railway Station and transfer to hotel.
Possible sightseeing based on arrival time:
•	India Gate
•	Qutub Minar
•	Lotus Temple
•	Akshardham Temple
•	Red Fort
•	Chandni Chowk
Light and Sound Show is available at additional cost.
Dinner and overnight stay in New Delhi.
Day 2: New Delhi – Mathura – Vrindavan
After breakfast, check out and proceed to Mathura.
Mathura Sightseeing:
•	Shri Krishna Janmabhoomi Temple
•	Dwarkadhish Temple
•	Vishram Ghat
Vrindavan Sightseeing:
•	Banke Bihari Temple
•	Prem Mandir
•	ISKCON Temple
Later, check in at the hotel.
Dinner and overnight stay in Mathura or Vrindavan.
Day 3: Mathura – Agra
After breakfast, check out and proceed to Agra.
Visit:
•	Taj Mahal
•	Agra Fort
Later, check in at the hotel.
Dinner and overnight stay in Agra.
Day 4: Agra – New Delhi Departure
After breakfast, check out and drive to New Delhi.
Drop at New Delhi Airport or Railway Station.
Tour ends with happy memories.
Package Inclusions
•	3-star Deluxe or Luxury hotel accommodation
•	Deluxe double rooms
•	Daily breakfast and dinner
•	Private AC vehicle
•	New Delhi pickup and drop
•	Toll, parking and driver allowance
•	Sightseeing as per itinerary
Package Exclusions
•	5% GST
•	Flight or train tickets
•	Lunch and beverages
•	Monument entry tickets
•	Guide charges
•	Personal and medical expenses
•	Travel insurance
•	Additional sightseeing or extra vehicle usage
•	Expenses caused by roadblocks, strikes, weather or other unavoidable conditions
•	Anything not mentioned under inclusions
Logaa Holidays
Madurai, Tamil Nadu
Call / WhatsApp: +91 73973 29776
SEO Title: Delhi Mathura Vrindavan Agra Tour Package – 3 Nights / 4 Days
Meta Description: Book a 3 Nights 4 Days Delhi, Mathura, Vrindavan and Agra tour package with hotel, breakfast, dinner, private cab and sightseeing through Logaa Holidays.

3. Delhi – Agra – Fatehpur Sikri – Jaipur Tour Package
Duration: 4 Nights / 5 Days
Destinations: New Delhi – Agra – Fatehpur Sikri – Jaipur
Pickup & Drop: New Delhi Airport / Railway Station
Day 1: New Delhi Arrival & Sightseeing
Pickup from New Delhi Airport or Railway Station and transfer to hotel.
Possible sightseeing based on arrival time:
•	India Gate
•	Qutub Minar
•	Lotus Temple
•	Akshardham Temple
•	Red Fort
•	Chandni Chowk
Light and Sound Show is available at additional cost.
Dinner and overnight stay in New Delhi.
Day 2: New Delhi – Agra
After breakfast, check out and proceed to Agra.
Visit:
•	Taj Mahal
•	Agra Fort
Later, check in at the hotel.
Dinner and overnight stay in Agra.
Day 3: Agra – Fatehpur Sikri – Jaipur
After breakfast, check out and proceed to Jaipur.
En route, visit Fatehpur Sikri:
•	Buland Darwaza
•	Jama Masjid
•	Diwan-i-Khas
•	Birbal’s Palace
•	Jodha Bai Palace
•	Panch Mahal
•	Tomb of Sheikh Salim Chishti
Continue to Jaipur and check in at the hotel.
Dinner and overnight stay in Jaipur.
Day 4: Jaipur Sightseeing
After breakfast, proceed for Jaipur sightseeing:
•	Amber Fort
•	Hawa Mahal
•	City Palace
•	Jantar Mantar
•	Albert Hall Museum
•	Birla Mandir
Return to the hotel.
Dinner and overnight stay in Jaipur.
Day 5: Jaipur – New Delhi Departure
After breakfast, check out and drive to New Delhi.
Drop at New Delhi Airport or Railway Station.
Tour ends with happy memories.
Package Inclusions
•	4 nights 3-star Deluxe or Luxury hotel accommodation
•	Deluxe double rooms
•	Daily breakfast and dinner
•	Private AC vehicle
•	New Delhi pickup and drop
•	Toll, parking and driver allowance
•	Sightseeing as per itinerary
Package Exclusions
•	5% GST
•	Flight or train tickets
•	Lunch and beverages
•	Monument entry tickets
•	Guide charges
•	Personal and medical expenses
•	Travel insurance
•	Additional sightseeing or extra vehicle usage
•	Expenses caused by roadblocks, strikes, weather or unavoidable conditions
•	Anything not mentioned under inclusions
Logaa Holidays
Madurai, Tamil Nadu
Call / WhatsApp: +91 73973 29776
SEO Title: Delhi Agra Jaipur Tour Package – 4 Nights / 5 Days
Meta Description: Book a 4 Nights 5 Days Delhi, Agra, Fatehpur Sikri and Jaipur tour package with hotel, meals, private cab and sightseeing through Logaa Holidays.

4. Delhi – Agra – Fatehpur Sikri – Jaipur Tour Package
Duration: 5 Nights / 6 Days
Destinations: New Delhi – Agra – Fatehpur Sikri – Jaipur
Pickup & Drop: New Delhi Airport / Railway Station
Day 1: New Delhi Arrival & Sightseeing
Pickup from New Delhi Airport or Railway Station and transfer to hotel.
Visit:
•	Red Fort
•	Jama Masjid
•	Chandni Chowk
Dinner and overnight stay in New Delhi.
Day 2: New Delhi Sightseeing
After breakfast, proceed for Delhi sightseeing:
•	Qutub Minar
•	India Gate
•	Raj Ghat
•	Lotus Temple
•	Parliament House – Photo Stop
•	Rashtrapati Bhavan – Photo Stop
•	Akshardham Temple
Light and Sound Show is available at additional cost.
Dinner and overnight stay in New Delhi.
Day 3: New Delhi – Agra
After breakfast, check out and proceed to Agra.
Visit:
•	Taj Mahal
•	Agra Fort
Later, check in at the hotel.
Dinner and overnight stay in Agra.
Day 4: Agra – Fatehpur Sikri – Jaipur
After breakfast, check out and proceed to Jaipur.
En route, visit Fatehpur Sikri:
•	Buland Darwaza
•	Jama Masjid
•	Diwan-i-Khas
•	Birbal’s Palace
•	Jodha Bai Palace
•	Panch Mahal
•	Tomb of Sheikh Salim Chishti
Continue to Jaipur and check in at the hotel.
Dinner and overnight stay in Jaipur.
Day 5: Jaipur Sightseeing
After breakfast, visit:
•	Amber Fort
•	Hawa Mahal
•	City Palace
•	Jantar Mantar
•	Albert Hall Museum
•	Birla Mandir
Dinner and overnight stay in Jaipur.
Day 6: Jaipur – New Delhi Departure
After breakfast, check out and drive to New Delhi.
Drop at New Delhi Airport or Railway Station.
Tour ends with happy memories.
Package Inclusions
•	5 nights 3-star Deluxe or Luxury hotel accommodation
•	Deluxe double rooms
•	Daily breakfast and dinner
•	Private AC vehicle
•	New Delhi pickup and drop
•	Toll, parking and driver allowance
•	Sightseeing as per itinerary
Package Exclusions
•	5% GST
•	Flight or train tickets
•	Lunch and beverages
•	Monument entry tickets
•	Guide charges
•	Personal and medical expenses
•	Travel insurance
•	Additional sightseeing or extra vehicle usage
•	Expenses due to roadblocks, strikes, weather or unavoidable conditions
•	Anything not mentioned under inclusions
Logaa Holidays
Madurai, Tamil Nadu
Call / WhatsApp: +91 73973 29776
SEO Title: Delhi Agra Jaipur Tour Package – 5 Nights / 6 Days
Meta Description: Book a 5 Nights 6 Days Delhi, Agra, Fatehpur Sikri and Jaipur tour package with hotel, meals, private cab and sightseeing through Logaa Holidays.

5. Delhi – Agra – Ajmer – Pushkar – Jaipur Tour Package
Duration: 6 Nights / 7 Days
Destinations: New Delhi – Agra – Ajmer – Pushkar – Jaipur
Pickup & Drop: New Delhi Airport / Railway Station
Day 1: New Delhi Arrival
Pickup from New Delhi Airport or Railway Station and transfer to hotel.
Visit:
•	Red Fort
•	Jama Masjid
•	Chandni Chowk
Dinner and overnight stay in New Delhi.
Day 2: New Delhi Sightseeing
After breakfast, visit:
•	Qutub Minar
•	India Gate
•	Raj Ghat
•	Lotus Temple
•	Parliament House – Photo Stop
•	Rashtrapati Bhavan – Photo Stop
•	Akshardham Temple
Light and Sound Show is available at an additional cost.
Dinner and overnight stay in New Delhi.
Day 3: New Delhi – Agra
After breakfast, check out and proceed to Agra.
Visit:
•	Taj Mahal
•	Agra Fort
Dinner and overnight stay in Agra.
Day 4: Agra – Ajmer – Pushkar
After breakfast, check out and proceed to Ajmer.
Visit:
•	Ajmer Sharif Dargah
Later, proceed to Pushkar and check in at the hotel.
Dinner and overnight stay in Pushkar.
Day 5: Pushkar – Jaipur
After breakfast, check out and visit:
•	Pushkar Lake
•	Brahma Temple
Proceed to Jaipur. En route, visit Kishangarh Marble Dumping Yard, subject to permission and local conditions.
On arrival in Jaipur, visit:
•	Hawa Mahal
•	Jantar Mantar
•	City Palace
Dinner and overnight stay in Jaipur.
Day 6: Jaipur Sightseeing
After breakfast, visit:
•	Amber Fort
•	Jal Mahal
•	Birla Mandir
•	Moti Dungri Ganesh Temple
•	Albert Hall Museum
Dinner and overnight stay in Jaipur.
Day 7: Jaipur – New Delhi Departure
After breakfast, check out and drive to New Delhi.
Drop at New Delhi Airport or Railway Station.
Tour ends with happy memories.
Package Inclusions
•	3-Star Deluxe / 3-Star Luxury hotel accommodation
•	Deluxe double rooms at each destination
•	Daily breakfast and dinner
•	Private AC Sedan / Ertiga / Tempo Traveller
•	New Delhi Airport / Railway Station pickup and drop
•	Toll, parking and driver allowance
•	Sightseeing and transfers as per itinerary
Package Exclusions
•	5% GST
•	Flight or train tickets
•	Lunch and beverages
•	Monument entry fees and guide charges
•	Personal and medical expenses
•	Laundry, telephone calls, tips and porter charges
•	Mineral water, soft drinks and alcoholic beverages
•	Travel insurance
•	Additional sightseeing or extra vehicle usage
•	Expenses arising due to roadblocks, strikes, weather conditions or other unavoidable circumstances
•	No refund for unused services or shortened stay
•	Anything not mentioned under package inclusions
Logaa Holidays
Madurai, Tamil Nadu
Call / WhatsApp: +91 73973 29776
SEO Title: Delhi Agra Ajmer Pushkar Jaipur Tour Package – 6 Nights / 7 Days
Meta Description: Book a 6 Nights 7 Days Delhi, Agra, Ajmer, Pushkar and Jaipur tour package with hotel, meals, private cab and sightseeing through Logaa Holidays.

6. Delhi – Agra – Ranthambore – Jaipur Tour Package
Duration: 6 Nights / 7 Days
Destinations: New Delhi – Agra – Ranthambore – Jaipur
Pickup & Drop: New Delhi Airport / Railway Station
Day 1: New Delhi Arrival
Pickup from New Delhi Airport or Railway Station and transfer to hotel.
Visit:
•	Red Fort
•	Jama Masjid
•	Chandni Chowk
Dinner and overnight stay in New Delhi.
Day 2: New Delhi Sightseeing
After breakfast, visit:
•	Qutub Minar
•	India Gate
•	Raj Ghat
•	Lotus Temple
•	Parliament House – Photo Stop
•	Rashtrapati Bhavan – Photo Stop
•	Akshardham Temple
Light and Sound Show is available at additional cost.
Dinner and overnight stay in New Delhi.
Day 3: New Delhi – Agra
After breakfast, check out and proceed to Agra.
Visit:
•	Taj Mahal
•	Agra Fort
Later, check in at the hotel.
Dinner and overnight stay in Agra.
Day 4: Agra – Ranthambore
After breakfast, check out and drive to Ranthambore.
Visit:
•	Ranthambore Fort
•	Trinetra Ganesh Temple
•	Shilpgram
•	Local Museum
Dinner and overnight stay in Ranthambore.
Day 5: Ranthambore – Jaipur
Early morning Ranthambore Tiger Safari at additional cost, subject to permit availability.
After breakfast, check out and proceed to Jaipur.
Visit:
•	Hawa Mahal
•	City Palace
•	Jantar Mantar
Dinner and overnight stay in Jaipur.
Day 6: Jaipur Sightseeing
After breakfast, visit:
•	Amber Fort
•	Jaigarh Fort
•	Nahargarh Fort
•	Jal Mahal
•	Birla Mandir
•	Moti Dungri Ganesh Temple
Dinner and overnight stay in Jaipur.
Day 7: Jaipur – New Delhi Departure
After breakfast, check out and drive to New Delhi.
Drop at New Delhi Airport or Railway Station.
Tour ends with happy memories.
Package Inclusions
•	3-Star Deluxe / 3-Star Luxury hotel accommodation
•	Deluxe double rooms
•	Daily breakfast and dinner
•	Private AC Sedan / Ertiga / Tempo Traveller
•	New Delhi pickup and drop
•	Toll, parking and driver allowance
•	Sightseeing and transfers as per itinerary
Package Exclusions
•	5% GST
•	Flight or train tickets
•	Lunch and beverages
•	Ranthambore Tiger Safari charges
•	Monument entry fees and guide charges
•	Personal and medical expenses
•	Laundry, telephone calls, tips and porter charges
•	Travel insurance
•	Additional sightseeing or extra vehicle usage
•	Expenses arising due to weather, roadblocks, strikes or unavoidable circumstances
•	No refund for unused services or shortened stay
•	Anything not mentioned under inclusions
Logaa Holidays
Madurai, Tamil Nadu
Call / WhatsApp: +91 73973 29776
SEO Title: Delhi Agra Ranthambore Jaipur Tour Package – 6 Nights / 7 Days
Meta Description: Book a 6 Nights 7 Days Delhi, Agra, Ranthambore and Jaipur tour package with hotel, meals, private cab and sightseeing through Logaa Holidays.
"""

keywords_global = "Golden Triangle tour packages, Delhi Agra Jaipur tour package, Mathura Vrindavan Agra tour package, Rajasthan tour package from Delhi, Ranthambore Tiger Safari, Ajmer Pushkar tour, Logaa Holidays North India tour"

packages_data = []

current_pkg = None
current_section = None
for line in raw_text.split('\n'):
    line = line.strip()
    if not line:
        continue
    
    if line == "Logaa Holidays" or line == "Madurai, Tamil Nadu" or line.startswith("Call / WhatsApp:"):
        continue
        
    if re.match(r'^\d+\.', line):
        if current_pkg:
            packages_data.append(current_pkg)
        current_pkg = {
            "title": re.sub(r'^\d+\.\s*', '', line),
            "duration": "",
            "destination": "",
            "pickup": "",
            "itinerary": [],
            "inclusions": [],
            "exclusions": [],
            "seoTitle": "",
            "seoDesc": "",
            "currDay": None
        }
        current_section = None
        continue
        
    if current_pkg:
        if line.startswith("Duration:"):
            current_pkg["duration"] = line.replace("Duration:", "").strip()
        elif line.startswith("Destinations:"):
            current_pkg["destination"] = line.replace("Destinations:", "").strip()
        elif line.startswith("Pickup & Drop:"):
            current_pkg["pickup"] = line.replace("Pickup & Drop:", "").strip()
        elif line.startswith("SEO Title:"):
            current_pkg["seoTitle"] = line.replace("SEO Title:", "").strip()
        elif line.startswith("Meta Description:"):
            current_pkg["seoDesc"] = line.replace("Meta Description:", "").strip()
        elif line.startswith("Package Inclusions"):
            current_section = "inclusions"
        elif line.startswith("Package Exclusions"):
            current_section = "exclusions"
        elif line.startswith("Day "):
            current_section = "itinerary"
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
            if current_section == "inclusions":
                if line.startswith("•"):
                    current_pkg["inclusions"].append(line.replace("•", "").strip())
            elif current_section == "exclusions":
                if line.startswith("•"):
                    current_pkg["exclusions"].append(line.replace("•", "").strip())
            elif current_section == "itinerary":
                if current_pkg["currDay"]:
                    current_pkg["currDay"]["activities"].append(line)

if current_pkg:
    packages_data.append(current_pkg)

# Generate javascript object
js_obj = ""
id_start = 8001

for idx, pkg in enumerate(packages_data):
    pkg_id = str(id_start + idx)
    title = pkg["title"]
    clean_title = re.sub(r'\s*Tour Package$', '', title).strip()
    
    highlights = []
    if pkg["pickup"]: highlights.append("Pickup: " + pkg["pickup"])
    if pkg["destination"]: highlights.append("Destinations: " + pkg["destination"])
    
    itinerary_js = "[\n"
    for day in pkg["itinerary"]:
        itinerary_js += f"""            {{
                "day": "{day['day']}",
                "title": "{day['title']}",
                "activities": {json.dumps(day['activities'], ensure_ascii=False)}
            }},
"""
    itinerary_js = itinerary_js.rstrip(",\n") + "\n        ]"
    
    inclusions = pkg["inclusions"] if pkg["inclusions"] else ["Hotel Accommodation", "Breakfast & Dinner", "Private AC Vehicle", "Toll & Parking", "Sightseeing"]
    exclusions = pkg["exclusions"] if pkg["exclusions"] else ["Flight/Train Tickets", "Lunch", "Monument Entry", "Personal Expenses", "5% GST"]
    
    # Prepend ❌ to exclusions to match styling
    formatted_exclusions = []
    for exc in exclusions:
        if not exc.startswith("❌"):
            formatted_exclusions.append("❌ " + exc)
        else:
            formatted_exclusions.append(exc)
            
    seo_title = pkg["seoTitle"] if pkg["seoTitle"] else f"{title} | Logaa Holidays"
    seo_desc = pkg["seoDesc"] if pkg["seoDesc"] else f"Book {title} with private cab, best hotels and comfortable itinerary."
    
    js_obj += f"""
    '{pkg_id}': {{
        "title": "{title}",
        "badge": "Golden Triangle Tour",
        "image": "/assets/placeholder.jpg",
        "heroImage": "/assets/placeholder.jpg",
        "overview": {{
            "duration": "{pkg['duration']}",
            "destination": "{clean_title}",
            "activities": "Sightseeing, Heritage, Culture",
            "themes": "Golden Triangle Tours"
        }},
        "priceDetails": {{
            "amount": "On Request",
            "type": "per person"
        }},
        "itinerary": {itinerary_js},
        "inclusions": {json.dumps(inclusions, ensure_ascii=False)},
        "exclusions": {json.dumps(formatted_exclusions, ensure_ascii=False)},
        "highlights": {json.dumps(highlights, ensure_ascii=False)},
        "keywords": "{keywords_global}",
        "seoTitle": "{seo_title}",
        "seoDescription": "{seo_desc}",
        "id": "{pkg_id}"
    }},"""

with open('add_golden_triangle_code.js', 'w', encoding='utf-8') as f:
    f.write(js_obj)
