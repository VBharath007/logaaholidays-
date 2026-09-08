import re

with open('add_manali_code.js', 'r', encoding='utf-8') as f:
    packages_code = f.read()

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

idx = content.find('\n};\n\n// Helper normalization function')
if idx != -1:
    # Ensure there is a comma after the last package
    last_brace = content.rfind('}', 0, idx)
    if content[last_brace+1:idx].strip() == '':
        content = content[:last_brace+1] + ',' + content[last_brace+1:]
        idx = content.find('\n};\n\n// Helper normalization function')

    final_content = content[:idx] + '\n' + packages_code + '\n};\n\n// Helper normalization function' + content[idx + len('\n};\n\n// Helper normalization function'):]
    
    # Fix odd characters
    final_content = final_content.replace('?"', '–')
    final_content = final_content.replace('?O', '❌')
    final_content = final_content.replace('?', '–')

    with open(target_file, "w", encoding="utf-8") as f:
        f.write(final_content)
    print("Successfully injected Manali packages.")
else:
    print("Failed to find injection point.")
