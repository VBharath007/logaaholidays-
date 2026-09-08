import re

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Replace firstKeyword.includes('to') with firstKeyword.toLowerCase().includes(' to ')
content = content.replace("firstKeyword.includes('to')", "firstKeyword.toLowerCase().includes(' to ')")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed getPackageDisplayTitle.")
