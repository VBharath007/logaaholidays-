import type { ComponentType, CSSProperties, MouseEvent } from 'react'
import { Compass, Headset, ShieldCheck, Sparkles } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
 {
 icon: Compass,
 title: 'Handcrafted Itineraries',
 description: 'No templates. Every route is built around how you actually want to travel — slow mornings or sunrise treks.',
 },
 {
 icon: ShieldCheck,
 title: 'Verified Stays & Guides',
 description: 'Every houseboat, homestay and local guide is vetted in person before it ever reaches your itinerary.',
 },
 {
 icon: Sparkles,
 title: 'Moments, Not Checklists',
 description: 'We build in the in-between — the unplanned chai stop, the empty viewpoint at golden hour.',
 },
 {
 icon: Headset,
 title: '24/7 On-Ground Support',
 description: "A real person, one call away, for every day you're away from home.",
 },
]

export function Experience() {
 const headingRef = useScrollReveal<HTMLDivElement>()

 return (
 <section id="experience" className="relative px-6 py-32 z-20">
 {/* Background with abstract gradient */}
 <div className="absolute inset-0 bg-slate-950 -z-10" />
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--theme-bg)_0%,transparent_70%)] opacity-30 -z-10" />

 <div className="mx-auto max-w-7xl">
 <div ref={headingRef}>
 <SectionHeading
 eyebrow="Why Travel With Us"
 title="Designed Like a Trip, Not a Transaction"
 description="Booking sites get you a room. We get you the version of the trip you'll actually tell stories about. True luxury is in the details."
 />
 </div>

 <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
 {features.map((feature, index) => (
 <FeatureCard key={feature.title} {...feature} delay={index * 0.15} />
 ))}
 </div>
 </div>
 </section>
 )
}

interface FeatureCardProps {
 icon: ComponentType<{ className?: string; style?: CSSProperties; 'aria-hidden'?: boolean }>
 title: string
 description: string
 delay: number
}

function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
 const mouseX = useMotionValue(0)
 const mouseY = useMotionValue(0)

 function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
 const { left, top } = currentTarget.getBoundingClientRect()
 mouseX.set(clientX - left)
 mouseY.set(clientY - top)
 }

 return (
 <motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay }}
 whileHover={{ y: -5 }}
 onMouseMove={handleMouseMove}
 className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 overflow-hidden glass-panel"
 >
 <motion.div
 className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
 style={{
 background: useMotionTemplate`
 radial-gradient(
 350px circle at ${mouseX}px ${mouseY}px,
 var(--theme-primary) 0%,
 transparent 80%
 )
 `,
 opacity: 0.15,
 }}
 />
 <div
 className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-700 relative z-10"
 style={{ backgroundColor: 'var(--theme-accent)' }}
 >
 <Icon className="h-6 w-6 text-white " aria-hidden={true} />
 </div>
 <h3 className="font-display text-2xl font-semibold text-white relative z-10">{title}</h3>
 <p className="mt-3 text-white/70 leading-relaxed font-light relative z-10">{description}</p>
 </motion.div>
 )
}
