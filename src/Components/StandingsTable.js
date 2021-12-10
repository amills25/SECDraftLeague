import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Standings from "../Pages/Standings";

export default function StandingsTable(props) {
  //map over arranged standings array
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Current Point Total</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, index) => (
                  <tr>
                    <td key={index}>{index + 1}</td>
                    <td>Member Name</td>
                    <td>Lineup Points</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
