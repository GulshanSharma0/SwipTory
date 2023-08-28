import React from "react";
import { TbEdit } from "react-icons/tb";
import "../../styles/StoryCard.css";
import { useNavigate } from "react-router-dom";

const StoryCardUser = ({ data }) => {
    const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${data.imageUrl})`, position: "relative" }}
      className="StoryCard"
    >
      <div className="Story-Header-Description-Container">
        <h2 className="Story-Header">{data?.heading}</h2>
        <p className="Story-Description">{data?.description}</p>
      </div>
      <button className="Story-Edit-Button" onClick={()=>{
        navigate('add-story')
      }}> 
        <TbEdit style={{ fontSize: "1.3rem", verticalAlign: "bottom" }} />
        <span>Edit</span>
      </button>
    </div>
  );
};

export default StoryCardUser;
