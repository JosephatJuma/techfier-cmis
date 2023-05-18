const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
router.get("/", (req, res) => {
  res.render("login.pug", { page: "Login" });
});

router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      res.render("login.pug", {
        message: "Wrong Password!",
        id: req.body.id,
        password: req.body.password,
      });
    } else {
      req.session.user = user;
      res.redirect("/");
    }
  } else {
    res.render("login.pug", {
      message: "No user found with email provided!",
      id: req.body.id,
      password: req.body.password,
    });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
