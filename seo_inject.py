"""
SEO Metadata Injector for Logaa Holidays PackageDetails.tsx
============================================================
Reads every package, analyzes its content, and injects a unique 'seo' object.
Run: python seo_inject.py
"""

import re
import json

SRC = r"src/pages/PackageDetails.tsx"
DST = r"src/pages/PackageDetails.tsx"
BASE_URL = "https://www.logaaholidays.com"

# ---------------------------------------------------------------------------
# Helper: slugify
# ---------------------------------------------------------------------------
def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'\s+', '-', text.strip())
    text = re.sub(r'-+', '-', text)
    return text[:80].rstrip('-')

# ---------------------------------------------------------------------------
# Helper: truncate a string to max chars, ending at a word boundary
# ---------------------------------------------------------------------------
def trunc(text, n):
    if len(text) <= n:
        return text
    return text[:n].rsplit(' ', 1)[0].rstrip(' .,')

# ---------------------------------------------------------------------------
# Per-package SEO builder
# ---------------------------------------------------------------------------
def build_seo(pkg_id, title, overview, highlights, route_hint):
    """
    Returns dict with metaTitle, metaDescription, canonicalUrl, slug.
    All values are derived exclusively from the package's own data.
    """
    duration  = overview.get('duration', '')
    dest      = overview.get('destination', '')
    themes    = overview.get('themes', '')
    activities= overview.get('activities', '')

    # ── Slug ────────────────────────────────────────────────────────────────
    raw_slug = slugify(title)
    # remove brand name from slug if present
    raw_slug = raw_slug.replace('logaa-holidays-', '').replace('-logaa-holidays', '')
    slug = raw_slug

    # ── Canonical URL ────────────────────────────────────────────────────────
    if route_hint:
        canonical_url = f"{BASE_URL}{route_hint}"
    else:
        canonical_url = f"{BASE_URL}/tour-packages/{slug}"

    # ── Meta Title ───────────────────────────────────────────────────────────
    # Strategy: "<Package Title> | Logaa Holidays"
    # Keep it ≤ 65 chars where possible; clip the package title part if needed
    brand = "Logaa Holidays"
    separator = " | "
    max_title_len = 65
    available = max_title_len - len(brand) - len(separator)

    # Clean title: strip "Premium " prefix for shorter titles when it helps
    clean_title = title
    for prefix in ("Premium ", "Classic ", "Special "):
        if clean_title.startswith(prefix) and len(clean_title) - len(prefix) >= 20:
            clean_title = clean_title[len(prefix):]
            break

    if len(clean_title) > available:
        clean_title = trunc(clean_title, available)

    meta_title = f"{clean_title}{separator}{brand}"

    # ── Meta Description ─────────────────────────────────────────────────────
    # Build a natural sentence from the package content
    hl_text = ". ".join(highlights[:3]) if highlights else ""

    # Detect category hints
    is_honeymoon   = "honeymoon" in themes.lower() or "honeymoon" in title.lower()
    is_pilgrimage  = any(w in themes.lower() + title.lower() for w in ["pilgrimage","temple","yatra","spiritual"])
    is_international = any(w in title.lower() + dest.lower() for w in ["malaysia","singapore","bali","thailand","sri lanka","maldives","international"])
    is_north_india = any(w in dest.lower() + title.lower() for w in ["kashmir","manali","shimla","himachal","delhi","agra","jaipur","varanasi","shirdi"])
    is_family      = "family" in title.lower()

    if is_honeymoon:
        opening = f"Plan a romantic getaway with Logaa Holidays on the {title}."
    elif is_pilgrimage:
        opening = f"Embark on a spiritually fulfilling journey with Logaa Holidays on the {title}."
    elif is_international:
        opening = f"Explore an exciting international destination with Logaa Holidays on the {title}."
    elif is_north_india:
        opening = f"Discover the beauty of North India with Logaa Holidays on the {title}."
    elif is_family:
        opening = f"Create lasting family memories with Logaa Holidays on the {title}."
    else:
        opening = f"Explore South India with Logaa Holidays on the {title}."

    # Add duration and destination snippet
    if duration and dest:
        first_dest = dest.split("–")[0].strip()
        last_dest  = dest.split("–")[-1].strip()
        detail = f" Covering {first_dest} to {last_dest} in {duration}."
    elif duration:
        detail = f" Duration: {duration}."
    else:
        detail = ""

    # Add highlights snippet
    if hl_text:
        hl_short = trunc(hl_text, 60)
        highlights_part = f" Highlights include {hl_short}."
    else:
        highlights_part = ""

    raw_desc = opening + detail + highlights_part
    # Trim to 160 chars at word boundary
    meta_description = trunc(raw_desc, 160)

    return {
        "metaTitle": meta_title,
        "metaDescription": meta_description,
        "canonicalUrl": canonical_url,
        "slug": slug
    }


