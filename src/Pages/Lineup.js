import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import Roster from "../Components/Roster";
import {useData} from "../Utilities/DataContext";

export default function Lineup(props) {
  const { data, setCurrentRoster } = useData();
  
  let d = new Date();
  let day = d.getDay();

  let sum = "sum of points total";

  const { id } = useParams();
  let members = [
    "Mike Mills",
    "Andrew Mills",
    "Joel Storrow",
    "Dylan Prezkop",
    "Clark Spencer",
    "Team Zimmer",
  ];

  let currentRoster = parseInt(id);

  const team = data.find((d) => d.id === currentRoster);

  let [lineup, setLineup] = useState(false);
  const lockButtons = () => {
    setLineup(true);
  };

  //   const currentRoster = rosters.find((roster) => roster.id === parseInt(id));
  //   let sum = 0;
  //   if (currentRoster) {
  //     sum = currentRoster.weeks.reduce((acc, current) => {
  //       return (acc += current.points);
  //     }, 0);
  //   }

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
                  value={members[currentRoster]}
                >
                  {/* //TO DO: props.roster.name */}
                  {members[currentRoster - 1]}
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
    </>
  );
}
