export default function Button({ label, onClick }: { label: string, onClick: () => void }) {
  
  const getButtonClass = () => {
    if (label === '0') return 'button button-zero';
    if (label === '=') return 'button button-equals';
    if (['C', '+/-', '%'].includes(label)) return 'button button-special';
    if (['+', '-', '*', '/'].includes(label)) return 'button button-operator';
    return 'button button-number';
  };

  return (
    <button 
      className={getButtonClass()}
      onClick={onClick}
    >
      {label}
    </button>
  )
}