import './App.css'
import { Items } from './components/Items'
import { useItem } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'


export type ItemId = `${string}-${string}-${string}-${string}-${string}`
export interface Item {
  id: ItemId,
  text: string
}

function App() {
  const { items, addItem, removeItem } = useItem()
  useSEO({
    title: `[${items.length}] Prueba técnica de react`,
    description: 'Agrega un elemento a una lista'
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    addItem(input.value)

    input.value = ''
  }

  // Funcion que crea una funcion para remover el element
  const handleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba técnica</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label='agregar elementos a la lista'>
          <label htmlFor="">
            Agregar elemento:
            <input
              name='item'
              required
              type="text"
              placeholder='Agregar elemento'
            />
          </label>
          <button>Añadir elemento</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>

        {items.length === 0

          ? (
            <p>
              <strong>No hay elemento en la lista.</strong>
            </p>
          )

          : (
            <ul>
              {
                items.map((item) => {
                  return (
                    <Items
                      key={item.id}
                      {...item}
                      handleClick={handleRemoveItem(item.id)}
                    />
                  )
                })
              }
            </ul>
          )

        }



      </section>
    </main>
  )
}

export default App
