import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Modal from './Modal'

function ModalExample() {
  let [open, setOpen] = useState(false)

  let [open1, setOpen1] = useState(false)
  let [open2, setOpen2] = useState(false)
  let [open3, setOpen3] = useState(false)
  let [open4, setOpen4] = useState(false)

  return (
    <div>
      <h1 className="text-4xl">Modals</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Modal</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>

          <Modal open={open} onOpenChange={setOpen}>
            <Modal.Title className={'text-base font-bold '}>
              My Title
            </Modal.Title>
            <Modal.Description className={'text-neutral-600 mt-2'}>
              This is the description
            </Modal.Description>
            <Input className="mt-2"></Input>
            <Button className="mt-2" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Modal>
        </div>

        <h2 className="mt-16 text-lg font-bold">Modal sizes</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button onClick={() => setOpen1(true)}>Open Modal sm</Button>

          <Modal size="sm" open={open1} onOpenChange={setOpen1}>
            <Modal.Title className={'text-base font-bold '}>
              My Title
            </Modal.Title>
            <Modal.Description className={'text-neutral-600 mt-2'}>
              This is the description
            </Modal.Description>
            <Input className="mt-2"></Input>
            <Button className="mt-2" onClick={() => setOpen1(false)}>
              Close
            </Button>
          </Modal>

          <Button onClick={() => setOpen2(true)}>Open Modal md</Button>

          <Modal size="md" open={open2} onOpenChange={setOpen2}>
            <Modal.Title className={'text-base font-bold '}>
              My Title
            </Modal.Title>
            <Modal.Description className={'text-neutral-600 mt-2'}>
              This is the description
            </Modal.Description>
            <Input className="mt-2"></Input>
            <Button className="mt-2" onClick={() => setOpen2(false)}>
              Close
            </Button>
          </Modal>

          <Button onClick={() => setOpen3(true)}>Open Modal lg</Button>

          <Modal size="lg" open={open3} onOpenChange={setOpen3}>
            <Modal.Title className={'text-base font-bold '}>
              My Title
            </Modal.Title>
            <Modal.Description className={'text-neutral-600 mt-2'}>
              This is the description
            </Modal.Description>
            <Input className="mt-2"></Input>
            <Button className="mt-2" onClick={() => setOpen3(false)}>
              Close
            </Button>
          </Modal>

          <Button onClick={() => setOpen4(true)}>Open Modal xl</Button>

          <Modal size="xl" open={open4} onOpenChange={setOpen4}>
            <Modal.Title className={'text-base font-bold '}>
              My Title
            </Modal.Title>
            <Modal.Description className={'text-neutral-600 mt-2'}>
              This is the description
            </Modal.Description>
            <Input className="mt-2"></Input>
            <Button className="mt-2" onClick={() => setOpen4(false)}>
              Close
            </Button>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ModalExample
