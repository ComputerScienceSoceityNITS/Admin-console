import React, { useState } from "react";
import MemberPage from "./pages/memberPage";
import EventPage from "./pages/eventPage";
import "./styles/App.css";
function App() {
  const [pageRoute, setPageRoute] = useState(true);
  return (
    <div className="App">
      <div className="controlBoard">
        <p id="eve" onClick={() => setPageRoute(!pageRoute)} className={pageRoute ? "activeLink" : null}>
          Events
        </p>
        <p id="mem" onClick={() => setPageRoute(!pageRoute)} className={pageRoute ? null : "activeLink"}>
          Members
        </p>
      </div>
      <div className="pages">{pageRoute ? <MemberPage /> : <EventPage />}</div>
    </div>
  );
}

export default App;
