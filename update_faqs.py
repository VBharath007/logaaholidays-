import re
import os

with open('FAQ_Tour_Packages.txt', 'r', encoding='utf-8') as f:
    text = f.read()

faqs = []

# Regex to match Q1, Q2 etc
blocks = re.split(r'\s+Q\d+\.\s+', text)[1:]

for block in blocks:
    lines = block.strip().split('\n')
    if len(lines) < 3:
        continue
    
    q_en = lines[0].strip()
    q_ta = lines[1].replace('**', '').strip()
    q_hi = lines[2].replace('**', '').strip()
    
    # Find English Answer
    a_en_start = -1
    for i, line in enumerate(lines):
        if line.strip().startswith('A.  '):
            a_en_start = i
            break
            
    a_en_lines = []
    for i in range(a_en_start, len(lines)):
        line = lines[i].strip()
        if line.startswith('**A.** ஆம்') or line.startswith('**A.** நிச்சயமாக') or line.startswith('**A.** இதன்'):
            break
        if line and not line.startswith('- - - -'):
            a_en_lines.append(line)
            
    a_en = ' '.join(a_en_lines).replace('A.  ', '').strip()
    
    # Find Tamil and Hindi Answers
    a_ta = ""
    a_hi = ""
    for line in lines:
        if line.startswith('**A.** ') and (line.endswith('ஆகும்.') or 'ஆம்' in line or 'நிச்சயமாக' in line or 'பொருள்' in line or 'உதவுகின்றன.' in line or 'பெறலாம்.' in line or 'இருக்கும்.' in line or 'ஏற்பாடு' in line):
            if not a_ta:
                a_ta = line.replace('**A.** ', '').strip()
        elif line.startswith('**A.** ') and ('हाँ' in line or 'बिल्कुल' in line or 'अर्थ' in line):
            if not a_hi:
                a_hi = line.replace('**A.** ', '').strip()

    # Fallback if the heuristics above missed them
    if not a_ta or not a_hi:
        ans_ta_idx = -1
        for i, line in enumerate(lines):
            if line.startswith('**A.** '):
                ans_ta_idx = i
                break
        if ans_ta_idx != -1:
            a_ta = lines[ans_ta_idx].replace('**A.** ', '').strip()
            if ans_ta_idx + 1 < len(lines):
                a_hi = lines[ans_ta_idx + 1].replace('**A.** ', '').strip()
            
    faqs.append({
        'q_en': q_en,
        'q_ta': q_ta,
        'q_hi': q_hi,
        'a_en': a_en,
        'a_ta': a_ta,
        'a_hi': a_hi
    })

with open('src/pages/PackageDetails.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

for faq in faqs:
    # We find the existing FAQ object by its english question
    q_pattern = re.escape(faq['q_en'])
    # The existing object has question, questionTamil, answer, answerTamil
    # We want to replace it entirely
    obj_pattern = r'\{\s*"question":\s*"' + q_pattern + r'",[\s\S]*?\}'
    
    new_obj = f"""{{
                "question": "{faq['q_en']}",
                "questionTamil": "{faq['q_ta']}",
                "questionHindi": "{faq['q_hi']}",
                "answer": "{faq['a_en']}",
                "answerTamil": "{faq['a_ta']}",
                "answerHindi": "{faq['a_hi']}"
            }}"""
            
    code = re.sub(obj_pattern, new_obj, code)

with open('src/pages/PackageDetails.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Successfully injected Hindi translations into PackageDetails.tsx")
