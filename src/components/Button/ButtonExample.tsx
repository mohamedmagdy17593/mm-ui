import Button from './Button'
import { MdHome } from 'react-icons/md'

function ButtonExample() {
  return (
    <div>
      <h1 className="text-2xl">Buttons</h1>

      <div className="ml-4">
        <h2 className="mt-4 text-lg font-bold">Sizes</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button>Default</Button>
          <Button size="xs">Size xs</Button>
          <Button size="sm">Size sm</Button>
          <Button size="md">Size md</Button>
          <Button size="lg">Size lg</Button>
          <Button size="xl">Size xl</Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">Variants</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">Disabled</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button disabled variant="primary">
            Primary
          </Button>
          <Button disabled variant="secondary">
            Secondary
          </Button>
          <Button disabled variant="success">
            Success
          </Button>
          <Button disabled variant="warning">
            Warning
          </Button>
          <Button disabled variant="error">
            Error
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button disabled bordered variant="primary">
            Primary
          </Button>
          <Button disabled bordered variant="secondary">
            Secondary
          </Button>
          <Button disabled bordered variant="success">
            Success
          </Button>
          <Button disabled bordered variant="warning">
            Warning
          </Button>
          <Button disabled bordered variant="error">
            Error
          </Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">With Icons</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button variant="primary">
            <MdHome className="text-[1.4em] mr-1" />
            Primary
          </Button>
          <Button variant="secondary">
            <MdHome className="text-[1.4em] mr-1" />
            Secondary
          </Button>
          <Button variant="success">
            <MdHome className="text-[1.4em] mr-1" />
            Success
          </Button>
          <Button variant="warning">
            <MdHome className="text-[1.4em] mr-1" />
            Warning
          </Button>
          <Button variant="error">
            <MdHome className="text-[1.4em] mr-1" />
            Error
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button variant="primary">
            Primary
            <MdHome className="text-[1.4em] ml-1" />
          </Button>
          <Button variant="secondary">
            Secondary
            <MdHome className="text-[1.4em] ml-1" />
          </Button>
          <Button variant="success">
            Success
            <MdHome className="text-[1.4em] ml-1" />
          </Button>
          <Button variant="warning">
            Warning
            <MdHome className="text-[1.4em] ml-1" />
          </Button>
          <Button variant="error">
            Error
            <MdHome className="text-[1.4em] ml-1" />
          </Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">With custom classes</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button className="bg-black hover:bg-gray-300 hover:text-black">
            Click
          </Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">bordered</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button bordered variant="primary">
            Primary
          </Button>
          <Button bordered variant="secondary">
            Secondary
          </Button>
          <Button bordered variant="success">
            Success
          </Button>
          <Button bordered variant="warning">
            Warning
          </Button>
          <Button bordered variant="error">
            Error
          </Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">Rounded</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button rounded variant="primary">
            Primary
          </Button>
          <Button rounded variant="secondary">
            Secondary
          </Button>
          <Button rounded variant="success">
            Success
          </Button>
          <Button rounded variant="warning">
            Warning
          </Button>
          <Button rounded variant="error">
            Error
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button rounded size="xs">
            Primary
          </Button>
          <Button rounded size="sm">
            Secondary
          </Button>
          <Button rounded size="md">
            Success
          </Button>
          <Button rounded size="lg">
            Warning
          </Button>
          <Button rounded size="xl">
            Error
          </Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">As link</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button as="a">This is link</Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">Loading</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button loading variant="primary">
            Primary
          </Button>
          <Button loading variant="secondary">
            Secondary
          </Button>
          <Button loading variant="success">
            Success
          </Button>
          <Button loading variant="warning">
            Warning
          </Button>
          <Button loading variant="error">
            Error
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button loading size="xs">
            Primary
          </Button>
          <Button loading size="sm">
            Secondary
          </Button>
          <Button loading size="md">
            Success
          </Button>
          <Button loading size="lg">
            Warning
          </Button>
          <Button loading size="xl">
            Error
          </Button>
        </div>

        <h2 className="mt-4 text-lg font-bold">Block</h2>
        <div className="mt-3 flex items-center justify-start gap-4">
          <Button variant="primary" block>
            Primary
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonExample
