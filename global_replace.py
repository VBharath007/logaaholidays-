import os
import re
import random

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
    
def replace_all():
    count = 0
    for root, dirs, files in os.walk(r'd:\HexaVisionTech\logaa holiday\src'):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    new_content = re.sub(r"['\"]https://images\.unsplash\.com/[^'\"]+['\"]", replace_img, content)
                    
                    if new_content != content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        count += 1
                        print(f"Updated {file}")
                except Exception as e:
                    print(f"Failed {file}: {e}")
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    replace_all()
