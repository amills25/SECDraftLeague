import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image, ListGroup, Button } from "react-bootstrap";

export default function Home() {
  const [blogPost, setBlogPost] = useState([]);
  const [editing, setEditing] = useState(false);

  //once i can log in, this can be taken out
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
            Authorization: `Bearer ${token}`,
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
            {/* TODO: make only visible for commissioner */}
            <Button type="button" variant="outline-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </Button>
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
            <Button variant="outline-dark" onClick={handleEdit}>
              {editing ? "Save blog post" : "Edit blog post"}
            </Button>
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
