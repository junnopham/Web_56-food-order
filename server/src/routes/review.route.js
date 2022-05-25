const { Router } = require("express");
const passport = require("passport");

const ReviewController = require("../controllers/review.controller");

const { validateMiddleware } = require("../middlewares/error.middleware");
const { isLoggedIn } = require("../middlewares/auth.middleware");

const router = Router();
const path = "/review";

router.post(path, ReviewController.create);
router.get(path, ReviewController.getAll);
router.get(path + "/:id", ReviewController.getOne);
router.patch(path + "/:id", ReviewController.update);
router.delete(path + "/:id", ReviewController.delete);

module.exports = router;
