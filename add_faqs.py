"""
add_faqs.py
Adds a "faq" field to every package entry in PackageDetails.tsx
based on which destination/type the package belongs to.
The FAQ is inserted just before the closing "id": "XXXX" line of each package.
"""

import re

FILE_PATH = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"

# ─────────────────────────────────────────────────────────────────────────────
# 1.  FAQ bank – keyed by logical category
# ─────────────────────────────────────────────────────────────────────────────

FAQS = {

    # ── KARNATAKA HONEYMOON ──────────────────────────────────────────────────
    "karnataka_honeymoon": [
        {
            "question": "Is this Karnataka honeymoon package ideal for couples?",
            "answer": "Yes. The Karnataka honeymoon itinerary is designed for romance, featuring coffee-estate resorts, scenic waterfalls, and heritage stays. We include special honeymoon arrangements (flower decoration, candlelight dinner) and provide a private car so couples can travel at their own pace."
        },
        {
            "question": "Can we start the Karnataka honeymoon tour from Bangalore or Mysore?",
            "answer": "Absolutely. Bangalore and Mysore are the primary pickup points. If you arrive by flight or train from Chennai or another city, we will meet you at the Bangalore airport or Mysore railway station and begin the tour from there."
        }
    ],

    # ── KARNATAKA NORMAL ────────────────────────────────────────────────────
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

    # ── GOA HONEYMOON ────────────────────────────────────────────────────────
    "goa_honeymoon": [
        {
            "question": "Is this Goa honeymoon package romantic for couples?",
            "answer": "Yes. The Goa itinerary focuses on the best beaches and resorts. We pick quieter beach stays (e.g. South Goa) with sunset views, ideal for couples. You can also enjoy dinner cruises or scenic coastal drives. We provide a private guide and car, so you travel at leisure."
        },
        {
            "question": "Can we join the Goa honeymoon tour from Mumbai or Delhi?",
            "answer": "Yes. You can fly into Goa's Dabolim Airport (GOI) from Mumbai or Delhi. If convenient, we can pick you up at Goa airport. Alternatively, a popular option is to fly into Mumbai and take a connecting flight or train to Goa. Once you arrive, we handle all inter-city transfers to your beach hotel."
        }
    ],

    # ── KERALA NORMAL ────────────────────────────────────────────────────────
    "kerala_normal": [
        {
            "question": "Is this Kerala tour package family-friendly and romantic?",
            "answer": "Yes. Kerala's gentle backwater cruises and tea gardens are ideal for families and honeymooners alike. The itinerary features a calm houseboat stay in Alleppey and a nature walk in Munnar, enjoyable for kids and seniors. We ensure cozy stays and optional activities (boat rides, spice farm visits) so everyone has a memorable experience."
        },
        {
            "question": "Can I join the Kerala tour from Kochi or Trivandrum?",
            "answer": "Certainly. Most itineraries start in Kochi (Cochin) or Trivandrum (Thiruvananthapuram). We offer pickup from Kochi airport and railway station, or meet you in Trivandrum if more convenient. You can fly into either city and we will handle all local transfers."
        }
    ],

    # ── TAMIL NADU NORMAL ───────────────────────────────────────────────────
    "tamilnadu_normal": [
        {
            "question": "Is this Tamil Nadu tour package suitable for families and couples?",
            "answer": "Yes. The tour covers heritage temples and coastal beaches with comfortable hotels and a relaxed pace, making it great for family groups and honeymooners alike. We tailor activities for kids, adults, and seniors (e.g. easy walks, optional temple tours) so travelers of all ages enjoy it."
        },
        {
            "question": "Can we join the Tamil Nadu tour from Madurai or Chennai?",
            "answer": "Absolutely. We offer pickup from Madurai or Chennai and coordinate train and flight arrivals into those cities. Our driver and guide will meet you at the station or airport and begin the tour, so you can easily join from any major city in Tamil Nadu."
        }
    ],

    # ── DELHI / GOLDEN TRIANGLE ─────────────────────────────────────────────
    "delhi_golden_triangle": [
        {
            "question": "Is the Delhi–Agra–Jaipur (Golden Triangle) tour suitable for seniors and families?",
            "answer": "Yes. We design the itinerary with plenty of breaks between sightseeing. Major stops (Taj Mahal, Amber Fort, Qutub Minar) have wheelchair access or easy paths. We book comfortable 3–4-star hotels and can adjust the pace for elderly members. Families enjoy the cultural highlights while seniors can rest as needed."
        },
        {
            "question": "Can I join the Delhi–Agra–Jaipur tour from Madurai, Pune, or Ahmedabad?",
            "answer": "Yes. Many travelers fly or take a train to New Delhi first and we start the tour there. Alternatively, we can arrange private transfers or connecting flight options from Mumbai or Bengaluru to reach Delhi conveniently."
        }
    ],

    # ── VARANASI / KASI ─────────────────────────────────────────────────────
    "varanasi_kasi": [
        {
            "question": "Is the Varanasi tour safe and manageable for families and seniors?",
            "answer": "Yes. Varanasi is compact, and we plan hotel stays near the main sites. Travel between ghats and temples is short, via rickshaws or short walks. We avoid chaotic evening crowds when possible. For seniors, we focus on sunrise boat rides on the Ganges and easy temple visits. Local guides ensure a secure, well-paced experience for all age groups."
        },
        {
            "question": "Can I join the Varanasi tour from Chennai or Delhi?",
            "answer": "Absolutely. Varanasi has an international airport (Lal Bahadur Shastri Airport) and multiple railway stations. You can catch a direct flight from Delhi or Chennai to Varanasi. We will pick you up at the airport or station to start the tour. We can also arrange a train from Delhi or Chennai if you prefer."
        }
    ],

    # ── SHIRDI ──────────────────────────────────────────────────────────────
    "shirdi": [
        {
            "question": "Is the Shirdi pilgrimage tour suitable for families and elderly travelers?",
            "answer": "Yes. The Shirdi itinerary is typically 2–3 days, focused on visiting the Sai Baba temple and nearby shrines. We choose comfortable, family-friendly hotels in Shirdi. The schedule includes short transfers, making it easy for seniors and kids. We also cover Shani Shingnapur temple if interested, and our guides provide assistance during temple darshan."
        },
        {
            "question": "Can we join the Shirdi tour from Chennai, Pune, or Mumbai?",
            "answer": "Yes. You can join from Chennai, Pune, or Mumbai. Flights to Aurangabad or Mumbai and trains to Kopargaon and Shirdi are common routes. We arrange pickups at these points. For example, one option is a flight to Pune, a drive (3–4 hours) to Shirdi, and a return flight from Mumbai. We will coordinate whichever city is easiest for your travel."
        }
    ],

    # ── KASHMIR HONEYMOON ───────────────────────────────────────────────────
    "kashmir_honeymoon": [
        {
            "question": "Is this Kashmir honeymoon package ideal for couples?",
            "answer": "Yes. The Kashmir honeymoon itinerary features romantic houseboat stays on Dal Lake, scenic shikara rides, and visits to Mughal gardens. We include special couple arrangements and a private car throughout, ensuring a private and memorable experience for newlyweds."
        },
        {
            "question": "Can we start the Kashmir honeymoon tour from Delhi or Srinagar?",
            "answer": "You should fly into Srinagar (SXR airport) to start the tour. Delhi–Srinagar flights are frequent. We will meet you at Srinagar airport. If you prefer, you can also fly into Jammu and transfer by road (8 hours) to Srinagar. Our package begins once you arrive and we handle all local transport from there."
        }
    ],

    # ── KASHMIR NORMAL ──────────────────────────────────────────────────────
    "kashmir_normal": [
        {
            "question": "Is this Kashmir tour suitable for families and honeymooners?",
            "answer": "Yes. Kashmir's scenic valleys and Dal Lake houseboat are enjoyable for all ages. The itinerary includes easy sightseeing (e.g. Mughal gardens, gentle walks) and avoids high-altitude passes unless requested. Accommodations include mid-range hotels and a houseboat stay. The pleasant weather (especially April–June) makes it comfortable for seniors and romantic for couples."
        },
        {
            "question": "Can we start the Kashmir tour from Delhi or Srinagar?",
            "answer": "You should fly or travel into Srinagar (SXR airport) to start the tour. Delhi–Srinagar flights are frequent and we will meet you at the airport. Alternatively, you can fly into Jammu and transfer by road (8 hours) to Srinagar. Either way, our package begins once you arrive in Kashmir and we handle all local transport."
        }
    ],

    # ── SIKKIM HONEYMOON ────────────────────────────────────────────────────
    "sikkim_honeymoon": [
        {
            "question": "Is the Sikkim tour ideal for honeymoon couples?",
            "answer": "Yes. Sikkim is perfect for romance and relaxation. It offers beautiful mountain views, peaceful monastery visits, and serene lakes, making it an excellent choice for a honeymoon. We arrange comfortable hotels and a relaxed itinerary so couples can enjoy the journey stress-free."
        },
        {
            "question": "Can we join the Sikkim tour from Delhi or Kolkata?",
            "answer": "Yes. The common route is to fly to Bagdogra (near Siliguri) via Delhi or Kolkata. We will pick you up at Bagdogra airport. Alternatively, you can take a direct flight to Kolkata and connect by a short flight to Bagdogra or by train to Siliguri. From there we drive approximately 5 hours to Gangtok to start the tour."
        }
    ],

    # ── MALDIVES HONEYMOON ──────────────────────────────────────────────────
    "maldives_honeymoon": [
        {
            "question": "Is this Maldives package ideal for honeymoon couples?",
            "answer": "Absolutely. The itinerary is built for privacy and romance: you stay in a water villa or beach bungalow, enjoy private beach dinners, and have plenty of relaxation time. Snorkeling and lagoon tours are included to add adventure. Every detail (seaplane transfers, resort check-in) is arranged so you only focus on each other."
        },
        {
            "question": "Can I start the Maldives trip from Chennai or Bangalore?",
            "answer": "Typically, you will fly to Malé (Maldives) via a direct or one-stop flight, which is common from Chennai, Bangalore, or Mumbai. Once you arrive at Velana International Airport (Malé), we include your speedboat or seaplane transfer to the resort island. We will coordinate the entire Maldives side so you just need to book your international flight to Malé."
        }
    ],

    # ── SHIMLA HONEYMOON ────────────────────────────────────────────────────
    "shimla_honeymoon": [
        {
            "question": "Is the Shimla (Himachal Pradesh) honeymoon tour romantic for couples?",
            "answer": "Yes. Shimla's quaint colonial charm and Kufri's pine forests are very romantic. We include scenic viewpoints and cozy meals at hilltop restaurants. Hotels are chosen for charm and views (many have fireplaces). The cool climate and privacy make it ideal for couples. We can also arrange special experiences like a private picnic or bonfire on request."
        },
        {
            "question": "Are travel arrangements comfortable for a honeymoon couple joining from Delhi or Chandigarh?",
            "answer": "Certainly. We provide a private car for your group, with a friendly driver-guide who assists you throughout. We schedule moderate sightseeing so you can relax (for example, a toy train ride or brief nature walks). Pickup is from Delhi or Chandigarh, and we ensure the journey itself is pleasant so you start your honeymoon stress-free."
        }
    ],

    # ── MANALI HONEYMOON ────────────────────────────────────────────────────
    "manali_honeymoon": [
        {
            "question": "Is this Manali honeymoon package suitable for couples?",
            "answer": "Yes. The Manali honeymoon itinerary is designed for romance in the mountains. We include scenic viewpoints, cozy mountain resorts, and optional activities like snow walks and valley excursions. Special honeymoon arrangements (room decoration, candlelight dinner) can be added on request."
        },
        {
            "question": "Can we join the Manali honeymoon tour from Delhi or Chandigarh?",
            "answer": "Yes. The tour usually starts in Delhi or Chandigarh. You can reach Manali by road from either city and we will arrange pickups from the nearest airports or railway stations. We handle all transfers so you can begin your romantic getaway right from the pickup point."
        }
    ],

    # ── SHIMLA + MANALI HONEYMOON ────────────────────────────────────────────
    "shimla_manali_honeymoon": [
        {
            "question": "Is the Shimla–Manali honeymoon package suitable for couples?",
            "answer": "Yes. This combined package offers the best of both hill stations for couples. Shimla offers colonial-era charm and Manali offers scenic mountain landscapes. We arrange cozy hotels, special honeymoon setups, and a private car throughout, making it a perfect romantic getaway."
        },
        {
            "question": "Can we join the Shimla–Manali honeymoon tour from Delhi or Chandigarh?",
            "answer": "Certainly. The tour starts from Delhi or Chandigarh. If you fly into Delhi, we can pick you up at the airport or railway station and drive to Shimla (8–9 hours). Alternatively, you can fly into Chandigarh (closer) and we will begin from there. We coordinate all airport and train pickups."
        }
    ],

    # ── ANDAMAN HONEYMOON ───────────────────────────────────────────────────
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

    # ── ANDAMAN NORMAL ──────────────────────────────────────────────────────
    "andaman_normal": [
        {
            "question": "Is the Andaman tour suitable for families and couples?",
            "answer": "Yes. The itinerary blends beach relaxation and easy nature activities. We include calm attractions like Radhanagar Beach (ranked among the world's best) and a glass-bottom boat ride for coral viewing, which appeal to children and couples alike. Family-friendly beaches and simple sightseeing mean even seniors can participate comfortably."
        },
        {
            "question": "Can I join the Andaman tour from Chennai or Kolkata?",
            "answer": "Certainly. You will fly into Port Blair (IXZ airport) since it is the archipelago hub. Port Blair has direct flights from Chennai, Kolkata, and Delhi. We will meet you at Port Blair airport to begin the tour. All island transfers (ferries and boats) are arranged, so after arrival you just relax and let us handle the logistics."
        }
    ],

    # ── MADURAI ONE-DAY / LOCAL TOURS ───────────────────────────────────────
    "madurai_local": [
        {
            "question": "Is this Madurai tour suitable for families and seniors?",
            "answer": "Yes. The Madurai tour is designed for comfort and convenience. It includes easy-paced sightseeing at famous temples and cultural landmarks. Our guide assists elderly travelers at each stop, and the itinerary allows sufficient time for rest breaks, making it ideal for families and senior pilgrims."
        },
        {
            "question": "From where does the Madurai tour depart?",
            "answer": "The tour departs from Madurai city, typically from your hotel, railway station, or airport. We arrange pickup at a convenient time and can also accommodate travelers coming from nearby cities or towns."
        }
    ],

    # ── HIMACHAL MANALI NORMAL ──────────────────────────────────────────────
    "manali_normal": [
        {
            "question": "Is this Manali tour suitable for senior citizens and families?",
            "answer": "Yes. Manali is at a moderate altitude of around 2,000 metres. We ensure the tour has rest stops (e.g. in Kullu) to help travelers acclimatize. Vehicles are spacious and stops are frequent. Hotels are selected for easy access, and the itinerary includes light sightseeing (temples, parks, and easy nature walks) so seniors can enjoy the Himalayas without strenuous activity."
        },
        {
            "question": "Does this Manali tour include Volvo bus travel from Delhi?",
            "answer": "Yes. Our Volvo package option means we travel overnight from Delhi to Manali in an AC Volvo sleeper bus. You board in Delhi in the evening, rest in a comfortable reclining seat, and wake up in the mountains. The package includes round-trip Volvo bus tickets, hotel stay in Manali, daily meals, and sightseeing at Solang Valley and temples."
        }
    ],

}

