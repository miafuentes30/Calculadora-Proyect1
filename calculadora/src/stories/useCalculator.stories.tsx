import { useCalculator } from '../hooks/useCalculator'
import type { Meta, StoryObj } from '@storybook/react'

const HookDemo = () => {
  const calc = useCalculator()
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Calculator Hook Demo</h2>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        Display: {calc.display}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', maxWidth: '200px' }}>
        <button onClick={() => calc.inputDigit('1')}>1</button>
        <button onClick={() => calc.inputDigit('2')}>2</button>
        <button onClick={() => calc.inputDigit('3')}>3</button>
        <button onClick={() => calc.inputOperator('+')}>+</button>
        <button onClick={() => calc.inputDigit('4')}>4</button>
        <button onClick={() => calc.inputDigit('5')}>5</button>
        <button onClick={() => calc.inputDigit('6')}>6</button>
        <button onClick={() => calc.inputOperator('-')}>-</button>
        <button onClick={() => calc.inputDigit('7')}>7</button>
        <button onClick={() => calc.inputDigit('8')}>8</button>
        <button onClick={() => calc.inputDigit('9')}>9</button>
        <button onClick={() => calc.inputOperator('*')}>*</button>
        <button onClick={() => calc.inputDigit('0')}>0</button>
        <button onClick={() => calc.inputDot()}>.</button>
        <button onClick={() => calc.inputEquals()}>=</button>
        <button onClick={() => calc.clear()}>C</button>
      </div>
    </div>
  )
}

const meta: Meta<typeof HookDemo> = {
  title: 'Hooks/useCalculator',
  component: HookDemo,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}