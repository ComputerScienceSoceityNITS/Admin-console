import React, { useState } from "react";
import MemberPage from "./pages/memberPage";
import EventPage from "./pages/eventPage";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/login";

function App() {
  const [pageRoute, setPageRoute] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <>
      <Navbar setIn={setAuthenticated} In={authenticated} />
      {authenticated ? (
        <div className="App">
          <div className="controlBoard">
            <p
              id="eve"
              onClick={() => setPageRoute(!pageRoute)}
              className={pageRoute ? null : "activeLink"}
            >
              Events
            </p>
            <p
              id="mem"
              onClick={() => setPageRoute(!pageRoute)}
              className={pageRoute ? "activeLink" : null}
            >
              Members
            </p>
          </div>
          <div className="pages">
            {pageRoute ? <MemberPage /> : <EventPage />}
          </div>
          {/* <AuthPage /> */}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
