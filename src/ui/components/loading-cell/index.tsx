import { Cell } from '~/ui/core'

import { LoadingIndicator } from '../loading-indicator'

export interface LoadingCellProps {
  className?: string
}

export function LoadingCell({ className, ...props }: LoadingCellProps) {
  return (
    <Cell {...props} isCentered>
      <LoadingIndicator />
    </Cell>
  )
}
