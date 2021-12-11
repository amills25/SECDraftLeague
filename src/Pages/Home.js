import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function Home(props) {
  const [blogPost, setBlogPost] = useState([]);

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
      setBlogPost(JSON.parse(response.data[0].content));
    });
  }, []);

  const handleChange = (e) => {
    setBlogPost(e.target.value.split("\n\n"));
  };

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing((prevEdit) => {
      if (!prevEdit === false) {
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
        }).then(function (response) {});
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
          <Col className="col text-center">
            <Image className="logo" src="../img/SECDraftLeagueLogo.png" fluid />
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
