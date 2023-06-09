const express = require("express");
const router = express.Router();
const Equipment = require("../models/equipment");
const User = require("../models/user");
const requireAuth = require("../middleware/auth");
router.get("/", requireAuth, async (req, res) => {
  const equipments = await Equipment.find();
  const users = await User.find();
  res.render("dashboard.pug", {
    page: "Dashboard",
    number_of_equipments: equipments.length,
    user: req.session.user,
    users: users.length,
  });
});

module.exports = router;
