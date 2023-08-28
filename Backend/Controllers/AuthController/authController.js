require("dotenv").config();
const User = require("../../Models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userAlreadyExisted = await User.findOne({ username });
    if (userAlreadyExisted) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        status: 401,
        message: `no user with ${username}`,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const { _id } = user;
      const token = jwt.sign({ _id }, secretKey, { expiresIn: "1h" });
      res.cookie("accessToken", token, {
        httpOnly: true,
        maxAge: 3600000,
        secure: false,
      });
      res.status(200).json({
        message: `${username} is logged in now`,
      });
    } else {
      res.status(401).json({ status: 401, message: "password did not match" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
  logout,
};
