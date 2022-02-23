import Tabs from './Tabs'

function TabExample() {
  return (
    <div>
      <h1 className="text-4xl">Tabs</h1>

      <div className="ml-4">
        <h2 className="mt-16 text-lg font-bold"></h2>
        <div className="mt-3">
          <Tabs
            items={[
              {
                label: 'Gallery',
                content: (
                  <>
                    <h1>Gallery</h1>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto rem accusamus reprehenderit molestiae incidunt, sunt
                      consequatur sit! Vel laboriosam minus esse nostrum
                      consequuntur dignissimos magnam debitis quas, magni facere
                      at.
                    </p>
                  </>
                ),
              },
              {
                label: 'Setting',
                content: (
                  <>
                    <h1>Settings</h1>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto rem accusamus reprehenderit molestiae incidunt, sunt
                      consequatur sit! Vel laboriosam minus esse nostrum
                      consequuntur dignissimos magnam debitis quas, magni facere
                      at.
                    </p>
                  </>
                ),
              },
              {
                label: 'Messages',
                content: (
                  <>
                    <h1>Messages</h1>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto rem accusamus reprehenderit molestiae incidunt, sunt
                      consequatur sit! Vel laboriosam minus esse nostrum
                      consequuntur dignissimos magnam debitis quas, magni facere
                      at.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default TabExample
