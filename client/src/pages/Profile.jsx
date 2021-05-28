import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card } from "reactstrap";

// Commponents Import
import V_PieChart from "../components/V_PieChart/index";
import V_BarGraph from "../components/V_BarGraph/index";
import V_ProgressWheel from "../components/V_ProgressWheel";
// import V_ProgressWheel from "../components/V_ProgressWheel/index";

import logo from "../img/loansharklogo.png";

function init() {
  return (
    <>
      <Container className="themed-container" fluid={true}>
        <Row xs="12">
          <Col className="sidebar">
            <img className="logo-size" src={logo} alt="Logo" />
            <h5>Current Loans</h5>
            <p>LOAN 1</p>
            <p>LOAN 1</p>
            <p>LOAN 1</p>
            <p>LOAN 1</p>
          </Col>

          <Col className="content" xs="9">
            <h1>University Of Denver</h1>
            <h3>Loan total = $14,000</h3>
            <div className="profile-flex-box">
              {/* <div className="graph-size">
                <V_PieChart />
              </div>
              <div className="graph-size">
                <V_BarGraph />
              </div> */}
              <div className="graph-size">
                <V_ProgressWheel />
              </div>
            </div>

            <Row>
              <Col xs="4">
                <Card className="text-center p-3">
                  <p>Payments made</p>
                  <hr className="hr" />
                  <h2>13</h2>
                </Card>
              </Col>

              <Col xs="4">
                <Card className="text-center p-3">
                  <p>Intrest Rate</p>
                  <hr className="hr" />
                  <h2>3.6%</h2>
                </Card>
              </Col>

              <Col xs="4">
                <Card className="text-center p-3">
                  <p>Lenght</p>
                  <hr className="hr" />
                  <h2>3 Years</h2>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default init;
