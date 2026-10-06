import PageHeader from '../components/PageHeader.jsx';
import BulkForm from '../components/BulkForm.jsx';
export default function Bulk() {
  return <>
    <PageHeader eyebrow="Bulk Printing" title="Need Multiple Pieces?" text="Request a custom quotation for multiple 3D printed pieces." />
    <section className="sec"><div className="w narrow"><div className="fc"><BulkForm /></div></div></section>
  </>;
}
