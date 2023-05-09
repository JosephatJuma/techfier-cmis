const express = require("express");
const router = express.Router();
const Equipment = require("../models/equipment");
const requireAuth = require("../middleware/auth");
router.get("/", requireAuth, async (req, res) => {
  const equipment_list = await Equipment.find();
  res.render("equipment.pug", {
    page: "All Equipment",
    equipment_list: equipment_list,
    user: req.session.user,
  });
});

router.get("/add", requireAuth, (req, res) => {
  res.render("add-equipment.pug", {
    page: "Add Equipment",
    user: req.session.user,
  });
});

router.post("/add", requireAuth, async (req, res) => {
  const equipment = await new Equipment(req.body);
  equipment
    .save()
    .then(() => {
      res.send(equipment);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = router;
