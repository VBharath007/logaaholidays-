import re

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

is_volvo = False
for i, line in enumerate(lines):
    if "'830" in line:
        is_volvo = True
    elif "'820" in line:
        is_volvo = False
        
    if '"badge": "Manali Volvo Tour" if is_volvo else "Manali Tour"' in line:
        if is_volvo:
            lines[i] = line.replace('"badge": "Manali Volvo Tour" if is_volvo else "Manali Tour"', '"badge": "Manali Volvo Tour"')
        else:
            lines[i] = line.replace('"badge": "Manali Volvo Tour" if is_volvo else "Manali Tour"', '"badge": "Manali Tour"')
            
    if '"themes": "Manali Volvo Tours" if is_volvo else "Manali Tours"' in line:
        if is_volvo:
            lines[i] = line.replace('"themes": "Manali Volvo Tours" if is_volvo else "Manali Tours"', '"themes": "Manali Volvo Tours"')
        else:
            lines[i] = line.replace('"themes": "Manali Volvo Tours" if is_volvo else "Manali Tours"', '"themes": "Manali Tours"')

with open(target_file, "w", encoding="utf-8") as f:
    f.writelines(lines)

print("Fixed the Python f-string literals injected into JS.")
