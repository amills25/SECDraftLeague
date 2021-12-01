import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function MyNavbar(props) {
  const logOut = () => {
    axios({
      method: "get",
      url:
        "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + props.token,
      },
    })
      .then(function (response) {
        props.removeToken();
        // history.push("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Navbar className="myNav">
      <Container className="myBorder border-5 rounded-3 bg-white container-fluid">
        <Nav className="me-auto">
          <Nav.Link activeClassName={"active"} as={NavLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link activeClassName={"active"} as={NavLink} to="/lineup">
            Lineup
          </Nav.Link>
          <Nav.Link activeClassName={"active"} as={NavLink} to="/standings">
            Standings
          </Nav.Link>
          <Nav.Link activeClassName={"active"} as={NavLink} to="/schedule">
            Schedule
          </Nav.Link>
          <Nav.Link activeClassName={"active"} as={NavLink} to="/history">
            Hall of Fame
          </Nav.Link>
          <Nav.Link activeClassName={"active"} as={NavLink} to="/rules">
            Rules
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link
              activeClassName={"active"}
              as={NavLink}
              to="/newuser"
              className="ml-auto"
            >
              New User
            </Nav.Link>
            {/* {props.token.length > 0 ? (
              <Nav.Link onClick={logOut}>Logout</Nav.Link>
            ) : (
              <Nav.Link activeClassName={"active"} as={NavLink} to="/login">
                Login
              </Nav.Link>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
