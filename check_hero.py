import re
content = open(r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx', encoding='utf-8').read()
matches = re.findall(r'\"title\": \"Chennai to Shirdi & Nashik Flight Tour Package.*?(?:image|heroImage)\": \"([^\"]+)\"', content, re.DOTALL)
print(matches)

matches_all = re.findall(r'\"title\":\s*\"([^\"]+)\".*?\"image\":\s*\"([^\"]+)\"', content, re.DOTALL)
for t, i in matches_all:
    if 'Shirdi' in t:
        print(f"Title: {t}\nImage: {i}\n")
