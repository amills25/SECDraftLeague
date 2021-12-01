import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

export default function Home() {
  //will need to make a fetch for the blog content
  return (
    <>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col className="myBorder col-3 border-5 rounded-3 bg-white">
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
          <Col className="myBorder col-3 border-5 rounded-3 bg-white">
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
            <h4>[week.id]</h4>
            <p>
              Back for its 39th year, The Original SEC Draft League! Where
              history trumps glitz and glamour and gimmicks!!
            </p>
            <p>
              The draft is complete. Let the games begin. Let's see who can
              score once the real games begin. Good luck!!!!
            </p>
            <p>
              Thirty-Nine years!! Wow, this league is getting some age on it.
              The Glitz and Glamour League has its fans, but the traditional
              league still has its place and has history. The traditional league
              is ready to rumble once again!!! Our trophy still has 10 years to
              go until it is full; who wants to add their name to this
              historical marker?
            </p>
            <p>
              We have heard rumors that history has been mentioned in the Glitz
              and Glamour League. Can you seriously talk about history in a
              league that is barely five years old? I guess last week is
              history, too. One final note about history: In 1985-86, a player
              by the name of Frank Kornet was drafted in the fifth round of our
              historic league. And now, 29 years later, his son played for and
              graduated from Vanderbilt. Additional historic note: South
              Carolina also had a second generation player; BJ McKie's son
              played for South Carolina. We will continue this league until
              there are grandchildren!! That, my friends, is history!
            </p>
          </Col>
          <Col className="col-2"></Col>
        </Row>
      </Container>
    </>
  );
}
