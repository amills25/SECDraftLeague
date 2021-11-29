import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col className="myBorder col-3 border border-5 rounded-3 bg-white">
            <ListGroup as="ol" numbered variant="flush">
              <div className="fw-bold text-center">
                <u>Current Standings:</u>
              </div>
              <ListGroup.Item as="li">
                lineup.name -- lineup.total
              </ListGroup.Item>
              <ListGroup.Item as="li">
                lineup.name -- lineup.total
              </ListGroup.Item>
              <ListGroup.Item as="li">
                lineup.name -- lineup.total
              </ListGroup.Item>
              <ListGroup.Item as="li">
                lineup.name -- lineup.total
              </ListGroup.Item>
              <ListGroup.Item as="li">
                lineup.name -- lineup.total
              </ListGroup.Item>
              <ListGroup.Item as="li">
                lineup.name -- lineup.total
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="col-6 text-center">
            <Image className="logo" src="../img/SECDraftLeagueLogo.png" fluid />
          </Col>
          <Col className="myBorder col-3 border border-5 rounded-3 bg-white">
            <ListGroup numbered variant="flush">
              <div className="fw-bold text-center">
                <u>Recent Champions:</u>
              </div>
              <ListGroup.Item>2021: Andrew Mills</ListGroup.Item>
              <ListGroup.Item>2020: Andrew Mills</ListGroup.Item>
              <ListGroup.Item>2019: Joel Storrow</ListGroup.Item>
              <ListGroup.Item>2018: Mike Mills</ListGroup.Item>
              <ListGroup.Item>2017: Team Zimmer</ListGroup.Item>
              <ListGroup.Item>2016: Mike Mills</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col className="col-2"></Col>
          <Col className="col-8 text-center">
            <h4>[Current Week]</h4>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </Col>
          <Col className="col-2"></Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </>
  );
}
