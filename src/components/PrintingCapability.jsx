import Icon from './Icon.jsx';
const USES = ['Custom components', 'Robotics parts', 'Electronics enclosures', 'Mechanical components', 'Educational models', 'Creative objects'];
const C = [
  ['bolt', 'Fast Turnaround', 'Quick quotations and efficient printing to fit your project timelines.'],
  ['truck', 'Reliable Delivery', 'Carefully packed and delivered to your doorstep.'],
  ['stack', 'Single or Multiple Pieces', 'One prototype or a full batch — request what you need.'],
  ['sliders', 'Materials & Colours', 'Choose from available materials and colours for your project.'],
];
export default function PrintingCapability() {
  return (
    <section className="sec capd"><div className="w cap">
      <div>
        <span className="eyebrow">Capability</span><h2>Our Printing Capability</h2>
        <p className="lead">Built around what matters to your project — speed, reliability and the flexibility to print one piece or many.</p>
        <div className="chips mid">{USES.map((u) => <span key={u} className="chip">{u}</span>)}</div>
        <a className="btn p" href="#/printing">Explore 3D Printing Service →</a>
      </div>
      <div className="cg">{C.map(([ic, t, d]) => <div key={t} className="cc"><div className="i2"><Icon n={ic} /></div><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
  );
}
