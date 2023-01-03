import axios from "axios";
import React, { useState } from "react";
import "../styles/login.css";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";


const Login = ({ setIn, In }) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(['css']);


  const handleLogin = (e) => {
    e.preventDefault();
    async function login() {
      try {
        const res = await axios.post(
          `${ServerUrl}/login`,
          {
            "email": email,
            "password": password
          }
        );

        if (res.status === 201) {
          setCookie("CSS_Website", res.data.token, { path: '/' })
          setIn(true);
        } else {
          toast.error("Wrong email or password");
        }
      } catch (err) {
        toast.error("error occured while login");
      }
    }
    login();
  };

  return (
    <div className="login">
      <div className="Form">
        <h1>Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


