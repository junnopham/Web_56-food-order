const BaseController = require("./base.controller");
const Food = require("../models/food.model");
const { getPagination } = require("../utils/general");

class FoodController extends BaseController {
  constructor() {
    super(Food);
  }

  async getAll(req, res) {
    const { page, size, name } = req.query;
    const condition = name
      ? { name: { $regex: new RegExp(name), $options: "i" } }
      : {};
    const { limit, offset } = getPagination(page, size);

    try {
      const data = await Food.paginate(condition, { offset, limit });

      return res.json({
        data: data.docs,
        totalItems: data.totalDocs,
        totalPages: data.totalPages,
        currentPage: data.page,
      });
    } catch (e) {
      return res.status(500).json({
        message: e.message || "Some error occurred while retrieving data",
      });
    }
  }
}

module.exports = new FoodController();
