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

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Routes> {/* Switch to Routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/art" element={<Art />} />
        <Route exact path="/art/art1" element={<Art1 />} />
        <Route exact path="/islamic-course" element={<IslamicCourse />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resources/maths" element={<Mathematics />} />
        <Route exact path="/resources/robotics" element={<Robotics />} />
        <Route exact path="/resources/english" element={<English />} />
        <Route exact path="/islamic-course/organization" element={<Organization />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancelled" element={<PaymentCancelled />} />
      </Routes>
      {location.pathname !== "/community-chat" && <Footer />}
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
