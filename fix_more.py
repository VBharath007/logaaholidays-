import re

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Fix normalizeDurationOrder regexes
content = content.replace(r'Nights–\s*[\/\-–\s]*\s*(\d+)\s*Days–', r'Nights?\s*[\/\-\?\s]*\s*(\d+)\s*Days?')
content = content.replace(r'Nights–\s+(\d+)\s*Days–', r'Nights?\s+(\d+)\s*Days?')
content = content.replace(r'nights > 1 – \'s\' : \'\'', r'nights > 1 ? \'s\' : \'\'')

# Fix titleLower and destLower
content = content.replace(r'const titleLower = (pkg?.title?.toLowerCase();', r'const titleLower = (pkg?.title || "").toLowerCase();')
content = content.replace(r'const destLower = (pkg?.overview?.destination?.toLowerCase();', r'const destLower = (pkg?.overview?.destination || "").toLowerCase();')

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed additional syntax errors.")
