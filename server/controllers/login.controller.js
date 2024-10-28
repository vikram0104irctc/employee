const argon2 = require("argon2");
const { USER } = require("../models/user.model");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = USER.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    let key = process.env.SECRET_KEY;
    const token = jwt.sign({ userId: user._id, email: user.email }, key);
    return res.json({ message: "Login successful", authorization: token });
  } catch (err) {
    return res.status(500).json({ message: "Internel error" });
  }
};

module.exports = { loginUser };
