import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="NavBrand">
      <Link className="follow" to="/">
        <h1 class="text-white">follow-ups</h1>
      </Link>
      <Link className="home" to="/">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
