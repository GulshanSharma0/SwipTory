import React,{useContext} from "react";
import "../styles/Card.css";
import food from "../assets/images/Food.png";
import { StoriesContext } from '../contexts/Stories';

const Card = ({ title}) => {
  const {category, setCategory} = useContext(StoriesContext);
  
  return (
    <div
      className = {title === category ? 'Card filter-active' :'Card border-none'}

      style={{ backgroundImage: `url(${food})` }}
      onClick={(event) => {
        setCategory(title);
        event.currentTarget.classList.toggle('filter-active');
      }}
    >
      <p className="Card-Title" style={{ textTransform: "uppercase" }}>
        {title}
      </p>
    </div>
  );
};

export default Card;
