import Button from '../Button/Button'
import Dropdown from './Dropdown'
import { BiCaretDown } from 'react-icons/bi'
import { MdHome } from 'react-icons/md'

function DropdownExample() {
  return (
    <div>
      <h1 className="text-4xl">Dropdowns</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Dropdowns</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Dropdown
            items={[
              { label: 'Edit', onClick: () => alert('Edit') },
              { label: 'Duplicate', onClick: () => alert('Duplicate') },
              {
                type: 'divider',
              },
              { label: 'Archive', onClick: () => alert('Archive') },
              { label: 'Move', onClick: () => alert('Move') },
            ]}
          >
            <Button as={Dropdown.Button}>
              Dropdown <BiCaretDown className="text-[1.4em] ml-1" />
            </Button>
          </Dropdown>
        </div>

        <h2 className="mt-16 text-lg font-bold">Dropdowns with icons</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Dropdown
            items={[
              {
                label: (
                  <>
                    <MdHome className="text-[1.4em] mr-1" /> Edit
                  </>
                ),
                onClick: () => alert('Edit'),
              },
              {
                label: (
                  <>
                    <MdHome className="text-[1.4em] mr-1" /> Duplicate
                  </>
                ),
                onClick: () => alert('Duplicate'),
              },
              {
                type: 'divider',
              },
              {
                label: (
                  <>
                    <MdHome className="text-[1.4em] mr-1" /> Move
                  </>
                ),
                onClick: () => alert('Move'),
              },
              {
                label: (
                  <>
                    <MdHome className="text-[1.4em] mr-1" /> Archive
                  </>
                ),
                onClick: () => alert('Archive'),
              },
            ]}
          >
            <Button as={Dropdown.Button}>
              Dropdown <BiCaretDown className="text-[1.4em] ml-1" />
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default DropdownExample
