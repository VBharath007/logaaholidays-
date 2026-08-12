import re

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# I see in the powershell output it's showing as ?" and ?".
# It was likely '–' which my previous script produced via: replace('?', '–')
# Let's fix the specific JS code using regex or simple string replace for the exact lines that got broken.

# The exact lines broken are in getPackageLink, getRegionLink, useSEO, etc.
# We will just fix the known broken logic.

# 1. getPackageLink routePrefix ternary
content = re.sub(r'slug\.replace\(\'-tours\', \'\'\)\)[^\n]+?\'north-india', r"slug.replace('-tours', ''))\n        ? 'north-india", content)

# 2. pkgRaw ternary
content = re.sub(r'const pkgRaw = packageSlug[^\n]+?Object\.values', r"const pkgRaw = packageSlug\n        ? Object.values", content)

# 3. pkg ternary
content = re.sub(r'const pkg = pkgRaw[^\n]+?{ \.\.\.pkgRaw', r"const pkg = pkgRaw ? { ...pkgRaw", content)

# 4. useSEO ternaries
content = re.sub(r'pkg[^\n]+?pkg\.title : \'Tour Package Details\'', r"pkg ? pkg.title : 'Tour Package Details'", content)
content = re.sub(r'pkg[^\n]+?`Explore the best', r"pkg ? `Explore the best", content)
content = re.sub(r'pkg && pkg\.keywords[^\n]+?pkg\.keywords :', r"pkg && pkg.keywords ? pkg.keywords :", content)

# 5. getRegionLink optional chaining
content = re.sub(r'pkg[^\n]+?title[^\n]+?toLowerCase', r"pkg?.title?.toLowerCase", content)
content = re.sub(r'pkg[^\n]+?overview[^\n]+?destination[^\n]+?toLowerCase', r"pkg?.overview?.destination?.toLowerCase", content)

# 6. isCustomBanner optional chaining
content = re.sub(r'pkg[^\n]+?heroImage[^\n]+?includes\(\'1918', r"pkg?.heroImage?.includes('1918", content)
content = re.sub(r'pkg[^\n]+?heroImage[^\n]+?toLowerCase\(\)\.includes\(\'hero', r"pkg?.heroImage?.toLowerCase().includes('hero", content)
content = re.sub(r'pkg[^\n]+?heroImage[^\n]+?toLowerCase\(\)\.includes\(\'kerala', r"pkg?.heroImage?.toLowerCase().includes('kerala", content)

# 7. transport ternary
content = re.sub(r'\$\{pkg\.overview\.transport[^\n]+?\'md:grid-cols-5\' : \'md:grid-cols-4\'\}', r"${pkg.overview.transport ? 'md:grid-cols-5' : 'md:grid-cols-4'}", content)

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed ternaries and optional chaining.")
