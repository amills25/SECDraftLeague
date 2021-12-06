import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import Roster from "../Components/Roster";

export default function Lineup(props) {
  const { id = 1 } = useParams();
  //TODO: create an array of members and connect the dropdown to their index
  let members = [
    "Mike Mills",
    "Andrew Mills",
    "Joel Storrow",
    "Dylan Prezkop",
    "Clark Spencer",
    "Team Zimmer",
  ];

  let currentTeam = parseInt(id);
  console.log(currentTeam);

  const [active, setActive] = useState(false);

  const isActive = () => {
    setActive(true);
  };

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
          <Col>
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
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-1">
          {Object.keys(props.userData).length > 0 &&
              (props.userData?.user_memberships[0].membership_id === 1 ||
                props.userData?.user_memberships[0].id === parseInt(id)) && (
                    {Array.from({ length: 9 }).map((_, index) => (
                      <Row>
                        <button
                          type="button"
                          onClick={() => isActive()}
                          className="btn"
                        >
                          {active === true ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="currentColor"
                              className="bi bi-check-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="currentColor"
                              className="bi bi-check-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                          )}
                        </button>
                      </Row>
                    ))}
              )}
          </Col>
          <Col className="col-11">
            <Row>
              <Roster />
            </Row>
          </Col>
        </Row>
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
