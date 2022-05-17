const { Router } = require("express");
const passport = require("passport");

const AuthController = require("../controllers/auth.controller");

const { validateMiddleware } = require("../middlewares/error.middleware");
const { isLoggedIn } = require("../middlewares/auth.middleware");

const { validateLogin, validateRegister } = require("../utils/validator");

const router = Router();
const path = "/auth";

router.post(
  path + "/login",
  validateLogin,
  validateMiddleware,
  AuthController.login
);
router.post(
  path + "/register",
  validateRegister,
  validateMiddleware,
  AuthController.register
);
router.get(path + "/me", isLoggedIn, AuthController.me);
router.get(path + "/logout", isLoggedIn, AuthController.logout);

// router.post(path + "/logout", isLoggedIn, AuthController.logout);

module.exports = router;
