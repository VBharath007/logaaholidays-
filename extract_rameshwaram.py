import re

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
content = open(file, encoding='utf-8').read()

match = re.search(r"id:\s*'rameshwaram-tourism'(.*?)(?=\n  '\w)", content, re.DOTALL)
if match:
    block = match.group(0)
    places = re.findall(r"id:\s*'([^']+)',\s*name:\s*'([^']+)'", block)
    for p in places:
        if p[0] != 'rameshwaram-tourism':
            print(f'{p[0]} -> {p[1]}')
