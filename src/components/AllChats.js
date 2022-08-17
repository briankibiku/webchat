import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

function AllChats() {
  const [userName, setUserName] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const peopleList = [
      { id: 1, name: "Ken", country: "Austria", status: "Available" },
      { id: 2, name: "Omollo", country: "Belgium", status: "Engaged" },
      { id: 3, name: "June", country: "Canada", status: "Available" },
      { id: 4, name: "Doe", country: "Denmark", status: "Engaged" },
      { id: 5, name: "Sly", country: "Egypt", status: "Available" },
    ];

    const userNames = JSON.parse(localStorage.getItem("userName"));
    localStorage.setItem("people", JSON.stringify(peopleList));
    const peopleListLS = JSON.parse(localStorage.getItem("people"));

    if (peopleListLS) {
      setPeople(peopleListLS);
    }
    if (userNames) {
      setUserName(userNames);
    }
  }, [userName]);

  function setChatBuddy(name) {
    localStorage.setItem("chatBuddy", JSON.stringify(name));
    const chatBud = JSON.parse(localStorage.getItem("chatBuddy"));
    console.log(chatBud);
  }
  return (
    <>
      <div className="chat-page">
        <h5>
          Hello <span style={{ color: "orange" }}>{userName}</span>
        </h5>
        <div>Here are people you can chat with</div>
        <br />
        {people.map((person) => {
          return (
            <div key={person.id}>
              <a
                className="person-card"
                href={`/individual/${person.name}`}
                onClick={setChatBuddy(person.name)}
              >
                <div>
                  <div className="user-name">
                    <div>{person.name}</div>

                    {person.status === "Available" ? (
                      <div className="row-flex">
                        <div className="country-name">Online</div>
                        <div className="available"></div>
                      </div>
                    ) : (
                      <div className="row-flex">
                        <div className="country-name">Engaged</div>
                        <div className="not-available"></div>
                      </div>
                    )}
                  </div>
                  <div className="country-name">
                    <span>Country: </span>
                    {person.country}
                  </div>
                </div>
              </a>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllChats;
