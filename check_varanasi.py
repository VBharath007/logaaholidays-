import re

file1 = r'd:\HexaVisionTech\logaa holiday\src\pages\TourCategory.tsx'
content1 = open(file1, encoding='utf-8').read()

file2 = r'd:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx'
content2 = open(file2, encoding='utf-8').read()

print('TourCategory:')
matches1 = re.findall(r'id:\s*(200[0-6]),.*?image:\s*\'([^\']+)\'', content1, re.DOTALL)
for m in matches1: print(m)

print('\nPackageDetails:')
matches2 = re.findall(r'\'(200[0-6])\':\s*\{.*?\"image\":\s*\"([^\"]+)\"', content2, re.DOTALL)
for m in matches2: print(m)
