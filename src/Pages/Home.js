import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image, ListGroup, Button } from "react-bootstrap";

export default function Home(props) {
  const [blogPost, setBlogPost] = useState([]);
  const [editing, setEditing] = useState(false);

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
        // Authorization: `Bearer ${token}`,
      },
    }).then(function (response) {
      console.log(response);
      setBlogPost(JSON.parse(response.data[0].content));
    });
  }, []);

  const handleChange = (e) => {
    setBlogPost(e.target.value.split("\n\n"));
  };

  const handleEdit = () => {
    setEditing((prevEdit) => {
      if (!prevEdit === false) {
        console.log("saving to db");
        axios({
          method: "post",
          url:
            "https://Laravel-awmills25552543.codeanyapp.com/api/v1/blogpost/edit",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Credentials": true,
            Authorization: `Bearer ${props.token}`,
          },
          data: {
            content: blogPost,
          },
        }).then(function (response) {
          console.log(response);
        });
      }
      return !prevEdit;
    });
  };

  return (
    <>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col className="myBorder col-3 border-5 rounded-3 bg-white">
            <ListGroup as="ol" numbered variant="flush">
              <div className="fw-bold text-center">
                <h5>
                  <u>Current Standings:</u>
                </h5>
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
                <h5>
                  <u>Recent Champions:</u>
                </h5>
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
            {editing ? (
              <textarea
                cols={100}
                rows={10}
                value={blogPost.join("\n\n")}
                onChange={handleChange}
              />
            ) : (
              blogPost.map((content, index) => <p key={index}>{content}</p>)
            )}
            {Object.keys(props.userData).length > 0 &&
              props.userData?.user_memberships[0]?.membership_id === 1 && (
                <Button variant="outline-dark" onClick={handleEdit}>
                  {editing ? "Save blog post" : "Edit blog post"}
                </Button>
              )}
            {editing && (
              <Button
                variant="outline-dark"
                onClick={() => setEditing(!editing)}
              >
                Cancel Edit
              </Button>
            )}
          </Col>
          <Col className="col-2"></Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </>
  );
}
