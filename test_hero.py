import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

matches = re.findall(r'"title":\s*"([^"]+)",.*?"heroImage":\s*"([^"]+)"', content, re.DOTALL)
print(f"Found {len(matches)} packages with heroImage")
for title, hero in matches:
    if 'Shirdi' in title:
        print(f"Title: {title[:50]}... -> Hero: {hero}")

matches2 = re.findall(r'"title":\s*"([^"]+)",.*?(?:"image":\s*"([^"]+)")', content, re.DOTALL)
count = 0
for title, img in matches2:
    if 'Shirdi' in title:
        count += 1
print(f"Total Shirdi packages found: {count}")
