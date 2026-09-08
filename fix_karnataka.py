import re

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# We will regex replace the titles for packages 5001-5006
for i in range(5001, 5007):
    pid = str(i)
    # find '5001': { "title": "...",
    pattern = r"('" + pid + r"':\s*\{\s*\"title\":\s*\")([^\"]+)(\",)"
    
    def repl(m):
        full_title = m.group(2)
        # remove everything after and including the dash/weird char and numbers
        # e.g., "Mysore and Coorg Tour Package ? 3 Nights / 4 Days" -> "Mysore and Coorg Tour Package"
        clean_title = re.sub(r'\s*[^a-zA-Z0-9,\s]+\s*\d+\s*Nights?.*$', '', full_title).strip()
        return m.group(1) + clean_title + m.group(3)
        
    content = re.sub(pattern, repl, content)

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed Karnataka titles.")
