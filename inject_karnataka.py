import re

with open('add_karnataka_code.js', 'r', encoding='utf-8') as f:
    packages_code = f.read()

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# First remove any existing 5001-5006 packages if they exist (they don't, but just in case)
new_content = re.sub(r"(\s*'5001':\s*{.*?'5006':\s*{.*?}\s*,?)", "", content, flags=re.DOTALL)

idx = new_content.find('\n};\n\n// Helper normalization function')
if idx != -1:
    final_content = new_content[:idx] + ',\n' + packages_code + '\n};\n\n// Helper normalization function' + new_content[idx + len('\n};\n\n// Helper normalization function'):]
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(final_content)
    print("Successfully injected Karnataka packages.")
else:
    print("Failed to find injection point.")
