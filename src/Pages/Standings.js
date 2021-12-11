import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StandingsTable from "../Components/StandingsTable";

export default function Standings(props) {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="text-center">STANDINGS</h1>
            <hr></hr>
          </Col>
        </Row>
        <StandingsTable arrangeStandings={props.arrangeStandings} />
      </Container>
    </>
  );
}
