import React, { useState } from "react";
import MemberPage from "./pages/memberPage";
import EventPage from "./pages/eventPage";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import axios from "axios";
import { useEffect } from "react";
import {get} from 'react-cookie'
import useCookies from "react-cookie/cjs/useCookies";
import {Cookies} from 'react-cookie'

function App() {
  const [pageRoute, setPageRoute] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['css']);

  axios.defaults.withCredentials = true
  useEffect(()=>{
    if (cookies.CSS_Website!=='undefined' && cookies.CSS_Website) {
      console.log(typeof(cookies.CSS_Website));
      setAuthenticated(true)
    }
    else{
      console.log(cookies.CSS_Website);
      console.log(Cookies.get('CSS_Website'))
      console.log(document.cookie);
      setAuthenticated(false)
    }
  },[cookies.CSS_Website])

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
        <Login setIn={setAuthenticated} In={authenticated} />
      )}
    </>
  );
}

export default App;
