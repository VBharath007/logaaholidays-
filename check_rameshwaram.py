import re
import json

file = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
content = open(file, encoding='utf-8').read()

matches = re.findall(r'(\w+):\s*\{\s*id:\s*[\'\"]([^\'\"]+)[\'\"],\s*name:\s*[\'\"]([^\'\"]+)[\'\"](.*?)\n  \},', content, re.DOTALL)
for block in matches:
    destId = block[1]
    if 'rameshwaram' in destId.lower():
        places = re.findall(r'\{\s*id:\s*[\'\"]([^\'\"]+)[\'\"],\s*name:\s*[\'\"]([^\'\"]+)[\'\"]', block[3], re.DOTALL)
        for p in places:
            print(f'Dest: {destId} | Place ID: {p[0]} | Name: {p[1]}')
