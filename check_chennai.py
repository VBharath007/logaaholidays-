import re
import json

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

matches = re.findall(r'\'(\d+)\':\s*\{\s*"title":\s*"([^"]+)",\s*"image":\s*"([^"]+)"(?:,\s*"heroImage":\s*"([^"]+)")?', content)

for m in matches:
    pkg_id = m[0]
    title = m[1]
    image = m[2]
    hero = m[3] if len(m) > 3 else ""
    if 'chennai' in title.lower():
        print(f"ID: {pkg_id}")
        print(f"  Img : {image}")
        print(f"  Hero: {hero}")
