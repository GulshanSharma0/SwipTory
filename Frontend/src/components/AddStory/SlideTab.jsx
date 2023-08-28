import React, { useRef, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { StoryContext } from "../../contexts/StoryContext";
import "../../styles/AddStory.css";

const SlideTab = () => {
  
  const component = [1, 2, 3, 4, 5, 6];
  const TOTAL_ALLOWED_STORY_SLIDE = useRef(6);
  const { totalSlide, currentSlide, setTotalSlide, slideValue } =
    useContext(StoryContext);

  return (
    <div className="Slide-Tab-Container" style={{ marginTop: "1rem" }}>
      {component.slice(0, totalSlide).map((item, index) => (
        <div
          className={
            currentSlide === index ? "Slide-Tab slide-active" : "Slide-Tab"
          }
          key={item}
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => {
            slideValue(index);
          }}
        >
          <span style={{ fontWeight: "700" }} className="slide-label">
            Slide {index + 1}
          </span>
          {totalSlide > 3 && index > 2 && (
            <button
              className="Form-Close-Button close-btn-slide"
              style={{
                height: "20px",
                width: "20px",
                position: "absolute",
                top: "2px",
                right: "3px",
              }}
              onClick={()=>{

              }}
            >
              <AiOutlineClose
                className="Outline-Close-Button close-btn-slide-icon"
                style={{ fontSize: "12px" }}
              />
            </button>
          )}
        </div>
      ))}
      {totalSlide < TOTAL_ALLOWED_STORY_SLIDE.current && (
        <div
          className="Slide-Tab"
          onClick={() => {
            setTotalSlide((prev) => prev + 1);
          }}
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontWeight: "700" }} className="slide-label">
            Add +
          </span>
        </div>
      )}
    </div>
  );
};

export default SlideTab;
