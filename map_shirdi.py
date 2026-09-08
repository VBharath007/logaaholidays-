import os
import re
import difflib

# Load images
card_images = os.listdir(r'public\assets\shiridi\cards')
hero_images = os.listdir(r'public\assets\shiridi\hero')

card_paths = {img: f'/assets/shiridi/cards/{img}' for img in card_images if img.endswith('.png')}
hero_paths = {img: f'/assets/shiridi/hero/{img}' for img in hero_images if img.endswith('.png')}

def clean_name(s):
    # Remove special chars and spaces, convert to lower
    return re.sub(r'[^a-zA-Z0-9]', '', s).lower()

card_names = {clean_name(k): v for k, v in card_paths.items()}
hero_names = {clean_name(k): v for k, v in hero_paths.items()}

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find each package block, get the title, find matching image, and replace image/heroImage properties
# Let's parse the file block by block
packages = re.split(r'(?=\n  \'\d+\': \{)', content)

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
    
    # Only map if it's a Shirdi package or one of the new ones
    if 'Shirdi' in title or 'Mumbai' in title or 'Jyotirlinga' in title:
        c_title = clean_name(title)
        
        # Match Card
        card_matches = difflib.get_close_matches(c_title, card_names.keys(), n=1, cutoff=0.5)
        if card_matches:
            best_card = card_names[card_matches[0]]
            pkg = re.sub(r"image:\s*'[^']+'", f"image: '{best_card}'", pkg)
            
        # Match Hero
        hero_matches = difflib.get_close_matches(c_title, hero_names.keys(), n=1, cutoff=0.4)
        if hero_matches:
            best_hero = hero_names[hero_matches[0]]
            pkg = re.sub(r"heroImage:\s*'[^']+'", f"heroImage: '{best_hero}'", pkg)
        else:
            # Fallback for hero to card if no hero found, but wait, 
            # if we don't have hero, just leave it or use a default shirdi hero if available.
            pass
            
    new_content += pkg

with open(file, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated Shirdi package images in PackageDetails.tsx")
