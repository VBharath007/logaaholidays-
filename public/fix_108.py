import re

with open('src/pages/PackageDetails.tsx', 'r', encoding='utf-8') as f:
    pd = f.read()

target = '''    "priceDetails": {
        "label": "Starts @",
        "amount": "On Request",
        "status": "On Request"
        }
    ],
    "inclusions": ['''

replacement = '''    "priceDetails": {
        "label": "Starts @",
        "amount": "On Request",
        "status": "On Request"
    },
    "itinerary": [
        {
            "day": "Day 01",
            "title": "Day 01",
            "description": ""
        }
    ],
    "inclusions": ['''

if target in pd:
    pd = pd.replace(target, replacement)
    with open('src/pages/PackageDetails.tsx', 'w', encoding='utf-8') as f:
        f.write(pd)
    print('Fixed package 108 JSON syntax error')
else:
    print('Target not found')
