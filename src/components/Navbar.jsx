import React from 'react';
import "../styles/Navbar.css";
import { useCookies } from 'react-cookie';
const Navbar = ({ setIn, In }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['css']);

  const handleLogout = () => {
    setCookie('CSS_Website', undefined, { path: '/' })
    setIn(false)
  }
  return (
    <nav >
      <h2>CSS Admin Console</h2>
      <div>
        {In ?
          (<button type="button" className="btn" onClick={handleLogout}>Log Out</button>) : ""
        }
      </div>
    </nav>
  )
}

export default Navbar;