import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

type LinkItem = {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
  categories?: { title: string; items: { href: string; label: string }[] }[];
  menuAlign?: 'left' | 'center' | 'right';
}

const links: LinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/south-india-package',
    label: 'South India',
    menuAlign: 'left',
    categories: [
      {
        title: 'Tamil Nadu',
        items: [
          { href: '/destination/tamilnadu/tamilnadu-tourism', label: 'Tamil Nadu Overview' },
          { href: '/destination/tamilnadu/madurai-tourism', label: 'Madurai' },
          { href: '/destination/tamilnadu/rameswaram-tourism', label: 'Rameswaram' },
          { href: '/destination/tamilnadu/kanyakumari-tourism', label: 'Kanyakumari' },
          { href: '/destination/tamilnadu/kodaikanal-tourism', label: 'Kodaikanal' },
          { href: '/destination/tamilnadu/ooty-tourism', label: 'Ooty' },
          { href: '/destination/tamilnadu/chennai-tourism', label: 'Chennai' },
          { href: '/tour-packages/courtallam-tours', label: 'Courtallam' },
          { href: '/tour-packages/pillayarpatti-tours', label: 'Pillayarpatti' },
          { href: '/tour-packages/tiruchendur-tours', label: 'Tiruchendur' },
          { href: '/tour-packages/palani-tours', label: 'Palani' },
          { href: '/tour-packages/trichy-tours', label: 'Trichy' },
          { href: '/tour-packages/thanjavur-tours', label: 'Thanjavur' },
          { href: '/tour-packages/kumbakonam-tours', label: 'Kumbakonam' },
          { href: '/tour-packages/mahabalipuram-tours', label: 'Mahabalipuram' },
          { href: '/tour-packages/pondicherry-tours', label: 'Pondicherry' },
          { href: '/tour-packages/valparai-tours', label: 'Valparai' },
          { href: '/tour-packages/megamalai-tours', label: 'Megamalai' }
        ]
      },
      {
        title: 'Kerala',
        items: [
          { href: '/destination/kerala/kerala-tourism', label: 'Kerala Overview' },
          { href: '/destination/kerala/munnar-tourism', label: 'Munnar' },
          { href: '/destination/kerala/alleppey-tourism', label: 'Alleppey' },
          { href: '/destination/kerala/thekkady-tourism', label: 'Thekkady' },
          { href: '/destination/kerala/vagamon-tourism', label: 'Vagamon' },
          { href: '/destination/kerala/cochin-tourism', label: 'Cochin' },
          { href: '/tour-packages/kumarakom-tours', label: 'Kumarakom' },
          { href: '/tour-packages/athirappilly-tours', label: 'Athirappilly' },
          { href: '/tour-packages/kovalam-tours', label: 'Kovalam' },
          { href: '/tour-packages/varkala-tours', label: 'Varkala' }
        ]
      },
      {
        title: 'Karnataka',
        items: [
          { href: '/karnataka-tour-packages', label: 'Karnataka Overview' },
          { href: '/tour-packages/mysore-tours', label: 'Mysore' },
          { href: '/tour-packages/coorg-tours', label: 'Coorg' },
          { href: '/tour-packages/bangalore-tours', label: 'Bangalore' },
          { href: '/tour-packages/chikmagalur-tours', label: 'Chikmagalur' },
          { href: '/tour-packages/kabini-tours', label: 'Kabini' },
          { href: '/tour-packages/hampi-tours', label: 'Hampi' }
        ]
      },
      {
        title: 'Andaman',
        items: [
          { href: '/destination/andaman/andaman-tourism', label: 'Andaman & Nicobar Islands' }
        ]
      }
    ]
  },
  {
    href: '/north-india-tour-packages',
    label: 'North India',
    menuAlign: 'left',
    categories: [
      {
        title: 'Maharashtra',
        items: [{ href: '/destination/maharashtra/shirdi', label: 'Shirdi Yatra' }]
      },
      {
        title: 'Uttar Pradesh',
        items: [{ href: '/destination/uttar-pradesh/varanasi', label: 'Varanasi' }]
      },
      {
        title: 'Golden Triangle',
        items: [{ href: '/north-india-tour-packages/golden-triangle-tours', label: 'Delhi, Agra, Jaipur' }]
      },
      {
        title: 'Shimla',
        items: [{ href: '/north-india-tour-packages/shimla-tours', label: 'Shimla Tours' }]
      },
      {
        title: 'Manali Tours',
        items: [{ href: '/north-india-tour-packages/manali-tours', label: 'Manali Tours' }]
      },
      {
        title: 'Manali Volvo Tours',
        items: [{ href: '/north-india-tour-packages/manali-volvo-tours', label: 'Manali Volvo Tours' }]
      },
      {
        title: 'Kashmir Tours',
        items: [{ href: '/north-india-tour-packages/kashmir-tours', label: 'Kashmir Tours' }]
      }
    ]
  },
  {
    href: '#',
    label: 'Honeymoon Package',
    menuAlign: 'right',
    categories: [
      { title: 'Tamil Nadu', items: [{ href: '/tour-packages/tamil-nadu-honeymoon-packages', label: 'Tamil Nadu Honeymoon Packages' }] },
      { title: 'Kerala', items: [{ href: '/tour-packages/kerala-honeymoon-packages', label: 'Kerala Honeymoon Packages' }] },
      { title: 'Karnataka', items: [{ href: '/tour-packages/karnataka-honeymoon-packages', label: 'Karnataka Honeymoon Packages' }] },
      { title: 'Goa', items: [{ href: '/tour-packages/goa-honeymoon-packages', label: 'Goa Honeymoon Packages' }] },
      { title: 'Kashmir', items: [{ href: '/tour-packages/kashmir-honeymoon-packages', label: 'Kashmir Honeymoon Packages' }] },
      { title: 'Himachal Pradesh', items: [{ href: '/tour-packages/himachal-honeymoon-packages', label: 'Himachal Pradesh Honeymoon Packages' }] },
      { title: 'Sikkim & Darjeeling', items: [{ href: '/tour-packages/sikkim-darjeeling-honeymoon-packages', label: 'Sikkim and Darjeeling Honeymoon Packages' }] },
      { title: 'Andaman', items: [{ href: '/tour-packages/andaman-honeymoon-packages', label: 'Andaman Honeymoon Packages' }] },
      { title: 'Maldives', items: [{ href: '/tour-packages/maldives-honeymoon-packages', label: 'Maldives Honeymoon Packages' }] },
    ]
  },
  {
    href: '#',
    label: 'International',
    menuAlign: 'right',
    categories: [
      {
        title: 'Asia',
        items: [
          { href: '/destination/international/malaysia-tourism', label: 'Malaysia' },
          { href: '/destination/international/singapore-tourism', label: 'Singapore' },
          { href: '/destination/international/bali-tourism', label: 'Bali' },
          { href: '/destination/international/thailand-tourism', label: 'Thailand' },
          { href: '/destination/international/sri-lanka-tourism', label: 'Sri Lanka' }
        ]
      }
    ]
  },
 
  { href: '/testimonials', label: 'Testimonials' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const location = useLocation()

  // ── Close mobile menu on route change (browser back/forward) ──
  useEffect(() => {
    setMenuOpen(false)
    setOpenMobileMenu(null)
  }, [location.pathname])

  // ── Lock background scroll when mobile menu is open ──
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ── Close menu on Escape key ──
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setOpenMobileMenu(null)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // ── Toggle accordion — only one open at a time ──
  const toggleMobileMenu = useCallback((label: string) => {
    setOpenMobileMenu(prev => prev === label ? null : label)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMenuOpen(false)
    setOpenMobileMenu(null)
  }, [])

  return (
    <>
      {/* ── Header ── */}
      <header className="fixed z-50 transition-all duration-500 mx-auto left-0 right-0 max-w-7xl top-4 bg-white clay-card text-slate-900 py-3 px-6 md:px-8 rounded-[2.5rem] w-[calc(100%-2rem)]">
        <nav className="flex items-center justify-between relative">

          {/* Logo → always links to Home */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Logaa Holidays — Go to Home"
            onClick={() => setMenuOpen(false)}
          >
            <img
              loading="lazy"
              src="/logo.png"
              alt="Logaa Holidays Logo - Best Travel Agency in Madurai"
              className="h-[62px] w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.label} className="relative group">
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 text-base font-bold transition-colors duration-200 tracking-wide ${
                    location.pathname === link.href
                      ? 'text-[var(--color-blue-ocean)]'
                      : 'text-slate-900 hover:text-[var(--color-blue-ocean)]'
                  }`}
                >
                  {link.label}
                  {(link.submenu || link.categories) && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Invisible hover bridge */}
                {(link.submenu || link.categories) && (
                  <div className="absolute top-full left-0 w-full h-8 invisible group-hover:visible" />
                )}

                {/* Standard Submenu */}
                {link.submenu && (
                  <div className="absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 p-3 flex flex-col gap-1 z-50 shadow-xl">
                    {link.submenu.map(sub => {
                      const isActive = location.pathname === sub.href;
                      return (
                      <Link key={sub.label} to={sub.href} className={`text-sm px-4 py-3 rounded-xl transition-colors text-left ${isActive ? 'font-bold text-[var(--color-blue-ocean)] bg-blue-50' : 'font-bold text-slate-700 hover:text-[var(--color-blue-ocean)] hover:bg-slate-50'}`}>
                        {sub.label}
                      </Link>
                      );
                    })}
                  </div>
                )}

                {/* Mega Menu — South India */}
                {link.categories && link.label === 'South India' && (
                  <div className="fixed top-[100px] left-1/2 -translate-x-1/2 w-max max-w-[1100px] bg-white rounded-3xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 p-8 flex gap-10 z-50 cursor-default shadow-2xl">
                    {link.categories.map(cat => (
                      <div key={cat.title} className={cat.items.length > 8 ? 'w-[360px]' : 'w-[180px]'}>
                        <h4 className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-forest)] mb-4 border-b border-slate-100 pb-2">{cat.title}</h4>
                        <ul className={cat.items.length > 8 ? 'grid grid-cols-2 gap-x-6 gap-y-1' : 'flex flex-col gap-1'}>
                          {cat.items.map(item => {
                            const isActive = location.pathname === item.href;
                            return (
                            <li key={item.label}>
                              <Link to={item.href} className={`text-sm block py-2 transition-transform ${isActive ? 'font-bold text-[var(--color-blue-ocean)] translate-x-1' : 'font-medium text-slate-600 hover:text-[var(--color-blue-ocean)] hover:translate-x-1'}`}>
                                {item.label}
                              </Link>
                            </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mega Menu — Others */}
                {link.categories && link.label !== 'South India' && (
                  <div className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 ${link.categories.length > 2 ? 'w-[850px] grid-cols-3' : 'w-[450px] grid-cols-2'} bg-white rounded-3xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 p-8 grid gap-8 z-50 cursor-default shadow-xl`}>
                    {link.categories.map(cat => (
                      <div key={cat.title}>
                        <h4 className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-forest)] mb-4 border-b border-slate-100 pb-2">{cat.title}</h4>
                        <ul className="flex flex-col gap-1">
                          {cat.items.map(item => {
                            const isActive = location.pathname === item.href;
                            return (
                            <li key={item.label}>
                              <Link to={item.href} className={`text-sm block py-2 transition-transform ${isActive ? 'font-bold text-[var(--color-blue-ocean)] translate-x-1' : 'font-medium text-slate-600 hover:text-[var(--color-blue-ocean)] hover:translate-x-1'}`}>
                                {item.label}
                              </Link>
                            </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/contact"
              className="inline-flex px-6 xl:px-8 py-3 xl:py-4 text-sm font-bold text-white rounded-full transition-colors bg-[var(--color-blue-ocean)] hover:bg-[var(--color-primary-emerald)]"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="cursor-pointer p-2 lg:hidden transition-colors text-slate-900 rounded-xl hover:bg-slate-100 active:scale-95"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen
              ? <X className="h-7 w-7" />
              : <Menu className="h-7 w-7" />
            }
          </button>
        </nav>

        {/* ══════════════════════════════════════════
            MOBILE MENU — Full-featured accordion
        ══════════════════════════════════════════ */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!menuOpen}
        >
          {/* Scrollable menu body */}
          <div className="overflow-y-auto overscroll-contain" style={{ maxHeight: 'calc(80vh - 80px)' }}>
            <ul className="flex flex-col py-3">
              {links.map((link) => {
                const hasChildren = !!(link.submenu || link.categories)
                const isOpen = openMobileMenu === link.label

                return (
                  <li key={link.label} className="border-b border-slate-50 last:border-0">
                    {/* Row */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.href}
                        className={`flex-1 py-3.5 px-2 text-base font-bold ${
                          location.pathname === link.href
                            ? 'text-[var(--color-blue-ocean)]'
                            : 'text-slate-700 hover:text-[var(--color-blue-ocean)]'
                        }`}
                        onClick={(e) => {
                          if (link.href === '#') e.preventDefault()
                          if (!hasChildren) closeMobileMenu()
                        }}
                      >
                        {link.label}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => toggleMobileMenu(link.label)}
                          className="p-3 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                          aria-label={isOpen ? `Collapse ${link.label}` : `Expand ${link.label}`}
                          aria-expanded={isOpen}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-blue-ocean)]' : ''}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion — Submenu */}
                    {link.submenu && (
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <ul className="pl-4 pb-3 flex flex-col gap-1 border-l-2 border-[var(--color-blue-ocean)]/20 ml-2">
                          {link.submenu.map(sub => {
                            const isActive = location.pathname === sub.href;
                            return (
                            <li key={sub.label}>
                              <Link
                                to={sub.href}
                                className={`block py-2.5 px-2 text-sm rounded-lg transition-colors ${isActive ? 'font-bold text-[var(--color-blue-ocean)] bg-blue-50' : 'font-medium text-slate-500 hover:text-[var(--color-blue-ocean)] hover:bg-slate-50'}`}
                                onClick={closeMobileMenu}
                              >
                                {sub.label}
                              </Link>
                            </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Accordion — Category Mega Menu */}
                    {link.categories && (
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}>
                        <div className="pl-4 pb-4 ml-2 border-l-2 border-[var(--color-blue-ocean)]/20">
                          {link.categories.map(cat => (
                            <div key={cat.title} className="mt-4">
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary-forest)] mb-2 px-2">
                                {cat.title}
                              </h4>
                              <ul className="flex flex-col gap-0.5">
                                {cat.items.map(item => {
                                  const isActive = location.pathname === item.href;
                                  return (
                                  <li key={item.label}>
                                    <Link
                                      to={item.href}
                                      className={`block py-2.5 px-2 text-sm rounded-lg transition-colors ${isActive ? 'font-bold text-[var(--color-blue-ocean)] bg-blue-50' : 'font-medium text-slate-500 hover:text-[var(--color-blue-ocean)] hover:bg-slate-50'}`}
                                      onClick={closeMobileMenu}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}

              {/* Contact CTA at bottom */}
              <li className="pt-4 pb-2 px-2">
                <Link
                  to="/contact"
                  className="flex justify-center w-full px-8 py-4 text-base font-bold text-white bg-[var(--color-blue-ocean)] hover:bg-[var(--color-primary-emerald)] rounded-full transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 pointer-events-auto ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}
