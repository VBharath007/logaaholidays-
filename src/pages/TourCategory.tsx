import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ChevronRight, Flame, Star, Clock, Heart, MapPin, Utensils, Activity, Send, Gift, ShieldCheck, Headphones, Share2, User, X, Eye } from 'lucide-react';
import { generateSlug } from '../lib/utils';
import { packagesDatabase, getPackageDisplayTitle, getPackageLink } from './PackageDetails';
const destinationGroups = [
  {
    region: 'Tamil Nadu',
    places: ['Madurai Tours', 'Rameshwaram Tours', 'Kanyakumari Tours', 'Ooty Tours', 'Kodaikanal Tours', 'Chennai Tours']
  },
  {
    region: 'Kerala',
    places: ['Kerala Tours', 'Munnar Tours', 'Thekkady Tours', 'Alleppey Tours', 'Vagamon Tours']
  },
  {
    region: 'North & East India',
    places: ['Shirdi Tours', 'Varanasi Tours', 'Cherrapunji Tours', 'Pune Tours', 'Shillong Tours', 'Guwahati Tours', 'Ayodhya Tours']
  }
];

// Kerala packages: Packages that go to Kerala destinations
const keralaKeywords = ['munnar', 'thekkady', 'alleppey', 'vagamon', 'valparai', 'kumarakom', 'marayoor', 'kerala'];
const keralaPackages = Object.values(packagesDatabase).filter((p: any) => {
  const titleLower = p.title.toLowerCase();
  return keralaKeywords.some(kw => titleLower.includes(kw));
}).map((p: any) => ({
  id: parseInt(p.id),
  title: p.title,
  duration: p.overview.duration,
  destination: p.overview.destination,
  activities: p.overview.activities,
  themes: p.overview.themes,
  price: p.priceDetails.amount,
  image: p.image,
  rating: p.rating,
  reviews: p.reviews
}));

