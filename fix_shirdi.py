import os
import re

# Get all images
card_images = os.listdir(r'public\assets\shiridi\cards')
hero_images = os.listdir(r'public\assets\shiridi\hero')

def clean_name(s):
    # Remove all non-alphanumeric and make lowercase for perfect matching
    return re.sub(r'[^a-zA-Z0-9]', '', s).lower()

# Map cleaned names to their actual paths
card_map = {clean_name(img): f"/assets/shiridi/cards/{img}" for img in card_images if img.endswith('.png')}
hero_map = {clean_name(img): f"/assets/shiridi/hero/{img}" for img in hero_images if img.endswith('.png')}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to match packages. In PackageDetails, it's 'ID': { ... }
    # In TourCategory, it's { id: ID, title: ... }
    
    # We will use regex to find all titles, then replace the images nearby.
    # A safer way is to split by "title:" or just find "title: '...'" or "title: "...", and replace the following image.
    
    # Let's split the content into blocks that look like an object.
    new_content = ""
    # We split by 'title: ' or '"title": '
    parts = re.split(r'(title:\s*[\'"]|"title":\s*[\'"])', content)
    
    if len(parts) == 1:
        return # No titles found

    new_content += parts[0]
    
    for i in range(1, len(parts), 2):
        prefix = parts[i]
        rest = parts[i+1]
        
        # Extract the title string
        match = re.match(r'([^"\'\n]+)[\'"]', rest)
        if match:
            title = match.group(1)
            c_title = clean_name(title)
            
            # If it's a Shirdi package, it should match the cards/heroes
            # Sometimes 'shirdi' might be in the name
            if c_title in card_map:
                card_path = card_map[c_title]
                hero_path = hero_map.get(c_title, card_path) # Fallback to card if hero missing
                
                # Replace the image: field in 'rest'
                rest = re.sub(r'(image:\s*)[\'"][^\'"]+[\'"]', r"\1'" + card_path + "'", rest, count=1)
                rest = re.sub(r'("image":\s*)[\'"][^\'"]+[\'"]', r'\1"' + card_path + '"', rest, count=1)
                
                # Replace heroImage: field in 'rest'
                rest = re.sub(r'(heroImage:\s*)[\'"][^\'"]+[\'"]', r"\1'" + hero_path + "'", rest, count=1)
                rest = re.sub(r'("heroImage":\s*)[\'"][^\'"]+[\'"]', r'\1"' + hero_path + '"', rest, count=1)
            else:
                # If it's a shirdi package but doesn't exact match, maybe partial match
                if 'shirdi' in c_title:
                    for k, v in card_map.items():
                        if k in c_title or c_title in k:
                            rest = re.sub(r'(image:\s*)[\'"][^\'"]+[\'"]', r"\1'" + v + "'", rest, count=1)
                            rest = re.sub(r'("image":\s*)[\'"][^\'"]+[\'"]', r'\1"' + v + '"', rest, count=1)
                            
                            h_path = hero_map.get(k, v)
                            rest = re.sub(r'(heroImage:\s*)[\'"][^\'"]+[\'"]', r"\1'" + h_path + "'", rest, count=1)
                            rest = re.sub(r'("heroImage":\s*)[\'"][^\'"]+[\'"]', r'\1"' + h_path + '"', rest, count=1)
                            break
                            
        new_content += prefix + rest

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath}")

process_file(r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx')
process_file(r'd:\HexaVisionTech\logaa holiday\src\pages\TourCategory.tsx')
