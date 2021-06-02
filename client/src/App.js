import React, { useState } from "react";
import "./App.css";
// ---------------------------------------------------- COMMENTED OUT
// import { SharkContext } from "./Context";
// ---------------------------------------------------- COMMENTED OUT

// Imports Pages
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Four from "./pages/Four";

// Imports Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // ---------------------------------------------------- COMMENTED OUT
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  // const [isAuthenticated, userHasAuthenticated] = useState(false);
  //  // ---------------------------------------------------- COMMENTED OUT
  return (
    // <SharkContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
          
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">
            <Four />

            {/* <Route exact path="/loans/:id">
            <LoanDetail />
          </Route> */}
          </Route>
        </Switch>
      </div>
    </Router>
    // ---------------------------------------------------- COMMENTED OUT
    // </SharkContext.Provider>
    // ---------------------------------------------------- COMMENTED OUT
  );
}

export default App;
