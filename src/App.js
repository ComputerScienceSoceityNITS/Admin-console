import React, { useState, useEffect } from "react";
import MemberPage from "./pages/memberPage";
import EventPage from "./pages/eventPage";
import "./styles/App.css";
function App() {
  const [pageRoute, setPageRoute] = useState(true);
  useEffect(() => {
    if (!pageRoute) {
      document.querySelector("#eve").classList.add("activeLink");
      document.querySelector("#mem").classList.remove("activeLink");
    } else {
      document.querySelector("#mem").classList.add("activeLink");
      document.querySelector("#eve").classList.remove("activeLink");
    }
  }, [pageRoute]);
  return (
    <div className="App">
      <div className="controlBoard">
        <p id="eve" onClick={() => setPageRoute(!pageRoute)}>
          Events
        </p>
        <p id="mem" onClick={() => setPageRoute(!pageRoute)}>
          Members
        </p>
      </div>
      <div className="pages">{pageRoute ? <MemberPage /> : <EventPage />}</div>
    </div>
  );
}

export default App;
