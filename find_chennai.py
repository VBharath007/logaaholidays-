import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

matches = re.findall(r'"title":\s*"([^"]+)"', content)
for m in matches:
    if 'chennai' in m.lower():
        print(m)
