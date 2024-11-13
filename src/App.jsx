import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter for clean URLs
import About from './components/about/About';
import Resources from './components/resources/Resources';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import ScrollToTop from './ScrollToTop';
import { useLocation } from 'react-router-dom';
import Mathematics from './components/resources/Mathematics/Mathematics';
import Robotics from './components/resources/Robotics/Robotics';
import English from './components/resources/English/English';

import { ThemeProvider } from "@material-tailwind/react";
import Success from './components/resources/Success';
import PaymentCancelled from './components/resources/PaymentCancelled';
import Art from './components/art/Art';
import IslamicCourse from './components/islamicCourses/IslamicCourse';
import Organization from './components/islamicCourses/Orgnaization/Organization';
import Art1 from './components/art/Art1/Art1';
import AsmaeHusna from './components/islamicCourses/AsmaUlHusna/AsmaeHusna';
import Tafseer from './components/islamicCourses/TafseeAlSurahs/Tafseer';
import HappyMuslim from './components/islamicCourses/HowToBeAHappyMuslim/HappyMuslim';
import FinaLiteracy from './components/islamicCourses/Finacial Literacy/FinLiteracy';
import ComputerNetwork from './components/resources/ComputerNetworking/ComputerNetwork';
import Programming from './components/resources/Programming/Programming';
import { useState, useEffect } from 'react';

function AppContent() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(true);

  const dismissPopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Routes> {/* Switch to Routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/art" element={<Art />} />
        <Route exact path="/art/art1" element={<Art1 />} />
        <Route exact path="//islamic-courses" element={<IslamicCourse />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resources/maths" element={<Mathematics />} />
        <Route exact path="/resources/robotics" element={<Robotics />} />
        <Route exact path="/resources/english" element={<English />} />
        <Route exact path="/resources/computer-networking" element={<ComputerNetwork />} />
        <Route exact path="/resources/programming" element={<Programming />} />
        <Route exact path="//islamic-courses/organization" element={<Organization />} />
        <Route exact path="//islamic-courses/asma-ul-husna" element={<AsmaeHusna />} />
        <Route exact path="//islamic-courses/tafseer-al-surah" element={<Tafseer />} />
        <Route exact path="//islamic-courses/happy-muslim" element={<HappyMuslim />} />
        <Route exact path="//islamic-courses/finance-literacy" element={<FinaLiteracy />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancelled" element={<PaymentCancelled />} />
      </Routes>
      {location.pathname !== "/community-chat" && <Footer />}

      {showPopup && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '40px',
          backgroundColor: '#273e06',
          color: 'white',
          padding: '20px',
          paddingTop: '10px',
          paddingLeft: '0',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: '1000',
          maxWidth: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          // border: '2px solid #007bff',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            margin: '0px 0px -10px 30px'
          }}>
            <p style={{ fontWeight: 'bold', margin: 0, fontSize: '1.4rem' }}>Asma ul Husna Course</p>
            <button
              onClick={dismissPopup}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                margin: '0'
              }}
            >
              ✖
            </button>
          </div>
          <p style={{ margin: '0', textAlign: 'center', fontSize: '18px', marginLeft: '1.8rem' }}>
            Classes starting from <strong>Dec-7</strong>
          </p>
          <button
            onClick={() => {
              window.location.href = '/islamic-courses/asma-ul-husna';
            }}
            style={{
              marginTop: '10px',
              backgroundColor: 'white',
              color: '#273e06',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '3px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginLeft: '1.8rem'
            }}
          >
            Register Now
          </button>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <Header />
      </ThemeProvider>
      <AppContent /> {/* Use the new AppContent component */}
    </Router>
  );
}

export default App;
