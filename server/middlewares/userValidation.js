const jwt = require("jsonwebtoken");

const userValidaion = (req, res, next) => {
  const { token } = req.params;
  let key = process.env.SECRET_KEY;
  try {
    const verification = jwt.verify(token, key);
    req.user = verification;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = { userValidaion };
