import clsx from 'clsx'

import { Cell, Typography } from '~/ui/core'

export interface DataCellProps {
  className?: string
  label: string
  value: string
}

export function DataCell({ label, value, className, ...props }: DataCellProps) {
  return (
    <Cell {...props} className={clsx(className, 'flex justify-between')}>
      <Typography variant="h2LowEmphasis">{label}</Typography>
      <Typography variant="h2">{value}</Typography>
    </Cell>
  )
}