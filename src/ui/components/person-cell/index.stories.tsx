import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PersonCell } from './index'

export default {
  title: 'components/PersonCell',
  component: PersonCell,
} as ComponentMeta<typeof PersonCell>

const Template: ComponentStory<typeof PersonCell> = args => <PersonCell {...args} />

export const Playground = Template.bind({})

Playground.args = {
  name: 'Luke Skywalker',
  speciesName: 'Human',
  homeworldName: 'Tatooine',
}
