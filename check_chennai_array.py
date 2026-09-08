import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\TourCategory.tsx'
content = open(file, encoding='utf-8').read()

matches = re.finditer(r'const\s+(\w+)\s*=\s*\[(.*?)\];', content, re.DOTALL)
for m in matches:
    if 'Shirdi Flight Packages From Chennai' in m.group(2):
        print('Found array:', m.group(1))
        pkg_blocks = re.findall(r'\{\s*id:\s*\d+,.*?\}', m.group(2), re.DOTALL)
        print(f'Total packages in {m.group(1)}: {len(pkg_blocks)}')
        
        for i, pkg in enumerate(pkg_blocks[:25]):
            title_match = re.search(r'title:\s*\'([^\']+)\'', pkg)
            img_match = re.search(r'image:\s*\'([^\']+)\'', pkg)
            t = title_match.group(1) if title_match else 'Unknown'
            img = img_match.group(1) if img_match else 'Unknown'
            print(f'{i+1}: {t} -> {img.split("/")[-1]}')
