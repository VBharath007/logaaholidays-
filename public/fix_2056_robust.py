import json

file_path = 'src/pages/PackageDetails.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific URL without regex
old_url = '"image": "/assets/madurai%2063%20package/Madurai%20→%20Rameswaram%20→%20Tiruchendur%20→%20Kanyakumari%204%20Days%20%203%20Nights%20Tour%20Package.png",'
new_url = '"image": "/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package -card.png",\n    "heroImage": "/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package.png",'

content = content.replace(old_url, new_url)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

# Same for TourCategory.tsx
file_path_tc = 'src/pages/TourCategory.tsx'
with open(file_path_tc, 'r', encoding='utf-8') as f:
    content_tc = f.read()

old_url_tc = "image: '/assets/madurai%2063%20package/Madurai%20→%20Rameswaram%20→%20Tiruchendur%20→%20Kanyakumari%204%20Days%20%203%20Nights%20Tour%20Package.png'"
new_url_tc = "image: '/assets/madurai 63 package/Madurai → Rameswaram → Tiruchendur → Kanyakumari 4 Days  3 Nights Tour Package -card.png'"

content_tc = content_tc.replace(old_url_tc, new_url_tc)
content_tc = content_tc.replace(old_url_tc.replace("'", '"'), new_url_tc.replace("'", '"'))

with open(file_path_tc, 'w', encoding='utf-8') as f:
    f.write(content_tc)

print("Updated 2056 package image to -card.png successfully")
