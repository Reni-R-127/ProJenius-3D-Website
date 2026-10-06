import { useContext } from 'react';
import { UI } from '../context.js';
export default function Hero() {
  const { quote } = useContext(UI);
  return (
    <section className="hero"><div className="w hg">
      <div className="fade">
        <span className="eyebrow">Design. Print. Deliver.</span>
        <h1>Turn Digital Designs Into Real Objects.</h1>
        <p className="lead">Professional 3D printing for students, designers, engineers, creators and businesses. Upload your model or tell us what you need — we'll help bring it to life.</p>
        <div className="cta"><button className="btn p" onClick={quote}>Get a Quote →</button><a className="btn s" href="#/designs">Explore Designs</a></div>
      </div>
      <div className="hv fade">
        <div className="sc3" aria-hidden="true">
          <div className="ob"><div className="bed" />{Array.from({ length: 18 }, (_, i) => <i key={i} className="ly" style={{ '--i': i }} />)}</div>
        </div>
        <span className="tag tl">Fast Turnaround</span>
        <span className="tag bl">Professional 3D Printing</span>
        <span className="tag br">Custom Designs</span>
      </div>
    </div></section>
  );
}
