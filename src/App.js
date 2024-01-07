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
import { BiAbacus, BiCodeAlt, BiImage } from "react-icons/bi";
import ImagePage from "./pages/imagePage";
function App() {
  const [pageRoute, setPageRoute] = useState("Members");
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
    // setPageRoute(!pageRoute);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };
  
  const toggleMenu = () => {
    setClicked(!clicked);
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
          <button className="menu-toggle" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
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
                id="mem"
                onClick={(e) => {
                  setPageRoute("Members");
                  handleRouteChange(e);
                }}
                className={pageRoute === "Members" ? "activeLink" : null}
              >
                <MdGroups /> {clicked ? "Members" : ""}
              </p>
              {/* <p
                id="eve"
                onClick={handleRouteChange}
                className={pageRoute ? null : "activeLink"}
              >
                <MdEventNote /> {clicked ? "Events" : ""}
              </p> */}
              <p
                id="eve"
                onClick={(e) => {
                  setPageRoute("Abacus");
                  handleRouteChange(e);
                }}
                className={pageRoute === "Abacus" ? "activeLink" : null}
              >
                <BiAbacus /> {clicked ? "Abacus" : ""}
              </p>
              <p
                id="eve2"
                onClick={(e) => {
                  setPageRoute("Enigma");
                  handleRouteChange(e);
                }}
                className={pageRoute === "Enigma" ? "activeLink" : null}
              >
                <BiCodeAlt /> {clicked ? "Enigma" : ""}
              </p>
              <p
                id="eve3"
                onClick={(e) => {
                  setPageRoute("Images");
                  handleRouteChange(e);
                }}
                className={pageRoute === "Images" ? "activeLink" : null}
              >
                <BiImage /> {clicked ? "Images" : ""}
              </p>
            </div>
            <div className="pages">
              {pageRoute === "Members" && <MemberPage mode={mode} />}
              {pageRoute === "Abacus" && (
                <EventPage
                  mode={mode}
                  event={"abacus"}
                  theTwoEvent={pageRoute}
                />
              )}
              {pageRoute === "Enigma" && (
                <EventPage
                  mode={mode}
                  event={"enigma"}
                  theTwoEvent={pageRoute}
                />
              )}
              {pageRoute === "Images" && <ImagePage />}
              {/* (
                <EventPage mode={mode} />
              )} */}
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
