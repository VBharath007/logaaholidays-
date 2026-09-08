import re
import random
import os

files_to_update = [
    r'd:\HexaVisionTech\logaa holiday\src\pages\About.tsx',
    r'd:\HexaVisionTech\logaa holiday\src\pages\Contact.tsx',
    r'd:\HexaVisionTech\logaa holiday\src\pages\Home.tsx',
    r'd:\HexaVisionTech\logaa holiday\src\pages\TestimonialsPage.tsx',
    r'd:\HexaVisionTech\logaa holiday\src\pages\Services.tsx',
    r'd:\HexaVisionTech\logaa holiday\src\pages\ServiceDetails.tsx',
]

pool = [
    '/assets/kerala1.webp',
    '/assets/Tamil Nadu1.webp',
    '/assets/himachal.webp',
    '/assets/karnataka1.webp',
    '/assets/maharashtra1.webp',
    '/assets/manipur1.webp',
    '/assets/megalaya1.webp',
    '/assets/Mizoram1.webp',
    '/assets/Nagaland1.webp',
    '/assets/Tripura1.webp',
    '/assets/Uttar Pradesh1.webp',
    '/assets/Uttarakhand1.webp'
]

def update_files():
    for filepath in files_to_update:
        if not os.path.exists(filepath):
            print(f"Skipping {filepath} (does not exist)")
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        def replacer(match):
            return f"'{random.choice(pool)}'"
            
        # Match 'https://images.unsplash.com...' or "https://images.unsplash.com..."
        new_content = re.sub(r'[\'"]https://images\.unsplash\.com/[^\'"]+[\'"]', replacer, content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
        else:
            print(f"No changes for {filepath}")

if __name__ == "__main__":
    update_files()
