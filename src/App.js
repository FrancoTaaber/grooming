import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Bookings from './pages/Bookings';
import Works from './pages/Works';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Router>
  );
}

export default App;
