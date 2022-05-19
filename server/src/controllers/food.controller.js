const BaseController = require("./base.controller");
const Food = require("../models/food.model");

class FoodController extends BaseController {
  constructor() {
    super(Food);
  }
}

module.exports = new FoodController();
