// src/Dashboard.js
import React from 'react';
import  './Success.css'
import image from '../assets/success.png'

function Success() {
  return (
    <div style={{marginTop:'115px'}}>
     <img style={{width:'60px', marginLeft:'480px'}} src={image} alt=" Empty page" />
      <h1 style={{textAlign:'center'}}>Payment Done Successfully</h1>
      <div className="proceed-button">
            <button type="button" className='button'>DOWNLOAD INVOICE</button>
        </div>
    </div>
  );
}

export default Success;
