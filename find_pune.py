import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()
if 'Via Pune' in content:
    print('Found Via Pune in DB!')
    matches = re.finditer(r'\'(\d+)\':\s*\{\s*"title":\s*"([^"]+)"', content)
    for m in matches:
        if 'Via Pune' in m.group(2) or 'via Pune' in m.group(2):
            print(f'{m.group(1)}: {m.group(2)}')
