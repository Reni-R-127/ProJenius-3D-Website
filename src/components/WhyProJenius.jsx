import Icon from './Icon.jsx';
const W = [
  ['check', 'Quality Focused', 'Careful printing and quality checking.'],
  ['sliders', 'Customization', 'Printing options can be adapted to project requirements.'],
  ['pen', 'Design Assistance', "Support for customers who don't already have a printable model."],
  ['chat', 'Direct Support', 'Easy communication through enquiry and WhatsApp.'],
];
export default function WhyProJenius() {
  return (
    <section className="sec"><div className="w">
      <div className="hd"><span className="eyebrow">Why us</span><h2>Why ProJenius 3D Print?</h2></div>
      <div className="g4">{W.map(([ic, t, d]) => <div key={t} className="card lift"><div className="ic"><Icon n={ic} /></div><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
  );
}
