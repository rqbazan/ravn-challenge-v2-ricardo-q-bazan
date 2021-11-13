import clsx from 'clsx'

export interface TypographyProps {
  as?: keyof JSX.IntrinsicElements
  variant?: 'h2' | 'h2LowEmphasis' | 'h2HighEmphasis' | 'p' | 'pLowEmphasis'
  className?: string
  isColorless?: boolean
  children: React.ReactNode
}

export function Typography({
  as: Component = 'p',
  variant = 'p',
  isColorless = false,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={clsx(className, !isColorless && 'text-text-dark', {
        'font-bold leading-heading text-heading': variant.startsWith('h'),
        'font-normal leading-paragraph text-paragraph': variant.startsWith('p'),
        'text-text-light': !isColorless && variant.includes('LowEmphasis'),
        'text-text-emphasis': !isColorless && variant.includes('HighEmphasis'),
      })}
      {...props}
    />
  )
}
