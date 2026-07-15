import re

with open('src/pages/PackageDetails.tsx', 'r', encoding='utf-8') as f:
    pd = f.read()

target = '''        {
            "day": "Day 02",
            "title": "Day 02 – Munnar Sightseeing",
        "4 Nights Hotel"
    ],'''

replacement = '''        {
            "day": "Day 02",
            "title": "Day 02 – Munnar Sightseeing",
            "description": "Visit\\n🌹 Rose Garden\\n📸 Photo Point\\n🐘 Elephant Park\\n🍃 Tea Museum & Tea Factory\\n💧 Mattupetty Dam\\n🔊 Echo Point\\n🌄 Top Station (Optional)\\n🏨 Overnight Stay in Munnar"
        },
        {
            "day": "Day 03",
            "title": "Day 03 – Munnar → Thekkady → Alleppey",
            "description": "Breakfast at Hotel.\\nProceed to Thekkady.\\nThekkady Sightseeing\\n🛶 Periyar Lake Boating (Optional)\\n🐘 Periyar Wildlife Sanctuary\\n🌶️ Spice Plantation Tour\\n🛍️ Kumily Spice Market\\nProceed to Alleppey.\\n🏨 Overnight Stay in Alleppey (Houseboat stay available on request.)\\nDay 04 – Alleppey → Kovalam\\nAlleppey Sightseeing\\n🚤 Shikara Boat Ride (Optional)\\n🌊 Alleppey Beach\\n🌴 Backwater Villages\\nProceed to Kovalam.\\nEvening\\n🏖️ Lighthouse Beach\\n🌅 Hawa Beach\\n🏨 Overnight Stay in Kovalam\\nDay 05 – Kovalam → Kanyakumari\\nEn Route Sightseeing\\n🚤 Poovar Backwater Boating (Optional)\\n🛕 Aazhimala Shiva Temple\\nProceed to Kanyakumari.\\nKanyakumari Sightseeing\\n🛕 Kanyakumari Bhagavathi Amman Temple\\n🌊 Triveni Sangam\\n🌇 Sunset View Point\\n🏨 Overnight Stay in Kanyakumari\\nDay 06 – Kanyakumari → Rameswaram\\nEarly morning Sunrise at Kanyakumari.\\nBreakfast at Hotel.\\nProceed to Rameswaram.\\nEn Route Sightseeing\\n🛕 Suchindram Thanumalayan Temple\\nRameswaram Sightseeing\\n🌉 Pamban Bridge\\n🌊 Agni Theertham\\n🏨 Overnight Stay in Rameswaram\\nDay 07 – Rameswaram → Madurai\\nRameswaram Sightseeing\\n🛕 Sri Ramanathaswamy Temple\\n🌊 Dhanushkodi\\n🌉 Ram Setu View Point\\n🏛️ Dr. A.P.J. Abdul Kalam Memorial\\n🏠 Abdul Kalam House Museum\\nProceed to Madurai.\\nEvening Sightseeing\\n🛕 Meenakshi Amman Temple\\n🏛️ Thirumalai Nayakkar Mahal\\n🏨 Overnight Stay in Madurai\\nDay 08 – Madurai Sightseeing & Drop\\nBreakfast at Hotel.\\nMadurai Sightseeing\\n🛕 Meenakshi Amman Temple (if not covered on Day 7)\\n🌺 Puthu Mandapam\\n🏛️ Gandhi Memorial Museum\\n🛍️ Madurai Local Market\\nDrop at Madurai Airport, Madurai Railway Station, or your preferred location."
        }
    ],
    "inclusions": [
        "Private A/C Vehicle",
        "Pickup from Madurai & Drop at Thiruvananthapuram",
        "4 Nights Hotel"
    ],'''

if target in pd:
    pd = pd.replace(target, replacement)
    with open('src/pages/PackageDetails.tsx', 'w', encoding='utf-8') as f:
        f.write(pd)
    print("Fixed deleted JSON block!")
else:
    print("Target block not found, maybe it was already fixed?")
