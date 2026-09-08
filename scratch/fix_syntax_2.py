import re

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Fix remaining syntax errors
content = content.replace("– 'north-india-tour-packages'", "? 'north-india-tour-packages'")
content = content.replace("– Object.values(packagesDatabase).find", "? Object.values(packagesDatabase).find")
content = content.replace("title–.toLowerCase()", "title?.toLowerCase()")
content = content.replace("overview–.destination–.toLowerCase()", "overview?.destination?.toLowerCase()")
content = content.replace("pkg?.heroImage–.includes", "pkg?.heroImage?.includes")
content = content.replace("pkg?.heroImage–.toLowerCase()", "pkg?.heroImage?.toLowerCase()")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed remaining syntaxes!")
