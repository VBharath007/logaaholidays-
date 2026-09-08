import re
import random

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

pool = [
    '/assets/kerala1.webp', 
    '/assets/Tamil Nadu1.webp', 
    '/assets/himachal.webp', 
    '/assets/karnataka1.webp',
    '/assets/maharashtra1.webp',
    '/assets/manipur1.webp',
    '/assets/megalaya1.webp',
    '/assets/Uttar Pradesh1.webp',
    '/assets/Uttarakhand1.webp'
]

def replace_img(match):
    return f"'{random.choice(pool)}'"
    
new_c = re.sub(r"['\"]https://images\.unsplash\.com/[^'\"]+['\"]", replace_img, content)

with open(file, 'w', encoding='utf-8') as f:
    f.write(new_c)
print('Replaced remaining unsplash images in destinationsData')
