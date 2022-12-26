import React from 'react';
import "../styles/Navbar.css";
// import axios from 'axios';
const Navbar = ({ setIn, In }) => {
  const handleLogout = () => {
    setIn(!In);
    // axios.get("http://tasty-crab-hosiery.cyclic.app/api/admin/logout")
  }
  console.log({ In, setIn });
  return (
    <nav >
      <h2>CSS Admin Console</h2>
      <div>
        {In ?
          (<button type="button" className="btn" onClick={handleLogout}>Log Out</button>) :
          (<button type="button" className="btn" onClick={() => setIn(!In)}>Log In</button>) //to be removed later. on login logout will show, but login will be removed.
        }
      </div>
    </nav>
  )
}

export default Navbar;