import re
import json

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
content = open(file, encoding='utf-8').read()

# I will find all '{ id: '...' }' blocks in the file and print them
matches = re.findall(r'\{\s*id:\s*[\'\"]([^\'\"]+)[\'\"],\s*name:\s*[\'\"]([^\'\"]+)[\'\"](.*?)\n\s*\}', content, re.DOTALL)

for m in matches:
    pid = m[0]
    pname = m[1]
    rest = m[2]
    # Check if this place is in kanyakumari or trivandrum by looking at some known IDs
    if 'kanyakumari' in pid or 'trivandrum' in pid or 'kovalam' in pid or 'padmanabha' in pid or 'vivek' in pid or 'napier' in pid or 'sunset' in pid:
        # Get the first section title
        sec_match = re.search(r'title:\s*[\'\"]([^\'\"]+)[\'\"]', rest)
        sec_title = sec_match.group(1) if sec_match else "None"
        print(f"ID: {pid} | Name: {pname} | Section Title: {sec_title}")
