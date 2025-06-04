import Keypad from '../components/Keypad'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Keypad',
  component: Keypad
}

export default meta

export const Default = () => (
  <Keypad
    inputDigit={(d: string) => console.log('Digit:', d)}
    inputDot={() => console.log('Dot')}
    inputOperator={(op: string) => console.log('Op:', op)}
    inputEquals={() => console.log('Equals')}
    toggleSign={() => console.log('Toggle')}
    clear={() => console.log('Clear')}
  />
)