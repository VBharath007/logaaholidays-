import re

image_map = {
    'ramanathaswamy-temple': '/assets/generated/ramanathaswamy_temple.png',
    'agniteertham': '/assets/generated/agniteertham.png',
    'pamban-bridge': '/assets/generated/pamban_bridge.png',
    'panchmukhi-hanuman': '/assets/generated/panchmukhi_hanuman.png',
    'dhanushkodi': '/assets/generated/dhanushkodi.png'
}

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
content = open(file, encoding='utf-8').read()

for place_id, img_path in image_map.items():
    def repl(m):
        return f"{m.group(1)}image: '{img_path}'"
        
    pattern = r"(?s)(id:\s*'" + place_id + r"'.*?)(image:\s*'[^']+')"
    content = re.sub(pattern, repl, content, count=1)

with open(file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Rameshwaram images in destinationsData.ts!")
