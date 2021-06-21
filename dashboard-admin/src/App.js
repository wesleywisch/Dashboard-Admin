import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import Sidebar from './components/sidebar/Sidebar';



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
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>













      <Route path="/home">
        <Sidebar />
      </Route>
    </Router>





  );
}

export default App;
