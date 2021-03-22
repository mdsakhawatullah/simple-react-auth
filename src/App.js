import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Destination from './Component/Destination/Destination';
import React, { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Contact from './Component/Destination/Contact/Contact';
export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <p>Name:{loggedInUser.email}</p>
    <Router>
    <Switch>
    <Route exact path="/">
              <Home />
            </Route>
      <Route path="/home">
        <Home/>
      </Route>
      
      <Route path="/destination">
        <Destination/>
      </Route>
            
            <PrivateRoute path="/contact">
              <Contact/>
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
