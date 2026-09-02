"""
Fix formatting: ensure 'id' field is on its own line after the injected SEO block.
"""
import re

SRC = r"src/pages/PackageDetails.tsx"

with open(SRC, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix: },"id" -> },\n        "id"
content = re.sub(r'\},("id"\s*:\s*")', r'},\n        \1', content)

with open(SRC, 'w', encoding='utf-8') as f:
    f.write(content)

print("Formatting fixed.")
