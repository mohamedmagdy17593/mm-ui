import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Side, Align } from '@radix-ui/popper'

type TooltipProps = React.PropsWithChildren<{
  content: React.ReactNode
  side?: Side
  align?: Align
}>

function Tooltip({ children, content, side, align }: TooltipProps) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Content
        side={side}
        align={align}
        sideOffset={4}
        className="bg-neutral-800 text-white px-2 py-1 rounded-md text-sm"
      >
        {content}
        <RadixTooltip.Arrow
          offset={6}
          width={11}
          height={5}
          className="text-neutral-800 fill-current"
        />
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  )
}

export default Tooltip
