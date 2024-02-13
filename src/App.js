// src/App.js
import React from 'react';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <main style={{ flexGrow: 1, padding: '24px' }}>
        {/* Content goes here */}
        <h2>Welcome to My Material-UI App</h2>
        {/* Add more content or components here */}
      </main>
    </div>
  );
}

export default App;
