import React, { useContext} from "react";
import { StoriesContext } from "../../contexts/Stories";
import CategoryStory from "./CategoryStory";

const AllStories = () => {
  const { fetchData } = useContext(StoriesContext);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      {fetchData.map((item, index) => (
        <React.Fragment key={index}>
          <CategoryStory item={item}/>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllStories;
