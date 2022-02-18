import Checkbox from './Checkbox'

function CheckboxExample() {
  return (
    <div>
      <h1 className="text-4xl">Checkboxs</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Sizes</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="lg" />
        </div>

        <h2 className="mt-16 text-lg font-bold">With labels</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Checkbox size="sm" label={'Small'} />
          <Checkbox size="md" label={'Medium(Default)'} />
          <Checkbox size="lg" label={'Large'} />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Variant</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Checkbox variant="primary" label={'primary'} />
          <Checkbox variant="secondary" label={'secondary'} />
          <Checkbox variant="success" label={'success'} />
          <Checkbox variant="error" label={'Error'} />
          <Checkbox variant="warning" label={'Warning'} />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Variant Checked</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Checkbox defaultChecked variant="primary" />
          <Checkbox defaultChecked variant="secondary" />
          <Checkbox defaultChecked variant="success" />
          <Checkbox defaultChecked variant="error" />
          <Checkbox defaultChecked variant="warning" />
        </div>

        <h2 className="mt-16 text-lg font-bold">With Variant disabled</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Checkbox disabled variant="primary" label={'disabled primary'} />
          <Checkbox disabled variant="secondary" label={'disabled Secondary'} />
          <Checkbox disabled variant="success" label={'disabled Success'} />
          <Checkbox disabled variant="error" label={'disabled Error'} />
          <Checkbox disabled variant="warning" label={'disabled Warning'} />
        </div>

        <h2 className="mt-16 text-lg font-bold">Rounded</h2>
        <div className="mt-3 flex flex-col gap-4">
          <Checkbox rounded size="sm" />
          <Checkbox rounded size="md" />
          <Checkbox rounded size="lg" />
        </div>
      </div>
    </div>
  )
}

export default CheckboxExample
