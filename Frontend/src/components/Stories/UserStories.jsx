import React, { useState, useEffect } from "react";
import { fetchUserStories } from "../../services/Stories/fetchUserStories";
import StoryCardUser from "../AddStory/StoryCardUser";
import notFound from "../../assets/images/notfound.png";

const UserStories = () => {
  const [userCreatedStories, setUserCreatedStories] = useState([]);
  const [initialData, setInitialData] = useState(4);

  useEffect(() => {
    fetchUserStories()
      .then((data) => {
        setUserCreatedStories(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Your Stories</h1>
      </div>
      {userCreatedStories.length > 0 ? (
        <div style={{ margin: "1.2rem auto", width: "100%" }}>
          <div className="StoryCard-Container">
            {userCreatedStories.slice(0,initialData).map((item, index) => (
              <>
                <StoryCardUser data={item} key={index} />
              </>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
        {userCreatedStories.length > initialData ? (
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
        </div>
      ) : (
        <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
          <img
            src={notFound}
            alt="not found stories"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      )}
    </>
  );
};

export default UserStories;
