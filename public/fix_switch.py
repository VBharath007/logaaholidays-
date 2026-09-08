with open('src/pages/TourCategory.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old = "  category === 'madurai-tours' ? maduraiPackages : \n  mockPackages;"
new = "  category === 'madurai-tours' ? maduraiPackages : \n  category === 'kerala-tours' ? keralaPackages :\n  mockPackages;"

if old in content:
    content = content.replace(old, new, 1)
    with open('src/pages/TourCategory.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: kerala-tours added to switch')
else:
    print('NOT FOUND')
    idx = content.find('madurai-tours')
    print('madurai-tours at:', idx)
    print('Context:', repr(content[idx-5:idx+100]))
