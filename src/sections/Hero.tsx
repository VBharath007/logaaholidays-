import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    image: "/assets/home hero/homefirst.webp",
    mobileImage: "/assets/home hero/homeverticalone (1)-579w.webp",
    mobileSrcSet: "/assets/home%20hero/homeverticalone%20(1)-579w.webp 579w, /assets/home%20hero/homeverticalone%20(1)-579w@2x.webp 941w",
    mobileSizes: "100vw",
    title: "Best Travel Agency in Madurai",
    description:
      "Logaa Holidays is a trusted travel agency in Madurai. Explore the world with the finest tour packages from Madurai.",
    link: "/destination/tamilnadu/madurai-tourism",
    scrollToId: "popular-places-heading",
    buttonText: "Explore Packages",
    quoteText:
      "Hello Logaa Holidays, I would like to book a tour package"
  },
  {
    id: 2,
    image: "/assets/home hero/homesecond.webp",
    mobileImage: "/assets/home hero/home verticaltwo.webp",
    title: "Best Honeymoon Packages for a Perfect Romantic Getaway",
    description:
      "Make your honeymoon unforgettable with Logaa Holidays, offering customized honeymoon packages, romantic destinations, comfortable stays, and memorable travel experiences for every couple.",
    link: "/honeymoon-packages",
    buttonText: "Explore Now",
    quoteText:
      "Hello Logaa Holidays, I would like to get a free quote for Honeymoon Packages"
  },
  {
    id: 3,
    image: "/assets/home hero/homethird.webp",
    mobileImage: "/assets/home hero/homeverticalthree.webp",
    title: "North India Tour Packages from Madurai",
    description:
      "Discover the rich heritage of the north with the trusted travel agency in Madurai. We offer premium domestic tour packages from Madurai.",
    link: "/north-india-tour-packages",
    buttonText: "Explore Now",
    quoteText:
      "Hello Logaa Holidays, I would like to get a free quote for North India Tour Packages"
  },
  {
    id: 4,
    image: "/assets/home hero/international -image use.webp",
    mobileImage: "/assets/home hero/vertical five.webp",
    title: "Best International Tour Packages from Madurai",
    description:
      "Explore customized international tour packages from Madurai with Logaa Holidays, including family, honeymoon, and group holidays to Malaysia, Singapore, Bali, Thailand, Sri Lanka, and more.",
    link: "/destination/international/malaysia-tourism",
    buttonText: "Explore Now",
    quoteText:
      "Hello Logaa Holidays, I would like to get a free quote for International Tour Packages"
  },
  {
    id: 5,
    image: "/assets/home hero/pilgrim.webp",
    mobileImage: "/assets/home hero/pigrim vertival.webp",
    title: "Best Pilgrimage Tour Packages from Madurai",
    description:
      "Plan a peaceful spiritual journey with Logaa Holidays, offering customized pilgrimage tour packages, comfortable travel, well-planned itineraries, and complete travel assistance.",
    link: "/destination/maharashtra/shirdi",
    buttonText: "Explore Now",
    quoteText:
      "Hello Logaa Holidays, I would like to get a free quote for Pilgrimage Tour Packages"
  }
]


