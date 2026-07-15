import re

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
content = open(file, encoding='utf-8').read()

def print_places_for_dest(dest_key):
    # Find the block for this destination
    # This is a bit tricky with regex, we can just find 'dest_key': { ... }
    match = re.search(fr"  '{dest_key}': \{{(.*?)\n  \}},?\n  '", content, re.DOTALL)
    if not match:
        match = re.search(fr"  '{dest_key}': \{{(.*)\Z", content, re.DOTALL)
    
    if match:
        block = match.group(1)
        # Find placesToVisit
        places_match = re.search(r'placesToVisit:\s*\[(.*?)\]\s*,?\s*popularPackages', block, re.DOTALL)
        if places_match:
            places_block = places_match.group(1)
            places = re.findall(r'\{\s*id:\s*[\'\"]([^\'\"]+)[\'\"],\s*name:\s*[\'\"]([^\'\"]+)[\'\"]', places_block, re.DOTALL)
            print(f"--- {dest_key} ---")
            for pid, pname in places:
                print(f"ID: {pid} | Name: {pname}")
        else:
            print(f"No placesToVisit found for {dest_key}")
    else:
        print(f"Could not find block for {dest_key}")

print_places_for_dest('kanyakumari-tourism')
print_places_for_dest('trivandrum-tourism')
print_places_for_dest('kovalam-tourism')
