import React from "react";
import "./App.css";

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
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/Profile">
            <Profile />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route path="*">
            <Four />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