function SlideCtaButtons({
  link,
  buttonText = "Explore Now",
  quoteText,
  align = "start",
  scrollToId,
}: {
  link: string
  buttonText?: string
  quoteText?: string
  align?: "start" | "end" | "center"
  scrollToId?: string
}) {

  /*
    IMPORTANT:

    Mobile + Tablet = Center buttons

    Desktop only (lg+) = Original alignment
  */

  const alignClasses =
    align === "end"
      ? "lg:justify-end"
      : align === "center"
        ? "lg:justify-center"
        : "lg:justify-start"

  const whatsappMessage = encodeURIComponent(
    quoteText ||
    "Hello Logaa Holidays, I would like to get a free quote"
  )

  const whatsappUrl =
    `https://wa.me/917397329776?text=${whatsappMessage}`


  return (
    <div
      className={`
        flex
        flex-col
        sm:flex-row

        items-center
        justify-center

        ${alignClasses}

        gap-4
        sm:gap-6

        mt-4
        sm:mt-5
        md:mt-6

        pointer-events-auto

        w-full
        max-w-[calc(100vw-3rem)]
        sm:max-w-none
      `}
    >

      {/* Explore Button */}

      <Link
        to={link}

        onClick={() => {

          if (scrollToId) {

            const el =
              document.getElementById(scrollToId)

            if (el) {

              el.scrollIntoView({
                behavior: "smooth"
              })

            }

          }

        }}

        className="
          group
          relative

          inline-flex
          items-center
          justify-center

          w-full
          sm:w-auto

          px-6
          py-3

          sm:px-7
          sm:py-3

          md:px-8
          md:py-3.5

          lg:px-10
          lg:py-4

          text-sm
          sm:text-base
          lg:text-lg

          font-bold
          text-white

          bg-gradient-to-r
          from-emerald-500
          to-teal-500

          border
          border-transparent

          rounded-full

          shadow-lg

          hover:shadow-2xl
          hover:scale-105
          active:scale-95

          transition-all
          duration-300

          overflow-hidden
        "
      >

        <span
          className="
            relative
            z-10

            flex
            items-center
            justify-center

            gap-2

            whitespace-nowrap
          "
        >

          {buttonText}

          <ArrowRight
            className="
              w-4
              h-4

              sm:w-5
              sm:h-5

              group-hover:translate-x-1

              transition-transform
            "
          />

        </span>


        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-emerald-600
            to-teal-600

            opacity-0
            group-hover:opacity-100

            transition-opacity
            duration-300
          "
        />

      </Link>


      {/* WhatsApp Quote Button */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"

        className="
          group
          relative

          inline-flex
          items-center
          justify-center

          w-full
          sm:w-auto

          px-6
          py-3

          sm:px-7
          sm:py-3

          md:px-8
          md:py-3.5

          lg:px-10
          lg:py-4

          text-sm
          sm:text-base
          lg:text-lg

          font-bold
          text-emerald-700

          bg-white
          hover:bg-gray-50

          border
          border-transparent

          backdrop-blur-md

          rounded-full

          shadow-lg

          hover:shadow-2xl
          hover:scale-105
          active:scale-95

          transition-all
          duration-300

          overflow-hidden
        "
      >

        <span
          className="
            relative
            z-10

            flex
            items-center
            justify-center

            gap-2

            whitespace-nowrap
          "
        >

          Get Free Quote
        </span>

       

      </a>

    </div>
  )
}



export function Hero() {


  const [currentSlide, setCurrentSlide] = useState(0)

  const [touchStart, setTouchStart] =
    useState<number | null>(null)

  const [touchEnd, setTouchEnd] =
    useState<number | null>(null)


  const minSwipeDistance = 45


  const onTouchStart =
    (e: React.TouchEvent) => {

      setTouchEnd(null)

      setTouchStart(
        e.targetTouches[0].clientX
      )

    }


  const onTouchMove =
    (e: React.TouchEvent) => {

      setTouchEnd(
        e.targetTouches[0].clientX
      )

    }


  const onTouchEnd = () => {

    if (!touchStart || !touchEnd) return


    const distance =
      touchStart - touchEnd


    const isLeftSwipe =
      distance > minSwipeDistance


    const isRightSwipe =
      distance < -minSwipeDistance


    if (isLeftSwipe) {

      nextSlide()

    }

    else if (isRightSwipe) {

      prevSlide()

    }

  }



  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentSlide(
        (prev) =>
          (prev + 1) % slides.length
      )

    }, 60000)


    return () =>
      clearInterval(timer)

  }, [])



  const nextSlide = () =>

    setCurrentSlide(
      (prev) =>
        (prev + 1) % slides.length
    )



  const prevSlide = () =>

    setCurrentSlide(
      (prev) =>
        (prev - 1 + slides.length) %
        slides.length
    )



  return (

    <section

      id="home"

      onTouchStart={onTouchStart}

      onTouchMove={onTouchMove}

      onTouchEnd={onTouchEnd}


      className="
        relative

        h-[100svh]
        min-h-[560px]

        md:min-h-[600px]

        lg:h-screen

        w-full

        overflow-hidden

        bg-black
      "
    >


      {/* Background Images */}

      <AnimatePresence mode="wait">

        <motion.div

          key={currentSlide}

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}

          className="
            absolute
            inset-0
            z-0
          "
        >


          <picture>

            <source
              media="(max-width: 768px)"
              srcSet={
                (slides[currentSlide] as any).mobileSrcSet ||
                encodeURI(
                  slides[currentSlide].mobileImage ||
                  slides[currentSlide].image
                )
              }
              sizes={(slides[currentSlide] as any).mobileSizes || "100vw"}
            />

            <source
              media="(min-width: 769px)"
              srcSet={encodeURI(
                slides[currentSlide].image
              )}
            />


            <img

              src={slides[currentSlide].image}

              alt={slides[currentSlide].title}

              fetchPriority={currentSlide === 0 ? "high" : "auto"}

              className="
                w-full
                h-full
                object-cover
              "
            />

          </picture>


          {/* Background Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-black/40
            "
          />

        </motion.div>

      </AnimatePresence>



      {/* =========================
          TEXT CONTENT
      ========================== */}

      <div
        className="
          absolute
          inset-0
          z-10
          pointer-events-none
        "
      >


        <AnimatePresence mode="wait">


          {/* =====================
              SLIDE 1
              LEFT DESKTOP
          ====================== */}

          {slides[currentSlide].id === 1 && (

            <motion.div

              key={1}

              initial={{
                opacity: 0,
                x: -30
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              exit={{
                opacity: 0,
                x: 30
              }}

              transition={{
                duration: 0.6,
                delay: 0.2
              }}


              className="
                absolute
                inset-0

                flex
                flex-col

                justify-center
                items-center

                text-center


                lg:items-start
                lg:text-left


                px-5
                sm:px-10
                md:px-24
                lg:px-16
                xl:px-28


                pt-24
                sm:pt-28
                md:pt-32
                lg:pt-40


                pb-8
                sm:pb-12
                md:pb-16


                max-w-4xl

                mx-auto
                lg:mx-0
              "
            >


              {/* TEXT CARD */}

              <div

                className="
                  w-full

                  max-w-[calc(100vw-2.5rem)]
                  sm:max-w-xl
                  md:max-w-2xl
                  lg:max-w-none


                  bg-black/65

                  backdrop-blur-md

                  border
                  border-white/15

                  shadow-xl


                  rounded-2xl
                  sm:rounded-3xl


                  p-5
                  sm:p-6
                  md:p-7


                  lg:bg-transparent
                  lg:backdrop-blur-none
                  lg:border-transparent
                  lg:shadow-none
                  lg:rounded-none
                  lg:p-0
                "
              >


                <h1

                  className="
                    text-[clamp(1.5rem,6vw,2rem)]

                    sm:text-3xl
                    md:text-4xl

                    lg:text-5xl
                    xl:text-6xl


                    font-display
                    font-extrabold

                    text-white

                    drop-shadow-lg


                    mb-3
                    sm:mb-4
                    md:mb-5


                    leading-[1.15]

                    lg:leading-tight
                  "
                >

                  {slides[currentSlide].title}

                </h1>


                <p

                  className="
                    text-[clamp(0.9rem,3.8vw,1rem)]

                    sm:text-base
                    md:text-lg

                    lg:text-lg
                    xl:text-xl


                    text-white/95

                    drop-shadow-md

                    font-medium


                    max-w-2xl

                    mx-auto
                    lg:mx-0


                    leading-relaxed
                  "
                >

                  {slides[currentSlide].description}

                </p>


              </div>



              <SlideCtaButtons

                link={slides[currentSlide].link}

                buttonText={
                  slides[currentSlide].buttonText
                }

                quoteText={
                  slides[currentSlide].quoteText
                }

                scrollToId={
                  slides[currentSlide].scrollToId
                }

                align="start"

              />


            </motion.div>

          )}



          {/* =====================
              SLIDE 2
              RIGHT DESKTOP
          ====================== */}

          {slides[currentSlide].id === 2 && (

            <motion.div

              key={2}

              initial={{
                opacity: 0,
                x: 30
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              exit={{
                opacity: 0,
                x: -30
              }}

              transition={{
                duration: 0.6,
                delay: 0.2
              }}


              className="
                absolute
                inset-0

                flex
                flex-col

                justify-center
                items-center

                text-center


                lg:items-end
                lg:text-right


                px-5
                sm:px-10
                md:px-24
                lg:px-16
                xl:px-28


                pt-24
                sm:pt-28
                md:pt-32
                lg:pt-40


                pb-8
                sm:pb-12
                md:pb-16


                max-w-4xl

                mx-auto

                lg:ml-auto
                lg:mr-0
              "
            >


              <div

                className="
                  w-full

                  max-w-[calc(100vw-2.5rem)]
                  sm:max-w-xl
                  md:max-w-2xl
                  lg:max-w-none


                  bg-black/65

                  backdrop-blur-md

                  border
                  border-white/15

                  shadow-xl


                  rounded-2xl
                  sm:rounded-3xl


                  p-5
                  sm:p-6
                  md:p-7


                  lg:bg-transparent
                  lg:backdrop-blur-none
                  lg:border-transparent
                  lg:shadow-none
                  lg:rounded-none
                  lg:p-0
                "
              >


                <h1

                  className="
                    text-[clamp(1.5rem,6vw,2rem)]

                    sm:text-3xl
                    md:text-4xl

                    lg:text-5xl
                    xl:text-6xl


                    font-display
                    font-extrabold

                    text-white

                    drop-shadow-lg


                    mb-3
                    sm:mb-4
                    md:mb-5


                    leading-[1.15]

                    lg:leading-tight
                  "
                >

                  {slides[currentSlide].title}

                </h1>


                <p

                  className="
                    text-[clamp(0.9rem,3.8vw,1rem)]

                    sm:text-base
                    md:text-lg

                    lg:text-lg
                    xl:text-xl


                    text-white/95

                    drop-shadow-md

                    font-medium


                    max-w-2xl

                    mx-auto

                    lg:ml-auto
                    lg:mr-0


                    leading-relaxed
                  "
                >

                  {slides[currentSlide].description}

                </p>


              </div>



              <SlideCtaButtons

                link={slides[currentSlide].link}

                buttonText={
                  slides[currentSlide].buttonText
                }

                quoteText={
                  slides[currentSlide].quoteText
                }

                align="end"

              />


            </motion.div>

          )}



          {/* =====================
              SLIDE 3
              LEFT DESKTOP
          ====================== */}

          {slides[currentSlide].id === 3 && (

            <motion.div

              key={3}

              initial={{
                opacity: 0,
                x: -30
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              exit={{
                opacity: 0,
                x: 30
              }}

              transition={{
                duration: 0.6,
                delay: 0.2
              }}


              className="
                absolute
                inset-0

                flex
                flex-col

                justify-center
                items-center

                text-center


                lg:items-start
                lg:text-left


                px-5
                sm:px-10
                md:px-24
                lg:px-16
                xl:px-28


                pt-24
                sm:pt-28
                md:pt-32
                lg:pt-40


                pb-8
                sm:pb-12
                md:pb-16


                max-w-4xl

                mx-auto
                lg:mx-0
              "
            >


              <div

                className="
                  w-full

                  max-w-[calc(100vw-2.5rem)]
                  sm:max-w-xl
                  md:max-w-2xl
                  lg:max-w-none


                  bg-black/65

                  backdrop-blur-md

                  border
                  border-white/15

                  shadow-xl


                  rounded-2xl
                  sm:rounded-3xl


                  p-5
                  sm:p-6
                  md:p-7


                  lg:bg-transparent
                  lg:backdrop-blur-none
                  lg:border-transparent
                  lg:shadow-none
                  lg:rounded-none
                  lg:p-0
                "
              >


                <h1

                  className="
                    text-[clamp(1.5rem,6vw,2rem)]

                    sm:text-3xl
                    md:text-4xl

                    lg:text-5xl
                    xl:text-6xl


                    font-display
                    font-extrabold

                    text-white

                    drop-shadow-lg


                    mb-3
                    sm:mb-4
                    md:mb-5


                    leading-[1.15]

                    lg:leading-tight
                  "
                >

                  {slides[currentSlide].title}

                </h1>


                <p

                  className="
                    text-[clamp(0.9rem,3.8vw,1rem)]

                    sm:text-base
                    md:text-lg

                    lg:text-lg
                    xl:text-xl


                    text-white/95

                    drop-shadow-md

                    font-medium


                    max-w-2xl

                    mx-auto
                    lg:mx-0


                    leading-relaxed
                  "
                >

                  {slides[currentSlide].description}

                </p>


              </div>



              <SlideCtaButtons

                link={slides[currentSlide].link}

                buttonText={
                  slides[currentSlide].buttonText
                }

                quoteText={
                  slides[currentSlide].quoteText
                }

                align="start"

              />


            </motion.div>

          )}



          {/* =====================
              SLIDE 4
              CENTER
          ====================== */}

          {slides[currentSlide].id === 4 && (

            <motion.div

              key={4}

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: -30
              }}

              transition={{
                duration: 0.6,
                delay: 0.2
              }}


              className="
                absolute
                inset-0

                flex
                flex-col

                justify-center
                items-center

                text-center


                px-5
                sm:px-10
                md:px-24
                lg:px-28


                pt-24
                sm:pt-28
                md:pt-32
                lg:pt-40


                pb-8
                sm:pb-12
                md:pb-16


                mx-auto
                max-w-4xl
              "
            >


              <div

                className="
                  w-full

                  max-w-[calc(100vw-2.5rem)]
                  sm:max-w-xl
                  md:max-w-2xl
                  lg:max-w-none


                  bg-black/65

                  backdrop-blur-md

                  border
                  border-white/15

                  shadow-xl


                  rounded-2xl
                  sm:rounded-3xl


                  p-5
                  sm:p-6
                  md:p-7


                  lg:bg-transparent
                  lg:backdrop-blur-none
                  lg:border-transparent
                  lg:shadow-none
                  lg:rounded-none
                  lg:p-0
                "
              >


                <h1

                  className="
                    text-[clamp(1.5rem,6vw,2rem)]

                    sm:text-3xl
                    md:text-4xl

                    lg:text-5xl
                    xl:text-6xl


                    font-display
                    font-extrabold

                    text-white

                    drop-shadow-lg


                    mb-3
                    sm:mb-4
                    md:mb-5


                    leading-[1.15]

                    lg:leading-tight
                  "
                >

                  {slides[currentSlide].title}

                </h1>


                <p

                  className="
                    text-[clamp(0.9rem,3.8vw,1rem)]

                    sm:text-base
                    md:text-lg

                    lg:text-lg
                    xl:text-xl


                    text-white/95

                    drop-shadow-md

                    font-medium


                    max-w-2xl

                    mx-auto


                    leading-relaxed
                  "
                >

                  {slides[currentSlide].description}

                </p>


              </div>



              <SlideCtaButtons

                link={slides[currentSlide].link}

                buttonText={
                  slides[currentSlide].buttonText
                }

                quoteText={
                  slides[currentSlide].quoteText
                }

                align="center"

              />


            </motion.div>

          )}



          {/* =====================
              SLIDE 5
              CENTER
          ====================== */}

          {slides[currentSlide].id === 5 && (

            <motion.div

              key={5}

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: -30
              }}

              transition={{
                duration: 0.6,
                delay: 0.2
              }}


              className="
                absolute
                inset-0

                flex
                flex-col

                justify-center
                items-center

                text-center


                px-5
                sm:px-10
                md:px-24
                lg:px-28


                pt-24
                sm:pt-28
                md:pt-32
                lg:pt-40


                pb-8
                sm:pb-12
                md:pb-16


                mx-auto
                max-w-4xl
              "
            >


              <div

                className="
                  w-full

                  max-w-[calc(100vw-2.5rem)]
                  sm:max-w-xl
                  md:max-w-2xl
                  lg:max-w-none


                  bg-black/65

                  backdrop-blur-md

                  border
                  border-white/15

                  shadow-xl


                  rounded-2xl
                  sm:rounded-3xl


                  p-5
                  sm:p-6
                  md:p-7


                  lg:bg-transparent
                  lg:backdrop-blur-none
                  lg:border-transparent
                  lg:shadow-none
                  lg:rounded-none
                  lg:p-0
                "
              >


                <h1

                  className="
                    text-[clamp(1.5rem,6vw,2rem)]

                    sm:text-3xl
                    md:text-4xl

                    lg:text-5xl
                    xl:text-6xl


                    font-display
                    font-extrabold

                    text-white

                    drop-shadow-lg


                    mb-3
                    sm:mb-4
                    md:mb-5


                    leading-[1.15]

                    lg:leading-tight
                  "
                >

                  {slides[currentSlide].title}

                </h1>


                <p

                  className="
                    text-[clamp(0.9rem,3.8vw,1rem)]

                    sm:text-base
                    md:text-lg

                    lg:text-lg
                    xl:text-xl


                    text-white/95

                    drop-shadow-md

                    font-medium


                    max-w-2xl

                    mx-auto


                    leading-relaxed
                  "
                >

                  {slides[currentSlide].description}

                </p>


              </div>



              <SlideCtaButtons

                link={slides[currentSlide].link}

                buttonText={
                  slides[currentSlide].buttonText
                }

                quoteText={
                  slides[currentSlide].quoteText
                }

                align="center"

              />


            </motion.div>

          )}


        </AnimatePresence>

      </div>



      {/* =========================
          NAVIGATION ARROWS
      ========================== */}


      <button

        onClick={prevSlide}

        className="
          absolute

          left-2
          sm:left-4
          md:left-6
          lg:left-8


          top-1/2
          -translate-y-1/2


          z-30


          w-8
          h-8

          sm:w-10
          sm:h-10

          md:w-12
          md:h-12

          lg:w-12
          lg:h-12


          rounded-full


          bg-black/20
          hover:bg-black/40


          text-white


          backdrop-blur-md


          border
          border-white/20


          transition-all
          duration-300


          hover:scale-105


          pointer-events-auto


          flex
          items-center
          justify-center
        "

        aria-label="Previous slide"
      >

        <ChevronLeft

          className="
            w-5
            h-5

            sm:w-6
            sm:h-6

            md:w-7
            md:h-7
          "
        />

      </button>



      <button

        onClick={nextSlide}

        className="
          absolute

          right-2
          sm:right-4
          md:right-6
          lg:right-8


          top-1/2
          -translate-y-1/2


          z-30


          w-8
          h-8

          sm:w-10
          sm:h-10

          md:w-12
          md:h-12

          lg:w-12
          lg:h-12


          rounded-full


          bg-black/20
          hover:bg-black/40


          text-white


          backdrop-blur-md


          border
          border-white/20


          transition-all
          duration-300


          hover:scale-105


          pointer-events-auto


          flex
          items-center
          justify-center
        "

        aria-label="Next slide"
      >

        <ChevronRight

          className="
            w-5
            h-5

            sm:w-6
            sm:h-6

            md:w-7
            md:h-7
          "
        />

      </button>



      {/* =========================
          DOTS INDICATOR
      ========================== */}

      <div

        className="
          absolute

          bottom-16
          sm:bottom-20

          left-1/2
          -translate-x-1/2


          z-20


          hidden
          md:flex


          gap-3
        "
      >

        {/* {slides.map((_, index) => (

          <button

            key={index}

            onClick={() =>
              setCurrentSlide(index)
            }

            aria-label={
              `Go to slide ${index + 1}`
            }


            className={`
              w-3
              h-3

              rounded-full

              transition-all
              duration-300

              ${
                currentSlide === index

                  ? "bg-white scale-125"

                  : "bg-white/40 hover:bg-white/70"
              }
            `}
          />

        ))} */}

      </div>



      {/* =========================
          SCROLL DOWN
      ========================== */}

      <div

        className="
          absolute

          bottom-4
          sm:bottom-8


          left-1/2
          -translate-x-1/2


          z-30


          text-white/70


          pointer-events-none


          hidden
          sm:block
        "
      >

        <ChevronDown

          className="
            h-8
            w-8
            animate-bounce
          "

          aria-hidden="true"
        />

      </div>


    </section>

  )

}