import React from "react";
import "./style.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Container>
        <Row className="row">
          <Col xs={6}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
          </Col>
          {/* THIS IS THE BREAK ONLY BECASUE OF PRETTIER */}
          <Col xs={6}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
