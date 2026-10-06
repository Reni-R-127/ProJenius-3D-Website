import { WA, MAIN_SITE } from '../data/index.js';
const COLS = [
  ['Services', [['3D Printing', '#/printing'], ['Custom Design', '#/custom-design'], ['Bulk Printing', '#/bulk'], ['Student Printing', '#/students']]],
  ['Explore', [['Designs', '#/designs'], ['Gallery', '#/gallery'], ['Reviews', '#/reviews'], ['Contact', '#/contact']]],
  ['Company', [['About ProJenius', '#/contact'], ['Visit ProJenius ↗', MAIN_SITE], ['Privacy Policy', '#/contact'], ['Terms', '#/contact']]],
  ['Connect', [['WhatsApp', WA], ['Instagram', '#/contact'], ['LinkedIn', '#/contact']]],
];
export default function Footer() {
  return (
    <footer><div className="w">
      <div className="fg">
        <div>
          <div className="logo"><i>3D</i>ProJenius <span>3D Print</span></div>
          <p className="ftag">Design. Print. Deliver.</p>
          <p className="fdesc">Professional 3D printing and custom design services from ProJenius Innovation Technology Private Limited.</p>
        </div>
        {COLS.map(([h, ls]) => (
          <div key={h}><h4>{h}</h4>{ls.map(([t, u]) => <a key={t} href={u} {...(u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{t}</a>)}</div>
        ))}
      </div>
      <div className="cp">© 2026 ProJenius Innovation Technology Private Limited. All rights reserved.</div>
    </div></footer>
  );
}
