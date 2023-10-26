import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import App from '../App'
describe('<App/>', () => {

    test('should add item and remove them', async () => {
        // crear el usuario
        const user = userEvent.setup()

        render(<App />)

        //buscar el input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        //buscar el form
        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        const button = form.querySelector('button')
        expect(button).toBeDefined()

        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(button!)

        // asegurar que el elemento se haya agregado
        const list = screen.getByRole('list')
        expect(list).toBeDefined()
        expect(list.childNodes.length).toBe(1)

        // asegurar que el elemento se haya borrado
        const item = screen.getByText(randomText)
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)

        // Confirmar lista vacía
        const noResult = screen.getByText('No hay elemento en la lista.')
        expect(noResult).toBeDefined()
    })
})