const { Router } = require("express");
require("dotenv").config();
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Email should have correct format").isEmail(),
    check("password", "Your password must contain at least 8 symbols").isLength(
      {
        min: 8,
      }
    ),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Email or password are incorrect",
        });
      }
      const { email, password } = req.body;
      const newUser = await User.findOne({ email });
      if (newUser) {
        res
          .status(400)
          .json({ message: "User with this email address already exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: "User has been created" });
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong while registration attempt",
      });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Enter a valid email").normalizeEmail().isEmail(),
    check("password", "Enter a password").exists(),
  ],
  async (req, res) => {
    try {
      const error = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Email or password are incorrect",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({
          message: "User with this email address or password does not exist",
        });
      }
      const isUserMatched = await bcrypt.compare(password, user.password);
      if (!isUserMatched) {
        res.status(400).json({
          message: "User with this email address or password does not exist",
        });
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(201).json({ message: "User has been logged in" });
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong while login attempt",
      });
    }
  }
);

module.exports = router;
