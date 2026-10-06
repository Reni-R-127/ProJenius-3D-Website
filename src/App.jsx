import { useState } from 'react';
import { UI } from './context.js';
import { useRoute } from './router.js';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import QuoteModal from './components/QuoteModal.jsx';

import Home from './pages/Home.jsx';
import Printing from './pages/Printing.jsx';
import Designs from './pages/Designs.jsx';
import DesignDetails from './pages/DesignDetails.jsx';
import CustomDesign from './pages/CustomDesign.jsx';
import Gallery from './pages/Gallery.jsx';
import Reviews from './pages/Reviews.jsx';
import Contact from './pages/Contact.jsx';
import Students from './pages/Students.jsx';
import Bulk from './pages/Bulk.jsx';

const PAGES = {
  '': Home,
  printing: Printing,
  designs: Designs,
  'custom-design': CustomDesign,
  gallery: Gallery,
  reviews: Reviews,
  contact: Contact,
  students: Students,
  bulk: Bulk,
};

export default function App() {
  const [key, id] = useRoute();
  const [modal, setModal] = useState(null);

  const Page =
    key === 'designs' && id
      ? DesignDetails
      : PAGES[key] || Home;

  return (
    <UI.Provider
      value={{
        quote: () => setModal('quote'),
        designer: () => setModal('designer'),
      }}
    >
      <Navbar route={key} />

      <main>
        <Page id={id} />
      </main>

      <Footer />

      {modal && (
        <QuoteModal
          kind={modal}
          onClose={() => setModal(null)}
        />
      )}
    </UI.Provider>
  );
}
