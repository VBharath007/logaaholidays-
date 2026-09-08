target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\TourCategory.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("getDbPackage('8006')!\n];", "getDbPackage('8006')!,\n  getDbPackage('8007')!,\n  getDbPackage('8008')!,\n  getDbPackage('8009')!,\n  getDbPackage('8010')!,\n  getDbPackage('8011')!\n];")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated TourCategory.tsx successfully!")
