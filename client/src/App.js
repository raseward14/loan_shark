import React from "react";
import './App.css';
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import LoanDetail from "./pages/LoanDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
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
  );
}

export default App;
