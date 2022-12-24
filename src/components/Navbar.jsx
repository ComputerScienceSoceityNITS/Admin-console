import React,{ useState, useEffect, useRef} from 'react';
import "../styles/Navbar.css";
const Navbar = ({setIn,In}) => {
  
  return (
    <nav >
    <h2>CSS Admin Console</h2>
    <div>

    {In && (
    
    <button type="button" className="btn" onClick={() => setIn(!In)}>Log Out</button>)}
           
    </div>   
    </nav>
  )
}

export default Navbar