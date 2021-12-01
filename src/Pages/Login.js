import React from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  let token = "";
  function handleClick(event) {
    axios({
      method: "post",
      url: "https://laravel-awmills25552543.codeanyapp.com/oauth/token",
      data: {
        //email
        //password
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        Authorization: `Bearer ${token}`,
      },
    }).then(function (response) {
      console.log(response);
      token.saveToken(response.data.data.token);
    });
  }

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
