import ButtonExample from './components/Button/ButtonExample'
import CheckboxExample from './components/Checkbox/CheckboxExample'
import InputExample from './components/Input/InputExample'
import SelectExample from './components/Select/SelectExample'
import SwitchExample from './components/Switch/SwitchExample'
import TooltipExample from './components/Tooltip/TooltipExample'
import DropdownExample from './components/Dropdown/DropdownExample'

function App() {
  return (
    <div className="p-4 flex flex-col gap-36 mb-[600px] max-w-4xl container mx-auto">
      <ButtonExample />

      <InputExample />

      <SelectExample />

      <TooltipExample />

      <CheckboxExample />

      <SwitchExample />

      <DropdownExample />
    </div>
  )
}

export default App
