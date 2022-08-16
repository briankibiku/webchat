import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userNames = JSON.parse(localStorage.getItem("userName"));
    console.log(userNames);
    // localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  function onChange(e) {
    setUserName(e.target.value);
  }

  const navigateToChat = async () => {
    await localStorage.setItem("userName", JSON.stringify(userName));
    const userNames = JSON.parse(localStorage.getItem("userName"));
    console.log(userNames);
  };

  return (
    <>
      <div className="App">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Welcome to Chatly</h3>
            <Form.Label>Enter your preferred username to proceed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={navigateToChat}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default App;
