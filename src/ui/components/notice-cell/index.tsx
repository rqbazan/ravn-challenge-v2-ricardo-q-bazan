import clsx from 'clsx'

import { Cell, Typography } from '~/ui/core'

export interface NoticeCellProps {
  message: string
  className?: string
}

export function NoticeCell({ message, className, ...props }: NoticeCellProps) {
  return (
    <Cell {...props} className={clsx(className)} isCentered>
      <Typography variant="h2HighEmphasis">{message}</Typography>
    </Cell>
  )
}
