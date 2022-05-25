const { Router } = require("express");
const passport = require("passport");

const AuthController = require("../controllers/auth.controller");

const { validateMiddleware } = require("../middlewares/error.middleware");
const { authenticated } = require("../middlewares/auth.middleware");

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
router.get(path + "/me", authenticated, AuthController.me);
router.get(path + "/logout", authenticated, AuthController.logout);

module.exports = router;
