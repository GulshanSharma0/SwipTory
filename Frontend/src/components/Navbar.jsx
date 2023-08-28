import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./Menu";
import logo from "../assets/images/SwipTory.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false);

  const OpenMenu = () => {
    SetShowMenu((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-Wrapper">
        <div>
          <img src={logo} alt="SwipTory" className="logo" />
        </div>
        <div className="Button-Wrapper">
          <button className="Register-Btn button Navbar-Btn">
            <Link to="/register" className="Link-Href"> Register Now</Link> 
          </button>
          <button className="SignIn-Btn button Navbar-Btn">
            <Link to="/login" className="Link-Href">Sign In</Link>
          </button>
        </div>
        <button className="Menu-Bar button" onClick={OpenMenu}>
          <AiOutlineMenu className="Menu-Bar-Icon" />
        </button>
      </div>
      {showMenu && <Menu SetShowMenu={SetShowMenu} />}
    </div>
  );
};

export default Navbar;
