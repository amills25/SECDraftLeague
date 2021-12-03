import React from "react";
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
          <Col>
            <Row>
              <Roster />
            </Row>
            <Row className="justify-content-center">
              <Col className="col-2">
                {Object.keys(props.userData).length > 0 &&
                  (props.userData?.user_memberships[0].membership_id === 1 ||
                    props.userData?.user_memberships[0].id ===
                      parseInt(id)) && (
                    <Button
                      variant="warning"
                      size="lg"
                      // onClick={() => setLineup()}
                    >
                      Submit Lineup
                    </Button>
                  )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
