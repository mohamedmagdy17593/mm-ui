import clsx from 'clsx'
import React from 'react'

type TableColumn<T = any> = {
  key?: any
  columnKey?: React.Key
  title?: React.ReactNode
  render?: (arg: T) => React.ReactNode
  className?: string
}

type TableProps<T = any> = {
  data: T[]
  columns: TableColumn<T>[]
  rowKey?: string
  striped?: boolean
  size?: 'sm' | 'md' | 'lg'
}

function Table<T = any>({
  columns,
  data,
  rowKey = 'id',
  striped = false,
  size = 'md',
}: TableProps<T>) {
  let sizeClass = clsx({
    'py-2': size === 'sm',
    'py-3': size === 'md',
    'py-5': size === 'lg',
  })

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-neutral-200 sm:rounded-md">
            <table className=" min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  {columns.map((col) => {
                    return (
                      <th
                        key={col.key}
                        scope="col"
                        className={`px-6 ${sizeClass} text-left text-xs font-medium text-neutral-500 uppercase tracking-wider`}
                      >
                        {col.title}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {data.map((item, index) => (
                  <tr
                    // @ts-ignore
                    key={item[rowKey]}
                    className={clsx({
                      [index % 2 === 0 ? 'bg-white' : 'bg-neutral-50']: striped,
                    })}
                  >
                    {columns.map((col) => {
                      return (
                        <td
                          key={col.columnKey ?? col.key}
                          className={clsx(
                            `px-6 ${sizeClass} whitespace-nowrap text-sm font-medium text-neutral-900`,
                            col.className,
                          )}
                        >
                          {col.render?.(item) ??
                            // @ts-ignore
                            item[col.key]}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
