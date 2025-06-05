export default function Display({ value }: { value: string }) {
  return (
    <div
      data-testid="display"
      className="
        bg-black text-lime-400 text-right text-4xl p-4 rounded-xl mb-4
        overflow-hidden transition-all duration-300 ease-in-out shadow-inner
      "
    >
      {value}
    </div>
  )
}
