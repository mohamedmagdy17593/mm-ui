import Button from '../Button/Button'
import Tooltip from './Tooltip'

function TooltipExample() {
  return (
    <div>
      <h1 className="text-4xl">Tooltips</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Tooltips sides</h2>
        <div className="mt-3 ml-32 flex items-center justify-start gap-4">
          <Tooltip side="top" content={'this is tooltip content'}>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip side="right" content={'this is tooltip content'}>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip side="bottom" content={'this is tooltip content'}>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip side="left" content={'this is tooltip content'}>
            <Button>Left</Button>
          </Tooltip>
        </div>

        <h2 className="mt-16 text-lg font-bold">Tooltips aligns</h2>
        <div className="mt-3 ml-32 flex items-center justify-start gap-4">
          <Tooltip side="top" align="start" content={'this is tooltip content'}>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip side="top" align="end" content={'this is tooltip content'}>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip
            side="top"
            align="center"
            content={'this is tooltip content'}
          >
            <Button>Bottom</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default TooltipExample