# ---------------------------------------------------------------------------
# Extract package blocks with their positions
# ---------------------------------------------------------------------------
def extract_packages(content):
    """
    Returns list of (pkg_id, start_pos, title, overview_dict, highlights, route_hint)
    """
    # Find all top-level package entries: '1234': {
    pattern = re.compile(r"'(\d{4,5})':\s*\{")
    results = []
    for m in pattern.finditer(content):
        pkg_id = m.group(1)
        results.append((pkg_id, m.start()))
    return results


# ---------------------------------------------------------------------------
# Find the title of a package by searching inside its block
# ---------------------------------------------------------------------------
def get_title(block_text):
    m = re.search(r'"title"\s*:\s*"([^"]+)"', block_text)
    return m.group(1) if m else ""

def get_overview(block_text):
    m = re.search(r'"overview"\s*:\s*\{([^}]+)\}', block_text, re.DOTALL)
    if not m:
        return {}
    ov_text = m.group(1)
    result = {}
    for key in ("duration","destination","activities","themes"):
        km = re.search(rf'"{key}"\s*:\s*"([^"]+)"', ov_text)
        if km:
            result[key] = km.group(1)
    return result

def get_highlights(block_text):
    m = re.search(r'"highlights"\s*:\s*\[([^\]]+)\]', block_text, re.DOTALL)
    if not m:
        return []
    hl_text = m.group(1)
    items = re.findall(r'"([^"]+)"', hl_text)
    return items

def already_has_seo(block_text):
    return '"seo"' in block_text

def get_route_hint(pkg_id, title):
    """
    Returns the canonical route path segment for the package.
    Based on existing routing in the website.
    """
    t = title.lower()
    pid = int(pkg_id)

    # Karnataka packages
    if 9301 <= pid <= 9499:
        return f"/tour-packages/karnataka-honeymoon-packages/{slugify(title)}"

    # North India
    if 6001 <= pid <= 6999 or "kashmir" in t or "manali" in t or "shimla" in t or "himachal" in t:
        return f"/north-india-tour-packages/{slugify(title)}"

    if "shirdi" in t:
        return f"/destination/maharashtra/shirdi/{slugify(title)}"

    if "varanasi" in t or "banaras" in t or "kashi" in t:
        return f"/destination/uttar-pradesh/varanasi/{slugify(title)}"

    if "golden triangle" in t or ("delhi" in t and "agra" in t):
        return f"/north-india-tour-packages/golden-triangle-tours/{slugify(title)}"

    # International
    if any(x in t for x in ["malaysia","kuala lumpur"]):
        return f"/destination/international/malaysia-tourism/{slugify(title)}"
    if "singapore" in t:
        return f"/destination/international/singapore-tourism/{slugify(title)}"
    if "bali" in t:
        return f"/destination/international/bali-tourism/{slugify(title)}"
    if "thailand" in t or "bangkok" in t or "pattaya" in t:
        return f"/destination/international/thailand-tourism/{slugify(title)}"
    if "sri lanka" in t or "srilanka" in t:
        return f"/destination/international/sri-lanka-tourism/{slugify(title)}"
    if "maldives" in t:
        return f"/tour-packages/maldives-honeymoon-packages/{slugify(title)}"

    # Honeymoon packages
    if "honeymoon" in t:
        if "kerala" in t:
            return f"/tour-packages/kerala-honeymoon-packages/{slugify(title)}"
        if "goa" in t:
            return f"/tour-packages/goa-honeymoon-packages/{slugify(title)}"
        if "kashmir" in t:
            return f"/tour-packages/kashmir-honeymoon-packages/{slugify(title)}"
        if "himachal" in t or "shimla" in t or "manali" in t:
            return f"/tour-packages/himachal-honeymoon-packages/{slugify(title)}"
        if "sikkim" in t or "darjeeling" in t:
            return f"/tour-packages/sikkim-darjeeling-honeymoon-packages/{slugify(title)}"
        if "andaman" in t:
            return f"/tour-packages/andaman-honeymoon-packages/{slugify(title)}"
        if "tamil" in t or any(x in t for x in ["ooty","kodai","coimbatore","rameswaram"]):
            return f"/tour-packages/tamil-nadu-honeymoon-packages/{slugify(title)}"
        if "karnataka" in t or "mysore" in t or "coorg" in t:
            return f"/tour-packages/karnataka-honeymoon-packages/{slugify(title)}"
        return f"/tour-packages/{slugify(title)}"

    # Kerala destinations
    if any(x in t for x in ["munnar","alleppey","thekkady","vagamon","cochin","kumarakom","athirappilly","kovalam","varkala"]):
        slug = slugify(title)
        dest_key = next((x for x in ["munnar","alleppey","thekkady","vagamon","cochin","kumarakom","athirappilly","kovalam","varkala"] if x in t), "kerala")
        return f"/tour-packages/{dest_key}-tours/{slug}"

    # Tamil Nadu specific destinations
    for dest, url_segment in [
        ("ooty", "ooty-tours"), ("kodaikanal", "kodaikanal-tours"), ("kodai", "kodaikanal-tours"),
        ("rameswaram", "rameswaram-tours"), ("kanyakumari", "kanyakumari-tours"),
        ("madurai", "madurai-tours"), ("courtallam", "courtallam-tours"),
        ("palani", "palani-tours"), ("tiruchendur", "tiruchendur-tours"),
        ("trichy", "trichy-tours"), ("thanjavur", "thanjavur-tours"),
        ("pondicherry", "pondicherry-tours"), ("pondy", "pondicherry-tours"),
        ("valparai", "valparai-tours"), ("megamalai", "megamalai-tours"),
        ("kumbakonam", "kumbakonam-tours"), ("mahabalipuram", "mahabalipuram-tours"),
        ("pillayarpatti", "pillayarpatti-tours"),
    ]:
        if dest in t:
            return f"/tour-packages/{url_segment}/{slugify(title)}"

    # South India generic
    if "south india" in t:
        return f"/south-india-package/{slugify(title)}"

    # Andaman
    if "andaman" in t:
        return f"/destination/andaman/andaman-tourism/{slugify(title)}"

    # Karnatakka destinations
    for dest, url_segment in [
        ("mysore", "mysore-tours"), ("coorg", "coorg-tours"), ("bangalore", "bangalore-tours"),
        ("chikmagalur", "chikmagalur-tours"), ("kabini", "kabini-tours"), ("hampi", "hampi-tours"),
    ]:
        if dest in t:
            return f"/tour-packages/{url_segment}/{slugify(title)}"

    return f"/tour-packages/{slugify(title)}"


