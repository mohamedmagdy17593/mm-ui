import React, { useState } from 'react'
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import styles from './RadioGroup.module.scss'
import clsx from 'clsx'

interface Option {
  value: any
  label: React.ReactNode
  disabled?: boolean
}

type RadioGroupProps = {
  options: Option[]
  inputClassName?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  inline?: boolean
  value?: any
  onChange?: (arg: any) => void
}

const RadioGroup = function ({
  inputClassName,
  size,
  variant,
  inline,
  options,
  value,
  onChange = () => {},
}: RadioGroupProps) {
  let inputClasses = clsx(
    inputClassName,
    styles.radio,
    styles[`radio_${size}`],
    styles[`radio_${variant}`],
  )

  return (
    <HeadlessRadioGroup value={value} onChange={onChange}>
      <div
        className={clsx('flex ', inline ? 'flex-row gap-4' : 'flex-col gap-2')}
      >
        {options.map((option) => (
          <div key={option.value}>
            <HeadlessRadioGroup.Option
              as={HeadlessRadioGroup.Label}
              className={clsx(
                styles.label,
                styles[`label_${size}`],
                styles[`label_${variant}`],
                {
                  [styles[`radio_disabled`]]: option.disabled,
                },
              )}
              value={option.value}
            >
              {({ checked }) => (
                <>
                  <input
                    type="checkbox"
                    className={inputClasses}
                    checked={checked}
                    disabled={option.disabled}
                  />
                  {option.label}
                </>
              )}
            </HeadlessRadioGroup.Option>
          </div>
        ))}
      </div>
    </HeadlessRadioGroup>
  )
}

export default RadioGroup
