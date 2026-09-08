import re

image_map = {
    'vivekananda-rock': '/assets/generated/vivekananda_rock.png',
    'thiruvalluvar-statue': '/assets/generated/thiruvalluvar_statue.png',
    'padmanabhaswamy-temple': '/assets/generated/padmanabhaswamy_temple.png',
    'padmanabhapuram-palace': '/assets/generated/padmanabhapuram_palace.png',
    'napier-museum': '/assets/generated/napier_museum.png',
    'kanyakumari-beach': '/assets/generated/kanyakumari_beach.png',
    'sunset-point': '/assets/generated/kanyakumari_beach.png',
    'lighthouse-beach': '/assets/generated/lighthouse_beach.png',
    'samudra-beach': '/assets/generated/lighthouse_beach.png'
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
print("Updated images in destinationsData.ts!")
