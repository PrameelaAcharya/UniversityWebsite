const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  address: String
});

module.exports = mongoose.model("Student", studentSchema);