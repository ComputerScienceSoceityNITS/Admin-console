import React, { useState, useEffect, useRef } from 'react';
import Login from "../components/login";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";
import "../styles/AuthPage.css";
const AuthPage = () => {
  const [login, setLogin] = useState(true);
  const [In, setIn] = useState(false);//to check whether member is in or not to the admin console. 
  const conatinerRef = useRef(false);
  const handleClick = () => {
    setLogin(!login);
    conatinerRef.current.classList.toggle("active");
  };
  return (
    <div>
      {/* <Navbar setIn={setIn} In={In} /> */}
      <div className="container" ref={conatinerRef}>
        <Login setIn={setIn} In={In} />
        {/* change in and setin in longin page after chacking whether member is in or not to the admin console. */}
        <div className="side-div">
          <button type="button" onClick={handleClick}>
            {" "}
            {login ? "Signup" : "Login"}
          </button>
        </div>
        <Signup setIn={setIn} In={In} />
        {/* change in and setin in signup page after chacking whether member is in or not to the admin console. */}
      </div>
    </div>
  )
}
export default AuthPage