import Thumb from './Thumb.jsx';
export default function DesignCard({ d }) {
  return (
    <div className="pc fade">
      <div className="thumb"><Thumb i={d.id} /></div>
      <div className="b">
        <span className="cat">{d.c}</span><h3>{d.n}</h3><div className="m">by {d.d}</div>
        <div className="rate"><span className="star">★</span>{d.r} · <span className="price">From ₹{d.p} <small>(quote)</small></span></div>
        <div className="row2"><a className="btn t sm" href={'#/designs/' + d.id}>View Design</a><a className="btn p sm" href={'#/designs/' + d.id}>Print This</a></div>
      </div>
    </div>
  );
}
