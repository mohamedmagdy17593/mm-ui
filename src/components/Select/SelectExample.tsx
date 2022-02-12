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
            placeholder="placeholder"
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
              { value: '4', label: 'Benedict Kessler', disabled: true },
              { value: '5', label: 'Katelyn Rohan', disabled: false },
            ]}
          ></Select>
        </div>

        <h2 className="mt-16 text-lg font-bold">Select with big list</h2>
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
              { value: '6', label: 'Durward Reynolds', disabled: false },
              { value: '7', label: 'Kenton Towne', disabled: false },
              { value: '8', label: 'Therese Wunsch', disabled: false },
              { value: '9', label: 'Benedict Kessler', disabled: true },
              { value: '10', label: 'Katelyn Rohan', disabled: false },
              { value: '11', label: 'Durward Reynolds', disabled: false },
              { value: '12', label: 'Kenton Towne', disabled: false },
              { value: '13', label: 'Therese Wunsch', disabled: false },
              { value: '14', label: 'Benedict Kessler', disabled: true },
              { value: '15', label: 'Katelyn Rohan', disabled: false },
              { value: '16', label: 'Durward Reynolds', disabled: false },
              { value: '17', label: 'Kenton Towne', disabled: false },
              { value: '18', label: 'Therese Wunsch', disabled: false },
              { value: '19', label: 'Benedict Kessler', disabled: true },
              { value: '20', label: 'Benedict Kessler', disabled: true },
              { value: '21', label: 'Katelyn Rohan', disabled: false },
              { value: '22', label: 'Durward Reynolds', disabled: false },
              { value: '23', label: 'Kenton Towne', disabled: false },
              { value: '24', label: 'Therese Wunsch', disabled: false },
              { value: '25', label: 'Benedict Kessler', disabled: true },
              { value: '26', label: 'Katelyn Rohan', disabled: false },
              { value: '27', label: 'Katelyn Rohan', disabled: false },
              { value: '28', label: 'Durward Reynolds', disabled: false },
              { value: '29', label: 'Kenton Towne', disabled: false },
              { value: '30', label: 'Therese Wunsch', disabled: false },
              { value: '31', label: 'Benedict Kessler', disabled: true },
              { value: '32', label: 'Katelyn Rohan', disabled: false },
              { value: '33', label: 'Katelyn Rohan', disabled: false },
              { value: '34', label: 'Katelyn Rohan', disabled: false },
              { value: '35', label: 'Durward Reynolds', disabled: false },
              { value: '36', label: 'Kenton Towne', disabled: false },
              { value: '37', label: 'Therese Wunsch', disabled: false },
              { value: '38', label: 'Benedict Kessler', disabled: true },
              { value: '39', label: 'Katelyn Rohan', disabled: false },
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
