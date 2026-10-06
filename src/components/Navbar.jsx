import { useContext, useEffect, useState } from 'react';
import { UI } from '../context.js';
import logo from '../assets/logo.png';

const LINKS = [
  ['', 'Home'],
  ['printing', '3D Printing'],
  ['designs', 'Designs'],
  ['custom-design', 'Custom Design'],
  ['gallery', 'Gallery'],
  ['reviews', 'Reviews'],
  ['contact', 'Contact'],
];

export default function Navbar({ route }) {
  const { quote } = useContext(UI);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <nav className={scrolled ? 'sc' : ''}>
      <div className="w navbar-inner">

        {/* LOGO */}
        <a href="#/" className="logo">
          <span className="logo-mark">3D</span>

          <span className="logo-text">
            <strong>ProJenius</strong>
            <small>3D PRINT</small>
          </span>
        </a>

        {/* NAVIGATION */}
        <div className={`links ${open ? 'open' : ''}`}>
          {LINKS.map(([href, text]) => (
            <a
              key={href}
              href={`#/${href}`}
              className={route === href ? 'on' : ''}
            >
              {text}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="nr">
          <button
            className="btn p sm quote-btn"
            onClick={quote}
          >
            Get a Quote
          </button>

          <button
            className="burger"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </nav>
  );
}