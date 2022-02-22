import React from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss'
import { CgSpinner } from 'react-icons/cg'

export interface Props {
  as?: keyof JSX.IntrinsicElements | React.ElementType
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  error?: boolean
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  loading?: React.ReactNode
}

export type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>

export type InputProps = React.PropsWithChildren<NativeAttrs & Props>

const Input = React.forwardRef<HTMLInputElement, InputProps>(function (
  {
    as = 'input',
    children,
    className,
    size = 'md',
    disabled,
    error,
    leftIcon,
    rightIcon,
    loading,
    ...rest
  },
  ref,
) {
  if (loading) {
    disabled = true
    rightIcon = <CgSpinner className="animate-spin text-cyan-500" />
  }

  let classes = clsx(className, styles.input, styles[`input_${size}`], {
    [styles[`input_disabled`]]: disabled,
    [styles[`input_error`]]: error,
    [styles[`input_icon_left`]]: leftIcon,
    [styles[`input_icon_right`]]: rightIcon,
  })

  let hasIcon = leftIcon || rightIcon

  let inputUi = React.createElement(
    as,
    {
      ...(as === 'input' && { type: 'text' }),
      className: classes,
      disabled,
      ref,
      ...rest,
    },
    children,
  )

  if (hasIcon) {
    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400 text-[1.2em]">
            {leftIcon}
          </div>
        )}
        {inputUi}
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 text-[1.2em]">
            {rightIcon}
          </div>
        )}
      </div>
    )
  } else {
    return inputUi
  }
})

export default Input
