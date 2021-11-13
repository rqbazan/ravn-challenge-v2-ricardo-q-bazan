import * as React from 'react'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'

export default function App({ Component: Page, pageProps }: AppProps) {
  // @ts-expect-error
  const Layout = Page.Layout || React.Fragment

  return (
    <Layout>
      <Page {...pageProps} />
    </Layout>
  )
}
