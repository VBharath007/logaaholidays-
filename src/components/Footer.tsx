import { useState } from 'react';
import { MapPin, Phone, ChevronRight, Mail, Compass, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

export function Footer() {
  const [isIntlOpen, setIsIntlOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <footer className="w-full relative bg-[#0B2515] text-white/80 pt-20 pb-8 overflow-hidden font-body">
      
      {/* Background Pattern - very subtle to ensure text visibility */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.02] bg-[url('/assets/mandala.png')] bg-contain bg-no-repeat rotate-45 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* 1. Company Information */}
        <div className="flex flex-col gap-6">
          <img src="/logo.png" alt="Logaa Holidays Logo - Trusted Travel Agency and Tour Operator in Madurai" className="w-44 brightness-0 invert" />
          <p className="text-sm leading-relaxed text-white/70 pr-4">
            Logaa Holidays is your trusted travel partner, specializing in curated tours and unforgettable experiences across India and beyond.
          </p>
          <div className="flex flex-col gap-4 text-sm mt-2">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#48c9b0] shrink-0 mt-0.5" />
              <span className="text-white/90">Logaa Holidays<br />T247, Sector T Type, Housing Board,<br />Ellis Nagar, Madurai, TN – 625016</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#48c9b0] shrink-0" />
              <a href="tel:+917397329776" className="text-white/90 hover:text-[#48c9b0] transition-colors">+91 73973 29776</a>
            </div>
            <div className="flex items-center gap-3">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
              <a href="https://wa.me/917397329776" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#25D366] transition-colors">WhatsApp Us</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#48c9b0] shrink-0" />
              <a href="mailto:logaaholidays@gmail.com" className="text-white/90 hover:text-[#48c9b0] transition-colors">logaaholidays@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.instagram.com/logaaholidays/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white transition-all shadow-sm">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/logaaholidays" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all shadow-sm">
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 2. Tour Packages / Destinations */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Destinations</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/south-india-tour-packages" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> South India</Link></li>
            <li><Link to="/north-india-tour-packages" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> North India</Link></li>
            <li><Link to="/tour-category/honeymoon" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> Honeymoon Packages</Link></li>
           
            {/* International Packages Submenu */}
            <li className="flex flex-col">
              <button 
                onClick={() => setIsIntlOpen(!isIntlOpen)} 
                className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all w-full text-left"
              >
                <ChevronRight className={`w-4 h-4 text-[#48c9b0] transition-transform duration-300 ${isIntlOpen ? 'rotate-90' : ''}`} /> 
                International Packages
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isIntlOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col gap-2 pl-6 border-l border-white/10 ml-2">
                  <li><Link to="/destination/international/malaysia-tourism" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Malaysia</Link></li>
                  <li><Link to="/destination/international/singapore-tourism" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Singapore</Link></li>
                  <li><Link to="/destination/international/bali-tourism" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Bali</Link></li>
                  <li><Link to="/destination/international/thailand-tourism" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Thailand</Link></li>
                  <li><Link to="/destination/international/sri-lanka-tourism" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Sri Lanka</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* 3. Useful Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Useful Links</h4>
          <ul className="flex flex-col gap-3">
            {/* Support Submenu */}
           
            <li><Link to="/about-us" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> About Us</Link></li>
            <li><Link to="/contact-us" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> Contact Us</Link></li>
            <li><Link to="/testimonials" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> Testimonials</Link></li>
             <li className="flex flex-col">
              <button 
                onClick={() => setIsSupportOpen(!isSupportOpen)} 
                className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all w-full text-left"
              >
                <ChevronRight className={`w-4 h-4 text-[#48c9b0] transition-transform duration-300 ${isSupportOpen ? 'rotate-90' : ''}`} /> 
                Support
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSupportOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col gap-2 pl-6 border-l border-white/10 ml-2">
                  <li><Link to="/services/car-coach-rental" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Car & Coach Rental</Link></li>
                  <li><Link to="/services/flight-booking" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Flight Booking</Link></li>
                  <li><Link to="/services/railway-ticket-booking" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Railway Ticket Booking</Link></li>
                  <li><Link to="/services/passport-visa-service" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Passport & Visa</Link></li>
                  <li><Link to="/services/travel-insurance-service" className="flex items-center text-white/50 hover:text-[#48c9b0] hover:translate-x-1 transition-all text-sm py-1">Travel Insurance</Link></li>
                </ul>
              </div>
            </li>
            
            <li><Link to="/privacy-policy" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> Terms & Conditions</Link></li>
            <li><Link to="/cancellation-policy" className="flex items-center gap-2 text-white/70 hover:text-[#48c9b0] hover:translate-x-1 transition-all"><ChevronRight className="w-4 h-4 text-[#48c9b0]" /> Cancellation Policy</Link></li>
          </ul>
        </div>

        {/* 4. Our Location */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wider">Our Location</h4>
          <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              title="Logaa Holidays Footer Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.237317385449!2d78.1025417!3d9.9141826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf2ea02ad1df%3A0xe40514c1f3d68740!2sLogaa%20Holidays!5e0!3m2!1sen!2sin!4v1786538878701!5m2!1sen!2sin"
              className="w-full h-full border-0 bg-white/5"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href="https://maps.app.goo.gl/YF4kRXWaSmTd69Gu9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white text-xs font-bold py-3 rounded-xl transition-all"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" /> Open Map
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Logaa+Holidays,+Ellis+Nagar,+Madurai,+Tamil+Nadu+625016"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white text-xs font-bold py-3 rounded-xl transition-all"
            >
              <Compass className="w-3.5 h-3.5 shrink-0" /> Directions
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50 tracking-wide">
          <p>© {new Date().getFullYear()} Logaa Holidays. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Logaa Holidays – Trusted Tour & Travel Agency
            <Heart className="w-3.5 h-3.5 text-[#48c9b0] fill-[#48c9b0]" /> 
            in Madurai
          </p>
        </div>
      </div>

    </footer>
  );
}
