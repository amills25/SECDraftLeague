import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Navbar,
  Image,
} from "react-bootstrap";

export default function NewUser() {
  //axios

  return (
    <>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col className="col-4">
            <h1 className="text-center">CREATE NEW USER</h1>
            <hr></hr>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Navbar fixed="bottom">
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
      </Navbar>
    </>
  );
}
