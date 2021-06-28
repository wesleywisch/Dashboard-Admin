import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Admin } from './pages/Admin';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>



  );
}

export default App;
