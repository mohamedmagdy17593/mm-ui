import Input from './Select'
import { MdHome, MdError, MdSearch, MdSort } from 'react-icons/md'
import Button from '../Button/Button'
import Select from './Select'

function SelectExample() {
  return (
    <div>
      <h1 className="text-4xl">Selects</h1>

      <div className="ml-4">
        <h2 className="mt-4 text-lg font-bold">Select</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Select></Select>
        </div>
      </div>
    </div>
  )
}

export default SelectExample
