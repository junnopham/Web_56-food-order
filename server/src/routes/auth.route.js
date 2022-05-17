const { Router } = require("express");
const passport = require("passport");

const AuthController = require("../controllers/auth.controller");
const { validateMiddleware } = require("../middlewares/error.middleware");
const { validateRegister } = require("../utils/validator");

const router = Router();
const path = "/auth";

router.post(path + "/login", AuthController.login);
router.post(path + "/register", validateRegister, validateMiddleware, AuthController.register);

// router.post(path + "/logout", isLoggedIn, AuthController.logout);

module.exports = router;
