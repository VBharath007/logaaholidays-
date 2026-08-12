import re

target = r"d:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts"
with open(target, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace image for karnataka-tourism
content = re.sub(
    r"('karnataka-tourism': \{[\s\S]*?name: 'Karnataka',\s*image: )'/assets/karnataka1\.webp'",
    r"\g<1>'/assets/karnataka/karnataka4.webp'",
    content
)

# Replace popularPackages for karnataka-tourism (we match specifically the section under karnataka-tourism)
content = re.sub(
    r"('karnataka-tourism': \{[\s\S]*?placesToVisit: \[\],\s*popularPackages: )\[.*?\](\s*\})",
    r"\g<1>['3090', '3091', '3092', '3093', '3094', '3095', '3096']\g<2>",
    content
)

with open(target, 'w', encoding='utf-8') as f:
    f.write(content)
print("SUCCESS: Updated destinationsData.ts")
