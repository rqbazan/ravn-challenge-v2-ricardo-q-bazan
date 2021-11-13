import clsx from 'clsx'

import { Typography } from '~/ui/core'

export interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className, ...props }: SectionHeaderProps) {
  return (
    <div className={clsx(className, 'px-4 pt-8 pb-2')} {...props}>
      <Typography as="h2" variant="h2">
        {title}
      </Typography>
    </div>
  )
}
