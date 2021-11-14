import clsx from 'clsx'

import { Cell, Typography } from '~/ui/core'
import { ArrowRightSvg } from '~/ui/icons'

export interface PersonCellProps {
  name: string
  homeworldName: string
  speciesName?: string
  className?: string
}

export function PersonCell({
  className,
  name,
  speciesName,
  homeworldName,
  ...props
}: PersonCellProps) {
  return (
    <Cell className={clsx(className, 'flex items-center border-b border-border')} {...props}>
      <div className="flex flex-col flex-1 mr-4">
        <Typography variant="h2">{name}</Typography>
        <Typography variant="pLowEmphasis">
          {speciesName || 'Human'} from {homeworldName}
        </Typography>
      </div>
      <ArrowRightSvg />
    </Cell>
  )
}
