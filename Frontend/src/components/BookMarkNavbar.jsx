import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import logo from "../assets/images/SwipTory.png";
import profile from '../assets/images/avatar.png';
import "../styles/Navbar.css";
import BookmarkMenu from "./BookmarkMenu";

const BookMarkNavbar = () => {
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
        <div className="Button-Wrapper-Authenticate">
          <button className="Register-Btn button Navbar-Btn  bookNav">
            <BsFillBookmarkFill  style={{verticalAlign:'middle',fontSize:'1.7rem'}}/>
            <Link to="" className="Link-Href">
              Bookmarks
            </Link>
          </button>
          <button className="SignIn-Btn button Navbar-Btn  bookNav">
            <Link to="add-story" className="Link-Href">
              Add Story
            </Link>
          </button>
          <p style={{height:'50px',width:'50px'}} className=" bookNav">
            <img src={profile} alt='avatar' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
          </p>
          <button className="Menu-Bar button show-bar" onClick={OpenMenu}>
          <AiOutlineMenu className="Menu-Bar-Icon" />
          </button>
        </div>
      </div>
      {showMenu && <BookmarkMenu SetShowMenu={SetShowMenu} />}
    </div>
  );
};

export default BookMarkNavbar;
