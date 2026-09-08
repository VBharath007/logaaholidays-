import re

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Fix python code inside TSX
content = content.replace('"Manali Volvo Tour" if is_volvo else "Manali Tour"', '"Manali Tour"')
content = content.replace('"Manali Volvo Tours" if is_volvo else "Manali Tours"', '"Manali Tours"')

# Fix extra commas
content = content.replace('},,', '},')

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed Manali python syntax and extra commas!")
