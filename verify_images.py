import os, json, re

file1 = r'd:\HexaVisionTech\logaa holiday\src\pages\TourCategory.tsx'
content1 = open(file1, encoding='utf-8').read()

file2 = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content2 = open(file2, encoding='utf-8').read()

def check_content(content, name):
    print(f"Checking {name}...")
    matches = re.findall(r'title:\s*[\'\"]([^\'\"]+)[\'\"].*?image:\s*[\'\"]([^\'\"]+)[\'\"]', content, re.DOTALL)
    if not matches:
        matches = re.findall(r'\"title\":\s*[\'\"]([^\'\"]+)[\'\"].*?\"image\":\s*[\'\"]([^\'\"]+)[\'\"]', content, re.DOTALL)
        
    broken = False
    for title, img in matches:
        if 'Shirdi' in title:
            # Check if image actually exists on disk
            # URL is like /assets/shiridi/cards/...
            # On disk it is public/assets/shiridi/cards/...
            # Decode URL spaces if any
            from urllib.parse import unquote
            filepath = 'public' + unquote(img)
            if not os.path.exists(filepath):
                print(f"BROKEN in {name}: '{title}' -> '{img}' (Path: {filepath})")
                broken = True
    if not broken:
        print(f"All Shirdi images in {name} are valid!")

check_content(content1, 'TourCategory.tsx')
check_content(content2, 'PackageDetails.tsx')
