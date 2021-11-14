import { DefaultSeoProps } from 'next-seo'

const defaultTitle = 'Star Wars Registry'

// prettier-ignore
const description = 'Explore Star Wars people and get information about them, powered by SWAPI GraphQL'

export const defaultSEO: DefaultSeoProps = {
  defaultTitle,
  description,
  titleTemplate: '%s – Star Wars Registry',
  canonical: 'https://sw.rcrd.space',
  openGraph: {
    description,
    type: 'website',
    locale: 'en_US',
    url: 'https://sw.rcrd.space',
    site_name: defaultTitle,
    title: defaultTitle,
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '128x128',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
}
