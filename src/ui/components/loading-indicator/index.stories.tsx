import { ComponentMeta } from '@storybook/react'

import { LoadingIndicator } from './index'

export default {
  title: 'components/LoadingIndicator',
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>

export function Playground() {
  return <LoadingIndicator />
}
