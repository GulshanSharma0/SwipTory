import { Outlet } from "react-router-dom";
import BookMarkNavbar from "../components/BookMarkNavbar";
import { StoryProvider } from "../contexts/StoryContext";
import FilterCard from "../components/FilterCard";
import AllStories from "../components/Stories/AllStories";
import UserStories from "../components/Stories/UserStories";

const Bookmark = () => {
  return (
    <StoryProvider>
      <BookMarkNavbar />
      <FilterCard />
      <UserStories />
      <AllStories />
      <Outlet />
    </StoryProvider>
  );
};

export default Bookmark;
