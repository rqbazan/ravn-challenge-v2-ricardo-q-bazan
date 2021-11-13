import { ComponentMeta } from '@storybook/react'

import { LoadingCell } from './index'

export default {
  title: 'components/LoadingCell',
  component: LoadingCell,
} as ComponentMeta<typeof LoadingCell>

export function Playground() {
  return <LoadingCell />
}
