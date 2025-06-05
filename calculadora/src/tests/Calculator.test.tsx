import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculator'

describe('Calculator integracion', () => {
  it('operacion: 2 + 3 = 5', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display')).toHaveTextContent('5')
  })
})