import React from "react";


const Login = ({setLogin,login}) => {
  
  return (
    <div className="Form">
      <h1>Login</h1>
    <form>
    <input
      type="mail"
      placeholder="Email"
      
    />
    
    <input
      type="text"
      placeholder="Password"
     
    />
    
    
    <button  >
      Login
    </button>
    </form>
</div>
  );
};

export default Login;


