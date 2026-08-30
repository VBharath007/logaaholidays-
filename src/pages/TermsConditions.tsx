import { motion } from 'framer-motion';
import { FileText, CreditCard, Tag, FileCheck2, ShieldAlert, Scale, Phone } from 'lucide-react';

const sections = [
  {
    icon: <FileText className="w-6 h-6 text-[#1F6F43]" />,
    title: "1. General Agreement",
    content: "By booking Domestic/International Tour Packages, Flight/Railway Tickets, Car/Coach Rentals, Passport/Visa Services, or Travel Insurance through Logaa Holidays, you agree to the terms and conditions outlined below. Logaa Holidays acts as a travel agent and tour operator located in Madurai, Tamil Nadu."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[#1F6F43]" />,
    title: "2. Booking and Payments",
    content: "• A booking is only confirmed once the required advance payment is received by Logaa Holidays.\n• The customer must provide accurate names (as per government ID/Passport), ages, and travel dates at the time of booking.\n• Full payment must be completed before the commencement of the tour or dispatch of travel documents."
  },
  {
    icon: <Tag className="w-6 h-6 text-[#1F6F43]" />,
    title: "3. Pricing and Inclusions",
    content: "Prices quoted for tour packages and transport are based on current rates and tariffs. Logaa Holidays reserves the right to amend prices due to fluctuations in fuel costs, taxes, or airline/hotel fare hikes prior to final payment. Only the items explicitly mentioned under the \"Inclusions\" section of your itinerary are part of the package."
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-[#1F6F43]" />,
    title: "4. Identity and Travel Documents",
    content: "Customers are responsible for carrying valid government-issued ID proofs (Aadhar, Voter ID) for domestic travel and valid Passports/Visas for international travel. Logaa Holidays assists in Visa and Passport applications; however, the final approval is strictly subject to the respective embassy or issuing authority."
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-[#1F6F43]" />,
    title: "5. Limitations of Liability",
    content: "Logaa Holidays acts as an intermediary for airlines, railways, hotels, and transport operators. We shall not be held responsible for:\n\n• Flight or train delays, cancellations, or missed connections.\n• Loss of baggage or personal belongings during the tour.\n• Alterations to itineraries caused by force majeure events such as bad weather, natural calamities, strikes, or political unrest."
  },
  {
    icon: <Scale className="w-6 h-6 text-[#1F6F43]" />,
    title: "6. Jurisdiction",
    content: "All disputes arising in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Madurai, Tamil Nadu."
  },
  {
    icon: <Phone className="w-6 h-6 text-[#1F6F43]" />,
    title: "7. Contact Information",
    content: "Logaa Holidays\nT247, Sector T Type, Housing Board, Ellis Nagar, Madurai, TN – 625016\nPhone: +91 73973 29776\nEmail: logaaholidays@gmail.com"
  }
];

export function TermsConditions() {
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
            <FileText className="w-10 h-10 text-[#1F6F43] transform -rotate-3" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-[#0B2515] mb-4"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Please read these terms carefully before booking any services with Logaa Holidays.
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
