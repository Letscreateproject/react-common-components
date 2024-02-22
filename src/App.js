import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SideMenu from './components/SideMenu';
import Home from './components/Home';
import CommonRoute from './components/common/CommonRoute'

// import About from './components/About';


function App() {
  return (
    <>
    <CommonRoute>
    <Home></Home>
    </CommonRoute>
    </>
 
    /* // <Router>
    //   <div style={{ display: 'flex' }}>
    //     <SideMenu />
    //     <main style={{ flexGrow: 1, padding: '20px' }}>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </Router> */
   
    
  )
}

export default App;