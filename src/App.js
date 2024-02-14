import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <SideMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
