import PageHeader from '../components/PageHeader.jsx';
import { Form, Row, Field, Select, Area, FileField } from '../components/FormKit.jsx';
import { WA, MAIN_SITE } from '../data/index.js';
const SERVICES = ['Custom 3D Printing', 'Custom Design', 'Design Catalog', 'Bulk Printing', 'Student Printing', 'Other'];
export default function Contact() {
  return <>
    <PageHeader eyebrow="Contact" title="Get in Touch" text="Tell us about your project and we'll respond with next steps." />
    <section className="sec"><div className="w lay">
      <div className="fc">
        <Form btn="Send Enquiry" msg="Thanks! We've received your enquiry and will reply shortly.">
          <Row><Field label="Full Name" /><Field label="Email" type="email" /></Row>
          <Row><Field label="Phone" type="tel" /><Field label="Organization" /></Row>
          <Select label="Service Required" options={SERVICES} /><Area label="Message" /><FileField label="Attachment" />
        </Form>
      </div>
      <div className="stack">
        <div className="card"><h3>WhatsApp</h3><p>+91 89254 50473</p></div>
        <div className="card"><h3>Email</h3><p>projenius3d@gmail.com</p></div>
        <div className="card"><h3>Location</h3><p>Plot No 3, Erikarai St,<br />
Velmurugan Nagar,<br />
Namachivaya Nagar,<br />
Madurai,<br />
Tamil Nadu 625003</p></div>
        <a className="btn s" href={WA} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        <a className="btn t" href={MAIN_SITE} target="_blank" rel="noopener noreferrer">Visit ProJenius ↗</a>
      </div>
    </div></section>
  </>;
}
