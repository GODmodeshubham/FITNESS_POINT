import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="heading">Fitness Point</h1>
      <div className="middle-container">
        <Link>Home</Link>
        <Link>Membership</Link>
        <Link>Routine</Link>
        <Link>Contact</Link>
      </div>

      <div className="logins">
        <Link> Sign in</Link>
      </div>
    </div>
  );
};

export default Navbar;
