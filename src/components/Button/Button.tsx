import React, { useImperativeHandle, useRef } from 'react'
import styles from './Button.module.css'

interface Props {}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>

type ButtonProps = React.PropsWithChildren<NativeAttrs & Props>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, ...rest },
  ref: React.Ref<HTMLButtonElement | null>,
) {
  // this is how to use internal ref and pass it to forwardRef ref
  let buttonRef = useRef<HTMLButtonElement>(null)
  useImperativeHandle(ref, () => buttonRef.current)

  return (
    <button type="button" className={styles.btn} {...rest}>
      {children}
    </button>
  )
})

export default Button
