const { check } = require("express-validator");

const User = require("../models/user.model");

const validateRegister = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("email").custom((value) => {
    return User.findOne({ email: value }).then((user) => {
      if (user) {
        throw new Error("E-mail already in use");
      }
    });
  }),
  check("password", "Password must be 6 or more characters").trim().isLength({
    min: 6,
  }),
  check("confirmPassword")
    .trim()
    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password;

      if (password !== confirmPassword) {
        throw new Error("Passwords must be same");
      }
    }),
];

module.exports = {
  validateRegister,
};
