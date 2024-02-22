import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import CarModel from "../CarModel";
import CarVarient from "../CarVarient";
import CarYear from "../CarYear";
import Details from "../details/Details";
import Success from "../Success";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<CarModel />} />
        <Route path="/carvarient" element={<CarVarient />} />
        <Route path="/caryear" element={<CarYear />} />
        <Route path ="/details" element={<Details />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
