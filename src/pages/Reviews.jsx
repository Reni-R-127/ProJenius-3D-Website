import PageHeader from '../components/PageHeader.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import { REV } from '../data/index.js';
export default function Reviews() {
  return <>
    <PageHeader eyebrow="Reviews" title="What Our Customers Say" text="Demo reviews — to be replaced with genuine customer feedback." />
    <section className="sec"><div className="w g3">{REV.map((r) => <ReviewCard key={r.n} r={r} />)}</div></section>
  </>;
}
