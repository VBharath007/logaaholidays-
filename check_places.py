import re
import json

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
content = open(file, encoding='utf-8').read()

# Find all placesToVisit arrays
places_blocks = re.findall(r'placesToVisit:\s*\[(.*?)\]\s*,', content, re.DOTALL)

for block in places_blocks:
    # Find all objects within the array
    places = re.findall(r'\{\s*id:\s*[\'\"](.*?)[\'\"],\s*name:\s*[\'\"](.*?)[\'\"],\s*description:\s*[\'\"](.*?)[\'\"]', block, re.DOTALL)
    for p in places:
        pid, pname, pdesc = p
        print(f"ID: {pid}")
        print(f"Name: {pname}")
        print(f"Desc snippet: {pdesc[:50]}...")
        print("-" * 30)

