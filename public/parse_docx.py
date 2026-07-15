import re
import json

# Read the extracted text
with open('public/extracted_packages.txt', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

# Find all package start line numbers
package_starts = []
for i, line in enumerate(lines):
    stripped = line.strip()
    # Match lines that look like package titles
    if re.match(r'^(?:[\U0001F300-\U0001FFFF\u2600-\u26FF]\s*)?Madurai', stripped):
        if any(kw in stripped for kw in ['Tour', 'Trip', 'Package']):
            package_starts.append(i)

print(f"Found {len(package_starts)} packages")

packages = []
start_id = 47

for pkg_idx, start_line in enumerate(package_starts):
    end_line = package_starts[pkg_idx + 1] if pkg_idx + 1 < len(package_starts) else len(lines)
    block_lines = lines[start_line:end_line]
    block = '\n'.join(block_lines).strip()

    if len(block_lines) < 8:
        continue

    # Title = first line, cleaned of emojis
    title_line = block_lines[0].strip()
    title_line = re.sub(r'[\U0001F300-\U0001FFFF\u2600-\u26FF\u2700-\u27BF]+\s*', '', title_line).strip()

    # Duration detection
    if '3 Days' in block or '2 Nights' in block:
        duration = '2 Nights / 3 Days'
    elif '2 Days' in block or '1 Night' in block:
        duration = '1 Night / 2 Days'
    else:
        duration = '1 Day'

    # Destination from title
    dest = title_line
    for remove in ['Madurai to ', 'Madurai \u2013 ', 'Madurai \u2192 ', 'Madurai - ']:
        dest = dest.replace(remove, '')
    for remove in [' One Day Tour Package', ' One Day Trip', ' Tour Package', ' 2 Days / 1 Night Tour Package',
                   ' 3 Days / 2 Nights Tour Package', ' 2 Days Tour Package']:
        dest = dest.replace(remove, '')
    dest = dest.strip()

    # --- Parse Itinerary ---
    itinerary = []
    # Try multi-day itinerary first
    day_blocks = re.split(r'(Day\s*0?[123]\s*[\u2013\-\u2014].*)', block)
    if len(day_blocks) > 1:
        for i in range(1, len(day_blocks), 2):
            day_header = day_blocks[i].strip()
            day_body = day_blocks[i + 1] if i + 1 < len(day_blocks) else ''
            # Stop at Package Includes
            day_body = re.split(r'(?:Package Includes|Accommodation Options|Accommodation\n)', day_body)[0].strip()
            itinerary.append({
                'day': re.match(r'(Day\s*\d+)', day_header, re.I).group(1) if re.match(r'(Day\s*\d+)', day_header, re.I) else day_header.split('\u2013')[0].strip(),
                'title': day_header,
                'description': day_body
            })
    else:
        # One-day: extract between Tour Itinerary / Suggested Itinerary and Package Includes
        itinerary_text = ''
        for marker in ['Suggested Itinerary', 'Tour Itinerary', 'Sightseeing']:
            if marker in block:
                parts = block.split(marker, 1)
                if len(parts) > 1:
                    itinerary_text = parts[1]
                    break
        itinerary_text = re.split(r'Package Includes|Why Choose|Contact Us', itinerary_text)[0].strip()
        itinerary.append({
            'day': 'Day 1',
            'title': title_line,
            'description': itinerary_text
        })

    # --- Parse Inclusions ---
    inclusions = []
    if 'Package Includes' in block:
        inc_text = block.split('Package Includes', 1)[1]
        inc_text = re.split(r'Package Excludes|Driver Information|Driver Languages|Accommodation', inc_text)[0]
        for line in inc_text.split('\n'):
            line = re.sub(r'^[\u2022\u2713\u2714\u2611\u25cf\u2713\-\*\t]+\s*', '', line).strip()
            line = re.sub(r'[\U0001F300-\U0001FFFF\u2600-\u26FF\u2700-\u27BF]+', '', line).strip()
            if line and len(line) > 4 and not line.startswith('Package'):
                inclusions.append(line)

    # --- Parse Exclusions ---
    exclusions = []
    if 'Package Excludes' in block:
        exc_text = block.split('Package Excludes', 1)[1]
        exc_text = re.split(r'Why Choose|Contact Us|Driver Information|Driver Languages|Best Time', exc_text)[0]
        for line in exc_text.split('\n'):
            line = re.sub(r'^[\u2022\u2713\u2714\u2611\u25cf\u2713\-\*\t]+\s*', '', line).strip()
            line = re.sub(r'[\U0001F300-\U0001FFFF\u2600-\u26FF\u2700-\u27BF]+', '', line).strip()
            if line and len(line) > 4 and not line.startswith('Package'):
                exclusions.append(line)

    # Choose image based on destination keywords
    image = 'https://images.unsplash.com/photo-1596489370603-9cd3ef4e5cf4?auto=format&fit=crop&q=80&w=1600'
    if 'Rameswaram' in dest: image = 'https://images.unsplash.com/photo-1620032338275-cb628e94e2cc?auto=format&fit=crop&q=80&w=1600'
    elif 'Kodaikanal' in dest: image = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1600'
    elif 'Kanyakumari' in dest or 'Trivandrum' in dest or 'Thiruvananthapuram' in dest: image = 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1600'
    elif 'Thekkady' in dest: image = 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1600'
    elif 'Munnar' in dest: image = 'https://images.unsplash.com/photo-1593693397690-362cb9666cb2?auto=format&fit=crop&q=80&w=1600'
    elif 'Ooty' in dest: image = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600'
    elif 'Courtallam' in dest or 'Meghamalai' in dest or 'Valparai' in dest or 'Vagamon' in dest: image = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600'
    elif 'Alleppey' in dest or 'Kumarakom' in dest: image = 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1600'
    elif 'Trichy' in dest or 'Thanjavur' in dest or 'Kumbakonam' in dest: image = 'https://images.unsplash.com/photo-1581290742293-e4a15a85d34a?auto=format&fit=crop&q=80&w=1600'
    elif 'Tiruchendur' in dest: image = 'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?auto=format&fit=crop&q=80&w=1600'

    package_obj = {
        'id': str(start_id),
        'title': title_line,
        'image': image,
        'overview': {
            'duration': duration,
            'destination': dest,
            'activities': 'Sightseeing',
            'themes': 'Religious & Pilgrimage, Culture & Heritage, Nature & Wildlife'
        },
        'priceDetails': {
            'label': 'Starts @',
            'amount': 'On Request',
            'status': 'On Request'
        },
        'itinerary': itinerary,
        'inclusions': inclusions,
        'exclusions': exclusions,
        'policies': {
            'payment': '20% Advance at the time of booking. Balance before departure.',
            'cancellation': 'Cancellations made 7+ days before: Full refund. Within 3-7 days: 50% refund. Less than 3 days: No refund.'
        }
    }

    packages.append(package_obj)
    start_id += 1

print(f"Parsed {len(packages)} packages successfully")

# Write the generated packages as TS
out = 'export const newPackages = {\n'
for p in packages:
    out += f"  '{p['id']}': {json.dumps(p, indent=4, ensure_ascii=False)},\n"
out += '};\n'

with open('C:/Users/LOQ/.gemini/antigravity/brain/0b20a5b2-7275-46c4-98a0-aba8e6ce6820/scratch/generated_packages.ts', 'w', encoding='utf-8') as f:
    f.write(out)

print("Generated packages saved!")
print("IDs:", [p['id'] for p in packages])
