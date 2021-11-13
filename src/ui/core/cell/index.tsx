import * as React from 'react'
import clsx from 'clsx'

export interface Cell {
  className?: string
  isCentered?: boolean
  children: React.ReactNode
}

export function Cell({ className, isCentered = false, ...props }: Cell) {
  return (
    <div
      className={clsx(className, 'p-4', {
        'flex items-center justify-center': isCentered,
      })}
      {...props}
    />
  )
}
