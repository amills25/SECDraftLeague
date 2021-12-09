import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function StandingsTable() {
  //map over arranged standings array
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col>
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
