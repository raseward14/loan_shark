import { Container, Row, Col } from "reactstrap";
import "./style.css";

function Introduction() {
  return (
    <div className="main-text">
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
            <h1> What is Loan Shark?</h1>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
            Loan Shark is a loan tracker. Plan and simple. It allows you to
            keeps tabs on all of the loan information that you need. With loan
            shark you can have the abuility to make sure that you can take a
            bite out of student loans.
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
      <Container></Container>
    </div>
  );
}

export default Introduction;

// whats loanshark

// signup button
// signup form

// username, email, password

// sign up button

// signin button
// sign in form

// username, password

// login button
