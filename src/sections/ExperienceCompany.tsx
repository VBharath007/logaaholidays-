import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, UserCheck, Plane, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ExperienceCompany() {
  return (
    <section className="py-24 px-6 bg-white text-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Image Composite */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-8 pb-8"
        >
          {/* Main Image in Clay Card */}
          <div className="clay-card rounded-[3rem] overflow-hidden aspect-[4/5] relative z-10 p-2">
            <img 
              src='/assets/megalaya1.avif' 
              alt="Couple traveling" 
              className="w-full h-full object-cover rounded-[2.5rem]" 
            />
          </div>
          
          {/* Discount Badge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full clay-badge z-30 flex items-center justify-center p-2">
            <div className="w-full h-full rounded-full border-2 border-dashed border-orange-300 flex flex-col items-center justify-center text-orange-500 bg-orange-50/50">
              <span className="text-3xl font-bold">50%</span>
              <span className="text-sm font-semibold">Discount</span>
            </div>
          </div>
          
          {/* Decorative Plane Icon */}
          <div className="absolute top-10 -left-6 text-orange-400 rotate-45 z-20">
            <Plane className="w-12 h-12" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-blue-600 font-semibold tracking-wider text-sm mb-4 uppercase">
            <Plane className="w-4 h-4" />
            Get To Know Us
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Experience the World with Our Company
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Friendly Guide</h4>
                <p className="text-sm text-slate-500">There are many variations of passages of lorem ipsum.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Safety Travel</h4>
                <p className="text-sm text-slate-500">There are many variations of passages of lorem ipsum.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center mb-10 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div className="flex flex-col items-center text-center gap-2 clay-badge p-4 rounded-2xl w-32">
              <Trophy className="w-8 h-8 text-blue-600" />
              <span className="text-xs font-bold text-slate-800">Award Winning Agency</span>
            </div>
            <ul className="space-y-3">
              {[
                'Many variations of passages of lorem.',
                'Many variations of passages of lorem.',
                'Expert many variations teacher.',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/about" className="inline-flex px-8 py-4 font-semibold text-white clay-btn-orange">
            Explore More
          </Link>
        </motion.div>
        
      </div>
    </section>
  )
}
