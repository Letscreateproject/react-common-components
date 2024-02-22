import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home';
import CarModel from '../CarModel';
import CarVarient from '../CarVarient'
 
export default function App() {
    return (
      <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carmodel" element={<CarModel/>}/>
            <Route path="/carvarient" element={<CarVarient/>}/>
          </Routes>
      </BrowserRouter>
    );
  }