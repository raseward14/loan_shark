// import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Container>
        <Row className="row">
          <Col className="col-6 .col-sm-4" xs={12}>
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

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign in
              </button>
              <p className="forgot-password text-center">
                Not a member <a href="/register">Sign Up Here</a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
