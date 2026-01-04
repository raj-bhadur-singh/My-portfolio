import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Navbar from './components/Navbar';
import CTASection from './components/CTASection';
import FloatingContact from './components/FloatingContact';
import FreelanceModal from './components/FreelanceModal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showFreelanceModal, setShowFreelanceModal] = useState(false);
  const [showFreelanceButton, setShowFreelanceButton] = useState(false);

  // useEffect(() => {
  //   const seen = sessionStorage.getItem('seenLoader');
  //   if (!seen) {
  //     setLoading(true);
  //     sessionStorage.setItem('seenLoader', 'true');
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);

  // Show Freelance Modal after 5 seconds (only once per session)
  useEffect(() => {
    if (!loading) {
      const modalShown = sessionStorage.getItem('freelanceModalShown');

      if (!modalShown) {
        const timer = setTimeout(() => {
          setShowFreelanceModal(true);
          sessionStorage.setItem('freelanceModalShown', 'true');
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
      } else {
        // If modal was shown before, show the button
        setShowFreelanceButton(true);
      }
    }
  }, [loading]);

  const handleCloseModal = () => {
    setShowFreelanceModal(false);
    setShowFreelanceButton(true);
  };

  const handleOpenModal = () => {
    setShowFreelanceButton(false);
    setShowFreelanceModal(true);
  };

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <CTASection />
          <FloatingContact />
          <FreelanceModal
            isOpen={showFreelanceModal}
            onClose={handleCloseModal}
          />

          {/* Floating Freelance Button - Right Side Center */}
          {showFreelanceButton && (
            <button
              onClick={handleOpenModal}
              className="fixed right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-lime-400 to-green-500 text-black font-bold py-6 px-4 rounded-l-2xl shadow-2xl hover:shadow-lime-400/50 transition-all duration-300 hover:px-6 z-40 flex items-center gap-2 group"
              style={{ writingMode: 'vertical-rl' }}
            >
              <span className="text-lg tracking-wider">Ready for Freelancing </span>
            </button>
          )}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
