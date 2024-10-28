const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
    enum: ["Tech", "Marketing", "Operations"],
    default: "Tech",
  },
  salary: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const EMPLOYEE = mongoose.model("Employee", employeeSchema);

module.exports = { EMPLOYEE };
