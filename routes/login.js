const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login.pug", { page: "Login" });
});

router.post("/", (req, res) => {
  res.redirect("/");
});

module.exports = router;
