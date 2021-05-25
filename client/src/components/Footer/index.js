import { Container, Row, Col } from "reactstrap";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={4}>1</Col>
          <Col xs={4}>2</Col>
          <Col xs={4}>3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
