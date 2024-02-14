  import React from 'react';
 import  './SideMenu.css'; 
  import { Link } from 'react-router-dom';

  const drawerWidth = 240;

  function SideMenu() {
      return (
        <div className="sideMenu">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/about" className="menu-item">About</Link>
        </div>
      );
  };
  

  export default SideMenu;
