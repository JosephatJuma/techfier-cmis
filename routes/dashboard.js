const express = require("express");
const router = express.Router();
const Equipment = require("../models/equipment");

router.get("/", async (req, res) => {
  const equipments = await Equipment.find();

  res.render("dashboard.pug", {
    page: "Dashboard",
    number_of_equipments: equipments.length,
  });
});

module.exports = router;
