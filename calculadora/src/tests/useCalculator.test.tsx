import { describe, it, expect } from 'vitest'
import { renderHook} from '@testing-library/react'
import { useCalculator } from '../hooks/useCalculator'

describe('useCalculator', () => {
  it('iniciar con el teclaco en 0', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })
})
