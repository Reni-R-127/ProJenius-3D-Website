import Icon from './Icon.jsx';
const S = [
  ['file', 'Custom 3D Printing', 'Already have a 3D model? Send it to us for printing.', 'printing'],
  ['pen', 'Custom 3D Design', 'Have an idea but no 3D model? Share your requirements.', 'custom-design'],
  ['grid', 'Design Catalog', 'Explore available printable designs.', 'designs'],
  ['stack', 'Bulk Printing', 'Need multiple pieces? Request a quotation.', 'bulk'],
];
export default function ServiceCategories() {
  return (
    <section className="sec"><div className="w">
      <div className="hd"><span className="eyebrow">Services</span><h2>What Can We Print?</h2><p className="lead">From individual components to customized objects, ProJenius helps turn digital models into physical prints.</p></div>
      <div className="g4">{S.map(([ic, t, d, to]) => (
        <a key={to} className="card fade" href={'#/' + to}><div className="ic"><Icon n={ic} /></div><h3>{t}</h3><p>{d}</p><span className="more">Learn more →</span></a>
      ))}</div>
    </div></section>
  );
}
