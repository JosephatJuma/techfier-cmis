const mongoose = require("mongoose");

const User = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  user_role: { type: String },
  department: { type: String },
  added_by: { type: String },
  email: { type: String },
  password: { type: String },
  work_station: { type: String },
  date_added: { type: Date },
  phone_number: { type: String },
  about: { type: String },
  image: { type: String },
  accessed: { type: Boolean },
  notifications: { type: Array },
});

module.exports = mongoose.model("user", User);
