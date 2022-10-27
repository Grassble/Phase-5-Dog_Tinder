import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import '../App.css';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import App from '../App';

function Nav({ user, setUser, toggleTheme }) {

  const [fosterTitle, setFosterTitle] = useContext(Context)

  let history = useHistory()

    const navStyle = {
      color: 'white'
    }

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
      history.push('/')

    }

  
    return (
      <nav>
        <img src="https://clipartcraft.com/images/husky-clipart-transparent-3.png" alt='' className='logo'/>
        <ul className='nav-links'>
        <Context.Provider value={[fosterTitle, setFosterTitle]}>
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/tinder">
            <li>Tinder</li>
          </Link>
          <Link style={navStyle} to="/new">
            <li>Add Dog</li>
          </Link>
          <Link style={navStyle} to="/foster">
            <li>{fosterTitle ? "Employees" : "Fosters"}</li>
          </Link>
          <Link style={navStyle} to="/saves">
            <li>Saved Dogs</li>
          </Link>
        </Context.Provider>
        </ul>
        <button variant="outline" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </nav>
    );
  }
  
  export default Nav;