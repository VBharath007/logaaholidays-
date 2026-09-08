import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { useReducedMotion } from './useReducedMotion'

interface ScrollRevealOptions {
  y?: number
  delay?: number
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const reducedMotion = useReducedMotion()
  const { y = 32, delay = 0 } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (reducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 })
      return
    }

    gsap.set(element, { opacity: 0, y })
    const tween = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reducedMotion, y, delay])

  return ref
}
