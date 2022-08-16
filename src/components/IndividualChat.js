import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "../App.css";
import { Form, InputGroup } from "react-bootstrap";

function IndividualChat() {
  const { userName } = useParams();

  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log("CHAT BUDDY");
    console.log(userName);
    const peopleList = [
      { id: 1, massage: "Hey", time: "06:30", status: "Available" },
      {
        id: 3,
        massage: "Are you in London?",
        time: "11:12",
        status: "Available",
      },
      { id: 2, massage: "Hello", time: "13:00", status: "Engaged" },
      {
        id: 4,
        massage: "Please call me back",
        time: "15:23",
        status: "Engaged",
      },
      {
        id: 5,
        massage: "Bye! off to Kenya!",
        time: "19:00 ",
        status: "Available",
      },
    ];

    const userNames = JSON.parse(localStorage.getItem("userName"));
    localStorage.setItem("people", JSON.stringify(peopleList));
    const peopleListLS = JSON.parse(localStorage.getItem("people"));

    const chatBud = JSON.parse(localStorage.getItem("chatBuddy"));

    if (peopleListLS) {
      setPeople(peopleListLS);
    }
  }, [userName]);

  function onChange() {
    console.log("Hello Chatly");
  }

  return (
    <>
      <div className="chat-page">
        <div>
          <h5>
            Chatly <span style={{ color: "orange" }}>{userName}</span>
          </h5>
          <div>Your conversation with {}</div>
          <br />
          {people.map((person) => {
            return (
              <div key={person.id}>
                <a className="person-card" href="/individual/Ken">
                  <div>
                    <div className="message">
                      <div>{person.massage}</div>
                    </div>
                    <div className="message-meta">
                      <span>Time: </span>
                      {person.time}
                    </div>
                  </div>
                </a>
                <br />
              </div>
            );
          })}
        </div>

        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Type message here..."
              aria-label="Type message here..."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              <a
                className="btn btn-primary"
                variant="primary"
                type="submit"
                onClick={onChange}
                href="all-chats/"
              >
                Send
              </a>
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    </>
  );
}

export default IndividualChat;
