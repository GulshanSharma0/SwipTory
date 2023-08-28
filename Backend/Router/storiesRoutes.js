const express = require("express");
const router = express.Router();
const {
  addStories,
  editStories,
  likeStories,
  filterStories,
  addBookmark,
  fetchAllStories,
  fetchBookmarkedStories,
  fetchStoriesOfUser
} = require("../Controllers/UserController/userController");
const { checkUserIsAuthenticated } = require("../Middleware/authMiddleware");

//  add stories
// router.post("/add", checkUserIsAuthenticated, addStories);
router.put("/add", checkUserIsAuthenticated, addStories);

// edit stories
router.put("/edit/:id", checkUserIsAuthenticated, editStories);

// like stories
router.put("/like/:id", checkUserIsAuthenticated, likeStories);

// filter stories
router.get("/filter", filterStories);

// add bookmark
router.post("/add-bookmark/:id", checkUserIsAuthenticated, addBookmark);

// getAuthenticated User stories
router.get('/getStoriesofuser',checkUserIsAuthenticated,fetchStoriesOfUser);

// get all stories
router.get('/getStories',fetchAllStories);

// get all bookmarkStories 
router.get('/getBookMarkedStories',checkUserIsAuthenticated,fetchBookmarkedStories);

// remove bookmart
// router.delete("/delete-bookmark/:id", checkUserIsAuthenticated, removeBookmark);

module.exports = router;
