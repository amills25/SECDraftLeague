import React from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import Roster from "../Components/Roster";

export default function Lineup() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center">LINEUP</h1>
          <hr></hr>
          <Col>
            <Row>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Select Team
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/2">Andrew Mills</Dropdown.Item>
                  <Dropdown.Item href="#/5">Clark Spencer</Dropdown.Item>
                  <Dropdown.Item href="#/4">Dylan Prezkop</Dropdown.Item>
                  <Dropdown.Item href="#/3">Joel Storrow</Dropdown.Item>
                  <Dropdown.Item href="#/1">Mike Mills</Dropdown.Item>
                  <Dropdown.Item href="#/6">Team Zimmer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Row>
              <Roster />
            </Row>
            <Row className="justify-content-center">
              <Col className="col-2">
                <Button
                  variant="warning"
                  size="lg"
                  // onClick={() => setLineup()}
                >
                  Submit Lineup
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
