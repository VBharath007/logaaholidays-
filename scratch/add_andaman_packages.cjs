const fs = require('fs');

const andamanPackages = {
  "6001": {
    "id": "6001",
    "title": "Andaman Island Tour Package – 7 Nights / 8 Days",
    "slug": "andaman-island-tour-package-7-nights-8-days",
    "image": "/assets/andaman_hero.png",
    "overview": {
        "title": "Tour Overview",
        "description": "Explore the beautiful beaches, coral islands, historic landmarks and tropical landscapes of the Andaman Islands with this carefully planned 7 Nights / 8 Days tour package.\nThe journey begins in Port Blair with visits to Corbyn’s Cove Beach and the historic Cellular Jail. Continue to Ross Island and North Bay Island before travelling by ferry to Havelock Island, famous for Radhanagar Beach and Elephanta Beach.\nThe tour then proceeds to Neil Island, where guests can explore Bharatpur Beach, Laxmanpur Beach and the Natural Rock Formation. The final part of the holiday includes an excursion to Baratang Island and its famous limestone caves.\nThis package is suitable for families, couples, honeymoon travellers, senior citizens and small groups looking for a complete Andaman holiday.",
        "duration": "7 Nights / 8 Days",
        "destination": "Andaman"
    },
    "seo": {
        "title": "Andaman Tour Package 7 Nights 8 Days | Port Blair Havelock Neil",
        "description": "Book a 7 Nights 8 Days Andaman tour package covering Port Blair, Havelock Island, Neil Island, Ross Island, North Bay, Elephanta Beach and Baratang with hotels, ferry tickets and private transfers.",
        "keywords": "Andaman tour package 7 nights 8 days, Port Blair Havelock Neil Island package, Andaman family tour package, Andaman honeymoon package, Havelock Neil Island tour, Andaman package from Madurai, Andaman package from Chennai, Baratang limestone cave tour, Elephanta Beach package, Radhanagar Beach tour, Andaman ferry package, Logaa Holidays Andaman tour"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Port Blair Arrival – Corbyn’s Cove – Cellular Jail",
            "activities": [
                "Upon arrival at Veer Savarkar International Airport, Port Blair, our representative will welcome you and assist with the transfer to your hotel.",
                "Complete the check-in formalities and relax.",
                "Later, proceed for Port Blair sightseeing.",
                "Visit Corbyn’s Cove Beach, one of the popular beaches located close to Port Blair.",
                "Continue to Cellular Jail, an important national memorial associated with India’s freedom struggle.",
                "In the evening, attend the Light and Sound Show, subject to ticket availability and operating schedule.",
                "Return to the hotel. Overnight stay in Port Blair.",
                "Important Note: Vehicles are allowed only up to the designated parking area near Cellular Jail. Guests may need to walk approximately 200 metres to reach the entrance."
            ]
        },
        {
            "day": "Day 2",
            "title": "Ross Island and North Bay Island Tour",
            "activities": [
                "After breakfast, proceed to the water sports complex for the island excursion.",
                "Explore the ruins, gardens and historic remains of Netaji Subhas Chandra Bose Island (formerly Ross Island).",
                "Continue to North Bay Island, known for its coral ecosystem and optional water activities.",
                "Optional Water Activities: Scuba diving, Snorkelling, Glass-bottom boat ride, Sea walking, Other permitted activities.",
                "All water activities are subject to weather, sea conditions, availability and additional charges.",
                "Return to Port Blair after the excursion. Overnight stay in Port Blair."
            ]
        },
        {
            "day": "Day 3",
            "title": "Port Blair to Havelock Island – Radhanagar Beach",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel by scheduled ferry to Swaraj Dweep, popularly known as Havelock Island.",
                "Upon arrival, meet our local representative and transfer to the hotel.",
                "Later, proceed to Radhanagar Beach, one of the most popular beaches in the Andaman Islands.",
                "Enjoy leisure time, beach walks and sunset views, subject to weather conditions.",
                "A complimentary photoshoot may be arranged at Radhanagar Beach as per the selected package.",
                "Return to the hotel. Overnight stay in Havelock Island.",
                "Ferry Note: Ferry tickets are subject to availability. Sightseeing schedules may be adjusted according to ferry timings."
            ]
        },
        {
            "day": "Day 4",
            "title": "Havelock Island – Elephanta Beach",
            "activities": [
                "After breakfast, proceed to Elephanta Beach by shared boat, subject to operation.",
                "Elephanta Beach is known for its clear water, coral areas and optional water activities.",
                "Suggested Activities: Complimentary basic snorkelling (if provided by the boat association), Glass-bottom boat ride, Scuba diving, Sea walking, Underwater photography, Other permitted water sports.",
                "Optional activities must be paid directly and are subject to weather and sea conditions.",
                "Return to Havelock Island after the excursion. Overnight stay in Havelock Island."
            ]
        },
        {
            "day": "Day 5",
            "title": "Havelock Island to Neil Island",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel to Shaheed Dweep, popularly known as Neil Island.",
                "Upon arrival, meet our local representative and transfer to the hotel.",
                "Proceed for Neil Island sightseeing.",
                "Bharatpur Beach is known for its shallow waters and optional activities such as snorkelling and glass-bottom boat rides.",
                "Later, visit Laxmanpur Beach and enjoy the sunset, subject to weather conditions.",
                "Return to the hotel. Overnight stay in Neil Island.",
                "Ferry Note: Ferry timings and sightseeing schedules are subject to ticket availability and operational conditions."
            ]
        },
        {
            "day": "Day 6",
            "title": "Neil Island – Natural Rock Formation – Port Blair",
            "activities": [
                "After breakfast, check out from the hotel.",
                "Proceed to visit the Natural Rock Formation, popularly called the Natural Bridge.",
                "The visit is subject to tide timings, local access and weather conditions.",
                "Later, transfer to the ferry terminal and travel back to Port Blair.",
                "Upon arrival, transfer to the hotel and relax. Overnight stay in Port Blair."
            ]
        },
        {
            "day": "Day 7",
            "title": "Port Blair – Baratang Limestone Caves – Port Blair",
            "activities": [
                "Depart early in the morning for Baratang Island.",
                "The journey includes road travel through designated forest areas and convoy-controlled routes.",
                "Upon arrival, continue towards the limestone caves by permitted local transport and boat.",
                "Places to Visit: Baratang Island, Mangrove boat route, Limestone Caves.",
                "Guests may need to walk approximately 1.5 to 2 kilometres through uneven forest pathways to reach the limestone caves.",
                "After sightseeing, return to Port Blair. Overnight stay in Port Blair.",
                "Important Baratang Note: Departure may be scheduled around 4:00 AM or 6:00 AM depending on convoy timings. Guests must be ready on time to avoid missing the convoy."
            ]
        },
        {
            "day": "Day 8",
            "title": "Port Blair Departure",
            "activities": [
                "After breakfast, check out from the hotel.",
                "Transfer to Veer Savarkar International Airport for your return journey.",
                "The tour concludes with beautiful memories of Port Blair, Havelock Island, Neil Island and Baratang."
            ]
        }
    ],
    "highlights": [
        "Visit Corbyn’s Cove Beach",
        "Explore the historic Cellular Jail",
        "Attend the Light and Sound Show",
        "Visit Netaji Subhas Chandra Bose Island",
        "Explore North Bay Island",
        "Travel by premium inter-island ferry",
        "Relax at Radhanagar Beach",
        "Visit Elephanta Beach",
        "Explore Bharatpur and Laxmanpur beaches",
        "Visit the Natural Rock Formation at Neil Island",
        "Excursion to Baratang Limestone Caves",
        "Complimentary photoshoot at Radhanagar Beach",
        "Private point-to-point air-conditioned transfers"
    ],
    "inclusions": [
        "Airport pickup and drop at Port Blair",
        "Four nights hotel accommodation in Port Blair",
        "Two nights hotel accommodation in Havelock Island",
        "One night hotel accommodation in Neil Island",
        "Accommodation in the selected room category",
        "Meal plan as mentioned in the final quotation",
        "Inter-island ferry transfers",
        "Ferry class subject to availability (Green Ocean, Makruzz, Nautika, ITT Majestic or similar ferry)",
        "Entry tickets for sightseeing mentioned in the confirmed itinerary",
        "Boat tickets for included island excursions",
        "Private air-conditioned point-to-point vehicle",
        "Transfers and sightseeing as mentioned in the itinerary",
        "Complimentary photoshoot at Radhanagar Beach, where included",
        "Assistance from Logaa Holidays and local tour coordinators"
    ],
    "exclusions": [
        "Flight tickets",
        "Train or bus fares to the departure airport",
        "Lunch and dinner unless specifically included",
        "Camera and video charges",
        "Porterage",
        "Travel insurance",
        "Tips and gratuities",
        "Guide charges",
        "Mineral water and beverages",
        "Alcoholic and non-alcoholic drinks",
        "Room service and special food orders",
        "Water sports and adventure activities",
        "Scuba diving",
        "Sea walking",
        "Glass-bottom boat rides",
        "Additional snorkelling",
        "Underwater photography",
        "Extra vehicle usage",
        "Vehicle disposal charges",
        "Additional sightseeing not mentioned in the itinerary",
        "Expenses caused by flight or ferry cancellation",
        "Expenses caused by weather, sea conditions, strikes or local restrictions",
        "Medical and emergency expenses",
        "Any increase in government taxes, ferry charges or fuel prices before departure",
        "Anything not specifically mentioned under package inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },
  "6002": {
    "id": "6002",
    "title": "Popular Andaman Package – 5 Nights / 6 Days",
    "slug": "andaman-tour-package-5-nights-6-days",
    "image": "/assets/andaman_hero.png",
    "overview": {
        "title": "Tour Overview",
        "description": "Explore the historic attractions, tropical beaches, coral islands and clear blue waters of Andaman with this carefully planned 5 Nights / 6 Days tour package.\nThe journey begins in Port Blair with visits to Corbyn’s Cove Beach, Cellular Jail and the Light and Sound Show. Guests will also enjoy a full-day excursion to Netaji Subhas Chandra Bose Island and North Bay Island.\nThe tour then continues to Havelock Island, officially known as Swaraj Dweep, where travellers can relax at Radhanagar Beach and visit Elephanta Beach for optional water activities.\nThis package is ideal for families, couples, honeymoon travellers, senior citizens and small groups looking for a comfortable Andaman holiday.",
        "duration": "5 Nights / 6 Days",
        "destination": "Andaman"
    },
    "seo": {
        "title": "Andaman Tour Package 5 Nights 6 Days | Port Blair Havelock",
        "description": "Book a 5 Nights 6 Days Andaman tour package covering Port Blair, Ross Island, North Bay, Havelock Island, Radhanagar Beach and Elephanta Beach with hotels, ferry tickets and transfers.",
        "keywords": "Andaman tour package 5 nights 6 days, Port Blair Havelock package, Andaman family tour package, Andaman honeymoon package, Port Blair North Bay Havelock tour, Radhanagar Beach package, Elephanta Beach tour, Andaman package from Madurai, Andaman package from Chennai, Andaman ferry package, Logaa Holidays Andaman tour"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Port Blair Arrival – Corbyn’s Cove – Cellular Jail",
            "activities": [
                "Upon arrival at Veer Savarkar International Airport, Port Blair, our representative will welcome you and assist with the transfer to your hotel.",
                "Complete the check-in formalities and relax.",
                "Later, proceed for Port Blair sightseeing.",
                "Begin with Corbyn’s Cove Beach, a popular seaside attraction located close to Port Blair.",
                "Continue to Cellular Jail, an important national memorial associated with India’s freedom struggle.",
                "In the evening, attend the Light and Sound Show, subject to ticket availability and the official operating schedule.",
                "Return to the hotel. Overnight stay in Port Blair.",
                "Important Note: The vehicle will drop guests at the designated parking area near Cellular Jail. Guests may need to walk approximately 200 metres to reach the entrance."
            ]
        },
        {
            "day": "Day 2",
            "title": "Ross Island and North Bay Island Excursion",
            "activities": [
                "After breakfast, proceed to the water sports complex for the island excursion.",
                "Explore the historic ruins and natural surroundings of Netaji Subhas Chandra Bose Island, formerly Ross Island.",
                "Continue to North Bay Island, known for its coral areas and optional water-based activities.",
                "Optional Water Activities: Scuba diving, Snorkelling, Glass-bottom boat ride, Sea walking, Underwater photography, Other permitted activities.",
                "All optional activities are subject to weather, sea conditions, availability and additional charges.",
                "Return to Port Blair after the excursion. Overnight stay in Port Blair."
            ]
        },
        {
            "day": "Day 3",
            "title": "Port Blair to Havelock Island – Radhanagar Beach",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel by scheduled ferry to Swaraj Dweep, popularly known as Havelock Island.",
                "Upon arrival, meet our local representative and transfer to the hotel.",
                "Later, proceed to Radhanagar Beach, also known as Beach No. 7.",
                "Enjoy leisure time, beach walks, photography and sunset views, subject to weather conditions.",
                "A one-time complimentary photoshoot may be arranged at Radhanagar Beach as per the confirmed package.",
                "Return to the hotel. Overnight stay in Havelock Island.",
                "Ferry Note: Ferry tickets are subject to availability. The sightseeing schedule may be adjusted according to ferry timings."
            ]
        },
        {
            "day": "Day 4",
            "title": "Havelock Island – Elephanta Beach",
            "activities": [
                "After breakfast, proceed to Elephanta Beach by shared boat, subject to operation.",
                "Elephanta Beach is known for its clear water, coral areas and optional adventure activities.",
                "Suggested Activities: Basic snorkelling (if offered by the boat association), Scuba diving, Sea walking, Glass-bottom boat ride, Underwater photography, Other permitted water activities.",
                "Complimentary snorkelling, when available, is provided by the local boat association and is subject to weather, sea conditions and operational rules.",
                "Return to Havelock Island after the excursion. Overnight stay in Havelock Island."
            ]
        },
        {
            "day": "Day 5",
            "title": "Havelock Island to Port Blair",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel back to Port Blair by scheduled ferry.",
                "Upon arrival, meet our representative and transfer to the hotel.",
                "The remaining time is available for leisure or optional shopping.",
                "Optional Activities: Aberdeen Bazaar, Sagarika Emporium, Marina Park, Local handicraft shopping, Additional Port Blair sightseeing (subject to arrival time).",
                "Return to the hotel. Overnight stay in Port Blair.",
                "Ferry Note: Ferry tickets are subject to availability. Transfers and sightseeing will be arranged according to the confirmed ferry schedule."
            ]
        },
        {
            "day": "Day 6",
            "title": "Port Blair Departure",
            "activities": [
                "After breakfast, check out from the hotel.",
                "Transfer to Veer Savarkar International Airport for your return journey.",
                "The tour concludes with memorable experiences of Port Blair, North Bay Island and Havelock Island."
            ]
        }
    ],
    "highlights": [
        "Visit Corbyn’s Cove Beach",
        "Explore the historic Cellular Jail",
        "Attend the Light and Sound Show",
        "Visit Netaji Subhas Chandra Bose Island",
        "Explore North Bay Island",
        "Optional scuba diving and snorkelling",
        "Travel by premium inter-island ferry",
        "Relax at Radhanagar Beach",
        "Visit Elephanta Beach",
        "Complimentary photoshoot at Radhanagar Beach",
        "Private point-to-point transfers"
    ],
    "inclusions": [
        "Pickup and drop at Port Blair Airport",
        "3 nights hotel accommodation in Port Blair",
        "2 nights hotel accommodation in Havelock Island",
        "Accommodation in the selected room category",
        "Meal plan as mentioned in the final quotation",
        "Inter-island ferry transfers",
        "Ferry class subject to ticket availability (Green Ocean, Makruzz, Nautika, ITT Majestic or similar ferry)",
        "Entry tickets for sightseeing mentioned in the confirmed itinerary",
        "Boat tickets for included island excursions",
        "Private air-conditioned point-to-point vehicle",
        "Transfers and sightseeing as per the itinerary",
        "One-time complimentary photoshoot at Radhanagar Beach, where confirmed",
        "Assistance from Logaa Holidays and local tour coordinators",
        "Rates applicable to Indian nationals unless otherwise mentioned"
    ],
    "exclusions": [
        "Flight tickets",
        "Train or bus fares to the departure airport",
        "Lunch and dinner unless specifically included",
        "Camera and video charges",
        "Porterage",
        "Travel insurance",
        "Tips and gratuities",
        "Guide charges",
        "Mineral water and beverages",
        "Alcoholic and non-alcoholic drinks",
        "Room service and special food orders",
        "Scuba diving",
        "Sea walking",
        "Glass-bottom boat rides",
        "Additional snorkelling",
        "Underwater photography",
        "Other water-sports charges",
        "Extra vehicle usage",
        "Vehicle disposal charges",
        "Additional sightseeing not mentioned in the itinerary",
        "Medical and emergency expenses",
        "Expenses caused by flight or ferry delays and cancellations",
        "Expenses arising due to weather, sea conditions, strikes or government restrictions",
        "Any increase in taxes, ferry charges or fuel prices before departure",
        "Anything not specifically mentioned under package inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  }
};

let content = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');

const marker = "export const packagesDatabase: Record<string, any> = {";
const markerIndex = content.indexOf(marker);

if (markerIndex !== -1) {
    let pString = "";
    for (let k in andamanPackages) {
        pString += '\n  "' + k + '": ' + JSON.stringify(andamanPackages[k], null, 4) + ",";
    }
    
    // insert right after the marker
    const insertIdx = markerIndex + marker.length;
    const before = content.slice(0, insertIdx);
    const after = content.slice(insertIdx);
    
    fs.writeFileSync('src/pages/PackageDetails.tsx', before + pString + after, 'utf8');
    console.log("Successfully added Andaman packages!");
} else {
    console.log("Could not find packagesDatabase marker.");
}
