import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'

import { useApollo } from '~/lib/apollo'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'

export default function App({ Component: Page, pageProps }: AppProps) {
  // @ts-expect-error
  const Layout = Page.Layout || React.Fragment

  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
