const express = require("express");
const router = express.Router();
const Equipment = require("../models/equipment");
const Department = require("../models/department");
const requireAuth = require("../middleware/auth");
router.get("/", requireAuth, async (req, res) => {
  const equipment_list = await Equipment.find();
  res.render("equipment.pug", {
    page: "All Equipment",
    equipment_list: equipment_list,
    user: req.session.user,
  });
});

router.get("/add", requireAuth, async (req, res) => {
  const departments = await Department.find();
  res.render("add-equipment.pug", {
    page: "Add Equipment",
    user: req.session.user,
    departments: departments,
  });
});

router.post("/add", requireAuth, async (req, res) => {
  console.log(req.body);
  const equipment = new Equipment(req.body);
  await equipment
    .save()
    .then(() => {
      res.redirect(`/equipment/parts?id=${req.body.id}`);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.get("/parts", requireAuth, async (req, res) => {
  res.render("equipment-parts.pug", { page: "Parts" });
});

router.post("/parts", requireAuth, (req, res) => {
  console.log(req.params);
  res.send(req.body);
});

module.exports = router;
