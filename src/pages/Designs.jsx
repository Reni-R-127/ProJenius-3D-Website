import { useContext, useState } from 'react';
import { UI } from '../context.js';
import PageHeader from '../components/PageHeader.jsx';
import Filters from '../components/Filters.jsx';
import DesignCard from '../components/DesignCard.jsx';
import { CATS, DESIGNS } from '../data/index.js';
export default function Designs() {
  const { designer } = useContext(UI);
  const [cat, setCat] = useState('All');
  const list = DESIGNS.filter((d) => cat === 'All' || d.c === cat);
  return <>
    <PageHeader eyebrow="Design Catalog" title="Explore 3D Designs" text="Browse printable designs and request a print. Demo data — ready to connect to a backend." />
    <section className="sec"><div className="w">
      <Filters items={['All', ...CATS]} value={cat} onChange={setCat} />
      <div className="g4">{list.length ? list.map((d) => <DesignCard key={d.id} d={d} />) : <p className="lead">No designs in this category yet.</p>}</div>
      <div className="card sbox"><div><h3 className="big3">Are You a 3D Designer?</h3><p>Share your designs with the ProJenius community and make them available for physical printing.</p></div><button className="btn p" onClick={designer}>Submit Your Design</button></div>
    </div></section>
  </>;
}
