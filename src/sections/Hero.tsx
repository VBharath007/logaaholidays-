import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { ImageSequenceScrub } from '../components/hero/ImageSequenceScrub'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface HeroProps {
  folder?: string;
  frameCount?: number;
  sectionId?: string;
}

export function Hero({
  folder = 'first_frame',
  frameCount = 298,
  sectionId = 'home',
}: HeroProps) {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)

  // Refs for text blocks
  const text1Ref = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const text3Ref = useRef<HTMLDivElement>(null)
  const text4Ref = useRef<HTMLDivElement>(null)
  const text5Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return

    // Preload first frame to avoid white flash
    const img = new Image();
    img.src = `/assets/${folder}/frame_001.webp`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // 0.5s smoothing for fast scrolls so it doesn't break
      }
    })

    // Total scroll duration is 1 (100%). We divide by 5 segments.
    // Each segment is 0.2 duration. 
    // We want text to fade in, stay a bit, then fade out.
    // Segment 1 (0 to 0.2)
    tl.to(text1Ref.current, { x: 0, opacity: 1, duration: 0.05 }, 0)
      .to(text1Ref.current, { x: 0, opacity: 1, duration: 0.1 }, 0.05)
      .to(text1Ref.current, { opacity: 0, x: -50, duration: 0.05 }, 0.15)

    // Segment 2 (0.2 to 0.4)
    tl.to(text2Ref.current, { x: 0, opacity: 1, duration: 0.05 }, 0.2)
      .to(text2Ref.current, { x: 0, opacity: 1, duration: 0.1 }, 0.25)
      .to(text2Ref.current, { opacity: 0, x: 50, duration: 0.05 }, 0.35)

    // Segment 3 (0.4 to 0.6)
    tl.to(text3Ref.current, { x: 0, opacity: 1, duration: 0.05 }, 0.4)
      .to(text3Ref.current, { x: 0, opacity: 1, duration: 0.1 }, 0.45)
      .to(text3Ref.current, { opacity: 0, x: -50, duration: 0.05 }, 0.55)

    // Segment 4 (0.6 to 0.8)
    tl.to(text4Ref.current, { x: 0, opacity: 1, duration: 0.05 }, 0.6)
      .to(text4Ref.current, { x: 0, opacity: 1, duration: 0.1 }, 0.65)
      .to(text4Ref.current, { opacity: 0, x: 50, duration: 0.05 }, 0.75)

    // Segment 5 (0.8 to 0.95)
    tl.to(text5Ref.current, { x: 0, opacity: 1, duration: 0.05 }, 0.8)
      .to(text5Ref.current, { x: 0, opacity: 1, duration: 0.05 }, 0.85)
      .to(text5Ref.current, { opacity: 0, x: -50, duration: 0.05 }, 0.90) // Completely gone by 0.95

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [reducedMotion, folder])

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={reducedMotion ? 'relative min-h-screen' : 'relative h-[400vh]'}
    >
      <div className={reducedMotion ? 'relative h-screen w-full overflow-hidden' : 'sticky top-0 h-screen w-full overflow-hidden bg-black'}>

        {/* The scrolling image sequence */}
        <ImageSequenceScrub folder={folder} frameCount={frameCount} sectionId={sectionId} />

        {/* Overlay Texts container - strictly pointer-events-none so it doesn't block scroll */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">

          <div ref={text1Ref} className="absolute left-[10%] md:left-[15%] max-w-xl opacity-0 -translate-x-[100px]">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
              Madurai <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">No. 1</span> <br />
              Travel Agent
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg font-medium">Your trusted local experts for unforgettable tour experiences.</p>
          </div>

          <div ref={text2Ref} className="absolute right-[10%] md:right-[15%] max-w-xl opacity-0 translate-x-[100px] text-right">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-xl mb-4">
              Expert Travel Planners, <br /><span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-red-500">Tailor-Made Tour Packages</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">Every holiday route we design comes from dedicated local experts who actually grew up right here in Madurai.</p>
          </div>

          <div ref={text3Ref} className="absolute left-[10%] md:left-[15%] max-w-xl opacity-0 -translate-x-[100px]">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-xl mb-4">
              Every Stay, Picked <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Like It's for Our Own Family</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">No copy-paste packages. We choose only what we'd book for someone we love.</p>
          </div>

          <div ref={text4Ref} className="absolute right-[10%] md:right-[15%] max-w-xl opacity-0 translate-x-[100px] text-right">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-xl mb-4">
              Top Tour Operator, <br /><span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-amber-600">Madurai Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">Hotels,Cab drivers,temple timings and Local Tips — we offer the best Madurai tour packages backed by deep local knowledge.</p>
          </div>

          <div ref={text5Ref} className="absolute left-[10%] md:left-[15%] max-w-xl opacity-0 -translate-x-[100px]">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-xl mb-4">
              Your Madurai Story <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Starts With Us</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">Scroll on — genuine local know-how and honest hospitality await your holiday.</p>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-white/60 pointer-events-none">
          <ChevronDown className="h-8 w-8 animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
