const {
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");
const { addEmployee } = require("../controllers/employee.create.controller");
const { getEmployee } = require("../controllers/employee.find.controller");
const { userValidaion } = require("../middlewares/userValidation");

const employeeRouter = require("express").Router();

employeeRouter.post("/:token", userValidaion, addEmployee);

employeeRouter.get("/:token", userValidaion, getEmployee);

employeeRouter.put("/:token/:id", userValidaion, updateEmployee);

employeeRouter.delete("/:token/:id", userValidaion, deleteEmployee);

module.exports = { employeeRouter };
