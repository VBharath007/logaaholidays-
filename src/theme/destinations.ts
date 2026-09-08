export interface Destination {
  id: string
  name: string
  region: string
  tagline: string
  description: string
  accent: string
  accentSoft: string
  gradient: string
  highlights: string[]
}

export const destinations: Destination[] = [
  {
    id: 'kerala',
    name: 'Kerala',
    region: "God's Own Country",
    tagline: 'Backwaters, rainforest & the scent of spice',
    description:
      "Drift through palm-fringed lagoons on a candlelit houseboat, wake to mist over tea hills, and lose track of time beneath Athirappilly's waterfalls.",
    accent: '#10b981',
    accentSoft: '#34d399',
    gradient: 'from-emerald-950 via-teal-800 to-emerald-500',
    highlights: ['Alleppey houseboats', 'Munnar tea hills', 'Athirappilly Falls'],
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    region: 'Paradise on Earth',
    tagline: 'Alpine lakes beneath maple-gold mountains',
    description:
      "Glide across Dal Lake in a shikara at sunrise, ride the gondola above Gulmarg's pines, and watch saffron fields turn the valley violet at dusk.",
    accent: '#38bdf8',
    accentSoft: '#7dd3fc',
    gradient: 'from-slate-950 via-sky-800 to-sky-300',
    highlights: ['Dal Lake shikara', 'Gulmarg gondola', 'Pahalgam valley'],
  },
  {
    id: 'goa',
    name: 'Goa',
    region: 'The Coastal Escape',
    tagline: 'Turquoise tides & golden coastline sunsets',
    description:
      'Trade your shoes for sand between two oceans of color — Portuguese spice markets by day, bioluminescent tides and beach bonfires by night.',
    accent: '#22d3ee',
    accentSoft: '#67e8f9',
    gradient: 'from-cyan-950 via-cyan-700 to-amber-300',
    highlights: ['Palolem beach', 'Fontainhas quarter', 'Sunset river cruises'],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    region: 'Land of Kings',
    tagline: 'Desert gold beneath painted fort walls',
    description:
      "Camp under a canopy of stars in the Thar dunes, wander rose-pink palaces in Jaipur, and watch the sun set on Udaipur's floating lake city.",
    accent: '#f59e0b',
    accentSoft: '#fbbf24',
    gradient: 'from-orange-950 via-orange-800 to-amber-400',
    highlights: ["Thar desert camp", "Jaipur's Amer Fort", "Udaipur's lake palace"],
  },
]
