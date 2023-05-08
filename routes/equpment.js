const express = require("express");
const router = express.Router();
const Equipment = require("../models/equipment");

router.get("/", async (req, res) => {
  const equipment_list = await Equipment.find();
  res.render("equipment.pug", {
    page: "All Equipment",
    equipment_list: equipment_list,
  });
});

router.get("/add", (req, res) => {
  res.render("add-equipment.pug", { page: "Add Equipment" });
});

router.post("/add", async (req, res) => {
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
