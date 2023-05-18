const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/auth");
const Department = require("../models/department");

router.get("/", requireAuth, async (req, res) => {
  const departments = await Department.find();
  res.render("department.pug", {
    page: "Department",
    user: req.session.user,
    departments: departments,
  });
});

router.post("/", requireAuth, async (req, res) => {
  const number = await Department.find();
  const id = number.length + 1;
  const new_department = { id: id, name: req.body.name };
  const department = new Department(new_department);
  await department
    .save()
    .then(() => {
      res.render("department.pug", {
        page: "Department",
        user: req.session.user,
        departments: number,
        message: "Added new department",
      });
    })
    .catch((err) => {
      res.render("department.pug", {
        page: "Department",
        user: req.session.user,
        departments: number,
        message: "An error occured!",
      });
    });
});

module.exports = router;
