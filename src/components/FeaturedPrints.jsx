import PrintCard from './PrintCard.jsx';
import { GAL } from '../data/index.js';
export default function FeaturedPrints() {
  return (
    <section className="sec alt"><div className="w">
      <div className="hd bar"><div><span className="eyebrow">Work</span><h2>Printed by ProJenius</h2></div><a className="btn s" href="#/gallery">View Full Gallery</a></div>
      <div className="g3">{GAL.slice(0, 6).map((g, i) => <PrintCard key={g.n} item={g} i={i} />)}</div>
    </div></section>
  );
}
