import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Typography } from './index'

export default {
  title: 'core/Typography',
  component: Typography,
  argTypes: {
    as: {
      defaultValue: 'p',
    },
    isColorless: {
      defaultValue: false,
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit.',
    as: 'p',
    variant: 'p',
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => <Typography {...args} />

export const Playground = Template.bind({})

export const CustomColor = Template.bind({})

CustomColor.args = {
  isColorless: true,
  className: 'text-green-300',
}

export function AllVariants() {
  return (
    <div className="flex flex-col space-y-3">
      <Typography as="h2" variant="h2">
        H2 Default - 17pt rgba(0,0,0,1)
      </Typography>
      <Typography as="h2" variant="h2LowEmphasis">
        H2 Low Emphasis - 17pt rgba(0,0,0,0.3)
      </Typography>
      <Typography as="h2" variant="h2HighEmphasis">
        H2 High Emphasis - 17pt rgba(235, 87, 87, 1)
      </Typography>
      <Typography as="p" variant="p">
        P1 Default - 14pt rgba(0, 0, 0, 1)
      </Typography>
      <Typography as="p" variant="pLowEmphasis">
        P1 Low Emphasis - 14pt rgba(0,0,0, 0.5)
      </Typography>
    </div>
  )
}
