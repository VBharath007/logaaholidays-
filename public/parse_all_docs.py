import re
import json
import glob

def parse_text(text):
    lines = text.split('\n')
    package_starts = []
    for i, line in enumerate(lines):
        if re.search(r'(Package|Tour)$', line.strip(), re.I):
            # Verify if "Tour Highlights" exists soon
            has_highlights = False
            for j in range(i, min(i + 20, len(lines))):
                if 'Tour Highlights' in lines[j] or 'Suggested Itinerary' in lines[j]:
                    has_highlights = True
                    break
            if has_highlights:
                package_starts.append(i)

    print(f"Found {len(package_starts)} packages")

    packages = []
    for pkg_idx, start_line in enumerate(package_starts):
        end_line = package_starts[pkg_idx + 1] if pkg_idx + 1 < len(package_starts) else len(lines)
        pkg_lines = lines[start_line:end_line]
        pkg_text = '\n'.join(pkg_lines)
        
        # Title
        title = pkg_lines[0].strip()
        
        # Extract duration
        duration_match = re.search(r'(\d+\s+Days?\s*/?\s*\d*\s*Nights?)', pkg_text, re.I)
        if not duration_match:
            duration_match = re.search(r'(One Day|Same Day)', pkg_text, re.I)
        duration = duration_match.group(1) if duration_match else "Custom Duration"
        
        destination = "Multiple Destinations"
        if "Madurai" in title: destination = "Madurai"
        if "Shirdi" in title: destination = "Shirdi"
        if "Varanasi" in title: destination = "Varanasi"
        
        price_match = re.search(r'Starting From \u20b9?([\d,]+)/-', pkg_text)
        price = price_match.group(1) if price_match else "On Request"

        itinerary = []
        # Support either 'Day XX' blocks or 'Suggested Itinerary'
        day_blocks = re.split(r'\n(Day\s*\d+\s*[\u2013\-\u2014].*?)\n', '\n' + pkg_text)
        if len(day_blocks) == 1:
            day_match = re.search(r'(Suggested Itinerary|Tour Itinerary)\n(.*?)(?=\nAccommodation|\nPackage Includes|\nTour Highlights|\nKeywords)', pkg_text, re.S)
            if day_match:
                itinerary.append({
                    "day": "Day 01",
                    "title": "One Day Pilgrimage",
                    "activities": [l.strip() for l in day_match.group(2).split('\n') if l.strip()]
                })
        else:
            for i in range(1, len(day_blocks), 2):
                day_title = day_blocks[i].strip()
                day_num_match = re.search(r'Day\s*(\d+)', day_title, re.I)
                day_num = f"Day {int(day_num_match.group(1)):02d}" if day_num_match else "Day"
                day_title_clean = re.sub(r'^Day\s*\d+\s*[\u2013\-\u2014]\s*', '', day_title)
                
                day_content = day_blocks[i+1]
                for stop_word in ['Accommodation', 'Package Includes', '________________________________________', 'Keywords']:
                    if stop_word in day_content:
                        day_content = day_content[:day_content.index(stop_word)]
                
                activities = [l.strip() for l in day_content.split('\n') if l.strip()]
                itinerary.append({
                    "day": day_num,
                    "title": day_title_clean,
                    "activities": activities
                })

        inc_match = re.search(r'Package Includes\n(.*?)(?=\nPackage Excludes)', pkg_text, re.S)
        inclusions = [re.sub(r'^[✔✓•\s]+', '', l).strip() for l in inc_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if inc_match else []

        exc_match = re.search(r'Package Excludes\n(.*?)(?=\nImportant Notes|\nWhy Choose|\nKeywords)', pkg_text, re.S)
        exclusions = [re.sub(r'^[❌x•\s]+', '', l).strip() for l in exc_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if exc_match else []

        high_match = re.search(r'Tour Highlights\n(.*?)(?=\nStarting From|\nDay 01|\nSuggested Itinerary|\nTour Itinerary)', pkg_text, re.S)
        highlights = [re.sub(r'^[✅✓•\s]+', '', l).strip() for l in high_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if high_match else []
        highlights = [h for h in highlights if not h.startswith('Starting From')]

        kw_match = re.search(r'Keywords\n(.*?)$', pkg_text, re.S | re.I)
        keywords = ""
        if kw_match:
            keywords = kw_match.group(1).strip()
            # clean up if it spills over to next package (which shouldn't happen because we split text)
            if '\n\n' in keywords:
                keywords = keywords.split('\n\n')[0].strip()

        pkg_obj = {
            "title": title,
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
            "highlights": highlights,
            "keywords": keywords
        }
        packages.append(pkg_obj)
    return packages

all_packages = []
for f in ['public/extracted_madurai_one_day.txt', 'public/extracted_chennai_varanasi.txt', 'public/extracted_madurai_shirdi.txt']:
    with open(f, 'r', encoding='utf-8') as file:
        print(f'Parsing {f}')
        all_packages.extend(parse_text(file.read()))

print(f"Total packages extracted: {len(all_packages)}")
