import re
import json

def clean_text(t):
    return re.sub(r'^[•✅✔️\-\s\t]+', '', t).strip()

def parse_with_keywords(filename, start_id, destination_fallback="Varanasi"):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all blocks separated by '\nKeywords'
    # Actually, let's split the text using a lookahead for the title or just split by Keywords.
    # We can split by '\nKeywords\n' and then parse each chunk.
    # But chunks will contain the previous package's keywords at the END.
    
    # A safer way: split the file by '\nKeywords'
    parts = re.split(r'\nKeywords\s*\n', '\n' + content, flags=re.I)
    
    packages = []
    
    # parts[0] is everything up to the first 'Keywords'
    # parts[1] is the keywords for package 1, followed by the text of package 2!
    
    current_text = parts[0].strip()
    
    for i in range(1, len(parts)):
        # current_text contains the package details
        # parts[i] contains the keywords for current_text, followed by the next package details
        
        # Extract keywords
        lines = parts[i].strip().split('\n')
        kw = lines[0].strip()
        
        # The rest of lines is the next package text
        next_text = '\n'.join(lines[1:]).strip()
        
        # Now parse current_text
        pkg_obj = parse_single_package(current_text, kw, destination_fallback)
        if pkg_obj:
            packages.append(pkg_obj)
            
        current_text = next_text
        
    return packages

