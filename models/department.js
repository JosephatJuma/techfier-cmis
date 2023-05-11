const mongoose = require("mongoose");
const Department = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = mongoose.model("department", Department);
