import { useState } from 'react';
// V1 forms: no backend yet. Replace setDone(true) with a POST to your API / form service.
export const Row = ({ children }) => <div className="fr">{children}</div>;
export const Field = ({ label, type = 'text', ...rest }) => <label>{label}<input type={type} {...rest} /></label>;
export const Area = ({ label }) => <label>{label}<textarea /></label>;
export const FileField = ({ label, accept }) => <label>{label}<input type="file" accept={accept} /></label>;
export const Select = ({ label, options }) => <label>{label}<select>{options.map((o) => <option key={o}>{o}</option>)}</select></label>;
export function Form({ btn, msg, children }) {
  const [done, setDone] = useState(false);
  if (done) return <div className="ok"><b>✓ Request received</b><p>{msg}</p></div>;
  return <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>{children}<button className="btn p" type="submit">{btn}</button></form>;
}
