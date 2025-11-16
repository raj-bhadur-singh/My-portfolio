import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Navbar from './components/Navbar';
import CTASection from './components/CTASection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const seen = sessionStorage.getItem('seenLoader');
  //   if (!seen) {
  //     setLoading(true);
  //     sessionStorage.setItem('seenLoader', 'true');
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);

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
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
