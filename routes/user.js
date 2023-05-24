const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const requireAuth = require("../middleware/auth");
const Department = require("../models/department");

const userId = require("../middleware/generateUserId"); //user id
router.get("/", requireAuth, (req, res) => {
  res.send("User");
});

router.get("/add", requireAuth, async (req, res) => {
  const departments = await Department.find();
  res.render("add-user.pug", {
    page: "Add User",
    user: req.session.user,
    departments: departments,
  });
});

router.post("/add", requireAuth, async (req, res) => {
  const default_password = "123456";
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(default_password, salt);
  const user_details = req.body;
  user_details.id = userId();
  user_details.password = password;
  user_details.date_added = new Date();
  user_details.accessed = false;
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

router.get("/profile", requireAuth, (req, res) => {
  res.render("profile.pug", { page: "My Profile", user: req.session.user });
});

router.get("/newpassword", (req, res) => {
  res.render("reset-password.pug", {
    user: req.session.user,
    message: "Set new password",
    page: "My Profile",
  });
});

router.post("/newpassword", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const new_password = await bcrypt.hash(req.body.password, salt);
  const filter = { id: req.session.user.id };
  const update = { password: new_password, accessed: true };
  await User.updateOne(filter, update).then(async () => {
    const user = await User.findOne({ email: req.session.email });
    req.session.user = user;
    res.render("success.pug", {
      message: "Password set successfully",
      go_to_page: "/user/profile",
      page: "My Profile",
      user: user,
    });
  });
});
module.exports = router;
