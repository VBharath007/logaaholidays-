import json
import re

with open('C:/Users/LOQ/.gemini/antigravity/brain/0b20a5b2-7275-46c4-98a0-aba8e6ce6820/scratch/generated_packages.ts', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
for i, line in enumerate(lines):
    if '\"id\":' in line:
        try:
            pid = line.split('\"')[3]
            title_line = lines[i+1]
            title = title_line.split('\"')[3] if '\"title\":' in title_line else title_line.strip()
            print(f'{pid}: {title}')
        except:
            pass
