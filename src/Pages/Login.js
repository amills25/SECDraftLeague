import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  //axios

  return (
    <>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col className="col-4">
            <h1 className="text-center">LOGIN</h1>
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
              <br></br>
              <br></br>
              <Button variant="outline-dark" type="submit">
                New User
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
