import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DataCell } from './index'

export default {
  title: 'components/DataCell',
  component: DataCell,
} as ComponentMeta<typeof DataCell>

const Template: ComponentStory<typeof DataCell> = args => <DataCell {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Eye Color',
  value: 'Blue',
}
