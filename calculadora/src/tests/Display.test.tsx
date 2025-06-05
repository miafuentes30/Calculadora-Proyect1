import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Display from '../components/Display'

describe('Display', () => {
  it('no mostrar si es mayor a 9 caracteres', () => {
    const longValue = '1234567890123'
    const expected = longValue.slice(0, 9)
    render(<Display value={expected} />)
    expect(screen.getByTestId('display')).toHaveTextContent(expected)
  })
})
