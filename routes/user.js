const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const requireAuth = require("../middleware/auth");

const userId = require("../middleware/generateUserId"); //user id
router.get("/", requireAuth, (req, res) => {
  res.send("User");
});

router.get("/add", requireAuth, (req, res) => {
  res.render("add-user.pug", { page: "Add User" });
});

router.post("/add", requireAuth, async (req, res) => {
  const default_password = "123456";
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(default_password, salt);
  const user_details = req.body;
  user_details.id = userId();
  user_details.password = password;
  user_details.date_added = new Date();
  const user = new User(user_details);
  await user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
module.exports = router;
