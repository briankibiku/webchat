import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "../App.css";
import { Form, InputGroup } from "react-bootstrap";

function IndividualChat() {
  const { chatBuddy } = useParams();

  const [message, setMessage] = useState([]);
  const [chats, setChats] = useState([]);
  const [userName, setUserName] = useState([]);

  var listIsEmpty = true;

  useEffect(() => {
    const userNames = JSON.parse(localStorage.getItem("userName"));
    if (userNames) {
      setUserName(userNames);
    }
    console.log("CHAT BUDDY");
    console.log(chatBuddy);
    console.log(userName);
  }, [chats]);

  function onChange(e) {
    let newMessage = {
      time: new Date(),
      message: e.target.value,
    };
    setMessage(newMessage);
  }

  const saveAndFetchMessages = async () => {
    // get list of chats and append to it
    // const oldmessages = JSON.parse(localStorage.getItem("chats"));
    // if(oldmessages == null) {}
    let uploadChat = [];
    uploadChat.push(message);
    let chatPayload = {
      names: chatBuddy + userName,
      chats: uploadChat,
    };
    await localStorage.setItem("chats", JSON.stringify(chatPayload));
    const messages = JSON.parse(localStorage.getItem("chats"));

    console.log(messages);
    setChats(messages.chats);
    console.log("CHATS");
  };

  return (
    <>
      <div className="chat-page-personal">
        <div>
          <h5>Chatly</h5>
          <h6>
            You are chatting with{" "}
            <span style={{ color: "orange" }}>{chatBuddy}</span>
          </h6>
          <br />
          {chats.length == 0 ? (
            <div>No messages yet...</div>
          ) : (
            <div style={{ textAlign: "right" }}>
              {chats.map((chat) => {
                return (
                  <div key={chat.message}>
                    <div className="message">{chat.message}</div>
                    <div className="message-meta">{chat.time}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Type message here..."
              aria-label="Type message here..."
              aria-describedby="basic-addon2"
              onChange={onChange}
            />
            <InputGroup.Text id="basic-addon2">
              <a
                className="btn btn-primary"
                variant="primary"
                type="submit"
                onClick={saveAndFetchMessages}
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
