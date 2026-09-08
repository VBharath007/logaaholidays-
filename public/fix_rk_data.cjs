const fs = require('fs');

const fileContent = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const rameshwaramStartIndex = fileContent.indexOf("  'rameshwaram-tourism': {");
const kanyakumariStartIndex = fileContent.indexOf("  'kanyakumari-tourism': {");
const maduraiStartIndex = fileContent.indexOf("  'madurai-tourism': {");

if (rameshwaramStartIndex === -1 || kanyakumariStartIndex === -1 || maduraiStartIndex === -1) {
  console.log('Could not find boundaries');
  process.exit(1);
}

const newRameshwaramAndKanyakumari = `  'rameshwaram-tourism': {
    id: 'rameshwaram-tourism',
    name: 'Rameshwaram',
    image: 'https://images.unsplash.com/photo-1627885065099-07525381a179?auto=format&fit=crop&q=80&w=1600',
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
        image: 'https://images.unsplash.com/photo-1627885065099-07525381a179?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1598379417855-0810ffeb334a?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1601058269757-19069d82cbcc?auto=format&fit=crop&q=80&w=800',
        description: 'This temple is highly revered as it is believed that Lord Hanuman revealed his five-faced form here. It also houses the floating stones used to build the Ram Setu.',
        rating: 4.5,
        details: {
          timings: '6:00 AM - 12:00 PM and 4:00 PM - 8:00 PM',
          entryFee: 'No fee',
          distance: '2 kilometer from Ramanathaswamy Temple',
          duration: '30 Mins - 1 Hour',
          transport: 'Auto Rickshaw, Walking',
          tips: 'The temple is small but significant. Don\\'t miss the exhibit of the floating stones used in the Ram Setu.',
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
        image: 'https://images.unsplash.com/photo-1582294101967-df50f3b46973?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1610486337180-8772a4b8eb7c?auto=format&fit=crop&q=80&w=1600',
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
        image: 'https://images.unsplash.com/photo-1610486337180-8772a4b8eb7c?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1598379417855-0810ffeb334a?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1610486337180-8772a4b8eb7c?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1582294101967-df50f3b46973?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1601058269757-19069d82cbcc?auto=format&fit=crop&q=80&w=800',
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
  }`;

const updatedContent = fileContent.substring(0, rameshwaramStartIndex) + newRameshwaramAndKanyakumari + '\n' + fileContent.substring(maduraiStartIndex);

fs.writeFileSync('src/data/destinationsData.ts', updatedContent, 'utf8');
console.log('Successfully updated Rameshwaram and Kanyakumari');
