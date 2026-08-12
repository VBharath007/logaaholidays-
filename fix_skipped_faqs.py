"""
fix_skipped_faqs.py
Adds FAQ to the 15 packages that were skipped in the first pass.
Skipped IDs and their categories:
  9803  → maldives_honeymoon  (Beach Villa and Water Villa Honeymoon)
  9603  → andaman_honeymoon   (Havelock and Neil Island Honeymoon)
  9201  → tamilnadu_honeymoon (Kodaikanal Honeymoon)
  9202  → tamilnadu_honeymoon (Ooty Honeymoon)
  9203  → tamilnadu_honeymoon (Kodaikanal Kanyakumari Honeymoon)
  5001–5006 → karnataka_normal  (Mysore/Coorg/Bangalore/Hampi/Udupi tours)
  8101–8103,8105 → shimla_normal (Shimla packages without "honeymoon" in title)
"""

import re

FILE_PATH = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"

FAQS = {

    "tamilnadu_honeymoon": [
        {
            "question": "Is this Tamil Nadu honeymoon package ideal for couples?",
            "answer": "Yes. The itinerary is designed for romance, combining scenic hill stations, coastal beaches, and heritage sites. We include cozy accommodations, scenic viewpoints, and can arrange special couple experiences like candlelight dinners and private excursions."
        },
        {
            "question": "Can we join the Tamil Nadu honeymoon tour from Madurai or Chennai?",
            "answer": "Absolutely. We offer pickup from Madurai or Chennai. Our driver and guide will meet you at the station or airport and begin the tour, so you can easily join from any major city in Tamil Nadu."
        }
    ],

    "karnataka_normal": [
        {
            "question": "Is this Karnataka tour package suitable for families with seniors?",
            "answer": "Yes. The itinerary includes short drives, moderate temple visits (e.g. Mysore Palace), and nature spots (Coorg), all at a gentle pace. We choose hotels with lifts and easy access, and our guide assists senior travelers at each stop."
        },
        {
            "question": "Can we start the Karnataka tour from Bangalore or Chennai?",
            "answer": "Yes. Bangalore is the primary hub for this tour. You can join in Bangalore directly, and we can also arrange to meet you if you arrive by flight or train from Chennai or other cities. We will pick you up at Bangalore airport or railway station to begin the tour."
        }
    ],

    "shimla_normal": [
        {
            "question": "Is the Shimla tour package family-friendly and accessible for seniors?",
            "answer": "Yes. Shimla's town is mostly flat along Mall Road and we stay in hotels with lifts. The drive from Chandigarh or Delhi is scenic but smooth. Daily sightseeing is limited (toy train ride, local markets) so the pace is gentle and easy for senior travelers. Families and couples both enjoy the cool weather and heritage sites."
        },
        {
            "question": "Can we join the Shimla tour from Delhi or Chandigarh?",
            "answer": "Certainly. Shimla tours often start from Delhi or Chandigarh. If you fly into Delhi, we can pick you up at the airport or railway station and drive together to Shimla (8–9 hours). Alternatively, you can fly into Chandigarh (closer) and we will begin the tour there. We coordinate all airport and train pickups."
        }
    ],

    "maldives_honeymoon": [
        {
            "question": "Is this Maldives package ideal for honeymoon couples?",
            "answer": "Absolutely. The itinerary is built for privacy and romance: you stay in a water villa or beach bungalow, enjoy private beach dinners, and have plenty of relaxation time. Snorkeling and lagoon tours are included to add adventure. Every detail (seaplane transfers, resort check-in) is arranged so you only focus on each other."
        },
        {
            "question": "Can I start the Maldives trip from Chennai or Bangalore?",
            "answer": "Typically, you will fly to Male (Maldives) via a direct or one-stop flight, which is common from Chennai, Bangalore, or Mumbai. Once you arrive at Velana International Airport (Male), we include your speedboat or seaplane transfer to the resort island. We will coordinate the entire Maldives side so you just need to book your international flight to Male."
        }
    ],

    "andaman_honeymoon": [
        {
            "question": "Is this Andaman honeymoon package ideal for couples?",
            "answer": "Yes. The Andaman honeymoon itinerary features romantic beach resorts, sunset cruises, and serene island getaways. We include private beach experiences and couple-friendly activities like glass-bottom boat rides and snorkeling. Resorts on Havelock and Neil Island offer couples' cottages for a truly private experience."
        },
        {
            "question": "Can I join the Andaman honeymoon tour from Chennai or Kolkata?",
            "answer": "Certainly. You will fly into Port Blair (IXZ airport) since it is the archipelago hub. Port Blair has direct flights from Chennai, Kolkata, and Delhi. We will meet you at Port Blair airport to begin the tour. All island transfers (ferries and boats) are arranged, so after arrival you just relax and let us handle the logistics."
        }
    ],
}

# Map skipped IDs to categories
SKIPPED_ID_MAP = {
    "9803": "maldives_honeymoon",
    "9603": "andaman_honeymoon",
    "9201": "tamilnadu_honeymoon",
    "9202": "tamilnadu_honeymoon",
    "9203": "tamilnadu_honeymoon",
    "5001": "karnataka_normal",
    "5002": "karnataka_normal",
    "5003": "karnataka_normal",
    "5004": "karnataka_normal",
    "5005": "karnataka_normal",
    "5006": "karnataka_normal",
    "8101": "shimla_normal",
    "8102": "shimla_normal",
    "8103": "shimla_normal",
    "8105": "shimla_normal",
}

def build_faq_snippet(category: str) -> str:
    faqs = FAQS[category]
    lines = ['        "faq": [']
    for i, faq in enumerate(faqs):
        comma = "," if i < len(faqs) - 1 else ""
        lines.append('            {')
        lines.append(f'                "question": "{faq["question"]}",')
        lines.append(f'                "answer": "{faq["answer"]}"')
        lines.append(f'            }}{comma}')
    lines.append('        ],')
    return "\n".join(lines)

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split("\n")
output_lines = []
inserted = 0
i = 0

id_line_re = re.compile(r'^(\s+)"id":\s*"(\w+)"(\s*)$')
faq_re = re.compile(r'"faq":\s*\[')

while i < len(lines):
    line = lines[i]

    m_id = id_line_re.match(line)
    if m_id:
        pkg_id = m_id.group(2)
        category = SKIPPED_ID_MAP.get(pkg_id)

        # Check if "faq" already exists in recent context (avoid duplicates)
        recent = "\n".join(output_lines[-15:])
        already_has_faq = bool(faq_re.search(recent))

        if category and not already_has_faq:
            faq_snippet = build_faq_snippet(category)
            output_lines.append(faq_snippet)
            inserted += 1
            print(f"  [OK] id={pkg_id!r}  -> {category}")

    output_lines.append(line)
    i += 1

new_content = "\n".join(output_lines)

with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"\nDone!  Inserted: {inserted}")
print(f"Total lines in new file: {len(output_lines)}")
