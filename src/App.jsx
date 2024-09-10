import './App.css';
import Header from './components/common/header/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Updated to Routes from Switch
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

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Routes> {/* Updated to Routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resources/maths" element={<Mathematics />} />
        <Route exact path="/resources/robotics" element={<Robotics />} />
        <Route exact path="/resources/english" element={<English />} />
        <Route path="/success" element={<Success />} /> {/* Use element for v6 */}
      </Routes>
      {/* Conditionally render the Footer */}
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
