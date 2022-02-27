import { useState } from 'react'
import RadioGroup from './RadioGroup'

function RadioGroupExample() {
  let [value, setValue] = useState<any>()

  return (
    <div>
      <h1 className="text-4xl">Radio Groups</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Radio Group</h2>
        <div className="mt-3 flex flex-col gap-4">
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
          />
        </div>

        <h2 className="mt-16 text-lg font-bold">Radio Group Inline</h2>
        <div className="mt-3 flex flex-col gap-4">
          <RadioGroup
            inline
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
          />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Sizes</h2>
        <div className="mt-3 flex flex-col gap-4">
          <RadioGroup
            size="sm"
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
          />
          <RadioGroup
            size="md"
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
          />
          <RadioGroup
            size="lg"
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
          />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Variant</h2>
        <div className="mt-3 flex flex-col gap-4">
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="primary"
          />
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="secondary"
          />
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="success"
          />
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="error"
          />
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="warning"
          />
        </div>

        <h2 className="mt-16 text-lg font-bold">Controlled</h2>
        <div className="mt-3 flex flex-col gap-4">
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="primary"
            value={value}
            onChange={setValue}
          />
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="secondary"
            value={value}
            onChange={setValue}
          />
          <RadioGroup
            options={[
              { value: '1', label: 'Durward Reynolds', disabled: false },
              { value: '2', label: 'Kenton Towne', disabled: false },
              { value: '3', label: 'Therese Wunsch', disabled: false },
            ]}
            variant="success"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  )
}

export default RadioGroupExample
