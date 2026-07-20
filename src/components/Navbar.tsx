import { useEffect, useState } from 'react'
import { Compass, Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

type LinkItem = {
 href: string;
 label: string;
 submenu?: { href: string; label: string }[];
 categories?: { title: string; items: { href: string; label: string }[] }[];
}

const links: LinkItem[] = [
 { href: '/', label: 'Home' },
 { href: '/about', label: 'About Us' },
 { 
 href: '/services', 
 label: 'Our Services'
 },
 { 
 href: '/north-india-tour-packages', 
 label: 'North India',
 categories: [
 {
 title: 'Maharashtra',
 items: [
  { href: '/destination/maharashtra/shirdi', label: 'Shirdi' }
 ]
 },
 {
 title: 'Uttar Pradesh',
 items: [
  { href: '/destination/uttar-pradesh/varanasi', label: 'Varanasi' }
 ]
 },
 {
 title: 'Golden Triangle',
 items: [
 { href: '/north-india-tour-packages/golden-triangle-tours', label: 'Delhi, Agra, Jaipur' }
 ]
 }
 ]
 },
  { 
    href: '/south-india-package', 
    label: 'South India',
    categories: [
      {
        title: 'Tamil Nadu',
        items: [
          { href: '/destination/tamilnadu/tamilnadu-tourism', label: 'Tamil Nadu Overview' },
          { href: '/place/tamilnadu/madurai', label: 'Madurai' },
          { href: '/place/tamilnadu/rameshwaram', label: 'Rameswaram' },
          { href: '/place/tamilnadu/kanyakumari', label: 'Kanyakumari' },
          { href: '/place/tamilnadu/ooty', label: 'Ooty' },
          { href: '/place/tamilnadu/kodaikanal', label: 'Kodaikanal' },
          { href: '/place/tamilnadu/chennai', label: 'Chennai' },
        ]
      },
      {
        title: 'Kerala',
        items: [
          { href: '/destination/kerala/kerala-tourism', label: 'Kerala Overview' },
          { href: '/place/kerala/munnar', label: 'Munnar' },
          { href: '/place/kerala/alleppey', label: 'Alleppey' },
          { href: '/place/kerala/thekkady', label: 'Thekkady' },
          { href: '/place/kerala/vagamon', label: 'Vagamon' },
        ]
      }
    ]
  },
 { href: '/testimonials', label: 'Testimonials' },
]

export function Navbar() {
 const [scrolled, setScrolled] = useState(false)
 const [menuOpen, setMenuOpen] = useState(false)
 const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
 const location = useLocation()

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 32)
 onScroll()
 window.addEventListener('scroll', onScroll, { passive: true })
 return () => window.removeEventListener('scroll', onScroll)
 }, [])

 const toggleMobileMenu = (label: string) => {
 setOpenMobileMenu(openMobileMenu === label ? null : label)
 }

 // Tour category and Service Detail pages have a light background at the top, so we force the navbar to be in "scrolled" (solid) mode.
 const isLightTopPage = 
 (location.pathname.startsWith('/north-india-tour-packages/') && location.pathname !== '/north-india-tour-packages') ||
 location.pathname.startsWith('/tour-packages') ||
 (location.pathname.startsWith('/services/') && location.pathname !== '/services') ||
 location.pathname === '/south-india-package';
 const effectiveScrolled = scrolled || isLightTopPage;

 return (
 <header
 className={`fixed z-50 transition-all duration-500 mx-auto left-0 right-0 max-w-7xl ${
 effectiveScrolled 
 ? 'top-4 bg-white clay-card text-slate-900 py-3 px-8 rounded-[2.5rem] w-[calc(100%-2rem)] ' 
 : 'top-0 bg-transparent text-white py-8 px-8 w-full'
 }`}
 >
 <nav className="flex items-center justify-between relative">
 <Link to="/" className="flex items-center">
 <img loading="lazy" src="/logo.png" alt="Logaa Holiday" className={`h-12 w-auto object-contain transition-all duration-300 ${!effectiveScrolled ? 'brightness-0 invert' : ''}`} />
 </Link>

 {/* Desktop Nav */}
 <ul className="hidden items-center gap-8 lg:flex">
 {links.map((link) => (
 <li key={link.label} className="relative group">
 <Link
 to={link.href}
 className={`flex items-center gap-1 text-base font-bold transition-colors duration-200 tracking-wide ${
 effectiveScrolled
 ? location.pathname === link.href 
 ? 'text-[var(--color-blue-ocean)]'
 : 'text-slate-900 hover:text-[var(--color-blue-ocean)]'
 : location.pathname === link.href
 ? 'text-white border-b-2 border-white pb-1'
 : 'text-white/80 hover:text-white'
 }`}
 >
 {link.label}
 {(link.submenu || link.categories) && (
 <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
 )}
 </Link>

 {/* Invisible Bridge */}
 {(link.submenu || link.categories) && (
 <div className="absolute top-full left-0 w-full h-8 invisible group-hover:visible" />
 )}

 {/* Standard Submenu (e.g. Our Services) */}
 {link.submenu && (
 <div className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 p-3 flex flex-col gap-1 z-50`}>
 {link.submenu.map(sub => (
 <Link key={sub.label} to={sub.href} className="text-sm font-bold text-slate-700 hover:text-[var(--color-blue-ocean)] hover:bg-slate-50 px-4 py-3 rounded-xl transition-colors text-left">
 {sub.label}
 </Link>
 ))}
 </div>
 )}

 {/* Mega Menu (e.g. Tour Packages & South India) */}
 {link.categories && (
 <div className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 ${link.categories.length > 2 ? 'w-[850px] grid-cols-3' : 'w-[450px] grid-cols-2'} bg-white rounded-3xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 p-8 grid gap-8 z-50 cursor-default`}>
 {link.categories.map(cat => (
 <div key={cat.title}>
 <h4 className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-forest)] mb-4 border-b border-slate-100 pb-2">{cat.title}</h4>
 <ul className="flex flex-col gap-1">
 {cat.items.map(item => (
 <li key={item.label}>
 <Link to={item.href} className="text-sm font-medium text-slate-600 hover:text-[var(--color-blue-ocean)] block py-2 hover:translate-x-1 transition-transform">
 {item.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 )}
 </li>
 ))}
 </ul>

 <div className="hidden lg:block">
 <Link to="/contact" className={`inline-flex px-8 py-4 text-sm font-bold text-white rounded-full transition-colors ${effectiveScrolled ? 'bg-[var(--color-blue-ocean)] hover:bg-[var(--color-primary-emerald)]' : 'bg-white/20 hover:bg-white hover:text-[var(--color-blue-ocean)] backdrop-blur-md border border-white/30'}`}>
 Contact Us
 </Link>
 </div>

 <button
 type="button"
 className={`cursor-pointer p-2 lg:hidden transition-colors ${effectiveScrolled ? 'text-slate-900' : 'text-white'}`}
 aria-label={menuOpen ? 'Close menu' : 'Open menu'}
 aria-expanded={menuOpen}
 onClick={() => setMenuOpen((open) => !open)}
 >
 {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
 </button>
 </nav>

 {/* Mobile Menu */}
 {menuOpen && (
 <div className={`mt-4 rounded-3xl p-6 lg:hidden max-h-[75vh] overflow-y-auto ${effectiveScrolled ? 'bg-white border-t border-slate-100 ' : 'bg-slate-950/95 border-t border-white/10 backdrop-blur-xl'}`}>
 <ul className="flex flex-col gap-4">
 {links.map((link) => (
 <li key={link.label}>
 <div className="flex items-center justify-between">
 <Link
 to={link.href}
 className={`block text-lg font-bold ${
 effectiveScrolled
 ? location.pathname === link.href 
 ? 'text-[var(--color-blue-ocean)]'
 : 'text-slate-600 hover:text-[var(--color-blue-ocean)]'
 : location.pathname === link.href
 ? 'text-white'
 : 'text-white/70 hover:text-white'
 }`}
 onClick={() => { if (!link.submenu && !link.categories) setMenuOpen(false); }}
 >
 {link.label}
 </Link>
 {(link.submenu || link.categories) && (
 <button 
 onClick={() => toggleMobileMenu(link.label)} 
 className={`p-2 ${effectiveScrolled ? 'text-slate-400' : 'text-white/50'}`}
 >
 <ChevronDown className={`w-5 h-5 transition-transform ${openMobileMenu === link.label ? 'rotate-180' : ''}`} />
 </button>
 )}
 </div>

 {/* Mobile Submenu Accordion */}
 {link.submenu && openMobileMenu === link.label && (
 <ul className={`pl-4 mt-3 flex flex-col gap-3 border-l-2 ${effectiveScrolled ? 'border-slate-100' : 'border-white/10'}`}>
 {link.submenu.map(sub => (
 <li key={sub.label}>
 <Link 
 to={sub.href} 
 className={`block text-base font-medium ${effectiveScrolled ? 'text-slate-500 hover:text-[var(--color-blue-ocean)]' : 'text-white/60 hover:text-white'}`} 
 onClick={() => setMenuOpen(false)}
 >
 {sub.label}
 </Link>
 </li>
 ))}
 </ul>
 )}

 {/* Mobile Mega-Menu Accordion */}
 {link.categories && openMobileMenu === link.label && (
 <div className={`pl-4 mt-4 flex flex-col gap-6 border-l-2 ${effectiveScrolled ? 'border-slate-100' : 'border-white/10'}`}>
 {link.categories.map(cat => (
 <div key={cat.title}>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary-forest)] mb-3">{cat.title}</h4>
 <ul className={`flex flex-col gap-3 pl-2 border-l ${effectiveScrolled ? 'border-slate-100' : 'border-white/10'}`}>
 {cat.items.map(item => (
 <li key={item.label}>
 <Link 
 to={item.href} 
 className={`block text-sm font-medium ${effectiveScrolled ? 'text-slate-500 hover:text-[var(--color-blue-ocean)]' : 'text-white/60 hover:text-white'}`} 
 onClick={() => setMenuOpen(false)}
 >
 {item.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 )}
 </li>
 ))}
 <li className="pt-4 pb-2 border-t border-slate-100/10 mt-2">
 <Link to="/contact" className="flex justify-center w-full px-8 py-4 text-base font-bold text-white bg-[var(--color-blue-ocean)] hover:bg-[var(--color-primary-emerald)] rounded-full transition-colors">
 Contact Us
 </Link>
 </li>
 </ul>
 </div>
 )}
 </header>
 )
}
