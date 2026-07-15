import re

file_path = 'src/pages/NorthIndiaPackage.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_north_india(text):
    start = text.find('const packagesData = [')
    if start == -1: return text
    
    end = text.find(']', start)
    if end == -1: return text
    
    chunk = text[start:end]
    
    # We want to replace the image for the package that contains 'Shirdi' in the title or location.
    def replacer(match):
        return f"image: '/assets/shiridi images/shird.jpg'"
        
    # Using regex to find the line with Shirdi and replace its image
    # Note: re.sub with a custom function that only replaces if 'Shirdi' is in the line
    lines = chunk.split('\n')
    for i, line in enumerate(lines):
        if 'Shirdi' in line:
            lines[i] = re.sub(r"image:\s*'[^']*'", "image: '/assets/shiridi images/shird.jpg'", line)
            
    new_chunk = '\n'.join(lines)
    return text[:start] + new_chunk + text[end:]

new_content = replace_north_india(content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated NorthIndiaPackage.tsx")
