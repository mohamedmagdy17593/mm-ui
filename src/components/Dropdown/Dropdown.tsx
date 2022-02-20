import React from 'react'
import clsx from 'clsx'
import { Menu } from '@headlessui/react'

export interface Divider {
  type: 'divider'
}

export interface Item {
  type?: 'item'
  label: React.ReactNode
  disabled?: boolean
  onClick?: (e: any) => void
  linkTo?: string
}

export type DropdownProps = React.PropsWithChildren<{
  items: (Item | Divider)[]
}>

const Dropdown = function ({ children, items }: DropdownProps) {
  return (
    <Menu>
      <div className="relative">
        {children}

        <Menu.Items className="absolute bg-white mt-1 w-56  rounded-md shadow-sm p-1 border border-neutral-200 text-neutral-600 focus:outline-none flex flex-col gap-0.5 z-50 overflow-auto max-h-60">
          {items.map((item) => {
            if (item.type === 'divider') {
              return <hr className="border-t border-neutral-200 px-2" />
            }

            return (
              <Menu.Item>
                {({ active }) => {
                  let classes = clsx(
                    'cursor-pointer text-sm px-1 py-1 rounded border-neutral-300 text-left flex',
                    {
                      'bg-sky-500 text-white': active,
                    },
                  )

                  if (item.linkTo) {
                    return (
                      <a href={item.linkTo} className={classes}>
                        {item.label}
                      </a>
                    )
                  } else {
                    return (
                      <button onClick={item.onClick} className={classes}>
                        {item.label}
                      </button>
                    )
                  }
                }}
              </Menu.Item>
            )
          })}
        </Menu.Items>

        {/* <Listbox.Options className="absolute bg-white mt-1 w-full rounded-md shadow-sm p-1 border border-neutral-300 text-neutral-600 focus:outline-none flex flex-col gap-0.5 z-50 overflow-auto max-h-60">
          {options.map((option) => (
            <Listbox.Option
              className={({ active, selected }) =>
                clsx(
                  'cursor-pointer text-sm px-2 py-1 rounded border-neutral-300 ',
                  {
                    'bg-cyan-100 text-cyan-900': active && !selected,
                    'bg-cyan-600 text-white': selected,
                    'text-neutral-400': option.disabled,
                  },
                )
              }
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options> */}
      </div>
    </Menu>
  )
}

const Button = Menu.Button

export default Object.assign(Dropdown, { Button })
