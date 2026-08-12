import os
import json

with open('scratch/kashmir.json', 'r', encoding='utf-8') as f:
    packages = json.load(f)

packages_code = ""
for k, v in packages.items():
    packages_code += f"    '{k}': " + json.dumps(v, indent=4).replace('\n', '\n    ') + ",\n"

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

if "'8401':" not in content:
    target = "export const packagesDatabase: Record<string, any> = {"
    content = content.replace(target, target + "\n" + packages_code, 1)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added Kashmir packages to packagesDatabase")
else:
    print("Packages already exist in packagesDatabase")
