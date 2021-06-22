import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { Sidebar } from './components/sidebar/Sidebar';
import { Navbar } from './components/navbar/Navbar';
import { Main } from './components/main/Main';



function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  function openSidebar() {
    setSidebarOpen(true);
  };

  function closeSidebar() {
    setSidebarOpen(false);
  };



  return (
    <Router>
      <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Main />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>

    </Router>



  );
}

export default App;
