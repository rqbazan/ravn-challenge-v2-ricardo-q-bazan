import clsx from 'clsx'

export interface TypographyProps {
  as?: keyof JSX.IntrinsicElements
  variant?: 'h2' | 'h2LowEmphasis' | 'h2HighEmphasis' | 'p' | 'pLowEmphasis'
  className?: string
  children: React.ReactNode
}

export function Typography({
  as: Component = 'p',
  variant = 'p',
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={clsx(className, 'text-text-dark', {
        'font-bold leading-heading text-heading': variant.startsWith('h'),
        'font-normal leading-paragraph text-paragraph': variant.startsWith('p'),
        'text-text-light': variant.includes('LowEmphasis'),
        'text-text-emphasis': variant.includes('HighEmphasis'),
      })}
      {...props}
    />
  )
}
