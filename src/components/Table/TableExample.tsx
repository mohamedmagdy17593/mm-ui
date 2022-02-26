import Table from './Table'

function TableExample() {
  return (
    <div>
      <h1 className="text-4xl">Tables</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold">Table</h2>
        <div className="mt-3">
          <Table
            columns={[
              {
                key: 'name',
                title: 'Name',
              },
              {
                key: 'title',
                title: 'Title',
              },
              {
                key: 'email',
                title: 'Email',
              },
              {
                columnKey: 'actions',
                className: 'text-sm font-medium',
                render(item) {
                  return (
                    <>
                      <button
                        onClick={() => alert(`edit ${item.name}`)}
                        className="text-cyan-600 hover:text-cyan-900"
                      >
                        Edit
                      </button>
                    </>
                  )
                },
              },
            ]}
            data={[
              {
                name: 'Mohamed Magdi',
                title: 'Software Engineer',
                email: 'magdi@magdi.com',
              },
              {
                name: 'Ahmed Samer',
                title: 'Pharmacist',
                email: 'samer@samer.com',
              },
              {
                name: 'Aya Ahmed',
                title: 'Pharmacist',
                email: 'aya@aya.com',
              },
            ]}
          />
        </div>

        <h2 className="mt-16 text-lg font-bold">Striped Table</h2>
        <div className="mt-3 ">
          <Table
            striped
            columns={[
              {
                key: 'name',
                title: 'Name',
              },
              {
                key: 'title',
                title: 'Title',
              },
              {
                key: 'email',
                title: 'Email',
              },
              {
                columnKey: 'actions',
                className: 'text-sm font-medium',
                render(item) {
                  return (
                    <>
                      <button
                        onClick={() => alert(`edit ${item.name}`)}
                        className="text-cyan-600 hover:text-cyan-900"
                      >
                        Edit
                      </button>
                    </>
                  )
                },
              },
            ]}
            data={[
              {
                name: 'Mohamed Magdi',
                title: 'Software Engineer',
                email: 'magdi@magdi.com',
              },
              {
                name: 'Ahmed Samer',
                title: 'Pharmacist',
                email: 'samer@samer.com',
              },
              {
                name: 'Aya Ahmed',
                title: 'Pharmacist',
                email: 'aya@aya.com',
              },
            ]}
          />
        </div>

        <h2 className="mt-16 text-lg font-bold">Sizes Table</h2>
        <div className="mt-3 flex flex-col gap-6">
          <Table
            size="sm"
            columns={[
              {
                key: 'name',
                title: 'Name',
              },
              {
                key: 'title',
                title: 'Title',
              },
              {
                key: 'email',
                title: 'Email',
              },
              {
                columnKey: 'actions',
                className: 'text-sm font-medium',
                render(item) {
                  return (
                    <>
                      <button
                        onClick={() => alert(`edit ${item.name}`)}
                        className="text-cyan-600 hover:text-cyan-900"
                      >
                        Edit
                      </button>
                    </>
                  )
                },
              },
            ]}
            data={[
              {
                name: 'Mohamed Magdi',
                title: 'Software Engineer',
                email: 'magdi@magdi.com',
              },
              {
                name: 'Ahmed Samer',
                title: 'Pharmacist',
                email: 'samer@samer.com',
              },
              {
                name: 'Aya Ahmed',
                title: 'Pharmacist',
                email: 'aya@aya.com',
              },
            ]}
          />
          <Table
            size="md"
            columns={[
              {
                key: 'name',
                title: 'Name',
              },
              {
                key: 'title',
                title: 'Title',
              },
              {
                key: 'email',
                title: 'Email',
              },
              {
                columnKey: 'actions',
                className: 'text-sm font-medium',
                render(item) {
                  return (
                    <>
                      <button
                        onClick={() => alert(`edit ${item.name}`)}
                        className="text-cyan-600 hover:text-cyan-900"
                      >
                        Edit
                      </button>
                    </>
                  )
                },
              },
            ]}
            data={[
              {
                name: 'Mohamed Magdi',
                title: 'Software Engineer',
                email: 'magdi@magdi.com',
              },
              {
                name: 'Ahmed Samer',
                title: 'Pharmacist',
                email: 'samer@samer.com',
              },
              {
                name: 'Aya Ahmed',
                title: 'Pharmacist',
                email: 'aya@aya.com',
              },
            ]}
          />
          <Table
            size="lg"
            columns={[
              {
                key: 'name',
                title: 'Name',
              },
              {
                key: 'title',
                title: 'Title',
              },
              {
                key: 'email',
                title: 'Email',
              },
              {
                columnKey: 'actions',
                className: 'text-sm font-medium',
                render(item) {
                  return (
                    <>
                      <button
                        onClick={() => alert(`edit ${item.name}`)}
                        className="text-cyan-600 hover:text-cyan-900"
                      >
                        Edit
                      </button>
                    </>
                  )
                },
              },
            ]}
            data={[
              {
                name: 'Mohamed Magdi',
                title: 'Software Engineer',
                email: 'magdi@magdi.com',
              },
              {
                name: 'Ahmed Samer',
                title: 'Pharmacist',
                email: 'samer@samer.com',
              },
              {
                name: 'Aya Ahmed',
                title: 'Pharmacist',
                email: 'aya@aya.com',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default TableExample
