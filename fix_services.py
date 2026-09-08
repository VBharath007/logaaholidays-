import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\Services.tsx'
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any occurrence of https://images.unsplash.com... with /assets/kerala1.avif
new_content = re.sub(r"https://images\.unsplash\.com/[^\s'\"\`\)]*", "/assets/kerala1.avif", content)

with open(file, 'w', encoding='utf-8') as f:
    f.write(new_content)
