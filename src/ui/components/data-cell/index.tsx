import clsx from 'clsx'

import { Cell, Typography } from '~/ui/core'

export interface DataCellProps {
  className?: string
  label: string
  value?: string
  'data-testid'?: string
}

export function DataCell({
  label,
  value,
  className,
  'data-testid': testId,
  ...props
}: DataCellProps) {
  return (
    <Cell
      {...props}
      className={clsx(className, 'flex justify-between border-b border-border')}
      data-testid={testId}
    >
      <Typography variant="h2LowEmphasis" data-testid={`${testId}.label`}>
        {label}
      </Typography>
      {value && (
        <Typography variant="h2" data-testid={`${testId}.value`}>
          {value}
        </Typography>
      )}
    </Cell>
  )
}
