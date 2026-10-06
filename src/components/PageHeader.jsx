export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="ph"><div className="w fade"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="lead">{text}</p></div></section>
  );
}
