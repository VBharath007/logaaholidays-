import re
import json

with open('public/user_shirdi_packages.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# The user's text is separated by multiple newlines and keywords. 
# We can find all lines that start with "Chennai to " or "Madurai to " as package starts.
lines = content.split('\n')
package_starts = []
for i, line in enumerate(lines):
    # Only match lines that look like titles
    if re.match(r'^(?:Chennai|Madurai) to .*(?:Package|Tour)', line.strip(), re.I):
        if not line.strip().startswith('Keywords') and not 'Logaa Holidays' in line:
            # check if the NEXT line is "Best..." or if we're not inside a keywords section
            package_starts.append(i)

# It's possible we found duplicate starts if the user pasted something weird, but let's see
# Actually, wait. Some packages don't have "Package" on the first line maybe?
# "Chennai to Shirdi One Day Flight Tour Package" -> it does.
# Let's just group them manually.
real_starts = []
for start in package_starts:
    # A package must have "Tour Highlights" soon after it
    has_highlights = False
    for j in range(start, min(start + 20, len(lines))):
        if 'Tour Highlights' in lines[j]:
            has_highlights = True
            break
    if has_highlights:
        real_starts.append(start)

print(f"Found {len(real_starts)} packages")

packages = []
start_id = 1010

for pkg_idx, start_line in enumerate(real_starts):
    end_line = real_starts[pkg_idx + 1] if pkg_idx + 1 < len(real_starts) else len(lines)
    pkg_lines = lines[start_line:end_line]
    pkg_text = '\n'.join(pkg_lines)
    
    # Title
    title = pkg_lines[0].strip()
    
    # Extract duration from title or early lines
    duration_match = re.search(r'(\d+\s+Days?.*?Night[s]?)', pkg_text, re.I)
    if not duration_match:
        duration_match = re.search(r'(One Day)', pkg_text, re.I)
    duration = duration_match.group(1) if duration_match else "Custom Duration"
    
    # Extract destination
    destination_match = re.search(r'(?:Chennai|Madurai) to (.*?)(?:\s+Tour|\s+Flight|\s+Package|\|)', title, re.I)
    destination = destination_match.group(1).strip() if destination_match else "Shirdi & Surrounding"
    
    price_match = re.search(r'Starting From \u20b9?([\d,]+)/-', pkg_text)
    price = price_match.group(1) if price_match else "On Request"

    # Extract Itinerary
    itinerary = []
    # Split by Day
    day_blocks = re.split(r'\n(Day\s*\d+\s*[\u2013\-\u2014].*?)\n', '\n' + pkg_text)
    if len(day_blocks) == 1:
        # One day itinerary might just have "Tour Itinerary" -> "Chennai -> Pune"
        day_match = re.search(r'(Tour Itinerary\n.*?)(?=\nAccommodation|\nPackage Includes)', pkg_text, re.S)
        if day_match:
            itinerary.append({
                "day": "Day 01",
                "title": "One Day Pilgrimage",
                "activities": [line.strip() for line in day_match.group(1).split('\n') if line.strip() and not line.strip().startswith('Tour Itinerary')]
            })
    else:
        for i in range(1, len(day_blocks), 2):
            day_title = day_blocks[i].strip()
            # The day number
            day_num_match = re.search(r'Day\s*(\d+)', day_title, re.I)
            day_num = f"Day {int(day_num_match.group(1)):02d}" if day_num_match else "Day"
            
            day_title_clean = re.sub(r'^Day\s*\d+\s*[\u2013\-\u2014]\s*', '', day_title)
            day_content = day_blocks[i+1]
            # Stop at Accommodation or Package Includes
            for stop_word in ['Accommodation', 'Package Includes', '________________________________________']:
                if stop_word in day_content:
                    day_content = day_content[:day_content.index(stop_word)]
            
            activities = [l.strip() for l in day_content.split('\n') if l.strip()]
            itinerary.append({
                "day": day_num,
                "title": day_title_clean,
                "activities": activities
            })

    # Extract Inclusions
    inc_match = re.search(r'Package Includes\n(.*?)(?=\nPackage Excludes)', pkg_text, re.S)
    inclusions = [re.sub(r'^[✔✓•\s]+', '', l).strip() for l in inc_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if inc_match else []

    # Extract Exclusions
    exc_match = re.search(r'Package Excludes\n(.*?)(?=\nImportant Notes|\nWhy Choose)', pkg_text, re.S)
    exclusions = [re.sub(r'^[❌x•\s]+', '', l).strip() for l in exc_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if exc_match else []

    # Extract Highlights
    high_match = re.search(r'Tour Highlights\n(.*?)(?=\nStarting From|\nDay 01|\nTour Itinerary)', pkg_text, re.S)
    highlights = [re.sub(r'^[✅✓•\s]+', '', l).strip() for l in high_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if high_match else []
    
    # Make sure we don't accidentally capture "Starting From" in highlights
    highlights = [h for h in highlights if not h.startswith('Starting From')]

    pkg_obj = {
        "id": str(start_id),
        "title": title,
        "image": "https://images.unsplash.com/photo-1596489370603-9cd3ef4e5cf4?auto=format&fit=crop&q=80&w=1600",
        "overview": {
            "duration": duration,
            "destination": destination,
            "activities": "Pilgrimage, Sightseeing",
            "themes": "Religious & Pilgrimage, Culture & Heritage"
        },
        "priceDetails": {
            "amount": price,
            "type": "per person"
        },
        "itinerary": itinerary,
        "inclusions": inclusions,
        "exclusions": exclusions,
        "highlights": highlights
    }
    
    packages.append(pkg_obj)
    start_id += 1

out_str = "export const newPackages = {\n"
for p in packages:
    out_str += f"  '{p['id']}': {json.dumps(p, indent=4)},\n"
out_str += "};\n"

with open('public/generated_packages.ts', 'w', encoding='utf-8') as f:
    f.write(out_str)

print(f"Parsed {len(packages)} packages successfully")
print(f"Generated packages saved!")
