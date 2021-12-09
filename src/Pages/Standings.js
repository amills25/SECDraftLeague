import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import StandingsTable from "../Components/StandingsTable";

export default function Standings() {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="text-center">STANDINGS</h1>
            <hr></hr>
          </Col>
        </Row>
        <StandingsTable />
        {/* <Row className="justify-content-center">
          <Col className="col-6">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Current Point Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>lineup.name</td>
                  <td>lineup.total</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>lineup.name</td>
                  <td>lineup.total</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>lineup.name</td>
                  <td>lineup.total</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>lineup.name</td>
                  <td>lineup.total</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>lineup.name</td>
                  <td>lineup.total</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>lineup.name</td>
                  <td>lineup.total</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}
