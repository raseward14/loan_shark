import React, { useState } from "react";
import './App.css';
import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import LoanDetail from "./pages/LoanDetail";
import { SharkContext } from "./Context";
import React from "react";
import "./App.css";

// Imports Pages
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Four from "./pages/Four";
// import LoanDetail from "./pages/LoanDetail";

// Imports Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/loans">

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route path="*">
            <Four />
          </Route>

          {/* <Route exact path="/loans/:id">
            <LoanDetail />
          </Route> */}
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
    </SharkContext.Provider>
  );
};

export default App;