# ─────────────────────────────────────────────────────────────────────────────
# 2.  Mapping: which package IDs / title keywords → which FAQ category
# ─────────────────────────────────────────────────────────────────────────────

def classify_package(title: str, pkg_id: str) -> str | None:
    t = title.lower()
    pid = pkg_id.strip()

    # Karnataka honeymoon  (IDs 9301–9304)
    if pid in {"9301", "9302", "9303", "9304"}:
        return "karnataka_honeymoon"

    # Goa honeymoon  (IDs 9109 and various)
    if pid == "9109":
        return "goa_honeymoon"
    if any(x in t for x in ["goa honeymoon"]):
        return "goa_honeymoon"

    # Karnataka normal  (IDs 3090–3096)
    if pid in {"3090","3091","3092","3093","3094","3095","3096"}:
        return "karnataka_normal"
    if "karnataka" in t and "honeymoon" not in t:
        return "karnataka_normal"

    # Kerala normal
    if "kerala" in t:
        return "kerala_normal"

    # Tamil Nadu normal
    if "tamil nadu" in t or "tamilnadu" in t or "thanjavur" in t or "trichy" in t or "kumbakonam" in t:
        return "tamilnadu_normal"

    # Delhi / Golden Triangle
    if any(x in t for x in ["delhi", "golden triangle", "agra", "jaipur"]):
        return "delhi_golden_triangle"

    # Varanasi / Kasi / Ayodhya / Gaya / Prayagraj (all pilgrimage north india)
    if any(x in t for x in ["varanasi", "kasi", "kashi", "ayodhya", "gaya", "prayagraj"]):
        return "varanasi_kasi"

    # Shirdi
    if "shirdi" in t:
        return "shirdi"

    # Kashmir honeymoon
    if "kashmir" in t and "honeymoon" in t:
        return "kashmir_honeymoon"

    # Kashmir normal
    if "kashmir" in t:
        return "kashmir_normal"

    # Sikkim honeymoon
    if "sikkim" in t or "gangtok" in t or "pelling" in t:
        return "sikkim_honeymoon"

    # Maldives honeymoon
    if "maldive" in t:
        return "maldives_honeymoon"

    # Shimla + Manali honeymoon combined
    if "shimla and manali" in t or "shimla & manali" in t:
        return "shimla_manali_honeymoon"

    # Shimla honeymoon (Himachal)
    if "shimla" in t and "honeymoon" in t:
        return "shimla_honeymoon"

    # Manali honeymoon
    if "manali" in t and "honeymoon" in t:
        return "manali_honeymoon"

    # Manali normal / Volvo
    if "manali" in t:
        return "manali_normal"

    # Andaman honeymoon
    if "andaman" in t and "honeymoon" in t:
        return "andaman_honeymoon"

    # Andaman normal
    if "andaman" in t or "port blair" in t:
        return "andaman_normal"

    # Madurai local / one-day tours
    if "madurai" in t:
        return "madurai_local"

    return None

