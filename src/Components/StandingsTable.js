import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useData } from "../Utilities/DataContext";

export default function StandingsTable(props) {
  const { data, arrangeData } = useData();

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6 myBorder bdr bg-white myPad">
            <Table striped hover responsive>
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