def parse_single_package(text, keywords, destination_fallback):
    if not text.strip(): return None
    lines = text.strip().split('\n')
    
    # Clean up any trailing/leading empty lines
    while lines and not lines[0].strip(): lines.pop(0)
    if not lines: return None
    
    # Title is the first line
    title = lines[0].strip()
    
    # Overview duration
    duration_match = re.search(r'(\d+\s+Days?\s*/?\s*\d*\s*Nights?)', text, re.I)
    if not duration_match:
        duration_match = re.search(r'(One Day|Same Day)', text, re.I)
    duration = duration_match.group(1) if duration_match else "Custom Duration"
    
    # Overview destination
    dest = destination_fallback
    if "Shirdi" in title: dest = "Shirdi"
    if "Varanasi" in title or "Kasi" in title: dest = "Varanasi"
    if "Madurai" in title and "Shirdi" not in title and "Varanasi" not in title: dest = "Madurai"
    
    price_match = re.search(r'Starting From \u20b9?([\d,]+)/-', text)
    price = price_match.group(1) if price_match else "On Request"

    # Extract Itinerary
    itinerary = []
    day_blocks = re.split(r'\n(Day\s*\d+\s*[\u2013\-\u2014].*?)\n', '\n' + text)
    if len(day_blocks) == 1:
        # Check for 'Suggested Itinerary' or 'Tour Itinerary'
        day_match = re.search(r'(Suggested Itinerary|Tour Itinerary)\n(.*?)(?=\nAccommodation|\nPackage Includes|\nTour Highlights|\nKeywords|$)', text, re.S)
        if day_match:
            acts = [l.strip() for l in day_match.group(2).split('\n') if l.strip()]
            itinerary.append({"day": "Day 01", "title": "One Day Pilgrimage", "activities": acts})
    else:
        for i in range(1, len(day_blocks), 2):
            day_title = day_blocks[i].strip()
            day_num_match = re.search(r'Day\s*(\d+)', day_title, re.I)
            day_num = f"Day {int(day_num_match.group(1)):02d}" if day_num_match else "Day"
            day_title_clean = re.sub(r'^Day\s*\d+\s*[\u2013\-\u2014]\s*', '', day_title)
            
            day_content = day_blocks[i+1]
            for stop_word in ['Accommodation', 'Package Includes', '________________________________________', 'Keywords', 'Why Choose']:
                if stop_word in day_content:
                    day_content = day_content[:day_content.index(stop_word)]
            
            acts = [l.strip() for l in day_content.split('\n') if l.strip()]
            itinerary.append({"day": day_num, "title": day_title_clean, "activities": acts})

    # Extract Inclusions
    inc_match = re.search(r'Package Includes\n(.*?)(?=\nPackage Excludes)', text, re.S)
    inclusions = [clean_text(l) for l in inc_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if inc_match else []

    # Extract Exclusions
    exc_match = re.search(r'Package Excludes\n(.*?)(?=\nImportant Notes|\nWhy Choose|\nKeywords|$)', text, re.S)
    exclusions = [clean_text(l) for l in exc_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if exc_match else []

    high_match = re.search(r'Tour Highlights\n(.*?)(?=\nStarting From|\nDay 01|\nSuggested Itinerary|\nTour Itinerary)', text, re.S)
    highlights = [clean_text(l) for l in high_match.group(1).split('\n') if l.strip() and not l.startswith('_')] if high_match else []
    highlights = [h for h in highlights if not h.startswith('Starting From')]

    return {
        "title": title,
        "image": "https://images.unsplash.com/photo-1596489370603-9cd3ef4e5cf4?auto=format&fit=crop&q=80&w=1600",
        "overview": {
            "duration": duration,
            "destination": dest,
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

def parse_madurai_one_day(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # There are no keywords. We must split by looking for title patterns.
    # A title usually looks like "Madurai to Rameswaram One Day Trip" or "Madurai One Day Tour Package"
    # But an easier way is to split by "Why Choose Logaa Holidays?".
    # After that, there are bullet points, and then the NEXT package starts.
    # Actually, there is a "Contact Us" at the very end of the file.
    
    # We can split by "Package Excludes" and its following bullet points.
    packages = []
    
    # Find all "Package Includes" as anchors.
    # A package is the block of text extending backwards to a blank line or previous package end, and forwards to "Why Choose" or next package.
    # Let's split the whole document by double newlines to find titles.
    chunks = re.split(r'\n\n(?=[A-Z])', content)
    
    # This is tricky. Let's just use the fact that every package has a "Suggested Itinerary" or "Tour Itinerary".
    # And a "Package Includes".
    # Let's split by "Package Includes"
    parts = re.split(r'Package Includes\n', content)
    
    # parts[0] is the top of the first package
    # parts[1] is the inclusions of P1, exclusions of P1, then top of P2
    # This is a bit messy. 
    pass # we will do a custom regex

def robust_parse_madurai(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Identify package start by looking for "One Day" or "Tour Package" at the start of a paragraph
    lines = content.split('\n')
    package_starts = []
    for i, l in enumerate(lines):
        t = l.strip()
        # Look for typical titles
        if t and ("One Day" in t or "Tour Package" in t or "Trip" in t) and len(t) < 80:
            # Check if it's actually a title
            if i + 1 < len(lines) and ("Explore" in lines[i+1] or "Discover" in lines[i+1] or "Experience" in lines[i+1] or "Tour Overview" in lines[i+1] or "Highlights" in lines[i+1]):
                package_starts.append(i)
            elif i + 2 < len(lines) and ("Explore" in lines[i+2] or "Discover" in lines[i+2] or "Experience" in lines[i+2] or "Tour Overview" in lines[i+2]):
                package_starts.append(i)

    print(f"Madurai raw: found {len(package_starts)} potential packages")
    
    # Filter duplicates and false positives
    real_starts = []
    for idx in package_starts:
        # ensure there is a "Package Includes" in the next 100 lines
        chunk = '\n'.join(lines[idx:idx+100])
        if "Package Includes" in chunk:
            # prevent duplicates
            if not real_starts or idx - real_starts[-1] > 10:
                real_starts.append(idx)
                
    print(f"Madurai filtered: found {len(real_starts)} valid packages")
    
    packages = []
    for i, start_line in enumerate(real_starts):
        end_line = real_starts[i+1] if i+1 < len(real_starts) else len(lines)
        pkg_text = '\n'.join(lines[start_line:end_line])
        
        # Stop at "Why Choose Logaa Holidays"
        if "Why Choose Logaa" in pkg_text:
            pkg_text = pkg_text[:pkg_text.index("Why Choose Logaa")]
            
        # title is the first line
        title = lines[start_line].strip()
        
        # Since these are Madurai packages without keywords, we generate keywords from title
        kw = f"{title}, Madurai Tour, Tamil Nadu Sightseeing, Logaa Holidays"
        
        pkg_obj = parse_single_package(pkg_text, kw, "Madurai")
        if pkg_obj:
            packages.append(pkg_obj)
            
    return packages

all_packages = []
cv_pkgs = parse_with_keywords('public/extracted_chennai_varanasi.txt', 2000, "Varanasi")
print(f"Parsed {len(cv_pkgs)} from Chennai to Varanasi")
all_packages.extend(cv_pkgs)

ms_pkgs = parse_with_keywords('public/extracted_madurai_shirdi.txt', 2100, "Shirdi")
print(f"Parsed {len(ms_pkgs)} from Madurai to Shirdi")
all_packages.extend(ms_pkgs)

mod_pkgs = robust_parse_madurai('public/extracted_madurai_one_day.txt')
print(f"Parsed {len(mod_pkgs)} from Madurai One Day")
all_packages.extend(mod_pkgs)

# Generate typescript file
start_id = 2000
out_str = "export const newPackages = {\n"
for p in all_packages:
    p['id'] = str(start_id)
    out_str += f"  '{start_id}': {json.dumps(p, indent=4)},\n"
    start_id += 1
out_str += "};\n"

with open('public/generated_packages.ts', 'w', encoding='utf-8') as f:
    f.write(out_str)

print(f"Successfully generated {len(all_packages)} packages in generated_packages.ts")
