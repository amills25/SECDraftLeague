import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login(props) {
  const [login, setLogin] = useState({});

  const getLogin = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://laravel-awmills25552543.codeanyapp.com/oauth/token",
      data: {
        username: login.email,
        password: login.password,
        grant_type: "password",
        client_id: "2",
        client_secret: "4omddLSCpbDQb0nVxdcB8qzen8DRav4BVV71zuup",
        scope: "",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        // Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
        props.saveToken(response.data.access_token);
      })
      .catch(function (error) {
        console.log({ error });
      });
  };

  return props.token.length > 0 ? (
    <Navigate to="/lineup" />
  ) : (
    <>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col className="col-4">
            <h1 className="text-center">LOGIN</h1>
            <hr></hr>
            <Form onSubmit={getLogin}>
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
