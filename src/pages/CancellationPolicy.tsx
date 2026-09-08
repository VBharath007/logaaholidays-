import { motion } from 'framer-motion';
import { RefreshCcw, Mail, CalendarX, Plane, FileWarning, Clock, Phone } from 'lucide-react';

const sections = [
  {
    icon: <Mail className="w-6 h-6 text-[#1F6F43]" />,
    title: "1. How to Request a Cancellation",
    content: "All cancellation requests for Tour Packages, Hotel Bookings, Car & Coach Rentals, or Flight/Train tickets must be communicated to Logaa Holidays in writing via email to logaaholidays@gmail.com or via phone to our Madurai office at +91 73973 29776. Verbal cancellations without written confirmation may not be processed."
  },
  {
    icon: <CalendarX className="w-6 h-6 text-[#1F6F43]" />,
    title: "2. Tour Package Cancellations",
    content: "For domestic and international tour packages, the cancellation charges will be determined based on the number of days remaining before the departure date:\n\n• 30 days or more before departure: A minimal processing fee applies, and the remaining advance amount will be refunded.\n• 15 to 29 days before departure: 50% of the total tour cost will be charged as a cancellation fee.\n• Less than 15 days before departure: No refund will be provided (100% cancellation fee).\n• No-Shows or early departures: No refunds are applicable if you fail to arrive or choose to leave the tour midway."
  },
  {
    icon: <Plane className="w-6 h-6 text-[#1F6F43]" />,
    title: "3. Flight and Railway Ticket Cancellations",
    content: "Cancellations and refunds for Flight and Railway Ticket Bookings are strictly governed by the policies of the respective airlines and IRCTC. Logaa Holidays will process refunds only after receiving the applicable amount from the carrier, minus a standard service charge."
  },
  {
    icon: <FileWarning className="w-6 h-6 text-[#1F6F43]" />,
    title: "4. Passport, Visa, and Insurance Services",
    content: "Fees paid for Passport applications, Visa processing, and Travel Insurance are generally non-refundable once the application has been submitted to the respective consulate, embassy, or insurance provider, regardless of whether the visa is granted or rejected."
  },
  {
    icon: <Clock className="w-6 h-6 text-[#1F6F43]" />,
    title: "5. Refund Processing Time",
    content: "Eligible refunds will be processed and credited back to the original mode of payment within 7 to 15 working days from the date of the approved cancellation request."
  },
  {
    icon: <Phone className="w-6 h-6 text-[#1F6F43]" />,
    title: "6. Contact Us",
    content: "For any queries regarding cancellations, please reach out to us:\n\nLogaa Holidays\nT247, Sector T Type, Housing Board, Ellis Nagar, Madurai, TN – 625016\nPhone: +91 73973 29776"
  }
];

export function CancellationPolicy() {
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
            <RefreshCcw className="w-10 h-10 text-[#1F6F43] transform -rotate-3" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-[#0B2515] mb-4"
          >
            Cancellation Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Logaa Holidays aims to provide flexible and transparent cancellation procedures for all our travel services.
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
