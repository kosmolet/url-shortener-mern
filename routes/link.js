const { Router } = require("express");
require("dotenv").config();
const { BASE_URL } = process.env;
const shortid = require("shortid");
const Link = require("../models/Link");
const auth = require("../middleware/auth.middleware");
const router = Router();

router.post("/generate", auth, async (req, res) => {
  try {
    const { from } = req.body;
    const code = shortid.generate();
    const existingLink = await Link.findOne({ from });

    if (existingLink) {
      return res.json({ link: existingLink });
    }

    const to = BASE_URL + "/t/" + code;

    const link = new Link({
      code,
      to,
      from,
      owner: req.user.userId,
    });

    await link.save();

    res.status(201).json({ link });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);
    res.json(link);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
