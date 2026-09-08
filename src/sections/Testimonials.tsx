import { useEffect, useRef } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Testimonials() {
  const headingRef = useScrollReveal<HTMLDivElement>()
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current) return

    // Clear any existing widget instances
    widgetRef.current.innerHTML = ''

    // Load TrustIndex script dynamically
    const script = document.createElement('script')
    script.src = 'https://cdn.trustindex.io/loader.js?12dd60a795cd35829506b31ef5b'
    script.defer = true
    script.async = true
    widgetRef.current.appendChild(script)
    
    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <section id="stories" className="relative bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef}>
          <SectionHeading eyebrow="Traveler Stories" title="10,000+ Trips. Zero Templates." />
        </div>

        {/* TrustIndex Reviews Widget */}
        <div className="mt-16 w-full flex justify-center min-h-[400px]">
          <div ref={widgetRef} className="w-full" />
        </div>
      </div>
    </section>
  )
}

