export default function ReviewCard({ r }) {
  return (
    <div className="card rv lift fade">
      <div className="star">★★★★★</div>
      <p>“{r.t}”</p>
      <small><b>{r.n}</b> · {r.k}</small>
    </div>
  );
}
