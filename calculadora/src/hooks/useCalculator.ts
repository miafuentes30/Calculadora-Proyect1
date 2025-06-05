import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const MAX_DISPLAY_LENGTH = 9
  const MAX_VALUE = 999999999
  const inputDigit = (digit: string) => {
    if (display.length >= MAX_DISPLAY_LENGTH) return
    
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }
  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }

    if (!display.includes('.')) {
      if (display.length < MAX_DISPLAY_LENGTH) {
        setDisplay(display + '.')
      }
    }
  }
  const toggleSign = () => {
    if (display === '0') return
    
    if (display.startsWith('-')) {
      if (display.length - 1 <= MAX_DISPLAY_LENGTH) {
        setDisplay(display.substring(1))
      }
    } else {
      if (display.length + 1 <= MAX_DISPLAY_LENGTH) {
        setDisplay('-' + display)
      }
    }
  }
  const clear = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (storedValue === null) {
      setStoredValue(inputValue)
    } else if (operation) {
      const result = calculate(storedValue, inputValue, operation)
      
      if (result < 0 || result > MAX_VALUE) {
        setDisplay('ERROR')
        setStoredValue(null)
      } else {
        const resultStr = result.toString()
        setDisplay(resultStr.length > MAX_DISPLAY_LENGTH ? 'ERROR' : resultStr)
        setStoredValue(result)
      }
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const inputOperator = (op: string) => {
    performOperation(op)
  }

  const inputEquals = () => {
    if (storedValue === null || operation === null) return
    const inputValue = parseFloat(display)
    const result = calculate(storedValue, inputValue, operation)

    if (result < 0 || result > MAX_VALUE) {
      setDisplay('ERROR')
    } else {
      const resultStr = result.toString()
      setDisplay(resultStr.length > MAX_DISPLAY_LENGTH ? 'ERROR' : resultStr)
    }
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(true)
  }
  const calculate = (firstOperand: number, secondOperand: number, operation: string): number => {
    switch (operation) {
      case '+': return firstOperand + secondOperand
      case '-': return firstOperand - secondOperand
      case '*': return firstOperand * secondOperand
      case '/': //si sale error es por el requirimiento de un numero limitado
        if (secondOperand === 0) return NaN
        return firstOperand / secondOperand
      case '%': 
        if (secondOperand === 0) return NaN
        return ((firstOperand % secondOperand) + secondOperand) % secondOperand
      default: return secondOperand
    }
  }
  return {
    display,
    inputDigit,
    inputDot,
    toggleSign,
    clear,
    inputOperator,
    inputEquals,
  }
}