import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"
import './App.css';

import MenuBar from './Components/MenuBar'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register';
import Movies from './Components/Movies';
import Stream from './Components/Stream';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
      <Router>
        <MenuBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/stream">
            <Stream/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
