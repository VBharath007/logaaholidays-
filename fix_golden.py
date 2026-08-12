import re

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

for i in range(8001, 8007):
    pid = str(i)
    # Fix odd characters in JSON
    pattern = r"('" + pid + r"':\s*\{.*?\})"
    def repl(m):
        pkg_str = m.group(1)
        pkg_str = pkg_str.replace('?"', '–')
        pkg_str = pkg_str.replace('?', '–')
        pkg_str = pkg_str.replace('?O', '❌')
        return pkg_str
    content = re.sub(pattern, repl, content, flags=re.DOTALL)

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed Golden Triangle charset issues.")
