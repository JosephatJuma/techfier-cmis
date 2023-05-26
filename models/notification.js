const mongoose = require("mongoose");

const Notification = new mongoose.Schema({
  user_id: { type: String },
  message: { type: String },
  is_read: { type: Boolean },
});

module.exports = mongoose.model("nofification", Notification);
