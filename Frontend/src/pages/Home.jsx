import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterCard from "../components/FilterCard";
import AllStories from "../components/Stories/AllStories";

const Home = () => {
  return (
    <>
      <Navbar />
      <FilterCard />
      <AllStories />
      <Outlet />
    </>
  );
};

export default Home;
