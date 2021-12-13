import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

export default function MyNavbar(props) {
  const logOut = () => {
    axios({
      method: "get",
      url: "https://laravel-awmills25552543.codeanyapp.com/api/v1/logout",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + props.token,
      },
    })
      .then(function (response) {
        props.removeToken();
        props.removeUser();
      })
      .catch(function (error) {
        props.removeToken();
        props.removeUser();
      });
  };
  return (
    <Navbar>
      <Container className="myBorder border-5 rounded-3 bg-white container-fluid">
        <Nav className="me-auto">
          <Nav.Link
            className="fw-bold"
            activeClassName={"active"}
            as={NavLink}
            to="/home"
          >
            HOME
          </Nav.Link>
          <Nav.Link
            className="fw-bold"
            activeClassName={"active"}
            as={NavLink}
            to={
              props.userData.id ? `/lineup/${props.userData.id}` : `/lineup/1`
            }
          >
            MY TEAM
          </Nav.Link>
          <Nav.Link
            className="fw-bold"
            activeClassName={"active"}
            as={NavLink}
            to="/standings"
          >
            STANDINGS
          </Nav.Link>
          <Nav.Link
            className="fw-bold"
            activeClassName={"active"}
            as={NavLink}
            to="/schedule"
          >
            SCHEDULE
          </Nav.Link>
          <Nav.Link
            className="fw-bold"
            activeClassName={"active"}
            as={NavLink}
            to="/history"
          >
            HALL OF FAME
          </Nav.Link>
          <Nav.Link
            className="fw-bold"
            activeClassName={"active"}
            as={NavLink}
            to="/rules"
          >
            RULES
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end fw-bold">
          <Nav>
            {props.token.length > 0 ? (
              <Nav.Link as={Link} to="/home" onClick={logOut}>
                LOGOUT
              </Nav.Link>
            ) : (
              <Nav.Link activeClassName={"active"} as={NavLink} to="/login">
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
