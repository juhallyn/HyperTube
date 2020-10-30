import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/Register">
            <Register/>
          </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
