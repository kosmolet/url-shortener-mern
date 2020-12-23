const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post("/register", async (req, res) => {
  try {
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
});

// /api/auth/login
router.post("/login", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong while login attempt",
    });
  }
});

module.exports = router;
