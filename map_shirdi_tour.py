import os
import re
import difflib

# Load images
card_images = os.listdir(r'public\assets\shiridi\cards')
card_paths = {img: f'/assets/shiridi/cards/{img}' for img in card_images if img.endswith('.png')}

def clean_name(s):
    return re.sub(r'[^a-zA-Z0-9]', '', s).lower()

card_names = {clean_name(k): v for k, v in card_paths.items()}

file = r'd:\HexaVisionTech\logaa holiday\src\pages\TourCategory.tsx'
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

packages = re.split(r'(?=\n  \{)', content)

new_content = ""
for pkg in packages:
    if "title:" not in pkg:
        new_content += pkg
        continue
        
    title_match = re.search(r"title:\s*'([^']+)'", pkg)
    if not title_match:
        new_content += pkg
        continue
        
    title = title_match.group(1)
    
    if 'Shirdi' in title or 'Mumbai' in title or 'Jyotirlinga' in title:
        c_title = clean_name(title)
        
        card_matches = difflib.get_close_matches(c_title, card_names.keys(), n=1, cutoff=0.5)
        if card_matches:
            best_card = card_names[card_matches[0]]
            pkg = re.sub(r"image:\s*'[^']+'", f"image: '{best_card}'", pkg)
            
    new_content += pkg

with open(file, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated Shirdi package images in TourCategory.tsx")
