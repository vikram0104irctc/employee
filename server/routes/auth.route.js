const { loginUser } = require("../controllers/login.controller");
const { signupUser } = require("../controllers/signup.controller");

const authRouter = require("express").Router();

authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);

module.exports = { authRouter };
