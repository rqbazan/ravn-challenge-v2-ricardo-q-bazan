import { useRouter } from 'next/router'

import { MainLayout } from '~/layouts/main'
import { PersonView } from '~/views/person'

export default function PersonPage() {
  const { query } = useRouter()

  return <PersonView personId={query.personId as string} />
}

PersonPage.Layout = MainLayout
