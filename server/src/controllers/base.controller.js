class BaseController {
  constructor(model) {
    this.model = model;
  }

  async index(req, res) {
    try {
      const data = this.model.find({}).lean();

      return res.json({
        code: 200,
        message: "success",
        data,
      });
    } catch {
      return res.json({
        code: 400,
        message: "error",
      });
    }
  }

  async show(req, res) {}

  async store(req, res) {}

  async update(req, res) {}

  async destroy(req, res) {}
}
