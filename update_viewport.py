import glob

files = glob.glob('src/sections/*.tsx')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if 'viewport={{ once: true }}' in content:
        content = content.replace('viewport={{ once: true }}', 'viewport={{ once: true, margin: "100px" }}')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
