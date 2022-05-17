const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const isLoggedIn = async (req, res, next) => {
  const token = req.cookies ? req.cookies.Authorization : null;

  if (!token) throw new Error("Unauthorized");

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const {__v, ...user} = await User.findById(decoded._id).lean();
    req.user = user;
    next();
  } catch {
    res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }
};

module.exports = {
  isLoggedIn,
};
