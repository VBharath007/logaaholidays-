import re

with open('add_golden_triangle_code.js', 'r', encoding='utf-8') as f:
    packages_code = f.read()

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

idx = content.find('\n};\n\n// Helper normalization function')
if idx != -1:
    final_content = content[:idx] + ',\n' + packages_code + '\n};\n\n// Helper normalization function' + content[idx + len('\n};\n\n// Helper normalization function'):]
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(final_content)
    print("Successfully injected Golden Triangle packages.")
else:
    print("Failed to find injection point.")
