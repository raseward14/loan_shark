import React from 'react';
import { Form } from "reactstrap";

// Trying to import from local file
import FormBtn from "../Form";

// Installed find in package.json
import { Auth } from "aws-amplify";

// import css

import { useSharkContext } from "../../Context";


function Login() {
    const { userHasAuthenticated } = useSharkContext();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
        await Auth.signIn(email, password);
        userHasAuthenticated(true);
      } catch (e) {
        alert(e.message);
      }
    }
  


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