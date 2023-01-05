import React from 'react';
import "../styles/Navbar.css";
import { useCookies } from 'react-cookie';
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = ({ setIn, In, mode, setMode }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['css']);

  const handleLogout = () => {
    setCookie('CSS_Website', undefined, { path: '/' });
    setIn(false);
  }
  const handleMode = () => {
    setCookie('Mode', !mode, { path: '/' });
    setMode(!mode);
  }
  return (
    <nav className={mode ? "bright" : "dark"} >
      <div className="modes" title="bright/dark modes">
        {
          mode ? <BsMoonFill className='modeIcons' onClick={handleMode} /> : <BsFillSunFill className='modeIcons' onClick={handleMode} />
        }
      </div>
      <h2>CSS Admin Console</h2>
      <div>
        {In ?
          (<button type="button" className="btn" onClick={handleLogout}>Log Out</button>) : ''
        }
      </div>
    </nav>
  )
}

export default Navbar;