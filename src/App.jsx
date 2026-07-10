import React, { useEffect, useState, useRef } from 'react'
import HomePage from './Components/Home/HomePage'
import FeaturesPage from './Components/Features/FeaturesPage'
import SmoothScroll from './Components/SmoothScroll'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import Navbar2 from './Components/Navbar2'
import DemoPage from './Components/Demo/DemoPage'
import LoadingScreen from './Components/LoadingScreen'
import { Route, Routes, useLocation } from 'react-router-dom'
import PricingPage from './Components/Pricing/PricingPage'
import ContactForm from './Components/Pricing/ContactForm'
import Navbar3 from './Components/Navbar3'
import ContactUs from './Components/Contact/ContactUs'
import Login from './Components/LoginPage/Login'

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  
  const prevPathnameRef = useRef(location.pathname);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    document.body.style.overflow = 'unset';

    if (location.hash && prevPathnameRef.current === '/') {
      setIsLoading(false);
      setIsExiting(true);
      return;
    }

    setIsLoading(true);
    setIsExiting(false);

    let scrollTimeout;
    
    if (!location.hash) {
      window.scrollTo(0, 0);
      scrollTimeout = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTo(0, 0);
      }, 50);
    }

    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 800);

    const removeTimeout = setTimeout(() => {
      setIsLoading(false);
      prevPathnameRef.current = location.pathname;
    }, 1400);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(removeTimeout);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F1]">
      {isLoading && <LoadingScreen isExiting={isExiting} />}

      <SmoothScroll />
      
      <Navbar3 />

      <div className="flex-1">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/features' element={<FeaturesPage />} />
          <Route path='/demo' element={<DemoPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/contact-form' element={<ContactForm />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

      {/* 💡 This ensures the footer hides only on the login page */}
      {location.pathname !== '/login' && <Footer />}
      
      <ScrollToTop />
    </div>
  )
}

export default App