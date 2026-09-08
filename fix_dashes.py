import re

target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Fix form ternaries
content = re.sub(r'– (\'border-\[var\(--color-brand-orange\)\] bg-white/10\')', r'? \1', content)
content = re.sub(r'focusedField === fieldName –', r'focusedField === fieldName ?', content)
content = re.sub(r'focusedField === \'req\' –', r"focusedField === 'req' ?", content)

# Fix bottom tab ternaries
content = re.sub(r'activeTab === \'itinerary\' –', r"activeTab === 'itinerary' ?", content)
content = re.sub(r'activeTab === \'inclusions\' –', r"activeTab === 'inclusions' ?", content)
content = re.sub(r'activeTab === \'policies\' –', r"activeTab === 'policies' ?", content)

# Fix pkg.policies optional chaining
content = re.sub(r'pkg\.policies–\.payment', r'pkg.policies?.payment', content)
content = re.sub(r'pkg\.policies–\.cancellation', r'pkg.policies?.cancellation', content)

# Fix question marks
content = re.sub(r'Why Choose Logaa Holidays–', r'Why Choose Logaa Holidays?', content)
content = re.sub(r'Need help booking–</p>', r'Need help booking?</p>', content)

# Fix regex
content = re.sub(r'newText = newText\.replace\(\/\(\\d\+\)\\s\*\[nN\]\\s\*\[\\/\\-–\\s\]\*\\s\*\(\\d\+\)\\s\*\[dD\]\/g,', r"newText = newText.replace(/(\d+)\s*[nN]\s*[\/\-\?\s]*\s*(\d+)\s*[dD]/g,", content)

# Fix line 17948, 17955 if they were missed
content = re.sub(r'nights > 1 – \'s\' : \'\'', r"nights > 1 ? 's' : ''", content)

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed the remaining – characters.")
