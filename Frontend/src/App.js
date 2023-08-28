import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Bookmark from "./pages/Bookmark";
import AddStory from "./components/AddStory/AddStory";
import { StoriesProvider } from "./contexts/Stories";
import ViewStory from "./pages/ViewStory";

function App() {
  return (
    <BrowserRouter>
      <StoriesProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
            <Route path="viewstory" element={<ViewStory />} />
          </Route>
          <Route path="/bookmark" element={<Bookmark />}>
            <Route path="add-story" element={<AddStory />} />
          </Route>
        </Routes>
      </StoriesProvider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
