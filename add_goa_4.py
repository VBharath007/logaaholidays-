import re

with open("add_goa.py", "r", encoding="utf-8") as f:
    content = f.read()

# Extract packages_code
start = content.find('packages_code = """') + len('packages_code = """')
end = content.find('"""\n\ntarget_file')
packages_code = content[start:end]

# Replace IDs
packages_code = packages_code.replace("'9104':", "'9107':")
packages_code = packages_code.replace('"id": "9104"', '"id": "9107"')
packages_code = packages_code.replace("'9103':", "'9106':")
packages_code = packages_code.replace('"id": "9103"', '"id": "9106"')
packages_code = packages_code.replace("'9102':", "'9105':")
packages_code = packages_code.replace('"id": "9102"', '"id": "9105"')
packages_code = packages_code.replace("'9101':", "'9104':")
packages_code = packages_code.replace('"id": "9101"', '"id": "9104"')

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    db_content = f.read()

db_content = re.sub(r"(export\s+const\s+packagesDatabase\s*:\s*Record<string,\s*any>\s*=\s*\{)", r"\1\n" + packages_code + ",", db_content, count=1)
with open(target_file, "w", encoding="utf-8") as f:
    f.write(db_content)

print("Successfully added 4 new Goa packages to packagesDatabase")
