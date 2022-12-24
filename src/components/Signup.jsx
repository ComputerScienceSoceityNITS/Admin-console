import React from "react";


const Signup = ({setLogin,login}) => {
  
  return (
    <div className="Form">
    <h1>Sign Up</h1>
  <form>
  <input
        type="mail"
        placeholder="Email"
       
      />
  <input
    type="text"
    placeholder="Password"
   
  />
  <input
        type="text"
        placeholder="Confirm Password"
       
      />
  
  <button  >
  Signup
  </button>
  </form>
</div>
  );
};

export default Signup;


