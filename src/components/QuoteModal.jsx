import { useEffect, useState } from 'react';
import BulkForm from './BulkForm.jsx';
import { Form, Row, Field, Area, FileField } from './FormKit.jsx';
import { WA } from '../data/index.js';
const OPTS = [['file', 'I have a 3D file', 'Upload STL, OBJ or 3MF'], ['design', 'I need a custom design', 'Share your idea or sketch'], ['bulk', 'I need bulk printing', 'Multiple pieces'], ['unsure', "I'm not sure", 'Send a simple enquiry']];
export default function QuoteModal({ kind, onClose }) {
  const [step, setStep] = useState(kind === 'designer' ? 'designer' : 'menu');
  useEffect(() => {
    const f = (e) => e.key === 'Escape' && onClose();
    addEventListener('keydown', f);
    return () => removeEventListener('keydown', f);
  }, [onClose]);
  const pick = (a) => {
    if (a === 'file') { onClose(); location.hash = '#/printing'; }
    else if (a === 'design') { onClose(); location.hash = '#/custom-design'; }
    else setStep(a);
  };
  return (
    <div className="modal open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="mb">
        <button className="x" aria-label="Close" onClick={onClose}>×</button>
        {step === 'menu' && <>
          <h2>What do you need?</h2><p className="mut">Pick one — no account or payment needed.</p>
          {OPTS.map(([a, t, s]) => <button key={a} className="opt" onClick={() => pick(a)}><span><b>{t}</b><small>{s}</small></span><span>→</span></button>)}
        </>}
        {step === 'bulk' && <><h2>Bulk quotation</h2><BulkForm /></>}
        {step === 'unsure' && <>
          <h2>Simple enquiry</h2>
          <Form btn="Send Enquiry" msg="Thanks! We'll get back to you shortly."><Field label="Name" /><Field label="Email / Phone" /><Area label="Tell us about it" /></Form>
          <a className="btn s full" href={WA} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </>}
        {step === 'designer' && <>
          <h2>Submit your design</h2><p className="mut">Share your designs with the ProJenius community. V1 is an enquiry form.</p>
          <Form btn="Submit Your Design" msg="Thanks! We'll review your submission and be in touch.">
            <Row><Field label="Name" /><Field label="Email" type="email" /></Row><Field label="Design name" /><FileField label="Design file" accept=".stl,.obj,.3mf" /><Area label="Description" />
          </Form>
        </>}
      </div>
    </div>
  );
}
