import re

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Fix remaining syntax errors
content = content.replace("focusedField === fieldName\n            –", "focusedField === fieldName\n            ?")
content = content.replace("focusedField === fieldName –", "focusedField === fieldName ?")
content = content.replace("focusedField === 'req' –", "focusedField === 'req' ?")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed remaining syntaxes round 3!")
