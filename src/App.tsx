import ButtonExample from './components/Button/ButtonExample'
import InputExample from './components/Input/InputExample'
import SelectExample from './components/Select/SelectExample'
import TooltipExample from './components/Tooltip/TooltipExample'

function App() {
  return (
    <div className="p-4 flex flex-col gap-36 mb-[600px]">
      <ButtonExample />

      <InputExample />

      <SelectExample />

      <TooltipExample />
    </div>
  )
}

export default App
