import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Typography } from '~/ui/core/typography'

import { Cell } from './index'

export default {
  title: 'core/Cell',
  component: Cell,
  args: {
    children: <Typography>Sample Text</Typography>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Cell>

const Template: ComponentStory<typeof Cell> = args => <Cell {...args} />

export const Playground = Template.bind({})

export const Centered = Template.bind({})

Centered.args = {
  isCentered: true,
}
