import { useContext } from 'react';
import { UI } from '../context.js';
import { WA } from '../data/index.js';
export default function FinalCTA() {
  const { quote } = useContext(UI);
  return (
    <section className="fcta"><div className="w">
      <h2>Have a 3D File or an Idea?</h2>
      <p className="lead">Tell us what you need and get a quotation from ProJenius.</p>
      <div className="cta ctr"><button className="btn p" onClick={quote}>Get a Quote →</button><a className="btn s" href={WA} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
    </div></section>
  );
}
