import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import About from './components/About';
import AddForm from './components/forms/AddForm';
import Tabs from './components/tabs/Tabs';
import RichText from './components/richText/RichText';
import Details from './components/details/Details';

function App() {
  return (
    <Router>
      <SideMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-form" element={<AddForm />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/rich-text" element={<RichText />} />
          <Route path="/details" element={<Details />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
