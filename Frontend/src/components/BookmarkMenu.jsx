import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import profile from "../assets/images/avatar.png";
import { logoutUser } from "../services/authenticationServices/logout";

const BookmarkMenu = ({ SetShowMenu }) => {

   const navigate = useNavigate();
   
  const CloseMenu = () => {
    SetShowMenu((prev) => !prev);
  };

  return (
    <div className="Authenticate-Menu">
      <div
        className="Menu-Wrapper Authenticate-Menu-Wrapper"
        style={{ height: "421px" }}
      >
        <div
          className="Bookmark-Top"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p style={{ height: "50px", width: "50px" }} className="display-none">
            <img
              src={profile}
              alt="avatar"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </p>
          <p>Karuna Yadav</p>
          <button
            className="button close-btn display-none"
            onClick={CloseMenu}
            style={{ display: "inline-block", width: "auto", padding: "0" }}
          >
            <AiOutlineClose className="Menu-close-Icon" />
          </button>
        </div>
        <div className="DropDown-Btn-wrapper">
          <button className=" menu-btn button Navbar-Btn display-none">
            <Link to="add-story" className="Link-Href">
              Your Story
            </Link>
          </button>
          <button className=" menu-btn button Navbar-Btn display-none">
            <Link to="add-story" className="Link-Href">
              Add Story
            </Link>
          </button>
          <button className="Register-Btn button Navbar-Btn display-none">
            <BsFillBookmarkFill
              style={{ verticalAlign: "middle", fontSize: "1.7rem" }}
            />
            <Link to="/register" className="Link-Href">
              Bookmarks
            </Link>
          </button>
          <button
            className=" menu-btn button Navbar-Btn"
            onClick={() => {
              logoutUser().then((data) => {
                toast.success(data.message);
                localStorage.clear();
                navigate('/login');
              });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkMenu;
