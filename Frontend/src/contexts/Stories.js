import { createContext, useState, useEffect } from "react";
import { getAllStories } from "../services/FetchServices/storiesfetch";

export const StoriesContext = createContext();

export const StoriesProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    getAllStories(category)
      .then((data) => {
        setFetchData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <StoriesContext.Provider value={{ fetchData, category, setCategory }}>
      {children}
    </StoriesContext.Provider>
  );
};