# ─────────────────────────────────────────────────────────────────────────────
# 3.  Build the FAQ JSON snippet
# ─────────────────────────────────────────────────────────────────────────────

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

# ─────────────────────────────────────────────────────────────────────────────
# 4.  Process the file
# ─────────────────────────────────────────────────────────────────────────────

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern: match each package block ending with  "id": "XXXX"\n    }
# We capture the title (from "title": "...") and the id at the end of the block
# Strategy: find every occurrence of `"id": "XXXX"` that ends a package entry,
# collect the title from within that block, classify, and inject the faq line.

# We work line by line for safety.
lines = content.split("\n")
output_lines = []
current_title = ""
i = 0
inserted = 0
skipped = 0

# Regex to match the "id" closing line of a package entry (indented with spaces)
id_line_re = re.compile(r'^(\s+)"id":\s*"(\w+)"(\s*)$')
title_re   = re.compile(r'"title":\s*"([^"]+)"')
faq_re     = re.compile(r'"faq":\s*\[')

# We need to track the current title within each package block.
# We scan forward: when we see a '"title":' at the TOP LEVEL of a package
# (indented 8 spaces), we record it. When we reach the "id" line, we inject.

# Detect top-level package title (8 spaces indent)
pkg_title_re = re.compile(r'^        "title":\s*"([^"]+)"')

while i < len(lines):
    line = lines[i]

    # Track current package title (outermost title of each package object)
    m = pkg_title_re.match(line)
    if m:
        # Only update if this looks like a package-level title
        # (we reset when we see a new package ID)
        current_title = m.group(1)

    # Check if this is the closing "id" line of a package
    m_id = id_line_re.match(line)
    if m_id:
        pkg_id = m_id.group(2)
        category = classify_package(current_title, pkg_id)

        # Check if "faq" already exists in recent context (avoid duplicates)
        # Look back up to 10 lines
        recent = "\n".join(output_lines[-10:])
        already_has_faq = bool(faq_re.search(recent))

        if category and not already_has_faq:
            faq_snippet = build_faq_snippet(category)
            output_lines.append(faq_snippet)
            inserted += 1
        elif not category:
            skipped += 1
            print(f"  [SKIP] id={pkg_id!r}  title={current_title!r}  – no category matched")

    output_lines.append(line)
    i += 1

new_content = "\n".join(output_lines)

with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"\nDone!  Inserted: {inserted}  |  Skipped (no match): {skipped}")
print(f"Total lines in new file: {len(output_lines)}")
