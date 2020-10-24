import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from './Components/Home'
import InputGroupDemo from './Components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
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
            {/* <h1> Login </h1> */}
            <InputGroupDemo/>
          </Route>
          <Route path="/Register">
            <h1> Register </h1>
          </Route>
        </Switch>
      </Router>

  </div>
  );
}

export default App;
