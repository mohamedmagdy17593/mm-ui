import Input from './Select'
import { MdHome, MdError, MdSearch, MdSort } from 'react-icons/md'
import Button from '../Button/Button'
import Select from './Select'
import { useState } from 'react'

function SelectExample() {
  let [value, setValue] = useState('1')

  return (
    <div>
      <h1 className="text-4xl">Selects</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Select</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Select
            value={value}
            onChange={(value) => setValue(value)}
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
              { value: '4', label: 'Benedict Kessler', disabled: true },
              { value: '5', label: 'Katelyn Rohan', disabled: false },
            ]}
          ></Select>
        </div>

        <h2 className="mt-16 text-lg font-bold">Select with loading</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Select
            loading
            value={value}
            onChange={(value) => setValue(value)}
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
              { value: '4', label: 'Benedict Kessler', disabled: true },
              { value: '5', label: 'Katelyn Rohan', disabled: false },
            ]}
          ></Select>
        </div>
      </div>
    </div>
  )
}

export default SelectExample
