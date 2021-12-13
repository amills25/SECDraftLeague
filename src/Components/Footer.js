import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="text-center">
      <Row className="row-1">
        <Col>
          <h1 className="slogan">IT JUST MEANS MORE.</h1>
          Developed by Andrew Mills, 2021.
        </Col>
      </Row>
    </Container>
  );
}
