const fs = require('fs');

let destContent = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const updatedPlacesToVisit = `    placesToVisit: [
      {
        id: 'alagar-koyil',
        name: 'Alagar Kovil',
        type: 'Temple',
        image: '/assets/madurai/alagarkovil.jpg',
        description: 'There is a beautiful temple called Alagar Koil in the northeast of Madurai. The statue of Lord Vishnu is in the temple, which is also a holy place for many Lord Vishnu followers in the area.',
        rating: 4.5,
        details: {
          timings: '9:00 AM - 6:30 PM',
          entryFee: 'No fee',
          distance: '21 kilometer from Madurai',
          duration: '1 - 2 Hours',
          transport: 'Sedan - AC (4+1), SUV - AC (7+1), Tempo Traveller - AC (12+1)',
          tips: 'When on a trip to Alagar Kovil temple, you can also include Pazhamudhir Solai that is located merely 4 kilometers away',
          sections: [
            {
              title: 'About Alagar Kovil and the deity',
              content: "The temple site adorned by the spectacular stone idol of Hindu Lord Vishnu. He is praised and worshipped here as the beloved brother of the lovely Goddess Meenakshi. This form of Lord Vishnu is known as the 'Azhagar'. Pandyan Kings have enjoyed control over the temple premises right since its construction period. The marvelous tower which welcomes you right at the entrance was built under the Pandyan ruler named Jatavarman during the mid-thirteenth century. The 'vimana' over the tower had been further detailed beautifully by the shiny plates of gold. There has been no looking back for the temple premises since then. King Krishnadeva Raya of Vijayanagar has been funding the temple with innumerable festivals ever since. The entire temple area has wonderful sculptures and sites which are full of breathtaking art of sculpting and construction."
            },
            {
              title: 'Major attractions',
              content: "One of the most wonderful highlights of the site is the breathtaking sculpture carved in stone of the beloved Hindu Lord Vishnu. The interesting part for all the Vishnu devotees and even art lovers here is that there are several sculptures depicting various famous postures associated with the Hindu lord. Known famously as the Azhagar Kovil is this magnificent temple located at the wooden Alagar hills."
            },
            {
              title: 'Alagar kovil temple darshan timings',
              content: "This exquisitely carved Madurai temple opens for darshan in the morning at 6 am and remains open till 12.30 pm. It opens at 3.30 pm again for evening darshan and continues till 8.00 pm."
            },
            {
              title: 'Alagar kovil festival',
              content: "The temple attracts a huge number of worshippers every day and especially during the festival of Chitra, the temple is flooded with a large number of people congregating from everywhere in the country. During this festival, Lord Alagar’s idol is taken out in a procession to Madurai. The procession makes many stops en-route. All these breathtaking attractions make the sacred temple of the beloved Hindu Lord Vishnu one of the most popular places to visit in Madurai and definitely among best places to visit in Madurai and a huge part of every Madurai tour package."
            }
          ],
          popularPackages: ['43', '44', '45', '46']
        }
      },
      {
        id: 'gandhi-museum',
        name: 'Gandhi Museum',
        type: 'Museum',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800',
        description: 'As a tribute to the work of Mahatma Gandhi, who was famous as the "Father of the Nation," the Gandhi Memorial Museum was built. The museum is right in the middle of Madurai and has a lot of interesting things from Indian history, making it one of the five best Gandhi museums in the country.',
        rating: 4.5,
        details: {
          timings: '10:00 AM - 1:00 PM and 2:00 PM - 5:45 PM (Closed on Fridays)',
          entryFee: 'No fee',
          distance: '12 kilometer from Madurai airport',
          duration: '1 - 2 Hours',
          transport: 'Sedan - AC (4+1), SUV - AC (7+1), Tempo Traveller - AC (12+1)',
          tips: 'Tourists can partake in group discussions, seminars, Yogasana classes and exhibitions that are organized frequently. Visitors can keep their belongings in lockers offered here. Guide services are available.',
          sections: [
            {
              title: 'About Gandhi museum',
              content: "With several replicas created here from Mahatma Gandhi's home village in Gujrat, the renowned site of the Gandhi Museum is home to innumerable artefacts and letters collected from his lifetime. With an extremely rich library created in his honour, the Gandhi Museum in Madurai is one of the best places to visit in Madurai and a must inclusion in every Madurai tour package."
            },
            {
              title: 'Where is Gandhi museum located',
              content: "This museum is situated on the Collector Office Road, Tamukkam in Madurai."
            },
            {
              title: 'Major attractions - Interiors and formation',
              content: "The structure of the museum site is home to multiple replicas of the original Gandhi ashram in Gujrat like that in Gandhi Kutir. For several events hosting thousands of people, there is an Open-air Theatre as well. Three parts of the museum honour Mahatma Gandhi's life in terms of his struggle for freedom, several artefacts from his life and his biography projected in a visual gallery. There are even the replicas of artefacts including the cloth from the day of his assassination containing stains of his blood. Apart from the Khadi industries set up there, there is a celebrated library within the premises with over twenty thousand volumes on him and over two lakh letters written from him."
            },
            {
              title: 'Activities',
              content: "A five-day-long affair around the renowned Gandhi Jayanti on October 2nd is well celebrated at the popular museum site. Innumerable eminent speakers come from all over the nation to share a few words in respect of the Father of the nation. Multiple classes are conducted within the museum premises ranging from Yoga, Meditation, courses on the Sanskrit and Hindi languages and various others including the one which teaches the means of self-employment."
            },
            {
              title: 'History',
              content: "The museum site is regarded as one of the most interesting places to visit in Madurai. It has been under the control of several different people from different periods in time. The ones who have enjoyed control over the lush land of thirteen acres range from the Seventeenth-century ruler Queen Mangammal under whom the site was famously called as the Tamukkam Palace. The control was then taken over by the EIC during the British rule. Later in the late 20th century, the site was given by the State Govt. to the All India Gandhi Smarak Nidhi which was inaugurated by the hon. PM J.L Nehru."
            },
            {
              title: 'How to reach',
              content: "Gandhi Memorial Museum can easily be reached by taking Gandhi Museum Road. This road passes through Rajaji Park."
            }
          ],
          popularPackages: ['43', '44', '45', '46']
        }
      },
      {
        id: 'koodal-algar',
        name: 'Koodal Azhagar Temple',
        type: 'Temple',
        image: '/assets/madurai/koodalalgar perumal.jpeg',
        description: 'It\\'s a very unique and famous historical place; it is situated in the centre of Madurai. This temple was built in the Dravidian style and dedicated to Lord Vishnu. Constructed by Pandyas, it is an important historical landmark.',
        rating: 4.6,
        details: {
          timings: '5:30 AM - 12:00 PM and 4:00 PM - 9:00 PM',
          entryFee: 'No fee',
          distance: '2 kilometer from Madurai central bus stand',
          duration: '1 - 2 Hours',
          transport: 'Auto Rickshaw, Taxi, Walking',
          tips: 'Try to visit during the morning hours to avoid the rush. Do not miss witnessing the Ashtanga Vimana.',
          sections: [
            {
              title: 'About Koodal Azhagar Temple',
              content: "Koodal Azhagar Temple is a historic Hindu temple dedicated to Lord Vishnu, situated in the heart of Madurai city. Glorified in the Divya Prabandham, the early medieval Tamil literature canon of the Alvar saints from the 6th–9th centuries CE, it is one of the 108 Divya Desams dedicated to Vishnu. Lord Vishnu is worshipped here as Koodal Azhagar and his consort Lakshmi as Mathuravalli."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The temple showcases magnificent Dravidian architecture. The most remarkable feature is the Ashtanga Vimana, a multi-tiered tower over the sanctum. The sanctum houses Lord Vishnu in three postures: sitting (Ninra), standing (Kidantha), and reclining (Irundha), which is a rare architectural phenomenon. The intricate carvings and detailed stucco work on the vimanam and pillars speak volumes of the architectural brilliance of the Pandya and Vijayanagara dynasties."
            },
            {
              title: 'History',
              content: "The temple has immense historical and religious significance, built by the Pandyas and expanded later by the Vijayanagar Nayak kings. According to legends, it is said that King Malayadwaja Pandya and his daughter Meenakshi were closely associated with the events related to this temple. It holds a pivotal place in the religious history of South India."
            }
          ],
          popularPackages: ['43', '44', '45', '46']
        }
      },
      {
        id: 'kumbakarai-falls',
        name: 'Kumbakkarai Falls',
        type: 'Nature',
        image: '/assets/madurai/Kumbakarai.jpg',
        description: 'Kumbakkarai Falls is a beautiful waterfall in Tamil Nadu at the base of the Kodaikanal hills. The place is not only very beautiful to look at and sounds very soothing with the rushing water, but it is also very peaceful and quiet.',
        rating: 4.4,
        details: {
          timings: '8:00 AM - 4:00 PM',
          entryFee: '₹15 per person',
          distance: '85 kilometer from Madurai',
          duration: '2 - 3 Hours',
          transport: 'Bus, Taxi, Private Car',
          tips: 'The rocks can be slippery, so wear appropriate footwear. It is safe for bathing in designated areas.',
          sections: [
            {
              title: 'About Kumbakkarai Falls',
              content: "Located at the foothills of the Kodaikanal hills, Kumbakkarai Falls is a picturesque and serene natural waterfall. The water originates in Kodaikanal hills and flows down the rocks in two stages. In the first stage, water collects in huge rock recesses which are each named after different wild animals like tiger, elephant, snake etc. In the second stage, it falls over a 50 feet high rock."
            },
            {
              title: 'Major Attractions',
              content: "Apart from the soothing and roaring waterfalls, the site is surrounded by dense forests, making it a perfect spot for nature lovers and trekkers. The serene environment offers a calm retreat away from city life. It also serves as the base camp for trekkers heading towards Kodaikanal."
            },
            {
              title: 'History',
              content: "Discovered and developed for tourism over the decades, Kumbakkarai has been a prominent pit-stop and bathing spot for pilgrims and travelers. Local legends say the waters here have mineral properties due to the herbs present in the upstream Kodaikanal hills."
            }
          ],
          popularPackages: ['51', '52', '53']
        }
      },
      {
        id: 'meenakshi-temple',
        name: 'Madurai Meenakshi Amman Temple',
        type: 'Temple',
        image: '/assets/madurai-temple.png',
        description: 'The old Meenakshi Amman temple is in Madurai, Tamil Nadu. It is near the southern bank of the Vaigai River. This building was constructed by builders between the years 1623 and 1655, and the brilliant design is famed all over the world.',
        rating: 4.9,
        details: {
          timings: '5:00 AM - 12:30 PM and 4:00 PM - 10:00 PM',
          entryFee: 'No fee (Special Darshan tickets available for ₹50 and ₹100)',
          distance: 'In the heart of Madurai',
          duration: '2 - 4 Hours',
          transport: 'Auto Rickshaw, Taxi, Walking',
          tips: 'Dress modestly. Mobile phones and cameras are strictly prohibited inside the temple premises. Lockers are available outside.',
          sections: [
            {
              title: 'About Meenakshi Amman Temple',
              content: "Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu. It is dedicated to Goddess Meenakshi (a form of Parvati) and her consort, Sundareshwarar (a form of Shiva). The temple forms the heart and lifeline of the 2,500-year-old city of Madurai."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The temple is an architectural marvel of the Dravidian style, renowned for its 14 towering gopurams (gateway towers), the tallest reaching 170 feet. It is adorned with thousands of brightly painted stucco figures of deities, mythical animals, and demons. Highlights include the Hall of Thousand Pillars (Aayiram Kaal Mandapam), the Golden Lotus Tank (Porthamarai Kulam), and the musical pillars."
            },
            {
              title: 'Festivals & Activities',
              content: "The temple hosts numerous festivals throughout the year. The most significant is the Chithirai Festival held in April/May, which attracts over a million devotees to witness the divine marriage of Goddess Meenakshi and Lord Sundareshwarar."
            },
            {
              title: 'History',
              content: "The original temple was built by the Pandyan Empire but was heavily looted and destroyed in the 14th century by the Delhi Sultanate. The temple was rebuilt, expanded, and fortified in the 16th and 17th centuries by the Nayak rulers, primarily King Thirumalai Nayak, whose vision resulted in the massive complex seen today."
            }
          ],
          popularPackages: ['43', '44', '45', '46', '47']
        }
      },
      {
        id: 'narasingam',
        name: 'Yoga Narasinga Perumal',
        type: 'Temple',
        image: '/assets/madurai/narasinagam.jpg',
        description: 'The Cave temple of Yoga Narasinga Perumal in Narasingam is famous. Built in 770 AD, the builders used stones from Aanaimalai Hill to create the figure of Narasinga Perumal. This temple is a good example of how the Pandya Kingdom carved things into caves.',
        rating: 4.3,
        details: {
          timings: '7:00 AM - 12:00 PM and 4:00 PM - 8:00 PM',
          entryFee: 'No fee',
          distance: '8 kilometer from Madurai',
          duration: '1 - 2 Hours',
          transport: 'Auto Rickshaw, Taxi',
          tips: 'Climbing the hill offers a beautiful view of Madurai city. Plan your visit early morning to avoid the heat.',
          sections: [
            {
              title: 'About Yoga Narasinga Perumal Temple',
              content: "Located at Othakadai, on the outskirts of Madurai, the Yoga Narasinga Perumal temple is a fascinating rock-cut cave temple. It is situated at the foot of the Yanaimalai (Elephant Hill) and is dedicated to Lord Narasimha (the lion-headed avatar of Vishnu) in a yogic posture."
            },
            {
              title: 'Major Attractions',
              content: "The primary attraction is the grand idol of Yoga Narasimha carved directly out of the hill rock. The temple features beautiful inscriptions and rock-cut architecture characteristic of the early Pandya era. The lotus pond at the entrance adds to the serene ambiance."
            },
            {
              title: 'History',
              content: "The temple dates back to 770 AD and was constructed by Maran Kari, a minister of the Pandyan King Jatila Parantaka Nedunjadayan. It stands as a brilliant testament to the early Pandyan rock-cut architecture, predating many other structural temples in the region."
            }
          ],
          popularPackages: ['44', '45']
        }
      },
      {
        id: 'pazhamudir-solai',
        name: 'Pazhamudir Solai',
        type: 'Temple',
        image: '/assets/madurai/pazhamudhirsolai.jpg',
        description: 'A beautiful temple called Pazhamudhir Solai honours Lord Subramaniya. The temple is gorgeous and has huge steps in front of it. It has beautiful images of Lord Subramaniya made of wood and marble.',
        rating: 4.6,
        details: {
          timings: '5:30 AM - 1:00 PM and 4:00 PM - 8:30 PM',
          entryFee: 'No fee',
          distance: '25 kilometer from Madurai',
          duration: '1 - 2 Hours',
          transport: 'Bus, Taxi, Private Car',
          tips: 'Combine your visit with Alagar Kovil as it is situated just a few kilometers uphill. Beware of the monkeys in the area.',
          sections: [
            {
              title: 'About Pazhamudir Solai',
              content: "Pazhamudircholai is one of the Arupadaiveedu, the six holy abodes of Lord Murugan (Subramanya). Located atop a lush green hill, the temple offers a highly spiritual and tranquil atmosphere. It is unique among the six abodes because it is the only place where Lord Murugan is depicted alongside his two consorts, Valli and Deivayanai."
            },
            {
              title: 'Major Attractions',
              content: "Surrounded by thick forests, the temple's natural setting is breathtaking. A natural spring known as Nuburagangai is located nearby, where devotees take a holy dip. The temple architecture is relatively simple compared to other massive structural temples but holds immense spiritual significance."
            },
            {
              title: 'History',
              content: "The temple is celebrated in Tamil literature, notably by the saint-poetess Avvaiyar and the poet Nakkeerar. The legend of Avvaiyar and Lord Murugan (disguised as a young boy) testing her knowledge with 'roasted and unroasted fruits' (Sutta pazham and Sudatha pazham) is closely associated with this sacred grove."
            }
          ],
          popularPackages: ['43', '44', '45', '46']
        }
      },
      {
        id: 'srivilliputhur',
        name: 'Srivilliputhur Andal Temple',
        type: 'Temple',
        image: '/assets/madurai/Srivilliputhur Andal temple.jpg',
        description: 'This is a well-known temple in Tamil Nadu, and it is also one of Lord Vishnu\\'s 108 divya desams. It is the symbol of the Tamil Nadu government and is the biggest building in Tamil Nadu with 11 levels.',
        rating: 4.8,
        details: {
          timings: '6:00 AM - 1:00 PM and 4:00 PM - 8:00 PM',
          entryFee: 'No fee',
          distance: '80 kilometer from Madurai',
          duration: '2 Hours',
          transport: 'Bus, Taxi, Train',
          tips: 'Don\\'t forget to try the famous Srivilliputhur Palkova (a milk-based sweet) which has a Geographical Indication (GI) tag.',
          sections: [
            {
              title: 'About Srivilliputhur Andal Temple',
              content: "The Srivilliputhur Andal Temple is one of the 108 Divya Desams, highly revered holy shrines of Lord Vishnu. The temple is dedicated to Andal, the only female Alvar saint, and Lord Vatapatrasayi (Vishnu). It holds profound significance in Tamil Vaishnavism."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The temple is renowned for its colossal 11-tiered rajagopuram (gateway tower), which stands at an impressive height of 192 feet. This iconic gopuram serves as the official emblem of the Government of Tamil Nadu. The temple complex is divided into two parts: one dedicated to Andal and the other to Lord Vatapatrasayi."
            },
            {
              title: 'History',
              content: "The temple has an ancient history with its origins rooted in the Pandya dynasty. It is celebrated as the birthplace of two great saints of the Alvar tradition: Periyalvar and his foster daughter Andal. Andal's famous poetic works, the Tiruppavai and Nachiyar Tirumozhi, are recited during the Tamil month of Margazhi."
            }
          ],
          popularPackages: ['70', '71', '72']
        }
      },
      {
        id: 'thirumalai-nayak',
        name: 'Thirumalai Nayak Mahal',
        type: 'Palace',
        image: '/assets/madurai/mahal.png',
        description: 'Built by King Thirumalai Nayakar in 1636 AD, you can well imagine how the Dravidian and Rajput styles merge in this house. Independent India declared this palace a national treasure, and today, it is one of the most beautiful places in peninsular South India.',
        rating: 4.7,
        details: {
          timings: '9:00 AM - 5:00 PM (Lunch break: 1:00 PM - 1:30 PM)',
          entryFee: '₹10 for Indians, ₹50 for Foreigners',
          distance: '2 kilometer from Madurai Meenakshi Temple',
          duration: '1 - 2 Hours',
          transport: 'Auto Rickshaw, Taxi, Walking',
          tips: 'Attend the Sound and Light show held in the evening (English & Tamil versions) to experience the history of Madurai.',
          sections: [
            {
              title: 'About Thirumalai Nayak Mahal',
              content: "Thirumalai Nayak Palace is an exquisite 17th-century palace in Madurai, showcasing a perfect amalgamation of Dravidian, Islamic, and European architectural styles. Today, only the main palace area covering the entrance gate, the main hall, and the dance hall remains, but it continues to mesmerize visitors with its grandeur."
            },
            {
              title: 'Major Attractions',
              content: "The most striking feature of the Mahal is its massive white pillars bordering the courtyard, each measuring 82 feet in height and 19 feet in circumference. The Swarga Vilasam (Celestial Pavilion) features a massive dome that stands without the support of girders or rafters, an engineering marvel of its time. The intricately painted ceiling and the evening Sound & Light show are major highlights."
            },
            {
              title: 'History',
              content: "Constructed in 1636 AD by King Thirumalai Nayak, the palace was originally four times its current size. After his reign, his grandson Chokkanatha Nayak dismantled parts of the palace to build his own in Tiruchirappalli. Lord Napier, the Governor of Madras, partially restored the palace in the 19th century. Today, it is maintained by the Tamil Nadu Archaeological Department."
            }
          ],
          popularPackages: ['43', '44', '45', '46', '47']
        }
      },
      {
        id: 'tirupparankundram',
        name: 'Tirupparankundram Murugan Temple',
        type: 'Temple',
        image: '/assets/madurai/thirupurakundaram.png',
        description: 'In southern India, this is a place where people go to pray. It is a wonderful piece of art thanking Mother Land for all the good things she did for the holy land. It is a hilly place, and some people consider it as southern Himalayas in India.',
        rating: 4.6,
        details: {
          timings: '5:30 AM - 1:00 PM and 4:00 PM - 9:00 PM',
          entryFee: 'No fee',
          distance: '8 kilometer from Madurai city center',
          duration: '1 - 2 Hours',
          transport: 'Auto Rickshaw, Taxi, Bus',
          tips: 'It is highly crowded during the Skanda Sashti festival. The temple involves some climbing, so wear comfortable clothes.',
          sections: [
            {
              title: 'About Tirupparankundram Murugan Temple',
              content: "Tirupparankundram Murugan Temple is an ancient rock-cut temple and one of the Arupadaiveedu (six holy abodes) of Lord Murugan. According to legend, it is the place where Lord Murugan married Deivayanai, the daughter of Lord Indra, after his victorious battle against the demon Surapadman."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The temple is unique as it is carved out of a single solid rock. The main shrine features the idols of Lord Shiva, Vishnu, Durga, Vinayaka, and Murugan side by side, which is a rare occurrence. The Mandapams (halls) have intricately carved pillars with life-sized sculptures dating back to the Nayak period."
            },
            {
              title: 'History',
              content: "The temple's origins trace back to the 8th century, carved by the early Pandyas. Further additions like the massive gopurams and mandapams were made by the Nayak rulers in the 16th century. Historically and mythologically, it remains one of the most significant pilgrimage centers in Tamil Nadu."
            }
          ],
          popularPackages: ['43', '44', '45', '46']
        }
      },
      {
        id: 'vaigai-dam',
        name: 'Vaigai Dam',
        type: 'Nature',
        image: '/assets/madurai/vagai dam.jpeg',
        description: 'Vaigai Dam is a beautiful artificial structure built over the River Vaigai near Andipatti. People who are heading to Periyar Wildlife Sanctuary often stop by this massive and impressive dam for a picnic.',
        rating: 4.2,
        details: {
          timings: '6:00 AM - 6:00 PM',
          entryFee: 'No fee (Park entry fee may apply)',
          distance: '70 kilometer from Madurai',
          duration: '1 - 2 Hours',
          transport: 'Bus, Taxi, Private Car',
          tips: 'The park is beautifully illuminated on weekends and public holidays. Carry some snacks as options are limited.',
          sections: [
            {
              title: 'About Vaigai Dam',
              content: "Vaigai Dam is a massive reservoir constructed across the Vaigai River near Andipatti in the Theni district. It is a lifeline for the agricultural lands in the Madurai and Dindigul districts, providing irrigation and drinking water. Over the years, it has become a popular picnic spot."
            },
            {
              title: 'Major Attractions',
              content: "On one side of the dam is a well-maintained, beautifully landscaped park called Little Brindavan, featuring a variety of exotic flowers and plants. The musical fountain in the park operates on weekends and is a major crowd puller. A small bridge connects the two sides of the dam offering scenic views of the water body."
            },
            {
              title: 'History',
              content: "The dam was inaugurated in 1959 by the then Chief Minister of Tamil Nadu, K. Kamaraj. Since its construction, it has significantly boosted agricultural output in the region and mitigated drought conditions in the surrounding arid districts."
            }
          ],
          popularPackages: ['51', '52', '53']
        }
      },
      {
        id: 'vandiyur-teppakulam',
        name: 'Vandiyur Mariamman Teppakulam',
        type: 'Temple',
        image: '/assets/madurai/theppakulam.jpeg',
        description: 'You can find a small pond called Teppakulam near the Vandiyur Mariamman Temple. The underground tunnels link Teppakulam, which means "temple pond," to the river Vaigai. In the middle of the pond, there is a Mandapam with a Ganesha Temple.',
        rating: 4.5,
        details: {
          timings: '5:00 AM - 9:00 PM',
          entryFee: 'No fee',
          distance: '5 kilometer from Madurai Meenakshi Temple',
          duration: '1 Hour',
          transport: 'Auto Rickshaw, Taxi',
          tips: 'Visit during the Float Festival (Teppotsavam) held in January/February for a spectacular visual treat.',
          sections: [
            {
              title: 'About Vandiyur Mariamman Teppakulam',
              content: "Vandiyur Mariamman Teppakulam is a massive temple pond located near the Vandiyur Mariamman Temple. Spanning over an area of 16 acres, it is one of the largest temple tanks in South India. The tank is connected to the Vaigai River through an ingenious system of underground channels."
            },
            {
              title: 'Major Attractions',
              content: "At the center of the tank is a square island containing a grand mandapam (pavilion) called Maiya Mandapam, which houses a temple dedicated to Lord Ganesha. The vast expanse of water and the picturesque central island make it a popular spot for evening walks and photography."
            },
            {
              title: 'History',
              content: "The tank was built in 1645 AD by King Thirumalai Nayak. Legend states that the site was originally excavated to obtain mud for making bricks to build the Thirumalai Nayak Mahal. Later, the depression was converted into this beautiful lake. The famous Mariamman Teppakulam Float Festival traces its origins back to this period."
            }
          ],
          popularPackages: ['43', '44', '45', '46', '47']
        }
      }
    ]`;

const regex = /placesToVisit:\s*\[[\s\S]*?popularPackages:\s*\[/m;

if (destContent.match(regex)) {
  let updatedContent = destContent.replace(regex, updatedPlacesToVisit + ',\n    popularPackages: [');
  fs.writeFileSync('src/data/destinationsData.ts', updatedContent, 'utf8');
  console.log('Successfully updated Madurai places to visit with rich details.');
} else {
  console.log('Regex did not match.');
}
