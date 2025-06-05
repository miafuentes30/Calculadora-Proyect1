import Keypad from '../components/Keypad'
export default { component: Keypad, title: 'Keypad' }
export const Default = {
  args: {
    inputDigit: () => {},
    inputDot: () => {},
    inputOperator: () => {},
    inputEquals: () => {},
    toggleSign: () => {},
    clear: () => {},
  },
}