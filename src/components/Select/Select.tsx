import React from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss'
import { CgSpinner } from 'react-icons/cg'

export interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  error?: boolean
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  loading?: React.ReactNode
}

export type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>

export type InputProps = React.PropsWithChildren<NativeAttrs & Props>

const Select = React.forwardRef<HTMLInputElement, InputProps>(function (
  {
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
  return null
})

export default Select
