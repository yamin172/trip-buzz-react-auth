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
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Vehicle />
            </Route>
            <Route exact path="/">
              <Vehicle />
          </Route>
            <PrivateRoute path="/destinations/:vehicle_id">
              <Destination />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
