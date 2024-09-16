import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Use BrowserRouter for clean URLs
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

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Switch> {/* Switch to BrowserRouter */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resources/maths" component={Mathematics} />
        <Route exact path="/resources/robotics" component={Robotics} />
        <Route exact path="/resources/english" component={English} />
        <Route path="/success" component={Success} />
        <Route path="/cancelled" component={PaymentCancelled} />
      </Switch>
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
