const express = require("express");
const router = express.Router();
const Equipment = require("../models/equipment");
const Department = require("../models/department");
const requireAuth = require("../middleware/auth");

//list of equipment availbale
router.get("/", requireAuth, async (req, res) => {
  const equipment_list = await Equipment.find();
  res.render("equipment.pug", {
    page: "All Equipment",
    equipment_list: equipment_list,
    user: req.session.user,
  });
});

//add new equipment
router.get("/add", requireAuth, async (req, res) => {
  const departments = await Department.find();
  res.render("add-equipment.pug", {
    page: "Add Equipment",
    user: req.session.user,
    departments: departments,
  });
});

//post new equipment
router.post("/add", requireAuth, async (req, res) => {
  const new_equipment = req.body;
  new_equipment.added_by = req.session.user.name;
  new_equipment.date_added = new Date();
  const equipment = new Equipment(new_equipment);
  await equipment
    .save()
    .then(() => {
      res.render("success.pug", {
        go_to_page: "/equipment/details/" + equipment._id,
        equipment: equipment,
        message: "Equipmend added Successfully",
        action: "added",
      });
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.get("/api", requireAuth, async (req, res) => {
  const equipment = await Equipment.find();
  res.send(equipment);
});

//post new part
router.post("/parts/:id", requireAuth, async (req, res) => {
  let newId = 10000 + Math.floor(Math.random() * 900000);
  let part = "P" + newId;
  const filter = { _id: req.params.id };
  const update = {
    $push: {
      parts: req.body,
    },
  };
  await Equipment.updateOne(filter, update)
    .then(() => {
      res.render("success.pug", {
        go_to_page: "/equipment/details/" + req.params.id,
        message: "Part successfully added",
        action: "edited",
        user: req.session.user,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get(`/details/:id`, requireAuth, async (req, res) => {
  const departments = await Department.find();
  await Equipment.findOne({ _id: req.params.id })
    .then((equipment) => {
      res.render("equipment-details.pug", {
        equipment: equipment,
        page: `Details`,
        user: req.session.user,
        departments: departments,
      });
    })
    .catch((err) => {
      res.render("error.pug", {
        message: "Opps! Unknown error occured",
        page: "Unkown Error",
        go_to_page: "/",
        user: req.session.user,
      });
    });
});

//delete equipment
router.get("/delete/:id", requireAuth, async (req, res) => {
  await Equipment.deleteOne({ _id: req.params.id })
    .then(() => {
      res.render("success.pug", {
        go_to_page: "/equipment/",
        message: "Equipmend Deleted Successfully",
        action: "deleted",
        user: req.session.user,
      });
    })
    .catch((err) => {
      res.send("error occured!");
    });
});

//edit equipment
router.post("/edit/:id", requireAuth, async (req, res) => {
  const filter = { _id: req.params.id };
  const new_name = req.body.equipment_name;
  const new_description = req.body.description;
  const new_department = req.body.department;
  const edit_history = { date: new Date(), edited_by: req.session.user.name };
  const update = {
    $set: {
      equipment_name: new_name,
      department: new_department,
      description: new_description,
      edit_history: edit_history,
    },
  };
  await Equipment.updateOne(filter, update).then(() => {
    res.render("success.pug", {
      message: "Equipment edited successfully",
      go_to_page: "/equipment/details/" + req.params.id,
      page: "equipment",
      user: req.session.user,
      action: "edited",
      equipment_id: req.params.id,
    });
  });
});

module.exports = router;
