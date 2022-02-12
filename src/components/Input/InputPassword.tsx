import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Input, { InputProps } from './Input'

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(function (
  { ...rest },
  ref,
) {
  let [showPassword, setShowPassword] = useState(false)

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      rightIcon={
        <button onClick={() => setShowPassword((f) => !f)}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      }
      ref={ref}
      {...rest}
    />
  )
})

export default InputPassword
