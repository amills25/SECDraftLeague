import React from "react";
import { Container, Row, Col, Dropdown, Navbar, Image } from "react-bootstrap";
import Roster from "../Components/Roster";

export default function Lineup() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center">LINEUP</h1>
          <hr></hr>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Select Team
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/amills">Andrew Mills</Dropdown.Item>
                <Dropdown.Item href="#/spencer">Clark Spencer</Dropdown.Item>
                <Dropdown.Item href="#/prezkop">Dylan Prezkop</Dropdown.Item>
                <Dropdown.Item href="#/jstorrow">Joel Storrow</Dropdown.Item>
                <Dropdown.Item href="#/mmills">Mike Mills</Dropdown.Item>
                <Dropdown.Item href="#/zimmer">Team Zimmer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Roster />
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
