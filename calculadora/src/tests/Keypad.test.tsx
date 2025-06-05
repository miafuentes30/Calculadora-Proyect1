import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Keypad from '../components/Keypad'

describe('Keypad', () => {
  it('clik a las llamadas a inputDigit', () => {
    const inputDigit = vi.fn()
    render(
      <Keypad
        inputDigit={inputDigit}
        inputDot={() => {}}
        inputOperator={() => {}}
        inputEquals={() => {}}
        toggleSign={() => {}}
        clear={() => {}}
      />
    )
    fireEvent.click(screen.getByText('7'))
    expect(inputDigit).toHaveBeenCalledWith('7')
  })
})
