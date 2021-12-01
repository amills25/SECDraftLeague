import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

export default function Home() {
  //will need to make a fetch for the blog content
  const [blogPost, setBlogPost] = useState([]);

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    axios({
      method: "get",
      url: "https://Laravel-awmills25552543.codeanyapp.com/api/v1/blogpost",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        Authorization: `Bearer ${token}`,
      },
    }).then(function (response) {
      console.log(response);
      setBlogPost(JSON.parse(response.data[0].content));
    });
  }, []);

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
            <h4>[lineup.week_id]</h4>
            {blogPost.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
            <textarea
              cols={60}
              value={blogPost.map((content, index) => content + "\n\n")}
            />
          </Col>
          <Col className="col-2"></Col>
        </Row>
      </Container>
    </>
  );
}
