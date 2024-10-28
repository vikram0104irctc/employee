const argon2 = require("argon2");
const { USER } = require("../models/user.model");

const signupUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    const hash = await argon2.hash(password);
    if (!hash) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const user = await USER.create({
      email,
      password: hash,
    });
    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    return res.status(500).json({ message: "Internel error" });
  }
};

module.exports = { signupUser };
