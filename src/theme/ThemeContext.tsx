import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { destinations, type Destination } from './destinations'

interface ThemeContextValue {
  active: Destination
  setActiveId: (id: string) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState(destinations[0].id)

  const active = useMemo(
    () => destinations.find((destination) => destination.id === activeId) ?? destinations[0],
    [activeId],
  )

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    root.style.setProperty('--theme-accent', active.accent)
    root.style.setProperty('--theme-accent-soft', active.accentSoft)
    
    // Remove previous theme classes
    destinations.forEach(d => {
      body.classList.remove(`theme-${d.id}`);
    });
    // Add active theme class
    body.classList.add(`theme-${active.id}`);
  }, [active])

  const value = useMemo(() => ({ active, setActiveId }), [active])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useDestinationTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useDestinationTheme must be used within a ThemeProvider')
  }
  return context
}
