import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, Heart, MapPin, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import reviews from '../reviews'
import './TestimonialsPage.css'

/* ─────────────────── TORN PAPER ─────────────────── */
const TornPaperBottom = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20" style={{ transform: 'translateY(1px)' }}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[var(--color-bg-luxury)]"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[var(--color-bg-luxury)]"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[var(--color-bg-luxury)]"></path>
    </svg>
  </div>
)

/* ─────────────────── FEATURED DATA ─────────────────── */
const featured = {
  name: 'Ananth',
  location: 'India',
  quote: 'We are traveling with Logaa Holidays. It is an 11-day program covering Madurai, Trichy, Thanjavur, Rameswaram, Thiruvananthapuram, Thekkady and Munnar. The entire package offers good vehicles and rooms. I highly recommend Logaa Holidays.',
}

/* ─────────────────── TYPES ─────────────────── */
interface Review {
  id: number
  name: string
  time: string
  text: string
}

/* Avatar color palette — one per review */
const AVATAR_COLORS = [
  '#4caf50', '#e91e63', '#2196f3', '#ff5722', '#9c27b0',
  '#00bcd4', '#ff9800', '#607d8b', '#795548', '#3f51b5',
  '#f44336', '#009688', '#673ab7', '#e65100', '#0288d1',
  '#558b2f', '#ad1457', '#00838f', '#6a1b9a', '#2e7d32',
]

/* ─────────────────── REVIEW CARD ─────────────────── */
interface ReviewCardProps {
  review: Review
  expanded: boolean
  onToggle: () => void
}

