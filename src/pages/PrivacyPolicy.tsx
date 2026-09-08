import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle2, Mail } from 'lucide-react';

const sections = [
  {
    icon: <Eye className="w-6 h-6 text-[#1F6F43]" />,
    title: "1. Information We Collect",
    content: "To provide our services—including Domestic & International Tour Packages, Flight and Railway Ticket Bookings, Car & Coach Rentals, Passport & Visa Services, and Travel Insurance—we must collect personal information. This includes, but is not limited to:\n\n• Name, email address, phone number, and residential address.\n• Government-issued ID details (e.g., Aadhar, Passport) required for flight, train, visa, and hotel bookings.\n• Travel preferences and special requirements."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#1F6F43]" />,
    title: "2. How We Use Your Information",
    content: "Logaa Holidays strictly uses the collected data to fulfill your travel bookings and improve our services. Specifically, we use it to:\n\n• Process flight, train, and hotel reservations on your behalf.\n• Coordinate transport and driver details for car and coach rentals.\n• Process Passport and Visa applications as requested.\n• Communicate itinerary updates, payment confirmations, and support."
  },
  {
    icon: <Shield className="w-6 h-6 text-[#1F6F43]" />,
    title: "3. Sharing with Third Parties",
    content: "We do not sell or rent your personal data to third parties. Information is only shared with trusted service providers directly involved in your travel arrangements. This includes:\n\n• Airlines, IRCTC, and hotel partners.\n• Embassies and visa processing centers (for Visa/Passport services).\n• Insurance providers (for Travel Insurance services)."
  },
  {
    icon: <Lock className="w-6 h-6 text-[#1F6F43]" />,
    title: "4. Data Security",
    content: "We implement reasonable security practices to ensure your personal data is protected against unauthorized access. Digital copies of IDs and passports provided for booking purposes are stored securely and used exclusively for the requested service."
  },
  {
    icon: <Mail className="w-6 h-6 text-[#1F6F43]" />,
    title: "5. Contact Us",
    content: "If you have any questions regarding this Privacy Policy or how your data is handled, please contact our Registered Office:\n\nLogaa Holidays\nT247, Sector T Type, Housing Board,\nEllis Nagar, Madurai, Tamil Nadu – 625016\nPhone: +91 73973 29776\nEmail: logaaholidays@gmail.com"
  }
];

export function PrivacyPolicy() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-32 pb-24 font-body relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#f09433]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[30rem] h-[30rem] bg-[#1F6F43]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-white shadow-xl shadow-[#1F6F43]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3"
          >
            <Shield className="w-10 h-10 text-[#1F6F43] transform -rotate-3" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-[#0B2515] mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
            className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Logaa Holidays is committed to protecting your personal information and respecting your privacy.
          </motion.p>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-6">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden group"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1F6F43] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {section.icon}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-[#0B2515] mb-3 font-display tracking-wide">{section.title}</h3>
                  <div className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
