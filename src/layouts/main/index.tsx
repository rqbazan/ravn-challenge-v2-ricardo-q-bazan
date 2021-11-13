import * as React from 'react'

import { Typography } from '~/ui/core'

export interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-brand-black h-[52px] px-8 flex items-center justify-center md:justify-start">
        <Typography className="text-white" variant="h2" isColorless>
          Ravn Star Wars Registry
        </Typography>
      </header>
      <main className="flex-1 min-h-0">{children}</main>
    </div>
  )
}
