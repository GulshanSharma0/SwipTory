import React, { useState, useRef } from "react";
import StoryCard from "../StoryCard";

const CategoryStory = ({ item }) => {
  const [initialData, setInitialData] = useState(4);
  const currentDataLength = useRef(item.data.length);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Top Stories About {item.category}</h1>
      </div>
      <div className="StoryCard-Container" style={{ width: "100%" }}>
        <div className="StoryCard-Container">
          {item.data.slice(0, initialData).map((story, index) => (
            <>
              <StoryCard data={story} key={index} />
            </>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {currentDataLength.current > initialData ? (
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#FF7373",
              width: "136px",
              height: "45px",
              color: "#fff",
              borderRadius: "20px",
              fontSize: "18px",
            }}
            onClick={() => {
              setInitialData((prev) => prev + 4);
            }}
          >
            See more
          </button>
        ) : (
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#FF7373",
              width: "136px",
              height: "45px",
              color: "#fff",
              borderRadius: "20px",
              fontSize: "18px",
            }}
            onClick={() => {
              setInitialData(4);
            }}
          >
            Show less
          </button>
        )}
      </div>
    </>
  );
};

export default CategoryStory;
