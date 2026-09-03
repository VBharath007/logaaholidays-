import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: "/assets/home hero/homefirst.png",
    mobileImage: "/assets/home hero/homeverticalone (1).png",
    title: "Best Travel Agency in Madurai",
    description: "Logaa Holidays is a trusted tours and travels company in Madurai. Explore the world with the finest tour packages from Madurai."
  },
  {
    id: 2,
    image: "/assets/home hero/homesecond.png",
     mobileImage: "/assets/home hero/home verticaltwo.png",
    title: "Best Honeymoon Packages for a Perfect Romantic Getaway",
    description: "Make your honeymoon unforgettable with Logaa Holidays, offering customized honeymoon packages, romantic destinations, comfortable stays, and memorable travel experiences for every couple."
  },
  {
    id: 3,
    image: "/assets/home hero/homethird.png",
    mobileImage: "/assets/home hero/homeverticalthree.png",
    title: "North India Tour Packages from Madurai",
    description: "Discover the rich heritage of the north with the best tour operator in Madurai. We offer premium domestic tour packages from Madurai."
  },
  {
    id: 4,
    image: "/assets/home hero/international -image use.png",
    mobileImage: "/assets/home hero/vertical five.png",
    title: "Best International Tour Packages from Madurai",
    description: "Explore customized international tour packages from Madurai with Logaa Holidays, including family, honeymoon, and group holidays to Malaysia, Singapore, Bali, Thailand, Sri Lanka, and more."
 
  },
  {
    id: 5,
    image: "/assets/home hero/pilgrim.png",
    mobileImage: "/assets/home hero/pigrim vertival.png",
    title: "Best Pilgrimage Tour Packages from Madurai",
    description: "Plan a peaceful spiritual journey with Logaa Holidays, offering customized pilgrimage tour packages, comfortable travel, well-planned itineraries, and complete travel assistance."
  },
  // {
  //   id: 6,
  //   image: "/assets/home hero/supportfiaml images.png",
  //   title: "Memorable Family Vacations",
  //   description: "Creating beautiful, fun-filled memories with your loved ones."
  // }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images with simple crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={encodeURI(slides[currentSlide].mobileImage || slides[currentSlide].image)} />
            <source media="(min-width: 769px)" srcSet={encodeURI(slides[currentSlide].image)} />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </picture>
          {/* Simple dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence mode="wait">

          {/* SLIDE 1 - Left Aligned */}
          {slides[currentSlide].id === 1 && (
            <motion.div
              key={1}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 md:px-16 lg:px-32 max-w-4xl mx-auto md:mx-0"
            >
              <div className="bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl border border-white/20 md:border-transparent">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white drop-shadow-lg mb-4 md:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 drop-shadow-md font-medium max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              </div>
            </motion.div>
          )}

          {/* SLIDE 2 - Right Aligned */}
          {slides[currentSlide].id === 2 && (
            <motion.div
              key={2}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center md:items-end md:text-right px-6 md:px-16 lg:px-32 max-w-4xl mx-auto md:ml-auto md:mr-0"
            >
              <div className="bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl border border-white/20 md:border-transparent">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white drop-shadow-lg mb-4 md:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 drop-shadow-md font-medium max-w-2xl mx-auto md:ml-auto md:mr-0 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              </div>
            </motion.div>
          )}

          {/* SLIDE 3 - Left Aligned */}
          {slides[currentSlide].id === 3 && (
            <motion.div
              key={3}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 md:px-16 lg:px-32 max-w-4xl mx-auto md:mx-0"
            >
              <div className="bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl border border-white/20 md:border-transparent">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white drop-shadow-lg mb-4 md:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 drop-shadow-md font-medium max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              </div>
            </motion.div>
          )}

          {/* SLIDE 4 - Center Aligned */}
          {slides[currentSlide].id === 4 && (
            <motion.div
              key={4}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mx-auto max-w-4xl"
            >
              <div className="bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl border border-white/20 md:border-transparent">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white drop-shadow-lg mb-4 md:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 drop-shadow-md font-medium max-w-2xl mx-auto leading-relaxed">
                {slides[currentSlide].description}
              </p>
              </div>
            </motion.div>
          )}

          {/* SLIDE 5 - Center Aligned */}
          {slides[currentSlide].id === 5 && (
            <motion.div
              key={5}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mx-auto max-w-4xl"
            >
              <div className="bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl border border-white/20 md:border-transparent">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white drop-shadow-lg mb-4 md:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 drop-shadow-md font-medium max-w-2xl mx-auto leading-relaxed">
                {slides[currentSlide].description}
              </p>
              </div>
            </motion.div>
          )}

          {/* SLIDE 6 - Right Aligned
          {slides[currentSlide].id === 6 && (
            <motion.div
              key={6}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center items-end text-right px-6 md:px-16 lg:px-32 max-w-4xl ml-auto"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white drop-shadow-lg mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 drop-shadow-md font-medium max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          )} */}

        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-md transition-all border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-md transition-all border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden md:flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-white/70 pointer-events-none">
        <ChevronDown className="h-8 w-8 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
