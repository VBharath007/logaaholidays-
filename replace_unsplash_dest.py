import re
import random

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

pool = [
    '/assets/kerala1.avif', 
    '/assets/Tamil Nadu1.avif', 
    '/assets/himachal.avif', 
    '/assets/karnataka1.avif',
    '/assets/maharashtra1.avif',
    '/assets/manipur1.avif',
    '/assets/megalaya1.avif',
    '/assets/Uttar Pradesh1.avif',
    '/assets/Uttarakhand1.avif'
]

def replace_img(match):
    return f"'{random.choice(pool)}'"
    
new_c = re.sub(r"['\"]https://images\.unsplash\.com/[^'\"]+['\"]", replace_img, content)

with open(file, 'w', encoding='utf-8') as f:
    f.write(new_c)
print('Replaced remaining unsplash images in destinationsData')
