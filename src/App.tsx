import ButtonExample from './components/Button/ButtonExample'
import CheckboxExample from './components/Checkbox/CheckboxExample'
import InputExample from './components/Input/InputExample'
import SelectExample from './components/Select/SelectExample'
import SwitchExample from './components/Switch/SwitchExample'
import TooltipExample from './components/Tooltip/TooltipExample'
import DropdownExample from './components/Dropdown/DropdownExample'
import ModalExample from './components/Modal/ModalExample'
import TabsExample from './components/Tabs/TabsExample'
import DatePickerExample from './components/Datepicker/DatepickerExample'
import TableExample from './components/Table/TableExample'
import RadioGroupExample from './components/RadioGroup/RadioGroupExample'

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

      <ModalExample />

      <TabsExample />

      <DatePickerExample />

      <TableExample />

      <RadioGroupExample />
    </div>
  )
}

export default App
