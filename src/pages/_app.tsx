import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { useApollo } from '~/lib/apollo'
import { defaultSEO } from '~/next-seo.config'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'

export default function App({ Component: Page, pageProps }: AppProps) {
  // @ts-expect-error
  const Layout = Page.Layout || React.Fragment

  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <DefaultSeo {...defaultSEO} />
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