const shirdiPackages = [
  {
    id: 2011,
    title: 'Chennai to Shirdi Tour Package | Train + Flight | 4 Days / 3 Nights',
    duration: '4 Days / 3 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '10,500',
    image: '/assets/shiridi/cards/chennaitoshirditrainflight4days.png'
  },
  {
    id: 2012,
    title: 'Chennai to Shirdi One Day Flight Tour Package',
    duration: 'One Day',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '10,500',
    image: '/assets/shiridi/cards/chennaitoshirdi1dayflightpackage.png'
  },
  {
    id: 2013,
    title: 'Chennai to Shirdi Tour Package via Pune | 2 Days / 1 Night Flight Package',
    duration: '2 Days / 1 Night',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '12,500',
    image: '/assets/shiridi/cards/Chennai to Mumbai & Shirdi Flight Tour Package  2 Days  1 Night.png'
  },
  {
    id: 2014,
    title: 'Chennai to Shirdi Train Tour Package | 6 Days / 5 Nights Pilgrimage',
    duration: '6 Days / 5 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '5,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.png'
  },
  {
    id: 2015,
    title: 'Chennai to Shirdi & Mantralayam Train Tour Package | 7 Days / 6 Nights Pilgrimage',
    duration: '7 Days / 6 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '7,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.png'
  },
  {
    id: 2016,
    title: 'Chennai to Shirdi, Pandharpur & Mantralayam Train Tour Package | 8 Days / 7 Nights',
    duration: '8 Days / 7 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '8,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi & Pandharpur Flight Tour Package  3 Days  2 Nights.png'
  },
  {
    id: 2017,
    title: 'Chennai to Mumbai & Shirdi Flight Tour Package | 2 Days / 1 Night',
    duration: '2 Days / 1 Night',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '14,500',
    image: '/assets/shiridi/cards/Chennai to Mumbai & Shirdi Flight Tour Package  2 Days  1 Night.png'
  },
  {
    id: 2018,
    title: 'Chennai to Shirdi & Nashik Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi & Nashik Flight Tour Package  3 Days  2 Nights.png'
  },
  {
    id: 2019,
    title: 'Chennai to Shirdi & Pandharpur Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi & Pandharpur Flight Tour Package  3 Days  2 Nights.png'
  },
  {
    id: 2020,
    title: 'Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package | 4 Days / 3 Nights',
    duration: '4 Days / 3 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '18,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi, Nashik, Ajanta & Ellora Flight Tour Package  4 Days  3 Nights.png'
  },
  {
    id: 2021,
    title: 'Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi & 2 Jyotirlinga Flight Tour Package  3 Days  2 Nights.png'
  },
  {
    id: 2022,
    title: 'Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package | 4 Days / 3 Nights',
    duration: '4 Days / 3 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '18,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi & 3 Jyotirlinga Flight Tour Package  4 Days  3 Nights.png'
  },
  {
    id: 2023,
    title: 'Chennai to Shirdi & Lonavala Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi & Lonavala Flight Tour Package  3 Days  2 Nights.png'
  },
  {
    id: 2024,
    title: 'Chennai to Shirdi, Ajanta & Ellora Flight Tour Package | 3 Days / 2 Nights',
    duration: '3 Days / 2 Nights',
    destination: 'Shirdi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '16,500',
    image: '/assets/shiridi/cards/Chennai to Shirdi, Ajanta & Ellora Flight Tour Package  3 Days  2 Nights.png'
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
 id: 26,
 title: 'Pilgrim Tour 03N - 04D',
 duration: '3 Nights / 4 Days',
 destination: 'Kovalam, Thiruvananthapuram, Trivandrum, Kanyakumari...',
 activities: 'Beaches Sightseeing, Museums, Sightseeing',
 themes: 'Religious & Pilgrimage, Beaches and Islands',
 price: 'On Request',
 image: '/assets/generated/ramanathaswamy_temple.png'
 },
 {
 id: 27,
 title: '9 Night - 10 Days Kerala Tour Package',
 duration: '9 Nights / 10 Days',
 destination: 'Kochi, Kovalam, Thekkady, Alleppey, Trivandrum...',
 activities: 'House Boat, Elephant Safari, Beaches Sightseeing, Museums, Sightseeing',
 themes: 'Wildlife, Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
 price: 'On Request',
 image: '/assets/kerala/9 Night - 10 Days Kerala Tour Package cards.png'
 },
 {
 id: 28,
 title: 'Madurai - Rameshwaram - Kanyakumari 4N 5D Tour',
 duration: '4 Nights / 5 Days',
 destination: 'Kanyakumari, Madurai, Rameshwaram, Meenakshi Temple',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
 price: 'On Request',
 image: '/assets/generated/kanyakumari_beach.png'
 },
 {
 id: 29,
 title: '10 Night - 11 Days Tamil Nadu Tour Package',
 duration: '10 Nights / 11 Days',
 destination: 'Chennai, Kanchipuram, Kanyakumari, Mahabalipuram...',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
 price: 'On Request',
 image: '/assets/chennai/10 Night - 11 Days Tamil Nadu Tour Package card.png'
 },
 {
 id: 30,
 title: 'Delightful Madurai - Rameswaram - Kanyakumari 3Night 4Days Tour',
 duration: '3 Nights / 4 Days',
 destination: 'Kanyakumari, Madurai, Rameshwaram, Kumari Amman Temple',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage, Beaches and Islands',
 price: 'On Request',
 image: '/assets/generated/vivekananda_rock.png'
 },
 {
 id: 31,
 title: 'Madurai - Rameshwaram - Kanyakumari - Trivandrum Tour 5N 6D',
 duration: '5 Nights / 6 Days',
 destination: 'Kovalam, Trivandrum, Kanyakumari, Madurai, Rameshwaram...',
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
 image: '/assets/meghalaya1.avif'
 },
 {
 id: 33,
 title: 'Eastern Meadows Shillong - Guwahati Tour',
 duration: '3 Nights / 4 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
 price: 'On Request',
 image: '/assets/assam1.avif'
 },
 {
 id: 34,
 title: 'North-East Beauty Kaziranga - Shillong Tour',
 duration: '4 Nights / 5 Days',
 destination: 'Shillong, Cherrapunji, Kaziranga, Kaziranga National Park...',
 activities: 'Caving, Jeep Safari, Elephant Safari, Sightseeing',
 themes: 'Wildlife, Hill Stations & Valleys, Culture & Heritage',
 price: 'On Request',
 image: '/assets/sikkim1.avif'
 },
 {
 id: 35,
 title: 'Splendour Himalaya Shillong - Guwahati Tour',
 duration: '4 Nights / 5 Days',
 destination: 'Shillong, Cherrapunji, Dawki, Guwahati, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
 price: 'On Request',
 image: '/assets/mizoram1.avif'
 },
 {
 id: 36,
 title: 'Scotland Of The East - Shillong 4N Tour',
 duration: '4 Nights / 5 Days',
 destination: 'Shillong, Cherrapunji, Dawki, Nohkalikai Falls',
 activities: 'Caving, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
 price: 'On Request',
 image: '/assets/meghalaya1.avif'
 },
 {
 id: 37,
 title: 'Peaks - Lakes Shillong - Guwahati Tour',
 duration: '4 Nights / 5 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
 price: 'On Request',
 image: '/assets/assam1.avif'
 },
 {
 id: 38,
 title: 'North East Triangle Kaziranga - Shillong - Guwahati Tour',
 duration: '5 Nights / 6 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Kaziranga...',
 activities: 'Jeep Safari, Elephant Safari, Museums, Sightseeing',
 themes: 'Wildlife, Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
 price: 'On Request',
 image: '/assets/sikkim1.avif'
 },
 {
 id: 39,
 title: 'Splendour Himalaya Shillong - Guwahati 6 Days Tour',
 duration: '5 Nights / 6 Days',
 destination: 'Guwahati, Shillong, Cherrapunji, Dawki, Nohkalikai Falls',
 activities: 'Caving, Museums, Sightseeing',
 themes: 'Hill Stations & Valleys, Religious & Pilgrimage, Culture & Heritage',
 price: 'On Request',
 image: '/assets/mizoram1.avif'
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
 image: '/assets/assam1.avif'
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
  {
    id: 2000,
    title: 'Chennai to Varanasi Tour Package | 2 Days / 1 Night Kasi Flight Package',
    duration: '2 Days / 1 Night',
    destination: 'Varanasi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '18,500',
    image: '/assets/varanasi/cards/kasi1.png'
  },
  {
    id: 2001,
    title: 'Chennai to Ayodhya Tour Package | 2 Days / 1 Night Ayodhya Flight Package',
    duration: '2 Days / 1 Night',
    destination: 'Ayodhya',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '18,500',
    image: '/assets/generated/ayodhya_ram_mandir_pkg.png'
  },
  {
    id: 2002,
    title: 'Chennai to Varanasi Tour Package | 3 Days / 2 Nights Kasi Flight Package',
    duration: '3 Days / 2 Nights',
    destination: 'Varanasi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '23,500',
    image: '/assets/varanasi/cards/kasi3.png'
  },
  {
    id: 2003,
    title: 'Chennai to Kasi & Ayodhya Tour Package | 3 Days / 2 Nights Flight Package',
    duration: '3 Days / 2 Nights',
    destination: 'Varanasi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '27,500',
    image: '/assets/varanasi/cards/kasi4.png'
  },
  {
    id: 2004,
    title: 'Chennai to Kasi & Gaya Tour Package | 5 Days / 4 Nights Flight Package',
    duration: '5 Days / 4 Nights',
    destination: 'Varanasi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '34,500',
    image: '/assets/varanasi/cards/kasi5.png'
  },
  {
    id: 2005,
    title: 'Chennai to Kasi, Gaya, Prayagraj & Ayodhya Tour Package | 6 Days / 5 Nights Flight Package',
    duration: '6 Days / 5 Nights',
    destination: 'Varanasi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '39,500',
    image: '/assets/varanasi/cards/kasi6.png'
  },
  {
    id: 2006,
    title: 'Chennai to Kasi Train Tour Package | 8 Days / 7 Nights Pilgrimage Package',
    duration: '8 Days / 7 Nights',
    destination: 'Varanasi',
    activities: 'Pilgrimage, Sightseeing',
    themes: 'Religious & Pilgrimage, Culture & Heritage',
    price: '14,500',
    image: '/assets/varanasi/cards/kasi7.png'
  },
   getDbPackage('18')!,
  getDbPackage('20')!,
  getDbPackage('23')!,
  getDbPackage('25')!
];

const rameshwaramPackages = [
 kanyakumariPackages.find(p => p.id === 28)!,
 kanyakumariPackages.find(p => p.id === 29)!,
 kanyakumariPackages.find(p => p.id === 30)!,
 kanyakumariPackages.find(p => p.id === 31)!,
 {
 id: 42,
 title: 'Madurai To Rameshwaram 1N 2D Tour',
 duration: '1 Nights / 2 Days',
 destination: 'Madurai, Rameshwaram',
 activities: 'Sightseeing',
 themes: 'Religious & Pilgrimage, Culture & Heritage',
 price: 'On Request',
 image: '/assets/Uttarakhand1.avif'
 }
];

const maduraiPackages = Object.values(packagesDatabase).filter((p: any) => {
  const titleLower = (p.title || '').toLowerCase();
  const destLower = (p.overview?.destination || '').toLowerCase();
  // Filter for packages that actually mention Madurai to avoid unrelated packages like "Chennai to Shirdi"
  return titleLower.includes('madurai') || destLower.includes('madurai');
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
  return getDays(a.duration) - getDays(b.duration);
});

const ayodhyaPackages = Object.values(packagesDatabase).filter((p: any) => {
  const titleLower = p.title.toLowerCase();
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
    const chennaiOrigins = ['shirdi', 'varanasi', 'pune', 'ayodhya', 'kasi', 'guwahati', 'shillong', 'cherrapunji'];
    const placeKeyword = category.replace('-tours', '').toLowerCase();
    const placeDisplay = placeKeyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    if (chennaiOrigins.includes(placeKeyword)) {
      return `Chennai to ${placeDisplay} Tour`;
    }
    
    if (placeKeyword === 'madurai' || placeKeyword === 'kerala') {
      return `${placeDisplay} Tour`;
    }
    
    // Default to Madurai as the base origin for South India trips
    return `Madurai to ${placeDisplay} Tour`;
  }, [category]);

  const [searchQuery, setSearchQuery] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [themeFilter, setThemeFilter] = useState('');

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
    
    switch(category) {
      case 'shirdi-tours': return shirdiPackages;
      case 'varanasi-tours': return varanasiPackages;
      case 'pune-tours': return punePackages;
      case 'kanyakumari-tours': return kanyakumariPackages;
      case 'cherrapunji-tours': return cherrapunjiPackages;
      case 'shillong-tours': return shillongPackages;
      case 'guwahati-tours': return guwahatiPackages;
      case 'ayodhya-tours': return ayodhyaPackages;
      case 'rameshwaram-tours': return rameshwaramPackages;
      case 'madurai-tours': return maduraiPackages;
      case 'kerala-tours': return keralaPackages;
      default: {
        const placeKeyword = category.replace('-tours', '').toLowerCase();
        const matched = Object.values(packagesDatabase).filter((p: any) => 
          p.title.toLowerCase().includes(placeKeyword) || 
          (p.overview?.destination || '').toLowerCase().includes(placeKeyword)
        ).map((p: any) => ({
          id: parseInt(p.id),
          title: p.title,
          duration: p.overview.duration,
          destination: p.overview.destination,
          activities: p.overview.activities,
          themes: p.overview.themes,
          price: p.priceDetails.amount,
          image: p.image,
          rating: p.rating,
          reviews: p.reviews
        }));
        
        return matched.length > 0 ? matched : mockPackages;
      }
    }
  }, [category, mockPackages]);

  const currentPackages = useMemo(() => {
    return basePackages.filter(pkg => {
      if (searchQuery && !pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) && !(pkg.destination || '').toLowerCase().includes(searchQuery.toLowerCase())) {
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

        if (budgetFilter === 'Under ₹10,000' && price >= 10000) return false;
        if (budgetFilter === '₹10,000 - ₹20,000' && (price < 10000 || price > 20000)) return false;
        if (budgetFilter === 'Above ₹20,000' && price <= 20000) return false;
      }
      
      return true;
    });
  }, [basePackages, searchQuery, budgetFilter, durationFilter, themeFilter]);

  
  
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

 <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-slate-100 sticky top-24 z-40 shadow-sm">
 <h3 className="text-lg font-bold text-[var(--color-neutral-black)] mb-4">Search Packages</h3>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
  <div className="relative w-full h-[220px] bg-slate-50 overflow-hidden">
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
    
    <div className="absolute top-4 right-4 bg-white text-slate-800 text-[12px] font-bold min-w-[50px] p-1.5 rounded-xl flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] leading-tight">
      <div className="flex items-center gap-1">
        <Star className="w-3 h-3 text-orange-400 fill-orange-400" /> 
        <span itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <span itemProp="ratingValue">{rating}</span>
          <meta itemProp="reviewCount" content={reviews.replace('K+', '000').replace('.', '')} />
        </span>
      </div>
      <span className="text-[9px] text-slate-500 font-bold mt-0.5">({reviews})</span>
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
    
    {/* Trust Section */}
    <div className="bg-[#F2FBF5] rounded-xl p-3 mb-5 border border-[#E2F5EA] flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#0F6B46] flex-shrink-0" />
        <span className="text-[11px] font-bold text-[#1B2430]">Instant Booking Confirmation</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#0F6B46] flex-shrink-0" />
        <span className="text-[11px] font-bold text-[#1B2430]">Trusted Local Tour Operator</span>
      </div>
    </div>
    
    <div className="mt-auto flex items-center">
       <Link 
         to={getPackageLink(pkg)} 
         className="text-[var(--color-primary-forest)] text-[14px] font-bold flex items-center gap-1.5 hover:text-[#0c593a] transition-colors group/link"
         aria-label={`View details for ${pkg.title}`}
       >
         View Details <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
       </Link>
    </div>
  </div>
