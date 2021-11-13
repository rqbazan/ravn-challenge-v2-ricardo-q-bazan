import clsx from 'clsx'

import { Typography } from '~/ui/core'
import { SpinnerSvg } from '~/ui/icons'

export interface LoadingIndicatorProps {
  className?: string
}

export function LoadingIndicator({ className }: LoadingIndicatorProps) {
  return (
    <div className={clsx(className, 'inline-flex items-center')}>
      <SpinnerSvg className="animate-spin-slow" />
      <Typography className="ml-2" as="span" variant="h2LowEmphasis">
        Loading
      </Typography>
    </div>
  )
}
