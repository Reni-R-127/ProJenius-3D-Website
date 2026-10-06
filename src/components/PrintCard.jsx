import Thumb from './Thumb.jsx';
export default function PrintCard({ item, i }) {
  return (
    <div className="pc fade">
      <div className="thumb"><Thumb i={i} /></div>
      <div className="b"><span className="cat">{item.c}</span><h3>{item.n}</h3><div className="m">{item.m}</div></div>
    </div>
  );
}
