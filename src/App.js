import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Vehicle from './Component/Vehicle/Vehicle';
import Login from './Component/Login/Login';
import Destination from './Component/Destination/Destination';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <Header />
        <Switch>
          <Route exact path="/">
            <Vehicle />
          </Route>
          <Route path="/destinations">
            <Destination />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
