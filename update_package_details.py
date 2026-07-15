import re

file = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content = open(file, encoding='utf-8').read()

updates = {
    # Shirdi
    '2': '/assets/shiridi/cards/chennaitoshirditrainflight4days.png',
    '4': '/assets/shiridi/cards/chennaitoshirdiviapuneflight3days.png',
    '5': '/assets/shiridi/cards/chennaitoshirdi6daytrain.png',
    '6': '/assets/shiridi/cards/chennaishirdimantralayam7days.png',
    '7': '/assets/shiridi/cards/chennaishirdipandrpurmantralayam8days.png',
    '10': '/assets/shiridi/cards/Chennai to Shirdi & Pandharpur Flight Tour Package  3 Days  2 Nights.png',
    '12': '/assets/shiridi/cards/Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package  3 Days  2 Nights.png',
    '13': '/assets/shiridi/cards/Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package  4 Days  3 Nights.png',
    
    # South India
    '26': '/assets/generated/ramanathaswamy_temple.png',
    '27': '/assets/kerala1.avif',
    '28': '/assets/generated/kanyakumari_beach.png',
    '29': '/assets/tamilnadu1.avif',
    '30': '/assets/generated/vivekananda_rock.png',
    '31': '/assets/generated/padmanabhaswamy_temple.png',
    
    # North East
    '32': '/assets/meghalaya1.avif',
    '33': '/assets/assam1.avif',
    '34': '/assets/sikkim1.avif',
    '35': '/assets/mizoram1.avif',
    '36': '/assets/meghalaya1.avif',
    '37': '/assets/assam1.avif',
    '38': '/assets/sikkim1.avif',
    '39': '/assets/mizoram1.avif',
    '40': '/assets/assam1.avif'
}

for pkg_id, new_img in updates.items():
    # We need to match the block for the specific package ID and update its image
    pattern = r"('" + pkg_id + r"':\s*\{\s*id:\s*'" + pkg_id + r"',\s*title:\s*'[^']+',\s*image:\s*')[^']+'"
    content = re.sub(pattern, r"\g<1>" + new_img + "'", content, count=1)
    
with open(file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated PackageDetails.tsx!")
