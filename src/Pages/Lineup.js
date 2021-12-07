import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import Roster from "../Components/Roster";

export default function Lineup(props) {
  let d = new Date();
  let day = d.getDay();

  let sum = "sum of points total";

  const { id = 1 } = useParams();
  let members = [
    "Mike Mills",
    "Andrew Mills",
    "Joel Storrow",
    "Dylan Prezkop",
    "Clark Spencer",
    "Team Zimmer",
  ];

  let currentTeam = parseInt(id);

  let [lineup, setLineup] = useState(false);
  const lockButtons = () => {
    setLineup(true);
  };

  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center">LINEUP</h1>
          <hr></hr>
          <Col className="col-6">
            <Row>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light btn-lg"
                  id="dropdown-basic"
                  value={members[currentTeam]}
                >
                  {/* //TODO: props.roster.name */}
                  {members[currentTeam - 1]}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/lineup/2">
                    Andrew Mills
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/lineup/5">
                    Clark Spencer
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/lineup/4">
                    Dylan Prezkop
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/lineup/3">
                    Joel Storrow
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/lineup/1">
                    Mike Mills
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/lineup/6">
                    Team Zimmer
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </Col>
          <Col className="col-6">
            <h2>Total Points: {sum}</h2>
          </Col>
        </Row>
        <br></br>
      </Container>
      <Container>
        <Row>
          {/* <Col className="col-1">
            {Object.keys(props.userData).length > 0 &&
              (props.userData?.user_memberships[0].membership_id === 1 ||
                (props.userData?.user_memberships[0].id === parseInt(id) &&
                  (day === 0 || day === 1 || day === 2))) &&
              Array.from({ length: 9 }).map((_, index) => (
                <Row>
                </Row>
              ))}
          </Col> */}
          <Col>
            <Row>
              <Roster />
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-center">
          <Col className="col-2">
            {Object.keys(props.userData).length > 0 &&
              (props.userData?.user_memberships[0].membership_id === 1 ||
                props.userData?.user_memberships[0].id === parseInt(id)) && (
                <Button
                  variant="warning"
                  size="lg"
                  onClick={() => lockButtons()}
                >
                  Submit Lineup
                </Button>
              )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
