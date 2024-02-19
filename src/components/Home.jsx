// src/Dashboard.js
import React from 'react';
import image from '../assets/dumm-image.png';

function Home() {
  return (
    <div className="dashboard">
      <h1>Home</h1>
      <img style={{width:'900px'}} src={image} alt=" Empty page" />
    </div>
  );
}

export default Home;