import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

matches = re.finditer(r'\'(\d+)\':\s*\{\s*\"title\":\s*\"([^\"]+)\",\s*\"image\":\s*\"([^\"]+)\"', content)
found = False
for m in matches:
    if 'Shirdi Flight Packages From Chennai' in m.group(2) or 'Shirdi Flight Package Via Pune' in m.group(2):
        print(f'{m.group(1)}: {m.group(2)} -> {m.group(3)}')
        found = True

if not found:
    print('Not found in packagesDatabase')
