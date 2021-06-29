import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Admin } from './pages/Admin';

import loginContext from './contexts/loginContext';

import PrivateRoute from './pages/rotasPrivadas/PrivateRoute';
import AcessoNegado from './pages/rotasPrivadas/AcessoNegado';


const store = createStore(loginContext);

function App() {

  return (

    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/negado">
              <AcessoNegado></AcessoNegado>
            </Route>

        </Switch>
      </Router>
    </Provider>


  );
}

export default App;
