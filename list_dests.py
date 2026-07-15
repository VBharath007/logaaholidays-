import re
file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
content = open(file, encoding='utf-8').read()
matches = re.findall(r'^  \'([^\']+)\': \{', content, re.MULTILINE)
print("Destinations in data:")
for m in matches:
    print(m)
