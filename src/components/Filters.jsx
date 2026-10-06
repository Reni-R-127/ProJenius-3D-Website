export default function Filters({ items, value, onChange }) {
  return (
    <div className="flt">
      {items.map((c) => <button key={c} className={c === value ? 'on' : ''} onClick={() => onChange(c)}>{c}</button>)}
    </div>
  );
}
