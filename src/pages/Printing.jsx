import PageHeader from '../components/PageHeader.jsx';
import { Form, Row, Field, Select, Area, FileField } from '../components/FormKit.jsx';
import { MAT, OKQ } from '../data/index.js';
export default function Printing() {
  return <>
    <PageHeader eyebrow="3D Printing" title="Your Model. Our Printer." text="Already have a 3D model? Upload it and request a quotation for professional printing." />
    <section className="sec"><div className="w lay">
      <div className="fc"><h3 className="fh">Upload your model</h3>
        <Form btn="Request a Quote" msg={OKQ}>
          <Row><Field label="Name" /><Field label="Email" type="email" /></Row>
          <Field label="Phone / WhatsApp" type="tel" />
          <FileField label="Upload 3D File (STL, OBJ, 3MF)" accept=".stl,.obj,.3mf" />
          <Row><Field label="Quantity" type="number" min="1" defaultValue="1" /><Select label="Material Preference" options={MAT} /></Row>
          <Field label="Color Preference" /><Area label="Additional Requirements" />
        </Form>
      </div>
      <div className="stack">
        <div className="spec"><div className="k">Machine</div><h3 className="mname">Anycubic Kobra S1</h3><div className="k">Single-piece build volume</div><div className="v">250 × 250 × 250 mm</div>
          <p className="note">Larger objects can be printed in sections and joined with connectors. Send your model and we will advise.</p></div>
        <div className="card"><h3>Materials</h3>
          <p><b>PLA</b> — general-purpose, educational, concept and decorative models.</p>
          <p><b>PETG</b> — functional parts needing improved durability.</p>
          <p><b>ABS / ASA</b> — configurable option, if available.</p>
          <p className="note mt2">Material availability depends on project requirements and current stock.</p></div>
      </div>
    </div></section>
  </>;
}
