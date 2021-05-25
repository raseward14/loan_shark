import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Container>
        <Row className="row">
          <Col xs={6}>
            <form>
              <h3>Log in</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign in
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </Col>
          {/* THIS IS THE BREAK ONLY BECASUE OF PRETTIER */}
          <Col xs={6}>
            <form>
              <h3>Register</h3>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p className="forgot-password text-right">
                Already registered <a href="#">log in?</a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
