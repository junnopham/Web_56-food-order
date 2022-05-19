module.exports = class BaseController {
  constructor(model) {
    this.model = model;
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  async index(req, res) {
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

  async show(req, res) {
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

  async store(req, res) {
    try {
      const { name, price, }
    } catch {
      return res.status(400).json({
        code: 400,
        status: "error",
        message: "Error when insert data, please try again later!",
      });
    }
  }

  async update(req, res) {}

  async destroy(req, res) {}
};
