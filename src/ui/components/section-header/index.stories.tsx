import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SectionHeader } from './index'

export default {
  title: 'components/SectionHeader',
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>

const Template: ComponentStory<typeof SectionHeader> = args => <SectionHeader {...args} />

export const Playground = Template.bind({})

Playground.args = {
  title: 'General Information',
}
