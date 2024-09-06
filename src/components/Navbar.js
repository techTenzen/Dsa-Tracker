import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Status from './Status';

function Navbar({ mode, setmode }) {
  const [hidden1, sethidden1] = useState("hidden");

  const handleClick = () => {
    mode === "light" ? setmode("dark") : setmode("light");
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2d3748', // Dark gray background
    padding: '10px 20px',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    color: '#f7fafc', // Light gray text
    fontSize: '20px',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '5px 10px',
    transition: 'color 0.3s, background-color 0.3s',
  };

  const linkHoverStyle = {
    color: '#63b3ed', // Teal color on hover
    backgroundColor: 'rgba(99, 179, 237, 0.1)',
    borderRadius: '5px',
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#f7fafc',
  };

  const iconTextStyle = {
    marginLeft: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/"
            style={{ ...linkStyle, ...linkHoverStyle }}
          >
            Dsa Tracker
          </Link>
        </div>
        <div
          style={iconContainerStyle}
          onClick={() => {
            sethidden1(hidden1 === "hidden" ? "visible" : "hidden");
          }}
        >
          <img
            src="bulb.png"
            alt="Hot Tip"
            style={{ width: '32px', height: '32px', marginTop: '2px' }}
          />
          <div style={iconTextStyle}>
            Hot Tip
          </div>
        </div>
      </div>
      <Status visi={hidden1} />
    </div>
  );
}

export default Navbar;
