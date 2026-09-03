import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ChevronRight, Flame, Star, Clock, Heart, MapPin, Utensils, Activity, Send, Gift, ShieldCheck, Headphones, Share2, User, X, Eye } from 'lucide-react';
import { generateSlug } from '../lib/utils';
import { useSEO } from '../hooks/useSEO';
import { packagesDatabase, getPackageDisplayTitle, getPackageLink, normalizeDurationOrder } from './PackageDetails';
const destinationGroups = [
  {
    region: 'Tamil Nadu',
    places: ['Madurai Tours', 'Rameswaram Tours', 'Kanyakumari Tours', 'Ooty Tours', 'Kodaikanal Tours', 'Chennai Tours', 'Courtallam Tours', 'Pillayarpatti Tours', 'Tiruchendur Tours', 'Palani Tours', 'Trichy Tours', 'Thanjavur Tours', 'Kumbakonam Tours', 'Mahabalipuram Tours', 'Pondicherry Tours', 'Valparai Tours', 'Megamalai Tours']
  },
  {
    region: 'Kerala',
    places: ['Kerala Tours', 'Cochin Tours', 'Munnar Tours', 'Thekkady Tours', 'Alleppey Tours', 'Vagamon Tours', 'Kumarakom Tours', 'Athirappilly Tours', 'Kovalam Tours', 'Varkala Tours']
  },
  {
    region: 'Karnataka',
    places: ['Mysore Tours', 'Coorg Tours', 'Bangalore Tours', 'Chikmagalur Tours', 'Kabini Tours', 'Hampi Tours']
  },
  {
    region: 'North & East India',
    places: ['Shirdi Tours', 'Varanasi Tours', 'Delhi Tours', 'Agra Tours', 'Jaipur Tours', 'Shimla Tours', 'Manali Tours', 'Kashmir Tours', 'Cherrapunji Tours', 'Pune Tours', 'Shillong Tours', 'Guwahati Tours', 'Ayodhya Tours']
  },
  {
    region: 'International',
    places: ['Malaysia Tours', 'Singapore Tours', 'Bali Tours', 'Thailand Tours', 'Sri Lanka Tours']
  }
];



const shirdiPackages = [
  {
    id: 2011,
    title: 'Chennai to Shirdi Tour Package | Train + Flight | 4 Days / 3 Nights',
    duration: '4 Days / 3 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '10,500',
    image: '/assets/shiridi/shd1(small).webp'
  },
  {
    id: 2012,
    title: 'Chennai to Shirdi One Day Flight Tour Package',
    duration: 'One Day',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '10,500',
    image: '/assets/shiridi/shd2(small).webp'
  },
  {
    id: 2013,
    title: 'Chennai to Shirdi Tour Package via Pune | 2 Days / 1 Night Flight Package',
    duration: '2 Days / 1 Night',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '12,500',
    image: '/assets/shiridi/shd3(small).webp'
  },
  {
    id: 2014,
    title: 'Chennai to Shirdi Train Tour Package | 6 Days / 5 Nights Pilgrimage',
    duration: '6 Days / 5 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '5,500',
    image: '/assets/shiridi/shd4(small).webp'
  },
  {
    id: 2015,
    title: 'Chennai to Shirdi & Mantralayam Train Tour Package | 7 Days / 6 Nights Pilgrimage',
    duration: '7 Days / 6 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '7,500',
    image: '/assets/shiridi/shd5(small).webp'
  },
  {
    id: 2016,
    title: 'Chennai to Shirdi, Pandharpur & Mantralayam Train Tour Package | 8 Days / 7 Nights',
    duration: '8 Days / 7 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '8,500',
    image: '/assets/shiridi/shd6(small).webp'
  },
  {
    id: 2017,
    title: 'Chennai to Mumbai & Shirdi Flight Tour Package | 2 Days / 1 Night',
    duration: '2 Days / 1 Night',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '14,500',
    image: '/assets/shiridi/shd7(small).webp'
  },
  {
    id: 2018,
    title: 'Chennai to Shirdi & Nashik Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/shd8(small).webp'
  },
  {
    id: 2019,
    title: 'Chennai to Shirdi & Pandharpur Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/shd9(small).webp'
  },
  {
    id: 2020,
    title: 'Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package | 4 Days / 3 Nights',
    duration: '4 Days / 3 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '18,500',
    image: '/assets/shiridi/shd10(small).webp'
  },
  {
    id: 2021,
    title: 'Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/shd11(small).webp'
  },
  {
    id: 2022,
    title: 'Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package | 4 Days / 3 Nights',
    duration: '4 Days / 3 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '18,500',
    image: '/assets/shiridi/shd12(small).webp'
  },
  {
    id: 2023,
    title: 'Chennai to Shirdi & Lonavala Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/shd13(small).webp'
  },
  {
    id: 2024,
    title: 'Chennai to Shirdi, Ajanta & Ellora Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/shd14(small).webp'
  }
];

const punePackages = [
  {
    id: 2,
    title: 'Shirdi Flight Packages From Chennai - Train - Flight 3 Night - 4 Days',
    duration: '3 Nights / 4 Days',
    destination: 'Pune, Shirdi, Shani Shingnapur',
    activities: 'Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/shirdi_train_countryside.png'
  },
  {
    id: 4,
    title: 'Shirdi Flight Package Via Pune From Chennai - 2 Days',
    duration: '1 Nights / 2 Days',
    destination: 'Pune, Shirdi, Shani Shingnapur',
    activities: 'Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/shaniwar_wada_pune.png'
  },
  {
    id: 5,
    title: 'Shirdi Train Package From Chennai - 5 Night - 6 Days',
    duration: '5 Nights / 6 Days',
    destination: 'Pune, Shirdi, Ganganapur, Shani Shingnapur',
    activities: 'Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/shani_shingnapur.png'
  },
  {
    id: 6,
    title: 'Shirdi Train Package From Chennai 7 Days',
    duration: '6 Nights / 7 Days',
    destination: 'Pune, Shirdi, Ganganapur',
    activities: 'Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/sai_baba_idol.png'
  },
  {
    id: 7,
    title: 'Shirdi And Pandaripur Train Package From Chennai 8 Days',
    duration: '7 Nights / 8 Days',
    destination: 'Pune, Shirdi, Pandharpur',
    activities: 'Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/pandharpur_wari.png'
  },
  {
    id: 10,
    title: 'Shirdi And Pandaripur Flight Package From Chennai - 3 Days',
    duration: '2 Nights / 3 Days',
    destination: 'Pune, Shirdi, Pandharpur, Shani Shingnapur',
    activities: 'Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/vitthal_idol.png'
  },
  {
    id: 12,
    title: 'Shirdi - 2 Jyotirlinga Package From Chennai - 3 Days',
    duration: '2 Nights / 3 Days',
    destination: 'Pune, Shirdi, Trimbakeshwar, Aurangabad, Ellora Caves',
    activities: 'Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/trimbakeshwar_temple.png'
  },
  {
    id: 13,
    title: 'Shirdi - Jyotirlinga Package From Chennai 3 Night - 4 Days',
    duration: '3 Nights / 4 Days',
    destination: 'Pune, Shirdi, Trimbakeshwar, Aurangabad, Ellora Caves',
    activities: 'Caving, Museums, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/generated/jyotirlinga_ellora_pkg.png'
  }
];

const kanyakumariPackages = [
  
  {
    id: 28,
    title: 'Madurai - Rameswaram - Kanyakumari 4N 5D Tour',
    duration: '4 Nights / 5 Days',
    destination: 'Kanyakumari, Madurai, Rameswaram, Meenakshi Temple',
    activities: 'Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
    price: 'On Request',
    image: '/assets/generated/kanyakumari_beach.png'
  },
  // {
  //   id: 29,
  //   title: '10 Night - 11 Days Tamil Nadu Tour Package',
  //   duration: '10 Nights / 11 Days',
  //   destination: 'Chennai, Kanchipuram, Kanyakumari, Mahabalipuram...',
  //   activities: 'Sightseeing',
  //   themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
  //   price: 'On Request',
  //   image: '/assets/chennai/10 Night - 11 Days Tamil Nadu Tour Package card.webp'
  // },
  {
    id: 30,
    title: 'Delightful Madurai - Rameswaram - Kanyakumari 3Night 4Days Tour',
    duration: '3 Nights / 4 Days',
    destination: 'Kanyakumari, Madurai, Rameswaram, Kumari Amman Temple',
    activities: 'Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
    price: 'On Request',
    image: '/assets/generated/vivekananda_rock.png'
  },
  {
    id: 31,
    title: 'Madurai - Rameswaram - Kanyakumari - Trivandrum Tour 5N 6D',
    duration: '5 Nights / 6 Days',
    destination: 'Kovalam, Trivandrum, Kanyakumari, Madurai, Rameswaram...',
    activities: 'Beaches Sightseeing, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
    price: 'On Request',
    image: '/assets/generated/padmanabhaswamy_temple.png'
  }
];

const cherrapunjiPackages = [
  {
    id: 32,
    title: 'Abode Of The Cloud - Shillong - 3N Tour',
    duration: '3 Nights / 4 Days',
    destination: 'Shillong, Cherrapunji, Nohkalikai Falls',
    activities: 'Caving, Sightseeing',
    themes: 'Hill Stations & Valleys, Culture & Heritage',
    price: 'On Request',
    image: '/assets/Tripura2.webp'
  },
  {
    id: 33,
    title: 'Eastern Meadows Shillong - Guwahati Tour',
    duration: '3 Nights / 4 Days',
    destination: 'Guwahati, Shillong, Cherrapunji, Nohkalikai Falls',
    activities: 'Caving, Museums, Sightseeing',
    themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/manipur2.webp'
  },
  {
    id: 34,
    title: 'North-East Beauty Kaziranga - Shillong Tour',
    duration: '4 Nights / 5 Days',
    destination: 'Shillong, Cherrapunji, Kaziranga, Kaziranga National Park...',
    activities: 'Caving, Jeep Safari, Elephant Safari, Sightseeing',
    themes: 'Wildlife, Hill Stations & Valleys, Culture & Heritage',
    price: 'On Request',
    image: '/assets/Uttar Pradesh1.webp'
  },
  {
    id: 35,
    title: 'Splendour Himalaya Shillong - Guwahati Tour',
    duration: '4 Nights / 5 Days',
    destination: 'Shillong, Cherrapunji, Dawki, Guwahati, Nohkalikai Falls',
    activities: 'Caving, Museums, Sightseeing',
    themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/Mizoram2.webp'
  },
  {
    id: 36,
    title: 'Scotland Of The East - Shillong 4N Tour',
    duration: '4 Nights / 5 Days',
    destination: 'Shillong, Cherrapunji, Dawki, Nohkalikai Falls',
    activities: 'Caving, Sightseeing',
    themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/Tripura2.webp'
  },
  {
    id: 37,
    title: 'Peaks - Lakes Shillong - Guwahati Tour',
    duration: '4 Nights / 5 Days',
    destination: 'Guwahati, Shillong, Cherrapunji, Nohkalikai Falls',
    activities: 'Caving, Museums, Sightseeing',
    themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/manipur2.webp'
  },
  {
    id: 38,
    title: 'North East Triangle Kaziranga - Shillong - Guwahati Tour',
    duration: '5 Nights / 6 Days',
    destination: 'Guwahati, Shillong, Cherrapunji, Kaziranga...',
    activities: 'Jeep Safari, Elephant Safari, Museums, Sightseeing',
    themes: 'Wildlife, Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/Uttar Pradesh1.webp'
  },
  {
    id: 39,
    title: 'Splendour Himalaya Shillong - Guwahati 6 Days Tour',
    duration: '5 Nights / 6 Days',
    destination: 'Guwahati, Shillong, Cherrapunji, Dawki, Nohkalikai Falls',
    activities: 'Caving, Museums, Sightseeing',
    themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/Mizoram2.webp'
  }
];

