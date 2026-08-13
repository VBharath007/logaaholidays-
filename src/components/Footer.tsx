import { MapPin, Phone, ChevronRight, Briefcase, Map, HeadphonesIcon, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'DESTINATIONS',
    links: [
      { label: 'Tamil Nadu', href: '/destination/tamilnadu/tamilnadu-tourism' },
      { label: 'Kerala', href: '/destination/kerala/kerala-tourism' },
      { label: 'Karnataka', href: '/destination/karnataka-tour-packages' },
      { label: 'North India', href: '/north-india-tour-packages' },
    ]
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact Us', href: '/contact-us' }
    ]
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Car & Coach Rental', href: '/services/car-coach-rental' },
      { label: 'Flight Booking', href: '/services/flight-booking' },
      { label: 'Railway Ticket Booking', href: '/services/railway-ticket-booking' },
      { label: 'Passport & Visa Service', href: '/services/passport-visa-service' },
      { label: 'Travel Insurance Service', href: '/services/travel-insurance-service' },
    ]
  },
];

export function Footer() {
  return (
    <footer className="w-full relative bg-[#F8F6F0] overflow-hidden pt-12 border-t border-[#EFECE3]">

      {/* Background Image with Opacity */}
      <img src="/assets/footerbg.png" alt="" className="absolute inset-0 w-full h-[80%] object-cover opacity-20 pointer-events-none z-0" />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 relative z-10 pb-16">

        {/* Left: Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
          <img loading="lazy" src="/logo.png" alt="Logaa Holidays" className="h-16 w-auto mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(29%) sepia(21%) saturate(2335%) hue-rotate(101deg) brightness(97%) contrast(93%)' }} />

          <h3 className="font-display italic text-3xl text-black mb-4" style={{ textShadow: '0 0 10px white, 0 0 20px white' }}>Where Journey Begins</h3>

          <div className="w-full h-[2px] bg-[#1F6F43]/20 my-2 mb-4"></div>

          <p className="text-black text-[15px] font-bold leading-relaxed mb-6" style={{ textShadow: '0 0 8px white, 0 0 12px white' }}>
           Your trusted partner for seamless tours, travels, and unforgettable experiences.
          </p>

          {/* <div className="bg-[#EFECE3] border border-[#E0DCD0] rounded-2xl px-5 py-4 flex items-center gap-4 w-full">
            <div className="w-10 h-10 rounded-full bg-[#1F6F43]/10 flex items-center justify-center shrink-0">
              <MapPin className="text-[#1F6F43] w-5 h-5" />
            </div>
            <p className="text-[15px] font-extrabold text-black leading-snug">
              Proudly based in Madurai, <br />
              <span className="text-[#1F6F43] font-medium">The Temple City.</span>
            </p>
          </div> */}
        </div>

        {/* Links */}
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left md:pl-4 lg:pl-8">
            <h4 className="text-[15px] font-extrabold text-black mb-4 uppercase tracking-widest" style={{ textShadow: '0 0 8px white' }}>{col.title}</h4>
            <div className="w-8 h-0.5 bg-[#1F6F43] mb-4 opacity-60"></div>
            <ul className="flex flex-col items-center md:items-start gap-3 w-full">
              {col.links.map((link, i) => (
                <li key={i} className="w-full">
                  <Link to={link.href} className="group flex items-center justify-center md:justify-start gap-3 text-black font-bold hover:text-[#1F6F43] transition-colors text-base" style={{ textShadow: '0 0 8px white, 0 0 12px white' }}>
                    <ChevronRight className="w-3 h-3 text-[#1F6F43] hidden md:block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Overlapping Feature Card (Crystal Clear Glassmorphism) */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 -mb-6">
        <div className="bg-white/5 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/30 p-4 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-black/5 backdrop-blur-sm">

          <div className="flex-1 flex items-center gap-4 p-3 lg:px-6">
            <div className="w-12 h-12 rounded-xl bg-transparent border-2 border-[#1F6F43] text-[#1F6F43] flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-[15px] text-[#333] mb-1.5 tracking-wide uppercase">LOCAL EXPERTISE</h5>
              <p className="text-sm text-[#666] leading-relaxed font-medium">In-depth knowledge of Madurai and beyond.</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 p-3 lg:px-6">
            <div className="w-12 h-12 rounded-xl bg-transparent border-2 border-[#1F6F43] text-[#1F6F43] flex items-center justify-center shrink-0">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-[15px] text-[#333] mb-1.5 tracking-wide uppercase">CUSTOMIZABLE PACKAGES</h5>
              <p className="text-sm text-[#666] leading-relaxed font-medium">Tailored packages to match your travel needs.</p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 p-3 lg:px-6">
            <div className="w-12 h-12 rounded-xl bg-transparent border-2 border-[#1F6F43] text-[#1F6F43] flex items-center justify-center shrink-0">
              <HeadphonesIcon className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-[15px] text-[#333] mb-1.5 tracking-wide uppercase">24/7 SUPPORT</h5>
              <p className="text-sm text-[#666] leading-relaxed font-medium">We're here to assist you anytime, anywhere.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Dark Green Section */}
      <div className="bg-[#0e3e23] pt-16 pb-8 px-6 relative overflow-hidden text-white mt-0">

        {/* Subtle Mandala Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] bg-[url('/assets/mandala.png')] bg-contain bg-no-repeat rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.03] bg-[url('/assets/mandala.png')] bg-contain bg-no-repeat -rotate-45 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 relative z-10">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 lg:gap-16">

            {/* Call Us */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 group text-center sm:text-left">
              <div className="w-14 h-14 rounded-full border border-[#2A6544] bg-[#124b2b] flex items-center justify-center group-hover:bg-[#1F6F43] transition-colors shrink-0 shadow-inner">
                <Phone className="w-6 h-6 text-[#88C69F] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[#88C69F] text-sm mb-1 font-medium">Call Us</p>
                <a href="tel:7397329776" className="font-bold text-2xl hover:text-white transition-colors tracking-wide">7397329776</a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 group text-center sm:text-left">
              <div className="w-14 h-14 rounded-full border border-[#2A6544] bg-[#124b2b] flex items-center justify-center group-hover:bg-[#1F6F43] transition-colors shrink-0 shadow-inner">
                <MapPin className="w-6 h-6 text-[#88C69F] group-hover:text-white transition-colors" />
              </div>
              <div className="max-w-[300px]">
                <p className="text-[#88C69F] text-sm mb-1 font-medium">Visit Us</p>
                <p className="text-sm text-white/90 leading-relaxed font-medium">T247, Sector T Type, Housing Board, Ellis Nagar, Madurai, Tamil Nadu 625016</p>
              </div>
            </div>

          </div>

          {/* Script Text */}
          <div className="text-center md:text-right hidden lg:block">
            <h2 className="font-display text-4xl text-[#88C69F] tracking-wide relative inline-block transform -rotate-2" style={{ fontFamily: '"Caveat", "Dancing Script", cursive' }}>
              Let's Plan Your<br />Next Adventure!
              <svg className="absolute -bottom-2 -left-4 w-full h-4 text-[#1F6F43] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" fill="none" strokeWidth="2" /></svg>
            </h2>
          </div>

        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto h-px bg-[#1F6F43]/40 my-6"></div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-white/50 tracking-wide">
          <p>© {new Date().getFullYear()} Logaa Holidays. All rights reserved.</p>
          <span className="hidden sm:inline">|</span>
          <p className="flex items-center gap-1">Crafted with <Heart className="w-3 h-3 text-[#1F6F43] fill-[#1F6F43] mx-1" /> in Madurai</p>
        </div>

      </div>

    </footer>
  );
}
