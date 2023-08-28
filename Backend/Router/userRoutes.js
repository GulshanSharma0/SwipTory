const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
} = require("../Controllers/AuthController/authController");
const { checkUserIsAuthenticated } = require("../Middleware/authMiddleware.js");

// register User
router.post("/register", register);
// authenticate User
router.post("/login", login);

// logout
router.post("/logout", checkUserIsAuthenticated, logout);

module.exports = router;
