import { ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'mm-ui/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Variants = () => (
  <div className="flex space-x-3 items-center">
    <Button>Default</Button>
  </div>
)