</article>
);})}
          </div>
        </div>
      )}

      {/* Grouped Packages */}
      {sortedDays.filter(day => durationFilter === "" || durationFilter === day.toString()).map(day => (
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
  <div className="relative w-full h-[220px] bg-slate-50 overflow-hidden">
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
    
    <div className="absolute top-4 right-4 bg-white text-slate-800 text-[12px] font-bold min-w-[50px] p-1.5 rounded-xl flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] leading-tight">
      <div className="flex items-center gap-1">
        <Star className="w-3 h-3 text-orange-400 fill-orange-400" /> 
        <span itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <span itemProp="ratingValue">{rating}</span>
          <meta itemProp="reviewCount" content={reviews.replace('K+', '000').replace('.', '')} />
        </span>
      </div>
      <span className="text-[9px] text-slate-500 font-bold mt-0.5">({reviews})</span>
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
    
    {/* Trust Section */}
    <div className="bg-[#F2FBF5] rounded-xl p-3 mb-5 border border-[#E2F5EA] flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#0F6B46] flex-shrink-0" />
        <span className="text-[11px] font-bold text-[#1B2430]">Instant Booking Confirmation</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#0F6B46] flex-shrink-0" />
        <span className="text-[11px] font-bold text-[#1B2430]">Trusted Local Tour Operator</span>
      </div>
    </div>
    
    <div className="mt-auto flex items-center">
       <Link 
         to={getPackageLink(pkg)} 
         className="text-[var(--color-primary-forest)] text-[14px] font-bold flex items-center gap-1.5 hover:text-[#0c593a] transition-colors group/link"
         aria-label={`View details for ${pkg.title}`}
       >
         View Details <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
       </Link>
    </div>
  </div>
</article>
);})}
          </div>
        </div>
      ))}

    </div>
  </div>

  {/* Sidebar (Right) */}
  <div className="w-full lg:w-80 flex-shrink-0">
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-[220px]">
    
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
              className={`text-[12px] font-semibold px-4 py-2 rounded-full border transition-all ${
                isSelected 
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
  
  {/* Floating Action Button for Saved Items */}
  {savedPackages.length > 0 && (
    <button 
      onClick={() => setIsSavedDrawerOpen(true)}
      className="fixed bottom-8 right-8 z-50 bg-[var(--color-primary-forest)] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 transition-transform flex items-center justify-center group"
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
            const pkg = currentPackages.find(p => p.id === id) || basePackages.find(p => p.id === id);
            if (!pkg) return null;
            return (
              <div key={id} className="flex gap-4 p-3 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group">
                <img src={pkg.image} alt={pkg.title} className="w-24 h-24 rounded-xl object-cover" />
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
