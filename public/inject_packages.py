import json, re

# 1. Read generated packages
with open('C:/Users/LOQ/.gemini/antigravity/brain/0b20a5b2-7275-46c4-98a0-aba8e6ce6820/scratch/generated_packages.ts', 'r', encoding='utf-8') as f:
    gen_content = f.read()

# Extract inner content (skip first/last lines)
gen_lines = gen_content.split('\n')
inner_content = '\n'.join(gen_lines[1:-2])  # skip "export const newPackages = {" and "};"

# 2. Read PackageDetails.tsx
target_file = 'src/pages/PackageDetails.tsx'
with open(target_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 3. Find old packages block (47 onward)
start_marker = "  '47': {"
end_marker = '};\n\nexport function PackageDetails() {'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1:
    # Try without the 47 marker (first time injection)
    # Find end of packagesDatabase
    start_idx = content.rfind('\n};\n\nexport function PackageDetails', 0, content.find('export function PackageDetails'))
    print(f"Fallback: start_idx={start_idx}")

if start_idx != -1 and end_idx != -1:
    old_chunk = content[start_idx:end_idx]
    print(f"Old chunk length: {len(old_chunk)} chars, starts with: {old_chunk[:50]}")
    
    content = content[:start_idx] + inner_content + '\n' + content[end_idx:]
    
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS! Injected 63 packages into PackageDetails.tsx")
    print(f"New file size: {len(content)} chars")
else:
    print(f"ERROR: Could not find markers. start={start_idx}, end={end_idx}")
