import React, { Suspense, useContext } from "react";
import "./App.css";

// Imports Authentication context
import { AuthProvider, SharkContext } from "./Context";

// Imports Pages

import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Four from "./pages/Four";
import Payments from "./pages/Payments";

// Imports Components
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";

const AuthRoute = ({ children, ...rest }) => {
  const auth = useContext(SharkContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? <div>{children}</div> : <Redirect to="/profile" />
      }
    ></Route>
  );
};


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <AuthRoute path="/profile">
              <Profile />
            </AuthRoute>
            <AuthRoute exact path="/payments/:id">
              <Payments />
            </AuthRoute>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="*">
              <Four />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