const shillongPackages = [
  ...cherrapunjiPackages
];

const guwahatiPackages = [
  {
    id: 40,
    title: 'The Rhino Land - Kaziranga - Guwahati Tour',
    duration: '3 Nights / 4 Days',
    destination: 'Guwahati, Kaziranga, Kaziranga National Park',
    activities: 'Jungle Safari, Jeep Safari, Elephant Safari, Sightseeing',
    themes: 'Wildlife, Religious & Pilgrimage, Culture & Heritage',
    price: 'On Request',
    image: '/assets/manipur2.webp'
  },
  cherrapunjiPackages.find(p => p.id === 33)!,
  cherrapunjiPackages.find(p => p.id === 35)!,
  cherrapunjiPackages.find(p => p.id === 37)!,
  cherrapunjiPackages.find(p => p.id === 38)!,
  cherrapunjiPackages.find(p => p.id === 39)!
];

const getDbPackage = (id: string) => {
  const p = packagesDatabase[id];
  if (!p) {
    console.error(`Package with ID ${id} not found in packagesDatabase`);
    return {
      id: parseInt(id),
      title: 'Package Not Found',
      duration: 'N/A',
      destination: 'N/A',
      activities: 'N/A',
      themes: 'N/A',
      price: 'On Request',
      image: ''
    };
  }
  return {
    id: parseInt(p.id || id),
    title: p.title,
    duration: p.overview?.duration || 'Various',
    destination: p.overview?.destination || 'Various',
    activities: p.overview?.activities || 'Various',
    themes: p.overview?.themes || 'Various',
    price: p.priceDetails?.amount || 'On Request',
    image: p.image
  };
};

const varanasiPackages = [
  getDbPackage('2000')!,
  getDbPackage('2001')!,
  getDbPackage('2002')!,
  getDbPackage('2003')!,
  getDbPackage('2004')!,
  getDbPackage('2005')!,
  getDbPackage('2006')!,
  getDbPackage('2007')!,
  getDbPackage('2008')!,
  getDbPackage('2009')!
];

const goldenTrianglePackages = [
  getDbPackage('8001')!,
  getDbPackage('8002')!,
  getDbPackage('8003')!,
  getDbPackage('8004')!,
  getDbPackage('8005')!,
  getDbPackage('8006')!,
  getDbPackage('8007')!,
  getDbPackage('8008')!,
  getDbPackage('8009')!,
  getDbPackage('8010')!,
  getDbPackage('8011')!
];

const shimlaPackages = [
  getDbPackage('8101')!,
  getDbPackage('8102')!,
  getDbPackage('8103')!,
  getDbPackage('8104')!,
  getDbPackage('8105')!
];

const manaliPackages = [
  getDbPackage('8201')!,
  getDbPackage('8202')!,
  getDbPackage('8203')!,
  getDbPackage('8204')!,
  getDbPackage('8205')!
];

const manaliVolvoPackages = [
  getDbPackage('8301')!,
  getDbPackage('8302')!,
  getDbPackage('8303')!,
  getDbPackage('8304')!
];

const keralaHoneymoonPackages = [
  getDbPackage('9001')!,
  getDbPackage('9002')!,
  getDbPackage('9003')!,
  getDbPackage('9004')!
];

const goaHoneymoonPackages = [
  getDbPackage('9101')!,
  getDbPackage('9102')!,
  getDbPackage('9104')!,
  getDbPackage('9106')!,
  getDbPackage('9107')!,
  getDbPackage('9109')!
];

const andamanHoneymoonPackages = [
  getDbPackage('9601')!,
  getDbPackage('9602')!,
  getDbPackage('9603')!,
  getDbPackage('9604')!
];

const sikkimHoneymoonPackages = [
  getDbPackage('9701')!,
  getDbPackage('9702')!,
  getDbPackage('9703')!,
  getDbPackage('9704')!
];

const maldivesHoneymoonPackages = [
  getDbPackage('9801')!,
  getDbPackage('9802')!,
  getDbPackage('9803')!,
  getDbPackage('9804')!
];

const tamilNaduHoneymoonPackages = [
  getDbPackage('9201')!,
  getDbPackage('9202')!,
  getDbPackage('9203')!,
  getDbPackage('9204')!
];

const karnatakaHoneymoonPackages = [
  getDbPackage('9301')!,
  getDbPackage('9302')!,
  getDbPackage('9303')!,
  getDbPackage('9304')!
];

const kashmirHoneymoonPackages = [
  getDbPackage('9401')!,
  getDbPackage('9402')!,
  getDbPackage('9403')!
];

const himachalHoneymoonPackages = [
  getDbPackage('9501')!,
  getDbPackage('9502')!,
  getDbPackage('9503')!,
  getDbPackage('9504')!
];


const kashmirPackages = [
  getDbPackage('8401')!,
  getDbPackage('8402')!,
  getDbPackage('8403')!,
  getDbPackage('8404')!,
  getDbPackage('8405')!
];

const rameswaramPackages = [
  kanyakumariPackages.find(p => p.id === 28)!,
  kanyakumariPackages.find(p => p.id === 30)!,
  kanyakumariPackages.find(p => p.id === 31)!,
  // {
  //   id: 42,
  //   title: 'Madurai To Rameswaram 1N 2D Tour',
  //   duration: '1 Nights / 2 Days',
  //   destination: 'Madurai, Rameswaram',
  //   activities: 'Sightseeing',
  //   themes: 'Religious & Pilgrimage, Culture & Heritage',
  //   price: 'On Request',
  //   image: '/assets/Uttarakhand1.webp'
  // }
];

// Normalize all hardcoded packages lists in TourCategory.tsx
[shirdiPackages, punePackages, kanyakumariPackages, cherrapunjiPackages, shillongPackages, guwahatiPackages, varanasiPackages, rameswaramPackages, goldenTrianglePackages, shimlaPackages, manaliPackages, manaliVolvoPackages, keralaHoneymoonPackages, goaHoneymoonPackages, tamilNaduHoneymoonPackages, karnatakaHoneymoonPackages, kashmirHoneymoonPackages, himachalHoneymoonPackages, kashmirPackages].forEach(arr => {
  arr.forEach(p => {
    if (!p) return;
    if (p.title) p.title = normalizeDurationOrder(p.title);
    if (p.duration) p.duration = normalizeDurationOrder(p.duration);
  });
});

const ayodhyaPackages = Object.values(packagesDatabase).filter((p: any) => {
  const titleLower = (p.title || '').toLowerCase();
  return titleLower.includes('ayodhya');
}).map((p: any) => ({
  id: parseInt(p.id),
  title: p.title,
  duration: p.overview?.duration || 'Various',
  destination: p.overview?.destination || 'Various',
  activities: p.overview?.activities || 'Various',
  themes: p.overview?.themes || 'Various',
  price: p.priceDetails?.amount || 'On Request',
  image: p.image,
  rating: p.rating,
  reviews: p.reviews
}));

const mockPackages: any[] = [];

