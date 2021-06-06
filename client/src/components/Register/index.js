import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input } from "reactstrap";

// Trying to import from local file
import { FormBtn } from "../Form";

import "./style.css";

import savePerson from  "../../utils/RegisterAPI";

function Register(){

  const [user, setPerson] = useState();
  const [formObject, setFormObject] = useState({});

 function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({ ...formObject, [name]: value });
 };

 // when form is submitted, use APIFunctions saveLoan method to save loan data, then reload loans from db
 function handleFormSubmit(event) {
  event.preventDefault();
  if (formObject.name && formObject.email) {

    // Need to have routes for register
      savePerson({
        name: formObject.name,
        email: formObject.email,
        password: formObject.password,
        user_id: "60adb73bc60ad5599803dbfd"
      })
      // .then needs to load the new Profile for the created user
      // .then((res) => loadProfile())
      // .catch((err) => console.log(err));
  }
 }

 const handleSubmit= (event) => {
  event.preventDefault();
 };

 return (
  <div className="Login">
    <Form onSubmit={handleSubmit}>
      <h3>Want to Join Loan Shark?</h3>
      <FormGroup size="lg">
        <Label>Full Name</Label>
        <Input
          onChange={handleInputChange}
          name="name"
          placeholder="First and Last Name"
        />
      </FormGroup>
      <FormGroup size="lg">
        <Label>Email</Label>
        <Input
          onChange={handleInputChange}
          name="email"
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup size="lg">
        <Label>Password</Label>
        <Input
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
        />
      </FormGroup>
      <FormBtn
          disabled={!(formObject.name && formObject.email)}
          onClick={handleFormSubmit}
        >
          Register
        </FormBtn>
    </Form>
  </div>
 );
};




export default Register;
