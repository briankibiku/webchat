import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../App.css";

function LandingPage() {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    localStorage.clear();
  });

  function onChange(e) {
    setUserName(e.target.value);
  }

  const navigateToChat = async () => {
    await localStorage.setItem("userName", JSON.stringify(userName));
    const userNames = JSON.parse(localStorage.getItem("userName"));
  };
  return (
    <>
      <div className="App">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>
              Welcome to <span style={{ color: "orange" }}>Chatly</span>{" "}
            </h3>
            <Form.Label>Enter your preferred username to proceed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={onChange}
            />
          </Form.Group>
          <a
            className="btn btn-primary"
            variant="primary"
            type="submit"
            onClick={navigateToChat}
            href="all-chats/"
          >
            Submit
          </a>
        </Form>
      </div>
    </>
  );
}

export default LandingPage;
