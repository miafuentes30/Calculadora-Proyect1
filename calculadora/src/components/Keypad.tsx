import Button from './Button'
export default function Keypad(p: {
  inputDigit: (d: string) => void, inputDot: () => void, inputOperator: (o: string) => void, inputEquals: () => void
  toggleSign: () => void, clear: () => void
}) {
  const click = (k: string) =>
    !isNaN(Number(k)) ? p.inputDigit(k)
    : k === '.' ? p.inputDot()
    : k === 'C' ? p.clear()
    : k === '+/-' ? p.toggleSign()
    : k === '=' ? p.inputEquals()
    : p.inputOperator(k)
  const rows = [
    ['C', '+/-', '%', '/'], ['7', '8', '9', '*'],
    ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '='] ]
  return (
    <> {rows.map((r, i) => (
        <div key={i} className={i < 4 ? 'grid grid-cols-4 gap-2' : 'last-row'}>
          {r.map(k => ( <Button key={k} label={k} onClick={() => click(k)} /> ))} </div> ))} </> ) }