# ---------------------------------------------------------------------------
# Main: parse file, inject SEO, write back
# ---------------------------------------------------------------------------
def main():
    print("Reading PackageDetails.tsx ...")
    with open(SRC, 'r', encoding='utf-8') as f:
        content = f.read()

    pkg_positions = extract_packages(content)
    print(f"Found {len(pkg_positions)} packages")

    # Build a list of (pkg_id, char_start) tuples
    # We'll scan forward from each start to determine its block extent
    injections = []  # (insert_position, seo_json_text)
    skipped = 0
    processed = 0
    seen_slugs = {}  # slug -> count for deduplication

    for idx, (pkg_id, start_pos) in enumerate(pkg_positions):
        # Determine end of this package block: next package start or EOF
        if idx + 1 < len(pkg_positions):
            end_pos = pkg_positions[idx + 1][1]
        else:
            end_pos = len(content)

        block = content[start_pos:end_pos]

        # Skip if already has SEO
        if already_has_seo(block):
            skipped += 1
            continue

        title     = get_title(block)
        overview  = get_overview(block)
        highlights= get_highlights(block)
        route     = get_route_hint(pkg_id, title)

        seo = build_seo(pkg_id, title, overview, highlights, route)

        # Deduplicate slugs
        base_slug = seo["slug"]
        if base_slug in seen_slugs:
            seen_slugs[base_slug] += 1
            seo["slug"] = f"{base_slug}-{seen_slugs[base_slug]}"
            seo["canonicalUrl"] = seo["canonicalUrl"].replace(base_slug, seo["slug"])
        else:
            seen_slugs[base_slug] = 1

        # Format SEO JSON string (4 spaces indent to match file style)
        seo_str = (
            '\n        "seo": {\n'
            f'            "metaTitle": "{seo["metaTitle"]}",\n'
            f'            "metaDescription": "{seo["metaDescription"]}",\n'
            f'            "canonicalUrl": "{seo["canonicalUrl"]}",\n'
            f'            "slug": "{seo["slug"]}"\n'
            '        },'
        )

        # Find the position of '"id": "<pkg_id>"' inside the block to insert BEFORE it
        id_pattern = re.compile(rf'"id"\s*:\s*"{re.escape(pkg_id)}"')
        id_match = id_pattern.search(block)
        if not id_match:
            # Try alternate: 'id': 'pkg_id' or just the last "id" field
            id_match = re.search(r'"id"\s*:\s*"[^"]*"', block)

        if id_match:
            insert_in_block = id_match.start()
        else:
            # Fallback: insert before the closing of the package (before next pkg start marker or before `},`)
            last_brace = block.rfind('},')
            insert_in_block = last_brace if last_brace != -1 else len(block) - 1

        absolute_insert = start_pos + insert_in_block
        injections.append((absolute_insert, seo_str))
        processed += 1

    print(f"Packages to inject SEO: {processed}")
    print(f"Already had SEO (skipped): {skipped}")

    if not injections:
        print("Nothing to inject. All packages already have SEO.")
        return

    # Apply injections in REVERSE order to preserve positions
    injections.sort(key=lambda x: x[0], reverse=True)

    content_list = list(content)
    for pos, seo_text in injections:
        content_list.insert(pos, seo_text)

    new_content = "".join(content_list)

    print("Writing updated file ...")
    with open(DST, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Done! {processed} packages updated, {skipped} skipped.")

if __name__ == "__main__":
    main()
