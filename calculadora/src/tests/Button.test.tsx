import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('Button', () => {
  it('llamadas cuando el boton es clickedo', () => {
    const handleClick = vi.fn()
    render(<Button label="5" onClick={handleClick} />)
    fireEvent.click(screen.getByText('5'))
    expect(handleClick).toHaveBeenCalled()
  })
})
