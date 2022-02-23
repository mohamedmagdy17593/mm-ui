import React from 'react'
import clsx from 'clsx'
import { Tab as HeadlessTab } from '@headlessui/react'

interface TabItem {
  label: React.ReactNode
  content: React.ReactNode
}

type TabsProps = React.PropsWithChildren<{ items: TabItem[] }>

function Tabs({ items }: TabsProps) {
  return (
    <div className="flex flex-col gap-4">
      <HeadlessTab.Group>
        <HeadlessTab.List className="flex w-full p-1 space-x-1 bg-sky-100 rounded-lg">
          {items.map((item, i) => {
            return (
              <HeadlessTab
                key={i}
                className={({ selected }) =>
                  clsx(
                    'w-full px-4 py-2 text-sm rounded-md ',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-cyan-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white text-cyan-700 shadow'
                      : '  text-neutral-600 hover:text-neutral-800 ',
                  )
                }
              >
                {item.label}
              </HeadlessTab>
            )
          })}
        </HeadlessTab.List>
        <HeadlessTab.Panels>
          {items.map((item, i) => {
            return (
              <HeadlessTab.Panel
                key={i}
                className={clsx(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                )}
              >
                {item.content}
              </HeadlessTab.Panel>
            )
          })}
        </HeadlessTab.Panels>
      </HeadlessTab.Group>
    </div>
  )
}

export default Tabs
