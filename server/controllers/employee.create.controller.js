const { EMPLOYEE } = require("../models/employee.route");

const addEmployee = async (req, res) => {
  let { firstName, lastName, email, department, salary } = req.body;
  let { _id } = req.user;
  try {
    const employee = await EMPLOYEE.create({
      firstName,
      lastName,
      email,
      department,
      salary,
      userId: _id,
    });
    return res
      .status(201)
      .json({ message: "Employee added successfully", employee });
  } catch (err) {
    return res.status(500).json({ message: "Internel error" });
  }
};

module.exports = { addEmployee };
