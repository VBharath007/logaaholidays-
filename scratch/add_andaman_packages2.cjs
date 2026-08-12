const fs = require('fs');

const andamanPackages = {
  "6003": {
    "id": "6003",
    "title": "Budget Andaman Package – 3 Nights / 4 Days",
    "slug": "andaman-tour-package-3-nights-4-days",
    "image": "/assets/andaman_hero.png",
    "overview": {
        "title": "Tour Overview",
        "description": "Enjoy a short and memorable island holiday with this 3 Nights / 4 Days Andaman Tour Package covering Port Blair and Havelock Island.\nThe journey begins in Port Blair with visits to Corbyn’s Cove Beach, the historic Cellular Jail and the popular Light and Sound Show. Guests will then travel by premium inter-island ferry to Havelock Island and spend time at the beautiful Radhanagar Beach.\nThis compact package is suitable for couples, honeymoon travellers, families and guests looking for a quick Andaman holiday at an affordable price.",
        "duration": "3 Nights / 4 Days",
        "destination": "Andaman"
    },
    "seo": {
        "title": "Andaman Tour Package 3 Nights 4 Days | Port Blair Havelock",
        "description": "Book a 3 Nights 4 Days Andaman tour package covering Port Blair, Cellular Jail, Corbyn’s Cove Beach, Havelock Island and Radhanagar Beach with hotel, ferry tickets and private transfers.",
        "keywords": "Andaman tour package 3 nights 4 days, Port Blair Havelock package, Andaman budget package, Andaman honeymoon package, Andaman family tour package, Havelock Radhanagar Beach tour, Port Blair package from Madurai, Andaman package from Chennai, short Andaman holiday, Andaman ferry package, Logaa Holidays Andaman tour"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Port Blair Arrival – Corbyn’s Cove – Cellular Jail",
            "activities": [
                "Upon arrival at Veer Savarkar International Airport, Port Blair, our representative will welcome you and assist with the transfer to your hotel.",
                "Complete the check-in formalities and relax.",
                "Later, proceed for Port Blair sightseeing.",
                "Begin with Corbyn’s Cove Beach, a popular coastal attraction located close to Port Blair.",
                "Continue to Cellular Jail, an important national memorial associated with India’s freedom struggle.",
                "In the evening, attend the Light and Sound Show, subject to ticket availability and the official operating schedule.",
                "Return to the hotel. Overnight stay in Port Blair.",
                "Important Note: The vehicle will drop guests at the designated parking area near Cellular Jail. Guests may need to walk approximately 200 metres to reach the entrance."
            ]
        },
        {
            "day": "Day 2",
            "title": "Port Blair to Havelock Island – Radhanagar Beach",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel by scheduled premium ferry to Swaraj Dweep, popularly known as Havelock Island.",
                "Upon arrival, meet our local representative and transfer to the hotel.",
                "Later, proceed to Radhanagar Beach, also known as Beach No. 7.",
                "Guests can enjoy beach walks, photography, leisure time, and sunset views, subject to weather.",
                "Complimentary photoshoot, where included.",
                "Return to the hotel after the beach visit. Overnight stay in Havelock Island.",
                "Ferry Note: Ferry tickets are subject to availability. The sightseeing schedule may be adjusted according to the confirmed ferry timings."
            ]
        },
        {
            "day": "Day 3",
            "title": "Havelock Island to Port Blair – Shopping",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel back to Port Blair by scheduled ferry.",
                "Upon arrival, meet our representative and transfer to the hotel.",
                "Depending on the ferry arrival time, visit: Sagarika Government Emporium, Aberdeen Bazaar, Local handicraft shops, Marina Park (subject to available time).",
                "Guests may shop for shell-based decorative items, wooden handicrafts, coconut-shell products, local souvenirs, and Andaman-themed gifts.",
                "Return to the hotel. Overnight stay in Port Blair."
            ]
        },
        {
            "day": "Day 4",
            "title": "Port Blair Departure",
            "activities": [
                "After breakfast, check out from the hotel.",
                "Transfer to Veer Savarkar International Airport for your return journey.",
                "The tour concludes with beautiful memories of Port Blair, Cellular Jail and Havelock Island."
            ]
        }
    ],
    "highlights": [
        "Visit Corbyn’s Cove Beach",
        "Explore the historic Cellular Jail",
        "Attend the Light and Sound Show",
        "Travel by premium inter-island ferry",
        "Visit Havelock Island",
        "Relax at Radhanagar Beach",
        "Complimentary photoshoot at Radhanagar Beach",
        "Shopping at Sagarika Emporium",
        "Private point-to-point transfers"
    ],
    "inclusions": [
        "Pickup and drop at Port Blair Airport",
        "Two nights hotel accommodation in Port Blair",
        "One night hotel accommodation in Havelock Island",
        "Accommodation in the selected room category",
        "Meal plan as mentioned in the final quotation",
        "Inter-island ferry transfers",
        "Green Ocean, Makruzz, Nautika, ITT Majestic or similar ferry",
        "Ferry class subject to ticket availability",
        "Entry tickets for sightseeing mentioned in the confirmed itinerary",
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
        "Water sports and adventure activities",
        "Scuba diving",
        "Sea walking",
        "Snorkelling",
        "Glass-bottom boat rides",
        "Underwater photography",
        "Extra vehicle usage",
        "Vehicle disposal charges",
        "Additional sightseeing not mentioned in the itinerary",
        "Medical and emergency expenses",
        "Expenses caused by flight or ferry delays and cancellations",
        "Expenses arising from weather, sea conditions, strikes or government restrictions",
        "Any increase in taxes, ferry charges or fuel prices before departure",
        "Loss or damage to personal belongings",
        "Anything not specifically mentioned under package inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },
  "6004": {
    "id": "6004",
    "title": "Andaman Tour Package – 6 Nights / 7 Days",
    "slug": "andaman-tour-package-6-nights-7-days",
    "image": "/assets/andaman_hero.png",
    "overview": {
        "title": "Tour Overview",
        "description": "Discover the beaches, coral islands, historic landmarks and natural attractions of the Andaman Islands with this carefully planned 6 Nights / 7 Days tour package.\nThe journey begins in Port Blair with visits to Corbyn’s Cove Beach, Cellular Jail and the Light and Sound Show. Guests can also explore Netaji Subhas Chandra Bose Island and North Bay Island before travelling by ferry to Havelock Island.\nThe package continues to Neil Island, where travellers can visit Bharatpur Beach, Laxmanpur Beach and the famous Natural Rock Formation. The final part of the tour includes an excursion to Baratang Island and its limestone caves.\nThis package is suitable for families, couples, honeymoon travellers, small groups and guests looking for a complete Andaman holiday.",
        "duration": "6 Nights / 7 Days",
        "destination": "Andaman"
    },
    "seo": {
        "title": "Andaman Tour Package 6 Nights 7 Days | Havelock Neil Baratang",
        "description": "Book a 6 Nights 7 Days Andaman tour covering Port Blair, Havelock Island, Neil Island, Ross Island, North Bay and Baratang with hotels, ferries and private transfers.",
        "keywords": "Andaman tour package 6 nights 7 days, Port Blair Havelock Neil Island package, Andaman Baratang tour package, Andaman family package, Andaman honeymoon package, Havelock Neil Island tour, Baratang limestone caves package, Andaman package from Madurai, Andaman package from Chennai, Andaman ferry package, Logaa Holidays Andaman tour"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Port Blair Arrival – Corbyn’s Cove – Cellular Jail",
            "activities": [
                "Upon arrival at Veer Savarkar International Airport, Port Blair, our representative will welcome you and assist with the transfer to your hotel.",
                "Complete the check-in formalities and relax.",
                "Later, proceed for sightseeing.",
                "Begin with Corbyn’s Cove Beach, one of the popular beaches located near Port Blair.",
                "Continue to Cellular Jail, an important national memorial connected with India’s freedom struggle.",
                "In the evening, attend the Light and Sound Show, subject to ticket availability and official operating schedules.",
                "Return to the hotel. Overnight stay in Port Blair.",
                "Important Note: The vehicle will drop guests at the designated parking area near Cellular Jail. Guests may need to walk approximately 200 metres to reach the entrance."
            ]
        },
        {
            "day": "Day 2",
            "title": "Ross Island and North Bay Island Excursion",
            "activities": [
                "After breakfast, proceed to the water sports complex for the island excursion.",
                "Explore the historic ruins and scenic surroundings of Netaji Subhas Chandra Bose Island, formerly Ross Island.",
                "Continue to North Bay Island, known for coral viewing and optional water activities.",
                "Optional Activities: Scuba diving, Snorkelling, Glass-bottom boat ride, Sea walking, Underwater photography, Other permitted water sports.",
                "All optional activities are subject to weather, sea conditions, availability and additional charges.",
                "Return to Port Blair after the excursion. Overnight stay in Port Blair."
            ]
        },
        {
            "day": "Day 3",
            "title": "Port Blair to Havelock Island – Radhanagar Beach",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel by scheduled premium ferry to Swaraj Dweep, popularly known as Havelock Island.",
                "Upon arrival, meet our local representative and transfer to the hotel.",
                "Later, proceed to Radhanagar Beach, also known as Beach No. 7.",
                "Guests can enjoy beach walks, leisure time, photography, and sunset views, subject to weather.",
                "One-time complimentary photoshoot, where confirmed.",
                "Return to the hotel. Overnight stay in Havelock Island.",
                "Ferry Note: Ferry tickets are subject to availability. Sightseeing schedules may be adjusted according to the confirmed ferry timings."
            ]
        },
        {
            "day": "Day 4",
            "title": "Havelock Island – Neil Island – Bharatpur and Laxmanpur Beaches",
            "activities": [
                "After breakfast, check out from the hotel and proceed to the ferry terminal.",
                "Travel to Shaheed Dweep, popularly known as Neil Island.",
                "Upon arrival, meet our representative and transfer to the hotel.",
                "Proceed for Neil Island sightseeing.",
                "Bharatpur Beach is known for its shallow waters and optional activities such as snorkelling and glass-bottom boat rides.",
                "Later, visit Laxmanpur Beach and enjoy the sunset, subject to weather conditions.",
                "Return to the hotel. Overnight stay in Neil Island.",
                "Ferry Note: Ferry tickets and sightseeing schedules are subject to availability and operational timings."
            ]
        },
        {
            "day": "Day 5",
            "title": "Neil Island – Natural Rock Formation – Port Blair",
            "activities": [
                "After breakfast, check out from the hotel.",
                "Proceed to visit the Natural Rock Formation, popularly called the Natural Bridge.",
                "The visit is subject to tide timings, local access, weather and safety conditions.",
                "Later, transfer to the ferry terminal and travel back to Port Blair.",
                "Upon arrival, meet our representative and transfer to the hotel.",
                "Overnight stay in Port Blair."
            ]
        },
        {
            "day": "Day 6",
            "title": "Port Blair – Baratang Limestone Caves – Port Blair",
            "activities": [
                "Depart early in the morning for Baratang Island.",
                "The journey includes travel through designated forest areas and convoy-controlled routes.",
                "Upon arrival, continue by local boat and permitted transport towards the limestone caves.",
                "Places to Visit: Baratang Island, Mangrove boat route, Limestone Caves.",
                "Guests may need to walk approximately 1.5 to 2 kilometres through forest pathways and uneven terrain to reach the limestone caves.",
                "After completing the excursion, return to Port Blair. Overnight stay in Port Blair.",
                "Important Baratang Note: Departure may be scheduled around 4:00 AM or 6:00 AM depending on convoy timings and local instructions. Guests must be ready on time to avoid missing the convoy."
            ]
        },
        {
            "day": "Day 7",
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
        "Explore Cellular Jail",
        "Attend the Light and Sound Show",
        "Visit Netaji Subhas Chandra Bose Island",
        "Explore North Bay Island",
        "Optional scuba diving and snorkelling",
        "Travel by premium inter-island ferry",
        "Relax at Radhanagar Beach",
        "Visit Bharatpur and Laxmanpur beaches",
        "Explore the Natural Rock Formation at Neil Island",
        "Visit Baratang Limestone Caves",
        "Complimentary photoshoot at Radhanagar Beach",
        "Private point-to-point transfers"
    ],
    "inclusions": [
        "Pickup and drop at Port Blair Airport",
        "4 nights hotel accommodation in Port Blair",
        "1 night hotel accommodation in Havelock Island",
        "1 night hotel accommodation in Neil Island",
        "Accommodation in the selected room category",
        "Meal plan as mentioned in the final quotation",
        "Inter-island ferry transfers",
        "Green Ocean, Makruzz, Nautika, ITT Majestic or similar ferry",
        "Ferry class subject to ticket availability",
        "Entry tickets for sightseeing mentioned in the confirmed itinerary",
        "Boat tickets for included island excursions",
        "Private air-conditioned point-to-point vehicle",
        "Transfers and sightseeing as per the itinerary",
        "One-time complimentary photoshoot at Radhanagar Beach, where confirmed",
        "Assistance from Logaa Holidays and local coordinators",
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
        "Snorkelling",
        "Glass-bottom boat rides",
        "Underwater photography",
        "Other water-sport charges",
        "Extra vehicle usage",
        "Vehicle disposal charges",
        "Additional sightseeing not mentioned in the itinerary",
        "Medical and emergency expenses",
        "Expenses caused by flight or ferry delays and cancellations",
        "Expenses caused by weather, sea conditions, strikes or government restrictions",
        "Any increase in government taxes, ferry charges or fuel prices before departure",
        "Loss or damage to personal belongings",
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
    console.log("Successfully added 2 more Andaman packages!");
} else {
    console.log("Could not find packagesDatabase marker.");
}
