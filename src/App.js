import "./App.css";
import { Button, Form } from "react-bootstrap";

function App() {
  function navigateToChat() {
    console.log("Hello Chatly");
  }
  return (
    <>
      <div className="App">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Welcome to Chatly</h3>
            <Form.Label>Enter your preferred username to proceed</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
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
