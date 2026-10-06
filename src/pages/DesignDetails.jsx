import { useContext } from 'react';
import { UI } from '../context.js';
import Thumb from '../components/Thumb.jsx';
import { Form, Row, Field, Select } from '../components/FormKit.jsx';
import { DESIGNS } from '../data/index.js';
export default function DesignDetails({ id }) {
  const { quote } = useContext(UI);
  const d = DESIGNS.find((x) => String(x.id) === id) || DESIGNS[0];
  const rows = [['Recommended material', d.m], ['Recommended use', d.u], ['Available colors', d.col.join(', ')], ['Approximate size', d.sz]];
  return (
    <section className="sec"><div className="w">
      <a href="#/designs" className="more back">← All designs</a>
      <div className="g2 top">
        <div className="pc"><div className="thumb sq"><Thumb i={d.id} /></div></div>
        <div>
          <span className="cat">{d.c}</span><h1 className="dh">{d.n}</h1>
          <p className="mut">by {d.d} · <span className="star">★</span> {d.r}</p>
          <p className="lead mb2">{d.u}</p>
          <div className="card pad0">{rows.map(([k, v]) => <div key={k} className="drow"><span>{k}</span><b>{v}</b></div>)}</div>
          <div className="fc mt2"><h3 className="fh">Print request</h3>
            <Form btn="Request This Print" msg="Request received. Our team will confirm details and share a quotation.">
              <Field label="Name" /><Field label="Email / WhatsApp" />
              <Row><Field label="Quantity" type="number" min="1" defaultValue="1" /><Select label="Color" options={d.col} /></Row>
            </Form>
            <button className="btn s full" onClick={quote}>Get a Quote</button>
          </div>
        </div>
      </div>
    </div></section>
  );
}
