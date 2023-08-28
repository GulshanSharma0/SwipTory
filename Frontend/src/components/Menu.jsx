import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Menu.css";

const Menu = ({SetShowMenu}) => {

  const CloseMenu = ()=>{
    SetShowMenu((prev)=>!prev);
  }
  return (
    <div className='Menu'>
      <div className='Menu-Wrapper'>
         <div>
          <button className='button close-btn' onClick={CloseMenu}>
            <AiOutlineClose className='Menu-close-Icon'/>
          </button>
         </div>
      <div className='DropDown-Btn-wrapper'>
           <button className=' menu-btn button Navbar-Btn'>
           <Link to="/login" className="Link-Href">Sign In</Link>
           </button>
           <button className=' menu-btn button Navbar-Btn'>
           <Link to="/register" className="Link-Href"> Register</Link> 
           </button>
        </div>
      </div>
        
    </div>
  )
}

export default Menu;