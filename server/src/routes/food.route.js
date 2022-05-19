const { Router } = require("express");
const passport = require("passport");

const FoodController = require("../controllers/food.controller");

const { validateMiddleware } = require("../middlewares/error.middleware");
const { isLoggedIn } = require("../middlewares/auth.middleware");

const router = Router();
const path = "/food";

router.get(path, FoodController.index);
router.get(path + "/:id", FoodController.show);

module.exports = router;
