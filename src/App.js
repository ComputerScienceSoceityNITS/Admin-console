import React, { useState } from "react";
import MemberPage from "./pages/memberPage";
import EventPage from "./pages/eventPage";
import "./styles/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [pageRoute, setPageRoute] = useState(true);
  return (
    <div className="App">
      <ToastContainer />
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
      <div className="pages">{pageRoute ? <MemberPage /> : <EventPage />}</div>
    </div>
  );
}

export default App;
