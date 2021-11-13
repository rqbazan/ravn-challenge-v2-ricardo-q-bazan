import clsx from 'clsx'

import { Cell, Typography } from '~/ui/core'

export interface DataCellProps {
  className?: string
  label: string
  value?: string
}

export function DataCell({ label, value, className, ...props }: DataCellProps) {
  return (
    <Cell {...props} className={clsx(className, 'flex justify-between border-b border-border')}>
      <Typography variant="h2LowEmphasis">{label}</Typography>
      {value && <Typography variant="h2">{value}</Typography>}
    </Cell>
  )
}
