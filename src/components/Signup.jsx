import React from "react";


const Signup = ({ setIn, In }) => {

  return (
    <div className="Form">
      <h1>Sign Up</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
        />

        <button  >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;


