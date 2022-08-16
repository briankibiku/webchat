import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllChats from "./components/AllChats";
import IndividualChat from "./components/IndividualChat";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              caseSensitive={false}
              element={<LandingPage />}
            />
            <Route
              exact
              path="/individual/:username"
              caseSensitive={false}
              element={<IndividualChat />}
            />
            <Route
              exact
              path="/all-chats"
              caseSensitive={false}
              element={<AllChats />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
