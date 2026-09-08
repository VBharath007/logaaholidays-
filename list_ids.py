import glob
import re

for f in glob.glob('add_*.py') + glob.glob('add_*.js'):
    with open(f, encoding='utf-8', errors='ignore') as file:
        content = file.read()
        ids = [m[0] or m[1] for m in re.findall(r'\'id\':\s*\'(\d+)\'|\"id\":\s*\"(\d+)\"', content)]
        print(f"{f}: {ids}")
