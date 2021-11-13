import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NoticeCell } from './index'

export default {
  title: 'components/NoticeCell',
  component: NoticeCell,
} as ComponentMeta<typeof NoticeCell>

const Template: ComponentStory<typeof NoticeCell> = args => <NoticeCell {...args} />

export const Playground = Template.bind({})

Playground.args = {
  message: 'Failed to Load Data',
}
