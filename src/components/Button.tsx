import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
 href: string
 children: ReactNode
 variant?: 'solid' | 'ghost'
 className?: string
}

const base =
 'relative overflow-hidden inline-flex cursor-pointer items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold tracking-wider uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 group'

export function Button({ href, children, variant = 'solid', className = '' }: ButtonProps) {
 if (variant === 'ghost') {
 return (
 <Link
 to={href}
 className={`${base} border border-white/20 text-white hover:border-white/40 glass-panel focus-visible:ring-white/60 ${className}`}
 >
 <span className="relative z-10">{children}</span>
 <div className="absolute inset-0 bg-white/5 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
 </Link>
 )
 }

 return (
 <Link
 to={href}
 style={{ backgroundColor: 'var(--theme-accent)' }}
 className={`${base} text-white focus-visible:ring-white transition-all duration-500 ${className}`}
 >
 <span className="relative z-10 ">{children}</span>
 <div className="absolute inset-0 bg-white/20 transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />
 </Link>
 )
}
