import { useEffect, useState } from 'react';
const read = () => location.hash.replace(/^#\/?/, '');
// Tiny hash router. Swap for react-router-dom later if you prefer.
export function useRoute() {
  const [h, set] = useState(read());
  useEffect(() => {
    const f = () => { set(read()); window.scrollTo(0, 0); };
    addEventListener('hashchange', f);
    return () => removeEventListener('hashchange', f);
  }, []);
  return h.split('/');
}
