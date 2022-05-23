const BaseController = require("./base.controller");
const Review = require("../models/review.model");

class ReviewController extends BaseController {
  constructor() {
    super(Review);
  }
}

module.exports = new ReviewController();
