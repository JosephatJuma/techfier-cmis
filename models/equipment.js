const mongoose = require("mongoose");

const Equipment = new mongoose.Schema({
  equipment_name: { type: String },
  department: { type: String },
});

module.exports = mongoose.model("equipment", Equipment);
