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
                <Dropdown.Item href="#/amills">A. Mills</Dropdown.Item>
                <Dropdown.Item href="#/jstorrow">J. Storrow</Dropdown.Item>
                <Dropdown.Item href="#/mmills">M. Mills</Dropdown.Item>
                <Dropdown.Item href="#/prezkop">Prezkop</Dropdown.Item>
                <Dropdown.Item href="#/spencer">Spencer</Dropdown.Item>
                <Dropdown.Item href="#/zimmer">Zimmer</Dropdown.Item>
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
