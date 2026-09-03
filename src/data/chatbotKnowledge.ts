// ============================================================
// LOGAA HOLIDAYS – Complete Chatbot Knowledge Base
// Every URL, keyword, destination, and service from the site
// ============================================================

export type KnowledgeEntry = {
  name: string;
  url: string;
  keywords: string[];
  description: string;
  type: 'destination' | 'package-category' | 'service' | 'page';
};

export const siteKnowledge: KnowledgeEntry[] = [

  // ──────────────────────────────────────────────────────
  // MAIN PAGES
  // ──────────────────────────────────────────────────────
  { name: 'Home', url: '/', keywords: ['home', 'main', 'logaa holidays', 'travel agency', 'madurai'], description: 'Logaa Holidays home page', type: 'page' },
  { name: 'About Us', url: '/about', keywords: ['about', 'about us', 'company', 'who are you', 'logaa', 'team', 'history'], description: 'About Logaa Holidays', type: 'page' },
  { name: 'Services', url: '/services', keywords: ['services', 'what do you offer', 'offerings'], description: 'All services offered by Logaa Holidays', type: 'page' },
  { name: 'Testimonials', url: '/testimonials', keywords: ['testimonials', 'reviews', 'feedback', 'ratings', 'customers', 'google reviews'], description: 'Customer reviews and testimonials', type: 'page' },
  { name: 'Contact Us', url: '/contact', keywords: ['contact', 'reach us', 'phone', 'call', 'email', 'whatsapp', 'address', 'location', 'madurai', 'enquiry'], description: 'Contact Logaa Holidays', type: 'page' },

  // ──────────────────────────────────────────────────────
  // SOUTH INDIA OVERVIEW
  // ──────────────────────────────────────────────────────
  { name: 'South India Packages', url: '/south-india-package', keywords: ['south india', 'south india tour', 'south india packages'], description: 'Overview of South India tour packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // TAMIL NADU – Destination Overview pages
  // ──────────────────────────────────────────────────────
  { name: 'Tamil Nadu Overview', url: '/destination/tamilnadu/tamilnadu-tourism', keywords: ['tamil nadu', 'tamilnadu', 'tn', 'tamil', 'south india'], description: 'Tamil Nadu travel overview', type: 'destination' },
  { name: 'Madurai', url: '/destination/tamilnadu/madurai-tourism', keywords: ['madurai', 'meenakshi', 'meenakshi amman', 'madurai temple', 'madurai tour', 'madurai package'], description: 'Madurai tourism and packages', type: 'destination' },
  { name: 'Rameswaram', url: '/destination/tamilnadu/rameswaram-tourism', keywords: ['rameswaram', 'rameswaram', 'ramanathaswamy', 'dhanushkodi', 'pamban bridge', 'pilgrimage', 'rameswaram package'], description: 'Rameswaram tourism and packages', type: 'destination' },
  { name: 'Kanyakumari', url: '/destination/tamilnadu/kanyakumari-tourism', keywords: ['kanyakumari', 'kanya kumari', 'cape comorin', 'sunrise', 'vivekananda', 'kanyakumari package'], description: 'Kanyakumari tourism and packages', type: 'destination' },
  { name: 'Kodaikanal', url: '/destination/tamilnadu/kodaikanal-tourism', keywords: ['kodaikanal', 'kodai', 'kodai kanal', 'hill station', 'kodaikanal lake', 'kodai package'], description: 'Kodaikanal tourism and packages', type: 'destination' },
  { name: 'Ooty', url: '/destination/tamilnadu/ooty-tourism', keywords: ['ooty', 'udhagamandalam', 'nilgiri', 'ooty lake', 'tea garden', 'ooty package', 'ootty'], description: 'Ooty tourism and packages', type: 'destination' },
  { name: 'Chennai', url: '/destination/tamilnadu/chennai-tourism', keywords: ['chennai', 'madras', 'chennai tour', 'marina beach', 'kapaleeshwarar', 'chennai sightseeing'], description: 'Chennai tourism and packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // TAMIL NADU – Tour Package category pages (/tour-packages/...)
  // ──────────────────────────────────────────────────────
  { name: 'Courtallam Tours', url: '/tour-packages/courtallam-tours', keywords: ['courtallam', 'kutralam', 'waterfalls', 'courtallam package', 'spa falls'], description: 'Courtallam waterfall tour packages', type: 'package-category' },
  { name: 'Pillayarpatti Tours', url: '/tour-packages/pillayarpatti-tours', keywords: ['pillayarpatti', 'vinayagar', 'karpaga vinayagar', 'temple', 'pilgrimage'], description: 'Pillayarpatti temple tour packages', type: 'package-category' },
  { name: 'Tiruchendur Tours', url: '/tour-packages/tiruchendur-tours', keywords: ['tiruchendur', 'murugan', 'tiruchendur murugan', 'subramania', 'temple tour'], description: 'Tiruchendur temple tour packages', type: 'package-category' },
  { name: 'Palani Tours', url: '/tour-packages/palani-tours', keywords: ['palani', 'dandayudhapani', 'murugan', 'palani temple', 'palani package', 'pilgrimage'], description: 'Palani temple tour packages', type: 'package-category' },
  { name: 'Trichy Tours', url: '/tour-packages/trichy-tours', keywords: ['trichy', 'tiruchirappalli', 'srirangam', 'rockfort', 'trichy package', 'trichy tour'], description: 'Trichy tour packages', type: 'package-category' },
  { name: 'Thanjavur Tours', url: '/tour-packages/thanjavur-tours', keywords: ['thanjavur', 'tanjore', 'big temple', 'brihadeeswara', 'chola', 'thanjavur package'], description: 'Thanjavur tour packages', type: 'package-category' },
  { name: 'Kumbakonam Tours', url: '/tour-packages/kumbakonam-tours', keywords: ['kumbakonam', 'temple city', 'mahamaham', 'kumbakonam package'], description: 'Kumbakonam tour packages', type: 'package-category' },
  { name: 'Mahabalipuram Tours', url: '/tour-packages/mahabalipuram-tours', keywords: ['mahabalipuram', 'mamallapuram', 'shore temple', 'five rathas', 'arjuna penance', 'mahabalipuram package'], description: 'Mahabalipuram tour packages', type: 'package-category' },
  { name: 'Pondicherry Tours', url: '/tour-packages/pondicherry-tours', keywords: ['pondicherry', 'puducherry', 'french town', 'auroville', 'pondy', 'pondicherry package'], description: 'Pondicherry tour packages', type: 'package-category' },
  { name: 'Valparai Tours', url: '/tour-packages/valparai-tours', keywords: ['valparai', 'tea estate', 'forest', 'wildlife', 'valparai package'], description: 'Valparai tour packages', type: 'package-category' },
  { name: 'Megamalai Tours', url: '/tour-packages/megamalai-tours', keywords: ['megamalai', 'high wavy mountains', 'megamalai package', 'megamalai tour', 'megamalai trek'], description: 'Megamalai tour packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // KERALA – Destination Overview pages
  // ──────────────────────────────────────────────────────
  { name: 'Kerala Overview', url: '/destination/kerala/kerala-tourism', keywords: ['kerala', 'god own country', 'kerala tour', 'kerala package'], description: 'Kerala travel overview', type: 'destination' },
  { name: 'Munnar', url: '/destination/kerala/munnar-tourism', keywords: ['munnar', 'tea garden', 'munnar package', 'hill station kerala', 'honeymoon munnar'], description: 'Munnar tourism and packages', type: 'destination' },
  { name: 'Alleppey', url: '/destination/kerala/alleppey-tourism', keywords: ['alleppey', 'alappuzha', 'houseboat', 'backwaters', 'alleppey package', 'alappuzha package'], description: 'Alleppey backwater packages', type: 'destination' },
  { name: 'Thekkady', url: '/destination/kerala/thekkady-tourism', keywords: ['thekkady', 'periyar', 'wildlife', 'elephant', 'spice garden', 'thekkady package'], description: 'Thekkady wildlife packages', type: 'destination' },
  { name: 'Vagamon', url: '/destination/kerala/vagamon-tourism', keywords: ['vagamon', 'meadows', 'vagamon package', 'vagamon tour'], description: 'Vagamon tour packages', type: 'destination' },
  { name: 'Cochin', url: '/destination/kerala/cochin-tourism', keywords: ['cochin', 'kochi', 'fort kochi', 'kerala cruise', 'cochin package'], description: 'Cochin tourism and packages', type: 'destination' },
  { name: 'Kumarakom Tours', url: '/tour-packages/kumarakom-tours', keywords: ['kumarakom', 'vembanad lake', 'bird sanctuary', 'kumarakom package'], description: 'Kumarakom tour packages', type: 'package-category' },
  { name: 'Athirappilly Tours', url: '/tour-packages/athirappilly-tours', keywords: ['athirappilly', 'athirappally', 'waterfall', 'chalakudy', 'athirappilly package'], description: 'Athirappilly waterfall packages', type: 'package-category' },
  { name: 'Kovalam Tours', url: '/tour-packages/kovalam-tours', keywords: ['kovalam', 'lighthouse beach', 'beach resort', 'kovalam package', 'kerala beach'], description: 'Kovalam beach packages', type: 'package-category' },
  { name: 'Varkala Tours', url: '/tour-packages/varkala-tours', keywords: ['varkala', 'papanasam beach', 'cliff beach', 'varkala package'], description: 'Varkala beach packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // KARNATAKA
  // ──────────────────────────────────────────────────────
  { name: 'Karnataka Overview', url: '/karnataka-tour-packages', keywords: ['karnataka', 'karnataka tour', 'karnataka package'], description: 'Karnataka travel overview', type: 'destination' },
  { name: 'Mysore Tours', url: '/tour-packages/mysore-tours', keywords: ['mysore', 'mysuru', 'mysore palace', 'mysore dasara', 'mysore package'], description: 'Mysore tour packages', type: 'package-category' },
  { name: 'Coorg Tours', url: '/tour-packages/coorg-tours', keywords: ['coorg', 'kodagu', 'coffee estate', 'coorg package', 'scotland of india'], description: 'Coorg tour packages', type: 'package-category' },
  { name: 'Bangalore Tours', url: '/tour-packages/bangalore-tours', keywords: ['bangalore', 'bengaluru', 'lalbagh', 'bangalore package', 'bangalore sightseeing'], description: 'Bangalore tour packages', type: 'package-category' },
  { name: 'Chikmagalur Tours', url: '/tour-packages/chikmagalur-tours', keywords: ['chikmagalur', 'chikkamagaluru', 'coffee hills', 'chikmagalur package'], description: 'Chikmagalur tour packages', type: 'package-category' },
  { name: 'Kabini Tours', url: '/tour-packages/kabini-tours', keywords: ['kabini', 'nagarhole', 'jungle safari', 'kabini package', 'wildlife'], description: 'Kabini wildlife packages', type: 'package-category' },
  { name: 'Hampi Tours', url: '/tour-packages/hampi-tours', keywords: ['hampi', 'vijayanagara', 'ruins', 'hampi package', 'heritage'], description: 'Hampi heritage tour packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // ANDAMAN
  // ──────────────────────────────────────────────────────
  { name: 'Andaman & Nicobar Islands', url: '/destination/andaman/andaman-tourism', keywords: ['andaman', 'nicobar', 'andaman package', 'havelock', 'neil island', 'port blair', 'andaman nicobar', 'beach', 'scuba diving', 'andaman tour'], description: 'Andaman & Nicobar Islands packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // NORTH INDIA
  // ──────────────────────────────────────────────────────
  { name: 'North India Packages', url: '/north-india-tour-packages', keywords: ['north india', 'north india tour', 'north india package'], description: 'North India travel overview', type: 'destination' },
  { name: 'Shirdi Yatra', url: '/destination/maharashtra/shirdi', keywords: ['shirdi', 'sai baba', 'shirdi yatra', 'pilgrimage', 'maharashtra'], description: 'Shirdi Yatra packages', type: 'package-category' },
  { name: 'Varanasi', url: '/destination/uttar-pradesh/varanasi', keywords: ['varanasi', 'banaras', 'kashi', 'ganga aarti', 'pilgrimage', 'varanasi tour'], description: 'Varanasi tour packages', type: 'package-category' },
  { name: 'Golden Triangle Tours', url: '/north-india-tour-packages/golden-triangle-tours', keywords: ['golden triangle', 'delhi agra jaipur', 'golden triangle package', 'taj mahal', 'india tour'], description: 'Delhi-Agra-Jaipur Golden Triangle tours', type: 'package-category' },
  { name: 'Delhi Tours', url: '/tour-packages/delhi-tours', keywords: ['delhi', 'new delhi', 'red fort', 'qutub minar', 'india gate', 'delhi package'], description: 'Delhi tour packages', type: 'package-category' },
  { name: 'Agra Tours', url: '/tour-packages/agra-tours', keywords: ['agra', 'taj mahal', 'agra fort', 'fatehpur sikri', 'agra package'], description: 'Agra tour packages', type: 'package-category' },
  { name: 'Jaipur Tours', url: '/tour-packages/jaipur-tours', keywords: ['jaipur', 'pink city', 'hawa mahal', 'amber fort', 'jaipur package'], description: 'Jaipur tour packages', type: 'package-category' },
  { name: 'Shimla Tours', url: '/north-india-tour-packages/shimla-tours', keywords: ['shimla', 'simla', 'himachal', 'mall road', 'shimla package'], description: 'Shimla tour packages', type: 'package-category' },
  { name: 'Manali Tours', url: '/north-india-tour-packages/manali-tours', keywords: ['manali', 'rohtang', 'solang valley', 'manali package', 'snow', 'himachal'], description: 'Manali tour packages', type: 'package-category' },
  { name: 'Manali Volvo Tours', url: '/north-india-tour-packages/manali-volvo-tours', keywords: ['manali volvo', 'volvo bus', 'manali by bus', 'budget manali'], description: 'Manali Volvo bus tour packages', type: 'package-category' },
  { name: 'Kashmir Tours', url: '/north-india-tour-packages/kashmir-tours', keywords: ['kashmir', 'srinagar', 'dal lake', 'gulmarg', 'pahalgam', 'kashmir package', 'paradise on earth'], description: 'Kashmir tour packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // HONEYMOON PACKAGES
  // ──────────────────────────────────────────────────────
  { name: 'Ooty and Coonoor Honeymoon Package', url: '/tamil-nadu-honeymoon-packages/enchanting-romantic-ooty-and-coonoor-honeymoon-package-4-days-3-nights', keywords: ['ooty honeymoon', 'coonoor honeymoon', 'couple trip ooty', 'romantic ooty', 'ooty package', '4 days 3 nights', 'ooty'], description: 'Enchanting romantic Ooty and Coonoor honeymoon package', type: 'package-category' },
  { name: 'Tamil Nadu Honeymoon', url: '/tour-packages/tamil-nadu-honeymoon-packages', keywords: ['tamil nadu honeymoon', 'couple trip tamil nadu', 'honeymoon south india', 'romantic tamil nadu', 'newly married tamil Nadu'], description: 'Tamil Nadu honeymoon packages', type: 'package-category' },
  { name: 'Kerala Honeymoon', url: '/tour-packages/kerala-honeymoon-packages', keywords: ['kerala honeymoon', 'kerala couple package', 'romantic kerala', 'honeymoon backwaters', 'munnar honeymoon', 'alleppey honeymoon', 'ooty coonoor honeymoon'], description: 'Kerala honeymoon packages', type: 'package-category' },
  { name: 'Karnataka Honeymoon', url: '/tour-packages/karnataka-honeymoon-packages', keywords: ['karnataka honeymoon', 'coorg honeymoon', 'coorg couple', 'romantic coorg', 'karnataka couple'], description: 'Karnataka honeymoon packages', type: 'package-category' },
  { name: 'Goa Honeymoon', url: '/tour-packages/goa-honeymoon-packages', keywords: ['goa honeymoon', 'goa couple', 'romantic goa', 'goa package', 'goa beach', 'goa trip'], description: 'Goa honeymoon packages', type: 'package-category' },
  { name: 'Kashmir Honeymoon', url: '/tour-packages/kashmir-honeymoon-packages', keywords: ['kashmir honeymoon', 'kashmir couple', 'romantic kashmir', 'srinagar honeymoon', 'dal lake honeymoon'], description: 'Kashmir honeymoon packages', type: 'package-category' },
  { name: 'Himachal Honeymoon', url: '/tour-packages/himachal-honeymoon-packages', keywords: ['himachal honeymoon', 'shimla manali honeymoon', 'manali honeymoon', 'shimla honeymoon', 'himachal couple'], description: 'Himachal Pradesh honeymoon packages', type: 'package-category' },
  { name: 'Sikkim & Darjeeling Honeymoon', url: '/tour-packages/sikkim-darjeeling-honeymoon-packages', keywords: ['sikkim honeymoon', 'darjeeling honeymoon', 'sikkim darjeeling couple', 'northeast honeymoon', 'gangtok honeymoon'], description: 'Sikkim & Darjeeling honeymoon packages', type: 'package-category' },
  { name: 'Andaman Honeymoon', url: '/tour-packages/andaman-honeymoon-packages', keywords: ['andaman honeymoon', 'andaman couple', 'island honeymoon', 'beach honeymoon', 'havelock honeymoon'], description: 'Andaman honeymoon packages', type: 'package-category' },
  { name: 'Maldives Honeymoon', url: '/tour-packages/maldives-honeymoon-packages', keywords: ['maldives honeymoon', 'maldives couple', 'maldives trip', 'maldives package', 'overwater bungalow', 'maldives resort'], description: 'Maldives honeymoon packages', type: 'package-category' },

  // ──────────────────────────────────────────────────────
  // INTERNATIONAL
  // ──────────────────────────────────────────────────────
  { name: 'Malaysia Tours', url: '/destination/international/malaysia-tourism', keywords: ['malaysia', 'kuala lumpur', 'klcc', 'petronas towers', 'malaysia package', 'international tour'], description: 'Malaysia international tour packages', type: 'destination' },
  { name: 'Singapore Tours', url: '/destination/international/singapore-tourism', keywords: ['singapore', 'sentosa', 'marina bay sands', 'singapore package', 'international'], description: 'Singapore international tour packages', type: 'destination' },
  { name: 'Bali Tours', url: '/destination/international/bali-tourism', keywords: ['bali', 'indonesia', 'bali package', 'ubud', 'seminyak', 'bali beach', 'bali honeymoon'], description: 'Bali international tour packages', type: 'destination' },
  { name: 'Thailand Tours', url: '/destination/international/thailand-tourism', keywords: ['thailand', 'bangkok', 'pattaya', 'phuket', 'thailand package', 'international tour'], description: 'Thailand international tour packages', type: 'destination' },
  { name: 'Sri Lanka Tours', url: '/destination/international/sri-lanka-tourism', keywords: ['sri lanka', 'srilanka', 'ceylon', 'colombo', 'kandy', 'sigiriya', 'sri lanka package'], description: 'Sri Lanka international tour packages', type: 'destination' },

  // ──────────────────────────────────────────────────────
  // SERVICES
  // ──────────────────────────────────────────────────────
  { name: 'Hotel Booking', url: '/services/hotel-booking', keywords: ['hotel', 'hotel booking', 'hotel reservation', 'accommodation', 'resort', '3 star', '4 star', '5 star'], description: 'Hotel booking service', type: 'service' },
  { name: 'Cab & Coach Rental', url: '/services/cab-coach-rental', keywords: ['cab', 'taxi', 'coach', 'tempo traveller', 'car rental', 'innova', 'suv', 'bus', 'vehicle', 'car hire'], description: 'Cab and coach rental service', type: 'service' },
  { name: 'Flight Booking', url: '/services/flight-booking', keywords: ['flight', 'air ticket', 'flight booking', 'airplane', 'airline', 'domestic flight', 'international flight'], description: 'Flight ticket booking service', type: 'service' },
  { name: 'Railway Booking', url: '/services/railway-booking', keywords: ['train', 'railway', 'rail ticket', 'irctc', 'train booking', 'railway booking'], description: 'Train ticket booking service', type: 'service' },
  { name: 'Tour Operators', url: '/services/tour-operators', keywords: ['tour operator', 'customized tour', 'custom package', 'plan my trip', 'itinerary', 'group tour', 'family tour'], description: 'Tour operator and customized package service', type: 'service' },
  { name: 'Alleppey ', url: '/place/kerala/kerala/alleppey', keywords: ['alleppey '], description: 'Top place to visit: Alleppey ', type: 'page' },
  { name: 'Munnar', url: '/place/kerala/kerala/munnar', keywords: ['munnar'], description: 'Top place to visit: Munnar', type: 'page' },
  { name: 'Thekkady', url: '/place/kerala/kerala/thekkady', keywords: ['thekkady'], description: 'Top place to visit: Thekkady', type: 'page' },
  { name: 'Vagamon', url: '/place/kerala/kerala/vagamon', keywords: ['vagamon'], description: 'Top place to visit: Vagamon', type: 'page' },
  { name: 'Valparai', url: '/place/kerala/kerala/valparai', keywords: ['valparai'], description: 'Top place to visit: Valparai', type: 'page' },
  { name: 'Kumarakom', url: '/place/kerala/kerala/kumarakom', keywords: ['kumarakom'], description: 'Top place to visit: Kumarakom', type: 'page' },
  { name: 'Marayoor', url: '/place/kerala/kerala/marayoor', keywords: ['marayoor'], description: 'Top place to visit: Marayoor', type: 'page' },
  { name: 'Cochin (Kochi)', url: '/place/kerala/kerala/cochin', keywords: ['cochin (kochi)'], description: 'Top place to visit: Cochin (Kochi)', type: 'page' },
  { name: 'Lighthouse Beach', url: '/place/tamilnadu/kovalam/lighthouse-beach', keywords: ['lighthouse beach'], description: 'Top place to visit: Lighthouse Beach', type: 'page' },
  { name: 'Samudra Beach', url: '/place/tamilnadu/kovalam/samudra-beach', keywords: ['samudra beach'], description: 'Top place to visit: Samudra Beach', type: 'page' },
  { name: 'Sree Padmanabhaswamy Temple', url: '/place/tamilnadu/trivandrum/padmanabhaswamy-temple', keywords: ['sree padmanabhaswamy temple'], description: 'Top place to visit: Sree Padmanabhaswamy Temple', type: 'page' },
  { name: 'Napier Museum', url: '/place/tamilnadu/trivandrum/napier-museum', keywords: ['napier museum'], description: 'Top place to visit: Napier Museum', type: 'page' },
  { name: 'Ramanathaswamy Temple', url: '/place/tamilnadu/rameswaram/ramanathaswamy-temple', keywords: ['ramanathaswamy temple'], description: 'Top place to visit: Ramanathaswamy Temple', type: 'page' },
  { name: 'Agniteertham', url: '/place/tamilnadu/rameswaram/agniteertham', keywords: ['agniteertham'], description: 'Top place to visit: Agniteertham', type: 'page' },
  { name: 'Pamban bridge', url: '/place/tamilnadu/rameswaram/pamban-bridge', keywords: ['pamban bridge'], description: 'Top place to visit: Pamban bridge', type: 'page' },
  { name: 'Panchmukhi hanuman mandir', url: '/place/tamilnadu/rameswaram/panchmukhi-hanuman', keywords: ['panchmukhi hanuman mandir'], description: 'Top place to visit: Panchmukhi hanuman mandir', type: 'page' },
  { name: 'Dhanushkodi', url: '/place/tamilnadu/rameswaram/dhanushkodi', keywords: ['dhanushkodi'], description: 'Top place to visit: Dhanushkodi', type: 'page' },
  { name: 'Vivekananda Rock Memorial', url: '/place/tamilnadu/kanyakumari/vivekananda-rock', keywords: ['vivekananda rock memorial'], description: 'Top place to visit: Vivekananda Rock Memorial', type: 'page' },
  { name: 'Thiruvalluvar Statue', url: '/place/tamilnadu/kanyakumari/thiruvalluvar-statue', keywords: ['thiruvalluvar statue'], description: 'Top place to visit: Thiruvalluvar Statue', type: 'page' },
  { name: 'Kanyakumari beach', url: '/place/tamilnadu/kanyakumari/kanyakumari-beach', keywords: ['kanyakumari beach'], description: 'Top place to visit: Kanyakumari beach', type: 'page' },
  { name: 'Sunset Point', url: '/place/tamilnadu/kanyakumari/sunset-point', keywords: ['sunset point'], description: 'Top place to visit: Sunset Point', type: 'page' },
  { name: 'Padmanabhapuram palace', url: '/place/tamilnadu/kanyakumari/padmanabhapuram-palace', keywords: ['padmanabhapuram palace'], description: 'Top place to visit: Padmanabhapuram palace', type: 'page' },
  { name: 'Suchindram temple', url: '/place/tamilnadu/kanyakumari/suchindram-temple', keywords: ['suchindram temple'], description: 'Top place to visit: Suchindram temple', type: 'page' },
  { name: 'Alagar Kovil', url: '/place/tamilnadu/madurai/alagar-koyil', keywords: ['alagar kovil'], description: 'Top place to visit: Alagar Kovil', type: 'page' },
  { name: 'Gandhi Museum', url: '/place/tamilnadu/madurai/gandhi-museum', keywords: ['gandhi museum'], description: 'Top place to visit: Gandhi Museum', type: 'page' },
  { name: 'Koodal Azhagar Temple', url: '/place/tamilnadu/madurai/koodal-algar', keywords: ['koodal azhagar temple'], description: 'Top place to visit: Koodal Azhagar Temple', type: 'page' },
  { name: 'Kumbakkarai Falls', url: '/place/tamilnadu/madurai/kumbakarai-falls', keywords: ['kumbakkarai falls'], description: 'Top place to visit: Kumbakkarai Falls', type: 'page' },
  { name: 'Madurai Meenakshi Amman Temple', url: '/place/tamilnadu/madurai/meenakshi-temple', keywords: ['madurai meenakshi amman temple'], description: 'Top place to visit: Madurai Meenakshi Amman Temple', type: 'page' },
  { name: 'Yoga Narasinga Perumal', url: '/place/tamilnadu/madurai/narasingam', keywords: ['yoga narasinga perumal'], description: 'Top place to visit: Yoga Narasinga Perumal', type: 'page' },
  { name: 'Pazhamudir Solai', url: '/place/tamilnadu/madurai/pazhamudir-solai', keywords: ['pazhamudir solai'], description: 'Top place to visit: Pazhamudir Solai', type: 'page' },
  { name: 'Srivilliputhur Andal Temple', url: '/place/tamilnadu/madurai/srivilliputhur', keywords: ['srivilliputhur andal temple'], description: 'Top place to visit: Srivilliputhur Andal Temple', type: 'page' },
  { name: 'Thirumalai Nayak Mahal', url: '/place/tamilnadu/madurai/thirumalai-nayak', keywords: ['thirumalai nayak mahal'], description: 'Top place to visit: Thirumalai Nayak Mahal', type: 'page' },
  { name: 'Tirupparankundram Murugan Temple', url: '/place/tamilnadu/madurai/tirupparankundram', keywords: ['tirupparankundram murugan temple'], description: 'Top place to visit: Tirupparankundram Murugan Temple', type: 'page' },
  { name: 'Vaigai Dam', url: '/place/tamilnadu/madurai/vaigai-dam', keywords: ['vaigai dam'], description: 'Top place to visit: Vaigai Dam', type: 'page' },
  { name: 'Vandiyur Mariamman Teppakulam', url: '/place/tamilnadu/madurai/vandiyur-teppakulam', keywords: ['vandiyur mariamman teppakulam'], description: 'Top place to visit: Vandiyur Mariamman Teppakulam', type: 'page' },
  { name: 'Madurai', url: '/place/tamilnadu/tamilnadu/madurai', keywords: ['madurai'], description: 'Top place to visit: Madurai', type: 'page' },
  { name: 'Rameswaram', url: '/place/tamilnadu/tamilnadu/rameswaram', keywords: ['rameswaram'], description: 'Top place to visit: Rameswaram', type: 'page' },
  { name: 'Kanyakumari', url: '/place/tamilnadu/tamilnadu/kanyakumari', keywords: ['kanyakumari'], description: 'Top place to visit: Kanyakumari', type: 'page' },
  { name: 'Ooty', url: '/place/tamilnadu/tamilnadu/ooty', keywords: ['ooty'], description: 'Top place to visit: Ooty', type: 'page' },
  { name: 'Kodaikanal', url: '/place/tamilnadu/tamilnadu/kodaikanal', keywords: ['kodaikanal'], description: 'Top place to visit: Kodaikanal', type: 'page' },
  { name: 'Chennai', url: '/place/tamilnadu/tamilnadu/chennai', keywords: ['chennai'], description: 'Top place to visit: Chennai', type: 'page' },
  { name: 'Samadhi Mandir', url: '/place/northindia/shirdi/samadhi-mandir', keywords: ['samadhi mandir'], description: 'Top place to visit: Samadhi Mandir', type: 'page' },
  { name: 'Dwarkamai Mosque', url: '/place/northindia/shirdi/dwarkamai-mosque', keywords: ['dwarkamai mosque'], description: 'Top place to visit: Dwarkamai Mosque', type: 'page' },
  { name: 'Chavadi', url: '/place/northindia/shirdi/chavadi', keywords: ['chavadi'], description: 'Top place to visit: Chavadi', type: 'page' },
  { name: 'Gurusthan', url: '/place/northindia/shirdi/gurusthan', keywords: ['gurusthan'], description: 'Top place to visit: Gurusthan', type: 'page' },
  { name: 'Lendi Baug (Garden)', url: '/place/northindia/shirdi/lendi-baug', keywords: ['lendi baug (garden)'], description: 'Top place to visit: Lendi Baug (Garden)', type: 'page' },
  { name: 'Dashashwamedh Ghat', url: '/place/northindia/varanasi/dashashwamedh-ghat', keywords: ['dashashwamedh ghat'], description: 'Top place to visit: Dashashwamedh Ghat', type: 'page' },
  { name: 'Kashi Vishwanath Temple', url: '/place/northindia/varanasi/kashi-vishwanath-temple', keywords: ['kashi vishwanath temple'], description: 'Top place to visit: Kashi Vishwanath Temple', type: 'page' },
  { name: 'Manikarnika Ghat', url: '/place/northindia/varanasi/manikarnika-ghat', keywords: ['manikarnika ghat'], description: 'Top place to visit: Manikarnika Ghat', type: 'page' },
  { name: 'Sarnath', url: '/place/northindia/varanasi/sarnath', keywords: ['sarnath'], description: 'Top place to visit: Sarnath', type: 'page' },
  { name: 'Assi Ghat', url: '/place/northindia/varanasi/assi-ghat', keywords: ['assi ghat'], description: 'Top place to visit: Assi Ghat', type: 'page' },
  { name: 'Tulsi Manas Temple', url: '/place/northindia/varanasi/tulsi-manas-temple', keywords: ['tulsi manas temple'], description: 'Top place to visit: Tulsi Manas Temple', type: 'page' },
  { name: 'Government Botanical Garden', url: '/place/tamilnadu/ooty/ooty-botanical-garden', keywords: ['government botanical garden'], description: 'Top place to visit: Government Botanical Garden', type: 'page' },
  { name: 'Ooty Lake', url: '/place/tamilnadu/ooty/ooty-lake', keywords: ['ooty lake'], description: 'Top place to visit: Ooty Lake', type: 'page' },
  { name: 'Doddabetta Peak', url: '/place/tamilnadu/ooty/doddabetta-peak', keywords: ['doddabetta peak'], description: 'Top place to visit: Doddabetta Peak', type: 'page' },
  { name: 'Kodaikanal Lake', url: '/place/tamilnadu/kodaikanal/kodaikanal-lake', keywords: ['kodaikanal lake'], description: 'Top place to visit: Kodaikanal Lake', type: 'page' },
  { name: 'Coaker\'s Walk', url: '/place/tamilnadu/kodaikanal/coakers-walk', keywords: ['coaker\'s walk'], description: 'Top place to visit: Coaker\'s Walk', type: 'page' },
  { name: 'Bryant Park', url: '/place/tamilnadu/kodaikanal/bryant-park', keywords: ['bryant park'], description: 'Top place to visit: Bryant Park', type: 'page' },
  { name: 'Pillar Rocks', url: '/place/tamilnadu/kodaikanal/pillar-rocks', keywords: ['pillar rocks'], description: 'Top place to visit: Pillar Rocks', type: 'page' },
  { name: 'Guna Caves', url: '/place/tamilnadu/kodaikanal/guna-caves', keywords: ['guna caves'], description: 'Top place to visit: Guna Caves', type: 'page' },
  { name: 'Pine Forest', url: '/place/tamilnadu/kodaikanal/pine-forest', keywords: ['pine forest'], description: 'Top place to visit: Pine Forest', type: 'page' },
  { name: 'Silver Cascade Falls', url: '/place/tamilnadu/kodaikanal/silver-cascade-falls', keywords: ['silver cascade falls'], description: 'Top place to visit: Silver Cascade Falls', type: 'page' },
];

// ──────────────────────────────────────────────────────
// SEARCH FUNCTION
// ──────────────────────────────────────────────────────
function similarity(s1: string, s2: string): number {
  let longer = s1; let shorter = s2;
  if (s1.length < s2.length) { longer = s2; shorter = s1; }
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  const costs = new Array();
  for (let i = 0; i <= longer.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= shorter.length; j++) {
      if (i === 0) { costs[j] = j; } else if (j > 0) {
        let newValue = costs[j - 1];
        if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[shorter.length] = lastValue;
  }
  return (longerLength - costs[shorter.length]) / longerLength;
}

const TYPO_DICTIONARY: Record<string, string> = {
  'honeymmon': 'honeymoon', 'honeymoonn': 'honeymoon', 'honeymon': 'honeymoon', 'honymoon': 'honeymoon',
  'kodai': 'kodaikanal', 'kodaiknal': 'kodaikanal', 'kodikanal': 'kodaikanal',
  'muner': 'munnar', 'munaar': 'munnar', 'ootty': 'ooty',
  'srinagr': 'srinagar', 'kasmir': 'kashmir',
  'meenachi': 'meenakshi', 'meenackshi': 'meenakshi', 'minakshi': 'meenakshi', 'mennachi': 'meenakshi', 'menachi': 'meenakshi'
};

const SEMANTIC_MAPPING: Record<string, string[]> = {
  'honeymoon': ['honeymoon', 'romantic', 'romance', 'couple', 'couples', 'newly married', 'romantic getaway'],
  'family': ['family', 'kids', 'children', 'parents'],
  'pilgrimage': ['temple', 'spiritual', 'devotional', 'religious', 'pilgrimage', 'yatra'],
  'adventure': ['adventure', 'trekking', 'hiking', 'activities']
};

const FILLER_WORDS = ['best', 'trip', 'tour', 'package', 'packages', 'please', 'show', 'me', 'tell', 'want', 'need', 'for', 'a', 'to', 'in', 'and'];

export function searchKnowledge(query: string): KnowledgeEntry[] {
  let q = query.toLowerCase().replace(/[^\w\s]/gi, '').trim();
  if (!q) return [];
  
  let rawWords = q.split(/\s+/);
  let correctedWords = rawWords.map(w => TYPO_DICTIONARY[w] || w);
  let meaningfulWords = correctedWords.filter(w => !FILLER_WORDS.includes(w));
  if (meaningfulWords.length === 0) meaningfulWords = correctedWords;

  const isAskingForContact = correctedWords.includes('contact');
  const isAskingForHome = correctedWords.includes('home');
  const isAskingForAbout = correctedWords.includes('about');

  const primaryKeywords = meaningfulWords.slice(0, 2);

  const scored = siteKnowledge.map(entry => {
    let score = 0;
    const title = entry.name.toLowerCase();
    const desc = entry.description.toLowerCase();
    const kws = entry.keywords.map(k => k.toLowerCase());
    const fullMeta = title + ' ' + desc + ' ' + kws.join(' ');
    
    if (title === 'contact us' && !isAskingForContact) return { entry, score: 0 };
    if (title === 'home' && !isAskingForHome) return { entry, score: 0 };
    if (['about us', 'services', 'testimonials'].includes(title) && !isAskingForAbout) {
      if (entry.type === 'page') return { entry, score: 0 };
    }

    if (primaryKeywords.length === 1) {
       const k1 = primaryKeywords[0];
       let k1Syns = [k1];
       for (const [key, syns] of Object.entries(SEMANTIC_MAPPING)) {
         if (syns.includes(k1) || key === k1) k1Syns = [...new Set([...k1Syns, ...syns])];
       }
       
       const matchTitle = k1Syns.some(s => title.includes(s));
       const matchDesc = k1Syns.some(s => desc.includes(s) || kws.some(kw => kw.includes(s)));
       
       if (matchTitle) score += 90;
       else if (matchDesc) score += 70;
       else if (k1Syns.some(s => fullMeta.includes(s))) score += 50;
       
       return { entry, score };
    }
    
    if (primaryKeywords.length >= 2) {
       const k1 = primaryKeywords[0];
       const k2 = primaryKeywords[1];
       
       let k1Syns = [k1]; let k2Syns = [k2];
       for (const [key, syns] of Object.entries(SEMANTIC_MAPPING)) {
         if (syns.includes(k1) || key === k1) k1Syns = [...new Set([...k1Syns, ...syns])];
         if (syns.includes(k2) || key === k2) k2Syns = [...new Set([...k2Syns, ...syns])];
       }

       const exactPhrase = `${k1} ${k2}`;
       const exactPhraseRev = `${k2} ${k1}`;
       
       const hasK1 = k1Syns.some(s => fullMeta.includes(s));
       const hasK2 = k2Syns.some(s => fullMeta.includes(s));
       
       if (!hasK1 || !hasK2) return { entry, score: 0 };
       
       if (title.includes(exactPhrase) || title.includes(exactPhraseRev)) score = 100;
       else if (k1Syns.some(s => title.includes(s)) && k2Syns.some(s => title.includes(s))) score = 95;
       else if ((k1Syns.some(s => title.includes(s) || kws.some(kw => kw.includes(s))) && k2Syns.some(s => title.includes(s) || kws.some(kw => kw.includes(s))))) score = 90;
       else if (hasK1 && hasK2 && entry.type !== 'page') score = 85;
       else if (k1Syns.some(s => desc.includes(s)) && k2Syns.some(s => desc.includes(s))) score = 75;
       else score = 50; 
    }
    
    return { entry, score };
  });

  const validResults = scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score);
  if (validResults.length === 0) return [];
  
  const exactPlace = validResults.find(s => s.score >= 95 && s.entry.type === 'page');
  if (exactPlace) return [exactPlace.entry];
  
  return validResults.slice(0, 5).map(s => s.entry);
}


// ──────────────────────────────────────────────────────
// STATIC COMPANY INFO
// ──────────────────────────────────────────────────────
export const companyInfo = {
  name: 'Logaa Holidays',
  phone: '+91 73973 29776',
  whatsapp: '917397329776',
  email: 'logaaholidays@gmail.com',
  address: 'T247, Sector T Type, Housing Board, Ellis Nagar, Madurai, Tamil Nadu 625016',
  instagram: 'https://www.instagram.com/logaaholidays/',
  facebook: 'https://www.facebook.com/logaaholidays',
};