const TourCategory = () => {
  const { category } = useParams<{ category: string }>();

  // Set SEO metadata dynamically based on category
  const seoData = useMemo(() => {
    switch (category) {
      case 'goa-honeymoon-packages': return {
        title: 'Goa Honeymoon Packages from Tamil Nadu | Logaa Holidays',
        description: 'Explore romantic Goa honeymoon packages for 2 Nights 3 Days, 3 Nights 4 Days and 4 Nights 5 Days with resorts, sightseeing and couple experiences.',
        keywords: 'Goa honeymoon packages, Goa honeymoon packages from Tamil Nadu, Goa honeymoon package from Madurai, Goa honeymoon package from Chennai, Goa couple packages, Romantic Goa tour packages, Goa honeymoon resort package, Affordable Goa honeymoon package'
      };
      case 'andaman-honeymoon-packages': return {
        title: 'Andaman Honeymoon Packages | Havelock & Neil Island Tours',
        description: 'Book premium Andaman honeymoon packages covering Port Blair, Havelock and Neil Island with private cruises, beach stays and flight options.',
        keywords: 'Andaman honeymoon packages, Andaman honeymoon package from Madurai, Andaman honeymoon package from Chennai, Andaman honeymoon package with flight, Havelock honeymoon package, Neil Island honeymoon package, Port Blair honeymoon package, Andaman couple tour package, Andaman honeymoon with private cruise, Premium Andaman honeymoon package, Logaa Holidays Andaman honeymoon'
      };
      case 'andaman-tours': return {
        title: 'Andaman Tour Packages 7 Nights 8 Days | Logaa Holidays',
        description: 'Book a 7 Nights 8 Days Andaman tour package covering Port Blair, Havelock Island, Neil Island, Ross Island, North Bay, Elephanta Beach and Baratang.',
        keywords: 'Andaman tour package 7 nights 8 days, Port Blair Havelock Neil Island package, Andaman family tour package, Andaman honeymoon package'
      };
      case 'sikkim-darjeeling-honeymoon-packages': return {
        title: 'Sikkim Darjeeling Honeymoon Packages | Gangtok & Pelling',
        description: 'Book premium Sikkim and Darjeeling honeymoon packages covering Gangtok, Tsomgo Lake, Pelling and Darjeeling with flight and train options.',
        keywords: 'Sikkim honeymoon packages, Darjeeling honeymoon packages, Gangtok honeymoon package, Sikkim Darjeeling honeymoon package, Sikkim honeymoon package from Madurai, Sikkim honeymoon package from Chennai, Gangtok Pelling Darjeeling package, Sikkim honeymoon package with flight, Sikkim honeymoon package with train, Premium Sikkim honeymoon package, Logaa Holidays Sikkim honeymoon'
      };
      case 'maldives-honeymoon-packages': return {
        title: 'Maldives Honeymoon Packages | Beach Villa & Water Villa',
        description: 'Book premium Maldives honeymoon packages with beach villas, water villas, island transfers, meal plans and flight options from Tamil Nadu.',
        keywords: 'Maldives honeymoon packages, Maldives honeymoon package from Madurai, Maldives honeymoon package from Chennai, Maldives honeymoon package with flight, Maldives water villa package, Maldives beach villa honeymoon, Maldives couple package, Maldives all-inclusive honeymoon package, Premium Maldives honeymoon package, Maldives honeymoon from Tamil Nadu, Logaa Holidays Maldives honeymoon'
      };
      case 'karnataka-honeymoon-packages': return {
        title: 'Karnataka Honeymoon Packages | Coorg, Mysore & Chikmagalur',
        description: 'Book premium Karnataka honeymoon packages covering Mysore, Coorg and Chikmagalur with private cab, coffee-estate resorts and romantic couple experiences.',
        keywords: 'Karnataka honeymoon packages, Coorg honeymoon package, Mysore Coorg honeymoon package, Chikmagalur honeymoon package, Coorg Chikmagalur couple tour, Karnataka honeymoon package from Madurai, Karnataka honeymoon package from Chennai, Karnataka couple tour package, Coffee estate honeymoon package, Karnataka honeymoon with private cab, Premium Coorg honeymoon package, Logaa Holidays Karnataka honeymoon'
      };
      case 'kashmir-honeymoon-packages': return {
        title: 'Kashmir Honeymoon Packages | Srinagar, Gulmarg & Pahalgam',
        description: 'Book premium Kashmir honeymoon packages covering Srinagar, Gulmarg, Pahalgam and Sonamarg with Shikara ride, private cab and romantic experiences.',
        keywords: 'Kashmir honeymoon packages, Kashmir honeymoon package from Madurai, Kashmir honeymoon package from Chennai, Srinagar honeymoon package, Gulmarg honeymoon package, Pahalgam honeymoon package, Kashmir honeymoon with Shikara ride, Kashmir honeymoon with houseboat, Kashmir couple tour package, Premium Kashmir honeymoon package, Logaa Holidays Kashmir honeymoon'
      };
      case 'himachal-honeymoon-packages': return {
        title: 'Himachal Honeymoon Packages | Shimla & Manali Couple Tours',
        description: 'Book premium Himachal honeymoon packages covering Shimla, Kufri, Manali and Solang Valley with private cab, romantic stays and customised experiences.',
        keywords: 'Himachal honeymoon packages, Shimla honeymoon package, Manali honeymoon package, Shimla Manali honeymoon package, Himachal honeymoon package from Madurai, Himachal honeymoon package from Chennai, Manali couple tour package, Shimla Manali honeymoon from Tamil Nadu, Manali honeymoon with private cab, Premium Himachal honeymoon package, Logaa Holidays Himachal honeymoon'
      };
      case 'tamil-nadu-honeymoon-packages': return {
        title: 'Premium Tamil Nadu Honeymoon Packages | Ooty & Kodaikanal',
        description: 'Book premium Tamil Nadu honeymoon packages covering Ooty, Coonoor, Kodaikanal and Kanyakumari with couple-friendly resorts, private cab and romantic experiences.',
        keywords: 'Tamil Nadu honeymoon packages, Premium Tamil Nadu honeymoon package, Kodaikanal honeymoon package, Ooty honeymoon package, Ooty Coonoor honeymoon tour, Kanyakumari couple package, Tamil Nadu honeymoon package from Madurai, Tamil Nadu honeymoon packages from Chennai, Tamil Nadu couple tour package, South India honeymoon package, Logaa Holidays honeymoon package'
      };
      case 'kerala-honeymoon-packages': return {
        title: 'Kerala Honeymoon Packages | Romantic Tours from Logaa Holidays',
        description: 'Book the best Kerala honeymoon packages for couples. Enjoy misty hills in Munnar, backwaters in Alleppey, and romantic stays tailored for your perfect escape.',
        keywords: 'Kerala honeymoon packages, romantic Kerala tours, Munnar honeymoon packages, Alleppey houseboat for couples, best Kerala honeymoon tour'
      };
      case 'karnataka-tours': return {
        title: 'Karnataka Tour Packages from Tamil Nadu | Logaa Holidays',
        description: 'Book Karnataka tour packages from Madurai, Chennai, Trichy, Coimbatore and Salem covering Mysore, Coorg, Chikmagalur, Hampi, Udupi, Murudeshwar and Gokarna.',
        keywords: 'Karnataka tour packages from Tamil Nadu, Karnataka package from Madurai, Mysore Coorg tour from Chennai, Karnataka package from Trichy, Coorg package from Coimbatore, Mysore Coorg Kabini package, Chikmagalur family package, Hampi Badami heritage tour, Udupi Murudeshwar Gokarna package, Karnataka honeymoon package, Logaa Holidays Karnataka tour'
      };
      case 'kashmir-tours': return {
        title: 'Kashmir Tour Packages from Tamil Nadu | Logaa Holidays',
        description: 'Book customized Kashmir tour packages from Madurai, Chennai & Tamil Nadu with Logaa Holidays. Cover Srinagar, Gulmarg, Pahalgam & Sonamarg.',
        keywords: 'Kashmir tour packages from Tamil Nadu, Kashmir package from Madurai, Kashmir package from Chennai, Srinagar Gulmarg Pahalgam package, Logaa Holidays Kashmir tour'
      };
      case 'shimla-tours': return {
        title: 'Shimla Tour Packages from Tamil Nadu | Logaa Holidays',
        description: 'Book Shimla tour packages from Madurai, Chennai and Tamil Nadu with hotel, private cab and comfortable sightseeing through Logaa Holidays.',
        keywords: 'Shimla tour packages from Tamil Nadu, Shimla package from Madurai, Shimla package from Chennai, Shimla Manali tour package, Kullu Manali tour, Kufri sightseeing, Himachal tour package from South India, Logaa Holidays Shimla package'
      };
      case 'manali-tours': return {
        title: 'Manali Tour Packages from Tamil Nadu | Logaa Holidays',
        description: 'Experience snow-covered mountains with Logaa Holidays’ customized Manali tour packages from Madurai, Chennai & Tamil Nadu.',
        keywords: 'Manali Volvo package, Delhi to Manali Volvo package, Manali Volvo package from Madurai, Manali package from Tamil Nadu, Delhi Manali AC Volvo package'
      };
      case 'manali-volvo-tours': return {
        title: 'Manali Volvo Tour Packages from Delhi | Logaa Holidays',
        description: 'Travel comfortably from Delhi to Manali with Logaa Holidays’ customized Volvo tour packages including hotel, meals, local sightseeing.',
        keywords: 'Manali Volvo package, Delhi to Manali Volvo package, Manali Volvo package from Madurai, Manali package from Tamil Nadu, Delhi Manali AC Volvo package'
      };
      case 'shirdi-tours': return {
        title: 'Shirdi Yatra & Pilgrimage Packages | Shirdi Travel',
        description: 'Explore Shirdi Yatra and pilgrimage packages with detailed itineraries, temple visits, travel options and trusted holiday services.',
        keywords: 'Shirdi Yatra, Shirdi Pilgrimage, Shirdi Temple, Shirdi Travel, Shirdi Yatra Packages, Shirdi Pilgrimage Packages'
      };
      default: {
        const placeKeyword = (category || '').replace('-tours', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return {
          title: `${placeKeyword} Tour Packages | Logaa Holidays`,
          description: `Explore the best ${placeKeyword} tour packages with Logaa Holidays. Find affordable and premium holiday options customized for you.`,
          keywords: `${placeKeyword} tours, ${placeKeyword} tour packages, best ${placeKeyword} trips, holiday in ${placeKeyword}`
        };
      }
    }
  }, [category]);

  useSEO(seoData.title, seoData.description, seoData.keywords);

  const [savedPackages, setSavedPackagesState] = useState<number[]>(() => {
    const saved = localStorage.getItem('savedTours');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return []; }
    }
    return [];
  });

  const setSavedPackages = (newSaved: number[]) => {
    setSavedPackagesState(newSaved);
    localStorage.setItem('savedTours', JSON.stringify(newSaved));
  };
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  const handleSave = (id: number) => {
    if (savedPackages.includes(id)) {
      setSavedPackages(savedPackages.filter(pId => pId !== id));
    } else {
      setSavedPackages([...savedPackages, id]);
    }
  };

  const handleShare = async (pkg: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pkg.title,
          text: `Check out this tour package: ${pkg.title}`,
          url: window.location.origin + getPackageLink(pkg)
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin + getPackageLink(pkg));
      alert("Link copied to clipboard!");
    }
  };

  const categoryTitle = useMemo(() => {
    if (!category) return 'Tours';

    // Destinations that natively start from Chennai
    const chennaiOrigins = [ 'pune', 'ayodhya', 'kasi', 'guwahati', 'shillong', 'cherrapunji'];
    const placeKeyword = category.replace('-tours', '').toLowerCase();
    const placeDisplay = placeKeyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    if (chennaiOrigins.includes(placeKeyword)) {
      return `Chennai to ${placeDisplay} Tour`;
    }

    if (category === 'andaman-island-tour' || category === 'andaman-tours') {
      return 'Andaman Tour Packages';
    }

    if (category === 'golden-triangle-tours') {
      return 'Golden Triangle';
    }

    if (category === 'kerala-honeymoon-packages') {
      return 'Kerala Honeymoon';
    }

    if (category === 'tamil-nadu-honeymoon-packages') {
      return 'Tamil Nadu Honeymoon';
    }

    if (category === 'goa-honeymoon-packages') {
      return 'Goa Honeymoon';
    }

    if (category === 'karnataka-honeymoon-packages') {
      return 'Karnataka Honeymoon';
    }

    if (category === 'kashmir-honeymoon-packages') {
      return 'Kashmir Honeymoon';
    }

    if (category === 'himachal-honeymoon-packages') {
      return 'Himachal Honeymoon';
    }

    if (category === 'andaman-honeymoon-packages') {
      return 'Andaman Honeymoon';
    }

    if (category === 'sikkim-darjeeling-honeymoon-packages') {
      return 'Sikkim Darjeeling Honeymoon';
    }

    if (category === 'maldives-honeymoon-packages') {
      return 'Maldives Honeymoon';
    }

    const standaloneTours = ['madurai', 'kerala', 'chennai', 'cochin', 'munnar', 'thekkady', 'alleppey', 'vagamon', 'kottayam', 'kovalam', 'karnataka', 'shimla', 'manali', 'manali-volvo', 'kashmir', 'shirdi', 'varanasi', 'mysore', 'coorg', 'bangalore', 'chikmagalur', 'kabini', 'hampi'];
    if (standaloneTours.includes(placeKeyword)) {
      return `${placeDisplay} Tour`;
    }

    // Default to Madurai as the base origin for South India trips
    return `Madurai to ${placeDisplay} Tour`;
  }, [category]);

  const [searchQuery, setSearchQuery] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [themeFilter, setThemeFilter] = useState('');
  const [transportFilter, setTransportFilter] = useState('');

  const basePackages = useMemo(() => {
    if (!category) {
      return Object.values(packagesDatabase).map((p: any) => ({
        id: parseInt(p.id),
        title: p.title,
        duration: p.overview?.duration || 'Various',
        destination: p.overview?.destination || 'Various',
        activities: p.overview?.activities || 'Various',
        themes: p.overview?.themes || 'Various',
        price: p.priceDetails?.amount || 'On Request',
        image: p.image,
        rating: p.rating,
        reviews: p.reviews
      }));
    }

    const result = (() => {
      switch (category) {
        case 'shirdi-tours': return shirdiPackages;
        case 'varanasi-tours': return varanasiPackages;
        case 'pune-tours': return punePackages;
        case 'kanyakumari-tours': return kanyakumariPackages;
        case 'cherrapunji-tours': return cherrapunjiPackages;
        case 'shillong-tours': return shillongPackages;
        case 'guwahati-tours': return guwahatiPackages;
        case 'ayodhya-tours': return ayodhyaPackages;
        case 'rameswaram-tours': return rameswaramPackages;
        case 'golden-triangle-tours': return goldenTrianglePackages;
        case 'shimla-tours': return shimlaPackages;
        case 'kashmir-tours': return kashmirPackages;
        case 'manali-tours': return manaliPackages;
        case 'manali-volvo-tours': return manaliVolvoPackages;
        case 'kerala-honeymoon-packages': return keralaHoneymoonPackages;
        case 'goa-honeymoon-packages': return goaHoneymoonPackages;
        case 'karnataka-honeymoon-packages': return karnatakaHoneymoonPackages;
        case 'tamil-nadu-honeymoon-packages': return tamilNaduHoneymoonPackages;
        case 'kashmir-honeymoon-packages': return kashmirHoneymoonPackages;
        case 'himachal-honeymoon-packages': return himachalHoneymoonPackages;
        case 'andaman-honeymoon-packages': return andamanHoneymoonPackages;
        case 'sikkim-darjeeling-honeymoon-packages': return sikkimHoneymoonPackages;
        case 'maldives-honeymoon-packages': return maldivesHoneymoonPackages;
        case 'andaman-island-tour':
        case 'andaman-tours': {
          return Object.values(packagesDatabase).filter((p: any) => {
            const titleLower = (p.title || '').toLowerCase();
            const destLower = (p.overview?.destination || '').toLowerCase();
            const idNum = parseInt(p.id);
            return (idNum >= 6000 && idNum <= 6099) || idNum === 9901 || titleLower.includes('andaman') || destLower.includes('andaman');
          }).map((p: any) => ({
            id: parseInt(p.id),
            title: getPackageDisplayTitle(p),
            duration: p.overview?.duration || 'Various',
            destination: p.overview?.destination || 'Various',
            activities: p.overview?.activities || 'Various',
            themes: p.overview?.themes || 'Various',
            price: p.priceDetails?.amount || 'On Request',
            image: p.image,
            rating: p.rating,
            reviews: p.reviews
          }));
        }
        case 'megamalai-tours':
        case 'theni-tours': {
          return Object.values(packagesDatabase).filter((p: any) => {
            const titleLower = (p.title || '').toLowerCase();
            const destLower = (p.overview?.destination || '').toLowerCase();
            return titleLower.includes('megamalai') || titleLower.includes('meghamalai') || titleLower.includes('theni') || destLower.includes('megamalai') || destLower.includes('meghamalai') || destLower.includes('theni');
          }).map((p: any) => ({
            id: parseInt(p.id),
            title: getPackageDisplayTitle(p),
            duration: p.overview?.duration || 'Various',
            destination: p.overview?.destination || 'Various',
            activities: p.overview?.activities || 'Various',
            themes: p.overview?.themes || 'Various',
            price: p.priceDetails?.amount || 'On Request',
            image: p.image,
            rating: p.rating,
            reviews: p.reviews
          }));
        }
        case 'madurai-tours': {
          return Object.values(packagesDatabase).filter((p: any) => {
            const titleLower = (p.title || '').toLowerCase();
            const destLower = (p.overview?.destination || '').toLowerCase();
            const idNum = parseInt(p.id);
            const maduraiKeywords = ['madurai', 'kumbakonam', 'trichy', 'thiruchendur', 'megamalai', 'thanjavur'];
            return (idNum >= 2025 && idNum <= 2099) || maduraiKeywords.some(kw => titleLower.includes(kw) || destLower.includes(kw));
          }).map((p: any) => ({
            id: parseInt(p.id),
            title: getPackageDisplayTitle(p),
            duration: p.overview?.duration || 'Various',
            destination: p.overview?.destination || 'Various',
            activities: p.overview?.activities || 'Various',
            themes: p.overview?.themes || 'Various',
            price: p.priceDetails?.amount || 'On Request',
            image: p.image,
            rating: p.rating,
            reviews: p.reviews
          })).sort((a: any, b: any) => {
            const getDays = (dur: string) => {
              if (!dur) return 999;
              const lowerDur = dur.toLowerCase();
              if (lowerDur.includes('one day') || lowerDur.includes('1 day') || lowerDur.includes('full day')) return 1;
              if (lowerDur.includes('half day')) return 0.5;
              const match = dur.match(/(\d+)\s*day/i);
              return match ? parseInt(match[1]) : 999;
            };

            const getPriority = (pkg: any) => {
              const titleLower = (pkg.title || '').toLowerCase();
              const destLower = (pkg.destination || '').toLowerCase();

              const isFlightOrNorth = titleLower.includes('flight') ||
                titleLower.includes('shirdi') ||
                titleLower.includes('kasi') ||
                titleLower.includes('gaya') ||
                titleLower.includes('ayodhya') ||
                destLower.includes('shirdi') ||
                destLower.includes('kasi') ||
                destLower.includes('gaya') ||
                destLower.includes('ayodhya');

              if (isFlightOrNorth) return 1000 + getDays(pkg.duration);

              const isPreferred = titleLower.includes('ooty') ||
                titleLower.includes('rameswaram') ||
                titleLower.includes('rameswaram') ||
                titleLower.includes('munnar') ||
                titleLower.includes('local') ||
                titleLower.includes('one day') ||
                titleLower.includes('1 day') ||
                titleLower.includes('kodaikanal') ||
                titleLower.includes('kanyakumari');

              if (isPreferred) return getDays(pkg.duration);

              return 100 + getDays(pkg.duration);
            };

            return getPriority(a) - getPriority(b);
          });
        }
        case 'cochin-tours': {
          return Object.values(packagesDatabase).filter((p: any) => {
            const titleLower = (p.title || '').toLowerCase();
            const destLower = (p.overview?.destination || '').toLowerCase();
            return titleLower.includes('cochin') || destLower.includes('cochin') || titleLower.includes('kochi') || destLower.includes('kochi');
          }).map((p: any) => ({
            id: parseInt(p.id),
            title: getPackageDisplayTitle(p),
            duration: p.overview?.duration,
            destination: p.overview?.destination,
            activities: p.overview?.activities,
            themes: p.overview?.themes,
            price: p.priceDetails?.amount || 'On Request',
            image: p.image || p.heroImage,
            rating: p.rating,
            reviews: p.reviews
          })).sort((a, b) => {
            const getDays = (dur: string) => {
              if (!dur) return 999;
              const lowerDur = dur.toLowerCase();
              if (lowerDur.includes('one day') || lowerDur.includes('1 day') || lowerDur.includes('full day')) return 1;
              if (lowerDur.includes('half day')) return 0.5;
              const match = dur.match(/(\d+)\s*Nights?/i) || dur.match(/(\d+)\s*Days?/i);
              return match ? parseInt(match[1]) : 999;
            };
            return getDays(a.duration) - getDays(b.duration);
          });
        }
        case 'kerala-tours': {
          const keralaKeywords = ['munnar', 'thekkady', 'alleppey', 'vagamon', 'valparai', 'kumarakom', 'marayoor', 'kerala', 'cochin', 'guruvayur', 'kottayam', 'kovalam'];
          return Object.values(packagesDatabase).filter((p: any) => {
            const titleLower = (p.title || '').toLowerCase();
            const destLower = (p.overview?.destination || '').toLowerCase();
            const idNum = parseInt(p.id);
            if (idNum >= 4000 && idNum <= 4099) return true;
            return keralaKeywords.some(kw => titleLower.includes(kw) || destLower.includes(kw));
          }).map((p: any) => ({
            id: parseInt(p.id),
            title: getPackageDisplayTitle(p),
            duration: p.overview?.duration,
            destination: p.overview?.destination,
            activities: p.overview?.activities,
            themes: p.overview?.themes,
            price: p.priceDetails?.amount || 'On Request',
            image: p.image || p.heroImage,
            rating: p.rating,
            reviews: p.reviews
          })).sort((a, b) => {
            const getDays = (dur: string) => {
              if (!dur) return 999;
              const lowerDur = dur.toLowerCase();
              if (lowerDur.includes('one day') || lowerDur.includes('1 day') || lowerDur.includes('full day')) return 1;
              if (lowerDur.includes('half day')) return 0.5;
              const match = dur.match(/(\d+)\s*Nights?/i) || dur.match(/(\d+)\s*Days?/i);
              return match ? parseInt(match[1]) : 999;
            };
            return getDays(a.duration) - getDays(b.duration);
          });
        }
        case 'chennai-tours': {
          return Object.values(packagesDatabase).filter((p: any) => {
            const titleLower = (p.title || '').toLowerCase();
            const destLower = (p.overview?.destination || '').toLowerCase();
            return titleLower.includes('chennai') || destLower.includes('chennai');
          }).map((p: any) => ({
            id: parseInt(p.id),
            title: getPackageDisplayTitle(p),
            duration: p.overview?.duration || 'Various',
            destination: p.overview?.destination || 'Various',
            activities: p.overview?.activities || 'Various',
            themes: p.overview?.themes || 'Various',
            price: p.priceDetails?.amount || 'On Request',
            image: p.image,
            rating: p.rating,
            reviews: p.reviews
          })).sort((a: any, b: any) => {
            const getDays = (dur: string) => {
              if (!dur) return 999;
              const lowerDur = dur.toLowerCase();
              if (lowerDur.includes('one day') || lowerDur.includes('1 day') || lowerDur.includes('full day')) return 1;
              if (lowerDur.includes('half day')) return 0.5;
              const match = dur.match(/(\d+)\s*day/i);
              return match ? parseInt(match[1]) : 999;
            };
            const getPriority = (pkg: any) => {
              if (pkg.id === 3004) return 1; // Best of Tamil Nadu
              if (pkg.id === 3005) return 2; // Enchanting Tamil Nadu
              if ((pkg.title || '').toLowerCase().includes('local sightseeing')) return 3;
              if (pkg.duration === '1 Day') return 10;
              return 100 + getDays(pkg.duration);
            };
            return getPriority(a) - getPriority(b);
          });
        }
        case 'karnataka-tours': {
          const karnatakaIds = ['3090', '3091', '3092', '3093', '3094', '3095', '3096'];
          return Object.values(packagesDatabase)
            .filter((p: any) => karnatakaIds.includes(p.id))
            .map((p: any) => ({
              id: parseInt(p.id),
              title: p.title,
              duration: p.overview?.duration,
              destination: p.overview?.destination,
              activities: p.overview?.activities,
              themes: p.overview?.themes,
              price: p.priceDetails?.amount,
              image: p.image,
              rating: p.rating,
              reviews: p.reviews
            }))
            .sort((a, b) => a.id - b.id);
        }
        default: {
          const placeKeyword = (category || '').replace(/-tours|-packages/g, '').toLowerCase();
          
          // Safe RegExp to match whole words. (^|[^a-zA-Z]) ensures we match the start of a word.
          const wordRegex = new RegExp(`(^|[^a-zA-Z])${placeKeyword}([^a-zA-Z]|$)`, 'i');
          
          const matched = Object.values(packagesDatabase).filter((p: any) => {
            const title = p.title || '';
            const dest = p.overview?.destination || '';
            return wordRegex.test(title) || wordRegex.test(dest);
          }).map((p: any) => ({
            id: parseInt(p.id || '0'),
            title: p.title || '',
            duration: p.overview?.duration || 'Various',
            destination: p.overview?.destination || 'Various',
            activities: p.overview?.activities || 'Various',
            themes: p.overview?.themes || 'Various',
            price: p.priceDetails?.amount || 'On Request',
            image: p.image || '',
            rating: p.rating || '5.0',
            reviews: p.reviews || ''
          }));

          return matched.length > 0 ? matched : [];
        }
      }
    })();

    return result.map((p: any) => {
      if (!p) return p;
      const dbPkg = packagesDatabase[p.id.toString()];
      if (dbPkg) {
        return {
          ...p,
          title: dbPkg.title || p.title,
          image: dbPkg.image || p.image,
          duration: dbPkg.overview?.duration || p.duration,
          destination: dbPkg.overview?.destination || p.destination,
          activities: dbPkg.overview?.activities || p.activities,
          themes: dbPkg.overview?.themes || p.themes,
          price: dbPkg.priceDetails?.amount || p.price
        };
      }
      return p;
    });
  }, [category]);

  const currentPackages = useMemo(() => {
    return basePackages.filter(pkg => {
      if (searchQuery && !(pkg.title || '').toLowerCase().includes(searchQuery.toLowerCase()) && !(pkg.destination || '').toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      if (themeFilter && themeFilter !== '--Select Tour Theme--' && !(pkg.themes || '').includes(themeFilter)) {
        return false;
      }

      if (durationFilter && durationFilter !== '--Select No. of Nights--') {
        const nightsMatch = (pkg.duration || '').match(/(\d+)\s*Night/i);
        const nights = nightsMatch ? parseInt(nightsMatch[1]) : 0;

        if (durationFilter === '1-3 Nights' && (nights < 1 || nights > 3)) return false;
        if (durationFilter === '4-6 Nights' && (nights < 4 || nights > 6)) return false;
        if (durationFilter === '7+ Nights' && nights < 7) return false;
      }

      if (budgetFilter && budgetFilter !== '--Select Budget--') {
        if (pkg.price === 'On Request') return false;
        const priceStr = (pkg.price || '').replace(/[^\d]/g, '');
        const price = parseInt(priceStr);
        if (isNaN(price)) return false;

        if (budgetFilter === 'Under â‚¹10,000' && price >= 10000) return false;
        if (budgetFilter === 'â‚¹10,000 - â‚¹20,000' && (price < 10000 || price > 20000)) return false;
        if (budgetFilter === 'Above â‚¹20,000' && price <= 20000) return false;
      }

      if (transportFilter) {
        const titleLower = (pkg.title || '').toLowerCase();
        if (transportFilter === 'Flight' && !titleLower.includes('flight')) return false;
        if (transportFilter === 'Train' && !titleLower.includes('train')) return false;
      }

      return true;
    });
  }, [basePackages, searchQuery, budgetFilter, durationFilter, themeFilter, transportFilter]);



  const popularPackages = useMemo(() => {
    // Select a mix of 3 distinct packages for Popular based on ID to make it deterministic
    // We'll just take the first 3 packages that have different durations if possible, or just the top 3
    const pop = [];
    const seenDays = new Set();
    for (const pkg of currentPackages) {
      const dur = pkg.duration || '';
      if (!seenDays.has(dur)) {
        seenDays.add(dur);
        pop.push(pkg);
      }
      if (pop.length >= 3) break;
    }
    // if we couldn't find 3 distinct, just pad
    if (pop.length < 3) {
      for (const pkg of currentPackages) {
        if (!pop.find(p => p.id === pkg.id)) pop.push(pkg);
        if (pop.length >= 3) break;
      }
    }
    return pop;
  }, [currentPackages]);

  const groupedPackages = useMemo(() => {
    const groups: Record<number, any[]> = {};
    const popularIds = popularPackages.map(p => p.id);

    currentPackages.forEach(pkg => {
      const getDays = (dur: string) => {
        if (!dur) return 999;
        const lowerDur = dur.toLowerCase();
        const match = lowerDur.match(/(\d+)\s*day/i);
        if (match) return parseInt(match[1]);
        if (lowerDur.includes('one day') || lowerDur.includes('full day') || lowerDur.includes('half day')) return 1;
        return 999;
      };
      const days = getDays(pkg.duration);
      if (!groups[days]) groups[days] = [];
      groups[days].push(pkg);
    });
    return groups;
  }, [currentPackages, popularPackages]);

  const sortedDays = Object.keys(groupedPackages).map(Number).sort((a, b) => a - b);


  const getRegionLink = () => {
    const northIndiaKeywords = ['varanasi', 'shirdi', 'ayodhya', 'guwahati', 'kasi', 'prayagraj', 'gaya', 'north'];
    if (category && northIndiaKeywords.some(keyword => category.toLowerCase().includes(keyword))) {
      return "/north-india-tour-packages";
    }
    return "/south-india-package";
  };

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header & Breadcrumbs */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-primary-forest)] mb-2">
            {categoryTitle} Packages
          </h1>
          <p className="text-slate-500 font-medium mb-4">Showing {currentPackages.length} packages</p>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-[var(--color-blue-ocean)] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={getRegionLink()} className="hover:text-[var(--color-blue-ocean)] transition-colors">Tour Packages</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-800">{categoryTitle} Packages</span>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-neutral-black)] mb-4">Search Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-1">
              <input type="text" placeholder="Where do you want to go?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 text-sm" />
            </div>
            <div className="md:col-span-1">
              <select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 text-sm text-slate-600 appearance-none">
                <option value="">All Packages</option>
                <option value="popular">Popular Packages</option>
                {sortedDays.map(day => (
                  <option key={day} value={day.toString()}>{day === 999 ? 'Other Packages' : `${day} Day${day > 1 ? 's' : ''}`}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 text-sm text-slate-600 appearance-none">
                <option value="">All Themes</option>
                <option>Religious & Pilgrimage</option>
                <option>Culture & Heritage</option>
                <option>Wildlife</option>
                <option>Hill Stations & Valleys</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <select value={transportFilter} onChange={(e) => setTransportFilter(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-blue-ocean)]/50 text-sm text-slate-600 appearance-none">
                <option value="">All Transport</option>
                <option value="Flight">Flight Packages</option>
                <option value="Train">Train Packages</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <button className="w-full bg-[var(--color-blue-ocean)] text-white font-bold rounded-xl px-4 py-3 transition-all" onClick={(e) => e.preventDefault()}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Content (Left) */}

          <div className="flex-1 flex flex-col min-w-0">

            <div className="flex flex-col gap-12">

              {/* Popular Packages */}
              {(durationFilter === "" || durationFilter === "popular") && popularPackages.length > 0 && (
                <div id="popular-packages" className="scroll-mt-40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                    <h2 className="text-2xl font-black text-slate-900">Popular Tour Packages</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {popularPackages.map((pkg, idx) => {
                      const views = pkg.views || Math.floor(2500 + ((pkg.id * 37) % 7500)); // Views between 2.5K and 10K
                      const badge = views > 7500 ? 'MOST BOOKED' : views > 5000 ? 'POPULAR' : 'TOP RATED';
                      const badgeColor = views > 7500 ? 'bg-gradient-to-r from-orange-500 to-red-500' : views > 5000 ? 'bg-purple-500' : 'bg-green-500';
                      const rating = pkg.rating || '5.0';
                      const reviews = pkg.reviews || (views / 450).toFixed(1) + 'K+';

                      const lowerThemes = (pkg.themes || '').toLowerCase();
                      const activeChips: string[] = [];
                      if (lowerThemes.includes('religious') || lowerThemes.includes('pilgrimage') || lowerThemes.includes('temple')) activeChips.push('Religious');
                      if (lowerThemes.includes('culture')) activeChips.push('Culture');
                      if (lowerThemes.includes('heritage')) activeChips.push('Heritage');
                      if (lowerThemes.includes('wildlife') || lowerThemes.includes('safari')) activeChips.push('Wildlife');
                      if (lowerThemes.includes('hill') || lowerThemes.includes('valley') || lowerThemes.includes('mountain') || lowerThemes.includes('nature')) activeChips.push('Hill Station');
                      if (lowerThemes.includes('beach') || lowerThemes.includes('island')) activeChips.push('Beaches');
                      if (activeChips.length === 0) activeChips.push('Sightseeing');

                      return (
                        <article
                          key={pkg.id}
                          className="bg-white rounded-[24px] flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.04)] group transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden"
                          itemScope
                          itemType="https://schema.org/TouristTrip"
                        >
                          <meta itemProp="name" content={pkg.title} />
                          <meta itemProp="description" content={pkg.activities || pkg.destination} />
                          <meta itemProp="url" content={`https://www.logaaholidays.com${getPackageLink(pkg)}`} />

                          {/* Image Section */}
                          <div className="relative w-full aspect-[322/372] bg-slate-50 overflow-hidden" style={{ aspectRatio: '322/372' }}>
                            <Link
                              to={getPackageLink(pkg)}
                              className="w-full h-full block"
                              aria-label={`View details for ${pkg.title}`}
                            >
                              <img
                                src={pkg.image}
                                alt={`${pkg.title} including ${pkg.destination} sightseeing`}
                                title={pkg.title}
                                loading="lazy"
                                decoding="async"
                                itemProp="image"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430]/90 via-[#1B2430]/20 to-transparent pointer-events-none"></div>
                            </Link>

                            {/* Badges */}
                            <div className={`absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md ${badgeColor}`}>
                              {badge === 'MOST BOOKED' ? <Flame className="w-3.5 h-3.5" /> : null} {badge === 'MOST BOOKED' ? 'BEST SELLER' : badge}
                            </div>



                            {/* Travelers Info */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-3">
                              <div className="flex items-center text-white text-[12px] font-bold drop-shadow-md">
                                <Star className="w-4 h-4 text-orange-400 fill-orange-400 mr-1.5" />
                                Rated {rating} by customers
                              </div>
                            </div>

                            {/* Favorite Button */}
                            <button
                              onClick={(e) => { e.preventDefault(); handleSave(pkg.id); }}
                              className="absolute bottom-4 right-4 w-9 h-9 rounded-full border border-white/40 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all focus:outline-none"
                              aria-label={savedPackages.includes(pkg.id) ? "Remove from saved" : "Save package"}
                            >
                              <Heart className={`w-4 h-4 ${savedPackages.includes(pkg.id) ? 'fill-white text-white' : 'text-white'}`} />
                            </button>
                          </div>

                          {/* Details Section */}
                          <div className="flex-1 flex flex-col p-5 bg-white">
                            <Link to={getPackageLink(pkg)} className="outline-none block mb-1">
                              <h2 className="text-[18px] font-bold text-slate-900 leading-snug hover:text-[var(--color-primary-forest)] transition-colors">
                                {pkg.title}
                              </h2>
                            </Link>
                            <p className="text-[13px] text-slate-500 mb-4 font-medium">
                              {pkg.activities || pkg.destination}
                            </p>

                            {/* Theme Chips */}
                            <div className="flex items-center flex-wrap gap-2 mb-4">
                              {activeChips.slice(0, 3).map(chip => {
                                if (chip === 'Religious') return <span key={chip} className="bg-[#F3E8FF] text-[#7E22CE] text-[10px] font-bold px-2.5 py-1 rounded-full">Religious</span>;
                                if (chip === 'Culture') return <span key={chip} className="bg-[#FFEDD5] text-[#C2410C] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><Activity className="w-3 h-3" /> Culture</span>;
                                if (chip === 'Heritage') return <span key={chip} className="bg-[#DCFCE7] text-[#15803D] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Heritage</span>;
                                if (chip === 'Wildlife') return <span key={chip} className="bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><Flame className="w-3 h-3" /> Wildlife</span>;
                                if (chip === 'Hill Station') return <span key={chip} className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin className="w-3 h-3" /> Hill Station</span>;
                                if (chip === 'Beaches') return <span key={chip} className="bg-[#DBEAFE] text-[#1D4ED8] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin className="w-3 h-3" /> Beaches</span>;
                                return <span key={chip} className="bg-[#F1F5F9] text-[#475569] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin className="w-3 h-3" /> {chip}</span>;
                              })}
                            </div>

                            {/* Info Pills */}
                            <ul className="flex flex-wrap items-center gap-4 mb-4" aria-label="Tour Details">
                              <li className="text-slate-700 text-[11px] font-bold flex items-center gap-1.5 cursor-default">
                                <Clock className="w-4 h-4 text-slate-500" aria-hidden="true" />
                                <span>{pkg.duration?.split('/')[0] || pkg.duration}</span>
                              </li>
                              <li className="text-slate-700 text-[11px] font-bold flex items-center gap-1.5 cursor-default">
                                <MapPin className="w-4 h-4 text-slate-500" aria-hidden="true" />
                                <span className="line-clamp-1 max-w-[120px]">{pkg.destination?.split(',')[0] || 'Private Cab'}</span>
                              </li>
                              <li className="text-slate-700 text-[11px] font-bold flex items-center gap-1.5 cursor-default">
                                <User className="w-4 h-4 text-slate-500" aria-hidden="true" />
                                <span>Expert Guide</span>
                              </li>
                            </ul>

                            {/* Action Buttons */}
                            <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3">
                              <div className="flex flex-col sm:flex-row items-center gap-2">
                                <a
                                  href={`https://wa.me/917397329776?text=Hi Logaa Holidays, I am interested in the ${pkg.title} package.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full sm:flex-1 text-center bg-[#F2FBF5] text-[#0F6B46] border border-[#E2F5EA] text-[13px] font-bold py-2 rounded-xl hover:bg-[#0F6B46] hover:text-white transition-colors"
                                >
                                  Enquire Now
                                </a>
                                <Link
                                  to={getPackageLink(pkg)}
                                  className="w-full sm:flex-1 text-center bg-[#0B2515] text-white text-[13px] font-bold py-2 rounded-xl hover:bg-[#0c593a] transition-colors"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Grouped Packages */}
              {sortedDays.filter(day => durationFilter === "" || durationFilter === day.toString()).length === 0 && popularPackages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">No packages found</h3>
                  <p className="text-slate-500 max-w-md">We couldn't find any packages matching your search criteria. Try adjusting your filters or search term.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setDurationFilter(''); setThemeFilter(''); setBudgetFilter(''); }}
                    className="mt-6 px-6 py-2 bg-[var(--color-primary-forest)] text-white font-bold rounded-xl hover:bg-[#0f6b46] transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                sortedDays.filter(day => durationFilter === "" || durationFilter === day.toString()).map(day => (
                  <div key={day} id={`day-${day}-packages`} className="scroll-mt-40">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1.5 h-6 bg-[var(--color-blue-ocean)] rounded-full"></div>
                      <h2 className="text-2xl font-black text-slate-900">
                        {day === 999 ? 'Other Packages' : `${day} Day${day > 1 ? 's' : ''} Tour Packages`}
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {groupedPackages[day].map((pkg: any, idx: number) => {
                        const views = pkg.views || Math.floor(2500 + ((pkg.id * 37) % 7500)); // Views between 2.5K and 10K
                        const badge = views > 7500 ? 'MOST BOOKED' : views > 5000 ? 'POPULAR' : 'TOP RATED';
                        const badgeColor = views > 7500 ? 'bg-gradient-to-r from-orange-500 to-red-500' : views > 5000 ? 'bg-purple-500' : 'bg-green-500';
                        const rating = pkg.rating || '5.0';
                        const reviews = pkg.reviews || (views / 450).toFixed(1) + 'K+';

                        const lowerThemes = (pkg.themes || '').toLowerCase();
                        const activeChips: string[] = [];
                        if (lowerThemes.includes('religious') || lowerThemes.includes('pilgrimage') || lowerThemes.includes('temple')) activeChips.push('Religious');
                        if (lowerThemes.includes('culture')) activeChips.push('Culture');
                        if (lowerThemes.includes('heritage')) activeChips.push('Heritage');
                        if (lowerThemes.includes('wildlife') || lowerThemes.includes('safari')) activeChips.push('Wildlife');
                        if (lowerThemes.includes('hill') || lowerThemes.includes('valley') || lowerThemes.includes('mountain') || lowerThemes.includes('nature')) activeChips.push('Hill Station');
                        if (lowerThemes.includes('beach') || lowerThemes.includes('island')) activeChips.push('Beaches');
                        if (activeChips.length === 0) activeChips.push('Sightseeing');

                        return (
                          <article
                            key={pkg.id}
                            className="bg-white rounded-[24px] flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.04)] group transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden"
                            itemScope
                            itemType="https://schema.org/TouristTrip"
                          >
                            <meta itemProp="name" content={pkg.title} />
                            <meta itemProp="description" content={pkg.activities || pkg.destination} />
                            <meta itemProp="url" content={`https://www.logaaholidays.com${getPackageLink(pkg)}`} />

                            {/* Image Section */}
                            <div className="relative w-full aspect-[322/372] bg-slate-50 overflow-hidden" style={{ aspectRatio: '322/372' }}>
                              <Link
                                to={getPackageLink(pkg)}
                                className="w-full h-full block"
                                aria-label={`View details for ${pkg.title}`}
                              >
                                <img
                                  src={pkg.image}
                                  alt={`${pkg.title} including ${pkg.destination} sightseeing`}
                                  title={pkg.title}
                                  loading="lazy"
                                  decoding="async"
                                  itemProp="image"
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430]/90 via-[#1B2430]/20 to-transparent pointer-events-none"></div>
                              </Link>

                              {/* Badges */}
                              <div className={`absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md ${badgeColor}`}>
                                {badge === 'MOST BOOKED' ? <Flame className="w-3.5 h-3.5" /> : null} {badge === 'MOST BOOKED' ? 'BEST SELLER' : badge}
                              </div>



                              {/* Travelers Info */}
                              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                <div className="flex items-center text-white text-[12px] font-bold drop-shadow-md">
                                  <Star className="w-4 h-4 text-orange-400 fill-orange-400 mr-1.5" />
                                  Rated {rating} by customers
                                </div>
                              </div>

                              {/* Favorite Button */}
                              <button
                                onClick={(e) => { e.preventDefault(); handleSave(pkg.id); }}
                                className="absolute bottom-4 right-4 w-9 h-9 rounded-full border border-white/40 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all focus:outline-none"
                                aria-label={savedPackages.includes(pkg.id) ? "Remove from saved" : "Save package"}
                              >
                                <Heart className={`w-4 h-4 ${savedPackages.includes(pkg.id) ? 'fill-white text-white' : 'text-white'}`} />
                              </button>
                            </div>

                            {/* Details Section */}
                            <div className="flex-1 flex flex-col p-5 bg-white">
                              <Link to={getPackageLink(pkg)} className="outline-none block mb-1">
                                <h2 className="text-[18px] font-bold text-slate-900 leading-snug hover:text-[var(--color-primary-forest)] transition-colors">
                                  {pkg.title}
                                </h2>
                              </Link>
                              <p className="text-[13px] text-slate-500 mb-4 font-medium">
                                {pkg.activities || pkg.destination}
                              </p>

                              {/* Theme Chips */}
                              <div className="flex items-center flex-wrap gap-2 mb-4">
                                {activeChips.slice(0, 3).map(chip => {
                                  if (chip === 'Religious') return <span key={chip} className="bg-[#F3E8FF] text-[#7E22CE] text-[10px] font-bold px-2.5 py-1 rounded-full">Religious</span>;
                                  if (chip === 'Culture') return <span key={chip} className="bg-[#FFEDD5] text-[#C2410C] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><Activity className="w-3 h-3" /> Culture</span>;
                                  if (chip === 'Heritage') return <span key={chip} className="bg-[#DCFCE7] text-[#15803D] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Heritage</span>;
                                  if (chip === 'Wildlife') return <span key={chip} className="bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><Flame className="w-3 h-3" /> Wildlife</span>;
                                  if (chip === 'Hill Station') return <span key={chip} className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin className="w-3 h-3" /> Hill Station</span>;
                                  if (chip === 'Beaches') return <span key={chip} className="bg-[#DBEAFE] text-[#1D4ED8] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin className="w-3 h-3" /> Beaches</span>;
                                  return <span key={chip} className="bg-[#F1F5F9] text-[#475569] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin className="w-3 h-3" /> {chip}</span>;
                                })}
                              </div>

                              {/* Info Pills */}
                              <ul className="flex flex-wrap items-center gap-4 mb-4" aria-label="Tour Details">
                                <li className="text-slate-700 text-[11px] font-bold flex items-center gap-1.5 cursor-default">
                                  <Clock className="w-4 h-4 text-slate-500" aria-hidden="true" />
                                  <span>{pkg.duration?.split('/')[0] || pkg.duration}</span>
                                </li>
                                <li className="text-slate-700 text-[11px] font-bold flex items-center gap-1.5 cursor-default">
                                  <MapPin className="w-4 h-4 text-slate-500" aria-hidden="true" />
                                  <span className="line-clamp-1 max-w-[120px]">{pkg.destination?.split(',')[0] || 'Private Cab'}</span>
                                </li>
                                <li className="text-slate-700 text-[11px] font-bold flex items-center gap-1.5 cursor-default">
                                  <User className="w-4 h-4 text-slate-500" aria-hidden="true" />
                                  <span>Expert Guide</span>
                                </li>
                              </ul>

                              {/* Action Buttons */}
                              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3">
                                <div className="flex flex-col sm:flex-row items-center gap-2">
                                  <a
                                    href={`https://wa.me/917397329776?text=Hi Logaa Holidays, I am interested in the ${pkg.title} package.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:flex-1 text-center bg-[#F2FBF5] text-[#0F6B46] border border-[#E2F5EA] text-[13px] font-bold py-2 rounded-xl hover:bg-[#0F6B46] hover:text-white transition-colors"
                                  >
                                    Enquire Now
                                  </a>
                                  <Link
                                    to={getPackageLink(pkg)}
                                    className="w-full sm:flex-1 text-center bg-[#0B2515] text-white text-[13px] font-bold py-2 rounded-xl hover:bg-[#0c593a] transition-colors"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                )))}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-32">

              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Send className="w-4 h-4 text-blue-500 -ml-0.5" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900">Packages by Destination</h3>
              </div>

              <div className="flex flex-col gap-6 mb-8">
                {destinationGroups.map(group => (
                  <div key={group.region}>
                    <h4 className="text-[14px] font-bold text-slate-800 mb-3">{group.region}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.places.map(dest => {
                        const slug = dest.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                        const isSelected = category === slug;
                        return (
                          <Link
                            key={dest}
                            to={`/tour-packages/${slug}`}
                            className={`text-[12px] font-semibold px-4 py-2 rounded-full border transition-all ${isSelected
                                ? 'bg-[var(--color-primary-forest)] text-white border-[var(--color-primary-forest)] shadow-sm'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-[var(--color-primary-forest)] hover:text-[var(--color-primary-forest)]'
                              }`}
                          >
                            {dest.replace(' Tours', '')}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50/70 rounded-2xl p-4 flex items-center gap-3 mb-8 border border-green-100/50 cursor-pointer hover:bg-green-50 transition-colors group">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-slate-900">Explore More Destinations</h4>
                  <p className="text-[10px] text-slate-500 font-medium">100+ Packages Available</p>
                </div>
                <ChevronRight className="w-4 h-4 text-green-600 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="space-y-6 pt-2 border-t border-slate-50">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 mb-0.5">Best Price Guarantee</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Get the best deals always</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 mb-0.5">Trusted & Secure</h4>
                    <p className="text-[11px] text-slate-500 font-medium">100% safe booking</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 mb-0.5">24/7 Customer Support</h4>
                    <p className="text-[11px] text-slate-500 font-medium">We are here to help you</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── Category FAQ Section ── */}
        <CategoryFAQ category={category || ''} />

        {/* Floating Action Button for Saved Items */}
        {savedPackages.length > 0 && (
          <button
            onClick={() => setIsSavedDrawerOpen(true)}
            className="fixed bottom-[165px] right-6 z-50 bg-[var(--color-primary-forest)] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 transition-transform flex items-center justify-center group"
          >
            <div className="relative">
              <Heart className="w-6 h-6 fill-white" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[var(--color-primary-forest)]">
                {savedPackages.length}
              </span>
            </div>
          </button>
        )}

        {/* Saved Packages Drawer Overlay */}
        {isSavedDrawerOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
              onClick={() => setIsSavedDrawerOpen(false)}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Saved Packages</h2>
                    <p className="text-sm text-slate-500">{savedPackages.length} item{savedPackages.length !== 1 && 's'}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSavedDrawerOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {savedPackages.map(id => {
                  let pkg = currentPackages.find(p => p.id === id) || basePackages.find(p => p.id === id);
                  if (!pkg) {
                    const dbPkg = packagesDatabase[id.toString()];
                    if (dbPkg) {
                      pkg = {
                        id: parseInt(dbPkg.id),
                        title: getPackageDisplayTitle(dbPkg),
                        duration: dbPkg.overview?.duration,
                        destination: dbPkg.overview?.destination,
                        activities: dbPkg.overview?.activities,
                        themes: dbPkg.overview?.themes,
                        price: dbPkg.priceDetails?.amount,
                        image: dbPkg.image || dbPkg.heroImage,
                        rating: dbPkg.rating,
                        reviews: dbPkg.reviews
                      };
                    }
                  }
                  if (!pkg) return null;
                  return (
                    <div key={id} className="flex gap-4 p-3 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group">
                      <img loading="lazy" src={pkg.image} alt={pkg.title} className="w-24 h-24 rounded-xl object-cover" />
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1">{pkg.title}</h4>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 mb-2">
                          <Clock className="w-3 h-3 text-orange-500" />
                          {pkg.duration?.split('/')[0] || pkg.duration}
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <Link to={getPackageLink(pkg)} className="text-[12px] font-bold text-[var(--color-primary-forest)] hover:underline">
                            View Details
                          </Link>
                          <button
                            onClick={() => handleSave(id)}
                            className="text-[11px] font-bold text-red-500 hover:text-red-600 bg-red-50 px-2.5 py-1 rounded-full transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {savedPackages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center opacity-50 py-12">
                    <Heart className="w-12 h-12 text-slate-300 mb-4" />
                    <p className="text-lg font-bold text-slate-600">No saved packages yet</p>
                    <p className="text-sm text-slate-400 mt-1">Click the heart icon on any package to save it here for later.</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {savedPackages.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50">
                  <button
                    onClick={() => setSavedPackages([])}
                    className="w-full py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors"
                  >
                    Clear All Saved
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { TourCategory };

// ── Per-category FAQ data ──────────────────────────────────────────────────
const categoryFaqData: Record<string, { q: string; a: string }[]> = {
  'shirdi-tours': [
    { q: 'Is the Shirdi tour package suitable for families and senior citizens?', a: 'Yes. The Shirdi itinerary is typically 2–3 days, focused on visiting Sai Baba Temple and nearby shrines. We choose comfortable, family-friendly hotels. Short transfers keep the journey easy for senior citizens and children. We also cover Shani Shingnapur temple if interested, and our guides assist during temple darshan to ensure a smooth, organised experience.' },
    { q: 'Can we join the Shirdi pilgrimage from Chennai or Pune?', a: 'Yes. You can join from Chennai, Pune or Mumbai. Flights to Aurangabad or Mumbai and trains to Kopargaon/Shirdi are common routes. We arrange pick-ups at these points. One popular option is flying to Pune, driving 3–4 hours to Shirdi, and returning from Mumbai by flight. We coordinate whichever city is most convenient for your travel.' },
    { q: 'What is included in the Shirdi tour package?', a: 'Our Shirdi packages typically include accommodation in Shirdi, meals (breakfast and dinner), private or shared transport, a guided visit to Sai Baba Temple, and a visit to Shani Shingnapur. Flight or train tickets can be added as per your preference.' },
  ],
  'varanasi-tours': [
    { q: 'Is the Varanasi tour safe and manageable for families and senior citizens?', a: 'Yes. Varanasi is a compact city, and we plan hotel stays near the main sites. Travel between the ghats and temples is short — by rickshaw or on foot. We avoid chaotic evening crowds where possible. For senior citizens, we focus on the sunrise boat ride on the Ganges and easy temple visits. Local guides ensure a secure, well-paced experience for all age groups.' },
    { q: 'Can I join the Varanasi tour from Delhi or Chennai?', a: 'Absolutely. Varanasi has an international airport (Lal Bahadur Shastri Airport) and multiple railway stations. You can catch a direct flight from Delhi or Chennai to Varanasi. We will pick you up at the airport or station to start the tour. If you prefer, we can also arrange a train from Delhi or Chennai to Varanasi.' },
    { q: 'What are the highlights of the Varanasi tour?', a: 'The highlights include a sunrise boat ride on the Ganges, the evening Ganga Aarti at Dashashwamedh Ghat, a visit to Kashi Vishwanath Temple, Sarnath (the deer park where Buddha gave his first sermon) and a walk through the ancient lanes of the old city. Our guides provide cultural and historical context at every stop.' },
  ],
  'golden-triangle-tours': [
    { q: 'Is the Golden Triangle tour (Delhi–Agra–Jaipur) suitable for families?', a: 'Yes. We design the 7–8 day itinerary with plenty of breaks between sightseeing stops. Major attractions — Taj Mahal, Amber Fort and Qutub Minar — have wheelchair access or easy paths. We book comfortable 3–4★ hotels and can adjust the pace with additional rest stops and lighter activities for elderly members.' },
    { q: 'Can I join the Golden Triangle tour from Madurai, Pune or Ahmedabad?', a: 'Yes. Many travellers book a domestic flight to Delhi first. If you are coming from Madurai, Pune or Ahmedabad, you can fly or take a train to New Delhi and we will start the tour from there. We can also arrange private transfers or connecting flight options from Mumbai or Bengaluru to reach Delhi.' },
    { q: 'What is the best time to visit the Golden Triangle?', a: 'The best time to visit the Golden Triangle is from October to March, when the weather is pleasant and cool. Summers (April–June) are very hot, and monsoon (July–September) can be humid, though some travellers prefer the lush greenery during this period. Our team can advise on the best dates for your travel.' },
  ],
  'shimla-tours': [
    { q: 'Is the Shimla tour package family-friendly and accessible for senior citizens?', a: "Yes. Shimla's town is mostly flat along Mall Road, and we stay in hotels with lifts. The drive from Chandigarh or Delhi is scenic and smooth. Daily sightseeing — a toy train ride, local markets — is limited in scope, keeping the pace gentle. Families and couples both enjoy the cool weather and heritage sites without strenuous hiking." },
    { q: 'Can we join the Shimla tour from Delhi or Chandigarh?', a: 'Certainly. Shimla tours often start from Delhi or Chandigarh. If you fly into Delhi, we can pick you up at the airport or railway station and drive together to Shimla (8–9 hours). Alternatively, you can fly into Chandigarh (which is closer) and we will begin the tour from there. We coordinate airport and train pick-ups at either city.' },
    { q: 'Does the Shimla package include a toy train ride?', a: 'Yes, where itinerary time permits, we include a ride on the UNESCO-listed Kalka–Shimla Toy Train — a scenic narrow-gauge railway that winds through the Himalayan foothills. This is a favourite experience for both children and adults. Specific inclusions are listed in each package itinerary.' },
  ],
  'manali-tours': [
    { q: 'Is this Manali tour suitable for senior citizens?', a: 'Yes. Manali is at approximately 2,000 metres altitude, which is moderate. We ensure the itinerary includes rest stops in Kullu to allow for acclimatisation. Vehicles are spacious and stops are frequent. Hotels with minimal stairs are chosen when required. The itinerary includes light sightseeing — temples, parks and easy nature walks — so senior citizens can enjoy the Himalayas comfortably.' },
    { q: 'What sightseeing is included in the Manali tour?', a: 'Our Manali packages cover Rohtang Pass (subject to permit availability), Solang Valley, Hadimba Devi Temple, Vashisht hot springs, Manu Temple and local Mall Road. We also include Kullu on the way, with visits to the Beas River bank and local shawl factories. All sightseeing is done in a private vehicle with a knowledgeable guide.' },
    { q: 'What is the best time to visit Manali?', a: 'The best time to visit Manali is from March to June for pleasant weather and snowfall views at Rohtang Pass. October to February offers snowfall in town but Rohtang Pass is closed. Monsoon (July–September) brings lush greenery but also road closures due to landslides. We recommend March to June for families and honeymooners.' },
  ],
  'manali-volvo-tours': [
    { q: 'What is a Manali Volvo tour package?', a: 'It means you travel overnight from Delhi to Manali in an AC Volvo sleeper bus. You board in Delhi in the evening, rest in a reclining sleeper seat, and arrive in Manali in the morning. The package includes round-trip Volvo bus tickets, 3 nights\' hotel stay in Manali, daily breakfast and dinner, and local sightseeing such as Hadimba Temple and Solang Valley. This is a budget-friendly, comfortable way to reach Manali without a separate flight.' },
    { q: 'Is the Manali Volvo tour suitable for families and senior citizens?', a: 'Yes. The overnight journey means no daytime travel fatigue. In Manali, we stay in family-friendly hotels. Sightseeing activities — Vashisht hot springs and Mall Road — are easy. We also offer assistance at boarding and disembarkation points. The Volvo\'s air-conditioning, reclining seats and planned rest stops make it manageable even for older travellers.' },
  ],
  'kashmir-tours': [
    { q: 'Is this Kashmir tour suitable for families and honeymooners?', a: "Yes. Kashmir's scenic valleys and Dal Lake houseboat are enjoyable for all ages. The itinerary includes easy sightseeing — Mughal gardens and gentle walks — and avoids high-altitude passes unless specifically requested. Accommodation includes mid-range hotels and a houseboat stay on Dal Lake, offering novelty with comfort. The weather is cool and pleasant, especially from April to June." },
    { q: 'Can we start the Kashmir tour from Delhi or Srinagar?', a: 'You should fly or travel into Srinagar (SXR airport) to start the tour. Delhi–Srinagar flights are frequent. We will meet you at Srinagar airport or railway station. If you prefer, you can also fly into Jammu and transfer by road (approximately 8 hours) to Srinagar. Either way, our package begins once you arrive in Kashmir, and we handle all local transport.' },
    { q: 'What is the best time to visit Kashmir?', a: 'April to June is ideal for pleasant weather, blooming gardens and Shikara rides on Dal Lake. December to February offers snowfall in Gulmarg, popular for skiing. October to November features the famous chinar leaf colours. We advise against visiting during heavy snowfall months (January–February) for families unless specifically seeking snow activities.' },
  ],
  'kerala-honeymoon-packages': [
    { q: 'Is this Kerala honeymoon package romantic?', a: "Yes. Kerala's gentle backwater cruises and lush tea gardens create a deeply romantic atmosphere. The itinerary features a calm houseboat stay in Alleppey and a nature walk in Munnar. We ensure cosy stays with optional experiences such as private boat rides and spice farm visits, making it a memorable honeymoon from start to finish." },
    { q: 'Can I join the Kerala honeymoon tour from Kochi or Trivandrum?', a: 'Certainly. Most itineraries start in Kochi (Cochin) or Trivandrum (Thiruvananthapuram). We offer pick-up from Kochi airport and railway station, or we can meet you in Trivandrum if that is more convenient. You can fly into either city, and we will handle all local transfers.' },
    { q: 'Are private rooms and couple-specific amenities included?', a: 'Yes. Our Kerala honeymoon packages are designed exclusively for couples, featuring double or king-sized rooms, private houseboat cabins, candlelight dinners (on request), and personalised touches. We select boutique resorts and heritage properties that prioritise privacy and romance.' },
  ],
  'goa-honeymoon-packages': [
    { q: 'Is this Goa package romantic for honeymooners?', a: "Yes. The Goa itinerary focuses on the best beaches and resorts. We select quieter beach stays — such as South Goa — with sunset views, ideal for couples. You can also enjoy dinner cruises or scenic coastal drives. We provide a private guide and car, so you travel at leisure. Goa's laid-back vibe and beautiful sunsets are a firm favourite among honeymooners." },
    { q: 'Can I join the Goa package from Mumbai or Delhi?', a: "Yes. You can fly into Goa's Dabolim Airport (GOI) from Mumbai or Delhi. We can pick you up at Goa airport. Alternatively, a popular option is to fly into Mumbai and take a connecting flight or train to Goa. Once you arrive, we handle all inter-city transfers to your beach hotel." },
    { q: 'What is included in the Goa honeymoon package?', a: 'Our Goa honeymoon packages typically include accommodation in a beachside resort or boutique hotel, daily breakfast, private transportation, sightseeing (Calangute Beach, Dudhsagar Falls, Old Goa churches), and optional activities such as a sunset dinner cruise or water sports. Customisation is available on request.' },
  ],
  'andaman-honeymoon-packages': [
    { q: 'Is the Andaman package ideal for honeymoon couples?', a: "Yes. The itinerary blends beach relaxation and easy nature activities. We include calm attractions like Radhanagar Beach — ranked among the world's best — and a glass-bottom boat ride for coral viewing. Resorts on Havelock and Neil Island offer private couples' cottages with direct beach access, making it a truly romantic escape." },
    { q: 'Can I join the Andaman tour from Chennai or Kolkata?', a: 'Certainly. You will fly into Port Blair (IXZ airport) since it is the gateway to the Andaman archipelago. Port Blair has direct flights from Chennai, Kolkata and Delhi. We will meet you at Port Blair airport to begin. All island transfers — ferries and speedboats — are pre-arranged, so after arrival you simply relax and enjoy.' },
  ],
  'sikkim-darjeeling-honeymoon-packages': [
    { q: 'Is Sikkim safe and comfortable for honeymoon couples?', a: "Yes. Sikkim's weather is mild and destinations like Gangtok and Pelling are below 1,800 metres. Roads are good and the region is known for being tourist-friendly. We include short drives between scenic spots, comfortable hotels and a relaxed schedule with optional tea plantation or monastery visits — ideal for newlyweds." },
    { q: 'Can we join the Sikkim tour from Delhi or Kolkata?', a: 'Yes. The common route is to fly to Bagdogra (near Siliguri) via Delhi or Kolkata. We will pick you up at Bagdogra airport. From there we drive approximately 5 hours to Gangtok to start the tour. Alternatively, you can take a luxury coach or train to Siliguri and we will arrange onward travel.' },
  ],
  'maldives-honeymoon-packages': [
    { q: 'Is this Maldives package ideal for honeymoon couples?', a: "Absolutely. The itinerary is built for privacy and romance — you stay in a water villa or beach bungalow, enjoy private beach dinners and have ample relaxation time. Snorkelling and lagoon tours add a sense of adventure. Every detail — seaplane transfers, resort check-in — is arranged in advance, so you focus only on each other." },
    { q: 'Can I start the Maldives trip from Chennai or Bangalore?', a: "You will fly to Malé (the Maldives) via a direct or one-stop flight from Chennai, Bangalore or Mumbai. Once you arrive at Velana International Airport, your speedboat or seaplane transfer to the resort island is included in the package. We coordinate all Maldives-side domestic transfers — you only need to book your international flight to Malé." },
  ],
  'karnataka-honeymoon-packages': [
    { q: 'Is the Karnataka honeymoon package romantic?', a: "Yes. Coorg's pine forests, mist-laden coffee estates and scenic viewpoints create a very romantic atmosphere. We include hilltop restaurants, private resort stays and optional experiences such as a private picnic or bonfire on request. The cool climate and peaceful surroundings make Karnataka — especially Coorg and Chikmagalur — ideal for couples." },
    { q: 'Can we start the Karnataka honeymoon tour from Bangalore or Chennai?', a: 'Yes. Bangalore is the primary starting point. You can fly into Bangalore directly, and we will pick you up at the airport. We can also arrange to meet you if you are arriving from Chennai or other cities. The itinerary then proceeds to Mysore, Coorg and Chikmagalur in a private vehicle.' },
  ],
  'kashmir-honeymoon-packages': [
    { q: 'Is the Kashmir honeymoon package romantic?', a: "Yes. Kashmir's scenic valleys, Dal Lake houseboat, Mughal gardens and Gulmarg meadows create an exceptionally romantic setting. We include a private Shikara ride on Dal Lake, a houseboat stay with candlelight dinner, and scenic drives through Pahalgam. The cool climate, especially from April to June, adds to the romance." },
    { q: 'Are travel arrangements comfortable for a honeymoon couple?', a: "Absolutely. We provide a private vehicle and a friendly driver-guide throughout. We schedule moderate sightseeing so you can relax and enjoy each other's company. Pick-up is from Srinagar airport, and we ensure the journey is pleasant from the moment you arrive in Kashmir." },
  ],
  'himachal-honeymoon-packages': [
    { q: 'Is the Himachal (Shimla/Kufri) tour romantic for honeymooners?', a: "Yes. Shimla's quaint colonial charm and Kufri's pine forests are very romantic. We include scenic viewpoints and cosy meals at hilltop restaurants. Hotels are chosen for their character and views — many feature fireplaces. The cool climate and privacy make it ideal for couples. We can also arrange special experiences such as a private picnic or bonfire on request." },
    { q: 'Are travel arrangements comfortable for a honeymoon couple?', a: 'Certainly. We provide a private car and a friendly driver-guide who assists you throughout. We schedule moderate sightseeing — a toy train ride or brief nature walks — so you can relax. Pick-up is from Delhi or Chandigarh, and we ensure the journey itself is pleasant, so your honeymoon begins stress-free.' },
  ],
  'tamil-nadu-honeymoon-packages': [
    { q: 'Which places are covered in the Tamil Nadu honeymoon package?', a: 'Our Tamil Nadu honeymoon packages cover popular couple-friendly destinations such as Ooty (Udhagamandalam), Kodaikanal, Coonoor, Valparai and Kanyakumari. You can enjoy misty hillscapes, scenic viewpoints, boat rides on serene lakes and romantic sunsets at the southernmost tip of India — all with a private vehicle and personalised itinerary.' },
    { q: 'Are couple-specific amenities included in the Tamil Nadu honeymoon package?', a: 'Yes. Our honeymoon packages include double or king-sized rooms in handpicked resorts, candlelight dinner (on request), personalised room decoration and couple-friendly activities. We select properties known for their privacy, views and romance to make your trip truly special.' },
  ],
};

function CategoryFAQ({ category }: { category: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = categoryFaqData[category] || [];
  if (faqs.length === 0) return null;

  return (
    <div className="mt-12 mb-4 max-w-4xl">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-5 h-5 text-[var(--color-primary-forest)] fill-current" />
          <h2 className="text-xl font-bold text-slate-800">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-[var(--color-bg-luxury)] hover:bg-slate-100 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-slate-800 leading-snug">{faq.q}</span>
                <span className={`text-[var(--color-primary-forest)] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 py-4 bg-white border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
