import React from 'react'
import { Dialog } from '@headlessui/react'
import clsx from 'clsx'

type ModalProps = React.PropsWithChildren<{
  open: boolean
  onOpenChange: (value: boolean) => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
}>

function Modal({ children, open, size = 'md', onOpenChange }: ModalProps) {
  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      open={open}
      onClose={() => onOpenChange(false)}
    >
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div
          className={clsx(
            'inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl',
            {
              'max-w-md': size === 'sm',
              'max-w-lg': size === 'md',
              'max-w-xl': size === 'lg',
              'max-w-2xl': size === 'xl',
            },
          )}
        >
          {children}
        </div>
      </div>
    </Dialog>
  )
}

const Title = Dialog.Title
const Description = Dialog.Description

export default Object.assign(Modal, { Title, Description })
