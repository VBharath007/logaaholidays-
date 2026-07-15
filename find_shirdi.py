import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()
matches = re.finditer(r'\'(\d+)\':\s*\{\s*"title":\s*"([^"]+)"', content)
for m in matches:
    if 'Shirdi Flight Package' in m.group(2) or 'Shirdi' in m.group(2):
        print(f'{m.group(1)}: {m.group(2)}')
