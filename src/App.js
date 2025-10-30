import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Travels from './pages/Travels';
import BucketList from './pages/BucketList';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import USLocations from './pages/USLocations';
import InternationalLocations from './pages/InternationalLocations';
import BucketListLocations from './pages/BucketListLocations';
import './styles/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/bucketlist" element={<BucketList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/us-locations" element={<USLocations />} />
          <Route path="/international-locations" element={<InternationalLocations />} />
          <Route path="/bucket-list-locations" element={<BucketListLocations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
