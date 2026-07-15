import { Button } from '../components/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function CTA() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 px-6 py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-colors duration-700"
        style={{ backgroundColor: 'var(--theme-accent)' }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-balance text-4xl font-semibold text-white sm:text-5xl">
          Your next story starts with one message.
        </h2>
        <p className="max-w-xl text-balance text-white/65">
          Tell us where you&apos;re dreaming of, and we&apos;ll have a handcrafted itinerary in your inbox within 24
          hours.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:hello@logaaholiday.com">Plan My Trip</Button>
        </div>
      </div>
    </section>
  )
}
