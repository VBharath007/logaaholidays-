import sys, re

with open('replace_kerala.py', 'r', encoding='utf-8') as f:
    code = f.read()

start_marker = 'packages_code = """'
end_marker = '"""'
start_idx = code.find(start_marker) + len(start_marker)
end_idx = code.find(end_marker, start_idx)
packages_code = code[start_idx:end_idx].strip()

with open('src/pages/PackageDetails.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# find the end of packagesDatabase
idx = content.find('\n};\n\n// Helper normalization function')
if idx != -1:
    new_content = content[:idx] + ',\n' + packages_code + '\n};\n\n// Helper normalization function' + content[idx + len('\n};\n\n// Helper normalization function'):]
    with open('src/pages/PackageDetails.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Inserted Kerala packages successfully.')
else:
    print('Failed to find injection point.')
