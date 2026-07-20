import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Navigation, Plane, Globe2, TreePine, Heart } from 'lucide-react';
import { ComprehensiveEnquiryForm } from '../components/ComprehensiveEnquiryForm';

export function ServiceDetails() {
 const { serviceId } = useParams<{ serviceId: string }>();
 const [serviceTitle, setServiceTitle] = useState('');

 const allServices = [
 'Tour Operators',
 'Car & Coach Rental',
 'Flight Booking',
 'Railway Ticket Booking',
 'Passport & Visa Service',
 'Travel Insurance Service',
 'Event Management',
 'Hotel Booking'
 ];

 useEffect(() => {
 if (serviceId) {
 const words = serviceId.split('-');
 const formattedTitle = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
 setServiceTitle(formattedTitle.includes('Visa') ? 'Passport & Visa Services' : formattedTitle);
 window.scrollTo(0, 0);
 }
 }, [serviceId]);

 const getHeroImage = (id: string) => {
 switch (id) {
 case 'tour-operators':
 return '/assets/Mizoram2.webp'; // Taj Mahal
 case 'car-coach-rental':
 return '/assets/manipur2.webp'; // Luxury SUV in landscape
 case 'flight-booking':
 return '/assets/services/flight.png';
 case 'railway-ticket-booking':
 return '/assets/maharashtra1.webp'; // Train station
 case 'passport-visa-service':
 return '/assets/services/visa.png';
 case 'travel-insurance-service':
 return '/assets/services/insurance.png';
 case 'event-management':
 return '/assets/Uttar Pradesh1.webp'; // Beautiful event setup
 case 'hotel-booking':
 return '/assets/himachal.webp'; // Luxury resort pool
 default:
 return '/assets/karnataka1.webp';
 }
 };

 const getFeatureImage = (id: string) => {
 switch (id) {
 case 'tour-operators':
 return '/assets/megalaya1.webp'; // Kerala backwaters boat
 case 'car-coach-rental':
 return '/assets/karnataka1.webp'; // Premium car interior
 case 'flight-booking':
 return '/assets/services/flight.png';
 case 'railway-ticket-booking':
 return '/assets/Uttar Pradesh1.webp'; // Inside a train
 case 'passport-visa-service':
 return '/assets/services/visa.png';
 case 'travel-insurance-service':
 return '/assets/services/insurance.png';
 case 'event-management':
 return '/assets/karnataka1.webp'; // Crowd celebration
 case 'hotel-booking':
 return '/assets/himachal.webp'; // Premium hotel room
 default:
 return '/assets/himachal.webp';
 }
 };

 const heroImage = getHeroImage(serviceId || '');
 const featureImage = getFeatureImage(serviceId || '');

 return (
 <div className="bg-[var(--color-deep-teal)] min-h-screen font-body pb-32">
 
 {/* 1. Hero Section (India Guide Style) */}
 <div className="relative pt-24 pb-32 bg-gradient-to-b from-[#E8F4FC] via-[#F4F9FD] to-[var(--color-deep-teal)] overflow-hidden">
 
 {/* Decorative Background Elements (Clouds/Birds/Planes simulation) */}
 <div className="absolute top-20 left-20 w-32 h-10 bg-white/50 blur-xl rounded-full"></div>
 <div className="absolute top-40 right-40 w-48 h-16 bg-white/40 blur-2xl rounded-full"></div>
 <Plane className="absolute top-24 left-1/4 w-8 h-8 text-slate-300 -rotate-12 opacity-60" />
 <Plane className="absolute top-32 right-1/4 w-12 h-12 text-slate-300 rotate-12 opacity-50" />

 <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 
 {/* Left Column: Typography & Actions */}
 <div className="flex flex-col items-start text-left pt-10">
 <h4 className="text-[#1E4D8C] font-extrabold tracking-[0.2em] text-sm md:text-base mb-2 uppercase">
 The Ultimate Guide To
 </h4>
 
 <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-[#1E4D8C] leading-none mb-2 " style={{ textShadow: '4px 4px 0px rgba(255,255,255,0.7), 8px 8px 15px rgba(0,0,0,0.1)' }}>
 {serviceTitle === 'Tour Operators' ? 'TOURS' : 
 serviceTitle === 'Flight Booking' ? 'FLIGHTS' : 
 serviceTitle.includes('Car') ? 'RENTALS' : 
 serviceTitle.includes('Visa') ? 'VISAS' : 
 serviceTitle.split(' ')[0].toUpperCase()}
 </h1>
 
 <div className="flex items-center gap-4 mb-6 mt-2">
 <div className="h-px w-12 bg-[#B8860B]"></div>
 <p className="text-[#B8860B] font-display text-xl md:text-2xl italic tracking-wide">
 Premium Services • Endless Wonders
 </p>
 <div className="h-px w-12 bg-[#B8860B]"></div>
 </div>

 <p className="text-slate-600 text-lg md:text-xl max-w-md leading-relaxed mb-10 font-medium">
 Explore the <span className="font-bold text-[#1E4D8C]">incredible</span> diversity, rich culture, and premium <span className="font-bold text-[#1E4D8C]">{serviceTitle.toLowerCase()}</span> with Logaa Holidays across Tamil Nadu and beyond.
 </p>

 <div className="flex flex-wrap items-center gap-4 mb-12">
 <button className="bg-[#0B408F] hover:bg-[#08306b] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-3 group">
 Explore {serviceTitle.split(' ')[0]}
 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </button>
 <button className="bg-transparent border-2 border-[#0B408F] text-[#0B408F] hover:bg-[#0B408F]/5 font-bold py-3.5 px-8 rounded-full transition-all flex items-center gap-3">
 <MapPin className="w-5 h-5" />
 Plan Your Trip
 </button>
 </div>

 {/* Stats Info Card (Dark Blue) */}
 <div className="bg-[#1C3E6E] rounded-3xl p-6 md:p-8 w-full max-w-lg relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
 
 <div className="grid grid-cols-2 gap-y-8 gap-x-2 md:grid-cols-4 md:gap-4 text-center relative z-10 md:divide-x md:divide-white/20">
 <div className="flex flex-col items-center justify-center px-1">
 <Globe2 className="w-6 h-6 text-white/80 mb-2" />
 <span className="text-2xl font-bold text-white mb-1">28</span>
 <span className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider">States</span>
 </div>
 <div className="flex flex-col items-center justify-center px-1 border-l border-white/20 md:border-none">
 <TreePine className="w-6 h-6 text-white/80 mb-2" />
 <span className="text-2xl font-bold text-white mb-1">8</span>
 <span className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider leading-tight">Union<br/>Territories</span>
 </div>
 <div className="flex flex-col items-center justify-center px-1">
 <MapPin className="w-6 h-6 text-white/80 mb-2" />
 <span className="text-2xl font-bold text-white mb-1">1000+</span>
 <span className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider">Locations</span>
 </div>
 <div className="flex flex-col items-center justify-center px-1 border-l border-white/20 md:border-none">
 <Heart className="w-6 h-6 text-white/80 mb-2" />
 <span className="text-2xl font-bold text-white mb-1">100%</span>
 <span className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider leading-tight">Premium<br/>Service</span>
 </div>
 </div>
 </div>
 </div>

 {/* Right Column: Hero Visual */}
 <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center">
 {/* Soft glow behind image */}
 <div className="absolute inset-0 bg-blue-200/50 rounded-full blur-[100px]"></div>
 
 <img loading="lazy" 
 src={heroImage} 
 alt={serviceTitle} 
 className="w-full h-full object-cover rounded-[3rem] ,77,140,0.3)] border-8 border-white/50 rotate-2 hover:rotate-0 transition-transform duration-700 z-10 relative"
 />
 
 {/* Small decorative floating elements */}
 <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#B8860B]/10 rounded-full blur-xl animate-pulse"></div>
 <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#1E4D8C]/10 rounded-full blur-xl animate-pulse delay-700"></div>
 </div>

 </div>
 </div>

 {/* 2. Main Content & Sidebar */}
 <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">
 
 {/* LEFT COLUMN: Main Content */}
 <div className="lg:col-span-8 flex flex-col gap-12">
 
 {/* Main Hero Visual Card */}
 <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border-4 border-white relative group">
 <img loading="lazy" src={heroImage} alt={serviceTitle} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-teal)]/80 via-transparent to-transparent opacity-60"></div>
 
 {/* Overlay Badge */}
 <div className="absolute bottom-6 left-6 bg-white text-[var(--color-deep-teal)] px-6 py-3 rounded-2xl font-bold flex items-center gap-3">
 <span className="flex items-center gap-1 text-[var(--color-brand-orange)]">
 ★ 5.0
 </span>
 <span className="w-1 h-1 rounded-full bg-slate-300"></span>
 Premium Service
 </div>
 </div>

 {/* Detailed Content Card */}
 <div className="bg-white text-[var(--color-deep-teal)] rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
 {/* Accent corner */}
 <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)]/5 rounded-bl-[100px]" />
 
 <h2 className="text-3xl md:text-4xl font-extrabold mb-8 font-display">
 Premium {serviceTitle}
 <div className="w-16 h-1 bg-[var(--color-brand-orange)] mt-4 rounded-full"></div>
 </h2>
 
 <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed relative z-10">
 {serviceId === 'car-coach-rental' ? (
 <>
 <p className="mb-6">
 The Tamil Nadu based Logaa Holidays offers reliable car & coach rental services to its clients. Making your trip as comfortable as possible is the aim of a rental automobile or bus. In your car, you would reach your desired location promptly. We take care to make sure your trip is both safe and enjoyable. Our fleet of vehicles is kept in good condition. Because of our cars' excellent maintenance and restoration, clients may travel in comfort.
 </p>
 <p>
 Depending on the specific interests of the clients and the number of people touring, we provide a variety of cars. Additionally, the vehicles we own are well-kept and in great condition. We are committed to meeting all of your travel needs.
 </p>
 </>
 ) : serviceId === 'event-management' ? (
 <>
 <p className="mb-6">
 Plan your event in the finest possible way, like never before with Logaa Holidays. Be it a corporate or private event, we are accessible with high-grade facilities. Our prearranged approach lets you achieve the flawless event management Tamil Nadu organized through our budgeted, innovative and highly accomplished planning.
 </p>
 <p>
 We propose some pre-defined themes which are formerly a success for better clarity. Your satisfaction is of our importance. We are intensely dedicated to delivering the best in your budget. We have a massive network of suppliers and partners to provide superiority without any fuss. We have friendly customer support to distinguish your demands well. Get your quotes now.
 </p>
 </>
 ) : serviceId === 'flight-booking' ? (
 <>
 <p className="mb-6">
 Logaa Holidays is a prominent Tour & Travel Agent in Tamil Nadu privileged of serving a large number of esteemed clients. We provide Airline Ticketing Services in order to assist clients with cheap airline tickets. We are associated with some of the leading airline and can assist you in getting quicker tickets.
 </p>
 <p>
 As per your requirements you can choose your seats. We have Airline Ticketing Services for any number of groups, individuals or families. Whether you want an instant ticket or an advanced ticket, we have services for all.
 </p>
 </>
 ) : serviceId === 'hotel-booking' ? (
 <>
 <p className="mb-6">
 Logaa Holidays is one of the leading organizations which offer hotel booking services of excellent quality. Our specialists make the hotel reservations at the best price according to the customer's destination. Within a defined time period, we offer these excellent services at Tamil Nadu. In addition, our experts pay attention to their customers to satisfy their unique needs. The customers are given these services at a high nominal price.
 </p>
 <p>
 With multiple hotels in existence, the reservation of the right accommodation is becoming a confusing task for visitors. The rates for similar facilities vary across all hotels. Contact us and we will choose you the best if you do not get the right option.
 </p>
 </>
 ) : serviceId === 'passport-visa-service' ? (
 <>
 <p className="mb-6">
 Logaa Holidays is an approved Passport & Visa Services Agency. Our key services are new or renewal of passports with us instead of waiting in line at the post office. Unassertive passport renewal online directions & our capable experts will make it a stress-free procedure. We've formed a long-term association with Embassies and Consulates around the world. We keep our circumstances tension-free to follow and offer a free Document Pre-Check.
 </p>
 <p>
 Our services comprise New Passport, Child Passport, Passport Renewal, Lost/Stolen Passport, and Add Pages to Passport. Apart from this, we can support you to get a visa in nearly every key country in the world.
 </p>
 </>
 ) : serviceId === 'railway-ticket-booking' ? (
 <>
 <p className="mb-6">
 To book a train, get in touch with Logaa Holidays. We are a business that provides railway ticket booking in Tamil Nadu. With our support, you can always reserve your train tickets. Kindly let us know the date of your trip, the number of berths you'd like to reserve, and your desired travel class.
 </p>
 <p>
 We can immediately book a suitable ticket for you using the information you have provided. We could also be able to tatkal-book tickets. Contact us right away to book a train in India. We are renowned for providing train ticketing services that are incredibly rapid and responsive.
 </p>
 </>
 ) : serviceId === 'tour-operators' ? (
 <p className="mb-6">
 Logaa Holidays is one of the leading tour operators in Tamil Nadu. To offer the best-assisted travel packages at an unbelievable price, we put in sturdy efforts. We have wide proficiency in managing travel packages as per your budget. Our smart travel booking service advances your tour package booking experience. We are well-organized in our system and complete the best routes in all types of packages. Our astonishing customer-oriented services have won us achievement and so we are proud to call ourselves worthy tour operators in Tamil Nadu. Our tour operating services are obtainable at the utmost accurate price. We have admirable travel agents to manage your touring necessities. Call us now.
 </p>
 ) : serviceId === 'travel-insurance-service' ? (
 <>
 <p className="mb-6">
 Are you an avid traveller and want travel insurance that has maximum policy coverage to keep your baggage and belongings safe both from misplacement and theft? Then we at Logaa Holidays can help you choose the right travel insurance according to your budget. Our team of travel professionals can guide you through the process of selecting the most reasonably-priced insurance plans that can also benefit senior citizens.
 </p>
 <h4 className="text-xl font-bold text-[var(--color-deep-teal)] mb-4 font-display">Widest Options Available</h4>
 <p>
 Not only do we help you choose from a widegamut of travel insurance options but we also offer you our professional consultancy services. When you book travel insurance from us, you will be taken aback by its benefits which shall keep you stress-free during your holidays. Call us to ensure your baggage and travel from now on.
 </p>
 </>
 ) : (
 <p className="mb-6">
 To book a premium service, get in touch with Logaa Holidays. We are a trusted business that provides exceptional {serviceTitle.toLowerCase()} across Tamil Nadu and beyond. With our dedicated support, you can always ensure your travel arrangements are perfect.
 </p>
 )}
 </div>
 
 {/* Complementary feature image nicely placed */}
 <div className="w-full h-[250px] mt-10 rounded-2xl overflow-hidden border border-slate-100">
 <img loading="lazy" src={featureImage} alt={`${serviceTitle} detail`} className="w-full h-full object-cover" />
 </div>
 </div>

 {/* Comprehensive Enquiry Form */}
 <div className="mt-4">
 <ComprehensiveEnquiryForm />
 </div>
 
 </div>

 {/* RIGHT COLUMN: Sidebar Widgets (SnapTrips "Why" Style) */}
 <div className="lg:col-span-4 flex flex-col gap-10">
 
 {/* Why Logaa Holidays (SnapTrips Ticket Style) */}
 <div className="pt-8">
 <h3 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
 Why Logaa Holidays?
 <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--color-brand-orange)]" viewBox="0 0 100 10" preserveAspectRatio="none">
 <path d="M0,5 Q25,10 50,5 T100,5" stroke="currentColor" strokeWidth="3" fill="none" />
 </svg>
 </h3>
 
 <div className="flex flex-col gap-6">
 {[
 { num: '01', title: 'Seamless Experience', desc: 'From booking to execution, we ensure every step is smooth and worry-free.' },
 { num: '02', title: 'Trusted Expertise', desc: 'Years of industry experience delivering premium travel and management services.' },
 { num: '03', title: 'Diverse Offerings', desc: 'A wide gamut of services tailored precisely to meet your unique needs.' }
 ].map((item, idx) => (
 <div key={idx} className="flex relative overflow-hidden rounded-xl bg-[var(--color-leaf-green)] group">
 {/* Left Ticket Stub (White) */}
 <div className="w-20 bg-white flex items-center justify-center relative z-10 shrink-0">
 <span className="text-3xl font-extrabold text-[var(--color-deep-teal)]">{item.num}</span>
 {/* The cutout circles to simulate ticket edges */}
 <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[var(--color-leaf-green)]"></div>
 <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-[var(--color-leaf-green)]"></div>
 <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-[var(--color-deep-teal)]"></div>
 </div>
 
 {/* Right Ticket Body (Green) */}
 <div className="p-5 pl-8 text-white">
 <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors">{item.title}</h4>
 <p className="text-white/80 text-sm font-medium leading-relaxed">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 
 {/* Menu / Other Services - Elegant Dark Theme */}
 <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md">
 <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
 <Navigation className="w-5 h-5 text-[var(--color-brand-orange)]" />
 Explore More
 </h3>
 
 <ul className="flex flex-col gap-3">
 {allServices.map(service => {
 const slug = service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
 const isActive = serviceTitle === service;
 
 return (
 <li key={service}>
 <Link 
 to={`/services/${slug}`}
 className={`block px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
 isActive 
 ? 'bg-white text-[var(--color-deep-teal)] pl-7' 
 : 'bg-transparent text-[var(--color-soft-blue)] hover:bg-white/10 hover:text-white hover:pl-7 border border-transparent hover:border-white/10'
 }`}
 >
 <div className="flex items-center justify-between">
 {service}
 <ChevronRight className={`w-4 h-4 ${isActive ? 'opacity-100 text-[var(--color-brand-orange)]' : 'opacity-0'}`} />
 </div>
 </Link>
 </li>
 )
 })}
 </ul>
 </div>

 {/* Contact Us Widget */}
 <div className="bg-[var(--color-brand-orange)] rounded-[2rem] p-8 text-white relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
 
 <h3 className="text-xl font-bold mb-6 font-display">Need Help?</h3>
 
 <div className="space-y-6 relative z-10 font-medium">
 <div className="flex items-start gap-3">
 <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
 <p className="text-sm">Ellis Nagar, Madurai, TN - 625016</p>
 </div>
 <div className="flex items-center gap-3">
 <Phone className="w-5 h-5 shrink-0" />
 <p className="text-sm">+91 98765 43210</p>
 </div>
 </div>

 <button className="w-full mt-8 bg-[var(--color-deep-teal)] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
 Get in Touch
 </button>
 </div>

 </div>
 </div>
 </div>
 );
}
