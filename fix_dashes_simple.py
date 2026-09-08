target_file = r"src/pages/PackageDetails.tsx"
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Fix form ternaries
content = content.replace("– 'border-[var(--color-brand-orange)] bg-white/10'", "? 'border-[var(--color-brand-orange)] bg-white/10'")
content = content.replace("focusedField === fieldName –", "focusedField === fieldName ?")
content = content.replace("focusedField === 'req' –", "focusedField === 'req' ?")

# Fix bottom tab ternaries
content = content.replace("activeTab === 'itinerary' –", "activeTab === 'itinerary' ?")
content = content.replace("activeTab === 'inclusions' –", "activeTab === 'inclusions' ?")
content = content.replace("activeTab === 'policies' –", "activeTab === 'policies' ?")

# Fix pkg.policies optional chaining
content = content.replace("pkg.policies–.payment", "pkg.policies?.payment")
content = content.replace("pkg.policies–.cancellation", "pkg.policies?.cancellation")

# Fix question marks
content = content.replace("Why Choose Logaa Holidays–", "Why Choose Logaa Holidays?")
content = content.replace("Need help booking–</p>", "Need help booking?</p>")

# Fix regex
content = content.replace("newText = newText.replace(/(\\d+)\\s*[nN]\\s*[\\/\\-–\\s]*\\s*(\\d+)\\s*[dD]/g,", "newText = newText.replace(/(\\d+)\\s*[nN]\\s*[\\/\\-\\?\\s]*\\s*(\\d+)\\s*[dD]/g,")

# Fix line 17948, 17955 if they were missed
content = content.replace("nights > 1 – 's' : ''", "nights > 1 ? 's' : ''")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed the remaining – characters.")
