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
        client_id: 2,
        client_secret: "Vzp5VKKgADHZS3a6BCQ2iLXC4agtDNnlpZ8i08cv",
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
        props.saveToken(response.data.access_token);
      })
      .catch(function (error) {});
  };

  const handleChange = (e) =>
    setLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return Object.keys(props.userData).length > 0 && props.token.length > 0 ? (
    <Navigate to={`/lineup/${props.userData?.user_memberships[0]?.user_id}`} />
  ) : (
    <>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col className="col-3 myContainer bg-white myBorder rounded">
            <h1 className="text-center slogan">LOGIN</h1>
            <hr></hr>
            <Form onSubmit={getLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  value={login.email || ""}
                  onChange={handleChange}
                  className="bg-white"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  value={login.password || ""}
                  onChange={handleChange}
                  className="bg-white"
                />
              </Form.Group>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
              {/* <br></br>
              <br></br>
              <Button
                variant="outline-dark"
                type="button"
                // onClick={resetPassword}
              >
                Reset Password
              </Button> */}
              {/* <br></br>
              <br></br>
              <Button variant="outline-dark" type="submit">
                New User
              </Button> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
