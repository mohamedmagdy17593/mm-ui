import Input from './Input'
import { MdHome, MdError, MdSearch, MdSort } from 'react-icons/md'
import Button from '../Button/Button'
import InputPassword from './InputPassword'

function InputExample() {
  return (
    <div>
      <h1 className="text-4xl">Inputs</h1>

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

        <h2 className="mt-4 text-lg font-bold">Password Input</h2>
        <div className="mt-3 flex flex-col gap-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-neutral-700"
            >
              Password
            </label>
            <div className="mt-1">
              <InputPassword id="password" />
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

        <h2 className="mt-4 text-lg font-bold">With Input group with button</h2>
        <div className="mt-3 flex flex-col gap-4">
          <div>
            <label htmlFor="search" className="block text-sm text-neutral-700">
              Search
            </label>
            <div className="mt-1 grid grid-cols-[1fr,auto]">
              <Input
                placeholder="search"
                id="search"
                leftIcon={<MdSearch className="text-neutral-400" />}
                className="rounded-r-none border-r-0 focus:z-10"
              />
              <Button className="rounded-l-none focus:z-10">
                <MdSort className="text-[1.4em] mr-1" />
                Sort
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputExample
