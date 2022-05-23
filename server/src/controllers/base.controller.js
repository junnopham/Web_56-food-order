module.exports = class BaseController {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    try {
      const data = await this.model.find({}).lean();

      return res.json({
        code: 200,
        status: "success",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        status: "error",
        message: "Error when fetch data, please try again later!",
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await this.model.findById(id).lean();

      if (!data) throw new Error("Not found");

      return res.json({
        code: 200,
        status: "success",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        status: "error",
        message: "Error when fetch data, please try again later!",
      });
    }
  }

  async create(req, res) {
    try {
    } catch {
      return res.status(400).json({
        code: 400,
        status: "error",
        message: "Error when insert data, please try again later!",
      });
    }
  }

  async update(req, res) {}

  async delete(req, res) {}
};
