const fs = require('fs');

const fileContent = fs.readFileSync('src/data/destinationsData.ts', 'utf8');

const kovalamStartIndex = fileContent.indexOf("  'kovalam-tourism': {");
const rameshwaramStartIndex = fileContent.indexOf("  'rameshwaram-tourism': {");

if (kovalamStartIndex === -1 || rameshwaramStartIndex === -1) {
  console.log('Could not find boundaries');
  process.exit(1);
}

const newKovalamAndTrivandrum = `  'kovalam-tourism': {
    id: 'kovalam-tourism',
    name: 'Kovalam',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=1600',
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
        image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1544287757-a8ab80d1a4c4?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1634033036830-1c322b67f10b?auto=format&fit=crop&q=80&w=1600',
    state: 'Kerala',
    overview: {
      title: 'Trivandrum Tourism',
      description: 'Thiruvananthapuram (Trivandrum) is the capital of Kerala, distinguished by its British colonial architecture and many art galleries. It is built on seven hills and is a major IT and educational hub in South India.'
    },
    history: {
      title: 'Trivandrum History',
      description: 'The city was the capital of the Travancore kingdom from 1795 until India\\'s independence. King Marthanda Varma made Thiruvananthapuram the capital after shifting it from Padmanabhapuram.'
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
        image: 'https://images.unsplash.com/photo-1634033036830-1c322b67f10b?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1598379417855-0810ffeb334a?auto=format&fit=crop&q=80&w=800',
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
`;

const updatedContent = fileContent.substring(0, kovalamStartIndex) + newKovalamAndTrivandrum + fileContent.substring(rameshwaramStartIndex);

fs.writeFileSync('src/data/destinationsData.ts', updatedContent, 'utf8');
console.log('Successfully updated Kovalam and Trivandrum');
