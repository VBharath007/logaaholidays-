const fs = require('fs');

let c = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const oldText = `  '45': {
    id: '45',
    title: 'Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666cb2?auto=format&fit=crop&q=80&w=1600',
    overview: { duration: '4 Nights / 5 Days', destination: 'Chidambaram, Thanjavur, Kanchipuram', activities: 'Sightseeing', themes: 'Culture & Heritage' },
    priceDetails: { label: 'Starts @', amount: 'Rs. 15500/-', status: 'On Request' },
    itinerary: [{ day: 'Day 1', title: 'Arrival', description: 'Arrival and transfer to hotel.' }, { day: 'Day 2-5', title: 'Sightseeing', description: 'Guided tours as per itinerary.' }],
    inclusions: ['Hotel', 'Transportation by A/C Bus/Cab.', 'Buffet Breakfast', 'All sightseeing as per the itinerary.'],
    exclusions: ['Personal Expenses'],
    policies: { payment: '20% Advance Percentage', cancellation: 'Standard cancellation applies.' }
  },`;

const newText = `  '45': {
    id: '45',
    title: 'Chidambaram, Thanjavur & Kanchipuram Package for 5 days from Chennai',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666cb2?auto=format&fit=crop&q=80&w=1600',
    overview: { duration: '4 Nights / 5 Days', destination: 'Chidambaram, Thanjavur, Kanchipuram', activities: 'Sightseeing', themes: 'Culture & Heritage', transport: 'Private Cab' },
    priceDetails: { label: 'Starts @', amount: 'Rs. 15500/-', status: 'On Request' },
    itinerary: [
      {
        day: 'Day 1',
        title: 'Pickup from Chennai - Drive to Chidambaram sightseeing',
        description: 'Pickup at 8 AM from Chennai. Drive to Chidambaram.\\n\\nPlaces to visit:\\n• Nataraja Temple Chidambaram\\n• Pichavaram Mangrove Forest\\n\\nOvernight stay in Sirkazhi/Chidambaram.'
      },
      {
        day: 'Day 2',
        title: 'Chidambaram to Thanjavur sightseeing & reach Madurai',
        description: 'Start at 9 AM. Proceed for sightseeing in Thanjavur and then drive to Madurai.\\n\\nPlaces to visit:\\n• Brihadeeswarar temple\\n• Thanjavur Palace\\n• Thanjavur Art Gallery\\n• Thiruvaiyaru\\n\\nOvernight stay in Madurai.'
      },
      {
        day: 'Day 3',
        title: 'Madurai sightseeing & reach Trichy',
        description: 'Start at 9 AM. Complete Madurai sightseeing and then drive to Trichy.\\n\\nPlaces to visit:\\n• Koodal Alagar temple\\n• Madurai Meenakshi Amman temple\\n• Thirumalai Nayak Mahal\\n• Vandiyur Mariamman Teppakulam\\n\\nOvernight stay in Trichy.'
      },
      {
        day: 'Day 4',
        title: 'Trichy sightseeing & reach Kanchipuram',
        description: 'Start at 9 AM. Trichy sightseeing and then drive to Kanchipuram.\\n\\nPlaces to visit:\\n• Ranganathaswamy Temple Srirangam\\n• Thiruvanaikoil temple\\n\\nOvernight stay in Kanchipuram.'
      },
      {
        day: 'Day 5',
        title: 'Kanchipuram sightseeing & Drop to Chennai',
        description: 'Start at 9 AM. Kanchipuram sightseeing and later drop at Chennai.\\n\\nPlaces to visit:\\n• Ekambareswarar Temple\\n• Athi Varadhar Temple\\n• Sri Kanchi Kamakshi Amman Temple\\n\\nDrop at Chennai.'
      }
    ],
    inclusions: [
      'Selected AC vehicle for pick up & drop and sightseeing',
      'Complimentary breakfast at selected hotel',
      'Selected category hotel for accommodation',
      'All the sightseeing will be on a private basis in AC vehicle',
      'Entry tax, Toll, Parking charges, Driver allowance, Interstate tax if applicable',
      'Total price includes GST'
    ],
    exclusions: [
      'Meals other than mentioned (Lunch & Dinner) and any beverages',
      'Local guide, Entrance fees to monuments, sight-seeing, parks and Sanctuaries and Safari charges',
      'Items of personal nature viz. tips, laundry, travel insurance, camera fees, etc.',
      'Early check-in or late checkout charges if applicable',
      'Hotel Gala dinner charges in the event of Christmas and New year eve',
      'Anything not specifically mentioned in the inclusion section'
    ],
    policies: { payment: 'No Down Payment, No Cost EMI on 3/6 months tenure available.', cancellation: 'Standard cancellation applies.' }
  },`;

c = c.replace(oldText, newText);

fs.writeFileSync('src/pages/PackageDetails.tsx', c);
console.log('Package 45 replaced!');
