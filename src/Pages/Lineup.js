import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Roster from "../Components/Roster";
import { useData } from "../Utilities/DataContext";

export default function Lineup(props) {
  const { data } = useData();

  const { id } = useParams();
  let members = [
    { id: 1, name: "Mike Mills" },
    { id: 2, name: "Andrew Mills" },
    { id: 3, name: "Joel Storrow" },
    // { id: 4, name: "Dylan Prezkop" },
    { id: 5, name: "Clark Spencer" },
    { id: 6, name: "Team Zimmer" },
  ];

  let currentRoster = parseInt(id);

  const team = data.find((d) => d.id === currentRoster);

  // TODO: SQL Query to clear rosters in PHPMyAdmin --> UPDATE `athletes` SET `active`=FALSE,`name`='',`team`=''
  // TODO: SQL Query to clear points in PHPMyAdmin --> UPDATE `weeks` SET `points`='0'

  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center slogan">LINEUP</h1>
          <hr></hr>
          <Col className="col-6">
            <Row>
              <Dropdown>
                <Dropdown.Toggle variant="light btn-lg" id="dropdown-basic">
                  {members.find((member) => member.id === currentRoster)?.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {members.map((member) => (
                    <Dropdown.Item
                      key={member.id}
                      as={Link}
                      to={`/lineup/${member.id}`}
                    >
                      {member.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </Col>
          <Col className="col-6">
            <h2>Total Points: {team?.points}</h2>
          </Col>
        </Row>
        <br></br>
      </Container>
      <Container>
        <Row>
          <Col>
            <Row>
              <Roster
                currentRoster={currentRoster}
                token={props.token}
                userData={props.userData}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <br></br>
    </>
  );
}
