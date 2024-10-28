require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { authRouter } = require("./routes/auth.route");
const { connection } = require("./config/db");
const { employeeRouter } = require("./routes/employees.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/employees", employeeRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connection;
  console.log("Database connected successfully");
});
