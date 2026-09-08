import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

matches = re.findall(r'"title":\s*"([^"]+)",.*?"heroImage":\s*"([^"]+)"', content, re.DOTALL)
for t, h in matches:
    if 'Shirdi' in t:
        print(t[:30], "->", h.split('/')[-1])
