const { EMPLOYEE } = require("../models/employee.route");

const getEmployee = async (req, res) => {
  const { _id } = req.user;
  try {
    const employee = await EMPLOYEE.findById({ userId: _id });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).send(employee);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = { getEmployee };
