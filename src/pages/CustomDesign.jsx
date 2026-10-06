import PageHeader from '../components/PageHeader.jsx';
import { Form, Row, Field, Area, FileField } from '../components/FormKit.jsx';
const EX = ['Custom enclosure', 'Mechanical component', 'Robotics part', 'Replacement part', 'Educational model', 'Customized object'];
export default function CustomDesign() {
  return <>
    <PageHeader eyebrow="Custom Design" title="Don't Have a 3D Model?" text="Share your idea, sketch, image, dimensions or reference and our team can help create a printable 3D model." />
    <section className="sec"><div className="w lay">
      <div className="fc">
        <Form btn="Request Custom Design" msg="Thanks! Our team will review your requirements and get back to you.">
          <Row><Field label="Name" /><Field label="Email" type="email" /></Row><Field label="Phone" type="tel" />
          <FileField label="Upload Image / Sketch" accept="image/*,.pdf" /><Area label="Description" />
          <Row><Field label="Dimensions" placeholder="e.g. 80 × 50 × 30 mm" /><Field label="Quantity" type="number" min="1" defaultValue="1" /></Row>
          <Area label="Requirements" />
        </Form>
      </div>
      <div className="card"><h3>Examples</h3><div className="chips mt2">{EX.map((e) => <span key={e} className="chip">{e}</span>)}</div></div>
    </div></section>
  </>;
}
