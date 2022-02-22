import React, { useState } from 'react'
import clsx from 'clsx'
import { Listbox } from '@headlessui/react'
import Input, { InputProps } from '../Input/Input'
import { HiSelector } from 'react-icons/hi'

export interface Option {
  value: any
  label: React.ReactNode
  disabled: boolean
}

export type SelectProps = InputProps & {
  value: any
  onChange(value: any): void
  options: Option[]
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(function (
  {
    options,
    className,
    value,
    onChange,
    disabled,
    loading,
    placeholder,
    ...rest
  },
  ref,
) {
  if (loading) {
    disabled = true
  }

  let selected = options.find((o) => o.value === value)
  let isPlaceholder = !selected

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className="relative">
        <Input
          as={Listbox.Button}
          className={clsx(className, 'text-left', {
            'text-neutral-400': isPlaceholder,
          })}
          rightIcon={<HiSelector />}
          loading={loading}
          disabled={disabled}
          // @ts-ignore
          ref={ref}
          {...rest}
        >
          {isPlaceholder ? placeholder : selected?.label}
        </Input>

        <Listbox.Options className="absolute bg-white mt-1 w-full rounded-md shadow-sm p-1 border border-neutral-200 text-neutral-600 focus:outline-none flex flex-col gap-0.5 z-50 overflow-auto max-h-60">
          {options.map((option) => (
            <Listbox.Option
              className={({ active, selected }) =>
                clsx(
                  'cursor-pointer text-sm px-2 py-1 rounded border-neutral-200 ',
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
        </Listbox.Options>
      </div>
    </Listbox>
  )
})

export default Select