function ReviewCard({ review, expanded, onToggle }: ReviewCardProps) {
  const avatarColor = AVATAR_COLORS[(review.id - 1) % AVATAR_COLORS.length]

  return (
    <div className="review-card">
      <div className="review-header">

        {/* Avatar with overlapping Google G badge */}
        <div className="avatar-wrapper">
          <div className="avatar" style={{ background: avatarColor }}>
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div className="avatar-google-badge">
            <span>G</span>
          </div>
        </div>

        <div>
          <h3>
            {review.name}
            <span className="review-verified">✓</span>
          </h3>
          <div className="review-date">{review.time}</div>
        </div>

      </div>

      <div className="stars">★★★★★</div>

      <p className={expanded ? 'review-text expanded' : 'review-text'}>
        {review.text}
      </p>

      {review.text.length > 120 && (
        <button className="read-more" onClick={onToggle}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}

/* ─────────────────── REVIEW CAROUSEL ─────────────────── */
function ReviewCarousel() {
  const [current, setCurrent] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  // Each review's expand state tracked by its ID — plain object, React-friendly
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({})

  const toggleExpanded = (id: number) => {
    setExpandedMap(prev => ({ ...prev, [id]: !prev[id] }))
  }

  /* Responsive */
  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 650) setVisibleCards(1)
      else if (window.innerWidth < 1000) setVisibleCards(2)
      else setVisibleCards(3)
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextReview = () => setCurrent(prev => (prev + 1) % reviews.length)
  const prevReview = () => setCurrent(prev => (prev - 1 + reviews.length) % reviews.length)

  const displayedReviews: Review[] = Array.from(
    { length: visibleCards },
    (_, i) => reviews[(current + i) % reviews.length]
  )

  return (
    <>
      {/* Top bar — Google rating */}
      <div className="top-section">
        <div className="google-info">
          <div className="google-logo">G</div>
          <div>
            <h2>Excellent on Google</h2>
            <div className="rating-line">
              <b>5.0</b>
              <span className="top-stars">★★★★★</span>
              <span className="count">(57)</span>
            </div>
          </div>
        </div>

        <a
          href="https://www.google.com/search?q=Logaa+Holidays+Madurai"
          target="_blank"
          rel="noreferrer"
          className="google-button"
        >
          Review us on Google
        </a>
      </div>

      {/* Carousel */}
      <div className="carousel">
        <button className="arrow left" onClick={prevReview} aria-label="Previous review">
          ‹
        </button>

        <div
          className="review-grid"
          style={{ gridTemplateColumns: `repeat(${visibleCards}, 1fr)` }}
        >
          {displayedReviews.map(review => (
            <ReviewCard
              key={review.id}
              review={review}
              expanded={!!expandedMap[review.id]}
              onToggle={() => toggleExpanded(review.id)}
            />
          ))}
        </div>

        <button className="arrow right" onClick={nextReview} aria-label="Next review">
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="dots">
        {reviews.map((review: Review, index: number) => (
          <button
            key={review.id}
            onClick={() => setCurrent(index)}
            aria-label={`Go to review ${index + 1}`}
            className={index === current ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </>
  )
}

import { useSEO } from '../hooks/useSEO'

/* ─────────────────── MAIN PAGE ─────────────────── */
export function TestimonialsPage() {
  useSEO(
    'Customer Reviews & Testimonials | Logaa Holidays',
    'Read what our happy travelers say about Logaa Holidays. We provide the best travel experiences, tour packages, and customer service in Madurai.',
    'Customized Tour Packages in Madurai, Family Tour Packages from Madurai, Honeymoon Packages from Madurai'
  );

  return (
    <div className="bg-[var(--color-bg-luxury)] min-h-screen">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" src="/assets/otty/otty1.avif" alt="Ooty" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-blue-ocean)]/90 via-[var(--color-blue-ocean)]/70 to-[var(--color-accent-gold)]/80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display italic text-2xl text-white/90 mb-2">Our Community</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold font-display italic tracking-wider text-white mb-6">
            What Our <br /> Clients Say
          </motion.h1>
        </div>
        <TornPaperBottom />
      </section>

      {/* 2. FEATURED TESTIMONIAL */}
      <section className="pt-10 pb-8 px-6 text-center max-w-5xl mx-auto relative z-20">
        <h3 className="text-[var(--color-neutral-medium)] font-bold uppercase tracking-widest mb-2 relative z-20">What Our Clients Say</h3>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-blue-ocean)] italic tracking-wider opacity-10 relative z-20 pointer-events-none">TESTIMONIAL</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 -mt-10 md:-mt-16 relative z-30">
          <div className="relative">
            <div className="w-64 h-64 rounded-3xl overflow-hidden clay-card border-8 border-white">
              <img loading="lazy" src='/assets/meeanksi amma.png' alt="madurai" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-left max-w-md bg-white p-10 rounded-3xl clay-card relative z-30">
            <Quote className="w-10 h-10 text-[var(--color-primary-forest)] opacity-20 absolute top-6 right-6" />
            <h4 className="font-display text-2xl text-[var(--color-blue-ocean)] font-bold italic mb-1">{featured.name}</h4>
            <div className="flex items-center gap-1 text-xs text-[var(--color-neutral-medium)] font-bold mb-4">
              <MapPin className="w-3 h-3" /> {featured.location}
            </div>
            <p className="text-[var(--color-neutral-dark)] leading-relaxed italic mb-6">"{featured.quote}"</p>
            <div className="flex text-[var(--color-blue-ocean)]">
              <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. REVIEW CAROUSEL */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-[var(--color-blue-ocean)] mb-2">More <span className="text-[var(--color-blue-ocean)] italic font-normal">Success Stories</span></h2>
          <p className="text-[var(--color-neutral-medium)]">Read what thousands of happy travelers have experienced.</p>
        </div>

        <div className="review-section">
          <div className="review-container">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      {/* 4. TRUST BANNER */}
      <section className="pt-10 pb-4 px-6 max-w-6xl mx-auto">
        <div className="p-12 md:p-16 text-white text-center relative overflow-hidden bg-[var(--color-primary-forest)] rounded-[3rem]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-blue-ocean)] rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary-teal)] rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Join <span className="text-white/90 italic">Our</span> Happy Travelers</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
              We have been organizing incredible journeys for over 2 years. Let us plan your next unforgettable adventure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                <ShieldCheck className="w-6 h-6 text-[#b5d536]" />
                <span className="font-bold text-sm tracking-wider uppercase">Verified Agency</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                <Heart className="w-6 h-6 text-white" />
                <span className="font-bold text-sm tracking-wider uppercase">Customer Satisfaction</span>
              </div>
            </div>

            <Link to="/south-india-package" className="inline-block bg-white/10 border border-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-primary-forest)] transition-all">
              Plan Your Trip Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
