export const destinationsData: Record<string, any> = {
  'kovalam-tourism': {
    id: 'kovalam-tourism',
    name: 'Kovalam',
    image: '/assets/karnataka1.avif',
    state: 'Kerala',
    overview: {
      title: 'Kovalam Tourism',
      description: 'Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favorite haunt of tourists since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing.'
    },
    history: {
      title: 'Kovalam History',
      description: 'Kovalam first received attention when the Regent Maharani Sethu Lakshmi Bayi of Travancore constructed her beach resort, Halcyon Castle, here in the 1920s. Thereafter, European guests of the Travancore kingdom discovered the potential of Kovalam beach.'
    },
    info: {
      idealDuration: '2 Nights 3 Days',
      nearestCity: 'Trivandrum',
      bestTime: 'September to March',
      peakSeason: 'December to January',
      weather: 'Tropical',
      internet: 'Excellent',
      stdCode: '0471',
      languages: 'Malayalam, English, Hindi',
      festivals: 'Village Fair',
      tips: 'The beaches can get crowded during peak season. Visit early morning for peace and cleaner waters.'
    },
    majorAttractions: [
      { title: 'Lighthouse Beach', description: 'The most popular beach in Kovalam, known for its iconic striped lighthouse.' }
    ],
    placesToVisit: [
      {
        id: 'lighthouse-beach',
        name: 'Lighthouse Beach',
        type: 'Beach',
        image: '/assets/generated/lighthouse_beach.png',
        description: 'Famous for the 30-meter tall lighthouse on the Kurumkal hill, this is the largest and most crowded of the three beaches in Kovalam.',
        rating: 4.6,
        details: {
          timings: 'Beach: 24 Hours, Lighthouse: 10:00 AM - 12:45 PM and 2:00 PM - 5:45 PM (Closed on Mondays)',
          entryFee: 'Beach: Free, Lighthouse Entry: ₹20 for Indians, ₹50 for Foreigners',
          distance: 'In Kovalam town center',
          duration: '2 - 3 Hours',
          transport: 'Walking, Auto Rickshaw',
          tips: 'Climb the 142 wooden steps of the lighthouse for a breathtaking panoramic view of the crescent beach. Swimming is relatively safe here due to lifeguards on duty.',
          sections: [
            {
              title: 'About Lighthouse Beach',
              content: "Lighthouse Beach is the southernmost and most popular beach of Kovalam's three crescent beaches. It gets its name from the iconic 30-meter high Vizhinjam Lighthouse perched on a rocky promontory (Kurumkal hill) at the southern end of the beach."
            },
            {
              title: 'Major Attractions',
              content: "The striking red and white striped lighthouse is the main attraction. The observation deck offers spectacular views of the Arabian Sea and the lush green palm-fringed coastline. The beach itself is bustling with shacks, seafood restaurants, and shops selling souvenirs."
            },
            {
              title: 'Activities',
              content: "The calm waters here are ideal for swimming, surfing, and parasailing. After sunset, the beach transforms into a lively spot with illuminated seafood restaurants offering fresh catches of the day."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'samudra-beach',
        name: 'Samudra Beach',
        type: 'Beach',
        image: '/assets/generated/lighthouse_beach.png',
        description: 'A scenic and relatively quieter beach, separated by a large promontory. Ideal for a peaceful retreat away from the crowds.',
        rating: 4.4,
        details: {
          timings: 'Open 24 Hours',
          entryFee: 'No fee',
          distance: '4 kilometer from Lighthouse Beach',
          duration: '1 - 2 Hours',
          transport: 'Auto Rickshaw, Taxi',
          tips: 'Perfect for watching local fishermen at work in the early mornings. It has fewer restaurants compared to Lighthouse beach, so carry your own snacks if planning a long stay.',
          sections: [
            {
              title: 'About Samudra Beach',
              content: "Samudra Beach is the northernmost beach in Kovalam. Unlike the bustling Lighthouse Beach, Samudra Beach is relatively quiet, secluded, and less frequented by tourists. A large promontory separates this part from the southern side."
            },
            {
              title: 'Major Attractions',
              content: "The primary charm of Samudra Beach is its tranquility. It is mainly a base for the local fishing community. Watching the traditional wooden fishing boats set out to sea or return with their daily catch is a culturally enriching experience."
            },
            {
              title: 'Activities',
              content: "Due to the steep waves and rocky nature, swimming is not highly recommended here. However, it is an excellent spot for sunbathing, quiet evening walks, and photography away from the commercial hustle."
            }
          ],
          popularPackages: []
        }
      }
    ],
    popularPackages: []
  },
  'trivandrum-tourism': {
    id: 'trivandrum-tourism',
    name: 'Trivandrum',
    image: '/assets/maharashtra1.avif',
    state: 'Kerala',
    overview: {
      title: 'Trivandrum Tourism',
      description: 'Thiruvananthapuram (Trivandrum) is the capital of Kerala, distinguished by its British colonial architecture and many art galleries. It is built on seven hills and is a major IT and educational hub in South India.'
    },
    history: {
      title: 'Trivandrum History',
      description: 'The city was the capital of the Travancore kingdom from 1795 until India\'s independence. King Marthanda Varma made Thiruvananthapuram the capital after shifting it from Padmanabhapuram.'
    },
    info: {
      idealDuration: '1 Night 2 Days',
      nearestCity: 'Kovalam',
      bestTime: 'October to February',
      peakSeason: 'December',
      weather: 'Tropical',
      internet: 'Excellent',
      stdCode: '0471',
      languages: 'Malayalam, English',
      festivals: 'Onam, Attukal Pongala',
      tips: 'Dress modestly when visiting the ancient temples. Traffic can be heavy during peak hours.'
    },
    majorAttractions: [
      { title: 'Sree Padmanabhaswamy Temple', description: 'One of the wealthiest temples in the world, renowned for its intricate architecture.' }
    ],
    placesToVisit: [
      {
        id: 'padmanabhaswamy-temple',
        name: 'Sree Padmanabhaswamy Temple',
        type: 'Temple',
        image: '/assets/generated/padmanabhaswamy_temple.png',
        description: 'An architectural wonder blending Kerala and Dravidian styles, dedicated to Lord Vishnu reclining on Anantha.',
        rating: 4.9,
        details: {
          timings: '3:15 AM - 12:00 PM and 5:00 PM - 7:20 PM',
          entryFee: 'No fee for general darshan (Special Darshan ₹150 - ₹500)',
          distance: 'In the heart of Trivandrum city',
          duration: '1 - 2 Hours',
          transport: 'Auto Rickshaw, Taxi, Bus',
          tips: 'Strict dress code applies: Men must wear a Mundu (Dhoti) bare-chested; Women must wear a Saree, long skirt, or Salwar with a half-saree over it. Mobile phones and leather items are strictly prohibited inside.',
          sections: [
            {
              title: 'About Sree Padmanabhaswamy Temple',
              content: "The Sree Padmanabhaswamy Temple is one of the 108 Divya Desams (holy abodes of Lord Vishnu). The principal deity, Padmanabhaswamy (Vishnu), is enshrined in the 'Anantha Shayanam' posture, the eternal yogic sleep on the serpent Adisheshan. The temple gained international fame when its hidden vaults were discovered to contain billions of dollars worth of gold and jewels, making it the wealthiest place of worship in the world."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The temple architecture is a fusion of the indigenous Kerala style and the Dravidian style (associated with temples in Tamil Nadu). It features a 16th-century Gopuram and a beautiful corridor with 365 and one-quarter sculptured granite-stone pillars. The idol of the main deity is made of 12,000 Saligramams imported from the Gandaki River in Nepal."
            },
            {
              title: 'History and Legend',
              content: "The temple has been glorified in the Divya Prabandha literature between the 6th and 9th centuries. The royal family of Travancore has historically managed the temple. In 1750, King Marthanda Varma dedicated the entire kingdom to the deity Padmanabhaswamy, ruling as his servant (Padmanabha Dasa)."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'napier-museum',
        name: 'Napier Museum',
        type: 'Museum',
        image: '/assets/generated/napier_museum.png',
        description: 'A 19th-century art and natural history museum featuring a rare collection of archaeological artifacts and historical ornaments.',
        rating: 4.5,
        details: {
          timings: '10:00 AM - 4:45 PM (Closed on Mondays and Wednesday forenoons)',
          entryFee: '₹20 for Indians, ₹100 for Foreigners',
          distance: '3 kilometer from Padmanabhaswamy Temple',
          duration: '1 - 2 Hours',
          transport: 'Auto Rickshaw, Taxi',
          tips: 'Photography inside the museum is not allowed. The surrounding zoo and botanical garden are also worth visiting if you have extra time.',
          sections: [
            {
              title: 'About Napier Museum',
              content: "The Napier Museum is an art and natural history museum built in the 19th century. Named after Lord Napier, the former Governor of Madras, the museum is located within a zoological garden and houses a rare collection of archaeological and historic artifacts, bronze idols, ancient ornaments, a temple chariot, and ivory carvings."
            },
            {
              title: 'Architecture',
              content: "The building itself is an architectural masterpiece designed by Robert Chisholm. It features a unique Indo-Saracenic structure with gothic roof and minarets. It showcases a natural air-conditioning system that is a marvel of its time, providing excellent ventilation without the use of electricity."
            },
            {
              title: 'Major Attractions',
              content: "Among the prominent exhibits are an ancient 8th-century bronze idol of Lord Shiva, intricately carved ivory items, and a beautiful collection of traditional Kerala lamps. The Sree Chitra Art Gallery located in the same compound houses magnificent works by Raja Ravi Varma."
            }
          ],
          popularPackages: []
        }
      }
    ],
    popularPackages: []
  },
  'rameshwaram-tourism': {
    id: 'rameshwaram-tourism',
    name: 'Rameshwaram',
    image: '/assets/kerala1.avif',
    state: 'Tamil Nadu',
    overview: {
      title: 'Rameshwaram Tourism',
      description: 'Rameshwaram is a holy island town in Tamil Nadu, famous for its grand Ramanathaswamy Temple and the legendary Ram Setu. Known as the Varanasi of the South, it is one of the Char Dham pilgrimage sites.'
    },
    history: {
      title: 'Rameshwaram History',
      description: 'According to Hindu mythology, this is the place from where Lord Rama built a bridge across the sea to Lanka to rescue his wife Sita from her abductor Ravana.'
    },
    info: {
      idealDuration: '1 Night 2 Days',
      nearestCity: 'Madurai',
      bestTime: 'October to April',
      peakSeason: 'December to February',
      weather: 'Tropical',
      internet: 'Moderate',
      stdCode: '04573',
      languages: 'Tamil, English, Hindi',
      festivals: 'Mahashivratri, Vasanthautsavam',
      tips: 'Book accommodations well in advance during festival seasons.'
    },
    majorAttractions: [
      {
        title: 'Ramanathaswamy Temple',
        description: 'A magnificent temple dedicated to Lord Shiva, known for having the longest corridor in the world with stunning pillars.'
      }
    ],
    placesToVisit: [
      {
        id: 'ramanathaswamy-temple',
        name: 'Ramanathaswamy Temple',
        type: 'Temple',
        image: '/assets/generated/ramanathaswamy_temple.png',
        description: 'One of the twelve Jyotirlinga temples. It is mandatory to bathe in the 22 holy wells (Theerthams) inside the temple premises before offering prayers to the deity.',
        rating: 4.9,
        details: {
          timings: '5:00 AM - 1:00 PM and 3:00 PM - 9:00 PM',
          entryFee: 'No fee (Special Darshan ₹50 - ₹200)',
          distance: 'In the center of Rameshwaram Island',
          duration: '2 - 3 Hours',
          transport: 'Auto Rickshaw, Walking',
          tips: 'It is highly recommended to take a holy dip in the Agniteertham first, followed by bathing in the 22 holy wells inside the temple before entering the main shrine. Mobile phones are strictly prohibited.',
          sections: [
            {
              title: 'About Ramanathaswamy Temple',
              content: "Ramanathaswamy Temple is a Hindu temple dedicated to the god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is also one of the twelve Jyotirlinga temples. It is one of the 275 Paadal Petra Sthalams, where the three of the most revered Nayanars (Saivite saints), Appar, Sundarar and Tirugnana Sambandar, have glorified the temple with their songs."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The temple has the longest corridor among all Hindu temples in India. The outer set of corridors is reputed to be the longest in the world, measuring about 6.9 m in height, 400 feet each in the east and west and about 640 feet in the north and south. The inner pillars are carved with exquisite detail. The temple also houses 22 holy water bodies (Theerthams), each believed to have medicinal properties and religious significance."
            },
            {
              title: 'History and Legend',
              content: "According to the Ramayana, Rama, the seventh avatar of god Vishnu, prayed to Shiva here to absolve any sins that he might have committed during his war against the demon-king Ravana in Sri Lanka. According to the Puranas, Rama along with his wife Sita and brother Lakshmana, installed and worshipped the lingam (an iconic symbol of Shiva) here to expiate the sin of Brahmahatya incurred while killing of the Brahmin Ravana."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'agniteertham',
        name: 'Agniteertham',
        type: 'Beach / Sacred Water',
        image: '/assets/generated/agniteertham.png',
        description: 'The sacred beach outside the Ramanathaswamy Temple where pilgrims take a holy dip before entering the temple.',
        rating: 4.6,
        details: {
          timings: 'Open 24 Hours',
          entryFee: 'No fee',
          distance: '200 meters from Ramanathaswamy Temple',
          duration: '1 Hour',
          transport: 'Walking',
          tips: 'Visit early in the morning during sunrise for a peaceful experience. You can perform ancestral rituals (Tarpanam) here.',
          sections: [
            {
              title: 'About Agniteertham',
              content: "Agniteertham is one of the 64 sacred baths in Rameswaram. Located right outside the eastern gate of the Ramanathaswamy Temple, it is the only teertham situated outside the temple premises on the beach. Taking a holy dip here is considered an essential ritual before entering the main temple for darshan."
            },
            {
              title: 'Religious Significance',
              content: "The word 'Agni' means fire and 'Teertham' means holy water. It is believed that bathing in this sea removes one's sins and purifies the soul. Devotees often perform Poojas for their ancestors (Pitru Dosha Nivarana) on the shores of Agniteertham. The water here is unusually calm, resembling a lake, making it very safe for bathing."
            },
            {
              title: 'Legend',
              content: "According to mythology, after rescuing Sita from Ravana, Lord Rama asked her to prove her purity through the Agni Pariksha (trial by fire). After proving her chastity, Lord Agni (the fire god) himself had to bathe in this sea to wash away the sin of touching the pure Goddess Sita, giving the place its name 'Agniteertham'."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'pamban-bridge',
        name: 'Pamban bridge',
        type: 'Landmark / Bridge',
        image: '/assets/generated/pamban_bridge.png',
        description: 'India’s first sea bridge connecting Rameswaram Island with the mainland. The architectural marvel offers breathtaking views of the ocean.',
        rating: 4.8,
        details: {
          timings: 'Open 24 Hours (Best viewed during train crossings)',
          entryFee: 'No fee',
          distance: '15 kilometer from Rameshwaram town',
          duration: '1 Hour',
          transport: 'Taxi, Auto Rickshaw, Bus',
          tips: 'Try to time your visit to watch a train pass over the bridge. The wind can be extremely strong, so hold onto your hats and cameras!',
          sections: [
            {
              title: 'About Pamban Bridge',
              content: "Pamban Bridge refers to the railway bridge that connects the town of Mandapam in mainland India with Pamban Island, and Rameswaram. Opened in 1914, it was India's first sea bridge, and was the longest sea bridge in India until the opening of the Bandra-Worli Sea Link in 2010. A parallel road bridge was also opened in 1988."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The railway bridge is a conventional bridge resting on concrete piers, but has a double-leaf bascule section midway, which can be raised to let ships and barges pass through. Standing on the parallel road bridge and watching the train slowly cross the ocean on the century-old railway bridge is an iconic and thrilling experience."
            },
            {
              title: 'History',
              content: "Constructed by the British, the bridge has withstood the test of time and several natural disasters, including the catastrophic 1964 cyclone which destroyed the town of Dhanushkodi. The bridge remains a marvel of engineering, built in a highly corrosive marine environment and a cyclone-prone zone."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'panchmukhi-hanuman',
        name: 'Panchmukhi hanuman mandir',
        type: 'Temple',
        image: '/assets/generated/panchmukhi_hanuman.png',
        description: 'This temple is highly revered as it is believed that Lord Hanuman revealed his five-faced form here. It also houses the floating stones used to build the Ram Setu.',
        rating: 4.5,
        details: {
          timings: '6:00 AM - 12:00 PM and 4:00 PM - 8:00 PM',
          entryFee: 'No fee',
          distance: '2 kilometer from Ramanathaswamy Temple',
          duration: '30 Mins - 1 Hour',
          transport: 'Auto Rickshaw, Walking',
          tips: 'The temple is small but significant. Don\'t miss the exhibit of the floating stones used in the Ram Setu.',
          sections: [
            {
              title: 'About Panchmukhi Hanuman Temple',
              content: "Located in Rameswaram, the Five-Faced Hanuman Temple (Panchmukhi Hanuman Mandir) is a highly venerated shrine. The presiding deity is Lord Hanuman, depicted with five faces: Hanuman, Narasimha, Adivaraha, Hayagriva, and Garuda."
            },
            {
              title: 'Major Attractions - Floating Stones',
              content: "One of the most fascinating attractions of this temple is the display of the floating stones. These are believed to be the actual stones used by Lord Rama's Vanara Sena (monkey army) to build the Ram Setu (Adam's Bridge) from Rameswaram to Lanka. These pumice-like stones astonishingly float on water."
            },
            {
              title: 'History and Legend',
              content: "According to legend, during the war in Lanka, the demon king Ravana sought the help of Mahiravana (the king of the underworld). Mahiravana captured Rama and Lakshmana. To kill Mahiravana, Hanuman had to extinguish five lamps burning in different directions simultaneously. To accomplish this, Hanuman assumed the Panchmukhi (five-faced) form."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'dhanushkodi',
        name: 'Dhanushkodi',
        type: 'Historical Site / Beach',
        image: '/assets/generated/dhanushkodi.png',
        description: 'A ghost town destroyed by the 1964 cyclone, Dhanushkodi offers pristine beaches, ruined structures, and a surreal edge-of-the-world experience.',
        rating: 4.8,
        details: {
          timings: '6:00 AM - 5:00 PM (Entry restricted after dark)',
          entryFee: 'No fee',
          distance: '20 kilometer from Rameshwaram',
          duration: '2 - 3 Hours',
          transport: 'Bus, Taxi, Private Jeeps',
          tips: 'Swimming is extremely dangerous here due to strong and unpredictable currents. The newly laid road makes the journey smooth, but the area gets very hot, so carry water.',
          sections: [
            {
              title: 'About Dhanushkodi',
              content: "Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island. Flanked by the Indian Ocean on one side and the Bay of Bengal on the other, it offers a surreal, desolate beauty. Once a bustling town and an important transit point between India and Ceylon (Sri Lanka), it is now a 'Ghost Town'."
            },
            {
              title: 'Major Attractions',
              content: "The primary attractions are the haunting ruins of the town, including the remains of a church, a railway station, a school, and a post office, standing solitary against the vast expanses of sand. The drive to Dhanushkodi along the narrow strip of land with oceans on both sides is breathtaking. At the very tip (Arichal Munai), you can see the exact point where the two oceans meet."
            },
            {
              title: 'History - The 1964 Cyclone',
              content: "Before 1964, Dhanushkodi was a flourishing tourist and pilgrimage center. On the night of December 22, 1964, a massive cyclone with tidal waves hitting 20 feet high completely destroyed the town. A passenger train running from Pamban to Dhanushkodi was washed away, killing all 115 people on board. The Madras Government subsequently declared the town unfit for living."
            }
          ],
          popularPackages: []
        }
      }
    ],
    popularPackages: []
  },
  'kanyakumari-tourism': {
    id: 'kanyakumari-tourism',
    name: 'Kanyakumari',
    image: '/assets/Uttarakhand1.avif',
    state: 'Tamil Nadu',
    overview: {
      title: 'Kanyakumari Tourism',
      description: 'Kanyakumari, the southernmost tip of mainland India, is renowned for its spectacular sunrises and sunsets over the confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean.'
    },
    history: {
      title: 'Kanyakumari History',
      description: 'Historically known as Cape Comorin, it has been a center for art and religion for centuries.'
    },
    info: {
      idealDuration: '1 Night 2 Days',
      nearestCity: 'Trivandrum',
      bestTime: 'October to March',
      peakSeason: 'December',
      weather: 'Tropical',
      internet: 'Good',
      stdCode: '04652',
      languages: 'Tamil, English, Malayalam',
      festivals: 'Chaitra Purnima Festival',
      tips: 'Wake up early to catch the famous sunrise.'
    },
    majorAttractions: [
      {
        title: 'Vivekananda Rock Memorial',
        description: 'A monument sitting on a rock in the ocean.'
      }
    ],
    placesToVisit: [
      {
        id: 'vivekananda-rock',
        name: 'Vivekananda Rock Memorial',
        type: 'Landmark',
        image: '/assets/generated/vivekananda_rock.png',
        description: 'A popular tourist monument built in honor of Swami Vivekananda, who is said to have attained enlightenment on this rock.',
        rating: 4.8,
        details: {
          timings: '8:00 AM - 4:00 PM',
          entryFee: '₹50 for ferry ride, ₹20 for memorial entry',
          distance: '500 meters off the mainland coast',
          duration: '2 - 3 Hours',
          transport: 'Ferry Service',
          tips: 'The queue for the ferry can be extremely long, especially during weekends and holidays. Try to reach the ticket counter by 7:30 AM to avoid the rush.',
          sections: [
            {
              title: 'About Vivekananda Rock Memorial',
              content: "The Vivekananda Rock Memorial is a magnificent monument built on a small rock island located about 500 meters off the coast of Kanyakumari. It marks the confluence of the Arabian Sea, the Bay of Bengal, and the Indian Ocean. It was built in 1970 in honor of Swami Vivekananda, who is said to have swum to the rock and meditated here for three days in 1892."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The memorial consists of two main structures: the Vivekananda Mandapam and the Shripada Mandapam. The architectural design reflects different styles from across India, heavily influenced by the Ramakrishna Mission. The Dhyan Mandapam (meditation hall) inside provides a serene environment for visitors to meditate in complete silence."
            },
            {
              title: 'History and Significance',
              content: "According to local legends, it was on this rock that Goddess Kumari performed austerity. A projection on the rock resembling a human foot is believed to be the 'Shripadam' (footprint) of the goddess. Swami Vivekananda attained enlightenment here before his departure to Chicago for the World Parliament of Religions."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'thiruvalluvar-statue',
        name: 'Thiruvalluvar Statue',
        type: 'Landmark',
        image: '/assets/generated/thiruvalluvar_statue.png',
        description: 'A towering stone sculpture of the Tamil poet and philosopher Valluvar.',
        rating: 4.7,
        details: {
          timings: '8:00 AM - 4:00 PM (Subject to tide levels)',
          entryFee: 'Included in the Vivekananda Rock ferry ticket',
          distance: 'Adjacent to Vivekananda Rock Memorial',
          duration: '1 Hour',
          transport: 'Ferry Service',
          tips: 'Ferry service to the statue is sometimes suspended during low tides or rough seas. Climbing the stairs inside the pedestal offers great views.',
          sections: [
            {
              title: 'About Thiruvalluvar Statue',
              content: "The Thiruvalluvar Statue is a 133-foot tall stone sculpture of the Tamil poet and philosopher Valluvar, author of the Tirukkural, an ancient Tamil work on secular ethics and morality. It stands on a small island rock adjacent to the Vivekananda Rock Memorial."
            },
            {
              title: 'Architecture and Symbolism',
              content: "The monument was designed by Dr. V. Ganapati Sthapati. The height of 133 feet denotes the 133 chapters of the Tirukkural. The 38-foot pedestal represents the 38 chapters on 'Virtue' (Aram), while the 95-foot statue standing on it represents 'Wealth' (Porul) and 'Love' (Inbam). It signifies that wealth and love must be earned and enjoyed on the foundation of solid virtue."
            },
            {
              title: 'History',
              content: "The project was conceived in the 1970s and the foundation stone was laid by then Prime Minister Morarji Desai in 1979. After decades of meticulous carving involving hundreds of sculptors, the statue was finally inaugurated on January 1, 2000."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'kanyakumari-beach',
        name: 'Kanyakumari beach',
        type: 'Beach',
        image: '/assets/generated/kanyakumari_beach.png',
        description: 'Famous for its multi-colored sand and the stunning view of the confluence of three oceans.',
        rating: 4.5,
        details: {
          timings: 'Open 24 Hours',
          entryFee: 'No fee',
          distance: 'In the center of Kanyakumari town',
          duration: '1 - 2 Hours',
          transport: 'Walking',
          tips: 'The beach is quite rocky, making it unsafe for swimming. However, it is the perfect spot for photography and buying seashell souvenirs.',
          sections: [
            {
              title: 'About Kanyakumari Beach',
              content: "Kanyakumari Beach is uniquely situated at the southernmost tip of peninsular India, where the Arabian Sea, the Bay of Bengal, and the Indian Ocean converge. It is a stunning rocky beach famous for its beautifully colored sands that naturally display hues of red, yellow, and black."
            },
            {
              title: 'Major Attractions',
              content: "Besides the Triveni Sangam (confluence of the three seas), the beach offers an unparalleled view of the sunrise and sunset, sometimes simultaneously with the moonrise on a full moon day. The Gandhi Memorial Mandapam and the Kanyakumari Temple are located right next to the beach."
            },
            {
              title: 'Geographical Significance',
              content: "The confluence of three major water bodies creates a unique oceanic environment. You can sometimes see distinct shades of blue and green water merging, although strong currents mean that visitors are restricted from venturing deep into the water."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'sunset-point',
        name: 'Sunset Point',
        type: 'Viewpoint',
        image: '/assets/generated/kanyakumari_beach.png',
        description: 'The most popular spot to witness the mesmerizing sunset over the Arabian Sea.',
        rating: 4.7,
        details: {
          timings: 'Best visited from 5:00 PM - 7:00 PM',
          entryFee: 'No fee',
          distance: '2 kilometer from Kanyakumari town center',
          duration: '1 Hour',
          transport: 'Auto Rickshaw, Walking',
          tips: 'Arrive at least 30-45 minutes before sunset to secure a good viewing spot, as it gets incredibly crowded.',
          sections: [
            {
              title: 'About Sunset Point',
              content: "Kanyakumari is one of the rare places in India where you can watch both the sunrise and the sunset from the ocean. Sunset Point, located a bit away from the main town center, provides an unobstructed view of the sun dipping into the Arabian Sea."
            },
            {
              title: 'The Experience',
              content: "The sunset here is truly spectacular as the sky erupts in hues of orange, pink, and purple. On full moon days (Chitra Pournami), visitors can witness a magical phenomenon where the sun sets and the moon rises simultaneously over the oceans."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'padmanabhapuram-palace',
        name: 'Padmanabhapuram palace',
        type: 'Historical Site / Palace',
        image: '/assets/generated/padmanabhapuram_palace.png',
        description: 'A magnificent wooden palace of the 16th century located near Kanyakumari, showcasing traditional Kerala architecture.',
        rating: 4.8,
        details: {
          timings: '9:00 AM - 4:30 PM (Closed on Mondays)',
          entryFee: '₹30 for Indians, ₹300 for Foreigners',
          distance: '35 kilometer from Kanyakumari',
          duration: '2 Hours',
          transport: 'Taxi, Bus',
          tips: 'Visitors must remove their footwear before entering to preserve the ancient wooden floors. Modest dressing is advised.',
          sections: [
            {
              title: 'About Padmanabhapuram Palace',
              content: "Though physically located in Kanyakumari district of Tamil Nadu, the Padmanabhapuram Palace is administered by the Government of Kerala. It was the ancient capital of the Travancore Kingdom and is regarded as a masterpiece of indigenous Kerala architecture."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The palace is constructed almost entirely of wood, featuring intricate carvings, rosewood ceilings, and naturally polished black floors made from a unique mix of egg whites, jaggery, lime, burnt coconut shells, and river sand. Highlights include the King's Council Chamber (Mantrasala), the Mother's Palace (Thai Kottaram), and the Nataksala (Performance Hall)."
            },
            {
              title: 'History',
              content: "The palace was constructed around 1601 AD by Iravi Varma Kulasekhara Perumal. It remained the seat of power for the Travancore rulers until 1795, when the capital was shifted to Thiruvananthapuram. Despite its age, meticulous preservation has kept the palace in pristine condition."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'suchindram-temple',
        name: 'Suchindram temple',
        type: 'Temple',
        image: '/assets/Tamil Nadu1.avif',
        description: 'Also known as the Thanumalayan Temple, this architectural marvel is famous for its musical pillars and towering gopuram.',
        rating: 4.6,
        details: {
          timings: '4:30 AM - 11:30 AM and 5:00 PM - 8:30 PM',
          entryFee: 'No fee',
          distance: '13 kilometer from Kanyakumari',
          duration: '1 - 2 Hours',
          transport: 'Taxi, Bus, Auto Rickshaw',
          tips: 'Men are required to remove their upper garments (shirts/t-shirts) before entering the temple. Mobile phones are not allowed inside.',
          sections: [
            {
              title: 'About Suchindram Temple',
              content: "The Thanumalayan Temple at Suchindram is a unique Hindu temple dedicated to the trinity of Shiva, Vishnu, and Brahma (represented by a single idol called Thanumalayan). It is one of the most important pilgrimage sites in southern India."
            },
            {
              title: 'Architecture & Major Attractions',
              content: "The temple is renowned for its architectural grandeur. It features a majestic 134-foot tall white gopuram, intricately carved musical pillars that emit distinct musical notes when tapped, and an impressive 18-foot tall statue of Lord Hanuman carved from a single granite block. The temple also has a beautiful Navagraha mandapam with astrological deities carved on the ceiling."
            },
            {
              title: 'History and Legend',
              content: "The temple traces its history back to the 9th century, with significant additions made by the Chola, Pandya, and Nayak rulers. According to Hindu legend, Lord Indra was purified of a curse here, and it is believed that he visits the temple every night to perform Ardhajama Pooja."
            }
          ],
          popularPackages: []
        }
      }
    ],
    popularPackages: []
  },
  'madurai-tourism': {
    id: 'madurai-tourism',
    name: 'Madurai',
    image: '/assets/madurai-temple.png',
    state: 'Tamil Nadu',
    overview: {
      title: 'Madurai Tourism',
      description: 'With Murugan temples, cultural sites, Vandiyur Mariamman temple, Gandhi Museum, Narasingam Caves and what not, Madurai becomes a prime representative city of South India and a definite city among best places to visit in Tamilnadu. With so many sites available here which are of extreme significance ranging from the religious perspective, the historical perspective and even the artistic perspective. You must bring an artistic lens along on your next trip to Tamilnadu and make the most of the raw ancient beauty spread in the vast city of Madurai and capture it in your lens and share it with the world.'
    },
    history: {
      title: 'Madurai History',
      description: 'Madurai has a rich history dating back to the 3rd century BCE. The Pandyan Dynasty made Madurai its capital city. Its name has appeared in many ancient works of Ptolemy, Strabo as well as many other prominent ancient historians. Other dynasties to have ruled over this city are Kalabhra, Cholas, Delhi Sultanate, Vijayanagar Empire, Nayaks, and other conquerors like Arcot Nawab, Chandra Sahib and Muhammed Yusuf Khan.'
    },
    info: {
      idealDuration: '1 Night 2 Days',
      nearestCity: 'Rameshwaram',
      bestTime: 'Through out the year',
      peakSeason: 'April to June',
      weather: 'Moderate',
      internet: 'Good',
      stdCode: '0452',
      languages: 'Tamil and English',
      festivals: 'Pongal, Jallikattu, Chithirai Festival, Festival of the Cradle and Avanimoolam Festival',
      tips: 'You can visit Rameshwaram and Kanyakumari as these places are nearby.'
    },
    majorAttractions: [
      {
        title: 'Madurai Meenakshi Temple',
        description: 'Probably one of Southern India’s most famous temples, the Madurai Meenakshi temple is a jewel of this ancient city. It was constructed between 1623 and 1655 and is renowned for its exquisite Dravidian styled architectural beauty. The temple has 12 gopurams and is dedicated to Goddess Meenakshi or Parvati.'
      },
      {
        title: 'Vandiyur Mariamman Teppakulam',
        description: 'The renowned temple of VandiyurMariammanTeppakulam is one of the most worshipped sacred sites of the beloved Hindu Lord Ganesha and Pechi Amman across the lovely city of MADURAI. The temple is known across the nation for its sacred pond area which makes it home to one of the biggest sacred tanks across the South Indian borders.'
      },
      {
        title: 'The Pazhamudir Solai',
        description: 'It is among the most popular Murugan temples in the cultural state of Tamilnadu. A magnificent hilltop is the site of the sacred temple of the South Indian deity Murugan. With legends, lush waterfalls and beliefs associated with the ancient temple, the site surely counts among the best places to visit in Tamilnadu.'
      },
      {
        title: 'The Gandhi Museum',
        description: 'With several replicas created here from Mahatma Gandhi\'s home village in Gujrat, the renowned site of the Gandhi Museum is home to innumerable artifacts and letters collected from his lifetime. With an extremely rich library created in his honor, the Gandhi Museum in Madurai is one of the best places to visit in Tamilnadu.'
      }
    ],
    placesToVisit: [
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
      },
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
        image: '/assets/madurai/gandhi musimum.jpeg',
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
        description: 'It\'s a very unique and famous historical place; it is situated in the centre of Madurai. This temple was built in the Dravidian style and dedicated to Lord Vishnu. Constructed by Pandyas, it is an important historical landmark.',
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
        description: 'This is a well-known temple in Tamil Nadu, and it is also one of Lord Vishnu\'s 108 divya desams. It is the symbol of the Tamil Nadu government and is the biggest building in Tamil Nadu with 11 levels.',
        rating: 4.8,
        details: {
          timings: '6:00 AM - 1:00 PM and 4:00 PM - 8:00 PM',
          entryFee: 'No fee',
          distance: '80 kilometer from Madurai',
          duration: '2 Hours',
          transport: 'Bus, Taxi, Train',
          tips: 'Don\'t forget to try the famous Srivilliputhur Palkova (a milk-based sweet) which has a Geographical Indication (GI) tag.',
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
    ],
    popularPackages: [
      '43', '44', '45', '46',
      '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', 
      '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68',
      '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79',
      '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
      '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101',
      '102', '103', '104', '105', '106', '107', '108', '109'
    ]
  },
  'kerala-tourism': {
    id: 'kerala-tourism',
    name: 'Kerala',
    image: '/assets/bharath/kerala.avif',
    state: 'Kerala',
    overview: {
      title: 'Kerala Tourism',
      description: 'Known as "God\'s Own Country", Kerala is a tropical paradise on India\'s southwestern coast. With its serene backwaters, lush hill stations, ancient spice plantations, wildlife sanctuaries, and pristine beaches, Kerala offers an unmatched travel experience. From the misty tea gardens of Munnar to the tranquil houseboats of Alleppey and the wildlife-rich forests of Thekkady, every corner of Kerala is a visual feast.'
    },
    history: {
      title: 'Kerala Heritage',
      description: 'Kerala\'s history stretches back to ancient times, with its rich Dravidian culture, spice trade with Rome, Arabia, and China, and the influence of great dynasties including the Cheras, Zamorins of Calicut, and later the Portuguese, Dutch, and British. Kerala is also the birthplace of Kathakali dance, Kalaripayattu martial arts, and Ayurvedic medicine.'
    },
    info: {
      idealDuration: '3 Nights / 4 Days',
      nearestCity: 'Kochi (Cochin)',
      bestTime: 'September to March',
      peakSeason: 'October to February',
      weather: 'Tropical & Pleasant',
      internet: 'Excellent',
      stdCode: '0484',
      languages: 'Malayalam, English, Tamil',
      festivals: 'Onam, Thrissur Pooram, Vishu, Christmas, Eid',
      tips: 'Book houseboats well in advance. Carry light cotton clothes. Try local Kerala meals on banana leaf.'
    },
    majorAttractions: [
      {
        title: 'Alleppey Backwaters',
        description: 'The backwaters of Alleppey (Alappuzha) are a network of lagoons, lakes, and canals that run parallel to the Arabian Sea coast. A houseboat cruise through these backwaters is an iconic Kerala experience, offering stunning views of paddy fields, coconut groves, and village life.'
      },
      {
        title: 'Munnar Tea Gardens',
        description: 'Munnar is one of the most scenic hill stations in South India, famous for its endless stretches of tea plantations, misty mountains, exotic flora and fauna. The cool climate, rolling hills, and lush greenery make it a paradise for nature lovers and honeymooners.'
      },
      {
        title: 'Periyar Wildlife Sanctuary',
        description: 'Located in Thekkady, the Periyar Wildlife Sanctuary is one of India\'s most visited national parks. The stunning Periyar Lake at its heart is home to elephants, tigers, leopards, and over 260 species of birds. Boat safaris on the lake offer unforgettable wildlife encounters.'
      },
      {
        title: 'Vagamon Hills',
        description: 'Vagamon is a serene hill station nestled in the Western Ghats, famous for its rolling meadows, pine forests, waterfalls, and paragliding. Far from the crowds, it offers a peaceful escape into nature.'
      }
    ],
    placesToVisit: [
      {
        id: 'alleppey',
        name: 'Alleppey (Alappuzha)',
        type: 'Backwaters',
        image: '/assets/bharath/allepey.png',
        description: 'The "Venice of the East", Alleppey is famous for its network of backwaters, houseboat cruises, and the spectacular Nehru Trophy Boat Race. A must-visit for every Kerala traveler.',
        rating: 4.9,
        details: {
          timings: 'Open all day',
          entryFee: 'Houseboat charges vary',
          distance: '85 km from Kochi',
          duration: '1 - 2 Days',
          transport: 'Private A/C Vehicle from Madurai',
          tips: 'Book houseboats well in advance especially during peak season (Oct-Feb). Shikara rides are cheaper than full houseboats.',
          sections: [
            {
              title: 'About Alleppey',
              content: "Known as the 'Venice of the East', Alappuzha (Alleppey) is renowned for its picturesque backwaters, serene lagoons, and interconnected network of canals. It is the epicenter of Kerala's backwater tourism, attracting visitors worldwide to experience its traditional kettuvallam (houseboats) and vibrant village life along the waters."
            },
            {
              title: 'History',
              content: "Founded by Raja Kesavadasan in 1762, Alleppey has a rich history as a major port and trading center. Due to its strategic coastal location, it was once one of the busiest trade hubs on the Malabar Coast, dealing extensively in coir and spices. The unique canal system was built to transport goods directly to the port."
            },
            {
              title: 'Timings and Rates',
              content: "Houseboat cruises are generally available from 12:00 PM to 9:00 AM the next day. Day cruises usually run from 11:00 AM to 5:00 PM. Rates vary from ₹6,000 to ₹15,000+ per night depending on the season, number of rooms, and luxury level (Deluxe, Premium, Luxury). Shikara rides are available hourly for around ₹600-₹800/hour."
            },
            {
              title: 'Other Details',
              content: "The world-famous Nehru Trophy Boat Race is held here on the second Saturday of August every year on the Punnamada Lake, featuring magnificent snake boats (Chundan Vallams). Alleppey is also famous for its high-quality coir industry and the tranquil Marari Beach."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'munnar',
        name: 'Munnar',
        type: 'Hill Station',
        image: '/assets/bharath/munnar.png',
        description: 'One of Kerala\'s most popular hill stations, Munnar is known for its sprawling tea estates, mist-covered mountains, exotic wildlife, and cool pleasant climate throughout the year.',
        rating: 4.8,
        details: {
          timings: 'Open all day',
          entryFee: 'Tea Museum: ₹75 per person',
          distance: '130 km from Madurai via Bodimettu',
          duration: '2 - 3 Days',
          transport: 'Private A/C Vehicle from Madurai',
          tips: 'Best visited in the morning for clear views. Echo Point and Mattupetty Dam are must-visits.',
          sections: [
            {
              title: 'About Munnar',
              content: "Munnar is a breathtaking hill station nestled in the Western Ghats at an altitude of 1,600 meters. The name 'Munnar' means 'Three Rivers', referring to its location at the confluence of the Mudhirapuzha, Nallathanni, and Kundali rivers. It is famous for its endless rolling tea plantations, misty valleys, and cascading waterfalls."
            },
            {
              title: 'History',
              content: "Once the favored summer resort of the erstwhile British Government in South India, Munnar retains its colonial charm. Commercial tea planting was pioneered here by A.H. Sharp in the late 19th century, transforming the wild, forested hills into one of the world's highest tea-growing regions."
            },
            {
              title: 'Timings and Rates',
              content: "Tata Tea Museum: 9:00 AM - 4:00 PM (Closed Mondays), Entry Fee: ₹75. Eravikulam National Park: 7:30 AM - 4:00 PM, Entry Fee: ₹200 (Indians), ₹500 (Foreigners). Mattupetty Dam: 9:30 AM - 5:00 PM, Boating fee approx ₹700 for 15 mins (5 pax)."
            },
            {
              title: 'Other Details',
              content: "Munnar is home to the rare Neelakurinji flower which blooms once in 12 years (next expected in 2030), turning the hillsides blue. Eravikulam National Park is a crucial sanctuary for the endangered Nilgiri Tahr (mountain goat)."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'thekkady',
        name: 'Thekkady',
        type: 'Wildlife',
        image: '/assets/bharath/thekkady.png',
        description: 'Home to the famous Periyar Wildlife Sanctuary, Thekkady is a paradise for wildlife enthusiasts. Spice plantations, elephant camps, Kathakali shows, and Periyar Lake boat safaris make this a complete Kerala experience.',
        rating: 4.7,
        details: {
          timings: 'Sanctuary: 6:00 AM - 6:00 PM',
          entryFee: '₹35 per person (Sanctuary Entry)',
          distance: '145 km from Madurai',
          duration: '1 - 2 Days',
          transport: 'Private A/C Vehicle from Madurai',
          tips: 'Book boat safari tickets in advance online. Visit Kumily market for buying authentic fresh spices.',
          sections: [
            {
              title: 'About Thekkady',
              content: "Thekkady is synonymous with the Periyar Wildlife Sanctuary, one of India's most fascinating natural wildlife reserves. It is a haven for nature lovers and wildlife enthusiasts, known for its thick evergreen forests, savanna grasslands, and the scenic Periyar Lake right in the center of the park."
            },
            {
              title: 'History',
              content: "The Periyar Lake, a core feature of the sanctuary, is entirely artificial. It was formed by the construction of the Mullaperiyar Dam in 1895 across the Periyar River by the British engineer John Pennycuick. The area was declared a sanctuary in 1950 and became a designated Tiger Reserve in 1978 under Project Tiger."
            },
            {
              title: 'Timings and Rates',
              content: "Periyar National Park Entry: 6:00 AM - 6:00 PM. Entry Fee: ₹35 for Indians, ₹500 for Foreigners. KTDC Boat Safari Timings: 7:30 AM, 9:30 AM, 11:15 AM, 1:45 PM, 3:30 PM. Boat Ticket: ₹250 approx (advance online booking highly recommended). Elephant Safari: Around ₹500 - ₹1500."
            },
            {
              title: 'Other Details',
              content: "Unlike many other national parks in India, wildlife viewing in Periyar is done primarily from a boat. Thekkady is also surrounded by fragrant spice plantations (cardamom, pepper, cinnamon). Evening cultural shows featuring traditional Kathakali dance and Kalaripayattu martial arts are highly recommended."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'vagamon',
        name: 'Vagamon',
        type: 'Hill Station',
        image: '/assets/bharath/vagamon.png',
        description: 'A hidden gem in Kerala\'s Western Ghats, Vagamon is known for its rolling meadows, pine forests, tea gardens, waterfalls and paragliding opportunities. Perfect for a quiet, peaceful retreat.',
        rating: 4.6,
        details: {
          timings: 'Open all day',
          entryFee: 'No entry fee',
          distance: '170 km from Madurai',
          duration: '1 - 2 Days',
          transport: 'Private A/C Vehicle from Madurai',
          tips: 'Best time to visit is September to March. Paragliding season is from October to March.',
          sections: [
            {
              title: 'About Vagamon',
              content: "Vagamon (or Wagamon) is a tranquil, off-beat hill station hidden away in the Idukki district. Untouched by heavy commercialization, it is known for its lush green rolling meadows, mystical pine forests, cascading waterfalls, and misty valleys, making it an ideal destination for nature lovers seeking peace."
            },
            {
              title: 'History',
              content: "Vagamon was discovered and developed by the British who found the cool climate and fertile terrain ideal for tea plantations. Later, in the mid-20th century, Christian missionaries established the Kurisumala Ashram here, adding to its spiritual and peaceful aura."
            },
            {
              title: 'Timings and Rates',
              content: "Pine Forest & Vagamon Meadows: 8:30 AM - 5:30 PM. Entry Fee: ₹10 - ₹20. Kurisumala Ashram: Open for visitors during daytime. Adventure Sports: Paragliding costs vary between ₹3,500 to ₹5,000 per tandem flight depending on the operator."
            },
            {
              title: 'Other Details',
              content: "Vagamon is a major hub for adventure sports in South India, hosting an International Paragliding Festival annually. The region is famous for its religious harmony, symbolized by three prominent hills: Thangal Hill (Muslim), Murugan Hill (Hindu), and Kurisumala (Christian)."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'valparai',
        name: 'Valparai',
        type: 'Hill Station',
        image: '/assets/bharath/valparai.png',
        description: 'A scenic hill station on the border of Tamil Nadu and Kerala, Valparai is famous for its lush tea and coffee plantations, the spectacular 40-hairpin bend road, Aliyar Dam, Monkey Falls, and rare wildlife.',
        rating: 4.6,
        details: {
          timings: 'Open all day',
          entryFee: 'No entry fee',
          distance: '170 km from Madurai via Pollachi',
          duration: '1 - 2 Days',
          transport: 'Private A/C Vehicle from Madurai',
          tips: 'The 40-hairpin bends drive is an experience in itself. Watch out for Lion-Tailed Macaques.',
          sections: [
            {
              title: 'About Valparai',
              content: "Though geographically situated in the Coimbatore district of Tamil Nadu, Valparai is culturally and touristically tied closely to the Kerala-Tamil Nadu border ecosystem. It is an unpolluted and pristine hill station enveloped in lush green tea estates, coffee plantations, and dense forest patches of the Anamalai Tiger Reserve."
            },
            {
              title: 'History',
              content: "Tea planting in Valparai was introduced by Ramasamy Mudaliyar and British planters, notably W. Wintil and Congreve, in the late 19th century. Over the decades, the thick jungles were systematically converted into one of South India's largest and most productive tea and coffee planting hubs."
            },
            {
              title: 'Timings and Rates',
              content: "Aliyar Dam (en route): 9:00 AM - 6:00 PM, Entry: ₹20. Monkey Falls (en route): 9:00 AM - 5:00 PM, Entry: ₹30. Sholayar Dam: Open during daylight hours. No specific entry fee for the town itself."
            },
            {
              title: 'Other Details',
              content: "The journey to Valparai from Pollachi involves navigating 40 spectacular, tightly-wound hairpin bends offering stunning views of the plains below. The region is highly biodiverse, known for sightings of the rare Lion-tailed Macaque, Great Hornbill, elephants, and leopards."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'kumarakom',
        name: 'Kumarakom',
        type: 'Backwaters',
        image: '/assets/bharath/kumarakom.png',
        description: 'Situated on the shores of Vembanad Lake, Kumarakom is one of Kerala\'s most tranquil backwater destinations. Famous for its bird sanctuary, houseboat cruises, and lush coconut lagoons.',
        rating: 4.8,
        details: {
          timings: 'Bird Sanctuary: 6:00 AM - 6:00 PM',
          entryFee: 'Bird Sanctuary: ₹25 per person',
          distance: '180 km from Madurai',
          duration: '1 - 2 Days',
          transport: 'Private A/C Vehicle from Madurai',
          tips: 'Early morning is best for bird watching. Sunset over Vembanad Lake is breathtaking.',
          sections: [
            {
              title: 'About Kumarakom',
              content: "Set on the eastern banks of Vembanad Lake—the largest freshwater lake in Kerala—Kumarakom is a spectacular cluster of little islands. It is a premier backwater destination renowned for its luxury resorts, tranquil canals, mangrove forests, and paddy fields."
            },
            {
              title: 'History',
              content: "The area was once a massive, impenetrable mangrove forest. In the late 19th century, an English farmer named Alfred George Baker reclaimed a large tract of land from the lake, planted mangroves to prevent soil erosion, and laid the foundation for the region's agricultural and tourism development."
            },
            {
              title: 'Timings and Rates',
              content: "Kumarakom Bird Sanctuary: 6:00 AM - 5:00 PM. Entry Fee: ₹50 for Indians, ₹100 for Foreigners, Guide Fee extra. Houseboat rentals are similar to Alleppey, ranging from ₹7,000 to ₹18,000+ per night depending on luxury and capacity."
            },
            {
              title: 'Other Details',
              content: "The Kumarakom Bird Sanctuary is a favorite haunt of migratory birds like the Siberian Stork, egrets, darters, herons, and teals. It is best visited between November and February. The backwaters here are wider and feel more like a vast lake compared to the narrow canals of Alleppey."
            }
          ],
          popularPackages: []
        }
      },
      {
        id: 'marayoor',
        name: 'Marayoor',
        type: 'Nature',
        image: '/assets/bharath/Marayoor.png',
        description: 'A unique destination near Munnar, Marayoor is home to India\'s only natural sandalwood forests, ancient stone-age dolmens (Muniyara), sugarcane fields, jaggery production, and the scenic Lakkam Waterfalls.',
        rating: 4.5,
        details: {
          timings: 'Open all day',
          entryFee: 'No entry fee',
          distance: '160 km from Madurai via Bodimettu',
          duration: '1 Day',
          transport: 'Private A/C Vehicle from Madurai',
          tips: 'Try fresh Marayoor jaggery — it\'s famous across India. Visit Lakkam Falls only during monsoon season.',
          sections: [
            {
              title: 'About Marayoor',
              content: "Located about 40 kilometers from Munnar, Marayoor is a unique destination enveloped in the rain-shadow region of the Western Ghats. It is distinct for its pristine natural sandalwood forests, sprawling sugarcane farms, and historical importance, offering a stark contrast to the tea gardens of Munnar."
            },
            {
              title: 'History',
              content: "Marayoor boasts a rich heritage that dates back to the Stone Age. The megalithic Dolmens (Muniyaras) found here belong to the Iron Age and were used as burial chambers. The region is also deeply tied to the epic Mahabharata, as it is believed the Pandavas stayed here during their exile."
            },
            {
              title: 'Timings and Rates',
              content: "Chinnar Wildlife Sanctuary (nearby): 8:00 AM - 5:00 PM (Entry approx ₹100, Trekking fees extra). Lakkam Waterfalls: 8:00 AM - 5:00 PM, Entry ₹20. Muniyara Dolmens: Open all day, no entry fee."
            },
            {
              title: 'Other Details',
              content: "Marayoor is the only place in Kerala that naturally grows sandalwood trees, which are heavily guarded by the forest department. The local Marayoor Jaggery (Sharkara) is famous across India for its high quality, unique taste, and dark color, holding a prestigious Geographical Indication (GI) tag."
            }
          ],
          popularPackages: []
        }
      }
    ],
    popularPackages: []
  }
,
  'shirdi-tours': {
    id: 'shirdi-tours',
    name: 'Shirdi',
    state: 'Maharashtra',
    image: '/assets/maharashtra2.avif',
    overview: { title: 'Shirdi Darshan', description: 'Experience the divine presence of Sai Baba.' },
    history: { title: 'History', description: 'Home of the great saint Sai Baba.' },
    info: { idealDuration: '2 Days', nearestCity: 'Pune', bestTime: 'All Year', peakSeason: 'Oct - March', weather: 'Moderate', internet: 'Good', stdCode: '02423', languages: 'Marathi, Hindi, English', festivals: 'Ram Navami, Guru Purnima, Vijayadashami', tips: 'Dress modestly.' },
    places: [],
    popularPackages: []
  },
  'varanasi-tours': {
    id: 'varanasi-tours',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    image: '/assets/Uttar%20Pradesh1.avif',
    overview: { title: 'Spiritual Varanasi', description: 'The oldest living city in the world.' },
    history: { title: 'History', description: 'City of Lord Shiva.' },
    info: { idealDuration: '3 Days', nearestCity: 'Lucknow', bestTime: 'Oct - March', peakSeason: 'Nov - Feb', weather: 'Hot Summers, Cool Winters', internet: 'Good', stdCode: '0542', languages: 'Hindi, English', festivals: 'Diwali, Dev Deepawali, Maha Shivaratri', tips: 'Take a boat ride at sunrise.' },
    places: [],
    popularPackages: []
  },
  'golden-triangle-tours': {
    id: 'golden-triangle-tours',
    name: 'Golden Triangle',
    state: 'Delhi, Agra, Jaipur',
    image: '/assets/dehli/dehli.avif',
    overview: { title: 'Golden Triangle', description: 'Explore the majestic heritage of India.' },
    history: { title: 'History', description: 'Rich history of Mughals and Rajputs.' },
    info: { idealDuration: '6 Days', nearestCity: 'Delhi', bestTime: 'Oct - March', peakSeason: 'Dec - Jan', weather: 'Varies', internet: 'Excellent', stdCode: '011', languages: 'Hindi, English', festivals: 'Diwali, Holi', tips: 'Carry comfortable walking shoes.' },
    places: [],
    popularPackages: []
  }
};