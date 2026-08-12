import re

target_file = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Fix optional chaining
content = content.replace("pkg–.", "pkg?.")
content = content.replace("dest.state–.", "dest.state?.")
content = content.replace("pkg.policies–.", "pkg.policies?.")
content = content.replace("pkg.overview–.", "pkg.overview?.")

# Fix ternary operators
content = content.replace("pkgRaw – {", "pkgRaw ? {")
content = content.replace("=== 'tamil nadu' – 'tamilnadu'", "=== 'tamil nadu' ? 'tamilnadu'")
content = content.replace("nights > 1 – 's' : ''", "nights > 1 ? 's' : ''")
content = content.replace("activeTab === 'itinerary' –", "activeTab === 'itinerary' ?")
content = content.replace("activeTab === 'inclusions' –", "activeTab === 'inclusions' ?")
content = content.replace("activeTab === 'policies' –", "activeTab === 'policies' ?")
content = content.replace("pkg – pkg.title", "pkg ? pkg.title")
content = content.replace("pkg && pkg.keywords – pkg.keywords", "pkg && pkg.keywords ? pkg.keywords")
content = content.replace("pkg.overview.transport – 'md:grid-cols-5'", "pkg.overview.transport ? 'md:grid-cols-5'")
content = content.replace("pkg – `Explore the best", "pkg ? `Explore the best")

# Fix text
content = content.replace("Why Choose Logaa Holidays–", "Why Choose Logaa Holidays?")
content = content.replace("Need help booking–", "Need help booking?")

# Fix regex
content = content.replace(r"/(\d+)\s*Nights–\s*[\/\-–\s]*\s*(\d+)\s*Days–/gi", r"/(\d+)\s*Nights?\s*[\/\-\?\s]*\s*(\d+)\s*Days?/gi")
content = content.replace(r"/(\d+)\s*Nights–\s+(\d+)\s*Days–/gi", r"/(\d+)\s*Nights?\s+(\d+)\s*Days?/gi")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed syntaxes!")
