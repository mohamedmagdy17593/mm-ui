import React, { useState } from 'react'
import styles from './Switch.module.scss'
import clsx from 'clsx'
import { Switch as HeadlessSwitch } from '@headlessui/react'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  label?: React.ReactNode
  checked?: boolean
  onChange?: (value: boolean) => void
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>

type CheckboxProps = React.PropsWithChildren<NativeAttrs & Props>

const Switch = React.forwardRef<HTMLButtonElement, CheckboxProps>(function (
  {
    className,
    variant = 'primary',
    size = 'md',
    disabled,
    label,
    defaultChecked = false,
    checked: inputChecked,
    onChange = () => {},
    ...rest
  },
  ref,
) {
  let [localChecked, setLocalChecked] = useState(defaultChecked)

  let isControlled = inputChecked != null

  let checked = isControlled ? inputChecked! : localChecked

  if (!isControlled) {
    onChange = (v: boolean) => setLocalChecked(v)
  }

  let classes = clsx(
    className,
    styles.switch,
    styles[`switch_${size}`],
    checked ? styles[`switch_${variant}`] : 'bg-neutral-300',
    {
      [styles[`switch_disabled`]]: !label && disabled,
      'cursor-not-allowed': disabled,
    },
  )

  let switchUi = (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={clsx(classes, '')}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {label && <span className="sr-only">{label}</span>}
      <span
        aria-hidden="true"
        className={clsx(
          styles[`switch_handle`],
          styles[`switch_handle_${size}`],
          checked ? styles[`switch_handle_${size}_translate`] : 'translate-x-0',
        )}
      />
    </HeadlessSwitch>
  )

  if (label) {
    return (
      <label
        className={clsx(
          styles.label,
          styles[`label_${size}`],
          styles[`label_${variant}`],
          {
            [styles[`switch_disabled`]]: disabled,
          },
        )}
      >
        {switchUi}
        {label}
      </label>
    )
  } else {
    return switchUi
  }
})

export default Switch
