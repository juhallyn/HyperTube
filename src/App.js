import logo from './logo.svg';
import './App.css';

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
            <h1> Home </h1>
          </Route>
          <Route path="/login">
            <h1> Login </h1>
          </Route>
        </Switch>
      </Router>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  </div>
  );
}

export default App;
