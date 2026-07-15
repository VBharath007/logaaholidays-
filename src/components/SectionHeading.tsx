interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span
        className="text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-700"
        style={{ color: 'var(--theme-accent)' }}
      >
        {eyebrow}
      </span>
      <h2 className="font-display text-balance text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
      {description && <p className="text-balance text-white/65">{description}</p>}
    </div>
  )
}
