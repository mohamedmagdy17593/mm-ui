import Input from './Input'
import { MdHome, MdError } from 'react-icons/md'

function InputExample() {
  return (
    <div>
      <h1 className="text-4xl">Input</h1>

      <div className="ml-4">
        <h2 className="mt-4 text-lg font-bold">Sizes</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Input placeholder="Default" />
          <Input size="xs" placeholder="xs" />
          <Input size="sm" placeholder="sm" />
          <Input size="md" placeholder="md" />
          <Input size="lg" placeholder="lg" />
          <Input size="xl" placeholder="xl" />
        </div>

        <h2 className="mt-4 text-lg font-bold">With label</h2>
        <div className="mt-3 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-700">
              Email
            </label>
            <div className="mt-1">
              <Input
                placeholder="example@example.com"
                id="email"
                type="email"
              />
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-lg font-bold">With Icons</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Input placeholder="With icon" rightIcon={<MdHome />} />
          <Input placeholder="With icon" leftIcon={<MdHome />} />
        </div>

        <h2 className="mt-4 text-lg font-bold">With loading</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Input placeholder="loading" loading />
        </div>

        <h2 className="mt-4 text-lg font-bold">Disabled</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Input placeholder="Disabled" disabled />
        </div>

        <h2 className="mt-4 text-lg font-bold">With Error</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Input placeholder="Error" error />
        </div>

        <h2 className="mt-4 text-lg font-bold">With helpers and errors</h2>
        <div className="mt-3 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-700">
              Email
            </label>
            <div className="mt-1">
              <Input
                placeholder="example@example.com"
                id="email"
                type="email"
              />
            </div>
            <div className="text-sm mt-1 text-neutral-600">
              Helper text message
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm text-red-500">
              Email
            </label>
            <div className="mt-1">
              <Input
                placeholder="example@example.com"
                id="email"
                type="email"
                defaultValue="error input"
                error
                rightIcon={<MdError className="text-red-500" />}
              />
            </div>
            <div className="text-sm mt-1 text-red-500">Error message</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputExample
