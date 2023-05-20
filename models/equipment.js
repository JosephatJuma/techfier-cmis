const mongoose = require("mongoose");

const Equipment = new mongoose.Schema({
  id: { type: String },
  equipment_name: { type: String },
  department: { type: String },
  barcode: { type: String },
  description: { type: String },
  added_by: { type: String },
  date_added: { type: String },
  parts: { type: Object },
  edit_history: { type: Object },
});

module.exports = mongoose.model("equipment", Equipment);
