import { MainLayout } from '~/layouts/main'
import { ExplorerView } from '~/views/explorer'

export default function Home() {
  return <ExplorerView />
}

Home.Layout = MainLayout
