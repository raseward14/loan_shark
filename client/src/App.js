import React, { useState } from "react";
import './App.css';
import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import LoanDetail from "./pages/LoanDetail";
import { SharkContext } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <SharkContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/loans">
            <Profile />
          </Route>
          <Route exact path="/loans/:id">
            <LoanDetail />
          </Route>
        </Switch>
      </div>
    </Router>
    </SharkContext.Provider>
  );
}

export default App;
