import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="text-center">
      <Row className="row-1">
        <Col>
          <Image
            src="./img/AMBlackXLTransBG.jpg"
            alt="Andrew Mills Logo"
            width="30"
            height="24"
          />
          Developed by Andrew Mills, 2021.
        </Col>
      </Row>
    </Container>
  );
}
