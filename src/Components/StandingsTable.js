import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Standings from "../Pages/Standings";
import { useData } from "../Utilities/DataContext";

export default function StandingsTable(props) {
  //map over arranged standings array
  const { data, arrangeData } = useData();
  console.log(data);

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
                {arrangeData(data).map((user, index) => (
                  <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.points}</td>
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
