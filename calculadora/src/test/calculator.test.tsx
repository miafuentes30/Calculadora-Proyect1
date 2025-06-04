import { describe, it, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Calculator from '../components/Calculator'

describe('Calculadora - Operaciones simples', () => {
  it('debe sumar correctamente 2 + 3 = 5', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByRole('2'))
    fireEvent.click(screen.getByRole('+'))
    fireEvent.click(screen.getByRole('3'))
    fireEvent.click(screen.getByRole('='))

    expect(screen.getByTestId('display')).toHaveTextContent('5')
  })

  it('debe multiplicar correctamente 6 * 7 = 42', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByRole('6'))
    fireEvent.click(screen.getByRole('*'))
    fireEvent.click(screen.getByRole('7'))
    fireEvent.click(screen.getByRole('='))

    expect(screen.getByTestId('display')).toHaveTextContent('42')
  })
})
