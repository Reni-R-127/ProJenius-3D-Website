const A = 'var(--acc)', L = 'color-mix(in srgb,var(--acc) 55%,#fff)', D = 'color-mix(in srgb,var(--acc) 70%,#000)';
const SHAPES = [
  () => <><path d="M200 70 290 120V215L200 265 110 215V120z" fill={A} /><path d="M200 70 290 120 200 170 110 120z" fill={L} /><path d="M200 170V265L110 215V120z" fill={D} /></>,
  () => <><ellipse cx="200" cy="225" rx="85" ry="32" fill={D} /><rect x="115" y="110" width="170" height="115" fill={A} /><ellipse cx="200" cy="110" rx="85" ry="32" fill={L} /></>,
  () => <><circle cx="200" cy="170" r="88" fill={A} />{Array.from({ length: 12 }, (_, k) => <rect key={k} x="190" y="68" width="20" height="26" fill={A} transform={`rotate(${k * 30} 200 170)`} />)}<circle cx="200" cy="170" r="34" fill="var(--bg2)" /><circle cx="200" cy="170" r="52" fill="none" stroke={D} strokeWidth="4" strokeDasharray="6 8" /></>,
  () => <><path d="M200 80 290 130 200 180 110 130z" fill={L} /><path d="M110 130 200 180V250L110 200z" fill={D} /><path d="M290 130 200 180V250L290 200z" fill={A} /><circle cx="200" cy="130" r="18" fill="var(--bg2)" /></>,
  () => <><path d="M130 240 200 70 270 240z" fill={A} /><path d="M200 70 270 240 200 215z" fill={D} /><path d="M130 240 200 215 270 240 200 262z" fill={L} /></>,
  () => <><rect x="115" y="150" width="170" height="90" rx="6" fill={D} /><rect x="115" y="102" width="170" height="90" rx="6" fill={A} /><circle cx="160" cy="150" r="14" fill="var(--bg2)" /><circle cx="240" cy="150" r="14" fill="var(--bg2)" /></>,
];
// Swap this placeholder for <img src=... /> when real project photos / 3D previews are ready.
export default function Thumb({ i }) {
  const S = SHAPES[i % 6];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="3D printed part preview">
      <defs><pattern id={`g${i}`} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="var(--grid)" strokeWidth="1" /></pattern></defs>
      <rect width="400" height="300" fill={`url(#g${i})`} /><S />
    </svg>
  );
}
