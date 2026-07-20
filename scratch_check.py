with open(r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "'2068': {" in line or '"2068": {' in line:
        for i in range(max(0, idx - 1), min(len(lines), idx + 10)):
            print(f"{i+1}: {lines[i]}", end="")
        break
