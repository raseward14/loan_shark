import React from "react";
import "./style.css";
import { Container, Row, Col } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Container>
        <Row className="row">
          <Col className=".col-sm-12 .col-md-6 .offset-md-3">
            <form>
              <h3>Want to Join Loan Shark?</h3>

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
                Already registered <a href="/login">log in?</a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
