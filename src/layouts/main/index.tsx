import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Typography } from '~/ui/core'
import { ArrowBack } from '~/ui/icons'

export interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-brand-black h-[52px] px-8 flex items-center justify-center md:justify-start text-white fixed w-full">
        {router.pathname !== '/' && (
          <div className="absolute left-4 p-1 -ml-1 md:hidden" onClick={() => router.back()}>
            <ArrowBack />
          </div>
        )}
        <Link href="/">
          <a>
            <Typography variant="h2" isColorless>
              Ravn Star Wars Registry
            </Typography>
          </a>
        </Link>
      </header>
      <main className="flex-1 min-h-0 mt-[52px]">{children}</main>
    </div>
  )
}
