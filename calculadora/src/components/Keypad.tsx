import Button from './Button'

const keys = [
  ['C', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]


interface KeypadProps {
  inputDigit: (digit: string) => void
  inputDot: () => void
  inputOperator: (op: string) => void
  inputEquals: () => void
  toggleSign: () => void
  clear: () => void
}

export default function Keypad({
  inputDigit,
  inputDot,
  inputOperator,
  inputEquals,
  toggleSign,
  clear
}: KeypadProps) {
  const handleClick = (key: string) => {
    if (!isNaN(Number(key))) return inputDigit(key)
    if (key === '.') return inputDot()
    if (key === 'C') return clear()
    if (key === '+/-') return toggleSign()
    if (key === '=') return inputEquals()
    return inputOperator(key)
  }

  return (
    <div>
      {/* Primeras 4 filas */}
      <div className="grid grid-cols-4 gap-2">
        {keys.slice(0, 4).flat().map((key) => (
          <Button key={key} label={key} onClick={() => handleClick(key)} />
        ))}
      </div>
      
      {/* Ultima fila con layout*/}
      <div className="last-row">
        <Button label="0" onClick={() => handleClick('0')} />
        <Button label="." onClick={() => handleClick('.')} />
        <Button label="=" onClick={() => handleClick('=')} />
      </div>
    </div>
  )
}