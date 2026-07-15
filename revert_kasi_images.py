import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

# For IDs 2000 to 2006, change the image field from /assets/generated/... to /assets/varanasi/cards/kasiX.png
# ID 2000 -> kasi1.png
# ID 2001 -> kasi2.png
# ...
# ID 2006 -> kasi7.png

for i in range(7):
    pkg_id = str(2000 + i)
    img_name = f'kasi{i+1}.png'
    img_path = f'/assets/varanasi/cards/{img_name}'
    
    # Use regex to find the block for the pkg_id and replace the image field
    # pattern: '2000': { ... "image": "/assets/generated/..."
    def repl(m):
        return f"{m.group(1)}\"image\": \"{img_path}\""
        
    pattern = r"(?s)('" + pkg_id + r"':\s*\{.*?)(?=\"image\":\s*\"[^\"]+\")\"image\":\s*\"[^\"]+\""
    content = re.sub(pattern, repl, content, count=1)

with open(file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Kasi packages in PackageDetails.tsx to use original card images!")
