import React from 'react'
import styles from './Checkbox.module.scss'
import clsx from 'clsx'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  label?: React.ReactNode
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>

type CheckboxProps = React.PropsWithChildren<NativeAttrs & Props>

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function (
  {
    className,
    variant = 'primary',
    size = 'md',
    disabled,
    rounded,
    label,
    ...rest
  },
  ref,
) {
  let classes = clsx(
    className,
    styles.checkbox,
    styles[`checkbox_${size}`],
    styles[`checkbox_${variant}`],
    {
      [styles.rounded]: rounded,
      [styles[`checkbox_disabled`]]: !label && disabled,
      'cursor-not-allowed': disabled,
    },
  )

  let checkboxUi = (
    <input
      type="checkbox"
      className={classes}
      disabled={disabled}
      ref={ref}
      {...rest}
    ></input>
  )

  if (label) {
    return (
      <label
        className={clsx(
          styles.label,
          styles[`label_${size}`],
          styles[`label_${variant}`],
          {
            [styles[`checkbox_disabled`]]: disabled,
          },
        )}
      >
        {checkboxUi}
        {label}
      </label>
    )
  } else {
    return checkboxUi
  }
})

export default Checkbox
