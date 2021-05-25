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
  return (
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
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
