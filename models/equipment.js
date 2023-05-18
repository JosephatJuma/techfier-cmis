const mongoose = require("mongoose");

const Equipment = new mongoose.Schema({
  id: { type: String },
  equipment_name: { type: String },
  department: { type: String },
  barcode: { type: String },
  description: { type: String },
  parts: { type: Object },
});

module.exports = mongoose.model("equipment", Equipment);
