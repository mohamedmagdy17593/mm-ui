import React, { useImperativeHandle, useRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'
import { CgSpinner } from 'react-icons/cg'

interface Props {
  as?: keyof JSX.IntrinsicElements
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  bordered?: boolean
  rounded?: boolean
  loading?: boolean
  block?: boolean
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>

type ButtonProps = React.PropsWithChildren<NativeAttrs & Props>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  {
    children,
    className,
    size = 'md',
    variant = 'primary',
    bordered = false,
    rounded = false,
    as = 'button',
    disabled,
    loading,
    block,
    ...rest
  },
  ref: React.Ref<HTMLButtonElement | null>,
) {
  disabled = disabled || loading

  // this is how to use internal ref and pass it to forwardRef ref
  let buttonRef = useRef<HTMLButtonElement>(null)
  useImperativeHandle(ref, () => buttonRef.current)

  let classes = clsx(className, styles.btn, styles[`btn_${size}`], {
    [styles[`btn_${variant}`]]: !bordered,
    [styles[`btn_bordered_${variant}`]]: bordered,
    [styles[`btn_rounded`]]: rounded,
    [styles[`btn_disabled`]]: disabled,
    [styles[`btn_block`]]: block,
  })

  let childrenUi
  if (loading) {
    childrenUi = (
      <span className="inline-block relative">
        <span className="invisible">{children}</span>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <CgSpinner className="animate-spin text-[1.4em]" />
        </span>
      </span>
    )
  } else {
    childrenUi = children
  }

  return React.createElement(
    as,
    {
      ...(as === 'button' && { type: 'button' }),
      className: classes,
      disabled,
      ...rest,
    },
    childrenUi,
  )
})

export default Button
