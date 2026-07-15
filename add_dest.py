import re

file_path = r'd:\HexaVisionTech\logaa holiday\src\data\destinationsData.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Rameswaram
rameswaram_place = """
      {
        id: 'rameswaram',
        name: 'Rameswaram City',
        type: 'City / Pilgrimage',
        image: '/assets/rameshwaram.avif',
        description: 'Rameswaram is a significant coastal town located on Pamban Island. It is renowned for its spiritual heritage and serves as a major pilgrimage and tourist destination.',
        rating: 4.8,
        details: {
          timings: 'Best visited from October to April',
          entryFee: 'No entry fee to the city',
          distance: '170 kilometer from Madurai',
          duration: '1 - 2 Days',
          transport: 'Train, Bus, Taxi',
          tips: 'Rameswaram is deeply religious. Please dress modestly when visiting the temples and carry light cotton clothes as it is a coastal town.',
          sections: [
            {
              title: 'History and Significance',
              content: "Rameswaram is one of the twelve Jyotirlinga temples and a key site in the Char Dham pilgrimage. According to Hindu tradition, the Ramanathaswamy Temple was established and worshipped by Lord Rama before he crossed the Ram Setu bridge to reach Lanka. Historically, the island served as a crucial transit point for travel to Sri Lanka."
            },
            {
              title: 'Major Attractions',
              content: "The primary draw is the Ramanathaswamy Temple, known for its ornate corridors and massive sculpted pillars. Other key sites include the Pamban Bridge (an iconic bridge connecting the island to mainland India), Dhanushkodi (a ghost town at the tip of the island), and the Dr. A.P.J. Abdul Kalam Memorial."
            },
            {
              title: 'Tourism',
              content: "Rameswaram attracts a large number of visitors for its blend of religious significance, natural beauty, and historical landmarks. The local economy is primarily supported by tourism and the fishing industry."
            }
          ],
          popularPackages: [] // Dynamic loading will handle this
        }
      },"""

# Insert Rameswaram into madurai-tourism placesToVisit
match = re.search(r"id:\s*'madurai-tourism',.*?placesToVisit:\s*\[", content, re.DOTALL)
if match:
    insert_pos = match.end()
    content = content[:insert_pos] + rameswaram_place + content[insert_pos:]


# Munnar
munnar_place = """
      {
        id: 'munnar',
        name: 'Munnar Hill Station',
        type: 'Hill Station',
        image: '/assets/munnar.avif',
        description: 'Munnar, a prominent hill station in the Idukki district of Kerala, is well-regarded for its colonial history, mist-covered valleys, and sprawling emerald-green tea plantations.',
        rating: 4.9,
        details: {
          timings: 'Best visited from September to March',
          entryFee: 'No fee for the town. Attractions vary.',
          distance: '130 kilometer from Kochi',
          duration: '2 - 3 Days',
          transport: 'Bus, Taxi',
          tips: 'Carry warm clothing as the nights can get chilly. Book accommodations in advance during peak season.',
          sections: [
            {
              title: 'History',
              content: "The region was traditionally home to the Muthuvan tribal community. Munnar’s development as a settlement began in the 1870s following the visit of John Daniel Munro. British planters subsequently began establishing tea, coffee, and cardamom plantations. During the British colonial period, Munnar served as a popular summer resort, and the town retains much of this colonial charm today."
            },
            {
              title: 'Tourism & Key Attractions',
              content: "Munnar is one of Kerala's most popular tourist destinations (1,600 meters above sea level). Famous spots include Eravikulam National Park (home of the endangered Nilgiri Tahr), the Tea Museum, and Anamudi (the highest peak in South India). The region is also famous for the Neelakurinji, a rare plant that blooms once every 12 years."
            },
            {
              title: 'Activities',
              content: "Tourism in the area focuses on nature walks, trekking, and exploring the tea gardens. It is a favored destination for honeymooners and those seeking a pleasant climate."
            }
          ],
          popularPackages: []
        }
      },"""

# Alleppey
alleppey_place = """
      {
        id: 'alleppey',
        name: 'Alleppey (Alappuzha)',
        type: 'Backwaters / Coastal Town',
        image: '/assets/kerala1.avif',
        description: 'Famously dubbed the "Venice of the East", Alleppey is internationally renowned for its intricate network of backwaters, canals, and houseboat cruises.',
        rating: 4.8,
        details: {
          timings: 'Best visited from November to February',
          entryFee: 'Houseboat rates vary',
          distance: '53 kilometer from Kochi',
          duration: '1 - 2 Days',
          transport: 'Bus, Taxi, Houseboat',
          tips: 'A houseboat stay is a must-do. Try to book a traditional Kerala sadhya (feast) on the boat for an authentic experience.',
          sections: [
            {
              title: 'History',
              content: "The modern town was largely developed in the second half of the 18th century by Diwan Raja Kesava Das, who envisioned it as a major trade center. He invited various communities to settle there, creating a cosmopolitan culture. During the 17th century, the Dutch constructed warehouses here for the spice trade. The British later utilized the port, significantly boosting the town's global standing through the coir industry."
            },
            {
              title: 'Tourism & Key Attractions',
              content: "The most iconic experience is a houseboat cruise through the serene backwaters. Kuttanad, known as the 'Rice Bowl of Kerala', features vast paddy fields below sea level. Other attractions include Alappuzha Beach, the historic Ambalapuzha Sree Krishna Temple, and the Alappuzha Lighthouse."
            },
            {
              title: 'Culture',
              content: "The region is famous for traditional boat races, such as the Nehru Trophy Boat Race. The coir industry remains a vital part of the local economy, and visitors often enjoy the mix of traditional village life and colonial architecture."
            }
          ],
          popularPackages: []
        }
      },"""

# Insert Munnar and Alleppey into kochi-tourism placesToVisit
match2 = re.search(r"id:\s*'kochi-tourism',.*?placesToVisit:\s*\[", content, re.DOTALL)
if match2:
    insert_pos2 = match2.end()
    content = content[:insert_pos2] + munnar_place + alleppey_place + content[insert_pos2:]

# Bangalore (Add to Mysore or as a new city)
# Wait, Bangalore and Chidambaram are NOT in "Popular Destinations", they are in "Featured Packages".
# The user clicked a Package card, not a Destination card for Bangalore!
# But the user specifically asked for "Bangalore" and "Chidambaram" images to be updated, which I already did in SouthIndiaPackage.tsx.
# Did they ask for Bangalore and Chidambaram history?
# "ithan rendu eduthulayum image illama iruku so na public kula aseect kula chithabaram and banaglore nu rendu image vachurupen atha eduthu intha rendu plavce matum potturu" 
# Translation: "In these two places also there is no image, so I kept chidambaram and bangalore images, put them." I ALREADY DID THIS.
# But then they said: "each and every place ku ne wikipidiyala iruthu history..."
# I will just ensure Munnar, Alleppey, and Rameswaram are perfectly added since they are the ones linking to PlaceDetails!

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated destinationsData.ts with Rameswaram, Munnar, Alleppey")
