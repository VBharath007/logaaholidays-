import re

file_path = 'src/pages/TourCategory.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

images = [
    '/assets/shiridi images/Sai theme park.jpg',
    '/assets/shiridi images/dwarkamai.jpg',
    '/assets/shiridi images/sai1.jpg',
    '/assets/shiridi images/sai2.jpg',
    '/assets/shiridi images/sai3.jpg',
    '/assets/shiridi images/sai4.jpg',
    '/assets/shiridi images/sai5.jpg',
    '/assets/shiridi images/sai6.jpg',
    '/assets/shiridi images/samadhi-mandir.jpg',
    '/assets/shiridi images/shird.jpg',
    '/assets/shiridi images/shirdhi.jpg',
    '/assets/shiridi images/shirdhiexterior.jpg'
]

def replace_images_in_array(array_name, text):
    start = text.find('const ' + array_name + ' = [')
    if start == -1: return text
    
    end = text.find('];', start)
    if end == -1: return text
    
    chunk = text[start:end]
    
    img_idx = 0
    def replacer(match):
        nonlocal img_idx
        img = images[img_idx % len(images)]
        img_idx += 1
        return f"image: '{img}'"
        
    new_chunk = re.sub(r"image:\s*'[^']*'", replacer, chunk)
    return text[:start] + new_chunk + text[end:]

new_content = replace_images_in_array('shirdiPackages', content)
new_content = replace_images_in_array('punePackages', new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated TourCategory.tsx")
