import ReviewCard from './ReviewCard.jsx';
import { REV } from '../data/index.js';
export default function ReviewsPreview() {
  return (
    <section className="sec"><div className="w">
      <div className="hd bar"><div><span className="eyebrow">Reviews</span><h2>What Our Customers Say</h2></div><a className="btn s" href="#/reviews">View All Reviews</a></div>
      <div className="g3">{REV.slice(0, 3).map((r) => <ReviewCard key={r.n} r={r} />)}</div>
      <p className="note mt">Demo reviews shown — replace with genuine customer reviews.</p>
    </div></section>
  );
}
