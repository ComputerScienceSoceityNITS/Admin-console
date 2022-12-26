import axios from "axios";
import React, { useState } from "react";
import "../styles/login.css";
import { toast } from "react-toastify";


const Login = ({ setIn, In }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const sendData = JSON.stringify({
    email,
    password
  });
  const handleLogin = (e) => {
    e.preventDefault();
    async function login() {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/admin/member/login",
          sendData
        );
        console.log(res);
        if (res.status === 201) {
          setIn(true);
        } else {
          toast.error("Wrong email or password");
        }
      } catch (err) {
        console.log(err);
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


