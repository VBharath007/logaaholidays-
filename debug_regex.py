import re
import json

with open('FAQ_Tour_Packages.txt', 'r', encoding='utf-8') as f:
    text = f.read()

faqs = []
blocks = re.split(r'\s+Q\d+\.\s+', text)[1:]

for block in blocks:
    lines = block.strip().split('\n')
    if len(lines) < 3: continue
    
    q_en = lines[0].strip()
    q_ta = lines[1].replace('**', '').strip()
    q_hi = lines[2].replace('**', '').strip()
    faqs.append({'q_en': q_en, 'q_hi': q_hi})

with open('src/pages/PackageDetails.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

for faq in faqs:
    q_pattern = re.escape(faq['q_en'])
    # See if the question string exists at all
    found = re.search(q_pattern, code)
    if found:
        print(f"Found question text: {faq['q_en'][:30]}...")
        obj_pattern = r'\{\s*"question"\s*:\s*"' + q_pattern + r'",[\s\S]*?\}'
        found_obj = re.search(obj_pattern, code)
        if found_obj:
            print(f"  -> Object matched! length={len(found_obj.group(0))}")
        else:
            print(f"  -> Object NOT matched for: {faq['q_en']}")
            # let's look around the found string
            start = max(0, found.start() - 50)
            end = min(len(code), found.end() + 100)
            print("  context:", repr(code[start:end]))
    else:
        print(f"NOT FOUND AT ALL: {faq['q_en']}")
