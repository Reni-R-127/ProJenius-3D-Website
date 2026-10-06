import { useContext } from 'react';
import { UI } from '../context.js';
import PageHeader from '../components/PageHeader.jsx';
const S = ['Mini projects', 'Final-year projects', 'Robotics components', 'IoT enclosures', 'Engineering models', 'Exhibition models', 'Academic demonstrations'];
export default function Students() {
  const { quote } = useContext(UI);
  return <>
    <PageHeader eyebrow="Students" title="3D Printing for Students" text="Practical printing support for academic and project work." />
    <section className="sec"><div className="w">
      <div className="g4">{S.map((s) => <div key={s} className="card lift"><h3>{s}</h3></div>)}</div>
      <div className="cta mt"><button className="btn p" onClick={quote}>Print My Project</button></div>
    </div></section>
  </>;
}
