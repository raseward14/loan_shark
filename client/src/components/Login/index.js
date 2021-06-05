import React, { useContext, useState } from 'react';
import { Form } from "reactstrap";

// Trying to import from local file
import { FormBtn } from "../Form";

import { Redirect }
from "react-router-dom";

import { SharkContext } from "../../Context";

const Login = () => {
  const authContext = useContext(SharkContext);
  const [signInSuccess, setSignInSuccess] = useState();
  const [signInError, setSignInError] = useState();
  const [redirectOnSignIn, setRedirectOnSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [remember, setRemember] = useState(false);

  const validateForm = async (credentials) => {
    try {
        const url = "http://localhost:3001/auth";
        const fetchResponse = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(credentials), // body data type must match "Content-Type" header
        });
        const data = await fetchResponse.json();
        authContext.setAuthState(data);
        setSignInSuccess(data.message);
        setSignInError(null);
  
        setTimeout(() => {
          setRedirectOnSignIn(true);
        }, 700);
      } catch (error) {
        setSignInError(error.message);
        setSignInSuccess(null);
      }
    };

  const handleSubmit= (event) => {
    event.preventDefault();

    validateForm({ email, password });
   };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <FormBtn block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </FormBtn>
      </Form>
    </div>
  );
};

export default Login;

