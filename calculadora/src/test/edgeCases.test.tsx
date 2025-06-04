import { describe, it, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Calculator from '../components/Calculator'

describe('Calculadora - Casos limite', () => {
  it('debe mostrar ERROR si el resultado es negativo', () => {
    const { getByText } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))

    expect(getByText('ERROR')).toBeTruthy()
  })

// edgeCases.test.tsx
  it('debe mostrar ERROR si el resultado es mayor a 999999999', () => {
    render(<Calculator />)
    const nineButton = screen.getByRole('button', { name: '9' })

    // Haz click 9 veces en el botón 9
    for (let i = 0; i < 9; i++) {
      fireEvent.click(nineButton)
    }
    
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    fireEvent.click(screen.getByRole('button', { name: '1' }))
    fireEvent.click(screen.getByRole('button', { name: '=' }))

    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })
})
