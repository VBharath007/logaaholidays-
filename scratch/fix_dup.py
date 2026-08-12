target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    lines = f.read().split('\n')

lines[3932] = lines[3932].replace("'9104':", "'9108':")
lines[4093] = lines[4093].replace('"id": "9104"', '"id": "9108"')

with open(target_file, "w", encoding="utf-8") as f:
    f.write('\n'.join(lines))
print("Fixed duplicate key 9104!")
