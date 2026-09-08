import re

manual_hero_map = {
    "Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package | 3 Days / 2 Nights": "Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package  3 Days  2 Nights.png",
    "Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package | 4 Days / 3 Nights": "Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package  4 Days  3 Nights.png",
    "Chennai to Shirdi & Lonavala Flight Tour Package | 3 Days / 2 Nights": "Chennai to Shirdi & Lonavala Flight Tour Package  3 Days  2 Nights.png",
    "Chennai to Shirdi & Nashik Flight Tour Package | 3 Days / 2 Nights": "chennai to shiridi & nashik 3day and 2 night.png",
    "Chennai to Shirdi & Pandharpur Flight Tour Package | 3 Days / 2 Nights": "Chennai to Shirdi & Pandharpur Flight Tour Package  3 Days  2 Nights.png",
    "Chennai to Shirdi, Ajanta & Ellora Flight Tour Package | 3 Days / 2 Nights": "Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.png",
    "Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package | 4 Days / 3 Nights": "Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package  4 Days  3 Nights.png",
    "Chennai to Mumbai & Shirdi Flight Tour Package | 2 Days / 1 Night": "chennai to mumbai & shiridi.png",
    "Chennai to Shirdi, Pandharpur & Mantralayam Train Tour Package | 8 Days / 7 Nights": "ChennaiShirdiPandharpur Mantralayam Train8 Days 7 Nights.png",
    "Chennai to Shirdi Train Tour Package | 6 Days / 5 Nights": "chennaitoshirdi6day.png",
    "Chennai to Shirdi Train & Flight Tour Package | 4 Days / 3 Nights": "chennaitoshirdiflighttrain4days.png",
    "Chennai to Shirdi Mantralayam Train Tour Package | 7 Days / 6 Nights": "chennaitoshirdimantralayam7days.png",
    "Chennai to Shirdi Flight Tour Package (Via Pune) | 2 Days / 1 Night": "chennaitoshirdiviapune2day.png",
    "Chennai to Shirdi Flight Tour Package | 1 Day": "chennaiatoshirdi1dayflight.png",
    "Madurai to Shirdi Flight Tour Package | 2 Days / 1 Night": "maduraishirdi2day.png"
}

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

parts = re.split(r'("title":\s*[\'"])', content)

new_content = parts[0]
for i in range(1, len(parts), 2):
    prefix = parts[i]
    rest = parts[i+1]
    
    match = re.match(r'([^"\'\n]+)[\'"]', rest)
    if match:
        title = match.group(1)
        
        if title in manual_hero_map:
            hero_file = manual_hero_map[title]
            hero_path = f"/assets/shiridi/hero/{hero_file}"
            
            # Replace heroImage
            rest = re.sub(r'("heroImage":\s*)[\'"][^\'"]+[\'"]', r'\1"' + hero_path + '"', rest, count=1)
            
    new_content += prefix + rest

with open(file, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated Hero Images!")
