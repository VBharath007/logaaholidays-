import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()
matches = re.finditer(r'\'(\d+)\':\s*\{\s*"title":\s*"([^"]+)",.*?"destination":\s*"([^"]+)".*?"image":\s*"([^"]+)"', content, re.DOTALL)
count = 0
for m in matches:
    t = m.group(2).lower()
    d = m.group(3).lower()
    if 'chennai' in t or 'chennai' in d:
        count += 1
        print(f'{count}. {m.group(1)}: {m.group(2)}')
print(f'Total: {count}')
