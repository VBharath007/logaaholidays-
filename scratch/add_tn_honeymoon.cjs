const fs = require('fs');
const path = require('path');

const packageDetailsPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

const jsonString = `  "9201": {
    "id": "9201",
    "title": "Premium Kodaikanal Honeymoon Package – 2 Nights / 3 Days",
    "slug": "premium-kodaikanal-honeymoon-package-2-nights-3-days",
    "image": "/assets/kodaikanal_hero.jpg",
    "heroImage": "/assets/kodaikanal_hero.jpg",
    "overview": {
        "title": "Tour Overview",
        "description": "Escape to the misty hills of Kodaikanal with this premium 2 Nights / 3 Days honeymoon package.\\n\\nThe itinerary offers a comfortable combination of lakes, waterfalls, pine forests, valley viewpoints and private leisure time. Couples can choose from budget, deluxe, premium and luxury resort options.",
        "duration": "2 Nights / 3 Days",
        "destination": "Kodaikanal",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Hill Station"
    },
    "seo": {
        "title": "Premium Kodaikanal Honeymoon Package 2 Nights 3 Days",
        "description": "Escape to the misty hills of Kodaikanal with this premium 2 Nights 3 Days honeymoon package. Enjoy a comfortable combination of lakes, waterfalls, pine forests, valley viewpoints and private leisure time.",
        "keywords": "Kodaikanal honeymoon package, Premium Tamil Nadu honeymoon package, Tamil Nadu honeymoon package from Madurai, South India honeymoon package, Logaa Holidays honeymoon package"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Madurai Arrival – Kodaikanal",
            "description": "Pickup from Madurai Airport, Railway Station, Bus Stand or preferred city location.\\nProceed towards Kodaikanal by private air-conditioned vehicle.\\n\\nPlaces Covered\\n• Silver Cascade Falls\\n• Coaker’s Walk\\n• Bryant Park\\n• Kodaikanal Lake\\n• Upper Lake View\\n• Kodaikanal local market\\n\\nUpon arrival, check in at the selected hotel or resort.\\nThe evening is free for leisure.\\n\\nOptional Romantic Arrangements\\n• Welcome drink\\n• Honeymoon cake\\n• Flower-bed decoration\\n• Fruit basket\\n• Candlelight dinner\\n\\nOvernight stay in Kodaikanal.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "Kodaikanal Full-Day Sightseeing",
            "description": "After breakfast, proceed for full-day sightseeing.\\n\\nPlaces Covered\\n• Pine Forest\\n• Guna Caves viewpoint\\n• Pillar Rocks\\n• Green Valley View\\n• Moir Point\\n• Pambar Falls, subject to access\\n• La Saleth Church\\n• Local chocolate and shopping outlets\\n\\nOptional Mannavanur Lake visit may be arranged at an additional cost.\\nReturn to the hotel.\\nOvernight stay in Kodaikanal.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "Kodaikanal – Madurai Departure",
            "description": "After breakfast, check out from the hotel.\\nProceed to Madurai.\\nDrop at the Airport, Railway Station, Bus Stand or preferred city location.",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights in Kodaikanal\\n• Private Madurai pickup and drop\\n• Scenic hill-station drive\\n• Kodaikanal Lake experience\\n• Pine Forest and Pillar Rocks\\n• Leisure time for couples\\n• Optional valley-view room\\n• Optional candlelight dinner\\n• Optional flower decoration\\n• Private sedan for the complete trip",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ accommodation in Kodaikanal",
        "Daily breakfast",
        "Private Madurai pickup and drop",
        "Private air-conditioned sedan",
        "Fuel charges",
        "Driver allowance",
        "Toll charges",
        "Parking charges",
        "Hill charges",
        "Sightseeing as per itinerary",
        "Honeymoon arrangements specifically mentioned in the quotation",
        "Assistance from Logaa Holidays"
    ],
    "exclusions": [
        "Flight, train and bus tickets",
        "Lunch and dinner unless included",
        "Attraction entry tickets",
        "Boating charges",
        "Cycling and horse-riding charges",
        "Mannavanur excursion charges",
        "Adventure activities",
        "Guide charges",
        "Personal expenses",
        "Room service and beverages",
        "Travel insurance",
        "Early check-in and late check-out",
        "Extra vehicle usage",
        "Additional sightseeing",
        "Anything not specifically mentioned under inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },
  "9202": {
    "id": "9202",
    "title": "Premium Ooty and Coonoor Honeymoon Package – 3 Nights / 4 Days",
    "slug": "premium-ooty-and-coonoor-honeymoon-package-3-nights-4-days",
    "image": "/assets/ooty_hero.jpg",
    "heroImage": "/assets/ooty_hero.jpg",
    "overview": {
        "title": "Tour Overview",
        "description": "Celebrate your honeymoon amid the cool climate, tea gardens, lakes and mountain viewpoints of Ooty and Coonoor.\\n\\nThis itinerary offers three comfortable nights in one hotel, avoiding frequent check-ins and long daily transfers. It is ideal for couples looking for a relaxed and scenic hill-station holiday.",
        "duration": "3 Nights / 4 Days",
        "destination": "Ooty, Coonoor",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Hill Station"
    },
    "seo": {
        "title": "Premium Ooty and Coonoor Honeymoon Package 3 Nights 4 Days",
        "description": "Celebrate your honeymoon amid the cool climate, tea gardens, lakes and mountain viewpoints of Ooty and Coonoor. 3 Nights 4 Days premium honeymoon package.",
        "keywords": "Ooty honeymoon package, Ooty Coonoor honeymoon tour, Premium Tamil Nadu honeymoon package, Tamil Nadu honeymoon packages from Chennai, South India honeymoon package"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Coimbatore – Ooty",
            "description": "Pickup from Coimbatore Airport, Railway Station or preferred location.\\nProceed towards Ooty.\\n\\nPlaces Covered\\n• Ooty Botanical Garden\\n• Government Rose Garden\\n• Ooty Lake\\n• Thread Garden, optional\\n• Ooty local market\\n\\nCheck in at the selected hotel or resort.\\nOvernight stay in Ooty.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "Ooty and Pykara Sightseeing",
            "description": "After breakfast, proceed for sightseeing.\\n\\nPlaces Covered\\n• Doddabetta Peak\\n• Tea Factory and Tea Museum\\n• Pine Forest\\n• Shooting Point\\n• Wenlock Downs\\n• Pykara Waterfalls\\n• Pykara Lake\\n• Scenic viewpoints\\n\\nOptional boating may be enjoyed at an additional cost.\\nOvernight stay in Ooty.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "Coonoor Sightseeing",
            "description": "After breakfast, proceed to Coonoor.\\n\\nPlaces Covered\\n• Sim’s Park\\n• Lamb’s Rock\\n• Dolphin’s Nose\\n• Tea gardens\\n• Valley viewpoints\\n• Coonoor local market\\n\\nOptional toy-train tickets may be arranged subject to availability.\\nReturn to Ooty.\\nOvernight stay in Ooty.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Ooty – Coimbatore Departure",
            "description": "After breakfast, check out.\\nProceed to Coimbatore.\\nDrop at Airport, Railway Station or preferred location.",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Three nights in Ooty\\n• Private Coimbatore pickup and drop\\n• Ooty, Pykara and Coonoor sightseeing\\n• Tea garden experience\\n• Optional Nilgiri Mountain Railway journey\\n• Premium resort and cottage options\\n• Optional couple photoshoot\\n• Optional romantic room decoration\\n• Private sightseeing vehicle",
            "activities": []
        }
    ],
    "inclusions": [
        "Three nights’ accommodation in Ooty",
        "Daily breakfast",
        "Private Coimbatore pickup and drop",
        "Private air-conditioned vehicle",
        "Ooty, Pykara and Coonoor sightseeing",
        "Fuel charges",
        "Driver allowance",
        "Toll charges",
        "Parking charges",
        "Hill charges",
        "Honeymoon arrangements specifically confirmed",
        "Assistance from Logaa Holidays"
    ],
    "exclusions": [
        "Flight and train tickets",
        "Lunch and dinner unless included",
        "Attraction entry tickets",
        "Toy-train tickets",
        "Boating charges",
        "Tea Factory entry fees",
        "Horse riding",
        "Adventure activities",
        "Guide charges",
        "Personal expenses",
        "Room service and beverages",
        "Travel insurance",
        "Extra vehicle usage",
        "Early check-in and late check-out",
        "Additional sightseeing",
        "Anything not specifically mentioned under inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },
  "9203": {
    "id": "9203",
    "title": "Premium Kodaikanal and Kanyakumari Honeymoon – 4 Nights / 5 Days",
    "slug": "premium-kodaikanal-and-kanyakumari-honeymoon-4-nights-5-days",
    "image": "/assets/kanyakumari_hero.jpg",
    "heroImage": "/assets/kanyakumari_hero.jpg",
    "overview": {
        "title": "Tour Overview",
        "description": "Experience two contrasting romantic destinations in one memorable journey.\\n\\nEnjoy the misty hills, pine forests and scenic lakes of Kodaikanal before travelling to Kanyakumari for sunrise, sunset, coastal viewpoints and peaceful couple time.\\n\\nThis package is ideal for honeymooners seeking both hill-station charm and coastal beauty.",
        "duration": "4 Nights / 5 Days",
        "destination": "Kodaikanal, Kanyakumari, Trivandrum",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Hill Station, Coastal"
    },
    "seo": {
        "title": "Premium Kodaikanal and Kanyakumari Honeymoon 4 Nights 5 Days",
        "description": "Experience two contrasting romantic destinations in one memorable journey. Kodaikanal and Kanyakumari 4 Nights 5 Days honeymoon package.",
        "keywords": "Kodaikanal honeymoon package, Kanyakumari couple package, Premium Tamil Nadu honeymoon package, Tamil Nadu honeymoon package from Madurai, South India honeymoon package"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Madurai – Kodaikanal",
            "description": "Pickup from Madurai.\\nProceed towards Kodaikanal.\\n\\nPlaces Covered\\n• Silver Cascade Falls\\n• Coaker’s Walk\\n• Bryant Park\\n• Kodaikanal Lake\\n• Upper Lake View\\n• Local market\\n\\nCheck in at the hotel.\\nOvernight stay in Kodaikanal.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "Kodaikanal Sightseeing",
            "description": "After breakfast, visit:\\n• Pine Forest\\n• Guna Caves viewpoint\\n• Pillar Rocks\\n• Green Valley View\\n• Moir Point\\n• Pambar Falls, subject to access\\n• La Saleth Church\\n• Local shopping\\n\\nOvernight stay in Kodaikanal.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "Kodaikanal – Kanyakumari",
            "description": "After breakfast, check out and proceed towards Kanyakumari.\\nUpon arrival, check in at the selected hotel.\\n\\nLater, visit:\\n• Kanyakumari Sunset Point\\n• Kanyakumari Beach\\n• Triveni Sangam\\n• Local market\\n\\nOvernight stay in Kanyakumari.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Kanyakumari Sightseeing",
            "description": "Early morning, enjoy sunrise views, subject to weather.\\nAfter breakfast, proceed for sightseeing.\\n\\nPlaces Covered\\n• Bhagavathi Amman Temple\\n• Vivekananda Rock Memorial\\n• Thiruvalluvar Statue\\n• Glass Bridge, subject to operation\\n• Gandhi Memorial\\n• Triveni Sangam\\n• Vattakottai Fort\\n• Suchindram Thanumalayan Temple, optional\\n\\nReturn to the hotel.\\nOvernight stay in Kanyakumari.",
            "activities": []
        },
        {
            "day": "Day 5",
            "title": "Kanyakumari – Trivandrum Departure",
            "description": "After breakfast, check out.\\nDepending on departure time, visit:\\n• Padmanabhapuram Palace\\n• Poovar, optional\\n• Kovalam Beach, optional\\n• Azhimala Shiva Temple, optional\\n\\nDrop at Trivandrum Airport, Railway Station or city location.",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights in Kodaikanal\\n• Two nights in Kanyakumari\\n• Madurai pickup and Trivandrum drop\\n• Hill and coastal sightseeing\\n• Kodaikanal Lake and viewpoints\\n• Kanyakumari sunrise and sunset\\n• Private cab for the full tour\\n• Optional premium resort stay\\n• Optional sea-view room\\n• Optional romantic dinner",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ accommodation in Kodaikanal",
        "Two nights’ accommodation in Kanyakumari",
        "Daily breakfast",
        "Madurai pickup",
        "Trivandrum drop",
        "Private air-conditioned sedan",
        "Sightseeing as per itinerary",
        "Fuel charges",
        "Driver allowance",
        "Toll charges",
        "Parking charges",
        "Hill charges",
        "State permit charges, where applicable",
        "Honeymoon arrangements specifically confirmed",
        "Assistance from Logaa Holidays"
    ],
    "exclusions": [
        "Flight and train tickets",
        "Lunch and dinner unless included",
        "Attraction entry tickets",
        "Kanyakumari ferry tickets",
        "Boating charges",
        "Horse riding and cycling charges",
        "Padmanabhapuram Palace entry",
        "Poovar boating",
        "Guide charges",
        "Temple special-entry charges",
        "Personal expenses",
        "Travel insurance",
        "Extra sightseeing",
        "Extra vehicle usage",
        "Early check-in and late check-out",
        "Anything not specifically mentioned under inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },
  "9204": {
    "id": "9204",
    "title": "Premium Complete Tamil Nadu Honeymoon – 6 Nights / 7 Days",
    "slug": "premium-complete-tamil-nadu-honeymoon-6-nights-7-days",
    "image": "/assets/kodaikanal_hero.jpg",
    "heroImage": "/assets/kodaikanal_hero.jpg",
    "overview": {
        "title": "Tour Overview",
        "description": "Discover Tamil Nadu’s most romantic hill stations and coastal attractions with this premium 6 Nights / 7 Days honeymoon package.\\n\\nThe journey combines the tea gardens and mountain scenery of Ooty, the misty lakes and pine forests of Kodaikanal, and the sunrise and sunset experiences of Kanyakumari.\\n\\nEach destination includes a two-night stay, allowing couples to enjoy sightseeing without frequent hotel changes.",
        "duration": "6 Nights / 7 Days",
        "destination": "Ooty, Kodaikanal, Kanyakumari, Trivandrum",
        "activities": "Sightseeing, Honeymoon, Romantic Escape",
        "themes": "Honeymoon, Hill Station, Coastal"
    },
    "seo": {
        "title": "Premium Complete Tamil Nadu Honeymoon 6 Nights 7 Days",
        "description": "Discover Tamil Nadu’s most romantic hill stations and coastal attractions with this premium 6 Nights 7 Days honeymoon package. Ooty, Kodaikanal, Kanyakumari.",
        "keywords": "Tamil Nadu honeymoon packages, Premium Tamil Nadu honeymoon package, Ooty honeymoon package, Kodaikanal honeymoon package, Tamil Nadu couple tour package, South India honeymoon package"
    },
    "itinerary": [
        {
            "day": "Day 1",
            "title": "Coimbatore – Ooty",
            "description": "Pickup from Coimbatore.\\nProceed towards Ooty.\\n\\nPlaces Covered\\n• Botanical Garden\\n• Rose Garden\\n• Ooty Lake\\n• Local market\\n\\nCheck in at the hotel.\\nOvernight stay in Ooty.",
            "activities": []
        },
        {
            "day": "Day 2",
            "title": "Ooty and Coonoor Sightseeing",
            "description": "After breakfast, visit:\\n• Doddabetta Peak\\n• Tea Factory and Tea Museum\\n• Sim’s Park\\n• Lamb’s Rock\\n• Dolphin’s Nose\\n• Coonoor tea gardens\\n• Valley viewpoints\\n\\nReturn to Ooty.\\nOvernight stay in Ooty.",
            "activities": []
        },
        {
            "day": "Day 3",
            "title": "Ooty – Kodaikanal",
            "description": "After breakfast, check out.\\nProceed towards Kodaikanal.\\nThis is primarily a transfer day due to the travel distance.\\nUpon arrival, check in and relax.\\nOvernight stay in Kodaikanal.",
            "activities": []
        },
        {
            "day": "Day 4",
            "title": "Kodaikanal Sightseeing",
            "description": "After breakfast, visit:\\n• Coaker’s Walk\\n• Bryant Park\\n• Kodaikanal Lake\\n• Pine Forest\\n• Guna Caves viewpoint\\n• Pillar Rocks\\n• Green Valley View\\n• Moir Point\\n• Silver Cascade Falls\\n• Local market\\n\\nOvernight stay in Kodaikanal.",
            "activities": []
        },
        {
            "day": "Day 5",
            "title": "Kodaikanal – Kanyakumari",
            "description": "After breakfast, check out.\\nProceed towards Kanyakumari.\\nUpon arrival, check in.\\n\\nLater, enjoy:\\n• Kanyakumari Beach\\n• Triveni Sangam\\n• Sunset Point\\n• Local shopping\\n\\nOvernight stay in Kanyakumari.",
            "activities": []
        },
        {
            "day": "Day 6",
            "title": "Kanyakumari Full-Day Sightseeing",
            "description": "Early morning, enjoy sunrise views.\\n\\nLater, visit:\\n• Bhagavathi Amman Temple\\n• Vivekananda Rock Memorial\\n• Thiruvalluvar Statue\\n• Glass Bridge, subject to operation\\n• Gandhi Memorial\\n• Vattakottai Fort\\n• Suchindram Temple, optional\\n\\nReturn to the hotel.\\nOvernight stay in Kanyakumari.",
            "activities": []
        },
        {
            "day": "Day 7",
            "title": "Kanyakumari – Trivandrum Departure",
            "description": "After breakfast, check out.\\nDepending on departure time, visit:\\n• Padmanabhapuram Palace\\n• Poovar\\n• Kovalam Beach\\n• Azhimala Shiva Temple\\n\\nDrop at Trivandrum Airport, Railway Station or city location.",
            "activities": []
        },
        {
            "day": "Highlights",
            "title": "Package Highlights",
            "description": "• Two nights each in Ooty, Kodaikanal and Kanyakumari\\n• Coimbatore pickup and Trivandrum drop\\n• Ooty, Coonoor and Pykara sightseeing\\n• Complete Kodaikanal sightseeing\\n• Kanyakumari sunrise and sunset\\n• Private cab for the complete tour\\n• Premium resort and room options\\n• Optional candlelight dinner\\n• Optional flower decoration and cake\\n• Couple-friendly itinerary",
            "activities": []
        },
        {
            "day": "Add-Ons",
            "title": "Premium Honeymoon Add-Ons",
            "description": "The following romantic services can be arranged at an additional cost:\\n• Flower-bed decoration\\n• Honeymoon cake\\n• Candlelight dinner\\n• Welcome drink\\n• Fruit basket\\n• Couple photoshoot\\n• Couple spa\\n• Valley-view room\\n• Lake-view room\\n• Sea-view room\\n• Pool-view room\\n• Premium cottage\\n• Luxury resort upgrade\\n• Private sightseeing cab\\n• Romantic beachside dinner\\n• Additional night stay\\n\\nAll romantic arrangements must be confirmed in writing before booking.",
            "activities": []
        },
        {
            "day": "Categories",
            "title": "Accommodation Categories",
            "description": "Deluxe Honeymoon Package\\n• Comfortable hotel or resort\\n• Deluxe room\\n• Daily breakfast\\n• Private vehicle\\n• Standard sightseeing\\n\\nPremium Honeymoon Package\\n• Premium resort\\n• Upgraded room\\n• Daily breakfast\\n• Private cab\\n• Honeymoon cake\\n• Flower decoration\\n• Candlelight dinner, where confirmed\\n\\nLuxury Honeymoon Package\\n• Luxury resort or boutique hotel\\n• Valley-view, lake-view or sea-view room\\n• Private transfers\\n• Customised sightseeing\\n• Romantic dinner\\n• Couple photoshoot or spa\\n• Premium honeymoon arrangements",
            "activities": []
        },
        {
            "day": "Info",
            "title": "Important Travel Information",
            "description": "• Hotel and resort availability depends on the travel date.\\n• Final price depends on hotel category, vehicle type and romantic add-ons.\\n• Peak-season and holiday supplements may apply.\\n• Sightseeing order may change according to weather, traffic and attraction timings.\\n• Entry tickets are payable directly unless included.\\n• Hill-station travel time may increase during weekends and peak seasons.\\n• Air-conditioning may not operate in hill areas or while the vehicle is parked.\\n• Standard hotel check-in and check-out timings will apply.\\n• Guests must carry valid government-issued photo identification.\\n• Unused services are non-refundable.\\n• Personal belongings remain the responsibility of the guests.",
            "activities": []
        },
        {
            "day": "Why Us",
            "title": "Why Choose Logaa Holidays?",
            "description": "• Premium Tamil Nadu honeymoon packages\\n• Private couple-friendly transportation\\n• Carefully planned, comfortable itineraries\\n• Budget, premium and luxury resort options\\n• Flower decoration and honeymoon cake\\n• Candlelight dinner arrangements\\n• Couple photoshoot assistance\\n• Flexible pickup and drop\\n• Transparent inclusions and exclusions\\n• Support before and during the journey",
            "activities": []
        },
        {
            "day": "Book",
            "title": "Book Your Tamil Nadu Honeymoon",
            "description": "Create beautiful memories in Ooty, Kodaikanal and Kanyakumari with a customised honeymoon package from Logaa Holidays.\\n\\nLogaa Holidays\\nMadurai, Tamil Nadu\\nCall / WhatsApp: +91 73973 29776",
            "activities": []
        }
    ],
    "inclusions": [
        "Two nights’ accommodation in Ooty",
        "Two nights’ accommodation in Kodaikanal",
        "Two nights’ accommodation in Kanyakumari",
        "Daily breakfast",
        "Coimbatore pickup",
        "Trivandrum drop",
        "Private air-conditioned vehicle",
        "Ooty, Coonoor, Kodaikanal and Kanyakumari sightseeing",
        "Fuel charges",
        "Driver allowance",
        "Toll charges",
        "Parking charges",
        "Hill charges",
        "State permit charges, where applicable",
        "Honeymoon arrangements specifically confirmed",
        "Assistance from Logaa Holidays"
    ],
    "exclusions": [
        "Flight and train tickets",
        "Lunch and dinner unless included",
        "Attraction entry tickets",
        "Ooty and Kodaikanal boating charges",
        "Toy-train tickets",
        "Tea Factory entry fees",
        "Horse riding and adventure activities",
        "Kanyakumari ferry tickets",
        "Padmanabhapuram Palace entry",
        "Poovar boating",
        "Guide charges",
        "Personal expenses",
        "Room service and beverages",
        "Travel insurance",
        "Extra vehicle usage",
        "Additional sightseeing",
        "Early check-in and late check-out",
        "Expenses caused by traffic, weather or road closures",
        "Anything not specifically mentioned under inclusions"
    ],
    "pricing": {
        "startingFrom": "On Request",
        "perPerson": true
    }
  },`;

let fileContent = fs.readFileSync(packageDetailsPath, 'utf8');

const splitMarker = '  "6005": {';
const index = fileContent.lastIndexOf(splitMarker);
if (index !== -1) {
    const newContent = fileContent.slice(0, index) + jsonString + '\n' + fileContent.slice(index);
    fs.writeFileSync(packageDetailsPath, newContent, 'utf8');
    console.log('Successfully added TN honeymoon packages 9201-9204 to packagesDatabase');
} else {
    console.error('Could not find split marker.');
}
