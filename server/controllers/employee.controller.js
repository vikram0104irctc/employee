const { EMPLOYEE } = require("../models/employee.route");

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  let { firstName, lastName, email, department, salary } = req.body;
  try {
    const employee = await EMPLOYEE.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      department,
      salary,
    });
    if (!employee) {
      return res.status(404).send({
        message: "Employee not found",
      });
    }
    return res.send(employee);
  } catch (e) {
    return res.status(404).send({
      message: "Employee not found",
    });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await EMPLOYEE.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).send({
        message: "Employee not found",
      });
    }
    return res.send(employee);
  } catch (e) {
    return res.status(404).send({
      message: "Employee not found",
    });
  }
};

module.exports = { updateEmployee, deleteEmployee };
