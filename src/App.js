import React, { useState } from "react";
import MemberPage from "./pages/memberPage";
import EventPage from "./pages/eventPage";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import axios from "axios";
import { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import useCookies from "react-cookie/cjs/useCookies";
import { MdEventNote, MdGroups } from "react-icons/md";

function App() {
  const [pageRoute, setPageRoute] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["css"]);
  const [mode, setMode] = useState(true);
  const [clicked, setClicked] = useState(false);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (cookies.CSS_Website !== "undefined" && cookies.CSS_Website) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [cookies.CSS_Website]);

  useEffect(() => {
    if (cookies.Mode !== "false" && cookies.Mode) {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [cookies.Mode]);

  const handleRouteChange = (e) => {
    setPageRoute(!pageRoute);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };

  return (
    <>
      <CookiesProvider>
        <Navbar
          setIn={setAuthenticated}
          In={authenticated}
          mode={mode}
          setMode={setMode}
        />
        {authenticated ? (
          <div className={mode ? "App bright" : "App dark"}>
            <div
              className={
                clicked
                  ? "controlBoard expandControl"
                  : "controlBoard shrinkControl"
              }
              onClick={() => setClicked(!clicked)}
              title="Control Board (Click to expand)"
            >
              <p
                id="eve"
                onClick={handleRouteChange}
                className={pageRoute ? null : "activeLink"}
              >
                <MdEventNote /> {clicked ? "Events" : ""}
              </p>
              <p
                id="mem"
                onClick={handleRouteChange}
                className={pageRoute ? "activeLink" : null}
              >
                <MdGroups /> {clicked ? "Members" : ""}
              </p>
            </div>
            <div className="pages">
              {pageRoute ? (
                <MemberPage mode={mode} />
              ) : (
                <EventPage mode={mode} />
              )}
            </div>
          </div>
        ) : (
          <Login setIn={setAuthenticated} In={authenticated} mode={mode} />
        )}
      </CookiesProvider>
    </>
  );
}

export default App;
