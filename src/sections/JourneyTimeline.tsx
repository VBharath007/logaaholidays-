import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDestinationTheme } from '../theme/ThemeContext'
import { SectionHeading } from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const timelineEvents = [
  { day: 'Day 01', title: 'Arrival & Immersion', desc: 'Settle into your private sanctuary. Let the local rhythm take over.' },
  { day: 'Day 02', title: 'The Guided Exploration', desc: 'Discover hidden gems with our local experts, far from the tourist trails.' },
  { day: 'Day 03', title: 'Culinary Journey', desc: 'Taste the authentic flavors of the region with a private chef experience.' },
  { day: 'Day 04', title: 'Leisure & Reflection', desc: 'A day entirely for you. Unwind, spa, or simply exist in the beautiful surroundings.' },
  { day: 'Day 05', title: 'The Grand Departure', desc: 'Leave with stories, not just souvenirs. A seamless transition homeward.' },
]

export function JourneyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { active } = useDestinationTheme()

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    // Calculate total scroll width
    const scrollWidth = container.scrollWidth - window.innerWidth + window.innerWidth * 0.2

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen bg-slate-950 overflow-hidden flex flex-col justify-center z-20">
      
      <div className="absolute top-20 left-0 right-0 px-6 z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Itinerary"
            title="A Journey Like No Other"
            description={`Discover the rhythm of ${active.name}.`}
          />
        </div>
      </div>

      <div ref={containerRef} className="flex items-center gap-20 px-[10vw] pt-32 min-w-max">
        {timelineEvents.map((event, i) => (
          <div key={event.day} className="relative w-[400px] h-[500px] glass-panel rounded-[2rem] p-10 flex flex-col justify-end overflow-hidden group">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-slate-900 transition-transform duration-1000 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />
            </div>
            
            <div className="relative z-20">
              <span className="text-[120px] font-display font-bold leading-none text-white/5 absolute -top-10 -left-4 group-hover:text-white/10 transition-colors duration-500">
                0{i + 1}
              </span>
              <div className="text-theme-primary font-medium tracking-widest uppercase text-sm mb-4" style={{ color: 'var(--theme-primary)' }}>
                {event.day}
              </div>
              <h3 className="font-display text-3xl font-semibold text-white mb-4">
                {event.title}
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
