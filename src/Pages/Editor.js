import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

export default function Editor(props) {
  const [content, setContent] = useState("");
  const [updateStatus, setUpdateStatus] = useState("idle");
  const [fetchStatus, setFetchStatus] = useState("idle");

  useEffect(() => {
    async function fetchCurrentBlogContent() {
      setFetchStatus("loading");
      //axios call
      //to do -- fetch current blog content on load
      //to do -- set default content state to current blog content
      //if successful fetch, setFetchStatus("success");
      //map through array of strings to render on page
    }
    fetchCurrentBlogContent();
  }, []);

  function handleChange(event) {
    setContent(event.target.value);
  }

  async function submit(event) {
    event.preventDefault();
    setUpdateStatus("loading");
    //axios post to update the blog content
    //if successful, navigate to home page
    console.log(content);
  }

  return props.user.membership !== "Commissioner" ? (
    <Container>
      Error 401 -- Unauthorized User, must be commissioner. //Use Navigate later
    </Container>
  ) : (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={submit} disabled={updateStatus === "loading"}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write new blog post below</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
