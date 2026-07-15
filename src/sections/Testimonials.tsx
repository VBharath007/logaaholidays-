import { Star } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Being a travel enthusiast, I was searching for a travel agency that can provide exciting travel packages across exotic locations. I tried many travel websites but I found this company to be the best. And, trust me, it was one of the best decisions I have ever made.',
    name: 'Babu Moorthi',
    trip: 'Madurai, Tamil Nadu',
  },
  {
    quote: 'My friend suggested contacting this company as I was looking for a travel agent that can provide the best tour package for my preferred destination. It offered complete solution to my travel requirements.',
    name: 'Manoshi Chowdhury',
    trip: 'Kolkata, West Bengal',
  },
  {
    quote: 'I was ardently looking for a travel agent that can provide excellent travel packages in the travel industry. I tried many travel websites but I found this company as the best. It helped me in getting the best deal that too within my budget.',
    name: 'Karthik Subramanian',
    trip: 'Chennai, Tamil Nadu',
  },
]

export function Testimonials() {
  const headingRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="stories" className="relative bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef}>
          <SectionHeading eyebrow="Traveler Stories" title="10,000+ Trips. Zero Templates." />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  trip: string
  delay: number
}

function TestimonialCard({ quote, name, trip, delay }: TestimonialCardProps) {
  const ref = useScrollReveal<HTMLDivElement>({ delay })

  return (
    <figure
      ref={ref}
      className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7"
    >
      <div>
        <div className="flex gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" style={{ color: 'var(--theme-accent)' }} />
          ))}
        </div>
        <blockquote className="mt-4 text-white/85">&ldquo;{quote}&rdquo;</blockquote>
      </div>
      <figcaption className="mt-6 text-sm text-white/60">
        <span className="font-medium text-white">{name}</span> · {trip}
      </figcaption>
    </figure>
  )
}
