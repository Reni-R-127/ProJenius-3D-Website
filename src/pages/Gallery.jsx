import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Filters from '../components/Filters.jsx';
import PrintCard from '../components/PrintCard.jsx';
import { GAL } from '../data/index.js';
const F = ['All', 'Robotics', 'Electronics', 'Mechanical', 'Education', 'Creative', 'Custom'];
export default function Gallery() {
  const [f, setF] = useState('All');
  return <>
    <PageHeader eyebrow="Gallery" title="Printed by ProJenius" text="Selected prints across robotics, electronics, mechanical, education and custom work. Sample images shown." />
    <section className="sec"><div className="w">
      <Filters items={F} value={f} onChange={setF} />
      <div className="mas">{GAL.map((g, i) => (f === 'All' || g.c === f) && <PrintCard key={g.n} item={g} i={i} />)}</div>
    </div></section>
  </>;
}
