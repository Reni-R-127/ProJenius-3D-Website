import { Form, Row, Field, Select, Area, FileField } from './FormKit.jsx';
import { MAT, OKQ } from '../data/index.js';
export default function BulkForm() {
  return (
    <Form btn="Request Bulk Quote" msg={OKQ}>
      <Row><Field label="Name" /><Field label="Organization" /></Row>
      <Row><Field label="Quantity" type="number" min="2" /><Select label="Material" options={MAT} /></Row>
      <FileField label="Model Upload" accept=".stl,.obj,.3mf" />
      <Field label="Required Date" type="date" />
      <Area label="Message" />
    </Form>
  );
}
