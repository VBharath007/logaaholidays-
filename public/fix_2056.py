import re
import json

file_path = 'src/pages/PackageDetails.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace for 2056
content = re.sub(
    r'"image": "/assets/madurai%2063%20package/Madurai%20→%20Rameswaram%20→%20Tiruchendur%20→%20Kanyakumari%204%20Days%20%203%20Nights%20Tour%20Package\.png",',
    '"image": "/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package -card.png",\n    "heroImage": "/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package.png",',
    content
)

# Replace for 2008 (Madurai to Kasi, Gaya & Prayagraj)
# Let's find 2008 first
# Wait, let's just do a generic replace if there's any. But 2056 is the one the user uploaded.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

# We should also check TourCategory.tsx for 2056
file_path_tc = 'src/pages/TourCategory.tsx'
with open(file_path_tc, 'r', encoding='utf-8') as f:
    content_tc = f.read()

content_tc = content_tc.replace(
    "image: '/assets/madurai%2063%20package/Madurai%20→%20Rameswaram%20→%20Tiruchendur%20→%20Kanyakumari%204%20Days%20%203%20Nights%20Tour%20Package.png'",
    "image: '/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package -card.png'"
)
# Just in case it uses double quotes or no encoding:
content_tc = content_tc.replace(
    'image: "/assets/madurai%2063%20package/Madurai%20→%20Rameswaram%20→%20Tiruchendur%20→%20Kanyakumari%204%20Days%20%203%20Nights%20Tour%20Package.png"',
    'image: "/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package -card.png"'
)

with open(file_path_tc, 'w', encoding='utf-8') as f:
    f.write(content_tc)

print("Updated 2056 package image to -card.png")
