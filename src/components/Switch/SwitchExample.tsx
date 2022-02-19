import { useState } from 'react'
import Switch from './Switch'

function SwitchExample() {
  let [value, setValue] = useState(false)

  return (
    <div>
      <h1 className="text-4xl">Switches</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Sizes</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Switch size="sm" />
          <Switch size="md" />
          <Switch size="lg" />
        </div>

        <h2 className="mt-16 text-lg font-bold">With labels</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Switch size="sm" label={'Small'} />
          <Switch size="md" label={'Medium(Default)'} />
          <Switch size="lg" label={'Large'} />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Variant</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Switch variant="primary" label={'primary'} />
          <Switch variant="secondary" label={'secondary'} />
          <Switch variant="success" label={'success'} />
          <Switch variant="error" label={'Error'} />
          <Switch variant="warning" label={'Warning'} />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Variant Checked</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Switch defaultChecked variant="primary" />
          <Switch defaultChecked variant="secondary" />
          <Switch defaultChecked variant="success" />
          <Switch defaultChecked variant="error" />
          <Switch defaultChecked variant="warning" />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Variant disabled</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Switch disabled variant="primary" label={'disabled primary'} />
          <Switch disabled variant="secondary" label={'disabled Secondary'} />
          <Switch disabled variant="success" label={'disabled Success'} />
          <Switch disabled variant="error" label={'disabled Error'} />
          <Switch disabled variant="warning" label={'disabled Warning'} />
        </div>

        <h2 className="mt-16 text-lg font-bold">Controlled</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Switch
            checked={value}
            onChange={(v) => setValue(v)}
            label={'Controlled switch'}
          />
          <Switch
            checked={value}
            onChange={(v) => setValue(v)}
            variant="secondary"
            label={'Controlled switch'}
          />
          <Switch
            checked={value}
            onChange={(v) => setValue(v)}
            variant="success"
            label={'Controlled switch'}
          />
          <Switch
            checked={value}
            onChange={(v) => setValue(v)}
            variant="error"
            label={'Controlled switch'}
          />
          <Switch
            checked={value}
            onChange={(v) => setValue(v)}
            variant="warning"
            label={'Controlled switch'}
          />
        </div>
      </div>
    </div>
  )
}

export default SwitchExample
