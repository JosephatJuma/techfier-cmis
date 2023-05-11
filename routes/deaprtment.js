const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/auth");

router.get("/", requireAuth, (req, res) => {
  res.render("department.pug", { page: "Department", user: req.session.user });
});

router.get("/add", requireAuth, (req, res) => {
  res.send("Add Department");
});

router.post("/add", requireAuth, (req, res) => {
  res.send(req.body);
});

module.exports = router;
